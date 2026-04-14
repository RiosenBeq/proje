import { NavLink, Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-[0_12px_30px_rgba(148,163,184,0.22)]">
        <Link to="/" className="flex items-center gap-2">
          <svg viewBox="0 0 180 50" className="h-8 lg:h-10" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(5, 5)">
              <circle cx="20" cy="20" r="20" fill="#f06b8e" />
              <circle cx="20" cy="20" r="7" fill="#ffffff" />
              <circle cx="20" cy="20" r="2" fill="#f06b8e" />
              <path d="M 38 0 L 38 12 L 28 22" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="25" y="20" width="6" height="10" fill="#ffffff" rx="1.5" transform="rotate(45 28 22)" />
            </g>
            <text x="55" y="36" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="34" fill="#1f2a3d" letterSpacing="-0.03em">n music</text>
          </svg>
        </Link>
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-['Space_Grotesk'] tracking-widest uppercase text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? "text-[#f06b8e] border-b-2 border-[#f06b8e] pb-1" : "text-slate-600 hover:text-slate-900 transition-colors"}>Ana Sayfa</NavLink>
          <NavLink to="/hizmetler" className={({isActive}) => isActive ? "text-[#f06b8e] border-b-2 border-[#f06b8e] pb-1" : "text-slate-600 hover:text-slate-900 transition-colors"}>Hizmetler</NavLink>
          <NavLink to="/portfolyo" className={({isActive}) => isActive ? "text-[#f06b8e] border-b-2 border-[#f06b8e] pb-1" : "text-slate-600 hover:text-slate-900 transition-colors"}>Portfolyo</NavLink>
          <NavLink to="/iletisim" className={({isActive}) => isActive ? "text-[#f06b8e] border-b-2 border-[#f06b8e] pb-1" : "text-slate-600 hover:text-slate-900 transition-colors"}>İletişim</NavLink>
        </nav>
        <Link to="/iletisim" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-headline text-xs lg:text-sm font-bold uppercase tracking-widest transition-transform scale-95 active:opacity-80">Teklif Al</Link>
      </header>

      {/* Side Audio Engine Bar (Right) */}
      <aside className="fixed right-0 top-0 h-full flex flex-col items-center py-24 z-40 bg-white/85 backdrop-blur-2xl border-l border-slate-200 w-20 hidden lg:flex font-['Space_Grotesk'] text-[10px] font-light uppercase">
        <div className="mb-12 flex flex-col items-center gap-2">
          <div className="w-1 h-12 bg-gradient-to-b from-primary-container to-transparent"></div>
          <span className="text-[#f06b8e] font-mono text-[10px] origin-center -rotate-90 whitespace-nowrap tracking-widest">ENGINE STATUS</span>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2 group cursor-help" title="96kHz Native Processing">
            <span className="material-symbols-outlined text-[#f06b8e] text-xl">graphic_eq</span>
            <span className="font-label text-[9px] text-slate-400 uppercase tracking-tighter vertical-text">96kHz</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-[#f06b8e]/10 p-2 border-r-2 border-[#f06b8e]" title="Active Monitoring">
            <span className="material-symbols-outlined text-[#f06b8e] text-xl">settings_input_component</span>
            <span className="font-label text-[9px] text-[#f06b8e] uppercase tracking-tighter vertical-text">INDEX</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-all duration-500 ease-out">
            <span className="material-symbols-outlined text-xl">memory</span>
            <span className="font-label text-[9px] uppercase tracking-tighter vertical-text">64spls</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-all duration-500 ease-out">
            <span className="material-symbols-outlined text-xl">timer</span>
            <span className="font-label text-[9px] uppercase tracking-tighter vertical-text">1.2ms</span>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f2f5fb] py-12 px-8 lg:px-24 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start gap-8 mt-auto z-10 relative">
        <div className="max-w-xs">
          <div className="mb-6">
            <svg viewBox="0 0 180 50" className="h-8" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(5, 5)">
                <circle cx="20" cy="20" r="20" fill="#f06b8e" />
                <circle cx="20" cy="20" r="7" fill="#ffffff" />
                <circle cx="20" cy="20" r="2" fill="#f06b8e" />
                <path d="M 38 0 L 38 12 L 28 22" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="25" y="20" width="6" height="10" fill="#ffffff" rx="1.5" transform="rotate(45 28 22)" />
              </g>
              <text x="55" y="36" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="34" fill="#1f2a3d" letterSpacing="-0.03em">n music</text>
            </svg>
          </div>
          <p className="font-body text-xs tracking-normal text-slate-500 leading-relaxed">
            © 2024 On Music. Sonic Excellence through Engineering. Akustik ve ses sistemlerinde yarının teknolojisini bugünden tasarlıyoruz.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-label text-primary uppercase tracking-widest">Kurumsal</span>
            <Link to="/" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">Biz Kimiz?</Link>
            <Link to="/" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">Çözüm Ortakları</Link>
            <Link to="/" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">Kariyer</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-label text-primary uppercase tracking-widest">Hizmetler</span>
            <Link to="/hizmetler" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">Stüdyo Akustiği</Link>
            <Link to="/hizmetler" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">PA Sistemleri</Link>
            <Link to="/hizmetler" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">Kalibrasyon</Link>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <span className="text-[10px] font-label text-primary uppercase tracking-widest">Yasal</span>
            <Link to="/" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">Gizlilik Politikası</Link>
            <Link to="/" className="font-body text-xs text-slate-500 hover:text-[#f06b8e] transition-colors">KVKK</Link>
          </div>
        </div>
      </footer>
      
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest border-t border-slate-200 flex justify-around items-center py-4 z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-primary-container">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
          <span className="font-label text-[10px] uppercase">Ana Sayfa</span>
        </Link>
        <Link to="/hizmetler" className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label text-[10px] uppercase">Hizmetler</span>
        </Link>
        <Link to="/iletisim" className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">mail</span>
          <span className="font-label text-[10px] uppercase">İletişim</span>
        </Link>
      </nav>
    </div>
  );
}
