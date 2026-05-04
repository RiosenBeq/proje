import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { BRANDS, BRAND_CATEGORIES, BRAND_LEVELS, type BrandCategory } from '../lib/content';
import { useSeo } from '../lib/seo';

const FILTERS: Array<BrandCategory | 'all'> = ['all', ...BRAND_CATEGORIES.map((c) => c.id)];

export default function Brands() {
  const [filter, setFilter] = useState<BrandCategory | 'all'>('all');

  useSeo({
    title: 'Markalar — d&b · L-Acoustics · Bose Pro · Pioneer Pro · Genelec · Bosch | On Muzik Proje',
    description: '40+ profesyonel AV markasıyla yetkili bayi, premium partner ve çözüm ortağı seviyelerinde çalışıyoruz. Marka bağımsız mühendislik prensibiyle projeye en uygun olanı seçeriz.',
    path: '/markalar',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Markalar — On Muzik Proje',
      url: 'https://onmuzikproje.com/markalar',
      isPartOf: { '@id': 'https://onmuzikproje.com/#website' },
    },
  });

  const list = useMemo(() => {
    if (filter === 'all') return BRANDS;
    return BRANDS.filter((b) => b.categories.includes(filter));
  }, [filter]);

  const levelCounts = useMemo(() => ({
    premium: BRANDS.filter((b) => b.level === 'premium').length,
    authorized: BRANDS.filter((b) => b.level === 'authorized').length,
    partner: BRANDS.filter((b) => b.level === 'partner').length,
  }), []);

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />MARKA PORTFÖYÜ · {BRANDS.length}+</span>
          <h1 className="subhero-title">
            Marka <em>bağımsız</em>,<br />ama her birinde derin.
          </h1>
          <p className="subhero-lead">
            Yalnızca tek bir markanın listesinden değil, projeye en uygun ürünü seçeriz. {BRANDS.length}+
            markayla aktif çalışıyoruz: {levelCounts.premium} premium partner, {levelCounts.authorized}{' '}
            yetkili bayi ve {levelCounts.partner} çözüm ortağı seviyesi.
          </p>
        </div>
      </section>

      {/* Filtre sekmeleri */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="venue-tabs reveal">
            {FILTERS.map((f, i) => {
              const cat = BRAND_CATEGORIES.find((c) => c.id === f);
              const label = cat ? cat.name : 'Tüm Markalar';
              const count = f === 'all' ? BRANDS.length : BRANDS.filter((b) => b.categories.includes(f)).length;
              return (
                <button
                  key={String(f)}
                  type="button"
                  className={`venue-tab${filter === f ? ' on' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  <span className="vt-num">{i === 0 ? '00' : `0${i}`}</span>{label} <span style={{ opacity: 0.6, marginLeft: 6 }}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="equip-grid reveal" style={{ marginTop: 0, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {list.map((b) => {
              const lvl = BRAND_LEVELS[b.level];
              return (
                <div key={b.id} className="equip-cell" style={{ padding: '24px 22px', minHeight: 180, display: 'flex', flexDirection: 'column' }}>
                  <div className="k" style={{ color: `var(--${lvl.cls})`, fontWeight: 600 }}>
                    {lvl.label}
                  </div>
                  <div className="v" style={{ fontSize: 20, marginTop: 4 }}>{b.name}</div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10.5, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginTop: 6 }}>
                    {b.origin}
                  </div>
                  <p style={{ marginTop: 'auto', paddingTop: 14, fontSize: 13, lineHeight: 1.55, color: 'var(--ink-3)' }}>
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marka bağımsızlık manifesto */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />MARKA BAĞIMSIZ MANİFESTOMUZ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Bayi değil,<br /><em>mühendisiz</em>.</h2>
            </div>
            <div className="right">
              Bir markanın çantasını taşımayız. Saha keşfi sonrası doğru karşılaştırma yaparız: hedef
              metrik, bütçe, mevzuat zorunluluğu ve uzun vadeli bakım. Kararı projeye bırakırız, marka
              tercih listesine değil.
            </div>
          </div>
          <div className="standards-grid reveal">
            <div className="standard">
              <div className="s-num">01</div>
              <h4>Premium partner</h4>
              <p>{levelCounts.premium} marka — saha eğitimi, demo ekipman erişimi ve doğrudan üretici teknik destek hattımız var.</p>
            </div>
            <div className="standard">
              <div className="s-num">02</div>
              <h4>Yetkili bayi</h4>
              <p>{levelCounts.authorized} marka — distribütör onayı, 2 yıl üretici garantisi + 1 yıl yerinde servis garantisi.</p>
            </div>
            <div className="standard">
              <div className="s-num">03</div>
              <h4>Çözüm ortağı</h4>
              <p>{levelCounts.partner} marka — proje bazlı tedarik, ölçüm metodolojisi referansları (Rockwool, RPG, B&K).</p>
            </div>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Marka önerisi al <span className="arrow" /></Link>
            <Link to="/hizmetler" className="btn btn-ghost">Hizmetler <span className="arrow" /></Link>
            <Link to="/sertifikalar" className="btn btn-ghost">Sertifikalarımız <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
