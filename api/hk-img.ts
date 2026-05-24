import type { VercelRequest, VercelResponse } from '@vercel/node';

// Hızla Kirala'nın görsel CDN'i (api.hizlakirala.com) doğrudan hot-link'leri
// "Host not in allowlist" hatasıyla reddediyor. Tarayıcı, onmuzikproje.com'dan
// görseli istediğinde 403 alıyor ve kart placeholder olarak görünüyor.
//
// Çözüm: Vercel'in sunucusu üzerinden istek yap, tarayıcı başlıklarını taklit
// et, başarılı yanıtı uzun süreli cache header'ı ile geri ilet. URL formatı:
//
//   /api/hk-img?f=01KKH2M0E907VV6SFN50PGQ270.jpg
//
// Görseller hâlâ Hızla Kirala CDN'inden çekilmiş oluyor; sadece son-kullanıcı
// için origin değişiyor.

const UPSTREAM_BASE = 'https://api.hizlakirala.com/storage/products/gallery/';

// ULID isim formatına izin ver (26 char base32) + bilinen image uzantıları.
// Daha esnek olmak için 20-32 karakter aralığı, harf + rakam.
const ALLOWED = /^[A-Za-z0-9]{16,40}\.(jpg|jpeg|png|webp|avif)$/;

const BROWSER_HEADERS: HeadersInit = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
  'Referer': 'https://www.hizlakirala.com/',
  'Origin': 'https://www.hizlakirala.com',
  'Sec-Fetch-Dest': 'image',
  'Sec-Fetch-Mode': 'no-cors',
  'Sec-Fetch-Site': 'same-site',
  'Cache-Control': 'no-cache',
};

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

  try {
    const upstream = await fetch(UPSTREAM_BASE + file, {
      method: req.method === 'HEAD' ? 'HEAD' : 'GET',
      headers: BROWSER_HEADERS,
      // 8 saniye sonra kes - aksi halde edge function süresi boşa harcanır.
      signal: AbortSignal.timeout(8000),
    });

    if (!upstream.ok) {
      res.setHeader('Cache-Control', 'public, max-age=60');
      res.status(upstream.status).send(`Upstream ${upstream.status}`);
      return;
    }

    const contentType = upstream.headers.get('content-type') ?? guessType(file);
    res.setHeader('Content-Type', contentType);
    // Tarayıcıda 1 gün, Vercel edge'de 30 gün önbellek - resimler immutable
    // (ULID isimle hash'leniyor, içerik değişmez).
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'HEAD') {
      res.status(200).end();
      return;
    }

    const buf = Buffer.from(await upstream.arrayBuffer());
    res.status(200).send(buf);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Proxy error';
    res.status(502).send(`Proxy error: ${msg}`);
  }
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
