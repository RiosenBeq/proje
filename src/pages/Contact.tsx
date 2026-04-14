import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-32 pb-24 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1 w-full"
    >
      <header className="mb-24 relative">
        <div className="absolute -top-12 -left-4 text-[120px] font-headline font-bold text-slate-200 select-none pointer-events-none uppercase">Connect</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter text-slate-900 leading-none">
          TEKNİK <br/>
          <span className="text-primary-container">İLETİŞİM</span>
        </h1>
        <p className="mt-8 max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed">
          Projenizin akustik ve ses sistemi ihtiyaçları için mühendislik ekibimizle iletişime geçin. Size özel teknik çözümler üretmek için buradayız.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-headline font-bold text-slate-900 mb-8 uppercase tracking-tight">Proje Detayları</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-label text-slate-600 uppercase tracking-widest">Ad Soyad</label>
                <input type="text" id="name" className="w-full bg-surface-container border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-body text-sm focus:outline-none focus:border-primary-container transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-[10px] font-label text-slate-600 uppercase tracking-widest">Firma / Kurum</label>
                <input type="text" id="company" className="w-full bg-surface-container border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-body text-sm focus:outline-none focus:border-primary-container transition-colors" placeholder="Şirket A.Ş." />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-label text-slate-600 uppercase tracking-widest">E-posta</label>
              <input type="email" id="email" className="w-full bg-surface-container border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-body text-sm focus:outline-none focus:border-primary-container transition-colors" placeholder="ornek@firma.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-[10px] font-label text-slate-600 uppercase tracking-widest">Proje Tipi</label>
              <select id="projectType" className="w-full bg-surface-container border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-body text-sm focus:outline-none focus:border-primary-container transition-colors appearance-none">
                <option value="">Seçiniz</option>
                <option value="studio">Stüdyo Akustiği</option>
                <option value="pa">PA Ses Sistemi</option>
                <option value="conference">Konferans Salonu</option>
                <option value="other">Diğer</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-label text-slate-600 uppercase tracking-widest">Teknik Gereksinimler</label>
              <textarea id="message" rows={5} className="w-full bg-surface-container border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-body text-sm focus:outline-none focus:border-primary-container transition-colors resize-none" placeholder="Projenizin detaylarını ve teknik beklentilerinizi kısaca açıklayın..."></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:brightness-110 transition-all active:scale-[0.98]">
              Talebi İlet
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-12">
          <div className="glass-card p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-headline font-bold text-slate-900 mb-6 uppercase tracking-tight">Merkez Ofis</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-1">location_on</span>
                <div>
                  <div className="text-[10px] font-label text-slate-500 uppercase tracking-widest mb-1">Adres</div>
                  <p className="text-slate-900 font-body text-sm leading-relaxed">Atatürk Mahallesi Ataşehir Bulvarı,<br/>Ertuğrul, Gazi Sokak, 34758<br/>Ataşehir/İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-1">call</span>
                <div>
                  <div className="text-[10px] font-label text-slate-500 uppercase tracking-widest mb-1">Telefon</div>
                  <p className="text-slate-900 font-body text-sm leading-relaxed">0850 241 9515</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-1">mail</span>
                <div>
                  <div className="text-[10px] font-label text-slate-500 uppercase tracking-widest mb-1">E-posta</div>
                  <p className="text-slate-900 font-body text-sm leading-relaxed">info@onmuzik.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-slate-200 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl">support_agent</span>
              <h3 className="text-xl font-headline font-bold text-slate-900 mb-2 uppercase tracking-tight">7/24 Teknik Destek</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                Mevcut müşterilerimiz için kesintisiz teknik destek hattımız aktiftir. Acil durumlarda SLA sözleşmenizdeki numarayı kullanınız.
              </p>
              <div className="text-[10px] font-label text-primary-container uppercase tracking-widest">SLA Response Time: &lt; 2 Hours</div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
