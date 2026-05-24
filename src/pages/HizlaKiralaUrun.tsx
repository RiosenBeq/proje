import { Link, Navigate, useParams } from 'react-router-dom';
import { useState, type CSSProperties } from 'react';
import { useSeo } from '../lib/seo';
import { getProduct, getRelated, type ProductDetail } from '../lib/hizla-kirala-products';

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


const Breadcrumb = ({ product }: { product: ProductDetail }) => (
  <div style={{ background: CREAM, padding: '24px 64px 8px' }} className="hk-breadcrumb">
    <div style={{ maxWidth: 1280, margin: '0 auto', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Anasayfa</Link>
      <span style={{ margin: '0 10px', opacity: 0.4 }}>/</span>
      <Link to="/hizla-kirala" style={{ color: 'inherit', textDecoration: 'none' }}>Kiralık ürünler</Link>
      <span style={{ margin: '0 10px', opacity: 0.4 }}>/</span>
      <a href={product.categoryHref} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{product.category}</a>
      <span style={{ margin: '0 10px', opacity: 0.4 }}>/</span>
      <span style={{ color: INK }}>{product.breadcrumbName}</span>
    </div>
  </div>
);

function Gallery({ product }: { product: ProductDetail }) {
  const [active, setActive] = useState(0);
  const images = product.images.length ? product.images : ['/assets/hizla-kirala/og-image.png'];
  const alt = `${product.brand} ${product.name}`;

  return (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
      <div style={{ background: CREAM, borderRadius: 24, aspectRatio: '1 / 1', overflow: 'hidden', position: 'relative', border: '1px solid rgba(20,20,26,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={images[active]}
          alt={alt}
          loading="eager"
          decoding="async"
          style={{ maxWidth: '88%', maxHeight: '88%', objectFit: 'contain', mixBlendMode: 'multiply' }}
        />
        <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {product.tag && (
            <span style={{ background: RED, color: CREAM, fontFamily: '"JetBrains Mono", monospace', fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: 999 }}>{product.tag}</span>
          )}
          <span style={{ background: 'rgba(255,255,255,0.92)', color: INK, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', padding: '5px 10px', borderRadius: 999, textTransform: 'uppercase' }}>STOKTA · 24S KARGO</span>
        </div>
        {images.length > 1 && (
          <div style={{ position: 'absolute', bottom: 18, right: 18, background: 'rgba(20,20,26,0.85)', color: CREAM, padding: '6px 12px', borderRadius: 999, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {active + 1} / {images.length}
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(images.length, 4)},1fr)`, gap: 10 }}>
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              type="button"
              aria-label={`Görsel ${i + 1}`}
              className="hk-thumb-btn"
              style={{
                background: CREAM, borderRadius: 14, aspectRatio: '1/1',
                border: `2px solid ${i === active ? INK : 'rgba(20,20,26,0.08)'}`,
                cursor: 'pointer', padding: 6, overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" decoding="async" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const SHORT_TERM_LABELS = ['3 gün', '7 gün', '14 gün', '30 gün'];
const MONTH_MULTIPLIER = [1, 3, 6, 12];

function PriceCard({ product }: { product: ProductDetail }) {
  const [termIdx, setTermIdx] = useState(2);
  const [type, setType] = useState<'uzun' | 'kisa'>('uzun');
  const price = type === 'uzun' ? product.monthly[termIdx] : product.daily[termIdx];
  const unit = type === 'uzun' ? 'aylık' : 'günlük';
  const totalMonthly = parseInt(product.monthly[termIdx].replace('.', ''), 10) * MONTH_MULTIPLIER[termIdx];
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
        {(['1 Ay', '3 Ay', '6 Ay', '12 Ay']).map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setTermIdx(i)}
            style={{
              border: `1.5px solid ${termIdx === i ? INK : 'rgba(20,20,26,0.15)'}`,
              background: termIdx === i ? INK : 'transparent',
              color: termIdx === i ? CREAM : INK,
              borderRadius: 12, padding: '11px 6px', cursor: 'pointer',
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 600, fontSize: 14,
            }}
          >{type === 'uzun' ? label : SHORT_TERM_LABELS[i]}</button>
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
            {type === 'uzun' ? `Toplam ${totalLabel} TL · KDV dahil` : 'KDV dahil · ücretsiz kurye'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
        <a
          href={product.rentalUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="hk-pill"
          style={{
            flex: 1, background: INK, color: CREAM,
            border: 'none', borderRadius: 14, padding: '18px 22px', cursor: 'pointer',
            fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, textDecoration: 'none',
          }}
        >
          Hemen kirala
          <span style={{ width: 28, height: 28, borderRadius: 999, background: RED, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>→</span>
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginTop: 18 }}>
        {([
          ['🚚', '24 saatte kapıda'],
          ['🛟', '%70 sigorta dahil'],
          ['⬆️', "%100'e tamamlama opsiyonel"],
          ['💬', 'WhatsApp destek 0543'],
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

const ProductHero = ({ product }: { product: ProductDetail }) => (
  <section className="hk-section hk-product-hero" style={{ background: CREAM, padding: '32px 64px 80px' }}>
    <div className="hk-product-hero-inner" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'flex-start' }}>
      <Gallery product={product} />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>{product.brand}</div>
          <span style={{ width: 4, height: 4, background: 'rgba(20,20,26,0.3)', borderRadius: 999 }} />
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: 'rgba(20,20,26,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{product.series}</div>
        </div>
        {/* Sub-category etiketi: kategori + alt kategori hiyerarşisi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
          <a href={product.categoryHref} target="_blank" rel="noopener noreferrer sponsored" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#fff', border: '1px solid rgba(20,20,26,0.15)',
            padding: '5px 12px', borderRadius: 999,
            fontFamily: '"JetBrains Mono", monospace', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(20,20,26,0.6)', textDecoration: 'none',
          }}>{product.category}</a>
          <span style={{ color: 'rgba(20,20,26,0.3)', fontFamily: '"JetBrains Mono", monospace', fontSize: 10 }}>›</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            background: RED, color: CREAM,
            padding: '5px 12px', borderRadius: 999,
            fontFamily: '"JetBrains Mono", monospace', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>{product.subCategory}</span>
        </div>
        <h1 className="hk-product-h1" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 56, lineHeight: 0.96, letterSpacing: '-0.04em', margin: 0, color: INK }}>
          {product.name}<br />
          <span style={{ color: RED }}>{product.tagline}</span>
        </h1>
        {/* Hedef kullanıcı / audience micro-line — SEO için kim-için sinyali */}
        <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.4, color: 'rgba(20,20,26,0.55)', fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif' }}>
          {product.audience}
        </p>
        <p style={{ marginTop: 14, fontSize: 18, lineHeight: 1.5, color: 'rgba(20,20,26,0.7)' }}>
          {product.short}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
          {product.chips.map((c) => (
            <span key={c} style={{
              border: '1px solid rgba(20,20,26,0.15)', background: '#fff',
              padding: '7px 13px', borderRadius: 999,
              fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.04em',
            }}>{c}</span>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <PriceCard product={product} />
        </div>

        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'center', gap: 12,
          background: 'rgba(20,20,26,0.04)', padding: '12px 16px', borderRadius: 14,
          fontSize: 13, color: 'rgba(20,20,26,0.7)',
        }}>
          <img src="/assets/hizla-kirala/hizlakirala-logo.png" alt="Hızla Kirala logosu" width="76" height="14" loading="lazy" decoding="async" style={{ display: 'block', height: 14, width: 'auto', flexShrink: 0 }} />
          <span><strong>on music × Hızla Kirala</strong> resmi iş ortaklığıyla - siparişin Hızla Kirala üzerinden tamamlanır, kargosu on music tarafından koordine edilir.</span>
        </div>
      </div>
    </div>
  </section>
);

const Highlights = ({ product }: { product: ProductDetail }) => (
  <section className="hk-section" style={{ background: '#fff', padding: '36px 64px', borderTop: '1px solid rgba(20,20,26,0.06)', borderBottom: '1px solid rgba(20,20,26,0.06)' }}>
    <div className="hk-grid-4" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
      {product.highlights.map((h) => (
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

const FAQS: Array<[string, string]> = [
  ['Minimum kiralama süresi nedir?', 'Uzun dönem için minimum 1 ay. Kısa dönem için minimum 3 gündür.'],
  ['Erken iade yapabilir miyim?',    'Evet, uzun dönemde 14 günlük ihtar süresiyle erken iade mümkündür. Kalan günler iade edilir.'],
  ['Cihaz arızalanırsa ne olur?',    "Bize WhatsApp'tan ulaş, 24 saat içinde yedek cihaz gönderilir. Servis ücretsizdir."],
  ['Teslimat ne zaman yapılır?',     'Onaydan sonra İstanbul içi aynı gün, Türkiye geneli 24-48 saat içinde Yurtiçi Kargo ile kapına teslim.'],
];

function Description({ product }: { product: ProductDetail }) {
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
              className="hk-tab-btn"
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
                {product.description.headline}
              </h3>
              {product.description.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(20,20,26,0.75)', margin: i === 0 ? '0 0 16px' : 0 }}>{p}</p>
              ))}
              <div style={{ display: 'flex', gap: 24, marginTop: 28, flexWrap: 'wrap' }}>
                {product.description.useCases.map(([t, e]) => (
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
                {product.glance.map((b, i) => (
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
            {product.specs.map(([k, v], i) => (
              <div key={k} style={{
                padding: '14px 22px',
                display: 'flex', justifyContent: 'space-between', gap: 16,
                borderBottom: i < product.specs.length - 2 ? '1px solid rgba(20,20,26,0.06)' : 'none',
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
            {product.box.map((it) => (
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
              <details key={q} open={i === 0} className="hk-faq" style={{ background: '#fff', border: '1px solid rgba(20,20,26,0.08)', borderRadius: 14, padding: '16px 20px' }}>
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

const Related = ({ product }: { product: ProductDetail }) => {
  const related = getRelated(product.slug, 4);
  return (
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
          {related.map((p) => (
            <Link key={p.slug} to={`/hizla-kirala/${p.slug}`} className="hk-card hk-related-card" style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1.5px solid rgba(20,20,26,0.14)', textDecoration: 'none', color: INK }}>
              <div style={{ background: CREAM, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(20,20,26,0.10)' }}>
                <img src={p.images[0]} alt={`${p.brand} ${p.name}`} loading="lazy" decoding="async" style={{ maxWidth: '78%', maxHeight: '85%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(20,20,26,0.5)', textTransform: 'uppercase' }}>{p.brand}</div>
                <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', marginTop: 4, lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.03em' }}>{p.priceFrom} TL<span style={{ fontSize: 13, color: 'rgba(20,20,26,0.5)', fontWeight: 500 }}> /ay</span></div>
                  <span style={{ color: RED, fontWeight: 600, fontSize: 14 }}>Kirala →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    { label: '+90 543 412 33 80', href: PHONE_HREF },
    { label: 'WhatsApp destek',   href: WHATSAPP_HREF, external: true },
    { label: 'proje@onmuzik.com', href: 'mailto:proje@onmuzik.com' },
    { label: '@onmuzik',          href: 'https://www.instagram.com/onmuzik', external: true },
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
                  return <li key={item.label}><a href={item.href} target="_blank" rel="noopener noreferrer" className="hk-footer-link" style={linkStyle}>{item.label}</a></li>;
                }
                if (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
                  return <li key={item.label}><a href={item.href} className="hk-footer-link" style={linkStyle}>{item.label}</a></li>;
                }
                return <li key={item.label}><Link to={item.href} className="hk-footer-link" style={linkStyle}>{item.label}</Link></li>;
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

.hk-related-card img { transition: transform .35s ease; }
.hk-related-card:hover img { transform: scale(1.05); }

.hk-pill { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
.hk-pill:hover { transform: translateY(-1px); box-shadow: 0 10px 22px rgba(20,20,26,0.20); }
.hk-pill-light { transition: transform .2s ease, background-color .2s ease, color .2s ease; }
.hk-pill-light:hover { transform: translateY(-1px); background: #14141a; color: #f7f3eb; }

.hk-chip { transition: border-color .2s ease, background-color .2s ease, color .2s ease; }
.hk-chip:hover { border-color: rgba(20,20,26,0.45); }

.hk-thumb-btn { transition: border-color .2s ease, transform .2s ease; }
.hk-thumb-btn:hover { transform: translateY(-2px); border-color: rgba(20,20,26,0.35) !important; }

.hk-faq summary { transition: color .2s ease; cursor: pointer; }
.hk-faq summary:hover { color: #F83848; }

.hk-spec-row { transition: background-color .2s ease; }
.hk-spec-row:hover { background: rgba(20,20,26,0.04); }

.hk-footer-link { transition: color .2s ease; }
.hk-footer-link:hover { color: #f7f3eb !important; }

.hk-tab-btn { transition: color .2s ease, border-color .2s ease; }
.hk-tab-btn:hover { color: #F83848; }

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

const SITE = 'https://onmuzikproje.com';
const PARTNER_ORG_ID = `${SITE}/hizla-kirala#partnership`;

// 1 yıl geçerli fiyat - strk. data takvimi için. Bugünden 365 gün sonrası.
function priceValidUntil(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split('T')[0];
}

// Detay sayfası FAQ block'u (Description tab 'sartlar' içeriği ile aynı tutulur).
const FAQ_ITEMS: Array<[string, string]> = [
  ['Minimum kiralama süresi nedir?', 'Uzun dönem için minimum 1 ay. Kısa dönem için minimum 3 gündür.'],
  ['Erken iade yapabilir miyim?',    'Evet, uzun dönemde 14 günlük ihtar süresiyle erken iade mümkündür. Kalan günler iade edilir.'],
  ['Cihaz arızalanırsa ne olur?',    "Bize WhatsApp'tan ulaş, 24 saat içinde yedek cihaz gönderilir. Servis ücretsizdir."],
  ['Teslimat ne zaman yapılır?',     'Onaydan sonra İstanbul içi aynı gün, Türkiye geneli 24-48 saat içinde Yurtiçi Kargo ile kapına teslim.'],
];

function ProductPage({ product }: { product: ProductDetail }) {
  const url = `${SITE}/hizla-kirala/${product.slug}`;
  // product.images mutlak URL ise (data.hizlakirala.com), olduğu gibi kullan;
  // değilse SITE prefix ekle (legacy /hk-img veya /assets path'leri için).
  const imageAbs = product.images.map((img) => (/^https?:\/\//.test(img) ? img : `${SITE}${img}`));
  const price = product.priceFrom.replace('.', '');

  // İleri SEO: 5 ayrı JSON-LD bloku.
  // 1. Product - full schema.org/Product + Offer + brand + category + image[] +
  //    aggregateRating placeholder yok (sahte veri eklemiyoruz).
  // 2. BreadcrumbList - anasayfa / kiralık ürünler / kategori / ürün
  // 3. FAQPage - kiralama şartları sekmesi
  // 4. WebPage (productGroup için isPartOf)
  // 5. Organization - iş ortaklığı (parent on muzik proje'ye bağlı)
  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: `${product.brand} ${product.name}`,
    alternateName: `${product.brand} ${product.name} ${product.tagline}`,
    description: product.short,
    image: imageAbs,
    brand: { '@type': 'Brand', name: product.brand },
    category: `${product.category} > ${product.subCategory}`,
    keywords: product.keywords.join(', '),
    audience: {
      '@type': 'PeopleAudience',
      audienceType: product.audience,
    },
    sku: product.slug,
    mpn: product.slug,
    isRelatedTo: product.categoryHref,
    additionalProperty: product.specs.map(([k, v]) => ({
      '@type': 'PropertyValue',
      name: k,
      value: v,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'TRY',
      price,
      url,
      availability: 'https://schema.org/InStock',
      priceValidUntil: priceValidUntil(),
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': PARTNER_ORG_ID },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      eligibleRegion: { '@type': 'Country', name: 'TR' },
      deliveryLeadTime: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 2,
        unitCode: 'DAY',
      },
      businessFunction: 'https://purl.org/goodrelations/v1#LeaseOut',
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa',         item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Kiralık Ürünler',  item: `${SITE}/hizla-kirala` },
      { '@type': 'ListItem', position: 3, name: product.category,   item: product.categoryHref },
      { '@type': 'ListItem', position: 4, name: product.breadcrumbName, item: url },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: FAQ_ITEMS.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    name: `${product.brand} ${product.name} ${product.tagline} - Kiralık`,
    url,
    inLanguage: 'tr-TR',
    isPartOf: { '@id': `${SITE}/#website` },
    primaryImageOfPage: { '@type': 'ImageObject', url: imageAbs[0] },
    mainEntity: { '@id': `${url}#product` },
    breadcrumb: { '@type': 'BreadcrumbList' },
  };

  const partnership = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': PARTNER_ORG_ID,
    name: 'On Music × Hızla Kirala',
    parentOrganization: { '@id': `${SITE}/#org` },
    url: `${SITE}/hizla-kirala`,
    logo: `${SITE}/assets/hizla-kirala/hizlakirala-logo.png`,
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
    title: `${product.brand} ${product.name} ${product.tagline} - Aylık ${product.priceFrom} TL'den Kiralık | On Music × Hızla Kirala`,
    description: `${product.brand} ${product.name} kiralama: ${product.short} 24 saatte kapıda teslim, %70 sigorta dahil, isteyen %100'e tamamlayabilir. WhatsApp 0543 412 33 80.`,
    path: `/hizla-kirala/${product.slug}`,
    image: product.images[0],
    ogType: 'product',
    product: {
      priceAmount: price,
      priceCurrency: 'TRY',
      availability: 'instock',
      brand: product.brand,
      category: product.category,
    },
    keywords: `${product.keywords.join(', ')}, ${product.brand} ${product.name} kiralama, ${product.brand} kiralama, ${product.category} kiralama, ${product.subCategory} kiralama, ${product.tagline}, ${product.brand} ${product.name} aylık kiralama, ${product.brand} ${product.name} günlük kiralama, hızla kirala, on music, on muzik proje`,
    jsonLd: [productLd, breadcrumb, faqPage, webPage, partnership],
  });

  return (
    <>
      <style>{RESPONSIVE_CSS}</style>
      <div style={{ background: CREAM, color: INK, fontFamily: 'Inter, sans-serif' }} itemScope itemType="https://schema.org/Product">
        <Breadcrumb product={product} />
        <article>
          <ProductHero product={product} />
          <Highlights product={product} />
          <Description product={product} />
        </article>
        <Related product={product} />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}

export default function HizlaKiralaUrun() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : null;

  if (!product) {
    return <Navigate to="/hizla-kirala" replace />;
  }

  // Slug değiştiğinde state sıfırlansın (tab/term/active). React-router aynı
  // komponenti yeniden kullanır; key'i useParams üzerinden değişen bir parent
  // wrapper'a verirsek useState mount değişiminde sıfırlanır.
  return (
    <div data-product={product.slug} key={product.slug}>
      <ProductPage product={product} />
    </div>
  );
}

