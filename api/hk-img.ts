import type { VercelRequest, VercelResponse } from '@vercel/node';

// Hızla Kirala görsel proxy — çoklu upstream fallback'li sağlamlaştırılmış sürüm.
//
// Sorun: api.hizlakirala.com CDN'i (1) tarayıcıdan direkt çağrıldığında ve
// (2) muhtemelen US-tabanlı Vercel edge IP'lerinden istek geldiğinde de
// "Host not in allowlist" / 403 dönüyor. Bu yüzden tek upstream'e güvenmek
// kırılgan; sırayla 4 farklı kaynak deniyoruz ve ilk başarılı sonucu istemciye
// veriyoruz.
//
// Kaynak sırası (her biri için "tarayıcı görüyormuş gibi" Referer + Origin):
//   1. api.hizlakirala.com (orijinal, en taze)
//   2. www.hizlakirala.com (aynı backend, farklı domain — bazen daha gevşek)
//   3. hizlakirala.com (TLD root)
//   4. images.weserv.nl (genel image proxy, Cloudflare üzerinde)
//
// Hepsi başarısız olursa 1x1 saydam PNG (200 OK) döner — layout bozulmasın
// diye. Layout kırmak yerine "boş kutu" tercih ediliyor.

const ALLOWED = /^[A-Za-z0-9]{16,40}\.(jpg|jpeg|png|webp|avif)$/;

// Sırayla denenecek upstream URL şablonları. `{file}` yer tutucusu dosya
// adıyla değiştirilir.
const UPSTREAMS: Array<{ url: (file: string) => string; referer: string }> = [
  // Hızla Kirala'nın Next.js sitesindeki canlı sayfa kaynağından doğrulandı:
  // gerçek görsel CDN'i `data.hizlakirala.com` — `api.hizlakirala.com` artık
  // (en azından statik medya için) kullanılmıyor ve "Host not in allowlist"
  // hatasıyla cevap veriyor.
  {
    url:     (f) => `https://data.hizlakirala.com/storage/products/gallery/${f}`,
    referer: 'https://hizlakirala.com/',
  },
  // Eski API CDN'i — bazı dosyalar hâlâ taşınmamış olabilir, yedek olarak dene.
  {
    url:     (f) => `https://api.hizlakirala.com/storage/products/gallery/${f}`,
    referer: 'https://www.hizlakirala.com/',
  },
  {
    url:     (f) => `https://www.hizlakirala.com/storage/products/gallery/${f}`,
    referer: 'https://www.hizlakirala.com/',
  },
  {
    url:     (f) => `https://hizlakirala.com/storage/products/gallery/${f}`,
    referer: 'https://hizlakirala.com/',
  },
  // images.weserv.nl bağımsız Cloudflare-tabanlı public image proxy.
  // Doğrudan upstream'ler bir IP/coğrafi nedenle erişilemezse son şans.
  {
    url:     (f) => `https://images.weserv.nl/?url=${encodeURIComponent(`data.hizlakirala.com/storage/products/gallery/${f}`)}`,
    referer: 'https://images.weserv.nl/',
  },
];

const BROWSER_HEADERS_BASE = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
  'Sec-Fetch-Dest': 'image',
  'Sec-Fetch-Mode': 'no-cors',
  'Sec-Fetch-Site': 'same-site',
  'Cache-Control': 'no-cache',
};

// 1x1 saydam PNG (en küçük geçerli PNG). Tüm upstream'ler başarısızsa layout
// kırılmasın diye yer tutucu olarak dönülüyor.
const TRANSPARENT_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  'base64'
);

type SourceResult =
  | { ok: true; index: number; status: number; buf: Buffer; contentType: string }
  | { ok: false; tried: Array<{ idx: number; status: number; err?: string }> };

async function tryUpstreams(file: string, isHead: boolean): Promise<SourceResult> {
  const tried: Array<{ idx: number; status: number; err?: string }> = [];

  for (let i = 0; i < UPSTREAMS.length; i++) {
    const src = UPSTREAMS[i];
    const url = src.url(file);
    const headers: Record<string, string> = {
      ...BROWSER_HEADERS_BASE,
      Referer: src.referer,
      Origin:  new URL(src.referer).origin,
    };

    try {
      const resp = await fetch(url, {
        method: isHead ? 'HEAD' : 'GET',
        headers,
        signal: AbortSignal.timeout(6000),
        redirect: 'follow',
      });

      if (!resp.ok) {
        tried.push({ idx: i, status: resp.status });
        continue;
      }

      const ct = resp.headers.get('content-type') ?? guessType(file);
      // Bazı CDN'ler text/html (hata sayfası) döner ama 200 verir; image değilse
      // bir sonraki kaynağa geç.
      if (!ct.startsWith('image/')) {
        tried.push({ idx: i, status: resp.status, err: `non-image: ${ct}` });
        continue;
      }

      const buf = isHead ? Buffer.alloc(0) : Buffer.from(await resp.arrayBuffer());
      return { ok: true, index: i, status: resp.status, buf, contentType: ct };
    } catch (err) {
      tried.push({ idx: i, status: 0, err: err instanceof Error ? err.message : 'fetch error' });
    }
  }

  return { ok: false, tried };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.status(405).send('Method not allowed');
    return;
  }

  const file = String(req.query.f ?? '').trim();
  if (!file || !ALLOWED.test(file)) {
    res.status(400).send('Bad file');
    return;
  }

  const result: SourceResult = await tryUpstreams(file, req.method === 'HEAD');
  const debug = req.query.debug === '1';

  if (result.ok === true) {
    if (debug) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).send(JSON.stringify(
        { ok: true, source: result.index, status: result.status, contentType: result.contentType, bytes: result.buf.length },
        null, 2,
      ));
      return;
    }
    res.setHeader('Content-Type', result.contentType);
    // 30 gün edge cache, 1 gün browser cache, 1 gün stale-while-revalidate.
    // ULID-isimli dosyalar immutable kabul edilir.
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-Hk-Source', String(result.index));
    if (req.method === 'HEAD') {
      res.status(200).end();
      return;
    }
    res.status(200).send(result.buf);
    return;
  }

  // result.ok === false buraya kadar narrow oldu.
  if (debug) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(JSON.stringify({ ok: false, tried: result.tried }, null, 2));
    return;
  }

  // Hepsi başarısız → graceful degradation: 1x1 saydam PNG. Layout bozulmasın
  // diye 200 OK; tarayıcıda kart placeholder olarak kalır. 5 dk cache (kısa,
  // upstream geri gelirse yenilenir).
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
  res.setHeader('X-Hk-Fallback', 'all-upstreams-failed');
  res.setHeader('X-Hk-Tried', result.tried.map((t) => `${t.idx}:${t.status}`).join(','));
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(TRANSPARENT_PNG);
}

function guessType(file: string): string {
  const ext = file.toLowerCase().split('.').pop();
  switch (ext) {
    case 'webp': return 'image/webp';
    case 'avif': return 'image/avif';
    case 'png':  return 'image/png';
    case 'jpg':
    case 'jpeg': return 'image/jpeg';
    default:     return 'application/octet-stream';
  }
}
