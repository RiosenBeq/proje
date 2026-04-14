import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center px-8 lg:px-24 overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img alt="Professional Studio Console" className="w-full h-full object-cover opacity-40 grayscale contrast-125 scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Isf7r8KlNMiLJeaGlwNe6w6nKaFXvUM3BGdkp5gR1SU_Nlfks76_14kB2U3xijSTwRrXFHou2a84mVf5068BZQr1kywJbUEoLH0ql2NMRcpcSXpIgEjglD_fd6oAU7OhcXxYy8klEYWJDRtUh5kZwGqa43EOq-wgmfH7-KUKTMbE5slClRksAQo-42z9adAIT0docfiJBoKIhNQGYM3Kexv7BnG0zavqim16F3KBVsAygW9vbFbYasrZWKSJG-XHSmWX4ZiaWOiI"/>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 noise-texture"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-primary-container"></span>
            <span className="font-label text-primary-container text-xs tracking-[0.3em] uppercase">Akustik Otorite</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter leading-none mb-8">
            MÜKEMMEL <span className="text-primary-container">SESİN</span><br/>MÜHENDİSLİĞİ
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light mb-12">
            96kHz Native çözünürlükle, profesyonel akustik tasarım ve ses sistemleri çözümlerinde Türkiye'nin teknik otoritesi.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/iletisim" className="bg-primary-container text-on-primary-container px-10 py-4 font-label text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              Projeyi Başlat
            </Link>
            <button className="border border-outline-variant text-slate-900 px-10 py-4 font-label text-sm font-bold uppercase tracking-widest hover:bg-slate-100 transition-all backdrop-blur-sm">
              Teknik Katalog
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 lg:px-24 py-32 bg-surface-container-lowest relative">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-headline text-4xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Hizmet Alanları</h2>
            <p className="text-outline max-w-md">Uzay akustiğinden dijital sinyal işleme sistemlerine kadar uçtan uca teknik mimari.</p>
          </div>
          <div className="font-label text-[10px] text-primary-container tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span> System Active: Core 01
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Service 1 */}
          <div className="group relative bg-surface-container overflow-hidden p-12 transition-all duration-500 hover:bg-surface-container-high border-r border-slate-200">
            <span className="material-symbols-outlined text-4xl text-primary mb-8">architecture</span>
            <h3 className="font-headline text-2xl text-slate-900 mb-4 uppercase">Akustik Tasarım</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light mb-8">Stüdyo, konferans salonu ve oditoryumlar için bilimsel modelleme tabanlı akustik çözümler.</p>
            <ul className="space-y-3 text-[11px] font-label text-outline uppercase tracking-wider">
              <li>• RT60 Analizi</li>
              <li>• Modale Yanıt Optimizasyonu</li>
              <li>• Diffüzör Entegrasyonu</li>
            </ul>
          </div>
          {/* Service 2 */}
          <div className="group relative bg-surface-container-low overflow-hidden p-12 transition-all duration-500 hover:bg-surface-container-high border-r border-slate-200">
            <span className="material-symbols-outlined text-4xl text-primary mb-8">speaker_group</span>
            <h3 className="font-headline text-2xl text-slate-900 mb-4 uppercase">Ses Sistemleri</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light mb-8">En üst düzey analog ve dijital sinyal zincirleri. 96kHz Native sistem mimarileri.</p>
            <ul className="space-y-3 text-[11px] font-label text-outline uppercase tracking-wider">
              <li>• Line Array Tasarımı</li>
              <li>• Dante Network Yapılandırma</li>
              <li>• DSP Ayarlama</li>
            </ul>
          </div>
          {/* Service 3 */}
          <div className="group relative bg-surface-container overflow-hidden p-12 transition-all duration-500 hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-4xl text-primary mb-8">security</span>
            <h3 className="font-headline text-2xl text-slate-900 mb-4 uppercase">Güvenlik Entegrasyonu</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light mb-8">Kritik tesisler için yüksek hassasiyetli sesli tahliye ve güvenlik otomasyonları.</p>
            <ul className="space-y-3 text-[11px] font-label text-outline uppercase tracking-wider">
              <li>• EN54 Standartları</li>
              <li>• Merkezi Anons Kontrolü</li>
              <li>• Akıllı Bina Entegrasyonu</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Precision Section */}
      <section className="px-8 lg:px-24 py-40 flex flex-col lg:flex-row gap-24 items-center overflow-hidden">
        <div className="flex-1 order-2 lg:order-1 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px]"></div>
          <img alt="Acoustic Panels Detail" className="w-full aspect-square object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_4t-takg_rtGqpXiDQy1MAnamH4tBn03G9boPMhO8snAbXL-GWCVb3utMmoFuV7fM9k6bzFMS2lJBE4PQ2aZP6v2sU7kdlJ9MOqGveYaqGDarAk14r61yF5TIE051vgPKP4tL0QQ0Qb6_rzIF1xnUaY4EaqsehjwrU0MGuaBhtAw8LKnaqs2AMmTzMPgX9C6ZCqoF_BOpH1IhEuLDscQBi6tVIjE_Qoli0cUYgjLOwnlNC7YB9oDio420twDu3gpgahoV9AAsZUKV"/>
          <div className="absolute bottom-12 left-12 glass-panel p-8 border border-slate-200">
            <div className="text-4xl font-headline font-bold text-primary-container mb-2 tracking-tighter">50+</div>
            <div className="text-[10px] font-label text-slate-600 tracking-widest uppercase">Akustik Panel Varyasyonu</div>
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <span className="font-label text-primary text-xs tracking-widest uppercase mb-4 block">Teknik Hassasiyet</span>
          <h2 className="font-headline text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-tight uppercase">Mühendislik Standartlarını Yeniden Tanımlıyoruz.</h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high flex items-center justify-center">
                <span className="text-primary font-headline font-bold">01</span>
              </div>
              <div>
                <h4 className="text-slate-900 font-headline text-lg mb-2 uppercase">20+ Yıllık Deneyim</h4>
                <p className="text-on-surface-variant font-light text-sm">İki on yılı aşkın süredir Türkiye'nin en prestijli stüdyo ve konser alanlarını inşa ediyoruz.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high flex items-center justify-center">
                <span className="text-primary font-headline font-bold">02</span>
              </div>
              <div>
                <h4 className="text-slate-900 font-headline text-lg mb-2 uppercase">24 Saatte Hızlı Kurulum</h4>
                <p className="text-on-surface-variant font-light text-sm">Optimize edilmiş lojistik ve saha ekiplerimizle projelerinizi takvimine sadık kalarak hayata geçiriyoruz.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high flex items-center justify-center">
                <span className="text-primary font-headline font-bold">03</span>
              </div>
              <div>
                <h4 className="text-slate-900 font-headline text-lg mb-2 uppercase">Ömür Boyu Destek</h4>
                <p className="text-on-surface-variant font-light text-sm">Sistem devreye alındıktan sonra periyodik akustik kalibrasyon ve yazılım güncellemeleri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Technical Vision Banner */}
      <section className="px-8 lg:px-24 py-32">
        <div className="bg-gradient-to-r from-surface-container-high to-surface-container-lowest p-12 lg:p-24 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <span className="font-headline text-[15rem] font-bold text-primary leading-none select-none tracking-tighter">2026</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="bg-primary-container text-on-primary-container text-[10px] font-bold font-label px-3 py-1 mb-6 inline-block uppercase tracking-widest">Gelecek Vizyonu</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight uppercase leading-none">2026 Teknik Vizyonu: İmmerisif Sesin Geleceği</h2>
            <p className="text-on-surface-variant font-light text-lg mb-10">Dolby Atmos sertifikalı tasarımlarımız ve yapay zeka destekli akustik analiz araçlarımızla, 2026'da ses teknolojilerini bir adım öteye taşıyoruz.</p>
            <Link to="/portfolyo" className="text-primary-container font-label text-sm uppercase tracking-widest flex items-center gap-3 group">
              Vizyon Belgesini İncele 
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="px-8 lg:px-24 pb-32">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label text-primary-container text-xs tracking-[0.28em] uppercase">Instagram</span>
            <h2 className="font-headline text-4xl font-bold text-slate-900 mt-3 uppercase tracking-tight">BSK Proje Görselleri</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl">
              En güncel proje paylaşımlarımızı Instagram hesabımızdan takip edebilirsiniz.
            </p>
          </div>
          <a
            href="https://www.instagram.com/bskproje?igsh=Zm02cjZjanA1YmYx"
            target="_blank"
            rel="noreferrer"
            className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label text-xs font-bold uppercase tracking-widest w-fit"
          >
            @bskproje Profiline Git
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://www.instagram.com/bskproje?igsh=Zm02cjZjanA1YmYx" target="_blank" rel="noreferrer" className="group">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Isf7r8KlNMiLJeaGlwNe6w6nKaFXvUM3BGdkp5gR1SU_Nlfks76_14kB2U3xijSTwRrXFHou2a84mVf5068BZQr1kywJbUEoLH0ql2NMRcpcSXpIgEjglD_fd6oAU7OhcXxYy8klEYWJDRtUh5kZwGqa43EOq-wgmfH7-KUKTMbE5slClRksAQo-42z9adAIT0docfiJBoKIhNQGYM3Kexv7BnG0zavqim16F3KBVsAygW9vbFbYasrZWKSJG-XHSmWX4ZiaWOiI" alt="BSK Proje Instagram görseli 1" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </a>
          <a href="https://www.instagram.com/bskproje?igsh=Zm02cjZjanA1YmYx" target="_blank" rel="noreferrer" className="group">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_E3QLgcssJqOzesp8_LEjKSfDovAYp--I6N9zCM0wtnZNNWr-CG8X8hWsDiZIfnGQz9rT4_DXMxrCO2tnm_947PsXThz0YqjoZY1krdU5IANKf9J-jCscdywlTJ9v4INlv2-cF1YrYXoVdzc_V2BkEjwYHipm71s7hovnwM-QrTy_UVHkroAv2IqItGGsZCa-ru4nJgYs8axdVo40Ss8__gpFLRrzcDQtlMDUM3m1YQJjvSsCVZ-ttBm7UTmw4YiyrpKUXFwgFqX" alt="BSK Proje Instagram görseli 2" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </a>
          <a href="https://www.instagram.com/bskproje?igsh=Zm02cjZjanA1YmYx" target="_blank" rel="noreferrer" className="group">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxv5GwPul1r7NA1-7MCden8O_oOI3wyztszjpk49y-psbB63Ia7rAf7Thq_kuDYFqpDYlSLJMs1kwKUu37mX710WE1hLM-D55OLfS54vCL_NOE7xe23IOCOyce9q71B9sUhS4SBJKcJ-AVbaKVV3H9_HmNBaJj7xCZVsff4QuPfKotrnoUspOUkCCUTUfX0ku968glthhFOtvYkMQkrduujuu894zWzCL3gsKpZ07IED8-cm7PPU0AYXXapCtt9gsr94oMAD0UA6r" alt="BSK Proje Instagram görseli 3" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </a>
        </div>
      </section>
    </motion.main>
  );
}
