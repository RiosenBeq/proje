import { NavLink, Link } from 'react-router-dom';

type Props = {
  onMenuToggle: () => void;
  drawerOpen: boolean;
};

export default function MobileBottomNav({ onMenuToggle, drawerOpen }: Props) {
  return (
    <nav className="mobile-bottomnav" aria-label="Mobil alt menü">
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
    </nav>
  );
}
