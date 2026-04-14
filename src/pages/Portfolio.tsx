import { motion } from 'motion/react';

export default function Portfolio() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-28 pb-28 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1 overflow-x-hidden"
    >
      <header className="mb-20 relative overflow-hidden">
        <div className="absolute -top-8 -left-2 text-[100px] md:text-[120px] font-headline font-bold text-on-background/[0.03] select-none pointer-events-none uppercase leading-none">Works</div>
        <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-none">
          SEÇİLİ <br/>
          <span className="text-primary-container">PROJELER</span>
        </h1>
        <p className="mt-8 max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed">
          Türkiye'nin en prestijli mekanları için tasarladığımız akustik ve ses sistemi çözümleri. Her proje, kendi akustik kimliğine sahip bir mühendislik eseridir.
        </p>
      </header>

      {/* Project Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/3] mb-5 rounded-xl">
            <div className="absolute inset-0 bg-primary-container/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 bg-stone-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Isf7r8KlNMiLJeaGlwNe6w6nKaFXvUM3BGdkp5gR1SU_Nlfks76_14kB2U3xijSTwRrXFHou2a84mVf5068BZQr1kywJbUEoLH0ql2NMRcpcSXpIgEjglD_fd6oAU7OhcXxYy8klEYWJDRtUh5kZwGqa43EOq-wgmfH7-KUKTMbE5slClRksAQo-42z9adAIT0docfiJBoKIhNQGYM3Kexv7BnG0zavqim16F3KBVsAygW9vbFbYasrZWKSJG-XHSmWX4ZiaWOiI" alt="Studio Alpha"/>
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <span className="bg-stone-950/75 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-white tracking-widest uppercase">Stüdyo</span>
              <span className="bg-stone-950/75 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-[#ff3b5c] tracking-widest uppercase">2023</span>
            </div>
          </div>
          <h2 className="text-xl font-headline font-bold text-on-surface mb-2 uppercase tracking-tight group-hover:text-primary-container transition-colors">Studio Alpha - İstanbul</h2>
          <p className="text-on-surface-variant font-body text-sm line-clamp-2">Dolby Atmos 9.1.4 miksaj stüdyosu akustik tasarımı ve ana monitör sistemi entegrasyonu.</p>
        </article>

        {/* Project 2 */}
        <article className="group cursor-pointer md:mt-16">
          <div className="relative overflow-hidden aspect-[4/3] mb-5 rounded-xl">
            <div className="absolute inset-0 bg-primary-container/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 bg-stone-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_E3QLgcssJqOzesp8_LEjKSfDovAYp--I6N9zCM0wtnZNNWr-CG8X8hWsDiZIfnGQz9rT4_DXMxrCO2tnm_947PsXThz0YqjoZY1krdU5IANKf9J-jCscdywlTJ9v4INlv2-cF1YrYXoVdzc_V2BkEjwYHipm71s7hovnwM-QrTy_UVHkroAv2IqItGGsZCa-ru4nJgYs8axdVo40Ss8__gpFLRrzcDQtlMDUM3m1YQJjvSsCVZ-ttBm7UTmw4YiyrpKUXFwgFqX" alt="Club Nexus"/>
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <span className="bg-stone-950/75 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-white tracking-widest uppercase">Canlı Müzik</span>
              <span className="bg-stone-950/75 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-[#ff3b5c] tracking-widest uppercase">2024</span>
            </div>
          </div>
          <h2 className="text-xl font-headline font-bold text-on-surface mb-2 uppercase tracking-tight group-hover:text-primary-container transition-colors">Club Nexus - İzmir</h2>
          <p className="text-on-surface-variant font-body text-sm line-clamp-2">3000 kişilik performans mekanı için Pioneer Pro Audio XY serisi ana PA sistemi ve akustik iyileştirme.</p>
        </article>

        {/* Project 3 */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/3] mb-5 rounded-xl">
            <div className="absolute inset-0 bg-primary-container/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 bg-stone-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxv5GwPul1r7NA1-7MCden8O_oOI3wyztszjpk49y-psbB63Ia7rAf7Thq_kuDYFqpDYlSLJMs1kwKUu37mX710WE1hLM-D55OLfS54vCL_NOE7xe23IOCOyce9q71B9sUhS4SBJKcJ-AVbaKVV3H9_HmNBaJj7xCZVsff4QuPfKotrnoUspOUkCCUTUfX0ku968glthhFOtvYkMQkrduujuu894zWzCL3gsKpZ07IED8-cm7PPU0AYXXapCtt9gsr94oMAD0UA6r" alt="Grand Auditorium"/>
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <span className="bg-stone-950/75 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-white tracking-widest uppercase">Konferans</span>
              <span className="bg-stone-950/75 backdrop-blur-md px-3 py-1 rounded text-[10px] font-label text-[#ff3b5c] tracking-widest uppercase">2023</span>
            </div>
          </div>
          <h2 className="text-xl font-headline font-bold text-on-surface mb-2 uppercase tracking-tight group-hover:text-primary-container transition-colors">Grand Auditorium - Ankara</h2>
          <p className="text-on-surface-variant font-body text-sm line-clamp-2">Çok amaçlı salon için değişken akustik paneller ve dijital yönlendirilebilir line array kurulumu.</p>
        </article>
      </div>

      {/* Installation Gallery */}
      <section className="mt-24 pt-20 border-t border-stone-200">
        <div className="mb-12">
          <span className="text-[10px] font-label text-primary uppercase tracking-[0.4em] mb-3 block">Görsel Arşiv</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface uppercase tracking-tight">Kurulum Galerisi</h2>
          <p className="mt-4 max-w-lg text-on-surface-variant font-body text-sm leading-relaxed">
            Restoran, kafe ve özel mekânlardaki ses sistemi kurulumlarından seçme kareler.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Featured - Restaurant Interior */}
          <div className="col-span-2 row-span-1 overflow-hidden rounded-xl aspect-[16/9] group relative">
            <img
              src="/gallery/restaurant-interior.jpg"
              alt="Restoran Ses Sistemi Kurulumu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-stone-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] font-label text-white uppercase tracking-widest">Restoran — Ses Sistemi</span>
            </div>
          </div>

          {/* Vinyl Wall */}
          <div className="overflow-hidden rounded-xl aspect-[3/4] group relative row-span-2">
            <img
              src="/gallery/vinyl-wall.jpg"
              alt="Vinil Koleksiyon Duvarı ve Hoparlör Sistemi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-stone-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] font-label text-white uppercase tracking-widest">Vinil Duvar Sistemi</span>
            </div>
          </div>

          {/* VOID Speaker */}
          <div className="overflow-hidden rounded-xl aspect-square group relative">
            <img
              src="/gallery/void-speaker.jpg"
              alt="VOID Hoparlör Tavan Kurulumu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-stone-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] font-label text-white uppercase tracking-widest">VOID — Tavan Kurulum</span>
            </div>
          </div>

          {/* Cafe Sonos */}
          <div className="overflow-hidden rounded-xl aspect-square group relative">
            <img
              src="/gallery/cafe-speaker.jpg"
              alt="Kafe Ses Sistemi Kurulumu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-stone-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] font-label text-white uppercase tracking-widest">Kafe — Ses Tasarımı</span>
            </div>
          </div>

          {/* Pioneer Speaker */}
          <div className="overflow-hidden rounded-xl aspect-square group relative">
            <img
              src="/gallery/pioneer-wall.jpg"
              alt="Pioneer Hoparlör Duvar Montajı"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-stone-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] font-label text-white uppercase tracking-widest">Pioneer — Duvar Montajı</span>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
