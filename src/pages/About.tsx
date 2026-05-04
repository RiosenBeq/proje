import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';

const TIMELINE: Array<[year: string, title: string, body: string]> = [
  ['2009', 'Kuruluş', 'On Muzik Proje, İstanbul\'da küçük restoran ses sistemi entegrasyonlarıyla yola çıktı. Marka bağımsız mühendislik ilkesi ilk günden temel ilke oldu.'],
  ['2014', 'İlk büyük otel projesi', 'Antalya\'da 800 kişilik ballroom + lobi + 24 oda zon yönetimi teslimi — şirketin EN 54-16 voice alarm portföyü bu projeyle başladı.'],
  ['2018', 'LED entegrasyonu', 'Pixel pitch + processor + AV-sync mimarisi ana hizmet portföyüne eklendi. Kontrol odaları ve sahne ekranları için P1.5–P3.9 spektrumu kapsandı.'],
  ['2022', '100. proje teslimi', 'Türkiye genelinde 81 ilde proje teslim eden ekip, 100. anahtar teslim teslimini gerçekleştirdi.'],
  ['2026', 'Bugün', '240+ tamamlanmış proje, 6 disiplinde aktif teslim, Dolby Atmos sertifikalı stüdyo entegrasyonları, AI destekli akustik analiz araştırma altyapısı.'],
];

const STATS: Array<[string, string]> = [
  ['240+', 'Tamamlanan Proje'],
  ['16+', 'Yıl Mühendislik'],
  ['81', 'İl Saha Teslimi'],
  ['6', 'Disiplin'],
];

const VALUES: Array<[string, string]> = [
  ['Marka bağımsız', 'Projeye en uygun ürünü seçeriz; satıcı olduğumuz tek bir markanın listesinden değil.'],
  ['Ölçüme dayalı', 'Hiçbir teslim ölçüm raporu olmadan kapanmaz. Hedef-fiili karşılaştırma her projede dokümantedir.'],
  ['Şeffaflık', 'Bütçe aralığı, süre, sınırlar açıkça paylaşılır. Sürpriz fatura yok.'],
];

export default function About() {
  useSeo({
    title: 'Hakkımızda — 2009\'dan beri Akustik & Ses Mühendisliği | On Muzik Proje',
    description: '2009\'dan beri İstanbul merkezli akustik ve ses mühendisliği. 240+ proje, 81 il, 6 disiplin. Marka bağımsız, ölçüme dayalı, şeffaf mühendislik.',
    path: '/hakkimizda',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url: 'https://onmuzik.com/hakkimizda',
      mainEntity: { '@id': 'https://onmuzik.com/#org' },
    },
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />HAKKIMIZDA · 2009'DAN BERİ</span>
          <h1 className="subhero-title">
            Sesi <em>mühendislikle</em><br />tasarlıyoruz.
          </h1>
          <p className="subhero-lead">
            On Muzik Proje, 2009'dan beri Türkiye'nin en prestijli restoran, otel, sahne, stüdyo ve konferans
            mekânları için akustik tasarım ve ses sistemi mühendisliği teslim ediyor. 240+ tamamlanmış proje,
            6 disiplinde marka bağımsız teslim.
          </p>
        </div>
      </section>

      {/* Sayısal başarılar */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hero-stat-strip" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {STATS.map(([num, lbl]) => (
              <div key={lbl} className="hero-stat">
                <div className="num"><em>{num}</em></div>
                <div className="lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto / Değerler */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />01 · MANİFESTO</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>
                Ses fiziğini <em>mühendislik</em><br />disipliniyle harmanlıyoruz.
              </h2>
            </div>
            <div className="right">
              Her projeye yaklaşımımız üç temel ilkeye dayanıyor: marka bağımsız ürün seçimi, kalibre ölçüme
              dayalı teslim ve şeffaf süreç yönetimi. Bunlar pazarlama sloganları değil — operasyonel kurallar.
            </div>
          </div>
          <div className="standards-grid reveal">
            {VALUES.map((v, i) => (
              <div key={v[0]} className="standard">
                <div className="s-num">0{i + 1}</div>
                <h4>{v[0]}</h4>
                <p>{v[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarihçe */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · TARİHÇE</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>16 yıllık<br /><em>saha defteri</em>.</h2>
            </div>
            <div className="right">
              Kuruluştan bugüne dönüm noktaları — her satır bir mühendislik kararının izi.
            </div>
          </div>
          <div className="reveal">
            {TIMELINE.map(([year, title, body]) => (
              <div key={year} className="qp-row" style={{ gridTemplateColumns: '90px 1fr', padding: '22px 0' }}>
                <div className="qn" style={{ fontSize: 14, fontFamily: 'var(--f-display)', color: 'var(--red)' }}>{year}</div>
                <div>
                  <div className="qt" style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(18px, 1.6vw, 22px)', fontWeight: 400, letterSpacing: '-0.015em' }}>{title}</div>
                  <div className="qd" style={{ marginTop: 8, fontFamily: 'var(--f-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-3)', textTransform: 'none', letterSpacing: 0 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasyon */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />03 · LOKASYON</span>
              <h2 className="h-section indigo" style={{ marginTop: 18 }}>İstanbul,<br /><em>Ataşehir</em>.</h2>
            </div>
            <div className="right">
              Merkez ofisimiz Ataşehir'de. Saha keşfi için Türkiye genelinde mobilizasyon, anahtar teslim için
              ulusal lojistik ağı.
            </div>
          </div>
          <div className="contact-grid reveal">
            <div className="contact-card">
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
            <div className="contact-card" style={{ background: 'var(--ink)', color: 'var(--stage-fg)', borderColor: 'var(--ink)' }}>
              <h3 style={{ color: 'var(--stage-fg)' }}>Ekipman Lab</h3>
              <p style={{ color: 'rgba(245,239,224,0.78)', fontSize: 14, lineHeight: 1.65, margin: '0 0 18px' }}>
                Saha öncesi ölçüm ekipmanlarımızın kalibrasyonu, sistem prototipi ve simülasyon (EASE / SMAART /
                MAPP / Soundvision) çalışmaları merkezde tutulur. Misafirlerimizi ön rezervasyon ile ekipman
                lab\'a davet ederiz.
              </p>
              <Link to="/iletisim" className="btn btn-on-stage">Lab\'a Rezervasyon <span className="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="vision-banner reveal">
            <span className="vb-year" aria-hidden>2026</span>
            <div className="vb-content">
              <span className="eyebrow" style={{ color: 'rgba(245,239,224,0.6)' }}>
                <span className="bar" style={{ background: 'rgba(245,239,224,0.4)' }} />SİZİNLE ÇALIŞALIM
              </span>
              <h2 className="h-section" style={{ color: 'var(--stage-fg)', marginTop: 18 }}>
                Mühendislik tarafında <em style={{ color: 'var(--gold-2)' }}>buradayız</em>.
              </h2>
              <p>Saha keşfi ücretsizdir. 24 saat içinde teknik bir cevapla döneriz.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/iletisim" className="btn btn-on-stage">Keşif Talep Et <span className="arrow" /></Link>
                <Link to="/portfolyo" className="btn btn-ghost-stage">Projeleri Gör <span className="arrow" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
