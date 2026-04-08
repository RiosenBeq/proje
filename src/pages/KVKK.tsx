import { motion } from 'motion/react';

export default function KvkkPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-32 pb-24 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1 w-full"
    >
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white leading-none">
          KVKK <span className="text-primary-container">AYDINLATMA METNİ</span>
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-3xl">
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, veri sorumlusu sıfatıyla On Müzik Proje
          tarafından kişisel verileriniz aşağıdaki çerçevede işlenmektedir.
        </p>
      </header>

      <section className="space-y-8 text-sm leading-relaxed text-on-surface-variant">
        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">1. Veri Sorumlusu</h2>
          <p>On Müzik Proje, iletişim ve proje süreçlerinde işlenen kişisel veriler için veri sorumlusudur.</p>
        </article>

        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">2. İşlenen Veri Kategorileri</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Kimlik bilgileri (ad, soyad),</li>
            <li>İletişim bilgileri (telefon, e-posta),</li>
            <li>Firma ve proje bilgileri,</li>
            <li>Talep/şikayet yönetimi bilgileri.</li>
          </ul>
        </article>

        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">3. İşleme Amaçları ve Hukuki Sebep</h2>
          <p>
            Veriler; sözleşme süreçlerinin yürütülmesi, tekliflendirme, teknik servis, müşteri iletişimi ve
            mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.
          </p>
        </article>

        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">4. KVKK Kapsamındaki Haklarınız</h2>
          <p>
            KVKK'nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya
            silinmesini talep etme, işleme faaliyetlerine itiraz etme haklarına sahipsiniz.
          </p>
        </article>
      </section>
    </motion.main>
  );
}
