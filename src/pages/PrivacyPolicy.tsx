import { motion } from 'motion/react';

const policySections = [
  {
    title: 'Toplanan Veriler',
    content:
      'Web sitemizi ziyaret ettiğinizde; ad-soyad, e-posta, telefon, proje detayı ve teknik talep bilgileri gibi formlar üzerinden paylaştığınız veriler işlenebilir. Ayrıca cihaz, tarayıcı, IP ve ziyaret süresi gibi teknik log kayıtları güvenlik ve performans amacıyla tutulabilir.',
  },
  {
    title: 'Veri İşleme Amaçları',
    content:
      'Kişisel verileriniz; teklif hazırlama, proje iletişimi, teknik destek süreçleri, müşteri memnuniyeti takibi, yasal yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin geliştirilmesi amaçlarıyla işlenir.',
  },
  {
    title: 'Veri Paylaşımı',
    content:
      'Verileriniz, yalnızca mevzuatın izin verdiği çerçevede; iş ortakları, teknik servis sağlayıcıları, hukuk/mali danışmanlar ve resmi kurumlarla gerektiği ölçüde paylaşılabilir. Ticari amaçlı izinsiz üçüncü taraf paylaşımı yapılmaz.',
  },
  {
    title: 'Saklama Süresi',
    content:
      'Kişisel veriler, ilgili yasal saklama süreleri boyunca veya işleme amacının gerektirdiği süre kadar saklanır. Süre sona erdiğinde veriler güvenli biçimde silinir, yok edilir veya anonim hale getirilir.',
  },
  {
    title: 'Haklarınız',
    content:
      '6698 sayılı Kanun kapsamında; verinize erişme, düzeltme isteme, silme/yok etme talep etme, işlemeye itiraz etme ve zarar halinde tazmin talebinde bulunma haklarına sahipsiniz. Taleplerinizi iletişim sayfamızdaki kanallar üzerinden bize iletebilirsiniz.',
  },
  {
    title: 'Güvenlik Önlemleri',
    content:
      'Veri güvenliği için erişim kısıtlaması, kayıt takibi, güncel güvenlik yazılımları ve düzenli sistem kontrolleri uygulanır. Yetkisiz erişim, kayıp veya ifşa risklerine karşı teknik ve idari tedbirler alınır.',
  },
];

export default function PrivacyPolicy() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-28 pb-28 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1 w-full overflow-x-hidden"
    >
      <header className="mb-16">
        <span className="font-label text-primary text-xs tracking-[0.35em] uppercase">Yasal Bilgilendirme</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface leading-none uppercase">
          Gizlilik <br />
          <span className="text-primary-container">Politikası</span>
        </h1>
        <p className="mt-6 max-w-3xl text-on-surface-variant font-body text-base md:text-lg leading-relaxed">
          Bu politika, On Music tarafından sunulan hizmetlerde kişisel verilerin nasıl toplandığını, işlendiğini,
          saklandığını ve korunduğunu açıklar. Siteyi kullanarak bu metindeki ilke ve süreçleri okuduğunuzu kabul etmiş
          sayılırsınız.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policySections.map((section) => (
          <article key={section.title} className="bg-surface-container-low p-7 rounded-xl border border-stone-200 shadow-sm">
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3 uppercase tracking-tight">{section.title}</h2>
            <p className="text-sm md:text-base text-on-surface-variant font-body leading-relaxed">{section.content}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 bg-background border border-stone-200 rounded-xl p-7 md:p-9">
        <h2 className="text-2xl font-headline font-bold text-on-surface mb-4 uppercase tracking-tight">İletişim</h2>
        <p className="text-on-surface-variant font-body leading-relaxed">
          Gizlilik politikası ile ilgili tüm taleplerinizi iletişim kanallarımız üzerinden iletebilirsiniz. Başvurularınız
          mevzuatta öngörülen sürelerde değerlendirilir ve size geri dönüş sağlanır.
        </p>
      </section>
    </motion.main>
  );
}
