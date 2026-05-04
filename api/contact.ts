import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

type Source = 'contact' | 'quote' | 'newsletter';

type Body = {
  source?: Source;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  venue?: string;
  budget?: string;
  needs?: string[];
  message?: string;
};

/* ============================================================ Brand tokens */
const C = {
  ink:        '#14110C',
  ink2:       '#2B2620',
  ink3:       '#5A5246',
  muted:      '#8E8772',
  bg:         '#FAF8F4',
  bg1:        '#F4F1EA',
  panel:      '#FFFFFF',
  line:       '#E5DFD2',
  line2:      '#D4CCB9',
  red:        '#E8412B',
  redSoft:    '#FBE2DD',
  gold:       '#D6A33A',
  goldSoft:   '#F4E5C2',
  stage:      '#0E0C09',
  stageFg:    '#F5EFE0',
} as const;

const F = {
  display: "Georgia, 'Times New Roman', serif",
  body:    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
  mono:    "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

/* ============================================================ Helpers */
function escape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function row(label: string, value: string | undefined) {
  if (!value) return '';
  return `<tr>
    <td style="padding:14px 22px;font-family:${F.mono};font-size:11px;color:${C.muted};letter-spacing:0.16em;text-transform:uppercase;border-bottom:1px solid ${C.line};vertical-align:top;width:160px;font-weight:500;">${escape(label)}</td>
    <td style="padding:14px 22px;font-family:${F.body};font-size:14.5px;color:${C.ink};border-bottom:1px solid ${C.line};line-height:1.55;">${escape(value)}</td>
  </tr>`;
}

function chips(values: string[] | undefined) {
  if (!values?.length) return '';
  return values.map((v) =>
    `<span style="display:inline-block;padding:5px 11px;margin:0 6px 6px 0;background:${C.redSoft};border:1px solid ${C.red};border-radius:999px;font-family:${F.mono};font-size:10.5px;letter-spacing:0.12em;text-transform:uppercase;color:${C.red};font-weight:500;">${escape(v)}</span>`
  ).join('');
}

function shellHTML({ eyebrow, title, lead, contentHTML, footerLine }: {
  eyebrow: string;
  title: string;
  lead?: string;
  contentHTML: string;
  footerLine: string;
}) {
  return `<!doctype html>
<html lang="tr"><head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${escape(title)}</title>
</head>
<body style="margin:0;padding:24px 12px;background:${C.bg};font-family:${F.body};color:${C.ink};-webkit-font-smoothing:antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="max-width:640px;width:100%;margin:0 auto;background:${C.panel};border:1px solid ${C.line};border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(20,17,12,0.06);">

    <!-- Header strip -->
    <tr>
      <td style="padding:32px 36px 28px;background:linear-gradient(135deg,${C.stage} 0%,#1F1A12 100%);color:${C.stageFg};position:relative;">
        <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(245,239,224,0.55);margin-bottom:10px;">
          <span style="display:inline-block;width:24px;height:1px;background:${C.red};vertical-align:middle;margin-right:10px;"></span>${escape(eyebrow)}
        </div>
        <div style="font-family:${F.display};font-weight:300;font-size:28px;letter-spacing:-0.02em;line-height:1.15;color:${C.stageFg};">${escape(title)}</div>
        ${lead ? `<div style="margin-top:10px;font-family:${F.body};font-size:13.5px;line-height:1.55;color:rgba(245,239,224,0.75);">${escape(lead)}</div>` : ''}
        <!-- audio motif underline -->
        <div style="margin-top:22px;height:24px;background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 24%22 preserveAspectRatio=%22none%22><path d=%22M0 12 Q 37.5 0 75 12 T 150 12 T 225 12 T 300 12 T 375 12 T 450 12 T 525 12 T 600 12%22 fill=%22none%22 stroke=%22%23E8412B%22 stroke-width=%221%22 opacity=%220.55%22/></svg>');background-size:100% 100%;background-repeat:no-repeat;"></div>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:0;">${contentHTML}</td>
    </tr>

    <!-- Footer strip -->
    <tr>
      <td style="padding:22px 36px;background:${C.bg1};border-top:1px solid ${C.line};">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="font-family:${F.mono};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${C.muted};">
              ${escape(footerLine)}
            </td>
            <td align="right" style="font-family:${F.mono};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${C.muted};">
              <a href="https://onmuzikproje.com/" style="color:${C.muted};text-decoration:none;">onmuzikproje.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Sub-footer -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="max-width:640px;margin:14px auto 0;">
    <tr>
      <td align="center" style="font-family:${F.body};font-size:11.5px;line-height:1.55;color:${C.ink3};">
        On Muzik Proje · Atatürk Mah. Ataşehir Bulvarı, 34758 Ataşehir / İstanbul ·
        <a href="tel:+908502419515" style="color:${C.ink3};text-decoration:none;">0850 241 9515</a> ·
        <a href="mailto:proje@onmuzik.com" style="color:${C.ink3};text-decoration:none;">proje@onmuzik.com</a>
      </td>
    </tr>
  </table>
</body></html>`;
}

/* ============================================================ Templates */
function tplContact(b: Body) {
  const detailsTable = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      ${row('Ad Soyad', b.name)}
      ${row('Şirket', b.company)}
      ${row('E-posta', b.email)}
      ${row('Telefon', b.phone)}
      ${row('Mekân Tipi', b.venue)}
      ${row('Bütçe', b.budget)}
    </table>`;

  const needsBlock = b.needs?.length ? `
    <div style="padding:22px 36px 6px;border-bottom:1px solid ${C.line};">
      <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};margin-bottom:14px;">İLGİLENDİĞİ DİSİPLİNLER</div>
      <div style="margin-bottom:18px;">${chips(b.needs)}</div>
    </div>` : '';

  const messageBlock = b.message ? `
    <div style="padding:24px 36px;background:${C.bg1};">
      <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};margin-bottom:12px;">PROJE DETAYI</div>
      <div style="font-family:${F.body};font-size:14.5px;line-height:1.7;color:${C.ink};white-space:pre-wrap;border-left:3px solid ${C.red};padding-left:16px;">${escape(b.message)}</div>
    </div>` : '';

  const replyCta = b.email ? `
    <div style="padding:22px 36px;border-top:1px solid ${C.line};">
      <a href="mailto:${escape(b.email)}" style="display:inline-block;background:${C.red};color:#fff;text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:12px 22px;border-radius:999px;">Cevap Yaz →</a>
      ${b.phone ? `<a href="tel:${escape(b.phone.replace(/\s+/g, ''))}" style="display:inline-block;margin-left:8px;background:transparent;border:1px solid ${C.line2};color:${C.ink};text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:11px 21px;border-radius:999px;">Telefonla Ara</a>` : ''}
    </div>` : '';

  return shellHTML({
    eyebrow: 'YENİ İLETİŞİM TALEBİ',
    title: `${b.name ?? 'İsimsiz'}, sizinle iletişime geçti`,
    lead: 'İletişim sayfasından gelen yeni bir talep. 24 saat içinde geri dönüş hedefi.',
    contentHTML: detailsTable + needsBlock + messageBlock + replyCta,
    footerLine: 'On Muzik Proje · Otomatik Form Bildirimi',
  });
}

function tplQuote(b: Body) {
  const detailsTable = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      ${row('Ad Soyad', b.name)}
      ${row('Şirket', b.company)}
      ${row('E-posta', b.email)}
      ${row('Telefon', b.phone)}
      ${row('Mekân Tipi', b.venue)}
      ${row('Bütçe Bandı', b.budget)}
    </table>`;

  const needsBlock = b.needs?.length ? `
    <div style="padding:24px 36px;background:linear-gradient(180deg,${C.goldSoft} 0%,${C.bg1} 100%);border-bottom:1px solid ${C.line};">
      <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};margin-bottom:14px;">TALEP EDİLEN HİZMETLER · ${b.needs.length} DİSİPLİN</div>
      <div>${chips(b.needs)}</div>
    </div>` : '';

  const messageBlock = b.message ? `
    <div style="padding:24px 36px;border-bottom:1px solid ${C.line};">
      <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};margin-bottom:12px;">PROJE NOTU</div>
      <div style="font-family:${F.body};font-size:14.5px;line-height:1.7;color:${C.ink};white-space:pre-wrap;border-left:3px solid ${C.gold};padding-left:16px;">${escape(b.message)}</div>
    </div>` : '';

  const meta = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td style="padding:18px 36px;background:${C.bg1};border-top:1px solid ${C.line};">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="font-family:${F.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};">SAHA KEŞFİ HEDEFİ</td>
              <td align="right" style="font-family:${F.body};font-size:13px;color:${C.ink};font-weight:500;">7 iş günü içinde</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;

  const replyCta = b.email ? `
    <div style="padding:22px 36px;">
      <a href="mailto:${escape(b.email)}?subject=${encodeURIComponent('Re: Teklif Talebiniz · On Muzik Proje')}" style="display:inline-block;background:${C.red};color:#fff;text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:12px 22px;border-radius:999px;">Teklif Hazırla →</a>
      <a href="https://onmuzikproje.com/iletisim" style="display:inline-block;margin-left:8px;background:transparent;border:1px solid ${C.line2};color:${C.ink};text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:11px 21px;border-radius:999px;">Form Sayfası</a>
    </div>` : '';

  return shellHTML({
    eyebrow: 'YENİ TEKLİF TALEBİ · ANASAYFA FORMU',
    title: `Teklif: ${b.name ?? 'İsimsiz'}${b.company ? ' · ' + b.company : ''}`,
    lead: 'Anasayfadan gelen hızlı teklif talebi. Saha keşfi ile başlanacak.',
    contentHTML: detailsTable + needsBlock + messageBlock + meta + replyCta,
    footerLine: 'On Muzik Proje · Anasayfa Teklif Formu',
  });
}

function tplNewsletter(b: Body) {
  const main = `
    <div style="padding:32px 36px;text-align:center;">
      <div style="display:inline-block;width:56px;height:56px;border-radius:999px;background:${C.redSoft};line-height:56px;font-size:28px;color:${C.red};margin-bottom:18px;">✓</div>
      <div style="font-family:${F.display};font-weight:300;font-size:22px;letter-spacing:-0.015em;color:${C.ink};margin-bottom:10px;">
        Yeni bülten aboneliği
      </div>
      <div style="font-family:${F.body};font-size:14.5px;line-height:1.65;color:${C.ink3};max-width:440px;margin:0 auto;">
        Aşağıdaki adres bültenimize abone oldu. Bir sonraki teknik rehber yayınında gönderim listesine eklenecek.
      </div>
    </div>
    <div style="padding:0 36px 28px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${C.line};border-radius:12px;overflow:hidden;background:${C.bg1};">
        <tr>
          <td style="padding:18px 22px;font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};border-bottom:1px solid ${C.line};">ABONE E-POSTA</td>
        </tr>
        <tr>
          <td style="padding:14px 22px 18px;font-family:${F.body};font-size:16px;color:${C.ink};font-weight:500;">${escape(b.email ?? '—')}</td>
        </tr>
        ${b.name ? `<tr><td style="padding:0 22px 18px;font-family:${F.body};font-size:13.5px;color:${C.ink3};">İsim: ${escape(b.name)}</td></tr>` : ''}
      </table>
    </div>
    <div style="padding:0 36px 28px;text-align:center;">
      <a href="https://onmuzikproje.com/bilgi-merkezi" style="display:inline-block;background:${C.ink};color:${C.stageFg};text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:12px 22px;border-radius:999px;">Bilgi Merkezi'ne Bak</a>
    </div>`;

  return shellHTML({
    eyebrow: 'YENİ BÜLTEN ABONELİĞİ',
    title: 'Listeye yeni bir abone eklendi',
    contentHTML: main,
    footerLine: 'On Muzik Proje · Bülten Bildirimi',
  });
}

function buildHtml(b: Body) {
  if (b.source === 'quote')      return tplQuote(b);
  if (b.source === 'newsletter') return tplNewsletter(b);
  return tplContact(b);
}

function buildText(b: Body) {
  const head = b.source === 'quote'
    ? 'YENİ TEKLİF TALEBİ · Anasayfa formu'
    : b.source === 'newsletter'
    ? 'YENİ BÜLTEN ABONELİĞİ'
    : 'YENİ İLETİŞİM TALEBİ';

  const lines: string[] = [head, '─'.repeat(50), ''];
  if (b.name)    lines.push(`Ad Soyad : ${b.name}`);
  if (b.company) lines.push(`Şirket   : ${b.company}`);
  if (b.email)   lines.push(`E-posta  : ${b.email}`);
  if (b.phone)   lines.push(`Telefon  : ${b.phone}`);
  if (b.venue)   lines.push(`Mekân    : ${b.venue}`);
  if (b.budget)  lines.push(`Bütçe    : ${b.budget}`);
  if (b.needs?.length) lines.push(`İhtiyaç  : ${b.needs.join(', ')}`);
  if (b.message) {
    lines.push('', 'Detay:', b.message);
  }
  lines.push('', '─'.repeat(50), 'On Muzik Proje · onmuzikproje.com', 'proje@onmuzik.com · 0850 241 9515');
  return lines.join('\n');
}

/* ============================================================ Recipient list */
const PRIMARY_RECIPIENT = 'proje@onmuzik.com';

function buildRecipients(): string[] {
  const set = new Set<string>([PRIMARY_RECIPIENT]);
  const env = (process.env.CONTACT_TO_EMAIL ?? '').trim();
  if (env) {
    env.split(/[;,]/).map((s) => s.trim()).filter(Boolean).forEach((e) => set.add(e));
  }
  return Array.from(set);
}

/* ============================================================ Handler */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ ok: false, error: 'RESEND_API_KEY missing on server' });
    return;
  }

  let body: Body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    res.status(400).json({ ok: false, error: 'Invalid JSON' });
    return;
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const isNewsletter = body.source === 'newsletter';

  // Newsletter only requires a valid email; contact/quote require a name too.
  if (!isNewsletter && (!name || name.length < 2)) {
    res.status(400).json({ ok: false, error: 'Ad Soyad gerekli' });
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ ok: false, error: 'Geçerli bir e-posta gerekli' });
    return;
  }

  const to = buildRecipients();
  const from = process.env.RESEND_FROM_EMAIL ?? 'On Muzik Proje <noreply@onmuzikproje.com>';
  const subject = body.source === 'quote'
    ? `[Teklif] ${name}${body.company ? ' · ' + body.company : ''}`
    : body.source === 'newsletter'
    ? `[Bülten] Yeni abone · ${email}`
    : `[İletişim] ${name}`;

  const resend = new Resend(apiKey);
  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html: buildHtml(body),
      text: buildText(body),
    });

    const errObj = (result as { error?: { name?: string; message?: string; statusCode?: number } | string | null }).error;
    if (errObj) {
      const message = typeof errObj === 'string'
        ? errObj
        : errObj.message ?? errObj.name ?? 'Bilinmeyen Resend hatası';
      console.error('[api/contact] Resend send failed', { from, to, errObj });
      res.status(502).json({ ok: false, error: `Resend: ${message}`, detail: errObj });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Bilinmeyen sunucu hatası';
    console.error('[api/contact] Unexpected error', err);
    res.status(500).json({ ok: false, error: message });
  }
}
