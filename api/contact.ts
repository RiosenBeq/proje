import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

type Body = {
  source?: 'contact' | 'quote' | 'newsletter';
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  venue?: string;
  budget?: string;
  needs?: string[];
  message?: string;
};

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
    <td style="padding:8px 14px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8E8772;letter-spacing:0.14em;text-transform:uppercase;border-bottom:1px solid #E5DFD2;vertical-align:top;width:160px;">${escape(label)}</td>
    <td style="padding:8px 14px;font-family:Arial,sans-serif;font-size:14px;color:#14110C;border-bottom:1px solid #E5DFD2;line-height:1.5;">${escape(value)}</td>
  </tr>`;
}

function buildHtml(b: Body) {
  const sourceLabel = b.source === 'quote'
    ? 'Anasayfa · Teklif Formu'
    : b.source === 'newsletter'
    ? 'Bülten Aboneliği'
    : 'İletişim Sayfası';
  const needs = (b.needs ?? []).join(', ');
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#FAF8F4;font-family:Arial,sans-serif;color:#14110C;">
  <table cellpadding="0" cellspacing="0" border="0" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #E5DFD2;border-radius:14px;overflow:hidden;">
    <tr>
      <td style="padding:24px 28px;background:#14110C;color:#F5EFE0;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(245,239,224,0.6);margin-bottom:6px;">YENİ FORM TALEBİ</div>
        <div style="font-family:Georgia,'Times New Roman',serif;font-weight:300;font-size:24px;letter-spacing:-0.02em;">On Muzik Proje · ${sourceLabel}</div>
      </td>
    </tr>
    <tr><td style="padding:0;">
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
        ${row('Ad Soyad', b.name)}
        ${row('Şirket', b.company)}
        ${row('E-posta', b.email)}
        ${row('Telefon', b.phone)}
        ${row('Mekân Tipi', b.venue)}
        ${row('Bütçe', b.budget)}
        ${row('İhtiyaçlar', needs || undefined)}
        ${b.message ? `<tr>
          <td colspan="2" style="padding:14px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8E8772;letter-spacing:0.14em;text-transform:uppercase;border-bottom:1px solid #E5DFD2;">PROJE DETAYI</td>
        </tr>
        <tr>
          <td colspan="2" style="padding:14px 18px 22px;font-family:Arial,sans-serif;font-size:14px;color:#14110C;line-height:1.65;white-space:pre-wrap;">${escape(b.message)}</td>
        </tr>` : ''}
      </table>
    </td></tr>
    <tr><td style="padding:18px 28px;background:#F4F1EA;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:#8E8772;">
      ON MUZIK PROJE · OTOMATIK FORM BİLDİRİMİ
    </td></tr>
  </table>
</body></html>`;
}

function buildText(b: Body) {
  const lines: string[] = [];
  lines.push(`Yeni form talebi (${b.source === 'quote' ? 'Anasayfa · Teklif' : 'İletişim'})`);
  lines.push('');
  if (b.name)    lines.push(`Ad Soyad: ${b.name}`);
  if (b.company) lines.push(`Şirket:   ${b.company}`);
  if (b.email)   lines.push(`E-posta:  ${b.email}`);
  if (b.phone)   lines.push(`Telefon:  ${b.phone}`);
  if (b.venue)   lines.push(`Mekân:    ${b.venue}`);
  if (b.budget)  lines.push(`Bütçe:    ${b.budget}`);
  if (b.needs?.length) lines.push(`İhtiyaç:  ${b.needs.join(', ')}`);
  if (b.message) {
    lines.push('');
    lines.push('Detay:');
    lines.push(b.message);
  }
  return lines.join('\n');
}

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

  if (!name || name.length < 2) {
    res.status(400).json({ ok: false, error: 'Ad Soyad gerekli' });
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ ok: false, error: 'Geçerli bir e-posta gerekli' });
    return;
  }

  const to = process.env.CONTACT_TO_EMAIL ?? 'proje@onmuzik.com';
  const from = process.env.RESEND_FROM_EMAIL ?? 'On Muzik Proje <noreply@onmuzik.com>';
  const subject = body.source === 'quote'
    ? `Anasayfa Teklif · ${name}`
    : body.source === 'newsletter'
    ? `Bülten Aboneliği · ${email}`
    : `İletişim Talebi · ${name}`;

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
