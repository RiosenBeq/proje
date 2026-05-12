import { Link, useLocation } from 'react-router-dom';
import { useSeo } from '../lib/seo';

const PORTALS: Array<{ to: string; label: string; sub: string; cls: string }> = [
  { to: '/',          label: 'Anasayfa',  sub: 'Tüm disiplinler',           cls: 'red'    },
  { to: '/hizmetler', label: 'Hizmetler', sub: '6 mühendislik kapsamı',     cls: 'gold'   },
  { to: '/mekanlar',  label: 'Mekânlar',  sub: 'Restoran · otel · sahne',   cls: 'indigo' },
  { to: '/portfolyo', label: 'Projeler',  sub: '240+ tamamlanmış proje',    cls: 'teal'   },
  { to: '/iletisim',  label: 'İletişim',  sub: 'Saha keşfi talep edin',     cls: 'plum'   },
];

export default function NotFound() {
  const location = useLocation();

  useSeo({
    title: 'Sinyal kaybı (404) | On Muzik Proje',
    description: 'Aradığınız frekans kapsam dışı. Anasayfaya, hizmetlere veya bir sonraki teknik rehbere geçin.',
    path: '/404',
    noIndex: true,
  });

  return (
    <section className="nf-stage" aria-labelledby="nf-title">
      {/* Audio motifs - purely decorative */}
      <svg className="nf-wave" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden>
        <path className="nf-wave-line nf-wave-back" d="M0 120 Q 75 60 150 120 T 300 120 T 450 120 T 600 120 T 750 120 T 900 120 T 1050 120 T 1200 120" />
        {/* Signal "drops out" past the midpoint to imply lost transmission */}
        <path className="nf-wave-line nf-wave-front" d="M0 130 Q 60 70 120 130 T 240 130 T 360 130 T 480 130 L 540 130 L 580 130 L 600 130" />
        <line className="nf-wave-flat" x1="600" y1="130" x2="1200" y2="130" />
      </svg>

      <div className="nf-eq" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${(i * 80) % 1600}ms`, ['--h' as string]: `${10 + ((i * 23) % 70)}%` }} />
        ))}
      </div>

      <div className="nf-notes" aria-hidden>
        <span className="nf-note nf-note-1">♪</span>
        <span className="nf-note nf-note-2">♫</span>
        <span className="nf-note nf-note-3">♬</span>
        <span className="nf-note nf-note-4">♭</span>
        <span className="nf-note nf-note-5">♯</span>
      </div>

      <div className="container nf-inner">
        <div className="nf-eyebrow">
          <span className="dot" />
          <span>SİNYAL KAYBI · 404</span>
        </div>

        <div className="nf-display" aria-hidden>
          <span className="nf-glyph">4</span>
          <span className="nf-glyph nf-glyph-disc" aria-label="0">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
              <circle cx="50" cy="50" r="9"  fill="currentColor" />
              <circle cx="50" cy="50" r="2"  fill="var(--bg)" />
            </svg>
          </span>
          <span className="nf-glyph">4</span>
        </div>

        <h1 id="nf-title" className="nf-title">
          Aradığınız <em>frekans</em><br />kapsam dışı.
        </h1>

        <p className="nf-lead">
          Bu URL bizim ölçüm panelimizde kayıtlı değil. Belki link yanlış kopyalandı, belki içerik
          taşındı, belki geliştirme aşamasında. Aşağıdan akustik olarak temiz bir kanala geçebilirsiniz.
        </p>

        {location.pathname && location.pathname !== '/404' && (
          <div className="nf-trace" role="status" aria-live="polite">
            <span className="nf-trace-k">İSTENEN PATH</span>
            <code className="nf-trace-v">{location.pathname}</code>
            <span className="nf-trace-status">DROPOUT</span>
          </div>
        )}

        <div className="nf-portals">
          {PORTALS.map((p) => (
            <Link key={p.to} to={p.to} className={`nf-portal nf-portal-${p.cls}`}>
              <span className="nf-portal-num">{String(PORTALS.indexOf(p) + 1).padStart(2, '0')}</span>
              <span className="nf-portal-body">
                <span className="nf-portal-label">{p.label}</span>
                <span className="nf-portal-sub">{p.sub}</span>
              </span>
              <span className="nf-portal-arrow" aria-hidden>↗</span>
            </Link>
          ))}
        </div>

        <div className="nf-actions">
          <Link to="/" className="btn btn-red">Anasayfaya dön <span className="arrow" /></Link>
          <a href="https://wa.me/908502419515" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            Yardım iste <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
