import { Link } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { useSeo } from '../lib/seo';

type Status = 'idle' | 'sending' | 'success' | 'error';

const SLA_TIERS = [
  {
    name: 'Standart',
    price: 'Yıllık 1 ziyaret',
    cls: 'olive',
    response: 'Çalışma günü · 24 saat',
    perks: [
      'Yıllık 1 saha bakım ziyareti',
      'DSP yedeği + sistem dokümantasyonu',
      'Telefon + e-posta destek',
      'Yedek parça öncelik liste',
    ],
  },
  {
    name: 'Premium',
    price: 'Yıllık 4 ziyaret',
    cls: 'gold',
    response: '24/7 · 4 saat içinde',
    perks: [
      '4 × üç ayda bir saha bakım',
      'Uzaktan izleme (Q-SYS Reflect / Crestron Fusion)',
      'STI / RT60 yıllık doğrulama ölçümü',
      '24/7 telefon + WhatsApp destek',
      'Yedek amfi loaner programı',
    ],
  },
  {
    name: '7/24 Mission Critical',
    price: 'Sınırsız müdahale',
    cls: 'red',
    response: '7/24 · 2 saat içinde saha',
    perks: [
      'Sınırsız saha müdahale',
      'On-site spare ekipman havuzu',
      'Kalibre B&K mikrofonla 6 aylık STI ölçüm',
      'Yangın paneli + BMS entegrasyon canlı izleme',
      'EN 54-16 yıllık sertifika yenileme',
      'Dedicated mühendis (named contact)',
    ],
  },
];

const WHATSAPP = 'https://wa.me/908502419515?text=Merhaba%2C%20servis%20%2F%20bak%C4%B1m%20talebi%20i%C3%A7in%20yaz%C4%B1yorum.';

export default function Service() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [system, setSystem] = useState('');
  const [issue, setIssue] = useState('');
  const [tier, setTier] = useState('Premium');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useSeo({
    title: 'Servis & Bakım — SLA, 7/24 Destek, WhatsApp Hattı | On Muzik Proje',
    description: 'Standart, Premium ve 7/24 Mission Critical SLA seviyeleri. Uzaktan izleme, EN 54-16 sertifika yenileme, on-site spare ekipman. 0850 241 9515 ve WhatsApp hattı.',
    path: '/servis-bakim',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Servis & Bakım',
      description: 'AV ses, akustik, LED ve voice alarm sistemlerinin SLA destekli bakım, uzaktan izleme ve acil müdahale hizmeti.',
      provider: { '@id': 'https://onmuzikproje.com/#business' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      url: 'https://onmuzikproje.com/servis-bakim',
      offers: SLA_TIERS.map((t) => ({
        '@type': 'Offer',
        name: `${t.name} SLA`,
        description: `${t.price} — ${t.response}`,
      })),
    },
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'contact',
          name,
          company,
          email,
          phone,
          venue: `Servis · ${tier} SLA`,
          budget: system,
          message: issue,
          needs: ['Servis & Bakım'],
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `Sunucu hatası (${res.status})`);
      setStatus('success');
      setName(''); setCompany(''); setEmail(''); setPhone(''); setSystem(''); setIssue('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Beklenmedik bir hata oluştu.');
    }
  }

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />SERVİS & BAKIM · SLA</span>
          <h1 className="subhero-title">Sistem <em>çalıştığında</em><br />arkasında dururuz.</h1>
          <p className="subhero-lead">
            Kurulum bitince proje bitmez. Standart yıllık bakımdan EN 54-16 yıllık sertifika yenileme dahil
            7/24 mission-critical SLA'ya kadar üç seviyeli destek. Telefon, e-posta ve WhatsApp hattı aktif.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-red">WhatsApp Destek <span className="arrow" /></a>
            <a href="tel:+908502419515" className="btn btn-ghost">0850 241 9515 <span className="arrow" /></a>
          </div>
        </div>
      </section>

      {/* SLA Tiers */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />01 · SLA SEVİYELERİ</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Üç farklı <em>destek</em> kademe.</h2>
            </div>
            <div className="right">
              Mekân tipi, sistemin kritik düzeyi ve mevzuat zorunluluğuna göre üç SLA seviyemiz var.
              EN 54-16 voice alarm zorunlu yapılarda 7/24 önerilir.
            </div>
          </div>
          <div className="paths reveal">
            {SLA_TIERS.map((t, i) => (
              <article
                key={t.name}
                className="path"
                style={{
                  ['--c' as any]: `var(--${t.cls})`,
                  ['--cs' as any]: `var(--${t.cls}-soft)`,
                  ['--cl' as any]: `var(--${t.cls}-line)`,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span className="p-tag">{t.price.toUpperCase()}</span>
                <h4 style={{ marginTop: 22 }}>{t.name}</h4>
                <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>YANIT · {t.response}</p>
                <ul className="p-list" style={{ gridTemplateColumns: '1fr' }}>
                  {t.perks.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="p-foot">
                  <span className="p-link">Bu seviyeyi seç <span className="arrow" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Servis talep formu */}
      <section className="section quote-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · SERVİS TALEBİ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Bir <em>arıza</em> mı,<br />bir <em>kontrat</em> mı?</h2>
            </div>
            <div className="right">
              Mevcut müşteriler için acil müdahale, yeni müşteriler için bakım kontratı talep formu. 24 saat içinde ön görüşme.
            </div>
          </div>
          <div className="contact-grid reveal">
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label>Ad Soyad</label>
                  <input type="text" placeholder="Adınız Soyadınız" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
                </div>
                <div className="field">
                  <label>Şirket / Mekân</label>
                  <input type="text" placeholder="Mekân / Şirket adı" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>E-posta</label>
                  <input type="email" placeholder="ornek@ornek.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="field">
                  <label>Telefon</label>
                  <input type="tel" placeholder="+90 ..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>SLA Seviyesi</label>
                  <select value={tier} onChange={(e) => setTier(e.target.value)}>
                    {SLA_TIERS.map((t) => <option key={t.name} value={t.name}>{t.name}</option>)}
                    <option value="Acil müdahale (mevcut müşteri)">Acil müdahale (mevcut müşteri)</option>
                  </select>
                </div>
                <div className="field">
                  <label>Mevcut Sistem</label>
                  <input type="text" placeholder="Örn: Q-SYS + Bose Pro 4 zon Dante" value={system} onChange={(e) => setSystem(e.target.value)} />
                </div>
              </div>
              <div className="form-row full">
                <div className="field">
                  <label>Sorun / Talep Detayı</label>
                  <textarea
                    placeholder="Mevcut sorun, son ölçüm tarihi, görsel/ses kaydı varsa not edin..."
                    rows={5}
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                  />
                </div>
              </div>
              {status === 'success' && (
                <div className="form-msg form-msg-ok" role="status">
                  Servis talebiniz iletildi. SLA seviyenize göre yanıt vereceğiz — 7/24 müşteri olduğunuzu belirtirseniz acil müdahale önceliği uygulanır.
                </div>
              )}
              {status === 'error' && (
                <div className="form-msg form-msg-err" role="alert">
                  Talep gönderilemedi: {errorMsg} — lütfen tekrar deneyin veya doğrudan{' '}
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a> üzerinden yazın.
                </div>
              )}
              <div className="form-foot">
                <p className="micro">7/24 müşteri iseniz SLA dosyanızdaki numaradan arayın — yanıt 2 saat.</p>
                <button type="submit" className="btn btn-red" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Gönderiliyor…' : 'Servis Talep Et'} <span className="arrow" />
                </button>
              </div>
            </form>

            <div className="contact-info">
              <div className="contact-card" style={{ background: 'var(--ink)', color: 'var(--stage-fg)', borderColor: 'var(--ink)' }}>
                <h3 style={{ color: 'var(--stage-fg)' }}>WhatsApp Hattı</h3>
                <p style={{ color: 'rgba(245,239,224,0.78)', fontSize: 14, lineHeight: 1.65, margin: '0 0 18px' }}>
                  Saha mühendisimize doğrudan ulaşın — fotoğraf, ses kaydı veya video paylaşabilirsiniz. Mevcut sistem audit'i için en hızlı kanal.
                </p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-on-stage">Sohbeti Aç <span className="arrow" /></a>
              </div>

              <div className="contact-card">
                <h3>Direkt Hat</h3>
                <div className="ic-row">
                  <span className="k">TEL</span>
                  <span className="v"><a href="tel:+908502419515">0850 241 9515</a></span>
                </div>
                <div className="ic-row">
                  <span className="k">E-POSTA</span>
                  <span className="v"><a href="mailto:proje@onmuzik.com">proje@onmuzik.com</a></span>
                </div>
                <div className="ic-row">
                  <span className="k">SAAT</span>
                  <span className="v">Pzt–Cmt · 09:00 – 19:00<br />7/24 SLA müşterileri için kesintisiz</span>
                </div>
              </div>

              <div className="contact-card">
                <h3>Bakım Kapsamı</h3>
                <ul className="p-list" style={{ gridTemplateColumns: '1fr', margin: 0 }}>
                  <li>Sistem audit + dokümantasyon yenileme</li>
                  <li>DSP yedeği + parametre arşivi</li>
                  <li>STI / RT60 yıllık doğrulama ölçümü</li>
                  <li>EN 54-16 sertifika yenileme</li>
                  <li>Yedek parça depo + loaner program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-ghost">Yeni proje teklifi <span className="arrow" /></Link>
            <Link to="/sertifikalar" className="btn btn-ghost">Sertifikalarımız <span className="arrow" /></Link>
            <Link to="/sss" className="btn btn-ghost">SSS <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
