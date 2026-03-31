import { motion } from 'motion/react';

export default function Services() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-32 pb-24 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1"
    >
      <header className="mb-24 relative">
        <div className="absolute -top-12 -left-4 text-[120px] font-headline font-bold text-white/[0.02] select-none pointer-events-none uppercase">Archive</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter text-white leading-none">
          TEKNİK ÇÖZÜMLER <br/>
          <span className="text-primary-container">ARŞİVİ</span>
        </h1>
        <p className="mt-8 max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed">
          Sesin fiziğini mühendislik disipliniyle harmanlıyoruz. Her proje, milimetrik hesaplamalar ve akustik mükemmeliyet arayışıyla şekillenen bir başyapıttır.
        </p>
        <div className="mt-12 inline-flex items-center gap-4 bg-primary-container/10 border border-primary-container/20 px-6 py-3 rounded-full">
          <span className="material-symbols-outlined text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
          <span className="font-headline font-bold text-sm tracking-[0.2em] text-primary-container uppercase">Hızlı Kurulum: 24 Saat</span>
        </div>
      </header>
      
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-24">
          <article className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-container/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 overflow-hidden rounded-lg aspect-[4/5] relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxv5GwPul1r7NA1-7MCden8O_oOI3wyztszjpk49y-psbB63Ia7rAf7Thq_kuDYFqpDYlSLJMs1kwKUu37mX710WE1hLM-D55OLfS54vCL_NOE7xe23IOCOyce9q71B9sUhS4SBJKcJ-AVbaKVV3H9_HmNBaJj7xCZVsff4QuPfKotrnoUspOUkCCUTUfX0ku968glthhFOtvYkMQkrduujuu894zWzCL3gsKpZ07IED8-cm7PPU0AYXXapCtt9gsr94oMAD0UA6r" alt="Acoustic Design"/>
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-primary-container tracking-widest uppercase">ID: AT-01</div>
              </div>
              <div className="md:col-span-3 flex flex-col">
                <h2 className="text-3xl font-headline font-bold text-white mb-4 uppercase tracking-tight">Akustik Tasarım</h2>
                <p className="text-on-surface-variant font-body mb-8">İzolasyon ve diffüzyon stratejileriyle, mekanın sonik karakterini yeniden tanımlıyoruz. Her yüzey, ses dalgalarını kontrol etmek için optimize edilmiştir.</p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">RT60 Hedefi</div>
                    <div className="text-xl font-headline font-medium text-white">0.45s - 0.60s</div>
                  </div>
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">Frekans Aralığı</div>
                    <div className="text-xl font-headline font-medium text-white">20Hz - 22kHz</div>
                  </div>
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">Materyal</div>
                    <div className="text-xl font-headline font-medium text-white">Hibrit Polimer</div>
                  </div>
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">İzolasyon</div>
                    <div className="text-xl font-headline font-medium text-white">-55dB (STC)</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          
          <article className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-container/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 overflow-hidden rounded-lg aspect-[4/5] relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_E3QLgcssJqOzesp8_LEjKSfDovAYp--I6N9zCM0wtnZNNWr-CG8X8hWsDiZIfnGQz9rT4_DXMxrCO2tnm_947PsXThz0YqjoZY1krdU5IANKf9J-jCscdywlTJ9v4INlv2-cF1YrYXoVdzc_V2BkEjwYHipm71s7hovnwM-QrTy_UVHkroAv2IqItGGsZCa-ru4nJgYs8axdVo40Ss8__gpFLRrzcDQtlMDUM3m1YQJjvSsCVZ-ttBm7UTmw4YiyrpKUXFwgFqX" alt="Professional Audio"/>
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-primary-container tracking-widest uppercase">ID: PS-04</div>
              </div>
              <div className="md:col-span-3 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-label text-white/40 uppercase tracking-[0.3em]">Official Partner</span>
                  <div className="h-[1px] flex-grow bg-white/10"></div>
                  <span className="text-[12px] font-headline font-bold text-white tracking-tighter">PIONEER PRO AUDIO</span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-white mb-4 uppercase tracking-tight">Profesyonel Ses</h2>
                <p className="text-on-surface-variant font-body mb-8">Pioneer Pro Audio iş ortaklığımız ile konser salonlarından butik stüdyolara kadar en yüksek sadakatli ses sistemlerini kuruyoruz.</p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">Max SPL</div>
                    <div className="text-xl font-headline font-medium text-white">136 dB Peak</div>
                  </div>
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">Dispersion</div>
                    <div className="text-xl font-headline font-medium text-white">110° x 10°</div>
                  </div>
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">Processing</div>
                    <div className="text-xl font-headline font-medium text-white">96kHz DSP</div>
                  </div>
                  <div className="museum-label pl-4 py-2">
                    <div className="text-[10px] font-label text-primary-container uppercase tracking-widest mb-1">Amplifier</div>
                    <div className="text-xl font-headline font-medium text-white">Class-D Peak</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
          <div className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="noise-bg absolute inset-0"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container mb-6 text-4xl">security</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4 uppercase tracking-tight">Güvenlik ve Kontrol</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
                Entegre bina otomasyonu ve üst düzey güvenlik sistemleri. Akustik konforunuzu teknik güvenlik ile mühürlüyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center justify-between group">
                  <span className="text-[10px] font-label text-white/40 group-hover:text-primary transition-colors">Yapay Zeka Destekli Takip</span>
                  <span className="text-xs font-headline text-white">Aktif</span>
                </li>
                <li className="flex items-center justify-between group">
                  <span className="text-[10px] font-label text-white/40 group-hover:text-primary transition-colors">Biyometrik Erişim Kontrolü</span>
                  <span className="text-xs font-headline text-white">L5 Secure</span>
                </li>
                <li className="flex items-center justify-between group">
                  <span className="text-[10px] font-label text-white/40 group-hover:text-primary transition-colors">Akıllı Aydınlatma Entegrasyonu</span>
                  <span className="text-xs font-headline text-white">DALI-2</span>
                </li>
                <li className="flex items-center justify-between group">
                  <span className="text-[10px] font-label text-white/40 group-hover:text-primary transition-colors">Uzak İzleme ve Yönetim</span>
                  <span className="text-xs font-headline text-white">Mobil/Web</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA03d_4nprjcHbz3Y5lz3ALcIBZfGBvhpcvX50CPFRgntWeX0FwiCtCuen2Qk0tkgs2X3CIpSW5FGFNUfwjPg9kqPC6MqqEIFayLnvOK2mJyF09404YljzPUObaZ4ef5sW__I42YxBuIixpQ0E97R-EpejBodWQyDhtyAncwNIWZOFOx_AveUOMROfkdLDTCXnEZCmX2Nppv2_N5WptwcmqUE-ncy9Y5BwIOuDbyf5veRC5DPoaHLuFR1hoFMK8P4NsOb0rXoiGmJYo" alt="Microphone"/>
            <div className="relative z-10">
              <div className="text-primary-container font-headline font-bold text-4xl mb-2 tracking-tighter">0.00%</div>
              <div className="text-[10px] font-label text-white uppercase tracking-widest mb-6">Hata Payı Politikası</div>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Mühendislik ekibimiz, her kurulumda sıfır tolerans prensibiyle çalışır. Tüm donanımlar kurulum öncesi 48 saatlik stres testine tabi tutulur.
              </p>
              <button className="mt-8 text-primary-container text-[10px] font-label uppercase tracking-[0.3em] flex items-center gap-2 group">
                Teknik Dokümantasyon 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mt-48 pt-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <span className="text-[10px] font-label text-primary-container uppercase tracking-[0.5em] mb-4 block">Laboratuvar Standartları</span>
            <h2 className="text-4xl font-headline font-bold text-white uppercase tracking-tighter">Ekipman Envanteri</h2>
          </div>
          <div className="text-right">
            <p className="text-on-surface-variant font-body max-w-sm ml-auto">Envanterimizdeki tüm ürünler, küresel akustik standartlarına (ISO 3382) uygun olarak seçilmiştir.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
          <div className="bg-background p-6 hover:bg-surface-container-low transition-colors">
            <div className="text-[10px] font-label text-white/30 uppercase mb-4 tracking-widest">Brand</div>
            <div className="text-white font-headline font-medium">Pioneer Pro</div>
          </div>
          <div className="bg-background p-6 hover:bg-surface-container-low transition-colors">
            <div className="text-[10px] font-label text-white/30 uppercase mb-4 tracking-widest">Type</div>
            <div className="text-white font-headline font-medium">Point Source</div>
          </div>
          <div className="bg-background p-6 hover:bg-surface-container-low transition-colors">
            <div className="text-[10px] font-label text-white/30 uppercase mb-4 tracking-widest">Origin</div>
            <div className="text-white font-headline font-medium">UK / Japan</div>
          </div>
          <div className="bg-background p-6 hover:bg-surface-container-low transition-colors">
            <div className="text-[10px] font-label text-white/30 uppercase mb-4 tracking-widest">Support</div>
            <div className="text-white font-headline font-medium">24/7 Remote</div>
          </div>
          <div className="bg-background p-6 hover:bg-surface-container-low transition-colors hidden lg:block">
            <div className="text-[10px] font-label text-white/30 uppercase mb-4 tracking-widest">Warranty</div>
            <div className="text-white font-headline font-medium">5 Years Ltd.</div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
