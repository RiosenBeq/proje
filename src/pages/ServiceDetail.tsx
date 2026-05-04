import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { DISCIPLINES, getDiscipline, projectsByDiscipline, type DisciplineCls } from '../lib/content';
import { useSeo } from '../lib/seo';
import CrossSell from '../components/CrossSell';
import NotFound from './NotFound';

const ACCENT_BY_CLS: Record<DisciplineCls, string> = {
  red: 'var(--red)', gold: 'var(--gold)', indigo: 'var(--indigo)',
  teal: 'var(--teal)', plum: 'var(--plum)', olive: 'var(--olive)',
};

export default function ServiceDetail() {
  const { slug = '' } = useParams();
  const d = getDiscipline(slug);
  const [openFaq, setOpenFaq] = useState(0);

  useSeo(d ? {
    title: `${d.name} — ${d.sub} | On Muzik Proje`,
    description: `${d.hero.lead} Marka bağımsız mühendislik, ölçüme dayalı teslim. ${d.hz} bandı.`,
    path: `/hizmetler/${d.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `https://onmuzik.com/hizmetler/${d.slug}#service`,
          name: d.name,
          description: d.hero.lead,
          provider: { '@id': 'https://onmuzik.com/#business' },
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          serviceType: d.short,
          url: `https://onmuzik.com/hizmetler/${d.slug}`,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://onmuzik.com/' },
            { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://onmuzik.com/hizmetler' },
            { '@type': 'ListItem', position: 3, name: d.name, item: `https://onmuzik.com/hizmetler/${d.slug}` },
          ],
        },
      ],
    },
  } : {
    title: 'Sayfa bulunamadı | On Muzik Proje',
    description: 'Hizmet sayfası bulunamadı.',
    path: `/hizmetler/${slug}`,
    noIndex: true,
  });

  if (!d) return <NotFound />;
  const sampleProjects = projectsByDiscipline(d.cls).slice(0, 3).map((p) => p.slug);
  const accent = ACCENT_BY_CLS[d.cls];

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />{d.hero.eyebrow}</span>
          <h1 className="subhero-title">
            {d.hero.title}{' '}
            <em style={{ color: accent }}>{d.hero.titleEm}</em>
            {d.hero.titleTail}
          </h1>
          <p className="subhero-lead">{d.hero.lead}</p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Bu Hizmet İçin Teklif <span className="arrow" /></Link>
            <a href="tel:+908502419515" className="btn btn-ghost">Hemen Ara <span className="arrow" /></a>
          </div>
        </div>
      </section>

      {/* Kapsam */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />01 · KAPSAM</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Neler <em>teslim</em> ederiz?</h2>
            </div>
            <div className="right">
              {d.name} disiplinin tam kapsamı — saha keşfinden devreye almaya kadar her aşama mühendislik dokümantasyonu ile.
            </div>
          </div>
          <div className="paths reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {d.scope.map((s, i) => (
              <article key={s} className="path" style={{ ['--c' as any]: accent, ['--cs' as any]: `color-mix(in srgb, ${accent} 12%, transparent)`, ['--cl' as any]: `color-mix(in srgb, ${accent} 45%, transparent)`, transitionDelay: `${i * 30}ms`, padding: '20px 22px' }}>
                <span className="p-tag">0{i + 1}</span>
                <h4 style={{ marginTop: 12, fontSize: 'clamp(17px, 1.4vw, 20px)' }}>{s}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hedef Metrikler */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · TASARIM HEDEFLERİ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Ölçülebilir <em>hedefler</em>.</h2>
            </div>
            <div className="right">
              Her teslim öncesi ve sonrası bu metrikler ölçülür ve hedef-fiili karşılaştırma raporlanır.
            </div>
          </div>
          <div className="dashboard reveal">
            <div className="dash-head">
              <div className="dash-tabs"><button type="button" className="on">{d.short} HEDEF METRİKLERİ</button></div>
              <div className="dash-meta"><span className="dot" />{d.hz}</div>
            </div>
            <div className="equip-grid" style={{ marginTop: 0, borderTop: 0 }}>
              {d.metrics.map(([k, v]) => (
                <div key={k} className="equip-cell">
                  <div className="k">{k}</div>
                  <div className="v">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />03 · SÜREÇ</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Saha <em>akışı</em>.</h2>
            </div>
            <div className="right">
              {d.process.length} aşama — her biri net deliverable ile.
            </div>
          </div>
          <div className="paths reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {d.process.map(([t, deliv], i) => (
              <article key={t} className="path" style={{ ['--c' as any]: accent, ['--cs' as any]: `color-mix(in srgb, ${accent} 12%, transparent)`, ['--cl' as any]: `color-mix(in srgb, ${accent} 45%, transparent)`, transitionDelay: `${i * 50}ms`, padding: '24px 22px' }}>
                <span className="p-tag">0{i + 1}</span>
                <h4 style={{ marginTop: 18, fontSize: 'clamp(18px, 1.5vw, 22px)' }}>{t}</h4>
                <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>{deliv}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Markalar */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />04 · ÇALIŞTIĞIMIZ MARKALAR</span>
              <h2 className="h-section indigo" style={{ marginTop: 18 }}>Marka <em>bağımsız</em>.</h2>
            </div>
            <div className="right">
              Bu disiplinde projeye en uygun ürünü seçeriz. Aşağıdaki markalarla aktif çalışıyoruz.
            </div>
          </div>
          <div className="equip-grid reveal" style={{ marginTop: 0 }}>
            {d.brands.map((b) => (
              <div key={b} className="equip-cell">
                <div className="k">MARKA</div>
                <div className="v">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sayfa SSS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />05 · SIK SORULAN</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>{d.short} <em>cevapları</em>.</h2>
            </div>
            <div className="right">
              Daha fazla soru için <Link to="/sss" style={{ borderBottom: '1px dashed var(--ink-3)' }}>tüm SSS sayfasını</Link> ziyaret edin.
            </div>
          </div>
          <div className="reveal">
            {d.faq.map(([q, a], i) => (
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
        eyebrow="İLGİLİ DİSİPLİNLER & PROJELER"
        title={`${d.name} ile birlikte gelen.`}
        disciplines={d.related}
        projects={sampleProjects}
      />

      {/* Sticky CTA strip */}
      <section className="section quote-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="vision-banner reveal" style={{ background: 'var(--ink)' }}>
            <div className="vb-content">
              <span className="eyebrow" style={{ color: 'rgba(245,239,224,0.6)' }}>
                <span className="bar" style={{ background: 'rgba(245,239,224,0.4)' }} />HAZIR MISINIZ?
              </span>
              <h2 className="h-section" style={{ color: 'var(--stage-fg)', marginTop: 18 }}>
                {d.name} için <em style={{ color: 'var(--gold-2)' }}>keşif</em> talep edin.
              </h2>
              <p>İlk saha keşfi <strong>ücretsizdir</strong>. 24 saat içinde teknik bir cevapla döneriz.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/iletisim" className="btn btn-on-stage">Keşif Talep Et <span className="arrow" /></Link>
                <a href="tel:+908502419515" className="btn btn-ghost-stage">0850 241 9515</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const SERVICE_SLUGS = DISCIPLINES.map((d) => d.slug);
