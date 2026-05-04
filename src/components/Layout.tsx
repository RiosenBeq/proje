import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, type TouchEvent as ReactTouchEvent } from 'react';
import SectionProgress from './SectionProgress';
import CookieBanner from './CookieBanner';
import WhatsAppFab from './WhatsAppFab';
import Newsletter from './Newsletter';
import MobileBottomNav from './MobileBottomNav';
import { smoothScrollToHash } from '../lib/hooks';

const NAV = [
  { to: '/', label: 'Anasayfa', end: true },
  { to: '/hizmetler', label: 'Hizmetler' },
  { to: '/mekanlar', label: 'Mekânlar' },
  { to: '/portfolyo', label: 'Projeler' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/sss', label: 'SSS' },
  { to: '/iletisim', label: 'İletişim' },
];

const SOCIALS: Array<{ href: string; label: string; svg: string }> = [
  { href: 'https://www.instagram.com/', label: 'Instagram', svg: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>' },
  { href: 'https://www.linkedin.com/',  label: 'LinkedIn',  svg: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="11" x2="8" y2="17"/><circle cx="8" cy="7.5" r="0.9" fill="currentColor" stroke="none"/><path d="M12 17v-4a2 2 0 0 1 4 0v4"/><line x1="12" y1="11" x2="12" y2="17"/>' },
  { href: 'https://www.youtube.com/',   label: 'YouTube',   svg: '<rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 9.5v5l4-2.5z" fill="currentColor" stroke="none"/>' },
];

function BrandLockup({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const src = tone === 'light' ? '/assets/on-music-logo-light.png' : '/assets/on-music-logo-dark.png';
  return (
    <span className="brand-lockup">
      <img src={src} alt="On Music Proje" className="brand-logo" width={120} height={28} decoding="async" />
      <small className="brand-suffix">PROJE</small>
    </span>
  );
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


export default function Layout() {
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLElement | null>(null);
  const drawerCloseRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  // Close drawer on route change
  useEffect(() => { setDrawer(false); }, [location.pathname]);

  // Body lock + Esc to close + focus trap on drawer
  useEffect(() => {
    if (!drawer) return;
    document.body.style.overflow = 'hidden';
    document.body.dataset.drawer = 'open';
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => drawerCloseRef.current?.focus(), 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setDrawer(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const root = drawerRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      delete document.body.dataset.drawer;
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
      previouslyFocused?.focus();
    };
  }, [drawer]);

  // Scroll-aware header + auto scroll-to-top + reveal observer (per route)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const els = document.querySelectorAll('.reveal');
    let io: IntersectionObserver | null = null;
    if (els.length) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io?.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px 10% 0px' });
      els.forEach((el) => io!.observe(el));
    }
    // Safety net: if any .reveal element hasn't been activated within 1.4s
    // (IO never fired, JS race, etc.), force-show it so content is never invisible.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => el.classList.add('in'));
    }, 1400);
    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
      window.clearTimeout(fallback);
    };
  }, [location.pathname]);

  // Smooth-scroll for in-page anchor links + click ripple coordinates on .btn
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Element)) return;

      const btn = t.closest<HTMLElement>('.btn');
      if (btn) {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--rx', `${e.clientX - r.left}px`);
        btn.style.setProperty('--ry', `${e.clientY - r.top}px`);
      }

      const a = t.closest('a[href]');
      if (!(a instanceof HTMLAnchorElement)) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;
      e.preventDefault();
      smoothScrollToHash(href, 80);
      history.replaceState(null, '', href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Swipe-to-close drawer
  function onTouchStart(e: ReactTouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }
  function onTouchMove(e: ReactTouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    if (dx > 0 && drawerRef.current) {
      touchDeltaX.current = dx;
      drawerRef.current.style.transform = `translateX(${dx}px)`;
      drawerRef.current.style.transition = 'none';
    }
  }
  function onTouchEnd() {
    if (touchStartX.current === null) return;
    const el = drawerRef.current;
    if (el) {
      el.style.transition = '';
      el.style.transform = '';
    }
    if (touchDeltaX.current > 80) setDrawer(false);
    touchStartX.current = null;
    touchDeltaX.current = 0;
  }

  return (
    <>
      <a href="#main" className="skip-link">İçeriğe geç</a>

      <ScrollProgress />

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
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
            <Link to="/iletisim" className="btn btn-red nav-cta">Teklif Al <span className="arrow" /></Link>
            <button
              type="button"
              className={`hamburger${drawer ? ' on' : ''}`}
              aria-label={drawer ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={drawer}
              aria-controls="mobile-drawer"
              onClick={() => setDrawer((d) => !d)}
            >
              <span />
            </button>
            <Link to="/iletisim" className="nav-cta-compact" aria-label="Teklif Al">
              <span>Teklif</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`drawer-backdrop${drawer ? ' on' : ''}`}
        onClick={() => setDrawer(false)}
        aria-hidden
      />
      <aside
        id="mobile-drawer"
        ref={drawerRef}
        className={`mobile-drawer${drawer ? ' on' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        aria-hidden={!drawer}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="md-grip" aria-hidden />
        <div className="md-head">
          <BrandLockup />
          <button
            ref={drawerCloseRef}
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

        <p className="md-intro">
          <span className="md-eyebrow"><span className="bar" />İSTANBUL · 2009'DAN BERİ</span>
          16 yıllık akustik ve ses mühendisliği. <em>Marka bağımsız</em>, ölçüme dayalı tasarım.
        </p>

        <nav className="md-nav">
          {NAV.map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ ['--i' as string]: i }}
            >
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
          <a href="mailto:proje@onmuzik.com" className="md-row">
            <span className="md-k">E-POSTA</span>
            <span className="md-v">proje@onmuzik.com</span>
          </a>
          <span className="md-row">
            <span className="md-k">ADRES</span>
            <span className="md-v">Ataşehir / İstanbul</span>
          </span>
        </div>

        <div className="md-social" aria-label="Sosyal medya">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: s.svg }} />
            </a>
          ))}
        </div>

        <div className="md-foot">
          <Link to="/iletisim" className="btn btn-red">Keşif Talep Et <span className="arrow" /></Link>
          <div className="md-legal">
            <NavLink to="/markalar" className={({ isActive }) => (isActive ? 'active' : '')}>Markalar</NavLink>
            <span>·</span>
            <NavLink to="/sertifikalar" className={({ isActive }) => (isActive ? 'active' : '')}>Sertifikalar</NavLink>
            <span>·</span>
            <NavLink to="/servis-bakim" className={({ isActive }) => (isActive ? 'active' : '')}>Servis</NavLink>
            <span>·</span>
            <NavLink to="/bilgi-merkezi" className={({ isActive }) => (isActive ? 'active' : '')}>Bilgi</NavLink>
            <span>·</span>
            <NavLink to="/gizlilik-politikasi" className={({ isActive }) => (isActive ? 'active' : '')}>Gizlilik</NavLink>
            <span>·</span>
            <NavLink to="/kvkk" className={({ isActive }) => (isActive ? 'active' : '')}>KVKK</NavLink>
          </div>
        </div>
      </aside>

      <main id="main" className="page-transition" key={location.pathname}>
        <Outlet />
      </main>

      {location.pathname === '/' && <SectionProgress />}

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
              <div className="foot-social" aria-label="Sosyal medya">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: s.svg }} />
                  </a>
                ))}
              </div>
              <Newsletter />
            </div>
            <div>
              <h6>DİSİPLİNLER</h6>
              <ul>
                <li><Link to="/hizmetler/akustik">Akustik Tasarım</Link></li>
                <li><Link to="/hizmetler/ses">Ses Sistemi</Link></li>
                <li><Link to="/hizmetler/studio">Stüdyo Akustiği</Link></li>
                <li><Link to="/hizmetler/led">LED & Video</Link></li>
                <li><Link to="/hizmetler/konferans">Konferans / AV</Link></li>
                <li><Link to="/hizmetler/anons">Anons / VA</Link></li>
              </ul>
            </div>
            <div>
              <h6>MEKÂNLAR</h6>
              <ul>
                <li><Link to="/mekanlar/restoran">Restoran</Link></li>
                <li><Link to="/mekanlar/otel">Otel</Link></li>
                <li><Link to="/mekanlar/sahne">Sahne</Link></li>
                <li><Link to="/mekanlar/studio">Stüdyo</Link></li>
                <li><Link to="/mekanlar/konferans">Konferans</Link></li>
              </ul>
            </div>
            <div>
              <h6>ŞİRKET</h6>
              <ul>
                <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                <li><Link to="/portfolyo">Projeler</Link></li>
                <li><Link to="/markalar">Markalar</Link></li>
                <li><Link to="/sertifikalar">Sertifikalar</Link></li>
                <li><Link to="/bilgi-merkezi">Bilgi Merkezi</Link></li>
                <li><Link to="/sss">SSS</Link></li>
                <li><Link to="/servis-bakim">Servis & Bakım</Link></li>
                <li><Link to="/iletisim">İletişim</Link></li>
                <li><Link to="/gizlilik-politikasi">Gizlilik</Link></li>
                <li><Link to="/kvkk">KVKK</Link></li>
              </ul>
            </div>
            <div>
              <h6>İLETİŞİM</h6>
              <ul>
                <li><a href="tel:+908502419515">0850 241 9515</a></li>
                <li><a href="mailto:proje@onmuzik.com">proje@onmuzik.com</a></li>
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

      <WhatsAppFab />
      <ScrollTopFab />
      <MobileBottomNav onMenuToggle={() => setDrawer((d) => !d)} drawerOpen={drawer} />
      <CookieBanner />
    </>
  );
}
