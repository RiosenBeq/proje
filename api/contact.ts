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

const PUBLIC_EMAIL = 'proje@onmuzik.com';
const PUBLIC_PHONE_DISPLAY = '0850 241 9515';
const PUBLIC_PHONE_HREF = '+908502419515';
const WHATSAPP_URL = 'https://wa.me/908502419515';

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

function chips(values: string[] | undefined, accent: 'red' | 'gold' = 'red') {
  if (!values?.length) return '';
  const bg = accent === 'gold' ? C.goldSoft : C.redSoft;
  const fg = accent === 'gold' ? C.gold : C.red;
  return values.map((v) =>
    `<span style="display:inline-block;padding:5px 11px;margin:0 6px 6px 0;background:${bg};border:1px solid ${fg};border-radius:999px;font-family:${F.mono};font-size:10.5px;letter-spacing:0.12em;text-transform:uppercase;color:${fg};font-weight:500;">${escape(v)}</span>`
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
    <tr>
      <td style="padding:32px 36px 28px;background:linear-gradient(135deg,${C.stage} 0%,#1F1A12 100%);color:${C.stageFg};position:relative;">
        <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(245,239,224,0.55);margin-bottom:10px;">
          <span style="display:inline-block;width:24px;height:1px;background:${C.red};vertical-align:middle;margin-right:10px;"></span>${escape(eyebrow)}
        </div>
        <div style="font-family:${F.display};font-weight:300;font-size:28px;letter-spacing:-0.02em;line-height:1.15;color:${C.stageFg};">${escape(title)}</div>
        ${lead ? `<div style="margin-top:10px;font-family:${F.body};font-size:13.5px;line-height:1.55;color:rgba(245,239,224,0.75);">${escape(lead)}</div>` : ''}
        <div style="margin-top:22px;height:24px;background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 24%22 preserveAspectRatio=%22none%22><path d=%22M0 12 Q 37.5 0 75 12 T 150 12 T 225 12 T 300 12 T 375 12 T 450 12 T 525 12 T 600 12%22 fill=%22none%22 stroke=%22%23E8412B%22 stroke-width=%221%22 opacity=%220.55%22/></svg>');background-size:100% 100%;background-repeat:no-repeat;"></div>
      </td>
    </tr>
    <tr><td style="padding:0;">${contentHTML}</td></tr>
    <tr>
      <td style="padding:22px 36px;background:${C.bg1};border-top:1px solid ${C.line};">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="font-family:${F.mono};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${C.muted};">${escape(footerLine)}</td>
            <td align="right" style="font-family:${F.mono};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${C.muted};">
              <a href="https://onmuzikproje.com/" style="color:${C.muted};text-decoration:none;">onmuzikproje.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="max-width:640px;margin:14px auto 0;">
    <tr>
      <td align="center" style="font-family:${F.body};font-size:11.5px;line-height:1.55;color:${C.ink3};">
        On Muzik Proje · Atatürk Mah. Ataşehir Bulvarı, 34758 Ataşehir / İstanbul ·
        <a href="tel:${PUBLIC_PHONE_HREF}" style="color:${C.ink3};text-decoration:none;">${PUBLIC_PHONE_DISPLAY}</a> ·
        <a href="mailto:${PUBLIC_EMAIL}" style="color:${C.ink3};text-decoration:none;">${PUBLIC_EMAIL}</a>
      </td>
    </tr>
  </table>
</body></html>`;
}

/* ============================================================ User confirmation templates
 *
 * These go to the person who filled in the form.  Tone: warm, professional,
 * confirms what we received, sets expectation for next step, gives them
 * direct contact channels (phone + WhatsApp) in case it's urgent.
 */

function summaryTable(b: Body) {
  return `
    <div style="padding:24px 36px;background:${C.bg1};border-top:1px solid ${C.line};border-bottom:1px solid ${C.line};">
      <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};margin-bottom:14px;">TALEBİNİZİN ÖZETİ</div>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${C.panel};border:1px solid ${C.line};border-radius:10px;overflow:hidden;">
        ${row('E-posta', b.email)}
        ${row('Telefon', b.phone)}
        ${row('Şirket', b.company)}
        ${row('Mekân Tipi', b.venue)}
        ${row('Bütçe', b.budget)}
      </table>
      ${b.needs?.length ? `<div style="margin-top:16px;">${chips(b.needs, 'red')}</div>` : ''}
      ${b.message ? `<div style="margin-top:16px;padding:14px 16px;background:${C.panel};border-left:3px solid ${C.red};border-radius:6px;font-family:${F.body};font-size:14px;line-height:1.7;color:${C.ink2};white-space:pre-wrap;">${escape(b.message)}</div>` : ''}
    </div>`;
}

function nextSteps() {
  return `
    <div style="padding:28px 36px;">
      <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};margin-bottom:18px;">SONRAKİ ADIM</div>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td valign="top" width="44" style="padding:0 16px 16px 0;">
            <div style="width:32px;height:32px;border-radius:999px;background:${C.redSoft};color:${C.red};font-family:${F.mono};font-weight:600;font-size:12px;text-align:center;line-height:32px;">01</div>
          </td>
          <td valign="top" style="padding:4px 0 16px;">
            <div style="font-family:${F.display};font-size:17px;color:${C.ink};margin-bottom:4px;">Talebiniz ekibimize iletildi</div>
            <div style="font-family:${F.body};font-size:13.5px;line-height:1.6;color:${C.ink3};">Mühendis ekibimiz proje detaylarını inceliyor.</div>
          </td>
        </tr>
        <tr>
          <td valign="top" style="padding:0 16px 16px 0;">
            <div style="width:32px;height:32px;border-radius:999px;background:${C.goldSoft};color:${C.gold};font-family:${F.mono};font-weight:600;font-size:12px;text-align:center;line-height:32px;">02</div>
          </td>
          <td valign="top" style="padding:4px 0 16px;">
            <div style="font-family:${F.display};font-size:17px;color:${C.ink};margin-bottom:4px;">24 saat içinde dönüş</div>
            <div style="font-family:${F.body};font-size:13.5px;line-height:1.6;color:${C.ink3};">Mekân tipiniz ve hedeflerinize uygun bir teknik teklif önerisiyle sizi arıyoruz.</div>
          </td>
        </tr>
        <tr>
          <td valign="top" style="padding:0 16px 0 0;">
            <div style="width:32px;height:32px;border-radius:999px;background:${C.bg1};color:${C.ink};font-family:${F.mono};font-weight:600;font-size:12px;text-align:center;line-height:32px;">03</div>
          </td>
          <td valign="top" style="padding:4px 0 0;">
            <div style="font-family:${F.display};font-size:17px;color:${C.ink};margin-bottom:4px;">Saha keşfi <span style="color:${C.red};font-style:italic;">ücretsiz</span></div>
            <div style="font-family:${F.body};font-size:13.5px;line-height:1.6;color:${C.ink3};">Mekânda ölçüm + akustik fotoğraflama. Sözleşme imzasından önce, taahhüt yok.</div>
          </td>
        </tr>
      </table>
    </div>`;
}

function urgentCta() {
  return `
    <div style="padding:0 36px 28px;">
      <div style="padding:18px 22px;background:linear-gradient(135deg,${C.stage} 0%,#1F1A12 100%);border-radius:12px;color:${C.stageFg};">
        <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(245,239,224,0.55);margin-bottom:8px;">ACİL DURUM?</div>
        <div style="font-family:${F.body};font-size:13.5px;line-height:1.55;color:rgba(245,239,224,0.85);margin-bottom:14px;">
          24 saat beklemeden bize ulaşmak isterseniz:
        </div>
        <a href="${WHATSAPP_URL}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:10px 18px;border-radius:999px;margin-right:6px;">WhatsApp</a>
        <a href="tel:${PUBLIC_PHONE_HREF}" style="display:inline-block;background:transparent;border:1px solid rgba(245,239,224,0.4);color:${C.stageFg};text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:9px 17px;border-radius:999px;">${PUBLIC_PHONE_DISPLAY}</a>
      </div>
    </div>`;
}

function tplUserContact(b: Body) {
  const intro = `
    <div style="padding:32px 36px 8px;">
      <div style="font-family:${F.display};font-weight:300;font-size:22px;line-height:1.4;color:${C.ink};letter-spacing:-0.015em;">
        ${escape(b.name ?? 'Merhaba')}, talebiniz <em style="font-style:italic;color:${C.red};">elimize ulaştı</em>.
      </div>
      <div style="margin-top:14px;font-family:${F.body};font-size:14.5px;line-height:1.7;color:${C.ink2};">
        On Muzik Proje'ye yazdığınız için teşekkür ederiz. İletişim formundan gönderdiğiniz bilgiler
        ekibimize ulaştı. En geç <strong>24 saat içinde</strong> mühendis ekibimizden biri size dönüş yapacak.
      </div>
    </div>`;
  return shellHTML({
    eyebrow: 'TALEP ALINDI · İLETİŞİM',
    title: 'Talebiniz alındı, teşekkürler.',
    lead: 'Mühendis ekibimiz proje detaylarını inceliyor.',
    contentHTML: intro + summaryTable(b) + nextSteps() + urgentCta(),
    footerLine: 'On Muzik Proje · Otomatik Onay',
  });
}

function tplUserQuote(b: Body) {
  const intro = `
    <div style="padding:32px 36px 8px;">
      <div style="font-family:${F.display};font-weight:300;font-size:22px;line-height:1.4;color:${C.ink};letter-spacing:-0.015em;">
        ${escape(b.name ?? 'Merhaba')}, teklif talebiniz <em style="font-style:italic;color:${C.gold};">kayıt altına alındı</em>.
      </div>
      <div style="margin-top:14px;font-family:${F.body};font-size:14.5px;line-height:1.7;color:${C.ink2};">
        On Muzik Proje'ye gönderdiğiniz teklif talebi için teşekkür ederiz. Mühendis ekibimiz mekân
        tipiniz, hedef metrikleriniz ve disiplinlerinizi inceleyerek <strong>7 iş günü içinde</strong> hazırlanacak teklif
        ile size dönecek.
      </div>
    </div>`;
  return shellHTML({
    eyebrow: 'TALEP ALINDI · TEKLİF',
    title: 'Teklif talebiniz alındı.',
    lead: 'Mühendis ekibimiz teknik teklifinizi hazırlıyor.',
    contentHTML: intro + summaryTable(b) + nextSteps() + urgentCta(),
    footerLine: 'On Muzik Proje · Otomatik Onay',
  });
}

function tplUserNewsletter(b: Body) {
  const main = `
    <div style="padding:36px 36px 12px;text-align:center;">
      <div style="display:inline-block;width:64px;height:64px;border-radius:999px;background:${C.redSoft};line-height:64px;font-size:32px;color:${C.red};margin-bottom:20px;">✓</div>
      <div style="font-family:${F.display};font-weight:300;font-size:24px;letter-spacing:-0.015em;color:${C.ink};margin-bottom:12px;">
        Bültenimize hoş geldiniz.
      </div>
      <div style="font-family:${F.body};font-size:14.5px;line-height:1.7;color:${C.ink2};max-width:460px;margin:0 auto;">
        ${b.email ? `<strong>${escape(b.email)}</strong> ` : ''}adresi başarıyla kaydedildi. Bir sonraki teknik
        rehber yayınlandığında ilk siz haberdar olacaksınız — RT60 ölçümünden EN 54-16 voice alarm
        yorumuna, sahadan damıtılmış makaleler.
      </div>
    </div>
    <div style="padding:24px 36px 28px;text-align:center;">
      <a href="https://onmuzikproje.com/bilgi-merkezi" style="display:inline-block;background:${C.ink};color:${C.stageFg};text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:13px 24px;border-radius:999px;margin-right:6px;">Bilgi Merkezi'ne Bak</a>
      <a href="https://onmuzikproje.com/" style="display:inline-block;background:transparent;border:1px solid ${C.line2};color:${C.ink};text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:12px 23px;border-radius:999px;">Anasayfa</a>
    </div>
    <div style="padding:0 36px 28px;font-family:${F.body};font-size:12px;line-height:1.55;color:${C.ink3};text-align:center;">
      Bültenden çıkmak isterseniz herhangi bir mailimize "çıkış" yazabilir veya
      <a href="mailto:${PUBLIC_EMAIL}?subject=Bülten%20Çıkışı" style="color:${C.ink3};">${PUBLIC_EMAIL}</a> adresine yazabilirsiniz.
    </div>`;
  return shellHTML({
    eyebrow: 'ABONELİK ONAYI · BÜLTEN',
    title: 'Hoş geldiniz, kayıt tamam.',
    contentHTML: main,
    footerLine: 'On Muzik Proje · Bülten Aboneliği',
  });
}

function buildUserHtml(b: Body) {
  if (b.source === 'quote')      return tplUserQuote(b);
  if (b.source === 'newsletter') return tplUserNewsletter(b);
  return tplUserContact(b);
}

function buildUserText(b: Body) {
  const head = b.source === 'quote'
    ? 'Teklif talebiniz alındı — On Muzik Proje'
    : b.source === 'newsletter'
    ? 'Bülten aboneliğiniz onaylandı — On Muzik Proje'
    : 'Talebiniz alındı — On Muzik Proje';
  const lines: string[] = [head, '─'.repeat(50), ''];
  if (b.source === 'newsletter') {
    lines.push(`${b.email ?? ''} adresi başarıyla bültenimize kaydedildi.`);
    lines.push('Bir sonraki teknik rehber yayınında ilk siz haberdar olacaksınız.');
  } else {
    lines.push(`Merhaba ${b.name ?? ''}, talebiniz elimize ulaştı.`);
    lines.push('Mühendis ekibimiz inceleyip 24 saat içinde size dönecek.');
    if (b.message) lines.push('', 'Bize ilettiğiniz not:', b.message);
  }
  lines.push('', '─'.repeat(50));
  lines.push('Acil durum için: 0850 241 9515 · WhatsApp: wa.me/908502419515');
  lines.push('On Muzik Proje · onmuzikproje.com');
  return lines.join('\n');
}

/* ============================================================ Internal notification
 *
 * Every form submission also sends an internal notification. bizimfutbol9@gmail.com
 * is the canonical destination (always included, hard-coded so it cannot be
 * accidentally disabled by missing env vars). CONTACT_TO_EMAIL can list extra
 * recipients (comma- or semicolon-separated).
 */
const PRIMARY_ADMIN_RECIPIENT = 'bizimfutbol9@gmail.com';

function notificationRecipients(): string[] {
  const set = new Set<string>([PRIMARY_ADMIN_RECIPIENT]);
  (process.env.CONTACT_TO_EMAIL ?? '')
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((addr) => set.add(addr));
  return Array.from(set);
}

function buildAdminText(b: Body) {
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
  if (b.message) lines.push('', 'Detay:', b.message);
  lines.push('', '─'.repeat(50), 'On Muzik Proje · onmuzikproje.com');
  return lines.join('\n');
}

function buildAdminHtml(b: Body) {
  const accent: 'red' | 'gold' = b.source === 'quote' ? 'gold' : 'red';
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
      <div style="margin-bottom:18px;">${chips(b.needs, accent)}</div>
    </div>` : '';
  const messageBlock = b.message ? `
    <div style="padding:24px 36px;background:${C.bg1};">
      <div style="font-family:${F.mono};font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};margin-bottom:12px;">PROJE DETAYI</div>
      <div style="font-family:${F.body};font-size:14.5px;line-height:1.7;color:${C.ink};white-space:pre-wrap;border-left:3px solid ${accent === 'gold' ? C.gold : C.red};padding-left:16px;">${escape(b.message)}</div>
    </div>` : '';
  const replyCta = b.email ? `
    <div style="padding:22px 36px;border-top:1px solid ${C.line};">
      <a href="mailto:${escape(b.email)}" style="display:inline-block;background:${C.red};color:#fff;text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:12px 22px;border-radius:999px;">Cevap Yaz →</a>
      ${b.phone ? `<a href="tel:${escape(b.phone.replace(/\s+/g, ''))}" style="display:inline-block;margin-left:8px;background:transparent;border:1px solid ${C.line2};color:${C.ink};text-decoration:none;font-family:${F.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;font-weight:600;padding:11px 21px;border-radius:999px;">Telefonla Ara</a>` : ''}
    </div>` : '';

  const eyebrow = b.source === 'quote'
    ? 'YENİ TEKLİF TALEBİ · ANASAYFA FORMU'
    : b.source === 'newsletter'
    ? 'YENİ BÜLTEN ABONELİĞİ'
    : 'YENİ İLETİŞİM TALEBİ';
  const title = b.source === 'newsletter'
    ? 'Listeye yeni bir abone eklendi'
    : `${b.name ?? 'İsimsiz'}${b.company ? ' · ' + b.company : ''}`;
  const lead = b.source === 'quote'
    ? 'Anasayfadan gelen hızlı teklif talebi.'
    : b.source === 'newsletter'
    ? 'Yeni bülten kaydı geldi.'
    : 'İletişim sayfasından yeni talep.';

  return shellHTML({
    eyebrow,
    title,
    lead,
    contentHTML: detailsTable + needsBlock + messageBlock + replyCta,
    footerLine: 'On Muzik Proje · İç Bildirim',
  });
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

  if (!isNewsletter && (!name || name.length < 2)) {
    res.status(400).json({ ok: false, error: 'Ad Soyad gerekli' });
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ ok: false, error: 'Geçerli bir e-posta gerekli' });
    return;
  }

  const from = process.env.RESEND_FROM_EMAIL ?? 'On Muzik Proje <noreply@onmuzikproje.com>';
  const resend = new Resend(apiKey);

  // 1. User confirmation — always send. Verified domain, no suppression issue.
  const userSubject = body.source === 'quote'
    ? 'Teklif talebiniz alındı — On Muzik Proje'
    : body.source === 'newsletter'
    ? 'Bülten aboneliğiniz onaylandı — On Muzik Proje'
    : 'Talebiniz alındı — On Muzik Proje';

  const sendUser = resend.emails.send({
    from,
    to: email,
    replyTo: PUBLIC_EMAIL,
    subject: userSubject,
    html: buildUserHtml(body),
    text: buildUserText(body),
  });

  // 2. Internal notification — only if env is set (no hard-coded recipient).
  const adminTo = notificationRecipients();
  const sendAdmin = adminTo.length
    ? resend.emails.send({
        from,
        to: adminTo,
        replyTo: email,
        subject: body.source === 'quote'
          ? `[Teklif] ${name}${body.company ? ' · ' + body.company : ''}`
          : body.source === 'newsletter'
          ? `[Bülten] Yeni abone · ${email}`
          : `[İletişim] ${name}`,
        html: buildAdminHtml(body),
        text: buildAdminText(body),
      })
    : Promise.resolve(null);

  try {
    const [userResult, adminResult] = await Promise.all([sendUser, sendAdmin]);

    const userErr = (userResult as { error?: { message?: string; name?: string } | string | null } | null)?.error;
    if (userErr) {
      const message = typeof userErr === 'string' ? userErr : userErr.message ?? userErr.name ?? 'Resend error';
      console.error('[api/contact] User confirmation failed', { to: email, userErr });
      res.status(502).json({ ok: false, error: `Resend (user): ${message}` });
      return;
    }

    if (adminResult && typeof adminResult === 'object' && 'error' in adminResult) {
      const adminErr = (adminResult as { error?: { message?: string; name?: string } | string | null }).error;
      if (adminErr) {
        // Admin-side failure is logged but doesn't fail the response — the user
        // already got their confirmation, which is the visible promise to them.
        const message = typeof adminErr === 'string' ? adminErr : adminErr.message ?? adminErr.name ?? 'Resend error';
        console.warn('[api/contact] Admin notification failed', { to: adminTo, adminErr });
      }
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Bilinmeyen sunucu hatası';
    console.error('[api/contact] Unexpected error', err);
    res.status(500).json({ ok: false, error: message });
  }
}
