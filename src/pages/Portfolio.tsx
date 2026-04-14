import { motion } from 'motion/react';

export default function Portfolio() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-32 pb-24 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1"
    >
      <header className="mb-24 relative">
        <div className="absolute -top-12 -left-4 text-[120px] font-headline font-bold text-white/[0.03] select-none pointer-events-none uppercase">Referans</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter text-white leading-none">
          <span className="text-primary-container">REFERANS</span><br/>
          LARIMIZ
        </h1>
        <p className="mt-8 max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed">
          Türkiye'nin farklı ölçeklerdeki prestijli mekanları için geliştirdiğimiz akustik ve ses sistemi projeleri. Her çalışma, kullanıcı deneyimini önceleyen mühendislik yaklaşımımızı yansıtır.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Project 1 */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg">
            <div className="absolute inset-0 bg-primary-container/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Isf7r8KlNMiLJeaGlwNe6w6nKaFXvUM3BGdkp5gR1SU_Nlfks76_14kB2U3xijSTwRrXFHou2a84mVf5068BZQr1kywJbUEoLH0ql2NMRcpcSXpIgEjglD_fd6oAU7OhcXxYy8klEYWJDRtUh5kZwGqa43EOq-wgmfH7-KUKTMbE5slClRksAQo-42z9adAIT0docfiJBoKIhNQGYM3Kexv7BnG0zavqim16F3KBVsAygW9vbFbYasrZWKSJG-XHSmWX4ZiaWOiI" alt="Studio Alpha"/>
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-white tracking-widest uppercase">Stüdyo</span>
              <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-primary-container tracking-widest uppercase">2023</span>
            </div>
          </div>
          <h2 className="text-2xl font-headline font-bold text-white mb-2 uppercase tracking-tight group-hover:text-primary-container transition-colors">Studio Alpha - İstanbul</h2>
          <p className="text-on-surface-variant font-body text-sm line-clamp-2">Dolby Atmos 9.1.4 miksaj stüdyosu akustik tasarımı ve ana monitör sistemi entegrasyonu.</p>
        </article>

        {/* Project 2 */}
        <article className="group cursor-pointer md:mt-24">
          <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg">
            <div className="absolute inset-0 bg-primary-container/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_E3QLgcssJqOzesp8_LEjKSfDovAYp--I6N9zCM0wtnZNNWr-CG8X8hWsDiZIfnGQz9rT4_DXMxrCO2tnm_947PsXThz0YqjoZY1krdU5IANKf9J-jCscdywlTJ9v4INlv2-cF1YrYXoVdzc_V2BkEjwYHipm71s7hovnwM-QrTy_UVHkroAv2IqItGGsZCa-ru4nJgYs8axdVo40Ss8__gpFLRrzcDQtlMDUM3m1YQJjvSsCVZ-ttBm7UTmw4YiyrpKUXFwgFqX" alt="Club Nexus"/>
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-white tracking-widest uppercase">Canlı Müzik</span>
              <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-primary-container tracking-widest uppercase">2024</span>
            </div>
          </div>
          <h2 className="text-2xl font-headline font-bold text-white mb-2 uppercase tracking-tight group-hover:text-primary-container transition-colors">Club Nexus - İzmir</h2>
          <p className="text-on-surface-variant font-body text-sm line-clamp-2">3000 kişilik performans mekanı için Pioneer Pro Audio XY serisi ana PA sistemi ve akustik iyileştirme.</p>
        </article>

        {/* Project 3 */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg">
            <div className="absolute inset-0 bg-primary-container/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxv5GwPul1r7NA1-7MCden8O_oOI3wyztszjpk49y-psbB63Ia7rAf7Thq_kuDYFqpDYlSLJMs1kwKUu37mX710WE1hLM-D55OLfS54vCL_NOE7xe23IOCOyce9q71B9sUhS4SBJKcJ-AVbaKVV3H9_HmNBaJj7xCZVsff4QuPfKotrnoUspOUkCCUTUfX0ku968glthhFOtvYkMQkrduujuu894zWzCL3gsKpZ07IED8-cm7PPU0AYXXapCtt9gsr94oMAD0UA6r" alt="Grand Auditorium"/>
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-white tracking-widest uppercase">Konferans</span>
              <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-primary-container tracking-widest uppercase">2023</span>
            </div>
          </div>
          <h2 className="text-2xl font-headline font-bold text-white mb-2 uppercase tracking-tight group-hover:text-primary-container transition-colors">Grand Auditorium - Ankara</h2>
          <p className="text-on-surface-variant font-body text-sm line-clamp-2">Çok amaçlı salon için değişken akustik paneller ve dijital yönlendirilebilir line array kurulumu.</p>
        </article>
      </div>
    </motion.main>
  );
}
