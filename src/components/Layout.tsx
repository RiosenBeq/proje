import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NAV = [
  { to: '/', label: 'Anasayfa', end: true },
  { to: '/hizmetler', label: 'Hizmetler' },
  { to: '/portfolyo', label: 'Projeler' },
  { to: '/iletisim', label: 'İletişim' },
];

function BrandLockup({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const src = tone === 'light' ? '/assets/on-music-logo-light.png' : '/assets/on-music-logo-dark.png';
  return (
    <span className="brand-lockup">
      <img src={src} alt="On Music" className="brand-logo" />
      <small className="brand-suffix">PROJE</small>
    </span>
  );
}

function NavIcon({ kind }: { kind: 'home' | 'grid' | 'star' | 'mail' | 'plus' }) {
  const c = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' as const, stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (kind === 'home') return <svg {...c}><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>;
  if (kind === 'grid') return <svg {...c}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
  if (kind === 'star') return <svg {...c}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none" /></svg>;
  if (kind === 'mail') return <svg {...c}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  if (kind === 'plus') return <svg {...c} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>;
  return null;
}

function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setW(max > 0 ? (h.scrollTop / max) * 100 : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div className="scroll-progress" aria-hidden><span style={{ width: `${w}%` }} /></div>;
}

function ScrollTopFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`scroll-top${show ? ' show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Sayfanın başına dön"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobil gezinti">
      <NavLink to="/" end className={({ isActive }) => `bn-item${isActive ? ' on' : ''}`}>
        <NavIcon kind="home" />
        <span>Anasayfa</span>
      </NavLink>
      <NavLink to="/hizmetler" className={({ isActive }) => `bn-item${isActive ? ' on' : ''}`}>
        <NavIcon kind="grid" />
        <span>Hizmetler</span>
      </NavLink>
      <Link to="/iletisim" className="bn-cta" aria-label="Teklif Al">
        <span className="bn-cta-inner"><NavIcon kind="plus" /></span>
        <span className="bn-cta-lbl">Teklif</span>
      </Link>
      <NavLink to="/portfolyo" className={({ isActive }) => `bn-item${isActive ? ' on' : ''}`}>
        <NavIcon kind="star" />
        <span>Projeler</span>
      </NavLink>
      <NavLink to="/iletisim" className={({ isActive }) => `bn-item${isActive ? ' on' : ''}`}>
        <NavIcon kind="mail" />
        <span>İletişim</span>
      </NavLink>
    </nav>
  );
}

export default function Layout() {
  const [drawer, setDrawer] = useState(false);
  const location = useLocation();

  useEffect(() => { setDrawer(false); }, [location.pathname]);

  useEffect(() => {
    if (drawer) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
    return undefined;
  }, [drawer]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <>
      <ScrollProgress />

      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand" aria-label="On Music Proje">
            <BrandLockup />
          </Link>
          <nav className="nav-links">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <span className="nav-tel"><span className="pulse" />0850 241 9515</span>
            <Link to="/iletisim" className="btn btn-red">Teklif Al <span className="arrow" /></Link>
            <button
              type="button"
              className={`hamburger${drawer ? ' on' : ''}`}
              aria-label={drawer ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={drawer}
              onClick={() => setDrawer((d) => !d)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`drawer-backdrop${drawer ? ' on' : ''}`}
        onClick={() => setDrawer(false)}
        aria-hidden
      />
      <aside className={`mobile-drawer${drawer ? ' on' : ''}`} role="dialog" aria-label="Mobil menü" aria-hidden={!drawer}>
        <div className="md-head">
          <BrandLockup />
          <button
            type="button"
            className="md-close"
            aria-label="Menüyü kapat"
            onClick={() => setDrawer(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
        <nav className="md-nav">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="md-arrow">↗</span>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="md-meta">
          <a href="tel:+908502419515" className="md-row">
            <span className="md-k">TEL</span>
            <span className="md-v">0850 241 9515</span>
          </a>
          <a href="mailto:info@onmuzik.com" className="md-row">
            <span className="md-k">E-POSTA</span>
            <span className="md-v">info@onmuzik.com</span>
          </a>
          <span className="md-row">
            <span className="md-k">ADRES</span>
            <span className="md-v">Ataşehir / İstanbul</span>
          </span>
        </div>
        <div className="md-foot">
          <Link to="/iletisim" className="btn btn-red">Keşif Talep Et <span className="arrow" /></Link>
          <div className="md-legal">
            <NavLink to="/gizlilik-politikasi">Gizlilik</NavLink>
            <span>·</span>
            <NavLink to="/kvkk">KVKK</NavLink>
          </div>
        </div>
      </aside>

      <main className="page-transition" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="foot-cta">
            <div>
              <span className="eyebrow" style={{ color: 'rgba(245,239,224,0.6)' }}>
                <span className="bar" style={{ background: 'rgba(245,239,224,0.4)' }} />BAŞLAYALIM
              </span>
              <h3>Bir sonraki proje için<br /><em>mühendislik tarafı</em> hazır.</h3>
            </div>
            <Link to="/iletisim" className="btn btn-on-stage">Keşif Talep Et <span className="arrow" /></Link>
          </div>
          <div className="foot-grid">
            <div className="foot-brand">
              <BrandLockup tone="light" />
              <p>İstanbul merkezli, 16 yıllık akustik ve ses mühendisliği stüdyosu. Türkiye genelinde proje teslim ediyoruz.</p>
            </div>
            <div>
              <h6>DİSİPLİNLER</h6>
              <ul>
                <li><Link to="/hizmetler">Akustik Tasarım</Link></li>
                <li><Link to="/hizmetler">Ses Sistemi</Link></li>
                <li><Link to="/hizmetler">Stüdyo</Link></li>
                <li><Link to="/hizmetler">LED & Video</Link></li>
              </ul>
            </div>
            <div>
              <h6>MEKÂNLAR</h6>
              <ul>
                <li><Link to="/hizmetler">Restoran</Link></li>
                <li><Link to="/hizmetler">Otel</Link></li>
                <li><Link to="/hizmetler">Sahne</Link></li>
                <li><Link to="/hizmetler">Stüdyo</Link></li>
                <li><Link to="/hizmetler">Konferans</Link></li>
              </ul>
            </div>
            <div>
              <h6>ŞİRKET</h6>
              <ul>
                <li><Link to="/portfolyo">Projeler</Link></li>
                <li><Link to="/iletisim">İletişim</Link></li>
                <li><Link to="/gizlilik-politikasi">Gizlilik</Link></li>
                <li><Link to="/kvkk">KVKK</Link></li>
              </ul>
            </div>
            <div>
              <h6>İLETİŞİM</h6>
              <ul>
                <li><a href="tel:+908502419515">0850 241 9515</a></li>
                <li><a href="mailto:info@onmuzik.com">info@onmuzik.com</a></li>
                <li><span>Ataşehir, İstanbul</span></li>
              </ul>
            </div>
          </div>
          <div className="foot-meta">
            <span>© 2026 ON MUZIK PROJE</span>
            <span>
              <Link to="/kvkk">KVKK</Link> · <Link to="/gizlilik-politikasi">GİZLİLİK</Link> · ÇEREZ POLİTİKASI
            </span>
          </div>
        </div>
      </footer>

      <ScrollTopFab />
      <BottomNav />
    </>
  );
}
