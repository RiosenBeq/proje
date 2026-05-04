import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { DISCIPLINES, VENUES, PROJECTS, type DiscSlug, type VenueSlug, type DisciplineCls } from '../lib/content';

const CLS_VARS: Record<DisciplineCls, CSSProperties> = {
  red:    { ['--c' as any]: 'var(--red)',    ['--cs' as any]: 'var(--red-soft)',    ['--cl' as any]: 'var(--red-line)' },
  gold:   { ['--c' as any]: 'var(--gold)',   ['--cs' as any]: 'var(--gold-soft)',   ['--cl' as any]: 'var(--gold-line)' },
  indigo: { ['--c' as any]: 'var(--indigo)', ['--cs' as any]: 'var(--indigo-soft)', ['--cl' as any]: 'var(--indigo-line)' },
  teal:   { ['--c' as any]: 'var(--teal)',   ['--cs' as any]: 'var(--teal-soft)',   ['--cl' as any]: 'var(--teal-line)' },
  plum:   { ['--c' as any]: 'var(--plum)',   ['--cs' as any]: 'var(--plum-soft)',   ['--cl' as any]: 'var(--plum-line)' },
  olive:  { ['--c' as any]: 'var(--olive)',  ['--cs' as any]: 'var(--olive-soft)',  ['--cl' as any]: 'var(--olive-line)' },
};

type CrossItem = {
  to: string;
  tag: string;
  title: string;
  desc: string;
  cls: DisciplineCls;
};

export type CrossSellProps = {
  eyebrow?: string;
  title?: string;
  disciplines?: DiscSlug[];
  venues?: VenueSlug[];
  projects?: string[];
};

export default function CrossSell({
  eyebrow = 'İLGİLİ İÇERİK',
  title = 'Birlikte daha güçlü.',
  disciplines = [],
  venues = [],
  projects = [],
}: CrossSellProps) {
  const items: CrossItem[] = [
    ...disciplines
      .map((s) => DISCIPLINES.find((d) => d.slug === s))
      .filter((d): d is NonNullable<typeof d> => !!d)
      .map<CrossItem>((d) => ({
        to: `/hizmetler/${d.slug}`,
        tag: 'HİZMET',
        title: d.name,
        desc: d.sub,
        cls: d.cls,
      })),
    ...venues
      .map((s) => VENUES.find((v) => v.slug === s))
      .filter((v): v is NonNullable<typeof v> => !!v)
      .map<CrossItem>((v) => ({
        to: `/mekanlar/${v.slug}`,
        tag: 'MEKÂN',
        title: v.name,
        desc: v.hero.lead.split('.')[0] + '.',
        cls: v.related.disciplines[0] === 'akustik' ? 'gold' : v.related.disciplines[0] === 'led' ? 'indigo' : v.related.disciplines[0] === 'studio' ? 'teal' : v.related.disciplines[0] === 'konferans' ? 'plum' : v.related.disciplines[0] === 'anons' ? 'olive' : 'red',
      })),
    ...projects
      .map((s) => PROJECTS.find((p) => p.slug === s))
      .filter((p): p is NonNullable<typeof p> => !!p)
      .map<CrossItem>((p) => ({
        to: `/projeler/${p.slug}`,
        tag: `${p.city.toUpperCase()} · ${p.year}`,
        title: p.name,
        desc: p.hero.lead.split('.')[0] + '.',
        cls: p.disciplines[0],
      })),
  ];

  if (!items.length) return null;

  return (
    <section className="section venues">
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: 28 }}>
          <div className="left">
            <span className="eyebrow"><span className="bar" />{eyebrow}</span>
            <h2 className="h-section gold" style={{ marginTop: 18, fontSize: 'clamp(28px, 4vw, 48px)' }}>{title}</h2>
          </div>
          <div className="right">
            Bu sayfada incelediğiniz konuyla doğrudan tamamlayıcı disiplin, mekân tipi ve proje teslimleri.
          </div>
        </div>
        <div className="paths reveal">
          {items.slice(0, 3).map((it, i) => (
            <Link
              key={`${it.to}-${i}`}
              to={it.to}
              className="path"
              style={{ ...CLS_VARS[it.cls], transitionDelay: `${i * 60}ms` }}
            >
              <span className="p-tag">{it.tag}</span>
              <h4 style={{ marginTop: 22 }}>{it.title}</h4>
              <p>{it.desc}</p>
              <div className="p-foot">
                <span className="p-link">İncele <span className="arrow" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
