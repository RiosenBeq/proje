import { motion } from 'motion/react';

const kvkkBlocks = [
  {
    title: 'Veri Sorumlusu',
    body: 'On Music, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi mevzuata uygun şekilde işler.',
  },
  {
    title: 'İşlenen Veri Kategorileri',
    body: 'Kimlik, iletişim, işlem güvenliği, müşteri işlem bilgileri, talep/şikayet kayıtları ve hizmet kullanımı sırasında oluşan teknik veriler.',
  },
  {
    title: 'Hukuki Sebepler',
    body: 'Açık rızanızın bulunması, sözleşmenin kurulması/ifası, hukuki yükümlülüklerin yerine getirilmesi, bir hakkın tesisi/kullanılması/korunması ve meşru menfaatler.',
  },
  {
    title: 'Aktarım İlkeleri',
    body: 'Kişisel verileriniz; yasal zorunluluklar, hizmet sürekliliği ve operasyonel ihtiyaçlar doğrultusunda, Kanun’un 8. ve 9. maddelerine uygun şekilde aktarılabilir.',
  },
];

export default function Kvkk() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-28 pb-28 px-6 md:px-12 lg:pr-32 max-w-screen-2xl mx-auto flex-1 w-full overflow-x-hidden"
    >
      <header className="mb-14">
        <span className="font-label text-primary text-xs tracking-[0.35em] uppercase">Kişisel Veri Bilgilendirmesi</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface leading-none uppercase">
          KVKK <br />
          <span className="text-primary-container">Aydınlatma Metni</span>
        </h1>
        <p className="mt-6 max-w-3xl text-on-surface-variant font-body text-base md:text-lg leading-relaxed">
          İşbu metin, On Music tarafından sağlanan ürün ve hizmetlerden faydalanan gerçek kişilere yönelik olarak kişisel
          verilerin işlenmesine ilişkin temel ilkeleri açıklamak amacıyla hazırlanmıştır.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {kvkkBlocks.map((item) => (
          <article key={item.title} className="bg-surface-container-low p-7 rounded-xl border border-stone-200 shadow-sm">
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3 uppercase tracking-tight">{item.title}</h2>
            <p className="text-sm md:text-base text-on-surface-variant font-body leading-relaxed">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="bg-background border border-stone-200 rounded-xl p-7 md:p-9 space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface mb-2 uppercase tracking-tight">İlgili Kişi Hakları</h3>
          <p className="text-on-surface-variant font-body leading-relaxed">
            KVKK’nın 11. maddesi kapsamında; kişisel verinizin işlenip işlenmediğini öğrenme, işleme amacını ve amaca uygun
            kullanılıp kullanılmadığını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış
            işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini talep etme ve otomatik sistemlerle analiz sonucu aleyhinize
            çıkan sonuca itiraz etme hakkına sahipsiniz.
          </p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface mb-2 uppercase tracking-tight">Başvuru Usulü</h3>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Haklarınıza ilişkin başvurularınızı, kimliğinizi doğrulayacak bilgilerle birlikte iletişim sayfamızdaki kanallardan
            bize iletebilirsiniz. Talepleriniz niteliğine göre en kısa sürede ve en geç yasal süre içinde sonuçlandırılır.
          </p>
        </div>
      </section>
    </motion.main>
  );
}
