import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { VENUES, DISC_TAG, type DisciplineCls } from '../lib/content';
import { useSeo } from '../lib/seo';

const CLS_VARS: Record<DisciplineCls, CSSProperties> = {
  red:    { ['--c' as any]: 'var(--red)',    ['--cs' as any]: 'var(--red-soft)',    ['--cl' as any]: 'var(--red-line)' },
  gold:   { ['--c' as any]: 'var(--gold)',   ['--cs' as any]: 'var(--gold-soft)',   ['--cl' as any]: 'var(--gold-line)' },
  indigo: { ['--c' as any]: 'var(--indigo)', ['--cs' as any]: 'var(--indigo-soft)', ['--cl' as any]: 'var(--indigo-line)' },
  teal:   { ['--c' as any]: 'var(--teal)',   ['--cs' as any]: 'var(--teal-soft)',   ['--cl' as any]: 'var(--teal-line)' },
  plum:   { ['--c' as any]: 'var(--plum)',   ['--cs' as any]: 'var(--plum-soft)',   ['--cl' as any]: 'var(--plum-line)' },
  olive:  { ['--c' as any]: 'var(--olive)',  ['--cs' as any]: 'var(--olive-soft)',  ['--cl' as any]: 'var(--olive-line)' },
};

export default function Venues() {
  useSeo({
    title: 'Mekân Tipleri — Restoran · Otel · Sahne · Stüdyo · Konferans | On Muzik Proje',
    description: 'Restoran, otel, sahne, stüdyo ve konferans mekânları için tipik akustik hedefler, ses sistemi mimarisi ve teslim deneyimi. Mekân tipinize göre özel çözüm.',
    path: '/mekanlar',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Mekân Tipleri — On Muzik Proje',
      url: 'https://onmuzik.com/mekanlar',
      isPartOf: { '@id': 'https://onmuzik.com/#website' },
    },
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />MEKÂN TİPLERİ · 04</span>
          <h1 className="subhero-title">Her mekânın<br /><em>kendi sesi</em> var.</h1>
          <p className="subhero-lead">
            Restoran ve otelden konser sahnesine, kayıt stüdyosundan konferans merkezine — her mekân tipi
            kendi akustik hedeflerine ve sistem mimarisine sahiptir. Aşağıdan tipinizi seçin.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="paths">
            {VENUES.map((v, i) => {
              const primary = v.related.disciplines[0];
              const cls = DISC_TAG[primary][0];
              return (
                <Link
                  key={v.slug}
                  to={`/mekanlar/${v.slug}`}
                  className="path reveal"
                  style={{ ...CLS_VARS[cls], transitionDelay: `${i * 60}ms` }}
                >
                  <span className="p-tag">{v.short}</span>
                  <h4 style={{ marginTop: 22 }}>{v.name}</h4>
                  <p>{v.hero.lead.split('.')[0]}.</p>
                  <ul className="p-list">
                    {v.goals.slice(0, 4).map(([k, val]) => (
                      <li key={k} style={{ fontFamily: 'var(--f-mono)', fontSize: 11.5, letterSpacing: '0.06em' }}>{k}: {val}</li>
                    ))}
                  </ul>
                  <div className="p-foot">
                    <span className="p-link">Detayını incele <span className="arrow" /></span>
                    <span className="p-price">{v.related.disciplines.length} DİSİPLİN</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
