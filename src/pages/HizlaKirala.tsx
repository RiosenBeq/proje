import { Link } from 'react-router-dom';
import { useState, type CSSProperties } from 'react';
import { useSeo } from '../lib/seo';
import { PRODUCTS as PRODUCTS_FULL } from '../lib/hizla-kirala-products';

const RED = '#F83848';
const INK = '#14141a';
const CREAM = '#f7f3eb';
const WA = '#25d366';

const PARTNER_BASE = 'https://hizlakirala.com';
// Kiralama sayfasına özel WhatsApp + telefon hattı (Hızla Kirala ortaklığı için
// ayrı operasyon). Site geneli numara 0850 241 9515 olmaya devam ediyor.
const WHATSAPP_HREF = 'https://wa.me/905434123380?text=Merhaba%2C%20kiralama%20i%C3%A7in%20yaz%C4%B1yorum.';
const PHONE_HREF = 'tel:+905434123380';
const PHONE_LABEL = '0543 412 33 80';

type Glyph = 'projector' | 'laptop' | 'console' | 'vacuum' | 'phone' | 'bottle' | 'wand';

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
  if (kind === 'bottle') return (
    // Bebek biberon silüeti — anne & bebek kategorisi
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="140" y="40" width="40" height="14" rx="3" fill={color} />
      <rect x="135" y="54" width="50" height="10" rx="3" fill={glow} />
      <path d="M130 64 L130 200 Q130 220 160 220 Q190 220 190 200 L190 64 Z" fill={color} />
      <rect x="138" y="100" width="44" height="4" rx="2" fill={CREAM} opacity="0.6" />
      <rect x="138" y="130" width="44" height="4" rx="2" fill={CREAM} opacity="0.6" />
      <rect x="138" y="160" width="44" height="4" rx="2" fill={CREAM} opacity="0.6" />
    </svg>
  );
  if (kind === 'wand') return (
    // Saç şekillendirici / kuru kuaför sopası — şımart kendini kategorisi
    <svg viewBox="0 0 320 240" style={base}>
      <rect x="148" y="30" width="24" height="100" rx="6" fill={color} />
      <ellipse cx="160" cy="30" rx="14" ry="8" fill={glow} />
      <rect x="146" y="130" width="28" height="80" rx="6" fill={CREAM} stroke={color} strokeWidth="2" />
      <circle cx="160" cy="155" r="3" fill={color} />
      <circle cx="160" cy="170" r="3" fill={color} opacity="0.5" />
      <rect x="152" y="190" width="16" height="10" rx="2" fill={color} opacity="0.3" />
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

type Category = { name: string; count: number; glyph: Glyph; href: string; subs: string[] };
const CATS: Category[] = [
  { name: 'Şımart Kendini',      count: 11, glyph: 'wand',      href: `${PARTNER_BASE}/urunler/kategori/simart-kendini`,                        subs: ['Saç Bakımı', 'Cilt Bakımı'] },
  { name: 'Ev Aletleri',         count: 22, glyph: 'vacuum',    href: `${PARTNER_BASE}/urunler/kategori/ev-aletleri-kiralama`,                  subs: ['Süpürge', 'Robot Süpürge', 'Hava Temizleyici', 'Buharlı Ütü'] },
  { name: 'Anne & Bebek',        count: 9,  glyph: 'bottle',    href: `${PARTNER_BASE}/urunler/kategori/anne-bebek-urunleri-kiralama`,          subs: ['Oto Koltuğu', 'Bebek Beşiği'] },
  { name: 'Oyun & Hobi',         count: 14, glyph: 'console',   href: `${PARTNER_BASE}/urunler/kategori/oyun-ve-hobi-kiralama`,                 subs: ['Konsol', 'VR', 'Drone'] },
  { name: 'Kamera & Aksesuar',   count: 18, glyph: 'projector', href: `${PARTNER_BASE}/urunler/kategori/kamera-ve-aksesuar-kiralama`,           subs: ['Aksiyon Kamera'] },
  { name: 'Telefon',             count: 6,  glyph: 'phone',     href: `${PARTNER_BASE}/urunler/kategori/telefon-kiralama`,                      subs: ['iPhone', 'Samsung'] },
  { name: 'Bilgisayar & Tablet', count: 28, glyph: 'laptop',    href: `${PARTNER_BASE}/urunler/kategori/bilgisayar-tablet-kiralama`,            subs: ['MacBook', 'iPad'] },
];

type Product = {
  brand: string;
  name: string;
  tag: string | null;
  price: string;
  cat: string;
  href: string;
  image: string;
  internal: true;
  popular: boolean;
  slug: string;
};

// Tüm 20 ürünü tek bir kaynaktan (hizla-kirala-products.ts) çekiyoruz.
// Burada katalog kartı için sadeleştirilmiş Product type'ına projeksiyon yapıyoruz.
const PRODUCTS: Product[] = PRODUCTS_FULL.map((p) => ({
  brand: p.brand,
  name: p.name,
  tag: p.tag,
  price: p.priceFrom,
  cat: p.category,
  href: `/hizla-kirala/${p.slug}`,
  image: p.images[0],
  internal: true,
  popular: !!p.popular,
  slug: p.slug,
}));
const POPULAR_PRODUCTS: Product[] = PRODUCTS.filter((p) => p.popular);
// Filter chip seçenekleri — PRODUCTS'taki tüm kategoriler + Tümü.
const PRODUCT_FILTERS: string[] = ['Tümü', ...Array.from(new Set(PRODUCTS.map((p) => p.cat)))];


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
          background: 'rgba(20,20,26,0.06)', padding: '8px 14px 8px 12px', borderRadius: 999,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: INK, marginBottom: 26,
        }}>
          <img src="/assets/on-music-logo-dark.png" alt="On Music" width="80" height="16" loading="eager" decoding="async" style={{ display: 'block', height: 16, width: 'auto' }} />
          <span style={{ opacity: 0.55, fontWeight: 600 }}>×</span>
          <img src="/assets/hizla-kirala/hizlakirala-logo.png" alt="Hızla Kirala" width="78" height="14" loading="eager" decoding="async" style={{ display: 'block', height: 14, width: 'auto' }} />
          <span style={{ opacity: 0.55 }}>· resmi iş ortağı</span>
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

      <div className="hk-hero-collage" style={{ position: 'relative', height: 600 }}>
        {/* Dekoratif arka plan — küçük renkli noktalar + bağlantı çizgisi */}
        <svg viewBox="0 0 580 600" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden>
          <circle cx="540" cy="320" r="5" fill={RED} opacity="0.55" />
          <circle cx="40" cy="220" r="4" fill={INK} opacity="0.35" />
          <circle cx="320" cy="560" r="6" fill={RED} opacity="0.40" />
          <circle cx="80" cy="100" r="3" fill={INK} opacity="0.30" />
          <path d="M 260 220 Q 310 200 360 220" stroke={INK} strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
        </svg>

        {/* Anker — odak noktası (rotation yok, en üstte) */}
        <Link to="/hizla-kirala/anker-nebula-apollo" className="hk-hero-anker" style={{ position: 'absolute', top: 8, right: 0, width: 308, background: '#fff', borderRadius: 22, padding: 18, boxShadow: '0 22px 48px rgba(20,20,26,0.14)', border: '1.5px solid rgba(20,20,26,0.14)', textDecoration: 'none', color: 'inherit', display: 'block', zIndex: 3 }}>
          <span style={{ position: 'absolute', top: 14, left: 14, background: RED, color: CREAM, fontFamily: '"JetBrains Mono", monospace', fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: 999, zIndex: 2 }}>ÇOK KİRALANAN</span>
          <div style={{ background: CREAM, borderRadius: 14, height: 210, marginBottom: 14, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://api.hizlakirala.com/storage/products/gallery/01KKH2M0E907VV6SFN50PGQ270.jpg" alt="Anker Nebula Apollo Taşınabilir Projeksiyon Cihazı" loading="lazy" decoding="async" style={{ maxWidth: '92%', maxHeight: '92%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(20,20,26,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Anker</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em', marginTop: 4, lineHeight: 1.2 }}>Nebula Apollo Projeksiyon</div>
          <div style={{ marginTop: 10, color: RED, fontWeight: 700, fontSize: 19 }}>1.850 TL <span style={{ color: 'rgba(20,20,26,0.5)', fontWeight: 500, fontSize: 13 }}>/ ay</span></div>
        </Link>

        {/* Dyson — sol-orta, hafif sola eğik */}
        <Link to="/hizla-kirala/dyson-airwrap" className="hk-hero-dyson" style={{ position: 'absolute', top: 290, left: 0, width: 232, background: INK, color: CREAM, borderRadius: 22, padding: 16, transform: 'rotate(-4deg)', boxShadow: '0 18px 40px rgba(20,20,26,0.28)', textDecoration: 'none', display: 'block', zIndex: 1 }}>
          <div style={{ background: CREAM, borderRadius: 12, height: 132, marginBottom: 10, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://api.hizlakirala.com/storage/products/gallery/01KKH3YA4THFSY8EG0RSV3CDWE.webp" alt="Dyson Airwrap ID Ceramic Pink Saç Şekillendirici" loading="lazy" decoding="async" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: 'rgba(245,239,226,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Dyson</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em', marginTop: 4 }}>Airwrap ID</div>
          <div style={{ marginTop: 8, color: RED, fontWeight: 700, fontSize: 16 }}>1.600 TL <span style={{ color: 'rgba(245,239,226,0.5)', fontWeight: 500, fontSize: 11 }}>/ ay</span></div>
        </Link>

        {/* PS5 — sağ-alt, hafif sağa eğik */}
        <Link to="/hizla-kirala/playstation-5-slim" className="hk-hero-ps5" style={{ position: 'absolute', bottom: 0, right: 90, width: 240, background: RED, color: CREAM, borderRadius: 22, padding: 16, transform: 'rotate(5deg)', boxShadow: '0 22px 44px rgba(248,56,72,0.34)', textDecoration: 'none', display: 'block', zIndex: 2 }}>
          <div style={{ background: CREAM, borderRadius: 12, height: 144, marginBottom: 10, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://api.hizlakirala.com/storage/products/gallery/01KF6951YBD8S78SSYDB1N0FAG.webp" alt="Sony PlayStation 5 Slim 1TB Oyun Konsolu" loading="lazy" decoding="async" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sony</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em', marginTop: 4 }}>PlayStation 5 Slim</div>
          <div style={{ marginTop: 8, fontWeight: 700, fontSize: 16 }}>1.850 TL <span style={{ opacity: 0.7, fontWeight: 500, fontSize: 11 }}>/ ay</span></div>
        </Link>

        {/* Floating "AYLIK KİRALA" disc — sol üst köşede, hafif eğik */}
        <div className="hk-hero-disc" style={{
          position: 'absolute', top: 56, left: 30,
          width: 92, height: 92, borderRadius: 999,
          background: INK, color: CREAM,
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          fontFamily: '"JetBrains Mono", monospace', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1.2,
          boxShadow: '0 14px 30px rgba(20,20,26,0.22)',
          transform: 'rotate(-12deg)', zIndex: 4,
          textTransform: 'uppercase',
        }} aria-hidden>
          AYLIK<br />KİRALA<span style={{ color: RED }}>→</span>
        </div>

        {/* Floating count chip — sağ alt, arka planda */}
        <div style={{
          position: 'absolute', top: 230, right: 8,
          background: CREAM, color: INK,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
          padding: '6px 12px', borderRadius: 999,
          boxShadow: '0 8px 20px rgba(20,20,26,0.10)',
          border: `1.5px solid rgba(20,20,26,0.14)`,
          transform: 'rotate(8deg)', zIndex: 4,
          textTransform: 'uppercase',
        }} aria-hidden>
          +150 ürün
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
          <div key={b.n} className="hk-card" style={{
            background: CREAM, borderRadius: 20, padding: 26,
            border: '1.5px solid rgba(20,20,26,0.14)',
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
  <section id="kategoriler" className="hk-section" style={{ background: CREAM, padding: '80px 64px' }}>
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
          <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer sponsored" className="hk-card" style={{
            background: '#fff', borderRadius: 20, padding: '24px 22px',
            border: '1.5px solid rgba(20,20,26,0.14)',
            textDecoration: 'none', color: INK,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 230,
          }}>
            <div style={{ height: 96, marginBottom: 4 }}>
              <Silhouette kind={c.glyph} color={INK} glow={RED} />
            </div>
            <div>
              <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em', lineHeight: 1.15 }}>{c.name}</div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, color: 'rgba(20,20,26,0.55)', marginTop: 6, lineHeight: 1.35 }}>{c.subs.join(' · ')}</div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.08em', marginTop: 8 }}>{c.count} ÜRÜN →</div>
            </div>
          </a>
        ))}
        <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer sponsored" className="hk-card-dark" style={{
          background: INK, color: CREAM, borderRadius: 20, padding: '24px 22px',
          border: '1.5px solid rgba(245,239,226,0.14)',
          textDecoration: 'none',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: 230, position: 'relative', overflow: 'hidden',
        }}>
          <svg viewBox="0 0 240 240" style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, opacity: 0.18 }} aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <circle key={i} cx="120" cy="120" r={20 + i * 14} fill="none" stroke={CREAM} strokeWidth="1" />
            ))}
          </svg>
          <div style={{ height: 96, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <span className="hk-card-cta-arrow" style={{
              width: 56, height: 56, borderRadius: 999, background: RED,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 28, color: CREAM,
            }}>→</span>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1.15 }}>Tümünü gör</div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, color: 'rgba(245,239,226,0.65)', marginTop: 6, lineHeight: 1.35 }}>150+ ürün · 30+ alt kategori</div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: RED, letterSpacing: '0.08em', marginTop: 8 }}>HIZLAKIRALA.COM →</div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

function renderProductCard(p: Product) {
  return (
    <div key={p.name} className="hk-card hk-product-card" style={{
    background: '#fff', borderRadius: 22, overflow: 'hidden',
    border: '1.5px solid rgba(20,20,26,0.14)',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ background: CREAM, height: 220, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(20,20,26,0.10)' }}>
      <img src={p.image} alt={`${p.brand} ${p.name}`} loading="lazy" decoding="async" style={{ maxWidth: '88%', maxHeight: '88%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
      {p.tag && (
        <span style={{
          position: 'absolute', top: 12, left: 12,
          background: RED, color: CREAM,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 9, fontWeight: 600, letterSpacing: '0.1em',
          padding: '3px 8px', borderRadius: 999,
        }}>{p.tag}</span>
      )}
    </div>
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', color: 'rgba(20,20,26,0.5)', textTransform: 'uppercase' }}>{p.brand}</div>
      <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 19, lineHeight: 1.2, letterSpacing: '-0.02em', minHeight: 46 }}>{p.name}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 6 }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(20,20,26,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>'dan başlayan</div>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 28, color: INK, letterSpacing: '-0.03em', lineHeight: 1 }}>{p.price} TL<span style={{ fontSize: 14, color: 'rgba(20,20,26,0.5)', fontWeight: 500 }}> /ay</span></div>
        </div>
        {p.internal ? (
          <Link to={p.href} className="hk-pill" style={{
            background: INK, color: CREAM, padding: '11px 18px', borderRadius: 999,
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Kirala <span style={{ color: RED }}>→</span>
          </Link>
        ) : (
          <a href={p.href} target="_blank" rel="noopener noreferrer sponsored" className="hk-pill" style={{
            background: INK, color: CREAM, padding: '11px 18px', borderRadius: 999,
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Kirala <span style={{ color: RED }}>→</span>
          </a>
        )}
      </div>
    </div>
    </div>
  );
}

// Resmi distribütör markalar — kataloğumuzdaki üreticiler. SEO için brand
// keyword density + kullanıcı güveni için visual trust strip.
const BRAND_LIST = [
  'Apple', 'Sony', 'Dyson', 'Nintendo', 'Meta', 'Anker', 'Xiaomi',
  'DJI', 'Karaca', 'Kärcher', 'Cybex', 'Dreame', 'FOREO', 'Philips',
];

const BrandStrip = () => (
  <section className="hk-section" style={{ background: '#fff', padding: '40px 64px', borderTop: '1px solid rgba(20,20,26,0.06)', borderBottom: '1px solid rgba(20,20,26,0.06)' }} aria-label="Kataloğumuzdaki markalar">
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 28 }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', flexShrink: 0 }}>
        / Kataloğumuzdaki <strong style={{ color: INK, fontWeight: 700 }}>markalar</strong>
      </div>
      <div style={{ display: 'flex', gap: '28px 32px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end' }}>
        {BRAND_LIST.map((b) => (
          <span key={b} style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 17, color: 'rgba(20,20,26,0.68)', letterSpacing: '-0.025em' }}>{b}</span>
        ))}
      </div>
    </div>
  </section>
);

const EnCokKiralananlar = () => (
  <section id="en-cok-kiralananlar" className="hk-section" style={{ background: '#fff', padding: '80px 64px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="hk-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, gap: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: RED, marginBottom: 10 }}>/ En Çok Kiralananlar</div>
          <h2 className="hk-h2" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>Kullanıcıların ilk tercihi.</h2>
        </div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: 'rgba(20,20,26,0.5)', letterSpacing: '0.08em' }}>{POPULAR_PRODUCTS.length} ÜRÜN</div>
      </div>
      <div className="hk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {POPULAR_PRODUCTS.map(renderProductCard)}
      </div>
    </div>
  </section>
);

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tümü');
  const visibleProducts = activeFilter === 'Tümü'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.cat === activeFilter);
  return (
    <section id="urunler" className="hk-section" style={{ background: CREAM, padding: '80px 64px', borderTop: '1px solid rgba(20,20,26,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="hk-section-head" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: RED, marginBottom: 10 }}>/ Tüm katalog</div>
            <h2 className="hk-h2" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', margin: 0 }}>Tüm kiralık ürünler.</h2>
          </div>
          <div role="tablist" aria-label="Kategori filtresi" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PRODUCT_FILTERS.map((f) => {
              const active = f === activeFilter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(f)}
                  className="hk-chip"
                  style={{
                    background: active ? INK : 'transparent',
                    color: active ? CREAM : INK,
                    border: active ? '1px solid transparent' : '1px solid rgba(20,20,26,0.15)',
                    padding: '8px 14px', borderRadius: 999,
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
                    cursor: 'pointer', fontWeight: 500,
                  }}
                >{f}</button>
              );
            })}
          </div>
        </div>
        {visibleProducts.length > 0 ? (
          <div className="hk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {visibleProducts.map(renderProductCard)}
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: 22, border: '1.5px solid rgba(20,20,26,0.14)', padding: '48px 24px', textAlign: 'center' }}>
            <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Bu kategoride henüz ürün yok</div>
            <div style={{ fontSize: 15, color: 'rgba(20,20,26,0.6)' }}>Tüm kataloğu görmek için filtreyi temizleyin.</div>
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer sponsored" className="hk-pill-light" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            border: `1.5px solid ${INK}`, color: INK, padding: '14px 26px', borderRadius: 999,
            fontWeight: 600, fontSize: 16, textDecoration: 'none',
          }}>Tüm ürünleri gör (150+) →</a>
        </div>
      </div>
    </section>
  );
};

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
          <div key={s.n} className="hk-card-dark" style={{
            background: '#1d1d24', border: '1.5px solid rgba(245,239,226,0.14)', borderRadius: 20,
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
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <a href={`${PARTNER_BASE}/nasil-calisir`} target="_blank" rel="noopener noreferrer sponsored" className="hk-pill" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: CREAM, color: INK, padding: '14px 26px', borderRadius: 999,
          fontWeight: 600, fontSize: 16, textDecoration: 'none',
        }}>Tüm süreci hizlakirala.com'da gör <span style={{ color: RED }}>→</span></a>
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
    { label: 'Ev Aletleri',        href: `${PARTNER_BASE}/urunler/kategori/ev-aletleri-kiralama`, external: true },
    { label: 'Bilgisayar & Tablet',href: `${PARTNER_BASE}/urunler/kategori/bilgisayar-tablet-kiralama`, external: true },
    { label: 'Oyun & Hobi',        href: `${PARTNER_BASE}/urunler/kategori/oyun-ve-hobi-kiralama`, external: true },
    { label: 'Kamera & Aksesuar',  href: `${PARTNER_BASE}/urunler/kategori/kamera-ve-aksesuar-kiralama`, external: true },
    { label: 'Şımart Kendini',     href: `${PARTNER_BASE}/urunler/kategori/simart-kendini`, external: true },
  ] },
  { t: 'İletişim', items: [
    { label: '+90 543 412 33 80',   href: PHONE_HREF },
    { label: 'WhatsApp destek',     href: WHATSAPP_HREF, external: true },
    { label: 'proje@onmuzik.com',   href: 'mailto:proje@onmuzik.com' },
    { label: '@onmuzik',            href: 'https://www.instagram.com/onmuzik', external: true },
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
          <a
            href="https://www.hizlakirala.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hızla Kirala — resmi iş ortağı (yeni sekmede açılır)"
            style={{
              marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 12,
              background: 'rgba(245,239,226,0.08)', padding: '10px 16px', borderRadius: 999,
              fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.12em',
              textTransform: 'uppercase', textDecoration: 'none', color: CREAM,
            }}
          >
            <span style={{ opacity: 0.75 }}>Resmi iş ortağı</span>
            <img src="/assets/hizla-kirala/hizlakirala-logo.png" alt="Hızla Kirala" width="84" height="16" loading="lazy" decoding="async" style={{ display: 'block', height: 16, width: 'auto', filter: 'brightness(1.05)' }} />
          </a>
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
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="hk-footer-link" style={linkStyle}>{item.label}</a>
                    </li>
                  );
                }
                if (item.href.startsWith('#') || item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
                  return (
                    <li key={item.label}><a href={item.href} className="hk-footer-link" style={linkStyle}>{item.label}</a></li>
                  );
                }
                return (
                  <li key={item.label}><Link to={item.href} className="hk-footer-link" style={linkStyle}>{item.label}</Link></li>
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
/* ─── Hover & interaction effects ─── */
.hk-card { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.hk-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(20,20,26,0.10); border-color: rgba(20,20,26,0.22); }
.hk-card-dark { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.hk-card-dark:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(0,0,0,0.32); border-color: rgba(245,239,226,0.22); }

.hk-product-card img { transition: transform .35s ease; }
.hk-product-card:hover img { transform: scale(1.04); }

/* Hero cards — premium hover: lift + scale + colored glow + image zoom + shine sweep.
   !important gerekli çünkü inline style attribute'i transform/boxShadow taşıyor. */
.hk-hero-anker, .hk-hero-dyson, .hk-hero-ps5 {
  transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, border-color .35s ease;
  will-change: transform, box-shadow;
  overflow: hidden;
}
.hk-hero-anker:hover {
  transform: translateY(-10px) scale(1.025) !important;
  box-shadow: 0 32px 62px rgba(20,20,26,0.18), 0 0 0 1.5px rgba(248,56,72,0.22) !important;
  border-color: rgba(248,56,72,0.35) !important;
}
.hk-hero-dyson:hover {
  transform: rotate(-4deg) translateY(-10px) scale(1.025) !important;
  box-shadow: 0 32px 62px rgba(0,0,0,0.45), 0 0 0 1.5px rgba(248,56,72,0.38) !important;
}
.hk-hero-ps5:hover {
  transform: rotate(5deg) translateY(-10px) scale(1.025) !important;
  box-shadow: 0 32px 62px rgba(248,56,72,0.52), 0 0 0 1.5px rgba(248,56,72,0.55) !important;
}

/* Hero card image zoom — applied to the product image inside each card */
.hk-hero-anker img, .hk-hero-dyson img, .hk-hero-ps5 img {
  transition: transform .55s cubic-bezier(.2,.7,.2,1);
}
.hk-hero-anker:hover img, .hk-hero-dyson:hover img, .hk-hero-ps5:hover img {
  transform: scale(1.06);
}

/* Premium shine sweep on hover — subtle diagonal gradient passes across the card */
.hk-hero-anker::after, .hk-hero-dyson::after, .hk-hero-ps5::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%);
  transform: translateX(-110%);
  transition: transform .8s cubic-bezier(.2,.7,.2,1);
  pointer-events: none;
  border-radius: inherit;
  z-index: 2;
}
.hk-hero-anker:hover::after, .hk-hero-dyson:hover::after, .hk-hero-ps5:hover::after {
  transform: translateX(110%);
}
.hk-hero-anker::after { background: linear-gradient(120deg, transparent 35%, rgba(248,56,72,0.10) 50%, transparent 65%); }

.hk-pill { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
.hk-pill:hover { transform: translateY(-1px); box-shadow: 0 10px 22px rgba(20,20,26,0.20); }
.hk-pill-light { transition: transform .2s ease, background-color .2s ease, color .2s ease; }
.hk-pill-light:hover { transform: translateY(-1px); background: #14141a; color: #f7f3eb; }

.hk-chip { transition: border-color .2s ease, background-color .2s ease, color .2s ease; }
.hk-chip:hover { border-color: rgba(20,20,26,0.45); }

.hk-nav-link { transition: color .2s ease; }
.hk-nav-link:hover { color: #14141a !important; }

.hk-footer-link { transition: color .2s ease; }
.hk-footer-link:hover { color: #f7f3eb !important; }

.hk-card-cta-arrow { transition: transform .25s ease; }
.hk-card-dark:hover .hk-card-cta-arrow { transform: translateX(6px); }

.hk-tag-link { transition: opacity .2s ease, transform .2s ease; }
.hk-tag-link:hover { opacity: 0.78; transform: translateY(-1px); }

/* Hero disc subtle float animation — kullanıcı dikkatini çekmek için */
@keyframes hkDiscFloat {
  0%, 100% { transform: rotate(-12deg) translateY(0); }
  50% { transform: rotate(-12deg) translateY(-6px); }
}
.hk-hero-disc { animation: hkDiscFloat 3.4s ease-in-out infinite; }
.hk-hero-disc:hover { animation-play-state: paused; transform: rotate(-12deg) scale(1.06); }

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
  .hk-hero-collage { height: 580px !important; max-width: 100%; }
  .hk-hero-anker { width: min(300px, 88%) !important; right: 0 !important; top: 0 !important; }
  .hk-hero-dyson { width: min(220px, 66%) !important; top: 290px !important; left: 0 !important; transform: rotate(-3deg) !important; }
  .hk-hero-dyson:hover { transform: rotate(-3deg) translateY(-8px) scale(1.025) !important; }
  .hk-hero-ps5 { width: min(232px, 70%) !important; right: 4% !important; bottom: 0 !important; transform: rotate(3deg) !important; }
  .hk-hero-ps5:hover { transform: rotate(3deg) translateY(-8px) scale(1.025) !important; }
  .hk-hero-disc { left: 10px !important; top: 28px !important; width: 76px !important; height: 76px !important; font-size: 9.5px !important; }
  .hk-hero-stats { max-width: 100% !important; }
  .hk-section { padding-left: 22px !important; padding-right: 22px !important; padding-top: 56px !important; padding-bottom: 56px !important; }
  .hk-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
  .hk-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
  .hk-h2 { font-size: 36px !important; }
  .hk-cta-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
  .hk-h1-cta { font-size: 44px !important; }
  .hk-footer { padding: 48px 22px 28px !important; }
  .hk-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
}
@media (max-width: 560px) {
  .hk-grid-4 { grid-template-columns: 1fr !important; }
  .hk-grid-3 { grid-template-columns: 1fr !important; }
  .hk-hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
  .hk-hero-collage { height: 620px !important; }
  .hk-hero-anker { width: min(280px, 86%) !important; padding: 14px !important; }
  .hk-hero-anker > div:first-of-type + div { height: 180px !important; }
  .hk-hero-dyson { width: min(200px, 60%) !important; top: 290px !important; padding: 12px !important; transform: rotate(-2.5deg) !important; }
  .hk-hero-dyson:hover { transform: rotate(-2.5deg) translateY(-6px) scale(1.02) !important; }
  .hk-hero-ps5 { width: min(220px, 66%) !important; right: 4% !important; padding: 12px !important; transform: rotate(2.5deg) !important; }
  .hk-hero-ps5:hover { transform: rotate(2.5deg) translateY(-6px) scale(1.02) !important; }
  .hk-hero-disc { top: 16px !important; left: 6px !important; width: 64px !important; height: 64px !important; font-size: 8.5px !important; }
  .hk-footer-grid { grid-template-columns: 1fr !important; }
  .hk-hero-h1 { font-size: 44px !important; }
  .hk-h2 { font-size: 30px !important; }
  .hk-h1-cta { font-size: 36px !important; }
}
@media (max-width: 380px) {
  /* Çok küçük telefonlarda dekoratif "+150 ÜRÜN" chip'i gizle ve kartları biraz daha küçült */
  .hk-hero-collage > div:last-of-type { display: none; }
  .hk-hero-collage { height: 580px !important; }
  .hk-hero-anker { width: 92% !important; }
  .hk-hero-dyson { width: 64% !important; top: 270px !important; }
  .hk-hero-ps5 { width: 70% !important; right: 0 !important; }
}
`;

const SITE = 'https://onmuzikproje.com';
const PARTNER_ORG_ID = `${SITE}/hizla-kirala#partnership`;

export default function HizlaKirala() {
  // İleri SEO: 4 ayrı JSON-LD bloku — CollectionPage, ItemList (ürün katalog),
  // BreadcrumbList ve resmi iş ortaklığı için Organization (partner sameAs).
  // Arama motoru ve LLM'lere yapı + ilişki + her ürünün fiyat/kategori bilgisi.
  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE}/hizla-kirala#page`,
    name: 'Kiralık Ürünler — On Music × Hızla Kirala',
    description:
      'On Muzik Proje aracılığıyla Hızla Kirala portföyünden 20+ ürün kiralama: projeksiyon, MacBook M4, PlayStation 5 Slim, Dyson Airwrap & V15 Detect, iPhone 17 Pro, Meta Quest 3 VR, Nintendo Switch OLED, DJI Osmo Pocket 3, Kärcher buharlı temizlik, Cybex bebek oto koltuğu, Dreame hava temizleyici ve daha fazlası — aylık 890 TL\'den, 24 saatte kapıda teslim, iyzico ile 12 taksit, 2 yıl garanti.',
    url: `${SITE}/hizla-kirala`,
    inLanguage: 'tr-TR',
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': PARTNER_ORG_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE}/assets/hizla-kirala/anker-nebula-apollo.png`,
    },
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE}/hizla-kirala#catalog`,
    name: 'On Music × Hızla Kirala kiralık ürün katalogu',
    numberOfItems: PRODUCTS.length,
    itemListOrder: 'https://schema.org/ItemListOrderManual',
    itemListElement: PRODUCTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}${p.href}`,
      item: {
        '@type': 'Product',
        name: `${p.brand} ${p.name}`,
        brand: { '@type': 'Brand', name: p.brand },
        category: p.cat,
        image: `${SITE}${p.image}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'TRY',
          price: p.price.replace('.', ''),
          url: `${SITE}${p.href}`,
          availability: 'https://schema.org/InStock',
          seller: { '@id': PARTNER_ORG_ID },
        },
      },
    })),
  };

  const popularList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE}/hizla-kirala#en-cok-kiralananlar`,
    name: 'En Çok Kiralananlar — On Music × Hızla Kirala',
    description:
      'Hızla Kirala kataloğunda en çok kiralanan 11 ürün — FOREO FAQ 202, Dyson Airwrap, MacBook Neo M4, iPhone 17 Pro, Dyson V15 Detect, Anker Nebula Apollo, Kärcher SC 3 EasyFix, Xiaomi Mi Pro 4, Dyson Airstrait, Nintendo Switch OLED, Meta Quest 3.',
    numberOfItems: POPULAR_PRODUCTS.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: POPULAR_PRODUCTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}${p.href}`,
      name: `${p.brand} ${p.name}`,
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa',         item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Kiralık Ürünler',  item: `${SITE}/hizla-kirala` },
    ],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE}/hizla-kirala#nasil-calisir`,
    name: 'Hızla Kirala ürün kiralama nasıl çalışır',
    description:
      'On Music × Hızla Kirala üzerinden 4 adımda ürün kiralama — seç, başvur, teslim al, iade et.',
    totalTime: 'PT24H',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'TRY', value: '890' },
    supply: [{ '@type': 'HowToSupply', name: 'Kimlik (TC/Pasaport)' }, { '@type': 'HowToSupply', name: 'Adres bilgisi' }],
    tool: [{ '@type': 'HowToTool', name: 'iyzico ödeme' }],
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Seç',       text: 'Ürünü ve kiralama süresini (1, 3, 6 veya 12 ay) sayfada seç.' },
      { '@type': 'HowToStep', position: 2, name: 'Başvur',    text: 'Kimlik bilgilerin ve adresinle 2 dakikada başvuruyu tamamla.' },
      { '@type': 'HowToStep', position: 3, name: 'Teslim al', text: 'Onaydan sonra 24 saat içinde kargo veya kurye ile teslim.' },
      { '@type': 'HowToStep', position: 4, name: 'İade et',   text: 'Süre bitince ücretsiz kurye iadesi. Uzatmak istersen tek tıkla.' },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE}/hizla-kirala#faq`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.hk-h2', '.hk-faq-q', '.hk-faq-a'],
    },
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Ürün kiralama nasıl çalışır?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seç → Başvur → Teslim al → İade et. Kimlik ve adres bilgisinle 2 dakikada başvurabilir, onaydan sonra 24 saat içinde kapında olur. Süre bitince ücretsiz kurye iadesi.' },
      },
      {
        '@type': 'Question',
        name: 'Ödeme nasıl yapılır?',
        acceptedAnswer: { '@type': 'Answer', text: 'iyzico altyapısı ile kredi kartı (Visa, Mastercard, Amex). 12 aya kadar taksit imkânı. Aylık abonelik benzeri otomatik tahsilat.' },
      },
      {
        '@type': 'Question',
        name: 'Cihaz arıza yaparsa ne olur?',
        acceptedAnswer: { '@type': 'Answer', text: 'Tüm cihazlar 2 yıl garantili. Arıza durumunda 24 saat içinde yedek cihaz gönderilir, arızalı cihaz ücretsiz kurye ile geri alınır.' },
      },
      {
        '@type': 'Question',
        name: 'Kiralama süresini uzatabilir miyim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Evet, hesabınızdan tek tıkla 1, 3, 6 veya 12 ay daha uzatabilirsiniz. Uzun süreli kiralamada aylık birim ücret düşer.' },
      },
      {
        '@type': 'Question',
        name: 'Hangi şehirlere teslimat yapılıyor?',
        acceptedAnswer: { '@type': 'Answer', text: 'İstanbul, Ankara, İzmir, Antalya, Bursa ve diğer 75 ile kargo/kurye ile teslimat. İstanbul içi aynı gün opsiyonu mevcut.' },
      },
      {
        '@type': 'Question',
        name: 'On Music × Hızla Kirala iş ortaklığı ne demek?',
        acceptedAnswer: { '@type': 'Answer', text: 'On Muzik Proje, Hızla Kirala\'nın resmi iş ortağıdır. Web sitemizden kiralama başlatıldığında işlem, kiralama süreci ve garanti hizlakirala.com altyapısı üzerinden ilerler.' },
      },
    ],
  };

  const partnership = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': PARTNER_ORG_ID,
    name: 'On Music × Hızla Kirala',
    alternateName: 'Hızla Kirala — On Music iş ortaklığı',
    url: `${SITE}/hizla-kirala`,
    logo: `${SITE}/assets/hizla-kirala/hizlakirala-logo.png`,
    parentOrganization: { '@id': `${SITE}/#org` },
    sameAs: [
      'https://www.hizlakirala.com',
      'https://www.instagram.com/onmuzik',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+90-543-412-33-80',
      email: 'proje@onmuzik.com',
      areaServed: 'TR',
      availableLanguage: ['Turkish'],
    },
  };

  useSeo({
    title: 'Kiralık Ürünler — On Music × Hızla Kirala Resmi İş Ortağı | On Muzik Proje',
    description:
      'On Muzik Proje × Hızla Kirala resmi iş ortaklığı: Anker Nebula projeksiyon, Apple MacBook M4, Sony PlayStation 5 Slim, Dyson Airwrap & V15 Detect, iPhone 17 Pro, Meta Quest 3 VR, Nintendo Switch OLED, DJI Pocket 3, Kärcher buharlı temizlik, Cybex bebek oto koltuğu, Xiaomi Mi Pro 4 scooter, FOREO LED maske, Karaca akıllı çay makinesi ve daha fazlası — aylık 890 TL\'den, 24 saatte kapıda teslim, iyzico ile 12 taksit, 2 yıl tam garanti. WhatsApp 0543 412 33 80.',
    path: '/hizla-kirala',
    image: '/assets/hizla-kirala/og-image.png',
    keywords:
      'kiralık ürün, ürün kiralama, projeksiyon kiralama, anker nebula apollo kiralama, macbook m4 kiralama, playstation 5 kiralama, ps5 slim kiralama, dyson airwrap kiralama, samsung galaxy a36 kiralama, hızla kirala, on music, on muzik proje, kiralama, aylık kiralama, günlük kiralama, iyzico taksit, 24 saat teslim',
    jsonLd: [collectionPage, itemList, popularList, howTo, faqPage, breadcrumb, partnership],
  });

  return (
    <>
      <style>{RESPONSIVE_CSS}</style>
      <div style={{ background: CREAM, color: INK, fontFamily: 'Inter, sans-serif' }} itemScope itemType="https://schema.org/CollectionPage">
        <Hero />
        <Benefits />
        <Categories />
        <BrandStrip />
        <EnCokKiralananlar />
        <Products />
        <HowItWorks />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
