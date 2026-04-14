import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-28 pb-28 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1 w-full overflow-x-hidden"
    >
      <header className="mb-20 relative overflow-hidden">
        <div className="absolute -top-8 -left-2 text-[100px] md:text-[120px] font-headline font-bold text-on-background/[0.03] select-none pointer-events-none uppercase leading-none">Connect</div>
        <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-none">
          TEKNİK <br/>
          <span className="text-primary-container">İLETİŞİM</span>
        </h1>
        <p className="mt-8 max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed">
          Projenizin akustik ve ses sistemi ihtiyaçları için mühendislik ekibimizle iletişime geçin. Size özel teknik çözümler üretmek için buradayız.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-8 uppercase tracking-tight">Proje Detayları</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Ad Soyad</label>
                <input type="text" id="name" className="w-full bg-background border border-stone-200 rounded-lg px-4 py-3 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/20 transition-colors placeholder:text-outline" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Firma / Kurum</label>
                <input type="text" id="company" className="w-full bg-background border border-stone-200 rounded-lg px-4 py-3 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/20 transition-colors placeholder:text-outline" placeholder="Şirket A.Ş." />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">E-posta</label>
              <input type="email" id="email" className="w-full bg-background border border-stone-200 rounded-lg px-4 py-3 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/20 transition-colors placeholder:text-outline" placeholder="ornek@firma.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Proje Tipi</label>
              <select id="projectType" className="w-full bg-background border border-stone-200 rounded-lg px-4 py-3 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/20 transition-colors appearance-none cursor-pointer">
                <option value="">Seçiniz</option>
                <option value="studio">Stüdyo Akustiği</option>
                <option value="pa">PA Ses Sistemi</option>
                <option value="conference">Konferans Salonu</option>
                <option value="other">Diğer</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Teknik Gereksinimler</label>
              <textarea id="message" rows={5} className="w-full bg-background border border-stone-200 rounded-lg px-4 py-3 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/20 transition-colors resize-none placeholder:text-outline" placeholder="Projenizin detaylarını ve teknik beklentilerinizi kısaca açıklayın..."></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:brightness-110 transition-all active:scale-[0.98] shadow-sm">
              Talebi İlet
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-background p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-headline font-bold text-on-surface mb-6 uppercase tracking-tight">Merkez Ofis</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-0.5">location_on</span>
                <div>
                  <div className="text-[10px] font-label text-outline uppercase tracking-widest mb-1">Adres</div>
                  <p className="text-on-surface font-body text-sm leading-relaxed">Teknoloji Geliştirme Bölgesi<br/>Ar-Ge Binası No: 42<br/>34000 İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-0.5">call</span>
                <div>
                  <div className="text-[10px] font-label text-outline uppercase tracking-widest mb-1">Telefon</div>
                  <p className="text-on-surface font-body text-sm">+90 (212) 555 01 23</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-0.5">mail</span>
                <div>
                  <div className="text-[10px] font-label text-outline uppercase tracking-widest mb-1">E-posta</div>
                  <p className="text-on-surface font-body text-sm">info@onmuzik.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-stone-200 shadow-sm">
            <span className="material-symbols-outlined text-primary-container mb-4 text-3xl block">support_agent</span>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2 uppercase tracking-tight">7/24 Teknik Destek</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              Mevcut müşterilerimiz için kesintisiz teknik destek hattımız aktiftir. Acil durumlarda SLA sözleşmenizdeki numarayı kullanınız.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-container/10 border border-primary-container/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-[10px] font-label text-primary uppercase tracking-widest">SLA Response: &lt; 2 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
