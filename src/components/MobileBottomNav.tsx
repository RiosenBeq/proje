import { NavLink, Link, useLocation } from 'react-router-dom';

type Props = {
  onMenuToggle: () => void;
  drawerOpen: boolean;
};

// Genel site mobil bottom nav: Ana / Hizmet / Teklif Al (CTA) / Mekân / Menü
function GeneralNav({ onMenuToggle, drawerOpen }: Props) {
  return (
    <>
      <NavLink to="/" end className={({ isActive }) => `mbn-item${isActive ? ' active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
        </svg>
        <span>Ana</span>
      </NavLink>
      <NavLink to="/hizmetler" className={({ isActive }) => `mbn-item${isActive ? ' active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h10" />
        </svg>
        <span>Hizmet</span>
      </NavLink>
      <Link to="/iletisim" className="mbn-item mbn-cta" aria-label="Teklif Al">
        <span className="mbn-cta-bubble">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
        <span>Teklif Al</span>
      </Link>
      <NavLink to="/mekanlar" className={({ isActive }) => `mbn-item${isActive ? ' active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 21h18" />
          <path d="M5 21V8l7-5 7 5v13" />
          <path d="M10 21v-6h4v6" />
        </svg>
        <span>Mekân</span>
      </NavLink>
      <button
        type="button"
        className={`mbn-item mbn-menu${drawerOpen ? ' active' : ''}`}
        onClick={onMenuToggle}
        aria-label={drawerOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        aria-expanded={drawerOpen}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="5" cy="12" r="1.4" fill="currentColor" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
          <circle cx="19" cy="12" r="1.4" fill="currentColor" />
        </svg>
        <span>Menü</span>
      </button>
    </>
  );
}

// Hızla Kirala bağlamı için mobil bottom nav: Ana / Kategori / HK CTA / Popüler / Menü
function HizlaKiralaNav({ onMenuToggle, drawerOpen }: Props) {
  return (
    <>
      <NavLink to="/" end className={({ isActive }) => `mbn-item${isActive ? ' active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
        </svg>
        <span>Ana</span>
      </NavLink>
      <a href="/hizla-kirala#kategoriler" className="mbn-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
        <span>Kategori</span>
      </a>
      <Link to="/hizla-kirala" className="mbn-item mbn-cta mbn-cta-hk" aria-label="Hızla Kirala — Ana">
        <span className="mbn-cta-bubble mbn-cta-bubble-hk">
          <img
            src="/assets/hizla-kirala/hizla-kirala-icon.png"
            alt=""
            width="34"
            height="34"
            loading="eager"
            decoding="async"
            aria-hidden
          />
        </span>
        <span>Hızla</span>
      </Link>
      <a href="/hizla-kirala#en-cok-kiralananlar" className="mbn-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 2v6" />
          <path d="m12 8 4 4-4 4-4-4 4-4z" />
          <path d="M5 18h14" />
          <path d="M5 22h14" />
        </svg>
        <span>Popüler</span>
      </a>
      <button
        type="button"
        className={`mbn-item mbn-menu${drawerOpen ? ' active' : ''}`}
        onClick={onMenuToggle}
        aria-label={drawerOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        aria-expanded={drawerOpen}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="5" cy="12" r="1.4" fill="currentColor" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
          <circle cx="19" cy="12" r="1.4" fill="currentColor" />
        </svg>
        <span>Menü</span>
      </button>
    </>
  );
}

export default function MobileBottomNav(props: Props) {
  const location = useLocation();
  const onHizlaKirala = location.pathname.startsWith('/hizla-kirala');
  return (
    <nav
      className={`mobile-bottomnav${onHizlaKirala ? ' is-hizla-kirala' : ''}`}
      aria-label={onHizlaKirala ? 'Hızla Kirala mobil alt menü' : 'Mobil alt menü'}
    >
      {onHizlaKirala ? <HizlaKiralaNav {...props} /> : <GeneralNav {...props} />}
    </nav>
  );
}
