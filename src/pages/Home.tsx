import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative pt-16 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[620px] md:min-h-[780px] flex items-center px-6 lg:px-24 overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img alt="Modern mixing studio with warm ambient lights" className="w-full h-full object-cover opacity-75 contrast-110 scale-105" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=2200&q=80"/>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/45 to-stone-900/15"></div>
          <div className="absolute inset-0 noise-texture pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-primary-container"></span>
            <span className="font-label text-primary-container text-xs tracking-[0.3em] uppercase">Akustik Otorite</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
            MÜKEMMEL <span className="text-primary-container">SESİN</span><br/>MÜHENDİSLİĞİ
          </h1>
          <p className="font-body text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light mb-10">
            96kHz Native çözünürlükle, profesyonel akustik tasarım ve ses sistemleri çözümlerinde Türkiye'nin teknik otoritesi.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/iletisim" className="bg-primary-container text-on-primary-container px-8 py-3.5 font-label text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              Projeyi Başlat
            </Link>
            <button className="border border-white/30 text-white px-8 py-3.5 font-label text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm">
              Teknik Katalog
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 lg:px-24 py-24 bg-surface-container-lowest relative">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4 tracking-tight uppercase">Hizmet Alanları</h2>
            <p className="text-outline max-w-md">Uzay akustiğinden dijital sinyal işleme sistemlerine kadar uçtan uca teknik mimari.</p>
          </div>
          <div className="font-label text-[10px] text-primary-container tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span> System Active: Core 01
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {/* Service 1 */}
          <div className="group relative bg-surface-container overflow-hidden p-10 transition-all duration-500 hover:bg-surface-container-high border-r border-stone-200">
            <span className="material-symbols-outlined text-4xl text-primary mb-8 block">architecture</span>
            <h3 className="font-headline text-xl text-on-surface mb-4 uppercase">Akustik Tasarım</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light mb-8">Stüdyo, konferans salonu ve oditoryumlar için bilimsel modelleme tabanlı akustik çözümler.</p>
            <ul className="space-y-3 text-[11px] font-label text-outline uppercase tracking-wider">
              <li>• RT60 Analizi</li>
              <li>• Modale Yanıt Optimizasyonu</li>
              <li>• Diffüzör Entegrasyonu</li>
            </ul>
          </div>
          {/* Service 2 */}
          <div className="group relative bg-surface-container-low overflow-hidden p-10 transition-all duration-500 hover:bg-surface-container-high border-r border-stone-200">
            <span className="material-symbols-outlined text-4xl text-primary mb-8 block">speaker_group</span>
            <h3 className="font-headline text-xl text-on-surface mb-4 uppercase">Ses Sistemleri</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light mb-8">En üst düzey analog ve dijital sinyal zincirleri. 96kHz Native sistem mimarileri.</p>
            <ul className="space-y-3 text-[11px] font-label text-outline uppercase tracking-wider">
              <li>• Line Array Tasarımı</li>
              <li>• Dante Network Yapılandırma</li>
              <li>• DSP Ayarlama</li>
            </ul>
          </div>
          {/* Service 3 */}
          <div className="group relative bg-surface-container overflow-hidden p-10 transition-all duration-500 hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-4xl text-primary mb-8 block">security</span>
            <h3 className="font-headline text-xl text-on-surface mb-4 uppercase">Güvenlik Entegrasyonu</h3>
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
      <section className="px-6 lg:px-24 py-24 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 order-2 lg:order-1 relative">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary-container/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative overflow-hidden rounded-xl aspect-square">
            <img alt="Acoustic Panels Detail" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_4t-takg_rtGqpXiDQy1MAnamH4tBn03G9boPMhO8snAbXL-GWCVb3utMmoFuV7fM9k6bzFMS2lJBE4PQ2aZP6v2sU7kdlJ9MOqGveYaqGDarAk14r61yF5TIE051vgPKP4tL0QQ0Qb6_rzIF1xnUaY4EaqsehjwrU0MGuaBhtAw8LKnaqs2AMmTzMPgX9C6ZCqoF_BOpH1IhEuLDscQBi6tVIjE_Qoli0cUYgjLOwnlNC7YB9oDio420twDu3gpgahoV9AAsZUKV"/>
            <div className="absolute bottom-6 left-6 bg-[#f7f4f0]/90 backdrop-blur-md p-6 border border-stone-200 rounded-lg shadow-lg">
              <div className="text-3xl font-headline font-bold text-primary-container mb-1 tracking-tighter">50+</div>
              <div className="text-[10px] font-label text-stone-500 tracking-widest uppercase">Akustik Panel Varyasyonu</div>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <span className="font-label text-primary text-xs tracking-widest uppercase mb-4 block">Teknik Hassasiyet</span>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface mb-10 tracking-tight leading-tight uppercase">Mühendislik Standartlarını Yeniden Tanımlıyoruz.</h2>
          <div className="space-y-10">
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 flex-shrink-0 bg-surface-container-high rounded flex items-center justify-center">
                <span className="text-primary font-headline font-bold text-sm">01</span>
              </div>
              <div>
                <h4 className="text-on-surface font-headline text-base mb-2 uppercase">20+ Yıllık Deneyim</h4>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">İki on yılı aşkın süredir Türkiye'nin en prestijli stüdyo ve konser alanlarını inşa ediyoruz.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 flex-shrink-0 bg-surface-container-high rounded flex items-center justify-center">
                <span className="text-primary font-headline font-bold text-sm">02</span>
              </div>
              <div>
                <h4 className="text-on-surface font-headline text-base mb-2 uppercase">24 Saatte Hızlı Kurulum</h4>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">Optimize edilmiş lojistik ve saha ekiplerimizle projelerinizi takvimine sadık kalarak hayata geçiriyoruz.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 flex-shrink-0 bg-surface-container-high rounded flex items-center justify-center">
                <span className="text-primary font-headline font-bold text-sm">03</span>
              </div>
              <div>
                <h4 className="text-on-surface font-headline text-base mb-2 uppercase">Ömür Boyu Destek</h4>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">Sistem devreye alındıktan sonra periyodik akustik kalibrasyon ve yazılım güncellemeleri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Technical Vision Banner */}
      <section className="px-6 lg:px-24 py-20">
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 p-10 lg:p-20 relative overflow-hidden rounded-2xl group">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity select-none flex items-center justify-end pr-8">
            <span className="font-headline text-[12rem] font-bold text-white leading-none tracking-tighter">2026</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="bg-primary-container text-on-primary-container text-[10px] font-bold font-label px-3 py-1 mb-6 inline-block uppercase tracking-widest rounded">Gelecek Vizyonu</span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">2026 Teknik Vizyonu: İmmerisif Sesin Geleceği</h2>
            <p className="text-white/60 font-light text-base md:text-lg mb-8 leading-relaxed">Dolby Atmos sertifikalı tasarımlarımız ve yapay zeka destekli akustik analiz araçlarımızla, 2026'da ses teknolojilerini bir adım öteye taşıyoruz.</p>
            <Link to="/portfolyo" className="text-primary-container font-label text-sm uppercase tracking-widest flex items-center gap-3 group/link w-fit">
              Vizyon Belgesini İncele
              <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
