import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { useSeo } from '../lib/seo';

const RED = '#F83848';
const INK = '#14141a';
const CREAM = '#f7f3eb';
const WA = '#25d366';

const PARTNER_BASE = 'https://hizlakirala.com';
const WHATSAPP_HREF = 'https://wa.me/908502419515?text=Merhaba%2C%20kiralama%20i%C3%A7in%20yaz%C4%B1yorum.';
const PHONE_HREF = 'tel:+908502419515';
const PHONE_LABEL = '0850 241 9515';

type Glyph = 'projector' | 'laptop' | 'console' | 'vr' | 'switch' | 'scooter' | 'vacuum' | 'phone';

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

const Silhouette = ({ kind, color = INK, glow = RED }: { kind: Glyph; color?: string; glow?: string }) => {
  const base: CSSProperties = { width: '100%', height: '100%', display: 'block' };
  if (kind === 'projector') return (
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="50" y="80" width="200" height="100" rx="14" fill={color} />
      <circle cx="220" cy="130" r="32" fill={CREAM} />
      <circle cx="220" cy="130" r="20" fill={glow} />
      <circle cx="80" cy="105" r="5" fill={glow} />
      <rect x="100" y="190" width="100" height="6" rx="3" fill={color} opacity="0.4" />
    </svg>
  );
  if (kind === 'laptop') return (
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="60" y="50" width="200" height="130" rx="8" fill={color} />
      <rect x="70" y="60" width="180" height="110" fill={CREAM} />
      <rect x="40" y="180" width="240" height="14" rx="3" fill={color} />
      <rect x="140" y="180" width="40" height="6" rx="2" fill={color} opacity="0.4" />
    </svg>
  );
  if (kind === 'console') return (
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="120" y="30" width="80" height="180" rx="10" fill={color} />
      <rect x="120" y="30" width="80" height="180" rx="10" fill="none" stroke={CREAM} strokeWidth="2" />
      <circle cx="160" cy="190" r="5" fill={glow} />
      <rect x="220" y="120" width="70" height="40" rx="8" fill={color} opacity="0.7" />
      <circle cx="240" cy="140" r="6" fill={CREAM} />
      <circle cx="270" cy="140" r="6" fill={CREAM} />
    </svg>
  );
  if (kind === 'vr') return (
    <svg viewBox="0 0 320 240" style={base}>
      <path d="M 60 90 Q 60 60 100 60 L 220 60 Q 260 60 260 90 L 260 150 Q 260 180 220 180 L 200 180 L 160 150 L 120 180 L 100 180 Q 60 180 60 150 Z" fill={color} />
      <ellipse cx="115" cy="120" rx="22" ry="18" fill={CREAM} />
      <ellipse cx="205" cy="120" rx="22" ry="18" fill={CREAM} />
      <circle cx="115" cy="120" r="8" fill={glow} />
      <circle cx="205" cy="120" r="8" fill={glow} />
    </svg>
  );
  if (kind === 'switch') return (
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="60" y="70" width="200" height="100" rx="12" fill={color} />
      <rect x="100" y="78" width="120" height="84" rx="4" fill={CREAM} />
      <circle cx="80" cy="100" r="4" fill={glow} />
      <circle cx="80" cy="140" r="4" fill={CREAM} />
      <rect x="232" y="92" width="14" height="14" rx="3" fill={CREAM} />
      <rect x="232" y="118" width="14" height="14" rx="3" fill={CREAM} />
    </svg>
  );
  if (kind === 'scooter') return (
    <svg viewBox="0 0 320 240" style={base}>
      <circle cx="80" cy="180" r="28" fill="none" stroke={color} strokeWidth="6" />
      <circle cx="240" cy="180" r="28" fill="none" stroke={color} strokeWidth="6" />
      <line x1="80" y1="180" x2="220" y2="180" stroke={color} strokeWidth="6" />
      <line x1="240" y1="180" x2="240" y2="60" stroke={color} strokeWidth="6" />
      <line x1="240" y1="60" x2="220" y2="50" stroke={color} strokeWidth="6" />
      <line x1="240" y1="60" x2="260" y2="50" stroke={color} strokeWidth="6" />
      <rect x="140" y="170" width="80" height="14" rx="3" fill={glow} />
    </svg>
  );
  if (kind === 'vacuum') return (
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="148" y="40" width="24" height="120" rx="6" fill={color} />
      <rect x="120" y="160" width="80" height="50" rx="8" fill={color} />
      <circle cx="160" cy="55" r="14" fill={glow} />
      <rect x="130" y="200" width="60" height="14" rx="3" fill={color} opacity="0.5" />
    </svg>
  );
  if (kind === 'phone') return (
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="120" y="20" width="80" height="200" rx="14" fill={color} />
      <rect x="128" y="32" width="64" height="176" rx="6" fill={CREAM} />
      <rect x="150" y="40" width="20" height="6" rx="3" fill={color} />
      <circle cx="160" cy="200" r="6" fill={color} opacity="0.4" />
    </svg>
  );
  return null;
};

type Category = { name: string; count: number; glyph: Glyph; href: string };
const CATS: Category[] = [
  { name: 'Projeksiyon',         count: 12, glyph: 'projector', href: `${PARTNER_BASE}/kategori/projeksiyon` },
  { name: 'Bilgisayar & Tablet', count: 18, glyph: 'laptop',    href: `${PARTNER_BASE}/kategori/bilgisayar` },
  { name: 'Oyun & Konsol',       count: 9,  glyph: 'console',   href: `${PARTNER_BASE}/kategori/oyun-konsol` },
  { name: 'VR & Sanal Gerçeklik',count: 4,  glyph: 'vr',        href: `${PARTNER_BASE}/kategori/vr` },
  { name: 'Telefon',             count: 22, glyph: 'phone',     href: `${PARTNER_BASE}/kategori/telefon` },
  { name: 'Mikro Mobilite',      count: 6,  glyph: 'scooter',   href: `${PARTNER_BASE}/kategori/mobilite` },
  { name: 'Akıllı Ev',           count: 14, glyph: 'vacuum',    href: `${PARTNER_BASE}/kategori/akilli-ev` },
  { name: 'Handheld Oyun',       count: 5,  glyph: 'switch',    href: `${PARTNER_BASE}/kategori/handheld` },
];

type Product = {
  brand: string;
  name: string;
  tag: string | null;
  price: string;
  cat: string;
  glyph: Glyph;
  spec: string;
  href: string;
};

const PRODUCTS: Product[] = [
  { brand: 'Anker',    name: 'Nebula Apollo Taşınabilir Projeksiyon',          tag: 'YENİ', price: '1.850', cat: 'Projeksiyon',     glyph: 'projector', spec: '200 ANSI · Android',   href: `${PARTNER_BASE}/urun/anker-nebula-apollo` },
  { brand: 'Apple',    name: 'MacBook Neo 12" M4 · 16GB / 512GB',              tag: 'YENİ', price: '2.450', cat: 'Bilgisayar',      glyph: 'laptop',    spec: 'M4 · 16GB',            href: `${PARTNER_BASE}/urun/macbook-neo-m4` },
  { brand: 'Sony',     name: 'PlayStation 5 Slim · 1TB',                       tag: null,    price: '1.850', cat: 'Oyun & Konsol',   glyph: 'console',   spec: '4K HDR',               href: `${PARTNER_BASE}/urun/playstation-5-slim` },
  { brand: 'Meta',     name: 'Quest 3 VR Sanal Gerçeklik Gözlüğü · 128GB',     tag: 'YENİ', price: '2.300', cat: 'VR',              glyph: 'vr',        spec: 'Karma gerçeklik',      href: `${PARTNER_BASE}/urun/meta-quest-3` },
  { brand: 'Apple',    name: 'iPhone 17 Pro · 256GB · Kozmik Turuncu',         tag: 'YENİ', price: '7.500', cat: 'Telefon',         glyph: 'phone',     spec: 'A19 Pro · Ti',         href: `${PARTNER_BASE}/urun/iphone-17-pro` },
  { brand: 'Nintendo', name: 'Switch OLED Model',                              tag: null,    price: '1.030', cat: 'Handheld',        glyph: 'switch',    spec: '7" OLED',              href: `${PARTNER_BASE}/urun/nintendo-switch-oled` },
  { brand: 'Xiaomi',   name: 'Mi Pro 4 Elektrikli Scooter',                    tag: null,    price: '2.350', cat: 'Mobilite',        glyph: 'scooter',   spec: 'Şehir içi · 45 km',    href: `${PARTNER_BASE}/urun/xiaomi-mi-pro-4` },
  { brand: 'Dyson',    name: 'V15 Detect Kablosuz Süpürge',                    tag: 'YENİ', price: '1.600', cat: 'Akıllı Ev',       glyph: 'vacuum',    spec: 'Lazer · 60 dk',        href: `${PARTNER_BASE}/urun/dyson-v15-detect` },
];

const SITE_NAV: Array<{ label: string; to: string; external?: boolean }> = [
  { label: 'Hizmetler', to: '/hizmetler' },
  { label: 'Projeler', to: '/portfolyo' },
  { label: 'Kiralık Ürünler', to: '/hizla-kirala' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
];

const Nav = () => (
  <nav
    className="hk-nav"
    style={{
      background: 'rgba(247,243,235,0.92)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(20,20,26,0.08)',
      position: 'sticky', top: 0, zIndex: 50, padding: '18px 64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}
  >
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
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: WA, color: '#fff', padding: '10px 18px', borderRadius: 999,
        fontWeight: 600, fontSize: 15, textDecoration: 'none',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.8.1.2 1.8 2.8 4.4 3.9 2.6 1.1 2.6.7 3.1.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3 0-.1-.2-.2-.5-.3zM12 3.5C7.3 3.5 3.5 7.3 3.5 12c0 1.5.4 2.9 1.1 4.1l-1.1 4.4 4.5-1.2c1.2.7 2.5 1 4 1 4.7 0 8.5-3.8 8.5-8.5S16.7 3.5 12 3.5z"/></svg>
      {PHONE_LABEL}
    </a>
  </nav>
);

const Hero = () => (
  <section className="hk-hero" style={{ background: CREAM, padding: '88px 64px 96px', position: 'relative', overflow: 'hidden' }}>
    <svg viewBox="0 0 800 800" style={{ position: 'absolute', right: -200, top: -100, width: 720, height: 720, opacity: 0.5 }} aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx="400" cy="400" r={120 + i * 28} fill="none" stroke={INK} strokeOpacity="0.05" strokeWidth="1" />
      ))}
    </svg>

    <div className="hk-hero-inner" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(20,20,26,0.06)', padding: '8px 14px', borderRadius: 999,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: INK, marginBottom: 26,
        }}>
          <span style={{ width: 8, height: 8, background: RED, borderRadius: 999 }} />
          On Music × Hızla Kirala · resmi iş ortağı
        </div>
        <h1 className="hk-hero-h1" style={{
          fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800,
          fontSize: 96, lineHeight: 0.9, letterSpacing: '-0.05em', color: INK,
          margin: 0,
        }}>
          Almak<br />yerine, <span style={{ color: RED }}>kirala.</span>
        </h1>
        <p style={{ marginTop: 28, fontSize: 22, lineHeight: 1.4, color: 'rgba(20,20,26,0.7)', maxWidth: 540 }}>
          Projeksiyondan oyun konsoluna, MacBook'tan elektrikli scooter'a — On Music aracılığıyla kurduğumuz Hızla Kirala portföyünden ihtiyacın olanı aylıkla kullan.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <a href="#urunler" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: INK, color: CREAM, padding: '16px 26px', borderRadius: 999,
            fontWeight: 700, fontSize: 17, textDecoration: 'none',
            fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em',
          }}>
            Ürünleri keşfet
            <span style={{ width: 30, height: 30, borderRadius: 999, background: RED, color: CREAM, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</span>
          </a>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: `1.5px solid ${INK}`, color: INK, padding: '14px 22px', borderRadius: 999,
            fontWeight: 600, fontSize: 16, textDecoration: 'none',
          }}>Hızlı teklif al</a>
        </div>

        <div className="hk-hero-stats" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 580 }}>
          {[
            { v: '150+',  l: 'kiralık ürün' },
            { v: '24s',   l: 'kapıda teslim' },
            { v: '2 yıl', l: 'cihaz garantisi' },
          ].map((s) => (
            <div key={s.v} style={{ borderTop: `2px solid ${INK}`, paddingTop: 12 }}>
              <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1, letterSpacing: '-0.04em' }}>{s.v}</div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hk-hero-collage" style={{ position: 'relative', height: 540 }}>
        <div style={{ position: 'absolute', top: 0, right: 20, width: 280, background: '#fff', borderRadius: 22, padding: 18, boxShadow: '0 18px 40px rgba(20,20,26,0.10)', border: '1px solid rgba(20,20,26,0.06)' }}>
          <div style={{ background: CREAM, borderRadius: 14, height: 170, marginBottom: 12, overflow: 'hidden' }}>
            <Silhouette kind="projector" color={INK} glow={RED} />
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(20,20,26,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Anker</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', marginTop: 4, lineHeight: 1.2 }}>Nebula Apollo Projeksiyon</div>
          <div style={{ marginTop: 10, color: RED, fontWeight: 700, fontSize: 18 }}>1.850 TL <span style={{ color: 'rgba(20,20,26,0.5)', fontWeight: 500, fontSize: 13 }}>/ ay</span></div>
        </div>
        <div style={{ position: 'absolute', top: 220, left: 0, width: 260, background: INK, color: CREAM, borderRadius: 22, padding: 18, transform: 'rotate(-3deg)', boxShadow: '0 18px 40px rgba(20,20,26,0.25)' }}>
          <div style={{ background: '#1f1f28', borderRadius: 14, height: 150, marginBottom: 12, overflow: 'hidden' }}>
            <Silhouette kind="vr" color={CREAM} glow={RED} />
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(245,239,226,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Meta</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', marginTop: 4 }}>Quest 3 VR</div>
          <div style={{ marginTop: 10, color: RED, fontWeight: 700, fontSize: 17 }}>2.300 TL <span style={{ color: 'rgba(245,239,226,0.5)', fontWeight: 500, fontSize: 12 }}>/ ay</span></div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, right: 60, width: 280, background: RED, color: CREAM, borderRadius: 22, padding: 18, transform: 'rotate(4deg)', boxShadow: '0 18px 40px rgba(248,56,72,0.30)' }}>
          <div style={{ background: '#d0202f', borderRadius: 14, height: 170, marginBottom: 12, overflow: 'hidden' }}>
            <Silhouette kind="console" color={CREAM} glow={INK} />
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sony</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', marginTop: 4 }}>PlayStation 5 Slim</div>
          <div style={{ marginTop: 10, fontWeight: 700, fontSize: 18 }}>1.850 TL <span style={{ opacity: 0.7, fontWeight: 500, fontSize: 13 }}>/ ay</span></div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="hk-section" style={{ background: '#fff', padding: '72px 64px', borderTop: '1px solid rgba(20,20,26,0.06)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="hk-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, gap: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: RED, marginBottom: 10 }}>/ Neden kiralama</div>
          <h2 className="hk-h2" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>
            Sahip olmak değil, <span style={{ color: RED }}>kullanmak.</span>
          </h2>
        </div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: 'rgba(20,20,26,0.5)', letterSpacing: '0.08em' }}>04 AVANTAJ</div>
      </div>

      <div className="hk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {[
          { n: '01', t: 'Yüksek nakit yükü yok',     d: 'Tek seferde büyük bütçe çıkarmadan ihtiyacını karşıla. Aylık sabit ödeme, planlanabilir gider.' },
          { n: '02', t: 'Önce dene, sonra karar ver', d: 'Cihazı mekanında veya evinde gerçek koşullarda test et. Beğenmezsen iade kolay.' },
          { n: '03', t: 'Garanti ve servis',          d: 'Tüm cihazlar 2 yıl garantili. Arıza durumunda 24 saatte yedek cihaz.' },
          { n: '04', t: 'Anlık ihtiyaca cevap',       d: 'Etkinlik, geçici ofis, lansman — kısa süreli kullanım için anında çözüm.' },
        ].map((b) => (
          <div key={b.n} style={{
            background: CREAM, borderRadius: 20, padding: 26,
            border: '1px solid rgba(20,20,26,0.06)',
            display: 'flex', flexDirection: 'column', gap: 14, minHeight: 240,
          }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: RED, letterSpacing: '0.12em' }}>{b.n}</div>
            <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 24, lineHeight: 1.1, letterSpacing: '-0.02em', color: INK }}>{b.t}</div>
            <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(20,20,26,0.62)' }}>{b.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Categories = () => (
  <section className="hk-section" style={{ background: CREAM, padding: '80px 64px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="hk-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, gap: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: RED, marginBottom: 10 }}>/ Kategoriler</div>
          <h2 className="hk-h2" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>Aradığını bul.</h2>
        </div>
        <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer" style={{ color: INK, fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: `1.5px solid ${INK}`, paddingBottom: 3 }}>Tüm kategoriler →</a>
      </div>
      <div className="hk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {CATS.map((c) => (
          <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer sponsored" style={{
            background: '#fff', borderRadius: 20, padding: '24px 22px',
            border: '1px solid rgba(20,20,26,0.06)',
            textDecoration: 'none', color: INK,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 200, transition: 'all .2s',
          }}>
            <div style={{ height: 110, marginBottom: 4 }}>
              <Silhouette kind={c.glyph} color={INK} glow={RED} />
            </div>
            <div>
              <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em', lineHeight: 1.15 }}>{c.name}</div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.08em', marginTop: 6 }}>{c.count} ÜRÜN →</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

function renderProductCard(p: Product) {
  return (
    <div key={p.name} style={{
    background: '#fff', borderRadius: 22, overflow: 'hidden',
    border: '1px solid rgba(20,20,26,0.06)',
    display: 'flex', flexDirection: 'column', transition: 'transform .2s',
  }}>
    <div style={{ background: CREAM, height: 220, position: 'relative', overflow: 'hidden' }}>
      <Silhouette kind={p.glyph} color={INK} glow={RED} />
      {p.tag && (
        <span style={{
          position: 'absolute', top: 14, left: 14,
          background: RED, color: CREAM,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em',
          padding: '5px 10px', borderRadius: 999,
        }}>● {p.tag}</span>
      )}
      <span style={{
        position: 'absolute', top: 14, right: 14,
        background: 'rgba(255,255,255,0.9)', color: INK,
        fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em',
        padding: '5px 10px', borderRadius: 999, textTransform: 'uppercase',
      }}>{p.spec}</span>
    </div>
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', color: 'rgba(20,20,26,0.5)', textTransform: 'uppercase' }}>{p.brand}</div>
      <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 19, lineHeight: 1.2, letterSpacing: '-0.02em', minHeight: 46 }}>{p.name}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 6 }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(20,20,26,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>'dan başlayan</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 28, color: INK, letterSpacing: '-0.03em', lineHeight: 1 }}>{p.price} TL<span style={{ fontSize: 14, color: 'rgba(20,20,26,0.5)', fontWeight: 500 }}> /ay</span></div>
        </div>
        <a href={p.href} target="_blank" rel="noopener noreferrer sponsored" style={{
          background: INK, color: CREAM, padding: '11px 18px', borderRadius: 999,
          fontWeight: 600, fontSize: 14, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          Kirala <span style={{ color: RED }}>→</span>
        </a>
      </div>
    </div>
    </div>
  );
}

const Products = () => (
  <section id="urunler" className="hk-section" style={{ background: '#fff', padding: '80px 64px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="hk-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, gap: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: RED, marginBottom: 10 }}>/ Öne çıkan kiralıklar</div>
          <h2 className="hk-h2" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>En çok kiralananlar.</h2>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Tümü', 'Yeni', 'Oyun', 'Bilgisayar', 'Mobilite'].map((f, i) => (
            <span key={f} style={{
              background: i === 0 ? INK : 'transparent',
              color: i === 0 ? CREAM : INK,
              border: i === 0 ? 'none' : '1px solid rgba(20,20,26,0.15)',
              padding: '8px 14px', borderRadius: 999,
              fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer',
            }}>{f}</span>
          ))}
        </div>
      </div>
      <div className="hk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {PRODUCTS.map(renderProductCard)}
      </div>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer sponsored" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          border: `1.5px solid ${INK}`, color: INK, padding: '14px 26px', borderRadius: 999,
          fontWeight: 600, fontSize: 16, textDecoration: 'none',
        }}>Tüm ürünleri gör (150+) →</a>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="hk-section" style={{ background: INK, color: CREAM, padding: '80px 64px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="hk-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, gap: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: RED, marginBottom: 10 }}>/ Nasıl çalışır</div>
          <h2 className="hk-h2" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>
            4 adımda kapında.
          </h2>
        </div>
      </div>
      <div className="hk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {[
          { n: '01', t: 'Seç',       d: 'Ürünü ve kiralama süresini (1, 3, 6 veya 12 ay) sayfada seç.' },
          { n: '02', t: 'Başvur',    d: 'Kimlik bilgilerin ve adresinle 2 dakikada başvuruyu tamamla.' },
          { n: '03', t: 'Teslim al', d: 'Onaydan sonra 24 saat içinde kargo veya kurye ile teslim.' },
          { n: '04', t: 'İade et',   d: 'Süre bitince ücretsiz kurye iadesi. Uzatmak istersen tek tıkla.' },
        ].map((s, i) => (
          <div key={s.n} style={{
            background: '#1d1d24', border: '1px solid rgba(245,239,226,0.08)', borderRadius: 20,
            padding: 26, position: 'relative',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: RED, letterSpacing: '0.12em' }}>STEP {s.n}</span>
              {i < 3 && <span style={{ color: RED, fontFamily: '"JetBrains Mono", monospace', fontSize: 22 }}>→</span>}
            </div>
            <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 44, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 10 }}>{s.t}</div>
            <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(245,239,226,0.65)' }}>{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="hk-section" style={{ background: RED, color: CREAM, padding: '72px 64px', position: 'relative', overflow: 'hidden' }}>
    <svg viewBox="0 0 1440 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} preserveAspectRatio="xMidYMid slice" aria-hidden>
      {Array.from({ length: 28 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 16} x2="1440" y2={i * 16} stroke={CREAM} strokeWidth="0.8" />
      ))}
    </svg>
    <div className="hk-cta-inner" style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 14 }}>
          / Ne kiralayacağına karar veremedin mi?
        </div>
        <h2 className="hk-h1-cta" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 84, lineHeight: 0.9, letterSpacing: '-0.05em', margin: 0 }}>
          Sana <span style={{ color: INK }}>doğru ürünü</span> birlikte seçelim.
        </h2>
        <p style={{ marginTop: 22, fontSize: 19, lineHeight: 1.45, maxWidth: 580, opacity: 0.92 }}>
          Mekanın, ihtiyacın ve bütçen üzerinde 15 dakika konuşalım. WhatsApp veya telefondan sana en uygun kombinasyonu önerelim.
        </p>
      </div>
      <div style={{ background: INK, borderRadius: 22, padding: 26, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: WA, color: '#fff', padding: '18px 22px', borderRadius: 14,
          textDecoration: 'none', fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em',
        }}>
          WhatsApp'tan yaz
          <span>→</span>
        </a>
        <a href={PHONE_HREF} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: CREAM, color: INK, padding: '18px 22px', borderRadius: 14,
          textDecoration: 'none', fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em',
        }}>
          {PHONE_LABEL}
          <span style={{ color: RED }}>→</span>
        </a>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(245,239,226,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>
          ● Hafta içi 09:00 — 19:00 canlı destek
        </div>
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
    { label: 'Nasıl çalışır?',  href: '#urunler' },
    { label: 'SSS',             href: '/sss' },
  ] },
  { t: 'İletişim', items: [
    { label: '+90 850 241 95 15',   href: PHONE_HREF },
    { label: 'WhatsApp destek',     href: WHATSAPP_HREF, external: true },
    { label: 'proje@onmuzik.com',   href: 'mailto:proje@onmuzik.com' },
    { label: '@onmuzikproje',       href: 'https://www.instagram.com/', external: true },
    { label: 'onmuzikproje.com',    href: '/' },
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
          <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(245,239,226,0.08)', padding: '8px 14px', borderRadius: 999, fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <span style={{ width: 8, height: 8, background: RED, borderRadius: 999 }} />
            Resmi iş ortağı · Hızla Kirala
          </div>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.t}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: RED, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>{col.t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map((item) => {
                const linkStyle: CSSProperties = { color: 'rgba(245,239,226,0.75)', textDecoration: 'none', fontSize: 14 };
                if (item.external) {
                  return (
                    <li key={item.label}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{item.label}</a>
                    </li>
                  );
                }
                if (item.href.startsWith('#') || item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
                  return (
                    <li key={item.label}><a href={item.href} style={linkStyle}>{item.label}</a></li>
                  );
                }
                return (
                  <li key={item.label}><Link to={item.href} style={linkStyle}>{item.label}</Link></li>
                );
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
  .hk-hero-h1 { font-size: 72px !important; }
  .hk-h2 { font-size: 44px !important; }
  .hk-h1-cta { font-size: 60px !important; }
}
@media (max-width: 900px) {
  .hk-nav { padding: 14px 22px !important; flex-wrap: wrap; gap: 12px; }
  .hk-nav-links { display: none !important; }
  .hk-hero { padding: 56px 22px 64px !important; }
  .hk-hero-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
  .hk-hero-h1 { font-size: 56px !important; }
  .hk-hero-collage { height: 460px !important; }
  .hk-hero-stats { max-width: 100% !important; }
  .hk-section { padding-left: 22px !important; padding-right: 22px !important; padding-top: 56px !important; padding-bottom: 56px !important; }
  .hk-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
  .hk-h2 { font-size: 36px !important; }
  .hk-cta-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
  .hk-h1-cta { font-size: 44px !important; }
  .hk-footer { padding: 48px 22px 28px !important; }
  .hk-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
}
@media (max-width: 560px) {
  .hk-grid-4 { grid-template-columns: 1fr !important; }
  .hk-hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
  .hk-hero-collage { height: 420px !important; }
  .hk-footer-grid { grid-template-columns: 1fr !important; }
  .hk-hero-h1 { font-size: 44px !important; }
  .hk-h2 { font-size: 30px !important; }
  .hk-h1-cta { font-size: 36px !important; }
}
`;

export default function HizlaKirala() {
  useSeo({
    title: 'Kiralık Ürünler — On Music × Hızla Kirala Resmi İş Ortağı | On Muzik Proje',
    description:
      'Projeksiyon, MacBook, PS5, Meta Quest 3, iPhone 17 Pro, elektrikli scooter ve daha fazlası — On Music aracılığıyla Hızla Kirala portföyünden aylıkla kirala. 150+ ürün, 24 saatte teslim, 2 yıl cihaz garantisi.',
    path: '/hizla-kirala',
    keywords: 'kiralık ürün, projeksiyon kiralama, macbook kiralama, ps5 kiralama, meta quest 3 kiralama, iphone kiralama, scooter kiralama, dyson kiralama, hızla kirala, on music',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Kiralık Ürünler — On Music × Hızla Kirala',
      url: 'https://onmuzikproje.com/hizla-kirala',
      isPartOf: { '@id': 'https://onmuzikproje.com/#website' },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: PRODUCTS.length,
        itemListElement: PRODUCTS.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `${p.brand} — ${p.name}`,
          url: p.href,
        })),
      },
    },
  });

  return (
    <>
      <style>{RESPONSIVE_CSS}</style>
      <div style={{ background: CREAM, color: INK, fontFamily: 'Inter, sans-serif' }}>
        <Nav />
        <Hero />
        <Benefits />
        <Categories />
        <Products />
        <HowItWorks />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
