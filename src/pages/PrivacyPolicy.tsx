import { motion } from 'motion/react';

export default function PrivacyPolicy() {
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
          GİZLİLİK <span className="text-primary-container">POLİTİKASI</span>
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-3xl">
          On Müzik Proje olarak kişisel verilerinizin güvenliğini önemsiyor, web sitemizi ziyaret ettiğinizde
          paylaştığınız bilgileri yalnızca hizmet süreçlerimizi yürütmek için işliyoruz.
        </p>
      </header>

      <section className="space-y-8 text-sm leading-relaxed text-on-surface-variant">
        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">1. Toplanan Bilgiler</h2>
          <p>
            İletişim formu üzerinden ad-soyad, e-posta, telefon, firma bilgisi ve proje detayları gibi veriler
            talep edilebilir. Site performansı için anonim çerez verileri de işlenebilir.
          </p>
        </article>

        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">2. Kullanım Amaçları</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Teklif, keşif ve proje süreçlerini yürütmek,</li>
            <li>Teknik destek ve satış sonrası hizmet sunmak,</li>
            <li>Yasal yükümlülükleri yerine getirmek.</li>
          </ul>
        </article>

        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">3. Saklama ve Güvenlik</h2>
          <p>
            Kişisel veriler yalnızca gerekli süre boyunca saklanır. Yetkisiz erişim, değişiklik veya ifşayı
            önlemek için uygun idari ve teknik tedbirler uygulanır.
          </p>
        </article>

        <article className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <h2 className="text-white font-headline text-2xl mb-3">4. İletişim</h2>
          <p>
            Gizlilik politikası ile ilgili sorularınız için <strong>info@onmuzik.com</strong> adresinden bizimle
            iletişime geçebilirsiniz.
          </p>
        </article>
      </section>
    </motion.main>
  );
}
