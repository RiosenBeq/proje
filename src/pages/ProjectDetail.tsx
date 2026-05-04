import { Link, useParams } from 'react-router-dom';
import { PROJECTS, getProject, DISC_TAG, type DisciplineCls } from '../lib/content';
import { useSeo } from '../lib/seo';
import CrossSell from '../components/CrossSell';
import BeforeAfter from '../components/BeforeAfter';
import Img from '../components/Img';
import NotFound from './NotFound';

const ACCENT_BY_CLS: Record<DisciplineCls, string> = {
  red: 'var(--red)', gold: 'var(--gold)', indigo: 'var(--indigo)',
  teal: 'var(--teal)', plum: 'var(--plum)', olive: 'var(--olive)',
};

export default function ProjectDetail() {
  const { slug = '' } = useParams();
  const p = getProject(slug);

  useSeo(p ? {
    title: `${p.name} — ${p.city} ${p.year} | On Muzik Proje`,
    description: `${p.hero.lead} ${p.specs.slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(' · ')}.`,
    path: `/projeler/${p.slug}`,
    image: p.hero.image,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CreativeWork',
          name: p.name,
          url: `https://onmuzik.com/projeler/${p.slug}`,
          datePublished: `${p.year}-01-01`,
          locationCreated: { '@type': 'Place', name: p.city, address: { '@type': 'PostalAddress', addressLocality: p.city, addressCountry: 'TR' } },
          creator: { '@id': 'https://onmuzik.com/#business' },
          image: p.hero.image,
          description: p.hero.lead,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://onmuzik.com/' },
            { '@type': 'ListItem', position: 2, name: 'Projeler', item: 'https://onmuzik.com/portfolyo' },
            { '@type': 'ListItem', position: 3, name: p.name, item: `https://onmuzik.com/projeler/${p.slug}` },
          ],
        },
      ],
    },
  } : { title: '404', description: '404', path: `/projeler/${slug}`, noIndex: true });

  if (!p) return <NotFound />;
  const accent = ACCENT_BY_CLS[p.disciplines[0]];

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />{p.hero.eyebrow}</span>
          <h1 className="subhero-title">
            {p.name} <em style={{ color: accent }}>·</em>
          </h1>
          <p className="subhero-lead">{p.hero.lead}</p>
          <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {p.disciplines.map((d) => {
              const found = Object.entries(DISC_TAG).find(([, val]) => val[0] === d);
              const lbl = found ? found[1][1] : '';
              return <span key={d} className={`tag ${d}`}><span className="dot" />{lbl}</span>;
            })}
          </div>
        </div>
      </section>

      {/* Hero görsel */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="case reveal" style={{ maxWidth: 'var(--maxw)' }}>
            <div className="frame" style={{ aspectRatio: '16 / 9' }}>
              <Img src={p.hero.image} alt={p.name} priority width={1600} height={900} sizes="100vw" />
              <span className="tonearm" aria-hidden />
              <div className="stat-overlay">
                {p.specs.slice(0, 3).map(([k, v]) => <span key={k} className="mini">{k}<b>{v}</b></span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec dashboard */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />01 · TEKNİK ÖZETİ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Sistem <em>kimliği</em>.</h2>
            </div>
            <div className="right">
              {p.name} için kullanılan ana sistem mimarisi ve hedef metrikler.
            </div>
          </div>
          <div className="dashboard reveal">
            <div className="dash-head">
              <div className="dash-tabs"><button type="button" className="on">SİSTEM SPEC</button></div>
              <div className="dash-meta"><span className="dot" />{p.city.toUpperCase()} · {p.year}</div>
            </div>
            <div className="equip-grid" style={{ marginTop: 0 }}>
              {p.specs.map(([k, v]) => (
                <div key={k} className="equip-cell">
                  <div className="k">{k}</div>
                  <div className="v">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hikâye */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · HİKÂYE</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Problem <em>→</em> Yaklaşım <em>→</em> Sonuç.</h2>
            </div>
            <div className="right">
              Saha keşfinden teslim sonrası ölçüme kadar projenin teknik narratifi.
            </div>
          </div>
          <div className="standards-grid reveal">
            <div className="standard">
              <div className="s-num">PROBLEM</div>
              <h4>Saha durumu</h4>
              <p>{p.story.problem}</p>
            </div>
            <div className="standard">
              <div className="s-num">YAKLAŞIM</div>
              <h4>Mühendislik kararı</h4>
              <p>{p.story.approach}</p>
            </div>
            <div className="standard">
              <div className="s-num">SONUÇ</div>
              <h4>Ölçülen teslim</h4>
              <p>{p.story.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Önce / Sonra ölçüm */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />03 · ÖNCE / SONRA</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Ölçülmüş <em>fark</em>.</h2>
            </div>
            <div className="right">
              Saha keşfindeki başlangıç değerleri, tasarım hedefi ve teslim sonrası ölçüm. Tüm değerler kalibre B&K mikrofon ile in-situ ölçülmüştür.
            </div>
          </div>
          <div className="reveal">
            <BeforeAfter rows={p.beforeAfter} eyebrow={`${p.name.toUpperCase()} · HEDEF VS FİİLİ`} />
          </div>
        </div>
      </section>

      {/* Galeri */}
      {p.gallery.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head reveal">
              <div className="left">
                <span className="eyebrow"><span className="bar" />04 · GALERİ</span>
                <h2 className="h-section" style={{ marginTop: 18 }}>Saha <em>kareleri</em>.</h2>
              </div>
              <div className="right">
                {p.name} kurulum + teslim sürecinden seçilmiş görseller.
              </div>
            </div>
            <div className="gal-grid reveal">
              {p.gallery.map((src, i) => (
                <div key={`${src}-${i}`} className={`gal-cell ${i === 0 ? 'wide' : i === 1 ? 'tall' : ''}`}>
                  <Img src={src} alt={`${p.name} galeri ${i + 1}`} width={1200} height={900} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className="badge">{p.city.toUpperCase()} · {p.year}</span>
                  <span className="lbl">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Markalar */}
      {p.brandsUsed.length > 0 && (
        <section className="section venues" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head reveal">
              <div className="left">
                <span className="eyebrow"><span className="bar" />05 · KULLANILAN MARKALAR</span>
                <h2 className="h-section indigo" style={{ marginTop: 18 }}>Marka <em>haritası</em>.</h2>
              </div>
              <div className="right">
                Bu projede ürün-bağımsız mühendislik kararıyla seçilen markalar.
              </div>
            </div>
            <div className="equip-grid reveal" style={{ marginTop: 0 }}>
              {p.brandsUsed.map((b) => (
                <div key={b} className="equip-cell">
                  <div className="k">MARKA</div>
                  <div className="v">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CrossSell
        eyebrow="BENZER PROJELER"
        title="Aynı disipline ait teslimler."
        projects={p.related}
      />

      {/* Final CTA */}
      <section className="section quote-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="vision-banner reveal" style={{ background: 'var(--ink)' }}>
            <div className="vb-content">
              <span className="eyebrow" style={{ color: 'rgba(245,239,224,0.6)' }}>
                <span className="bar" style={{ background: 'rgba(245,239,224,0.4)' }} />BENZER PROJE Mİ?
              </span>
              <h2 className="h-section" style={{ color: 'var(--stage-fg)', marginTop: 18 }}>
                Sizin için de <em style={{ color: 'var(--gold-2)' }}>ölçelim</em>.
              </h2>
              <p>{p.name} ile benzer bir mekânınız varsa, ücretsiz saha keşfiyle başlayalım.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/iletisim" className="btn btn-on-stage">Keşif Talep Et <span className="arrow" /></Link>
                <Link to="/portfolyo" className="btn btn-ghost-stage">Tüm Projeler <span className="arrow" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug);
