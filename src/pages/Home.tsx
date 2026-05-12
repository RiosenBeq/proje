import { Link } from 'react-router-dom';
import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import { useCountUp, useMagnetic } from '../lib/hooks';
import { useSeo } from '../lib/seo';
import { REFERENCES, TESTIMONIALS, type DisciplineCls as ContentDiscCls } from '../lib/content';
import Img from '../components/Img';

const ACCENT_BY_CLS: Record<ContentDiscCls, string> = {
  red: 'var(--red)', gold: 'var(--gold)', indigo: 'var(--indigo)',
  teal: 'var(--teal)', plum: 'var(--plum)', olive: 'var(--olive)',
};

function StatCount({ end, prefix = '', suffix = '' }: { end: number; prefix?: string; suffix?: string }) {
  const { ref, value } = useCountUp(end);
  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}

const ImgFade = Img;

/* ===== Hero Vinyl SVG (logo style) ===== */
function HeroVinyl() {
  return (
    <svg className="hv-vinyl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <clipPath id="discClip">
          <circle cx="100" cy="100" r="88" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="94" fill="rgba(232,65,43,0.08)" />
      <circle cx="100" cy="100" r="88" className="hv-v-outer" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(0,0,0,0.10)" strokeWidth="0.6" />

      <g className="hv-v-spin" clipPath="url(#discClip)">
        {[80, 72, 64, 56, 48, 40, 32].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
        ))}
        <path d="M 60 56 A 36 36 0 0 1 96 44" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M 50 70 A 38 38 0 0 1 80 50" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" opacity="0.85" />
        <path d="M 44 86 A 38 38 0 0 1 66 60" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
        <path d="M 50 130 A 30 30 0 0 0 70 146" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="100" cy="100" r="24" fill="#fff" />
        <circle cx="100" cy="100" r="24" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="4.5" fill="#E8412B" />
      </g>

      <g className="hv-v-pickup">
        <line x1="160" y1="48" x2="120" y2="118" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="162" cy="46" r="3.5" fill="#fff" />
        <circle cx="162" cy="46" r="1.5" fill="#E8412B" />
        <rect x="114" y="113" width="12" height="10" rx="1.5" fill="#fff" transform="rotate(-30 120 118)" />
        <circle cx="118" cy="120" r="1.5" fill="#E8412B" />
      </g>
    </svg>
  );
}

/* ===== Hero ===== */
function Hero() {
  const ctaPrimary = useMagnetic<HTMLAnchorElement>(0.18);
  const ctaGhost = useMagnetic<HTMLAnchorElement>(0.14);
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="hero-mark">
            <span className="live">CANLI ÖLÇÜM</span>
            <span>·</span>
            <span>İSTANBUL · 2009'DAN BERİ</span>
          </div>
          <h1 className="hero-h1">
            <span className="word"><span>Mekânınızın</span></span>
            <span className="word"><span>sesini</span></span>
            <br />
            <span className="word"><span><em>mühendislikle</em></span></span>
            <span className="word"><span>tasarlıyoruz.</span></span>
          </h1>
          <p className="hero-sub">
            Restoran, otel, sahne, stüdyo ve konferans için <b>ölçüme dayalı akustik tasarım</b>, profesyonel ses sistemleri ve LED görüntü mimarisi. Marka bağımsız, mühendislik odaklı.
          </p>
          <div className="hero-cta">
            <Link to="/iletisim" ref={ctaPrimary} className="btn btn-red magnetic">Ücretsiz Keşif Talep Et <span className="arrow" /></Link>
            <Link to="/portfolyo" ref={ctaGhost} className="btn btn-ghost magnetic">Projeleri İncele <span className="arrow" /></Link>
          </div>
          <div className="hero-stat-strip">
            <div className="hero-stat">
              <div className="num"><StatCount end={240} suffix="" /><small>+</small></div>
              <div className="lbl">Tamamlanan Proje</div>
            </div>
            <div className="hero-stat">
              <div className="num"><em><StatCount end={16} /></em><small>yıl</small></div>
              <div className="lbl">Mühendislik Tecrübesi</div>
            </div>
            <div className="hero-stat">
              <div className="num">RT60 <em>0.<StatCount end={6} /></em><small>s</small></div>
              <div className="lbl">Ortalama Hedef Süre</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hv-stage">
            <span className="hv-grid" aria-hidden />
            <span className="hv-ring r1" aria-hidden />
            <span className="hv-ring r2" aria-hidden />
            <span className="hv-ring r3" aria-hidden />
            <HeroVinyl />
            <span className="hv-axis-x" aria-hidden />
            <span className="hv-axis-y" aria-hidden />
            <span className="hv-corner tl"><i className="dot-r" />SİDE A</span>
            <span className="hv-corner tr">33⅓ RPM</span>
            <span className="hv-corner bl">RT60 / STI · LIVE</span>
            <span className="hv-corner br">REC</span>
          </div>
          <div className="hv-card hv-rt">
            <small>RT60 ÖLÇÜM</small>
            <b>0.42<em>s</em></b>
            <span className="bars">
              <i style={{ height: '40%' }} /><i style={{ height: '70%' }} />
              <i style={{ height: '55%' }} /><i style={{ height: '85%' }} />
              <i style={{ height: '45%' }} />
            </span>
          </div>
          <div className="hv-card hv-bpm">
            <span className="dot" />
            <div>
              <b>92<small>BPM</small></b>
              <small className="lbl">Live · Beat Sync</small>
            </div>
          </div>
          <div className="hv-card hv-spl">
            <small>SPL · 1 kHz</small>
            <b>82<em>dB</em></b>
            <span className="meter"><i /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Marquee (text) ===== */
function Marquee() {
  const items = [
    'AKUSTİK TASARIM', 'SES SİSTEMİ', 'LED EKRAN', 'STÜDYO MİMARİSİ',
    'KONFERANS / AV', 'ANONS / VOICE ALARM', 'RT60 ÖLÇÜM', 'STI HEDEF',
    'DSP KALİBRASYON', 'DANTE NETWORK', 'PIXEL PITCH',
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].flatMap((k) => items.map((it, i) => (
          <span key={`${k}-${i}`} className="pill">{it}<em>★</em></span>
        )))}
      </div>
    </div>
  );
}

/* ===== Photo Marquee gallery ===== */
const PHOTO_GALLERY: Array<{ src: string; alt: string; lbl: string }> = [
  { src: '/assets/projects/kocaeli-sanayi-odasi/01-stage-wide.jpg', alt: 'Kocaeli Sanayi Odası ana konferans salonu - LED arka plan ve Pioneer Pro Audio cluster', lbl: 'KSO · Konferans' },
  { src: '/assets/projects/kocaeli-sanayi-odasi/03-stage-night.jpg', alt: 'Kocaeli Sanayi Odası - gece aydınlatması, LED sahne ve step LED',                       lbl: 'KSO · Gece' },
  { src: '/assets/projects/kocaeli-sanayi-odasi/04-pioneer-cluster.jpg', alt: 'Pioneer Pro Audio XY-3B cluster yakın plan montaj',                                  lbl: 'Pioneer · Cluster' },
  { src: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Vinyl duvar ve ses kurulum detayları',           lbl: 'Vinyl · Duvar' },
  { src: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1200',   alt: 'Tavan montaj beyaz hoparlör kurulumu',           lbl: 'Tavan · Montaj' },
  { src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'DJ booth ses kurulumu',                          lbl: 'DJ · Booth' },
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',       alt: 'Restoran ses sistemi ortam',                     lbl: 'Restoran · Sahne' },
  { src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80',       alt: 'Vinil koleksiyon duvarı ve hoparlör sistemi',    lbl: 'Vinyl · Wall' },
];

function PhotoMarquee() {
  return (
    <section className="photo-marquee" aria-label="Saha görsel arşivi">
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: 8 }}>
          <div className="left">
            <span className="eyebrow"><span className="bar" />SAHA · GÖRSEL ARŞİV</span>
            <h2 className="h-section gold" style={{ marginTop: 18, fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Tasarımdan<br /><em>sahaya</em>.
            </h2>
          </div>
          <div className="right">
            Mekânların akustik karakterini dönüştürdüğümüz uygulamalardan seçilen kareler. Galeri sürekli akış halinde yeni referans projeleri sergiler.
          </div>
        </div>
      </div>
      <div className="pm-strip">
        <div className="pm-track">
          {[...PHOTO_GALLERY, ...PHOTO_GALLERY].map((img, i) => (
            <div key={`${img.src}-${i}`} className="pm-cell">
              <ImgFade src={img.src} alt={img.alt} sizes="(max-width: 720px) 70vw, 28vw" />
              <span className="pm-lbl">{img.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Mühendislik Standartları ===== */
function Standards() {
  const items = [
    { n: '01', t: '16+ Yıl Mühendislik', d: '2009\'dan beri Türkiye\'nin en prestijli stüdyo, restoran ve konser alanlarını teslim ediyoruz.' },
    { n: '02', t: 'Hızlı Devreye Alma', d: 'Optimize edilmiş lojistik ve saha ekiplerimizle projelerinizi takvimine sadık kalarak hayata geçiriyoruz.' },
    { n: '03', t: 'Ömür Boyu Destek', d: 'Sistem devreye alındıktan sonra periyodik akustik kalibrasyon, yazılım güncellemeleri ve uzaktan teşhis.' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />MÜHENDİSLİK STANDARTLARI</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>Standartları<br /><em>yeniden</em> tanımlıyoruz.</h2>
          </div>
          <div className="right">
            Sesin fiziğini mühendislik disipliniyle harmanlıyoruz. Her proje, milimetrik hesaplamalar ve akustik mükemmeliyet arayışıyla şekillenen bir başyapıttır.
          </div>
        </div>
        <div className="standards-grid reveal">
          {items.map((it) => (
            <div key={it.n} className="standard">
              <div className="s-num">{it.n}</div>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== 2026 Vision Banner ===== */
function Vision2026() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="vision-banner reveal">
          <span className="vb-year" aria-hidden>2026</span>
          <div className="vb-content">
            <span className="eyebrow" style={{ color: 'rgba(245,239,224,0.6)' }}>
              <span className="bar" style={{ background: 'rgba(245,239,224,0.4)' }} />GELECEK VİZYONU
            </span>
            <h2 className="h-section" style={{ color: 'var(--stage-fg)', marginTop: 18 }}>
              <em style={{ color: 'var(--gold-2)' }}>İmmersif</em> sesin geleceği.
            </h2>
            <p>
              Dolby Atmos sertifikalı tasarımlarımız, 96 kHz native işleme ve yapay zeka destekli akustik analiz araçlarımızla 2026'da ses teknolojilerini bir adım öteye taşıyoruz.
            </p>
            <div className="vb-tags">
              <span className="tag" style={{ borderColor: 'rgba(245,239,224,0.3)', color: 'rgba(245,239,224,0.85)' }}>DOLBY ATMOS</span>
              <span className="tag" style={{ borderColor: 'rgba(245,239,224,0.3)', color: 'rgba(245,239,224,0.85)' }}>AI ACOUSTIC</span>
              <span className="tag" style={{ borderColor: 'rgba(245,239,224,0.3)', color: 'rgba(245,239,224,0.85)' }}>96 kHz NATIVE</span>
              <span className="tag" style={{ borderColor: 'rgba(245,239,224,0.3)', color: 'rgba(245,239,224,0.85)' }}>DANTE / AES67</span>
            </div>
            <Link to="/portfolyo" className="btn btn-on-stage">Vizyon Belgesini İncele <span className="arrow" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== SEO Content ===== */
function SEOContent() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />AKUSTİK & SES MÜHENDİSLİĞİ</span>
            <h2 className="h-section gold" style={{ marginTop: 18 }}>
              İstanbul'dan<br />Türkiye'ye <em>profesyonel</em><br />ses altyapısı.
            </h2>
          </div>
          <div className="right">
            On Muzik Proje; restoran, kafe, otel, canlı performans sahnesi, konferans salonu ve kurumsal alanlar için akustik tasarım, ses sistemi keşfi, cihaz konumlandırma, DSP ayarı ve periyodik teknik bakım hizmetlerini tek çatı altında sunar. Her proje için hedefimiz; net konuşma anlaşılabilirliği, dengeli frekans dağılımı ve uzun ömürlü sistem performansıdır.
          </div>
        </div>
        <div className="seo-grid reveal">
          <article className="seo-card">
            <h3>Hizmet Kapsamı</h3>
            <ul>
              <li>Mekân akustik analizi ve RT60 optimizasyonu</li>
              <li>Ses sistemi projelendirme ve ürün seçimi</li>
              <li>DSP, EQ, crossover ve gain staging kalibrasyonu</li>
              <li>Dante / network tabanlı ses altyapısı kurulumu</li>
              <li>EN 54-16 uyumlu Voice Alarm sistemleri</li>
              <li>Periyodik bakım ve uzaktan teşhis</li>
            </ul>
          </article>
          <article className="seo-card">
            <h3>Neden On Muzik Proje?</h3>
            <ul>
              <li>Uygulamaya özel mühendislik yaklaşımı</li>
              <li>Yerinde keşif ve performans odaklı kurulum</li>
              <li>Marka bağımsız teknik danışmanlık</li>
              <li>Proje sonrası bakım ve teknik destek</li>
              <li>16 yıllık saha tecrübesi</li>
              <li>Türkiye genelinde proje teslim ağı</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ===== Discipline Deck ===== */
type DiscKey = 'all' | 'ses' | 'akustik' | 'led' | 'studio' | 'konf' | 'anons';
type DiscCls = 'red' | 'gold' | 'indigo' | 'teal' | 'plum' | 'olive';

// Maps inline DiscKey → content.ts canonical slug used by /hizmetler/:slug
const SERVICE_SLUG: Record<Exclude<DiscKey, 'all'>, string> = {
  ses: 'ses',
  akustik: 'akustik',
  led: 'led',
  studio: 'studio',
  konf: 'konferans',
  anons: 'anons',
};

// Maps inline venue key → /mekanlar/:slug
const VENUE_SLUG: Record<string, string> = {
  restoran: 'restoran',
  otel: 'otel',
  sahne: 'sahne',
  studio: 'studio',
  konferans: 'konferans',
};

const DISCIPLINES: Array<{ k: Exclude<DiscKey, 'all'>; short: string; n: string; sub: string; cls: DiscCls; hz: string; bars: number[] }> = [
  { k: 'ses',     short: 'SES',        n: 'Ses Sistemi',         sub: 'Zonlu PA · DSP · Dante',     cls: 'red',    hz: '40 Hz – 18 kHz', bars: [3, 5, 7, 8, 10, 12, 11, 9, 7, 5, 4] },
  { k: 'akustik', short: 'AKUSTİK',    n: 'Akustik Tasarım',     sub: 'RT60 · STI · Modal Kontrol', cls: 'gold',   hz: '63 Hz – 4 kHz',  bars: [10, 11, 12, 11, 9, 7, 6, 5, 4, 3, 2] },
  { k: 'led',     short: 'LED',        n: 'LED Ekran & Video',   sub: 'Pixel Pitch · Processor',    cls: 'indigo', hz: 'P1.5 – P3.9',    bars: [2, 4, 6, 9, 12, 11, 9, 6, 4, 3, 2] },
  { k: 'studio',  short: 'STÜDYO',     n: 'Stüdyo Akustiği',     sub: 'NC-20 · RFZ · Bass Trap',    cls: 'teal',   hz: '20 Hz – 20 kHz', bars: [4, 7, 10, 12, 11, 10, 9, 8, 7, 6, 5] },
  { k: 'konf',    short: 'KONFERANS',  n: 'Toplantı / AV',       sub: 'Beamforming · AEC · Hibrit', cls: 'plum',   hz: 'DICENTIS',       bars: [3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3] },
  { k: 'anons',   short: 'ANONS',      n: 'Anons & Güvenlik',    sub: 'EN 54-16 · Voice Alarm',     cls: 'olive',  hz: '100V · 70V',     bars: [5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6] },
];

const CLS_VARS: Record<DiscCls, CSSProperties> = {
  red:    { ['--c' as any]: 'var(--red)',    ['--cs' as any]: 'var(--red-soft)',    ['--cl' as any]: 'var(--red-line)' },
  gold:   { ['--c' as any]: 'var(--gold)',   ['--cs' as any]: 'var(--gold-soft)',   ['--cl' as any]: 'var(--gold-line)' },
  indigo: { ['--c' as any]: 'var(--indigo)', ['--cs' as any]: 'var(--indigo-soft)', ['--cl' as any]: 'var(--indigo-line)' },
  teal:   { ['--c' as any]: 'var(--teal)',   ['--cs' as any]: 'var(--teal-soft)',   ['--cl' as any]: 'var(--teal-line)' },
  plum:   { ['--c' as any]: 'var(--plum)',   ['--cs' as any]: 'var(--plum-soft)',   ['--cl' as any]: 'var(--plum-line)' },
  olive:  { ['--c' as any]: 'var(--olive)',  ['--cs' as any]: 'var(--olive-soft)',  ['--cl' as any]: 'var(--olive-line)' },
};

function DisciplineDeck({ active, setActive }: { active: DiscKey; setActive: (k: DiscKey) => void }) {
  return (
    <section className="disc-deck" id="disiplinler">
      <div className="container">
        <div className="disc-deck-head reveal">
          <span className="eyebrow"><span className="dot" />DİSİPLİN SEÇİCİ · 01</span>
          <div className="dd-q">
            Hangi <em>frekansta</em> çalışıyorsunuz?
            <small className="dd-hint">İhtiyacınızı seçin - sistem kendini ona göre kalibre eder.</small>
          </div>
          <div className="dd-meter">
            <span>−12</span><span>−6</span><span className="zero">0</span><span className="peak">+3 dB</span>
          </div>
        </div>
        <div className="disc-grid">
          {DISCIPLINES.map((it, i) => (
            <div
              key={it.k}
              className="disc-cell reveal"
              style={{ ...CLS_VARS[it.cls], transitionDelay: `${i * 40}ms` }}
            >
              <button
                type="button"
                className={`disc-card${active === it.k ? ' on' : ''}`}
                onClick={() => setActive(active === it.k ? 'all' : it.k)}
                aria-pressed={active === it.k}
                aria-label={`${it.n} disiplinini filtrele`}
              >
                <span className="dc-num">0{i + 1}</span>
                <div className="dc-eq" aria-hidden>
                  {it.bars.map((h, j) => (
                    <span key={j} style={{ height: `${h * 7}%`, animationDelay: `${j * 0.08}s` }} />
                  ))}
                </div>
                <span className="dc-short">{it.short}</span>
                <span className="dc-name">{it.n}</span>
                <span className="dc-sub">{it.sub}</span>
                <span className="dc-hz">{it.hz}</span>
                <span className="dc-cta">
                  {active === it.k ? 'SEÇİLDİ ✓' : 'BU DİSİPLİN'}
                  <span className="dc-arrow" />
                </span>
              </button>
              <Link
                to={`/hizmetler/${SERVICE_SLUG[it.k]}`}
                className="dc-detail"
                aria-label={`${it.n} hizmet detay sayfası`}
              >
                Detay sayfası <span className="arrow" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Path icons ===== */
function PathIcon({ kind }: { kind: Exclude<DiscKey, 'all'> }) {
  const c = { width: 30, height: 30, viewBox: '0 0 30 30', fill: 'none' as const, stroke: 'currentColor', strokeWidth: 1.5 };
  if (kind === 'ses') return (
    <svg {...c}>
      {[3, 7, 11, 15, 19, 23, 27].map((x, i) => {
        const env = Math.sin((i / 6) * Math.PI);
        const h = 4 + env * 16;
        return <line key={i} x1={x} x2={x} y1={15 - h / 2} y2={15 + h / 2} strokeLinecap="round" />;
      })}
    </svg>
  );
  if (kind === 'akustik') return (
    <svg {...c}>
      <circle cx="15" cy="15" r="12" strokeOpacity="0.4" />
      <circle cx="15" cy="15" r="7" />
      <circle cx="15" cy="15" r="2.5" fill="currentColor" />
    </svg>
  );
  if (kind === 'led') return (
    <svg {...c}>
      <rect x="2" y="5" width="26" height="18" rx="1" />
      {[8, 14, 20].map((x) => <line key={x} x1={x} x2={x} y1="5" y2="23" strokeOpacity="0.45" />)}
      <line x1="11" y1="27" x2="19" y2="27" />
    </svg>
  );
  if (kind === 'studio') return (
    <svg {...c}>
      <rect x="3" y="7" width="24" height="16" rx="1" />
      <circle cx="15" cy="15" r="5" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
  if (kind === 'konf') return (
    <svg {...c}>
      <rect x="3" y="8" width="24" height="14" rx="2" />
      <circle cx="9" cy="15" r="1.5" />
      <circle cx="15" cy="15" r="1.5" />
      <circle cx="21" cy="15" r="1.5" />
      <line x1="15" y1="3" x2="15" y2="6" strokeLinecap="round" />
    </svg>
  );
  if (kind === 'anons') return (
    <svg {...c}>
      <path d="M15 3 L26 9 V17 C26 23 21 27 15 28 C9 27 4 23 4 17 V9 Z" />
      <path d="M10 15 L13.5 18.5 L21 11" />
    </svg>
  );
  return null;
}

/* ===== Solution Pathways ===== */
const PATHS: Array<{ k: Exclude<DiscKey, 'all'>; cls: DiscCls; tag: string; t: string; d: string; list: string[]; price: string }> = [
  { k: 'ses',     cls: 'red',    tag: 'SES SİSTEMİ',     t: 'Profesyonel Ses',       d: 'Restoran, otel, sahne için zonlu ses mimarisi, marka bağımsız ürün seçimi ve DSP kalibrasyonu.',          list: ['Çok zon hoparlör', 'DSP & matrix', 'EQ kalibrasyon', 'Dante / 70V'], price: '4–8 HAFTA · ANAHTAR TESLİM' },
  { k: 'akustik', cls: 'gold',   tag: 'AKUSTİK TASARIM', t: 'Akustik Mühendislik',   d: 'RT60, STI, EDT hedefli panel ve diffüzör mimarisi. Modal kontrol ve in-situ ölçüm.',                       list: ['Akustik ölçüm', 'Panel & diffüzör', 'Modal analiz', 'RFZ tasarımı'], price: 'ÖLÇÜM · 1–2 HAFTA' },
  { k: 'led',     cls: 'indigo', tag: 'LED & GÖRÜNTÜ',   t: 'LED Ekran Sistemi',     d: 'Sahne, kurumsal lobi ve kontrol odaları için pixel pitch, processor ve AV-sync entegrasyonu.',              list: ['Pixel pitch analizi', 'Video processor', 'Truss & rigging', 'AV sync'], price: 'P1.5 · P2.6 · P3.9' },
  { k: 'studio',  cls: 'teal',   tag: 'STÜDYO',          t: 'Stüdyo & Kayıt',        d: 'Kontrol ve kayıt odaları için modal kontrol, izolasyon ve kalibre referans dinleme.',                       list: ['Bass trap', 'Kayan kat', 'RFZ kontrol', 'Monitör tuning'], price: 'NC-20 · RT60 0.28S' },
  { k: 'konf',    cls: 'plum',   tag: 'KONFERANS / AV',  t: 'Toplantı & Konferans',  d: 'Beamforming mikrofon, hibrit toplantı, tek dokunuş kontrol ve simultane çeviri sistemleri.',               list: ['Beamforming mic', 'AEC + AGC', 'Kamera tracking', 'Tek dokunuş'], price: 'DICENTIS · DANTE' },
  { k: 'anons',   cls: 'olive',  tag: 'ANONS / VA',      t: 'Anons & Güvenlik',      d: 'EN 54-16 uyumlu Voice Alarm, evakuasyon mimarisi ve merkezi anons sistemi tasarımı.',                       list: ['EN 54-16', 'Evakuasyon', 'Zone yönetimi', 'BMS entegrasyon'], price: 'KAMU · KURUMSAL' },
];

function SolutionPathways({ filter }: { filter: DiscKey }) {
  const filtered = filter !== 'all';
  const list = filtered ? PATHS.filter((p) => p.k === filter) : PATHS;
  return (
    <section className="section" id="cozum-yollari">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />02 · ÇÖZÜM YOLLARI</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>Doğru kapı<br /><em>buradan</em>.</h2>
          </div>
          <div className="right">
            Her disiplin için kapsam, teknik hedefler ve süre tahmini bir arada. Birden fazla disipline ihtiyacınız varsa entegre paket teklifi öneririz.
          </div>
        </div>
        <div className={`paths${filtered ? ' is-filtered' : ''}`}>
          {list.map((p, i) => (
            <Link key={p.k} to={`/hizmetler/${SERVICE_SLUG[p.k]}`} className="path reveal" style={{ ...CLS_VARS[p.cls], transitionDelay: `${i * 60}ms` }}>
              <span className="p-tag">{p.tag}</span>
              <div className="p-icon"><PathIcon kind={p.k} /></div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
              <ul className="p-list">{p.list.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="p-foot">
                <span className="p-link">Detayları İncele <span className="arrow" /></span>
                <span className="p-price">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Process ===== */
const STEPS = [
  { t: 'Keşif & Brifing', d: 'SAHA ZIYARETI' },
  { t: 'Ölçüm & Analiz', d: 'RT60 · STI · NC' },
  { t: 'Konsept Tasarım', d: '3D · SİMÜLASYON' },
  { t: 'Uygulama', d: 'MONTAJ · DEVREYE' },
  { t: 'Kalibrasyon', d: 'DSP TUNING' },
];

function Process() {
  const [step, setStep] = useState(2);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % (STEPS.length + 1)), 2200);
    return () => clearInterval(id);
  }, []);
  const progress = `${(step / (STEPS.length - 1)) * 100}%`;
  return (
    <section className="section process" id="surec">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />03 · ÇALIŞMA SÜRECİ</span>
            <h2 className="h-section gold" style={{ marginTop: 18 }}>Beş aşamalı<br /><em>mühendislik</em> hattı.</h2>
          </div>
          <div className="right">
            Her proje sahada başlar, ölçüme dayalı tasarımla devam eder ve in-situ kalibrasyon ile teslim edilir.
          </div>
        </div>
        <div className="process-track reveal">
          <div className="process-line" style={{ ['--progress' as any]: progress }} />
          <div className="steps">
            {STEPS.map((s, i) => (
              <div key={s.t} className={`step${i <= step ? ' done' : ''}`}>
                <div className="num">0{i + 1}</div>
                <div className="title">{s.t}</div>
                <div className="deliv">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Venues ===== */
type VenueTag = [DiscCls, string];
const VENUES: Array<{ k: string; n: string; h: string; goals: Array<[string, string]>; tags: VenueTag[] }> = [
  { k: 'restoran', n: 'Restoran & Bar', h: 'Restoran ve barlar için arka plan müziği ve canlı performans dengesi. Müşteri konuşma netliği <em>ön planda</em>.', goals: [['RT60 Hedef', '0.6 – 0.9 s'], ['Ses Basıncı', '82 dB SPL'], ['Zon Sayısı', '2–4 zon'], ['Hoparlör Tipi', 'Tavan + sahne'], ['Sistem', 'Dante / 70V']], tags: [['red', 'SES'], ['gold', 'AKUSTİK']] },
  { k: 'otel',     n: 'Otel & SPA',      h: 'Lobi, restoran, ballroom ve SPA için <em>çok zonlu</em> ses ve akustik konfor.',                                  goals: [['RT60 Hedef', '0.7 – 1.0 s'], ['Ses Basıncı', '78 dB SPL'], ['Zon Sayısı', '6–12 zon'], ['Akustik Panel', 'Tavan + duvar'], ['Anons', 'EN 54-16']], tags: [['red', 'SES'], ['gold', 'AKUSTİK'], ['olive', 'VA']] },
  { k: 'sahne',    n: 'Sahne & Etkinlik', h: 'Konser, sahne ve etkinlik mekânları için <em>line array</em> ve yüksek SPL teslimat.',                            goals: [['RT60 Hedef', '1.2 – 1.6 s'], ['Ses Basıncı', '105 dB SPL'], ['Sistem Tipi', 'Line array'], ['Sub', 'Cardioid array'], ['Görüntü', 'LED P3.9']], tags: [['red', 'SES'], ['indigo', 'LED']] },
  { k: 'studio',   n: 'Stüdyo & Kayıt', h: 'Kayıt ve kontrol odaları için <em>RFZ</em> mimarisi, modal kontrol ve düşük arka plan gürültüsü.',                  goals: [['RT60 Hedef', '0.25 – 0.32 s'], ['NC Hedef', 'NC-20'], ['Modal Kontrol', 'Bass trap'], ['Monitör', 'Stereo + sub'], ['İzolasyon', 'Kayan kat']], tags: [['teal', 'STÜDYO'], ['gold', 'AKUSTİK']] },
  { k: 'konferans', n: 'Toplantı & Konferans', h: 'Hibrit toplantı odaları, board room ve simültane konferans için <em>beamforming</em> ve AEC.',              goals: [['RT60 Hedef', '0.5 – 0.7 s'], ['STI Hedef', '≥ 0.62'], ['Mikrofon', 'Beamforming'], ['Kontrol', 'Tek dokunuş'], ['Sistem', 'DICENTIS']], tags: [['plum', 'KONFERANS'], ['gold', 'AKUSTİK']] },
];

function Venues() {
  const [active, setActive] = useState(0);
  const v = VENUES[active];
  return (
    <section className="section venues" id="mekanlar">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />04 · MEKÂN TİPLERİ</span>
            <h2 className="h-section indigo" style={{ marginTop: 18 }}>Her mekânın<br /><em>kendi sesi</em> var.</h2>
          </div>
          <div className="right">
            Mekân tipinizi seçin - o tipoloji için tipik akustik hedefler, ses basıncı ve sistem mimarisi anında görünür.
          </div>
        </div>
        <div className="venue-tabs reveal">
          {VENUES.map((vv, i) => (
            <button key={vv.k} type="button" className={`venue-tab${active === i ? ' on' : ''}`} onClick={() => setActive(i)}>
              <span className="vt-num">0{i + 1}</span>{vv.n}
            </button>
          ))}
        </div>
        <div className="venue-detail reveal">
          <div className="vd-info">
            <div className="vd-tag-row">
              {v.tags.map(([cls, n]) => <span key={n} className={`tag ${cls}`}><span className="dot" />{n}</span>)}
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: v.n }} />
            <p className="vd-desc" dangerouslySetInnerHTML={{ __html: v.h }} />
            <ul className="vd-list">
              {v.goals.map(([k, val]) => <li key={k}><span className="k">{k}</span><span>{val}</span></li>)}
            </ul>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to={`/mekanlar/${VENUE_SLUG[v.k] ?? v.k}`} className="btn btn-red">Mekân Detayını İncele <span className="arrow" /></Link>
              <Link to="/iletisim" className="btn btn-ghost">Bu Mekân İçin Teklif <span className="arrow" /></Link>
            </div>
          </div>
          <div className="vd-stage">
            <div className="vd-stage-overlay">
              <div className="vd-tag-row">
                <span className="tag" style={{ borderColor: 'rgba(245,239,224,0.25)', color: 'rgba(245,239,224,0.85)' }}>{v.n.toUpperCase()}</span>
              </div>
              <div className="vd-stage-mini">
                <span className="b"><strong>{v.goals[0][1].split(' ')[0]}</strong>{v.goals[0][0]}</span>
                <span className="b"><strong>{v.goals[1][1].split(' ')[0]}</strong>{v.goals[1][0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Dashboard ===== */
function Dashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);
  const bars = Array.from({ length: 20 }, (_, i) => {
    const env = Math.sin((i / 19) * Math.PI) * 0.7 + 0.3;
    const noise = Math.sin(tick * 0.6 + i * 0.4) * 0.18 + 0.5;
    const h = Math.max(8, env * noise * 100);
    const cls = h > 75 ? 'hot' : h > 55 ? 'warm' : '';
    return { h, cls };
  });
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />05 · CANLI ÖLÇÜM PANOSU</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>Ölçüm <em>somut</em>,<br />tasarım <em>doğrulanabilir</em>.</h2>
          </div>
          <div className="right">
            Her projede teslim öncesi RT60, STI, SPL ve NC değerleri sahada ölçülür ve raporlanır. Aşağıda örnek bir tuning oturumundan canlı veri.
          </div>
        </div>
        <div className="dashboard reveal">
          <div className="dash-head">
            <div className="dash-tabs">
              <button className="on" type="button">SPL FREKANS DAĞILIMI</button>
              <button type="button">RT60 BAND ANALİZİ</button>
              <button type="button">STI HARİTASI</button>
            </div>
            <div className="dash-meta"><span className="dot" />CANLI · İSTANBUL · SAHA #042</div>
          </div>
          <div className="dash-grid">
            <div className="dash-cell">
              <div className="lbl"><span>SPL · 31 Hz – 16 kHz</span><span>dB</span></div>
              <div className="spl-bars">
                {bars.map((b, i) => <span key={i} className={b.cls} style={{ height: `${b.h}%` }} />)}
              </div>
            </div>
            <div className="dash-cell">
              <div className="lbl"><span>RT60 ORTALAMA</span><span>HEDEF 0.6 s</span></div>
              <div className="val"><em>0.58</em><small>s</small></div>
              <div className="sub">→ 100Hz: 0.71 · 1kHz: 0.55 · 4kHz: 0.48</div>
            </div>
            <div className="dash-cell">
              <div className="lbl"><span>STI · KONUŞMA NETLİĞİ</span><span>EXCELLENT</span></div>
              <div className="val">0.<em>72</em></div>
              <div className="sub">→ 60+ noktada ortalama, std σ 0.04</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Portfolio teaser ===== */
const CASES: Array<{ slug: string; t: string; e: string; tags: VenueTag[]; st: Array<[string, string]>; d: string; img: string }> = [
  { slug: 'kocaeli-sanayi-odasi', t: 'Kocaeli Sanayi Odası', e: 'Kocaeli', tags: [['indigo', 'LED'], ['red', 'SES'], ['plum', 'KONFERANS']], d: '180 kişilik konferans salonu için 9.6 × 3.0 m P2.6 LED arka plan, Pioneer Pro Audio XY-3B cluster ve Q-SYS hibrit toplantı senaryosu.', st: [['LED', 'P2.6'], ['STI', '0.71']], img: '/assets/projects/kocaeli-sanayi-odasi/01-stage-wide.jpg' },
  { slug: 'bogaz-restoran', t: 'Boğaz Restoran',  e: 'İstanbul', tags: [['red', 'SES'], ['gold', 'AKUSTİK']],                d: '180 kişilik teras restoran için 4 zonlu ses sistemi ve akustik panel mimarisi. Konuşma netliği hedef üstünde teslim edildi.', st: [['RT60', '0.62s'], ['SPL', '82dB']], img: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { slug: 'ballroom-otel', t: 'Ballroom Otel',   e: 'Antalya',  tags: [['red', 'SES'], ['olive', 'VA'], ['indigo', 'LED']], d: '800 kişilik ballroom + lobi + 24 oda zon yönetimi. EN 54-16 uyumlu voice alarm + LED P2.6 sahne ekranı.',                        st: [['RT60', '1.2s'], ['SPL', '98dB']], img: 'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { slug: 'konser-sahnesi', t: 'Konser Sahnesi',  e: 'Ankara',   tags: [['red', 'SES'], ['indigo', 'LED']],                  d: '3000 kişilik açık hava sahnesi. Cardioid sub array + line array L/R, 64m² LED ana sahne ekranı.',                                  st: [['SPL', '106dB'], ['LED', 'P3.9']], img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { slug: 'studio-alpha', t: 'Kayıt Stüdyosu',  e: 'İstanbul', tags: [['teal', 'STÜDYO'], ['gold', 'AKUSTİK']],            d: 'Mix + tracking room. Modal kontrol için kayan kat, bass trap kasetleri ve RFZ kontrol odası tasarımı.',                            st: [['NC', 'NC-18'], ['RT60', '0.28s']], img: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1400' },
];

function PortfolioTeaser() {
  return (
    <section className="section" id="projeler">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />06 · SEÇİLMİŞ PROJELER</span>
            <h2 className="h-section gold" style={{ marginTop: 18 }}>Sahaya teslim<br />edilmiş <em>mühendislik</em>.</h2>
          </div>
          <div className="right">
            Mekân tipi, sahne, kayıt stüdyosu ve kurumsal lobi dahil 240+ projeden seçmeler. Her birinde ölçülmüş veri ve hedef-fiili karşılaştırma raporu mevcut.
          </div>
        </div>
        <div className="portfolio-grid">
          {CASES.map((c, i) => (
            <Link key={c.t} to={`/projeler/${c.slug}`} className="case reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="frame">
                <ImgFade src={c.img} alt={c.t} sizes="(max-width: 1100px) 100vw, 700px" />
                <span className="tonearm" aria-hidden />
                <div className="ph">{c.t.toUpperCase()} · GÖRSEL</div>
                <div className="stat-overlay">
                  {c.st.map(([k, v]) => <span key={k} className="mini">{k}<b>{v}</b></span>)}
                </div>
              </div>
              <div className="meta"><span>{c.e}</span><span>2024</span></div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
              <div className="case-tags">
                {c.tags.map(([cls, n]) => <span key={n} className={`tag ${cls}`}><span className="dot" />{n}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Quote ===== */
type QuoteStatus = 'idle' | 'sending' | 'success' | 'error';
const QUOTE_NEEDS = ['Akustik Tasarım', 'Ses Sistemi', 'Stüdyo Akustiği', 'LED / Görüntü', 'Konferans / AV', 'Anons / VA', 'Kalibrasyon', 'Bakım'];
const QUOTE_VENUES = ['Restoran / Bar', 'Otel / SPA', 'Sahne / Etkinlik', 'Stüdyo / Kayıt', 'Toplantı / Konferans', 'Diğer'];
const QUOTE_BUDGETS = ['250.000 ₺ altı', '250–750.000 ₺', '750.000 – 2 M ₺', '2 M ₺ üstü'];

function Quote() {
  const [picked, setPicked] = useState<Set<string>>(new Set(['Akustik Tasarım', 'Ses Sistemi']));
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [venue, setVenue] = useState(QUOTE_VENUES[0]);
  const [budget, setBudget] = useState(QUOTE_BUDGETS[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<QuoteStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const toggle = (n: string) => {
    const s = new Set(picked);
    if (s.has(n)) s.delete(n); else s.add(n);
    setPicked(s);
  };

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
          source: 'quote',
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
      setPicked(new Set(['Akustik Tasarım', 'Ses Sistemi']));
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Beklenmedik bir hata oluştu.');
    }
  }

  return (
    <section className="section quote-section" id="iletisim">
      <div className="container">
        <div className="quote-grid">
          <div className="quote-side reveal">
            <span className="eyebrow"><span className="bar" />07 · TEKLİF AL</span>
            <h2 className="h-section">Birlikte<br /><em>başlayalım</em>.</h2>
            <p className="lead">Formu doldurun; 24 saat içinde mekân tipinize uygun teknik bir teklif önerisiyle dönelim.</p>
            <div className="qprocess">
              {[
                ['01', 'Form & Brifing', 'BUGÜN'],
                ['02', 'Ön Görüşme', '24 SAAT İÇİNDE'],
                ['03', 'Saha Keşfi', 'ÜCRETSİZ'],
                ['04', 'Teknik Teklif', '5–7 GÜN İÇİNDE'],
              ].map(([n, t, d]) => (
                <div key={n} className="qp-row">
                  <div className="qn">{n}</div>
                  <div><div className="qt">{t}</div><div className="qd">{d}</div></div>
                </div>
              ))}
            </div>
          </div>
          <form className="form reveal" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label>Ad Soyad</label>
                <input type="text" placeholder="Adınız Soyadınız" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
              </div>
              <div className="field">
                <label>Şirket</label>
                <input type="text" placeholder="Şirket / Marka" value={company} onChange={(e) => setCompany(e.target.value)} />
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
                  {QUOTE_VENUES.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Bütçe Aralığı</label>
                <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                  {QUOTE_BUDGETS.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
            <div className="form-row full">
              <div className="field">
                <label>İhtiyaç Duyduğunuz Disiplinler</label>
                <div className="checks">
                  {QUOTE_NEEDS.map((n) => (
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
                  placeholder="Mekân büyüklüğü, kullanım amacı, mevcut sorunlar..."
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
                Talebiniz gönderilemedi: {errorMsg} - lütfen tekrar deneyin veya doğrudan{' '}
                <a href="mailto:proje@onmuzik.com">proje@onmuzik.com</a> adresine yazın.
              </div>
            )}
            <div className="form-foot">
              <p className="micro">24 saat içinde teknik bir cevapla döneriz. Verileriniz KVKK kapsamında saklanır.</p>
              <button type="submit" className="btn btn-red" disabled={status === 'sending'}>
                {status === 'sending' ? 'Gönderiliyor…' : 'Keşif Talep Et'} <span className="arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ===== FAQ ===== */
function FAQ() {
  const items = HOME_FAQ;
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="sss">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />08 · SIK SORULAN</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>Önce<br /><em>cevaplar</em>.</h2>
          </div>
          <div className="right">Daha fazla sorunuz varsa formu doldurun ya da doğrudan arayın - 16 yıllık mühendislik birikimimizle dönelim.</div>
        </div>
        <div className="reveal">
          {items.map(([q, a], i) => (
            <div key={q} className={`faq-row${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="qn">0{i + 1}</div>
              <div>
                <div className="qq">{q}</div>
                <div className="qa">{a}</div>
              </div>
              <div className="toggle" />
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/sss" className="btn btn-ghost">Tüm soruları gör <span className="arrow" /></Link>
          <Link to="/iletisim" className="btn btn-red">Cevabını bulamadım - yazın <span className="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}

/* ===== Testimonials ===== */
function Testimonials() {
  return (
    <section className="section venues" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />MÜŞTERİ YORUMLARI</span>
            <h2 className="h-section gold" style={{ marginTop: 18 }}>Mühendislik tarafı<br /><em>çalıştığında</em>.</h2>
          </div>
          <div className="right">
            Tamamlanan projelerden seçilmiş yorumlar - restoran F&B direktöründen otel genel müdürüne, mix
            mühendisinden konferans operasyon sorumlusuna. Her mekân, kendi metriğiyle teslim edildi.
          </div>
        </div>
        <div className="t-grid reveal">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              className="t-card"
              style={{ ['--c' as any]: ACCENT_BY_CLS[t.cls], transitionDelay: `${i * 80}ms` }}
            >
              <span className="t-quote-mark" aria-hidden>"</span>
              <p className="t-quote">{t.quote}</p>
              <div className="t-meta">
                <Img src={t.portrait} alt={`${t.name} - ${t.role}`} width={56} height={56} sizes="56px" />
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                  <div className="t-venue">{t.venue}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== References ===== */
function References() {
  return (
    <section className="section" id="referanslar">
      <div className="container">
        <div className="section-head reveal">
          <div className="left">
            <span className="eyebrow"><span className="bar" />REFERANSLAR · 240+ MEKÂN</span>
            <h2 className="h-section indigo" style={{ marginTop: 18 }}>Bizi <em>seçen</em><br />mekânlar.</h2>
          </div>
          <div className="right">
            240+ tamamlanmış projemizden seçmeler. Restoran, otel, sahne, stüdyo, konferans, AVM ve kamu
            binaları - her sektörde derin saha tecrübesi.
          </div>
        </div>
        <div className="ref-grid reveal">
          {REFERENCES.map((r, i) => (
            <article
              key={r.id}
              className="ref-card"
              style={{ ['--c' as any]: ACCENT_BY_CLS[r.cls], transitionDelay: `${i * 30}ms` }}
            >
              <div className="ref-thumb">
                <Img src={r.image} alt={`${r.name} - ${r.sector}`} width={900} height={675} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                <span className="ref-tag">{r.sector.toUpperCase()}</span>
              </div>
              <div className="ref-info">
                <div className="ref-name">{r.name}</div>
                <div className="ref-meta">{r.city} · {r.year}</div>
                <div className="ref-scope">{r.scope}</div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/portfolyo" className="btn btn-red">Tüm projeleri gör <span className="arrow" /></Link>
          <Link to="/iletisim" className="btn btn-ghost">Benzer proje için teklif <span className="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}

/* ===== Page ===== */
const HOME_FAQ: Array<[string, string]> = [
  ['Akustik ölçüm yapıyor musunuz?', 'Evet. RT60, EDT, STI ve NC ölçümleri için kalibre edilmiş B&K mikrofon ve ölçüm yazılımı kullanıyoruz. Saha keşfi ücretsizdir.'],
  ['Marka bağımsız mısınız?', 'Evet. Projeye en uygun ürünü seçeriz; d&b, L-Acoustics, Meyer Sound, Bose, JBL, Genelec, Bosch dahil pek çok marka ile çalışıyoruz.'],
  ['Garanti süreniz nedir?', 'Tüm sistemlerde 2 yıl üretici garantisi + 1 yıl yerinde servis garantisi sunuyoruz. Yıllık bakım anlaşması opsiyoneldir.'],
  ['Anahtar teslim mi çalışıyorsunuz?', 'Tasarım, satın alma, montaj, devreye alma ve kalibrasyon dahil anahtar teslim teslimat yapıyoruz. Yalnız tasarım veya yalnız kalibrasyon hizmeti de mümkündür.'],
  ['EN 54-16 sertifikalı sistem kuruyor musunuz?', 'Evet. Kamu binaları, AVM, otel ve hastaneler için EN 54-16 uyumlu Voice Alarm sistemleri tasarlıyoruz.'],
];

export default function Home() {
  const [filter, setFilter] = useState<DiscKey>('all');

  useSeo({
    title: 'On Muzik Proje - Akustik Tasarım & Profesyonel Ses Sistemi · İstanbul',
    description: '2009\'dan beri İstanbul merkezli akustik mühendisliği ve kurumsal ses sistemi tasarımı. Restoran, otel, sahne, kayıt stüdyosu ve konferans için RT60/STI ölçümlü, marka bağımsız çözüm. 240+ proje, 6 disiplin - EN 54-16, line array, Dante, LED.',
    path: '/',
    keywords: 'akustik tasarım, ses sistemi, ses mühendisliği, restoran ses sistemi, otel ses sistemi, kayıt stüdyosu akustiği, konferans ses sistemi, EN 54-16 voice alarm, LED ekran, line array, Dante ağ, DSP kalibrasyon, RT60, STI ölçümü, kurumsal AV, İstanbul ses sistemi, akustik mühendis İstanbul',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOME_FAQ.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  });

  return (
    <>
      <Hero />
      <Marquee />
      <PhotoMarquee />
      <DisciplineDeck active={filter} setActive={setFilter} />
      <SolutionPathways filter={filter} />
      <div className="wave-divider" aria-hidden />
      <Process />
      <Venues />
      <Standards />
      <div className="wave-divider" aria-hidden />
      <Dashboard />
      <PortfolioTeaser />
      <Testimonials />
      <References />
      <Vision2026 />
      <SEOContent />
      <Quote />
      <FAQ />
    </>
  );
}
