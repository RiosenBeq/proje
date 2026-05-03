import { useEffect, useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const NEEDS = ['Akustik Tasarım', 'Ses Sistemi', 'Stüdyo Akustiği', 'LED / Görüntü', 'Konferans / AV', 'Anons / VA', 'Kalibrasyon', 'Bakım'];
const VENUES = ['Restoran / Bar', 'Otel / SPA', 'Sahne / Etkinlik', 'Stüdyo / Kayıt', 'Toplantı / Konferans', 'Kurumsal / AVM', 'Diğer'];
const BUDGETS = ['250.000 ₺ altı', '250–750.000 ₺', '750.000 – 2 M ₺', '2 M ₺ üstü'];

export default function Contact() {
  const [picked, setPicked] = useState<Set<string>>(new Set(['Akustik Tasarım']));
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [venue, setVenue] = useState(VENUES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const toggle = (n: string) => {
    const s = new Set(picked);
    if (s.has(n)) s.delete(n); else s.add(n);
    setPicked(s);
  };

  useEffect(() => {
    document.title = 'İletişim — On Muzik Proje';
  }, []);

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
          name, company, email, phone, venue, budget, message,
          needs: Array.from(picked),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `Sunucu hatası (${res.status})`);
      }
      setStatus('success');
      setName(''); setCompany(''); setEmail(''); setPhone(''); setMessage('');
      setPicked(new Set(['Akustik Tasarım']));
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Beklenmedik bir hata oluştu.');
    }
  }

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />İLETİŞİM · 03</span>
          <h1 className="subhero-title">Birlikte<br /><em>başlayalım</em>.</h1>
          <p className="subhero-lead">
            Mekânınızın sesini birlikte tasarlayalım. Formu doldurun; 24 saat içinde mekân tipinize uygun teknik bir teklif önerisiyle dönelim.
          </p>
        </div>
      </section>

      <section className="section quote-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            <form className="form reveal" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label>Ad Soyad</label>
                  <input type="text" placeholder="Adınız Soyadınız" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
                </div>
                <div className="field">
                  <label>Şirket / Marka</label>
                  <input type="text" placeholder="Şirket A.Ş." value={company} onChange={(e) => setCompany(e.target.value)} />
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
                  <label>Mekân Tipi</label>
                  <select value={venue} onChange={(e) => setVenue(e.target.value)}>
                    {VENUES.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label>Bütçe Aralığı</label>
                  <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                    {BUDGETS.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row full">
                <div className="field">
                  <label>İhtiyaç Duyduğunuz Disiplinler</label>
                  <div className="checks">
                    {NEEDS.map((n) => (
                      <button
                        key={n}
                        type="button"
                        className={`check${picked.has(n) ? ' on' : ''}`}
                        onClick={() => toggle(n)}
                        aria-pressed={picked.has(n)}
                      >
                        <span className="box" />{n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-row full">
                <div className="field">
                  <label>Proje Detayı</label>
                  <textarea
                    placeholder="Mekân büyüklüğü, kullanım amacı, mevcut sorunlar, hedefler..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              {status === 'success' && (
                <div className="form-msg form-msg-ok" role="status">
                  Talebiniz iletildi. 24 saat içinde sizinle iletişime geçeceğiz.
                </div>
              )}
              {status === 'error' && (
                <div className="form-msg form-msg-err" role="alert">
                  Talebiniz gönderilemedi: {errorMsg} — lütfen tekrar deneyin veya doğrudan{' '}
                  <a href="mailto:info@onmuzik.com">info@onmuzik.com</a> adresine yazın.
                </div>
              )}
              <div className="form-foot">
                <p className="micro">24 saat içinde teknik bir cevapla döneriz. Verileriniz KVKK kapsamında saklanır.</p>
                <button type="submit" className="btn btn-red" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Gönderiliyor…' : 'Talebi İlet'} <span className="arrow" />
                </button>
              </div>
            </form>

            <div className="contact-info">
              <div className="contact-card reveal">
                <h3>Merkez Ofis</h3>
                <div className="ic-row">
                  <span className="k">ADRES</span>
                  <span className="v">Atatürk Mahallesi Ataşehir Bulvarı, Ertuğrul Gazi Sokak<br />34758 Ataşehir / İstanbul, Türkiye</span>
                </div>
                <div className="ic-row">
                  <span className="k">TEL</span>
                  <span className="v"><a href="tel:+908502419515">0850 241 9515</a></span>
                </div>
                <div className="ic-row">
                  <span className="k">E-POSTA</span>
                  <span className="v"><a href="mailto:info@onmuzik.com">info@onmuzik.com</a></span>
                </div>
                <div className="ic-row">
                  <span className="k">SAAT</span>
                  <span className="v">Pzt–Cmt · 09:00 – 19:00</span>
                </div>
              </div>

              <div className="contact-card reveal" style={{ background: 'var(--ink)', color: 'var(--stage-fg)', borderColor: 'var(--ink)' }}>
                <h3 style={{ color: 'var(--stage-fg)' }}>7/24 Teknik Destek</h3>
                <p style={{ color: 'rgba(245,239,224,0.75)', fontSize: 14, lineHeight: 1.6, margin: '0 0 18px' }}>
                  Mevcut müşterilerimiz için kesintisiz teknik destek hattı aktiftir. Acil durumlarda SLA sözleşmenizdeki numarayı kullanınız.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(232,65,43,0.18)', border: '1px solid rgba(232,65,43,0.35)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', boxShadow: '0 0 0 4px rgba(232,65,43,0.25)', animation: 'pulse 1.6s ease-in-out infinite' }} />
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--stage-fg)' }}>SLA · &lt; 2 saat yanıt</span>
                </div>
              </div>

              <div className="contact-card reveal">
                <h3>Saha Keşfi</h3>
                <p style={{ color: 'var(--ink-3)', fontSize: 14, lineHeight: 1.6, margin: '0 0 14px' }}>
                  İlk saha keşfi <strong>ücretsizdir</strong>. Mekânınızı ziyaret eder, ölçümlerini alır ve teknik teklifi 5–7 gün içinde teslim ederiz.
                </p>
                <a href="tel:+908502419515" className="btn btn-red">Hemen Ara <span className="arrow" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
