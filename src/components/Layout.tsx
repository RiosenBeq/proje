import { NavLink, Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 lg:px-8 py-4 bg-[#f7f4f0]/95 backdrop-blur-xl z-50 border-b border-stone-200 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <svg viewBox="0 0 180 50" className="h-8 lg:h-10" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(5, 5)">
              <circle cx="20" cy="20" r="20" fill="#ff3b5c" />
              <circle cx="20" cy="20" r="7" fill="#ffffff" />
              <circle cx="20" cy="20" r="2" fill="#ff3b5c" />
              <path d="M 38 0 L 38 12 L 28 22" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="25" y="20" width="6" height="10" fill="#ffffff" rx="1.5" transform="rotate(45 28 22)" />
            </g>
            <text x="55" y="36" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="34" fill="#1c1a1b" letterSpacing="-0.03em">n music</text>
          </svg>
        </Link>
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-['Space_Grotesk'] tracking-widest uppercase text-sm">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-[#ff3b5c] border-b-2 border-[#ff3b5c] pb-1" : "text-stone-500 hover:text-stone-900 transition-colors"}>Ana Sayfa</NavLink>
          <NavLink to="/hizmetler" className={({isActive}) => isActive ? "text-[#ff3b5c] border-b-2 border-[#ff3b5c] pb-1" : "text-stone-500 hover:text-stone-900 transition-colors"}>Hizmetler</NavLink>
          <NavLink to="/portfolyo" className={({isActive}) => isActive ? "text-[#ff3b5c] border-b-2 border-[#ff3b5c] pb-1" : "text-stone-500 hover:text-stone-900 transition-colors"}>Portfolyo</NavLink>
          <NavLink to="/iletisim" className={({isActive}) => isActive ? "text-[#ff3b5c] border-b-2 border-[#ff3b5c] pb-1" : "text-stone-500 hover:text-stone-900 transition-colors"}>İletişim</NavLink>
        </nav>
        <Link to="/iletisim" className="bg-primary-container text-on-primary-container px-5 lg:px-6 py-2 rounded-lg font-headline text-xs lg:text-sm font-bold uppercase tracking-widest transition-all hover:brightness-110 active:scale-95">Teklif Al</Link>
      </header>

      {/* Side Audio Engine Bar (Right) */}
      <aside className="fixed right-0 top-0 h-full flex-col items-center py-24 z-40 bg-[#ede9e3]/95 backdrop-blur-2xl border-l border-stone-200 w-20 hidden lg:flex font-['Space_Grotesk'] text-[10px] font-light uppercase">
        <div className="mb-12 flex flex-col items-center gap-2">
          <div className="w-1 h-12 bg-gradient-to-b from-primary-container to-transparent"></div>
          <span className="text-[#ff3b5c] font-mono text-[10px] origin-center -rotate-90 whitespace-nowrap tracking-widest">ENGINE STATUS</span>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2 group cursor-help" title="96kHz Native Processing">
            <span className="material-symbols-outlined text-[#ff3b5c] text-xl">graphic_eq</span>
            <span className="font-label text-[9px] text-stone-400 uppercase tracking-tighter vertical-text">96kHz</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-[#ff3b5c]/10 p-2 border-r-2 border-[#ff3b5c]" title="Active Monitoring">
            <span className="material-symbols-outlined text-[#ff3b5c] text-xl">settings_input_component</span>
            <span className="font-label text-[9px] text-[#ff3b5c] uppercase tracking-tighter vertical-text">INDEX</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-stone-400 hover:text-stone-600 transition-all duration-500 ease-out">
            <span className="material-symbols-outlined text-xl">memory</span>
            <span className="font-label text-[9px] uppercase tracking-tighter vertical-text">64spls</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-stone-400 hover:text-stone-600 transition-all duration-500 ease-out">
            <span className="material-symbols-outlined text-xl">timer</span>
            <span className="font-label text-[9px] uppercase tracking-tighter vertical-text">1.2ms</span>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#ede9e3] py-12 px-6 lg:px-24 border-t border-stone-200 flex flex-col md:flex-row justify-between items-start gap-8 mt-auto z-10 relative pb-24 md:pb-12">
        <div className="max-w-xs">
          <div className="mb-6">
            <svg viewBox="0 0 180 50" className="h-8" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(5, 5)">
                <circle cx="20" cy="20" r="20" fill="#ff3b5c" />
                <circle cx="20" cy="20" r="7" fill="#ffffff" />
                <circle cx="20" cy="20" r="2" fill="#ff3b5c" />
                <path d="M 38 0 L 38 12 L 28 22" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="25" y="20" width="6" height="10" fill="#ffffff" rx="1.5" transform="rotate(45 28 22)" />
              </g>
              <text x="55" y="36" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="34" fill="#1c1a1b" letterSpacing="-0.03em">n music</text>
            </svg>
          </div>
          <p className="font-body text-xs tracking-normal text-stone-500 leading-relaxed">
            © 2024 On Music. Sonic Excellence through Engineering. Akustik ve ses sistemlerinde yarının teknolojisini bugünden tasarlıyoruz.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-label text-primary uppercase tracking-widest">Kurumsal</span>
            <Link to="/" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">Biz Kimiz?</Link>
            <Link to="/" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">Çözüm Ortakları</Link>
            <Link to="/" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">Kariyer</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-label text-primary uppercase tracking-widest">Hizmetler</span>
            <Link to="/hizmetler" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">Stüdyo Akustiği</Link>
            <Link to="/hizmetler" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">PA Sistemleri</Link>
            <Link to="/hizmetler" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">Kalibrasyon</Link>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <span className="text-[10px] font-label text-primary uppercase tracking-widest">Yasal</span>
            <Link to="/gizlilik-politikasi" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">Gizlilik Politikası</Link>
            <Link to="/kvkk" className="font-body text-xs text-stone-500 hover:text-[#ff3b5c] transition-colors">KVKK</Link>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-[#f7f4f0]/95 backdrop-blur-xl border-t border-stone-200 flex justify-around items-center py-3 z-50 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
        <Link to="/" className="flex flex-col items-center gap-1 text-primary-container">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
          <span className="font-label text-[10px] uppercase text-primary-container">Ana Sayfa</span>
        </Link>
        <Link to="/hizmetler" className="flex flex-col items-center gap-1 text-stone-400">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label text-[10px] uppercase">Hizmetler</span>
        </Link>
        <Link to="/portfolyo" className="flex flex-col items-center gap-1 text-stone-400">
          <span className="material-symbols-outlined">photo_library</span>
          <span className="font-label text-[10px] uppercase">Portfolyo</span>
        </Link>
        <Link to="/iletisim" className="flex flex-col items-center gap-1 text-stone-400">
          <span className="material-symbols-outlined">mail</span>
          <span className="font-label text-[10px] uppercase">İletişim</span>
        </Link>
      </nav>
    </div>
  );
}
