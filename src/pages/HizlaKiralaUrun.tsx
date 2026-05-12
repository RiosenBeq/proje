import { Link } from 'react-router-dom';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { useSeo } from '../lib/seo';

const RED = '#F83848';
const INK = '#14141a';
const CREAM = '#f7f3eb';
const WA = '#25d366';

const PARTNER_BASE = 'https://hizlakirala.com';
const ANKER_RENTAL_URL = `${PARTNER_BASE}/urun/anker-nebula-apollo`;
const WHATSAPP_HREF = 'https://wa.me/908502419515?text=Merhaba%2C%20Nebula%20Apollo%20kiralamak%20istiyorum.';
const PHONE_HREF = 'tel:+908502419515';
const PHONE_LABEL = '0850 241 9515';

const Logo = ({ color = INK, discColor = RED, scale = 1 }: { color?: string; discColor?: string; scale?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 * scale, fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, color, fontSize: 28 * scale, letterSpacing: '-0.04em', lineHeight: 1 }}>
    <svg width={36 * scale} height={36 * scale} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill={discColor} />
      <circle cx="32" cy="32" r="13" fill={CREAM} />
      <circle cx="32" cy="32" r="2.4" fill={discColor} />
      <path d="M11 22 Q 18 16 28 16" stroke={CREAM} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M14 49 Q 22 56 32 55" stroke={CREAM} strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="40" y="13" width="3" height="22" rx="1.5" fill={discColor} />
      <rect x="36" y="33" width="11" height="6" rx="1.5" fill={CREAM} />
      <rect x="38" y="37" width="7" height="4" rx="1" fill={discColor} />
    </svg>
    <span>on music</span>
  </div>
);

const SITE_NAV: Array<{ label: string; to: string }> = [
  { label: 'Hizmetler',       to: '/hizmetler' },
  { label: 'Projeler',        to: '/portfolyo' },
  { label: 'Kiralık Ürünler', to: '/hizla-kirala' },
  { label: 'Hakkımızda',      to: '/hakkimizda' },
  { label: 'İletişim',        to: '/iletisim' },
];

const Nav = () => (
  <nav className="hk-nav" style={{
    background: 'rgba(247,243,235,0.92)', backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(20,20,26,0.08)',
    position: 'sticky', top: 0, zIndex: 50, padding: '18px 64px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  }}>
    <Link to="/" style={{ textDecoration: 'none' }}><Logo /></Link>
    <div className="hk-nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
      {SITE_NAV.map((item) => {
        const active = item.to === '/hizla-kirala';
        const linkStyle: CSSProperties = {
          color: active ? INK : 'rgba(20,20,26,0.6)',
          fontWeight: active ? 600 : 500,
          fontSize: 15, textDecoration: 'none',
          borderBottom: active ? `2px solid ${RED}` : '2px solid transparent',
          paddingBottom: 4,
        };
        return (
          <Link key={item.to} to={item.to} style={linkStyle}>{item.label}</Link>
        );
      })}
    </div>
    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: WA, color: '#fff', padding: '10px 18px', borderRadius: 999,
      fontWeight: 600, fontSize: 15, textDecoration: 'none',
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.8.1.2 1.8 2.8 4.4 3.9 2.6 1.1 2.6.7 3.1.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3 0-.1-.2-.2-.5-.3zM12 3.5C7.3 3.5 3.5 7.3 3.5 12c0 1.5.4 2.9 1.1 4.1l-1.1 4.4 4.5-1.2c1.2.7 2.5 1 4 1 4.7 0 8.5-3.8 8.5-8.5S16.7 3.5 12 3.5z"/></svg>
      {PHONE_LABEL}
    </a>
  </nav>
);

const Breadcrumb = () => (
  <div style={{ background: CREAM, padding: '24px 64px 8px' }} className="hk-breadcrumb">
    <div style={{ maxWidth: 1280, margin: '0 auto', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Anasayfa</Link>
      <span style={{ margin: '0 10px', opacity: 0.4 }}>/</span>
      <Link to="/hizla-kirala" style={{ color: 'inherit', textDecoration: 'none' }}>Kiralık ürünler</Link>
      <span style={{ margin: '0 10px', opacity: 0.4 }}>/</span>
      <a href={`${PARTNER_BASE}/kategori/projeksiyon`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Projeksiyon</a>
      <span style={{ margin: '0 10px', opacity: 0.4 }}>/</span>
      <span style={{ color: INK }}>Anker Nebula Apollo</span>
    </div>
  </div>
);

const ProjectorArt = ({ brand = false }: { brand?: boolean }) => (
  <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0.5">
        <stop offset="0" stopColor={RED} stopOpacity="0.55" />
        <stop offset="1" stopColor={RED} stopOpacity="0" />
      </linearGradient>
    </defs>
    <g transform="translate(300,300) rotate(0) scale(1) translate(-300,-300)">
      <path d="M 420 240 L 600 140 L 600 460 L 420 360 Z" fill="url(#beam)" />
      <rect x="120" y="220" width="320" height="170" rx="22" fill={INK} />
      <rect x="120" y="220" width="320" height="170" rx="22" fill="none" stroke="rgba(245,239,226,0.08)" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={150 + i * 40} y="240" width="22" height="3" rx="1.5" fill="rgba(245,239,226,0.18)" />
      ))}
      <circle cx="380" cy="305" r="58" fill={CREAM} />
      <circle cx="380" cy="305" r="46" fill={INK} />
      <circle cx="380" cy="305" r="34" fill={RED} />
      <circle cx="380" cy="305" r="18" fill={INK} />
      <circle cx="372" cy="297" r="6" fill="rgba(245,239,226,0.7)" />
      <circle cx="160" cy="270" r="5" fill={RED} />
      <circle cx="160" cy="290" r="5" fill="rgba(245,239,226,0.3)" />
      {brand && <text x="180" y="370" fontFamily="Bricolage Grotesque" fontSize="14" fill="rgba(245,239,226,0.5)" letterSpacing="0.2em">ANKER · NEBULA</text>}
      <ellipse cx="280" cy="410" rx="170" ry="10" fill={INK} opacity="0.18" />
    </g>
  </svg>
);

const ProjectorTop = () => (
  <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%', display: 'block' }}>
    <ellipse cx="300" cy="300" rx="200" ry="110" fill={INK} />
    <ellipse cx="300" cy="300" rx="200" ry="110" fill="none" stroke="rgba(245,239,226,0.1)" strokeWidth="1" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <line key={i} x1={170 + i * 30} y1="240" x2={170 + i * 30} y2="360" stroke="rgba(245,239,226,0.18)" strokeWidth="3" strokeLinecap="round" />
    ))}
    <circle cx="300" cy="300" r="14" fill={RED} />
  </svg>
);

const ProjectorPorts = () => (
  <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect x="100" y="240" width="400" height="120" rx="14" fill={INK} />
    <rect x="130" y="280" width="34" height="40" rx="4" fill={CREAM} />
    <rect x="180" y="290" width="40" height="20" rx="3" fill={CREAM} />
    <rect x="240" y="290" width="40" height="20" rx="3" fill={CREAM} />
    <circle cx="320" cy="300" r="14" fill={CREAM} />
    <rect x="360" y="294" width="60" height="12" rx="2" fill={CREAM} />
    <rect x="440" y="290" width="40" height="20" rx="3" fill={RED} />
  </svg>
);

const ProjectorScene = () => (
  <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect x="50" y="80" width="500" height="320" rx="8" fill={INK} />
    <rect x="62" y="92" width="476" height="296" rx="4" fill="#1a1a22" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x="62" y={92 + i * 50} width="476" height="20" fill={RED} opacity={0.05 + i * 0.04} />
    ))}
    <circle cx="180" cy="200" r="34" fill={RED} opacity="0.5" />
    <rect x="240" y="220" width="200" height="8" rx="2" fill={CREAM} opacity="0.3" />
    <rect x="240" y="240" width="160" height="8" rx="2" fill={CREAM} opacity="0.2" />
    <rect x="240" y="260" width="180" height="8" rx="2" fill={CREAM} opacity="0.15" />
    <rect x="260" y="450" width="80" height="36" rx="6" fill={INK} />
    <circle cx="318" cy="468" r="10" fill={RED} />
    <path d="M 318 450 L 300 400 L 540 90 L 300 400 Z" fill={RED} opacity="0.1" />
  </svg>
);

type Shot = { key: string; el: ReactNode };

function Gallery() {
  const [active, setActive] = useState(0);
  const shots: Shot[] = [
    { key: 'main',  el: <ProjectorArt brand /> },
    { key: 'top',   el: <ProjectorTop /> },
    { key: 'port',  el: <ProjectorPorts /> },
    { key: 'scene', el: <ProjectorScene /> },
  ];
  return (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
      <div style={{ background: CREAM, borderRadius: 24, aspectRatio: '1 / 1', overflow: 'hidden', position: 'relative', border: '1px solid rgba(20,20,26,0.06)' }}>
        {shots[active].el}
        <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ background: RED, color: CREAM, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', padding: '5px 10px', borderRadius: 999 }}>● YENİ</span>
          <span style={{ background: 'rgba(255,255,255,0.92)', color: INK, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', padding: '5px 10px', borderRadius: 999, textTransform: 'uppercase' }}>STOKTA · 24S KARGO</span>
        </div>
        <div style={{ position: 'absolute', bottom: 18, right: 18, background: 'rgba(20,20,26,0.85)', color: CREAM, padding: '6px 12px', borderRadius: 999, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {active + 1} / {shots.length}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
        {shots.map((s, i) => (
          <button key={s.key} onClick={() => setActive(i)} type="button" aria-label={`Görsel ${i + 1}`} style={{
            background: CREAM, borderRadius: 14, aspectRatio: '1/1',
            border: `2px solid ${i === active ? INK : 'rgba(20,20,26,0.08)'}`,
            cursor: 'pointer', padding: 6, overflow: 'hidden',
          }}>{s.el}</button>
        ))}
      </div>
    </div>
  );
}

type Term = { label: string; long: string; short: string };
const TERMS: Term[] = [
  { label: '1 Ay',  long: '3.650', short: '350' },
  { label: '3 Ay',  long: '2.850', short: '280' },
  { label: '6 Ay',  long: '2.150', short: '230' },
  { label: '12 Ay', long: '1.850', short: '190' },
];

const SHORT_TERM_LABELS = ['3 gün', '7 gün', '14 gün', '30 gün'];
const MONTH_MULTIPLIER = [1, 3, 6, 12];

function PriceCard() {
  const [termIdx, setTermIdx] = useState(2);
  const [type, setType] = useState<'uzun' | 'kisa'>('uzun');
  const term = TERMS[termIdx];
  const price = type === 'uzun' ? term.long : term.short;
  const unit = type === 'uzun' ? 'aylık' : 'günlük';
  const totalMonthly = parseInt(price.replace('.', ''), 10) * MONTH_MULTIPLIER[termIdx];
  const totalLabel = totalMonthly.toLocaleString('tr-TR');

  return (
    <div style={{ background: '#fff', borderRadius: 22, border: '1px solid rgba(20,20,26,0.08)', padding: 24 }}>
      <div style={{ display: 'flex', background: CREAM, padding: 4, borderRadius: 999, marginBottom: 18 }}>
        {([['uzun', 'Uzun Dönem'], ['kisa', 'Kısa Dönem']] as const).map(([k, l]) => (
          <button
            key={k}
            type="button"
            onClick={() => setType(k)}
            style={{
              flex: 1, padding: '10px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              background: type === k ? INK : 'transparent',
              color: type === k ? CREAM : 'rgba(20,20,26,0.65)',
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 600, fontSize: 14, letterSpacing: '-0.01em',
            }}
          >{l}</button>
        ))}
      </div>

      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
        {type === 'uzun' ? 'Kiralama süresi' : 'Gün sayısı seç'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 22 }}>
        {TERMS.map((t, i) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setTermIdx(i)}
            style={{
              border: `1.5px solid ${termIdx === i ? INK : 'rgba(20,20,26,0.15)'}`,
              background: termIdx === i ? INK : 'transparent',
              color: termIdx === i ? CREAM : INK,
              borderRadius: 12, padding: '11px 6px', cursor: 'pointer',
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 600, fontSize: 14,
            }}
          >{type === 'uzun' ? t.label : SHORT_TERM_LABELS[i]}</button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: '1px solid rgba(20,20,26,0.08)', paddingTop: 18 }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(20,20,26,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {unit} fiyat
          </div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 56, color: INK, letterSpacing: '-0.05em', lineHeight: 1 }}>
            {price} <span style={{ color: RED }}>TL</span>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(20,20,26,0.55)', marginTop: 6 }}>
            {type === 'uzun' ? `Toplam ${totalLabel} TL · iyzico ile 12 taksit` : 'KDV dahil · ücretsiz kurye'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
        <a
          href={ANKER_RENTAL_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          style={{
            flex: 2, background: INK, color: CREAM,
            border: 'none', borderRadius: 14, padding: '18px 22px', cursor: 'pointer',
            fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, textDecoration: 'none',
          }}
        >
          Hemen kirala
          <span style={{ width: 28, height: 28, borderRadius: 999, background: RED, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>→</span>
        </a>
        <button
          type="button"
          aria-label="Favorilere ekle"
          style={{
            background: 'transparent', color: INK,
            border: `1.5px solid ${INK}`, borderRadius: 14, padding: '18px 18px', cursor: 'pointer',
            fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 600, fontSize: 16,
          }}
        >♡</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginTop: 18 }}>
        {([
          ['🚚', '24 saatte kapıda'],
          ['🛡️', '2 yıl tam garanti'],
          ['↺',  '7 gün iade hakkı'],
          ['🔒', 'iyzico güvencesi'],
        ] as const).map(([icon, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(20,20,26,0.7)' }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: CREAM, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

const ProductHero = () => (
  <section className="hk-section hk-product-hero" style={{ background: CREAM, padding: '32px 64px 80px' }}>
    <div className="hk-product-hero-inner" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'flex-start' }}>
      <Gallery />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>Anker</div>
          <span style={{ width: 4, height: 4, background: 'rgba(20,20,26,0.3)', borderRadius: 999 }} />
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Projeksiyon · Anker Nebula serisi</div>
        </div>
        <h1 className="hk-product-h1" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 56, lineHeight: 0.96, letterSpacing: '-0.04em', margin: 0, color: INK }}>
          Nebula Apollo<br />
          <span style={{ color: RED }}>Taşınabilir Projeksiyon</span>
        </h1>
        <p style={{ marginTop: 18, fontSize: 18, lineHeight: 1.5, color: 'rgba(20,20,26,0.7)' }}>
          200 ANSI lümen parlaklık, 4 saat pil ömrü ve dahili Android arayüzü. Cafe açılışları, mekan etkinlikleri ve geçici sinema kurulumları için ideal — kurulum gerektirmez, kutusundan çıkar açarsın.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
          {['200 ANSI', '480p · HDR10', '4 saat pil', 'Android TV', 'Bluetooth hoparlör', 'HDMI · USB'].map((c) => (
            <span key={c} style={{
              border: '1px solid rgba(20,20,26,0.15)', background: '#fff',
              padding: '7px 13px', borderRadius: 999,
              fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.04em',
            }}>{c}</span>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <PriceCard />
        </div>

        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'center', gap: 10,
          background: 'rgba(20,20,26,0.04)', padding: '12px 16px', borderRadius: 14,
          fontSize: 13, color: 'rgba(20,20,26,0.7)',
        }}>
          <span style={{ width: 8, height: 8, background: RED, borderRadius: 999, flexShrink: 0 }} />
          <span><strong>on music × Hızla Kirala</strong> iş ortaklığıyla — siparişin Hızla Kirala üzerinden tamamlanır, kargosu on music tarafından koordine edilir.</span>
        </div>
      </div>
    </div>
  </section>
);

const Highlights = () => (
  <section className="hk-section" style={{ background: '#fff', padding: '36px 64px', borderTop: '1px solid rgba(20,20,26,0.06)', borderBottom: '1px solid rgba(20,20,26,0.06)' }}>
    <div className="hk-grid-4" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
      {[
        { t: '4 saat',   d: 'kesintisiz pil' },
        { t: '200 ANSI', d: '480p HDR projeksiyon' },
        { t: '0.9 kg',   d: 'çantanda taşınır' },
        { t: '24 ay',    d: 'tam garanti' },
      ].map((h) => (
        <div key={h.t} style={{ display: 'flex', flexDirection: 'column', borderLeft: `2px solid ${RED}`, paddingLeft: 16 }}>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1, letterSpacing: '-0.04em' }}>{h.t}</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 8 }}>{h.d}</div>
        </div>
      ))}
    </div>
  </section>
);

type TabKey = 'aciklama' | 'ozellikler' | 'kutu' | 'sartlar';

const TABS: Array<[TabKey, string]> = [
  ['aciklama',   'Açıklama'],
  ['ozellikler', 'Teknik özellikler'],
  ['kutu',       'Kutu içeriği'],
  ['sartlar',    'Kiralama şartları'],
];

const SPECS: Array<[string, string]> = [
  ['Marka',           'Anker'],                          ['Model',          'Nebula Apollo'],
  ['Parlaklık',       '200 ANSI lümen'],                 ['Çözünürlük',     '854×480 (1080p destekli)'],
  ['Görüntü oranı',   '16:9'],                           ['Yansıtma boyutu','40" – 100"'],
  ['Ses',             '8W dahili hoparlör'],             ['Pil ömrü',       '4 saat'],
  ['İşletim sistemi', 'Android TV 9.0'],                 ['Bağlantı',       'HDMI · USB-A · USB-C · AUX · Wi-Fi · BT 4.2'],
  ['Ağırlık',         '0.9 kg'],                         ['Boyut',          '128 × 128 × 52 mm'],
];

const BOX_CONTENTS = [
  'Nebula Apollo cihazı',
  'USB-C şarj kablosu',
  'Güç adaptörü (30W)',
  'HDMI kablosu (1.5m)',
  'Uzaktan kumanda + pil',
  'Taşıma kılıfı',
  'Kullanım kılavuzu (TR)',
  'on music kurulum kartı',
  'Hijyen sertifikası',
];

const FAQS: Array<[string, string]> = [
  ['Minimum kiralama süresi nedir?', 'Uzun dönem için minimum 1 ay. Kısa dönem için minimum 3 gündür.'],
  ['Erken iade yapabilir miyim?',    'Evet, uzun dönemde 14 günlük ihtar süresiyle erken iade mümkündür. Kalan günler iade edilir.'],
  ['Cihaz arızalanırsa ne olur?',    "Bize WhatsApp'tan ulaş, 24 saat içinde yedek cihaz gönderilir. Servis ücretsizdir."],
  ['Teslimat ne zaman yapılır?',     'Onaydan sonra İstanbul içi aynı gün, Türkiye geneli 24-48 saat içinde Yurtiçi Kargo ile kapına teslim.'],
];

function Description() {
  const [tab, setTab] = useState<TabKey>('aciklama');
  return (
    <section className="hk-section" style={{ background: CREAM, padding: '80px 64px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 4, marginBottom: 32, borderBottom: '1px solid rgba(20,20,26,0.12)', flexWrap: 'wrap' }}>
          {TABS.map(([k, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              style={{
                border: 'none', background: 'transparent', cursor: 'pointer',
                padding: '14px 22px', marginBottom: -1,
                fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em',
                color: tab === k ? INK : 'rgba(20,20,26,0.55)',
                borderBottom: tab === k ? `2px solid ${RED}` : '2px solid transparent',
              }}
            >{label}</button>
          ))}
        </div>

        {tab === 'aciklama' && (
          <div className="hk-desc-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <h3 className="hk-h3" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 36, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 18px' }}>
                Mekanını sinemaya, sahneye, sunum salonuna çevir.
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(20,20,26,0.75)', margin: '0 0 16px' }}>
                Nebula Apollo, 200 ANSI lümen parlaklığı ve 4 saat batarya ömrüyle kafe duvarına maç gösteriminden, kurumsal lansman geceleri için dış mekan projeksiyonuna kadar her senaryoya uyum sağlar. Android TV arayüzü sayesinde Netflix, YouTube, Spotify ve binlerce uygulamayı doğrudan üzerinden çalıştırır.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(20,20,26,0.75)', margin: 0 }}>
                Dahili 8W hoparlörü Bluetooth modunda taşınabilir hoparlör olarak da çalışır — tek cihazla iki ihtiyaç. Kalibrasyon, kurulum ve teslim sonrası destek on music ekibi tarafından sağlanır.
              </p>
              <div style={{ display: 'flex', gap: 24, marginTop: 28, flexWrap: 'wrap' }}>
                {([
                  ['Dış mekan etkinliği', '🌙'],
                  ['Kafe & restoran',     '☕'],
                  ['Lansman & sunum',     '◐'],
                ] as const).map(([t, e]) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 36, height: 36, background: '#fff', borderRadius: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, border: '1px solid rgba(20,20,26,0.08)' }}>{e}</span>
                    <span style={{ fontWeight: 600, fontSize: 14 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: INK, color: CREAM, borderRadius: 22, padding: 28 }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: RED, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>/ Bir bakışta</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  '200 ANSI lümen parlaklık',
                  'Native 480p · 1080p destekli',
                  '4 saat batarya · USB-C şarj',
                  'Android TV 9.0 dahili',
                  '8W omnidirectional hoparlör',
                  'HDMI, USB-A, AUX bağlantı',
                  'Otomatik keystone düzeltme',
                  '0.9 kg · cep boyutu',
                ].map((b, i) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: 'rgba(245,239,226,0.85)' }}>
                    <span style={{ color: RED, fontFamily: '"JetBrains Mono", monospace', fontSize: 12, width: 22, paddingTop: 4 }}>0{i + 1}</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {tab === 'ozellikler' && (
          <div className="hk-specs" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0, background: '#fff', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(20,20,26,0.08)' }}>
            {SPECS.map(([k, v], i) => (
              <div key={k} style={{
                padding: '14px 22px',
                display: 'flex', justifyContent: 'space-between', gap: 16,
                borderBottom: i < SPECS.length - 2 ? '1px solid rgba(20,20,26,0.06)' : 'none',
                borderRight: i % 2 === 0 ? '1px solid rgba(20,20,26,0.06)' : 'none',
              }}>
                <span style={{ color: 'rgba(20,20,26,0.55)', fontSize: 14 }}>{k}</span>
                <span style={{ fontWeight: 600, fontSize: 14, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
        )}

        {tab === 'kutu' && (
          <ul className="hk-grid-3" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {BOX_CONTENTS.map((it) => (
              <li key={it} style={{ background: '#fff', border: '1px solid rgba(20,20,26,0.08)', borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 22, height: 22, borderRadius: 999, background: RED, color: CREAM, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 15 }}>{it}</span>
              </li>
            ))}
          </ul>
        )}

        {tab === 'sartlar' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 880 }}>
            {FAQS.map(([q, a], i) => (
              <details key={q} open={i === 0} style={{ background: '#fff', border: '1px solid rgba(20,20,26,0.08)', borderRadius: 14, padding: '16px 20px' }}>
                <summary style={{ fontWeight: 600, fontSize: 16, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  {q}
                  <span style={{ color: RED }}>+</span>
                </summary>
                <p style={{ margin: '10px 0 0', fontSize: 15, lineHeight: 1.55, color: 'rgba(20,20,26,0.7)' }}>{a}</p>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

type RelatedGlyph = 'laptop' | 'console' | 'vr' | 'switch';

const RELATED: Array<{ brand: string; name: string; price: string; glyph: RelatedGlyph; href: string }> = [
  { brand: 'Apple',    name: 'MacBook Neo 12" M4',          price: '2.450', glyph: 'laptop',  href: `${PARTNER_BASE}/urun/macbook-neo-m4` },
  { brand: 'Sony',     name: 'PlayStation 5 Slim · 1TB',     price: '1.850', glyph: 'console', href: `${PARTNER_BASE}/urun/playstation-5-slim` },
  { brand: 'Meta',     name: 'Quest 3 VR · 128GB',          price: '2.300', glyph: 'vr',      href: `${PARTNER_BASE}/urun/meta-quest-3` },
  { brand: 'Nintendo', name: 'Switch OLED Model',           price: '1.030', glyph: 'switch',  href: `${PARTNER_BASE}/urun/nintendo-switch-oled` },
];

function RelatedSilhouette({ kind }: { kind: RelatedGlyph }) {
  if (kind === 'laptop') return (
    <svg viewBox="0 0 320 240" style={{ width: '100%', height: '100%' }}>
      <rect x="60" y="50" width="200" height="130" rx="8" fill={INK} />
      <rect x="70" y="60" width="180" height="110" fill={CREAM} />
      <rect x="40" y="180" width="240" height="14" rx="3" fill={INK} />
    </svg>
  );
  if (kind === 'console') return (
    <svg viewBox="0 0 320 240" style={{ width: '100%', height: '100%' }}>
      <rect x="120" y="30" width="80" height="180" rx="10" fill={INK} />
      <circle cx="160" cy="190" r="5" fill={RED} />
      <rect x="220" y="120" width="70" height="40" rx="8" fill={INK} opacity="0.7" />
    </svg>
  );
  if (kind === 'vr') return (
    <svg viewBox="0 0 320 240" style={{ width: '100%', height: '100%' }}>
      <path d="M 60 90 Q 60 60 100 60 L 220 60 Q 260 60 260 90 L 260 150 Q 260 180 220 180 L 200 180 L 160 150 L 120 180 L 100 180 Q 60 180 60 150 Z" fill={INK} />
      <ellipse cx="115" cy="120" rx="22" ry="18" fill={CREAM} />
      <ellipse cx="205" cy="120" rx="22" ry="18" fill={CREAM} />
      <circle cx="115" cy="120" r="8" fill={RED} />
      <circle cx="205" cy="120" r="8" fill={RED} />
    </svg>
  );
  return (
    <svg viewBox="0 0 320 240" style={{ width: '100%', height: '100%' }}>
      <rect x="60" y="70" width="200" height="100" rx="12" fill={INK} />
      <rect x="100" y="78" width="120" height="84" rx="4" fill={CREAM} />
      <circle cx="80" cy="100" r="4" fill={RED} />
    </svg>
  );
}

const Related = () => (
  <section className="hk-section" style={{ background: '#fff', padding: '80px 64px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="hk-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, gap: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: RED, marginBottom: 10 }}>/ Bunlar da ilgini çekebilir</div>
          <h2 className="hk-h2" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 48, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>Benzer kiralıklar.</h2>
        </div>
        <Link to="/hizla-kirala" style={{ color: INK, fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: `1.5px solid ${INK}`, paddingBottom: 3 }}>Tümünü gör →</Link>
      </div>
      <div className="hk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {RELATED.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer sponsored" style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(20,20,26,0.08)', textDecoration: 'none', color: INK }}>
            <div style={{ background: CREAM, height: 200 }}><RelatedSilhouette kind={p.glyph} /></div>
            <div style={{ padding: 18 }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(20,20,26,0.5)', textTransform: 'uppercase' }}>{p.brand}</div>
              <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', marginTop: 4, lineHeight: 1.2 }}>{p.name}</div>
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.03em' }}>{p.price} TL<span style={{ fontSize: 13, color: 'rgba(20,20,26,0.5)', fontWeight: 500 }}> /ay</span></div>
                <span style={{ color: RED, fontWeight: 600, fontSize: 14 }}>Kirala →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="hk-section" style={{ background: RED, color: CREAM, padding: '64px 64px' }}>
    <div className="hk-cta-inner" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 10 }}>/ Karar veremedin mi?</div>
        <h2 className="hk-h1-cta" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>15 dakikada beraber seçelim.</h2>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" style={{ background: WA, color: '#fff', padding: '18px 24px', borderRadius: 14, fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 18, textDecoration: 'none' }}>WhatsApp →</a>
        <a href={PHONE_HREF} style={{ background: INK, color: CREAM, padding: '18px 24px', borderRadius: 14, fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 18, textDecoration: 'none' }}>{PHONE_LABEL}</a>
      </div>
    </div>
  </section>
);

const FOOTER_COLS: Array<{ t: string; items: Array<{ label: string; href: string; external?: boolean }> }> = [
  { t: 'Sayfa', items: [
    { label: 'Anasayfa',        href: '/' },
    { label: 'Hizmetler',       href: '/hizmetler' },
    { label: 'Projeler',        href: '/portfolyo' },
    { label: 'Kiralık Ürünler', href: '/hizla-kirala' },
    { label: 'Hakkımızda',      href: '/hakkimizda' },
  ] },
  { t: 'Kiralama', items: [
    { label: 'Tüm kategoriler', href: PARTNER_BASE, external: true },
    { label: 'Yeni gelenler',   href: `${PARTNER_BASE}/yeni`, external: true },
    { label: 'Kampanyalar',     href: `${PARTNER_BASE}/kampanyalar`, external: true },
    { label: 'Nasıl çalışır?',  href: '/hizla-kirala' },
    { label: 'SSS',             href: '/sss' },
  ] },
  { t: 'İletişim', items: [
    { label: '+90 850 241 95 15', href: PHONE_HREF },
    { label: 'WhatsApp destek',   href: WHATSAPP_HREF, external: true },
    { label: 'proje@onmuzik.com', href: 'mailto:proje@onmuzik.com' },
    { label: '@onmuzikproje',     href: 'https://www.instagram.com/', external: true },
    { label: 'onmuzikproje.com',  href: '/' },
  ] },
];

const Footer = () => (
  <footer className="hk-footer" style={{ background: INK, color: CREAM, padding: '60px 64px 36px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="hk-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom: '1px solid rgba(245,239,226,0.1)' }}>
        <div>
          <Logo color={CREAM} discColor={RED} />
          <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.55, color: 'rgba(245,239,226,0.65)', maxWidth: 360 }}>
            Cafe, restoran, kulüp ve oteller için anahtar teslim ses, görüntü ve akustik çözümler. Kiralık ürün ihtiyaçların için Hızla Kirala iş ortağı.
          </p>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.t}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: RED, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>{col.t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map((item) => {
                const linkStyle: CSSProperties = { color: 'rgba(245,239,226,0.75)', textDecoration: 'none', fontSize: 14 };
                if (item.external) {
                  return <li key={item.label}><a href={item.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{item.label}</a></li>;
                }
                if (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
                  return <li key={item.label}><a href={item.href} style={linkStyle}>{item.label}</a></li>;
                }
                return <li key={item.label}><Link to={item.href} style={linkStyle}>{item.label}</Link></li>;
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="hk-footer-foot" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 13, color: 'rgba(245,239,226,0.5)', gap: 16, flexWrap: 'wrap' }}>
        <span>© 2026 on music proje · Tüm hakları saklıdır.</span>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' }}>onmuzikproje.com</span>
      </div>
    </div>
  </footer>
);

const RESPONSIVE_CSS = `
@media (max-width: 1100px) {
  .hk-product-h1 { font-size: 44px !important; }
  .hk-h2 { font-size: 36px !important; }
  .hk-h3 { font-size: 28px !important; }
  .hk-h1-cta { font-size: 44px !important; }
}
@media (max-width: 900px) {
  .hk-nav { padding: 14px 22px !important; flex-wrap: wrap; gap: 12px; }
  .hk-nav-links { display: none !important; }
  .hk-breadcrumb { padding-left: 22px !important; padding-right: 22px !important; }
  .hk-section { padding-left: 22px !important; padding-right: 22px !important; }
  .hk-product-hero { padding-top: 24px !important; padding-bottom: 56px !important; }
  .hk-product-hero-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
  .hk-product-h1 { font-size: 38px !important; }
  .hk-grid-4 { grid-template-columns: repeat(2,1fr) !important; }
  .hk-desc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  .hk-grid-3 { grid-template-columns: repeat(2,1fr) !important; }
  .hk-cta-inner { gap: 24px !important; }
  .hk-h1-cta { font-size: 32px !important; }
  .hk-footer { padding: 48px 22px 28px !important; }
  .hk-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
}
@media (max-width: 560px) {
  .hk-grid-4 { grid-template-columns: 1fr !important; }
  .hk-grid-3 { grid-template-columns: 1fr !important; }
  .hk-footer-grid { grid-template-columns: 1fr !important; }
  .hk-product-h1 { font-size: 32px !important; }
  .hk-h2 { font-size: 26px !important; }
  .hk-specs { grid-template-columns: 1fr !important; }
}
`;

export default function HizlaKiralaUrun() {
  useSeo({
    title: 'Anker Nebula Apollo Taşınabilir Projeksiyon — Kiralık | On Music × Hızla Kirala',
    description:
      '200 ANSI lümen, 4 saat pil, Android TV ve dahili Bluetooth hoparlör ile Anker Nebula Apollo projeksiyon kiralama. Aylık 1.850 TL\'den, 24 saatte kapıda. iyzico güvencesi, 2 yıl garanti.',
    path: '/hizla-kirala/anker-nebula-apollo',
    keywords: 'anker nebula apollo, projeksiyon kiralama, taşınabilir projeksiyon, kafe projeksiyon, etkinlik projeksiyon, hızla kirala, on music',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Anker Nebula Apollo Taşınabilir Projeksiyon',
      brand: { '@type': 'Brand', name: 'Anker' },
      category: 'Projeksiyon',
      description: '200 ANSI lümen parlaklık, 4 saat pil ömrü, dahili Android TV ve 8W Bluetooth hoparlör ile taşınabilir projeksiyon. Kafe, etkinlik ve geçici sinema kurulumları için kiralık.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'TRY',
        price: '1850',
        url: 'https://onmuzikproje.com/hizla-kirala/anker-nebula-apollo',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'On Muzik Proje × Hızla Kirala' },
      },
    },
  });

  return (
    <>
      <style>{RESPONSIVE_CSS}</style>
      <div style={{ background: CREAM, color: INK, fontFamily: 'Inter, sans-serif' }}>
        <Nav />
        <Breadcrumb />
        <ProductHero />
        <Highlights />
        <Description />
        <Related />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
