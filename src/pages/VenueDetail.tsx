import { Link, useParams } from 'react-router-dom';
import { useState, type CSSProperties } from 'react';
import { VENUES, getVenue, getProject, DISC_TAG, type DisciplineCls } from '../lib/content';
import { useSeo } from '../lib/seo';
import CrossSell from '../components/CrossSell';
import NotFound from './NotFound';

const CLS_VARS: Record<DisciplineCls, CSSProperties> = {
  red:    { ['--c' as any]: 'var(--red)',    ['--cs' as any]: 'var(--red-soft)',    ['--cl' as any]: 'var(--red-line)' },
  gold:   { ['--c' as any]: 'var(--gold)',   ['--cs' as any]: 'var(--gold-soft)',   ['--cl' as any]: 'var(--gold-line)' },
  indigo: { ['--c' as any]: 'var(--indigo)', ['--cs' as any]: 'var(--indigo-soft)', ['--cl' as any]: 'var(--indigo-line)' },
  teal:   { ['--c' as any]: 'var(--teal)',   ['--cs' as any]: 'var(--teal-soft)',   ['--cl' as any]: 'var(--teal-line)' },
  plum:   { ['--c' as any]: 'var(--plum)',   ['--cs' as any]: 'var(--plum-soft)',   ['--cl' as any]: 'var(--plum-line)' },
  olive:  { ['--c' as any]: 'var(--olive)',  ['--cs' as any]: 'var(--olive-soft)',  ['--cl' as any]: 'var(--olive-line)' },
};

const ACCENT_BY_CLS: Record<DisciplineCls, string> = {
  red: 'var(--red)', gold: 'var(--gold)', indigo: 'var(--indigo)',
  teal: 'var(--teal)', plum: 'var(--plum)', olive: 'var(--olive)',
};

export default function VenueDetail() {
  const { slug = '' } = useParams();
  const v = getVenue(slug);
  const [openFaq, setOpenFaq] = useState(0);

  useSeo(v ? {
    title: `${v.name} - Akustik & Ses Sistemi | On Muzik Proje`,
    description: `${v.hero.lead} Mekân tipinize özel çözüm.`,
    path: `/mekanlar/${v.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://onmuzikproje.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mekân Tipleri', item: 'https://onmuzikproje.com/mekanlar' },
        { '@type': 'ListItem', position: 3, name: v.name, item: `https://onmuzikproje.com/mekanlar/${v.slug}` },
      ],
    },
  } : { title: '404', description: '404', path: `/mekanlar/${slug}`, noIndex: true });

  if (!v) return <NotFound />;
  const primary = v.related.disciplines[0];
  const cls = DISC_TAG[primary][0];
  const accent = ACCENT_BY_CLS[cls];
  const projects = v.sampleProjects.map((s) => getProject(s)).filter(Boolean);

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />{v.hero.eyebrow}</span>
          <h1 className="subhero-title">
            {v.hero.title}{' '}
            <em style={{ color: accent }}>{v.hero.titleEm}</em>
            {v.hero.titleTail}
          </h1>
          <p className="subhero-lead">{v.hero.lead}</p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Bu Mekân İçin Teklif <span className="arrow" /></Link>
            <Link to="/mekanlar" className="btn btn-ghost">Tüm Mekân Tipleri <span className="arrow" /></Link>
          </div>
        </div>
      </section>

      {/* Tipik Problemler */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />01 · TİPİK PROBLEMLER</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Bu mekânda<br /><em>sıkça karşılaştığımız</em>.</h2>
            </div>
            <div className="right">
              {v.name} için yaptığımız 240+ projeden çıkarılan tekrarlayan akustik ve sistem sorunları.
            </div>
          </div>
          <div className="standards-grid reveal">
            {v.problems.map((p, i) => (
              <div key={p[0]} className="standard">
                <div className="s-num">0{i + 1}</div>
                <h4>{p[0]}</h4>
                <p>{p[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hedef Akustik & Sistem */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · TASARIM HEDEFLERİ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Hedef <em>metrikler</em>.</h2>
            </div>
            <div className="right">
              {v.name} tipolojisi için tipik akustik hedefler. Her proje saha ölçümüne göre özelleşir.
            </div>
          </div>
          <div className="venue-detail reveal">
            <div className="vd-info">
              <ul className="vd-list">
                {v.goals.map(([k, val]) => (
                  <li key={k}><span className="k">{k}</span><span>{val}</span></li>
                ))}
              </ul>
            </div>
            <div className="vd-stage">
              <div className="vd-stage-overlay">
                <div className="vd-tag-row">
                  <span className="tag" style={{ borderColor: 'rgba(245,239,224,0.25)', color: 'rgba(245,239,224,0.85)' }}>{v.short}</span>
                  {v.related.disciplines.slice(0, 2).map((d) => {
                    const [tcls, tlbl] = DISC_TAG[d];
                    return <span key={d} className={`tag ${tcls}`} style={{ borderColor: 'rgba(245,239,224,0.25)', color: 'rgba(245,239,224,0.85)' }}><span className="dot" />{tlbl}</span>;
                  })}
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

      {/* Sistem Mimarisi */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />03 · SİSTEM MİMARİSİ</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Tipik <em>kurulum</em>.</h2>
            </div>
            <div className="right">
              {v.name} için en sık kurduğumuz sistem konfigürasyonu - her bileşen ölçüm sonrası özelleşir.
            </div>
          </div>
          <div className="dashboard reveal">
            <div className="dash-head">
              <div className="dash-tabs"><button className="on" type="button">{v.short} · TİPİK SİSTEM</button></div>
              <div className="dash-meta"><span className="dot" />MARKA BAĞIMSIZ</div>
            </div>
            <div className="equip-grid" style={{ marginTop: 0 }}>
              {v.systemSpec.map(([k, val]) => (
                <div key={k} className="equip-cell">
                  <div className="k">{k}</div>
                  <div className="v">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bu mekânda yaptığımız projeler */}
      {projects.length > 0 && (
        <section className="section venues" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head reveal">
              <div className="left">
                <span className="eyebrow"><span className="bar" />04 · BU MEKÂNDAKİ TESLİMLERİMİZ</span>
                <h2 className="h-section indigo" style={{ marginTop: 18 }}>Sahaya teslim<br /><em>edilmiş</em>.</h2>
              </div>
              <div className="right">
                {v.name} mekân tipinde tamamladığımız seçilmiş projelerden örnekler.
              </div>
            </div>
            <div className="portfolio-grid">
              {projects.map((p, i) => p && (
                <Link key={p.slug} to={`/projeler/${p.slug}`} className="case reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="frame">
                    <img src={p.hero.image} alt={p.name} loading="lazy" decoding="async" width={1400} height={1050} />
                    <span className="tonearm" aria-hidden />
                    <div className="ph">{p.name.toUpperCase()}</div>
                    <div className="stat-overlay">
                      {p.specs.slice(0, 2).map(([k, val]) => <span key={k} className="mini">{k}<b>{val}</b></span>)}
                    </div>
                  </div>
                  <div className="meta"><span>{p.city}</span><span>{p.year}</span></div>
                  <h4>{p.name}</h4>
                  <p>{p.hero.lead.split('.')[0]}.</p>
                  <div className="case-tags">
                    {p.disciplines.map((d) => {
                      const [tcls, tlbl] = Object.entries(DISC_TAG).find(([, val]) => val[0] === d) ?? ['', ['', '']];
                      return <span key={`${tcls}-${tlbl[1]}`} className={`tag ${d}`}><span className="dot" />{tlbl[1]}</span>;
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SSS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />05 · SIK SORULAN</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>{v.short} <em>cevapları</em>.</h2>
            </div>
            <div className="right">
              Tüm SSS için <Link to="/sss" style={{ borderBottom: '1px dashed var(--ink-3)' }}>buradan</Link>.
            </div>
          </div>
          <div className="reveal">
            {v.faq.map(([q, a], i) => (
              <div key={q} className={`faq-row${openFaq === i ? ' open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <div className="qn">0{i + 1}</div>
                <div>
                  <div className="qq">{q}</div>
                  <div className="qa">{a}</div>
                </div>
                <div className="toggle" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CrossSell
        eyebrow="İLGİLİ DİSİPLİNLER & MEKÂNLAR"
        title="Yan komşu çözümler."
        disciplines={v.related.disciplines.slice(0, 2)}
        venues={v.related.venues.slice(0, 1)}
      />
    </>
  );
}

export const VENUE_SLUGS = VENUES.map((v) => v.slug);
