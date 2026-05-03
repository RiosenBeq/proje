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

export default function Layout() {
  const [drawer, setDrawer] = useState(false);
  const location = useLocation();

  useEffect(() => { setDrawer(false); }, [location.pathname]);
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <>
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
            <span className="nav-tel"><span className="pulse" />+90 212 000 00 00</span>
            <Link to="/iletisim" className="btn btn-red">Teklif Al <span className="arrow" /></Link>
            <button className="hamburger" aria-label="Menü" onClick={() => setDrawer((d) => !d)}>
              <span />
            </button>
          </div>
        </div>
      </header>

      {drawer && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobil menü">
          <span className="m-tel"><span className="pulse" />+90 212 000 00 00</span>
          <nav>
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {n.label}
              </NavLink>
            ))}
            <NavLink to="/gizlilik-politikasi" className={({ isActive }) => (isActive ? 'active' : '')}>Gizlilik</NavLink>
            <NavLink to="/kvkk" className={({ isActive }) => (isActive ? 'active' : '')}>KVKK</NavLink>
          </nav>
          <Link to="/iletisim" className="btn btn-red">Keşif Talep Et <span className="arrow" /></Link>
        </div>
      )}

      <main>
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
                <li><a href="tel:+902120000000">+90 212 000 00 00</a></li>
                <li><a href="mailto:info@onmuzikproje.com">info@onmuzikproje.com</a></li>
                <li><span>İstanbul, Türkiye</span></li>
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

      <div className="sticky-cta">
        <Link to="/iletisim" className="btn btn-red">Teklif Al <span className="arrow" /></Link>
        <a href="tel:+902120000000" className="btn btn-ghost">Ara</a>
      </div>
    </>
  );
}
