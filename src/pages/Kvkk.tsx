import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';

const KVKK = [
  { title: 'Veri Sorumlusu', body: 'On Muzik Proje, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi mevzuata uygun şekilde işler.' },
  { title: 'İşlenen Veri Kategorileri', body: 'Kimlik, iletişim, işlem güvenliği, müşteri işlem bilgileri, talep/şikayet kayıtları ve hizmet kullanımı sırasında oluşan teknik veriler.' },
  { title: 'Hukuki Sebepler', body: 'Açık rızanızın bulunması, sözleşmenin kurulması/ifası, hukuki yükümlülüklerin yerine getirilmesi, bir hakkın tesisi/kullanılması/korunması ve meşru menfaatler.' },
  { title: 'Aktarım İlkeleri', body: 'Kişisel verileriniz; yasal zorunluluklar, hizmet sürekliliği ve operasyonel ihtiyaçlar doğrultusunda, Kanun\'un 8. ve 9. maddelerine uygun şekilde aktarılabilir.' },
];

export default function Kvkk() {
  useSeo({
    title: 'KVKK Aydınlatma Metni | On Muzik Proje',
    description: 'KVKK kapsamında On Muzik Proje aydınlatma metni - veri sorumlusu, işlenen veri kategorileri, hukuki sebepler, aktarım ilkeleri ve ilgili kişi hakları.',
    path: '/kvkk',
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />YASAL · 05</span>
          <h1 className="subhero-title">KVKK<br /><em>aydınlatma</em> metni.</h1>
          <p className="subhero-lead">
            Bu metin, On Muzik Proje tarafından sağlanan ürün ve hizmetlerden faydalanan gerçek kişilere yönelik olarak kişisel verilerin işlenmesine ilişkin temel ilkeleri açıklar.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-grid">
            {KVKK.map((p, i) => (
              <article key={p.title} className="legal-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </article>
            ))}
          </div>

          <article className="legal-card reveal" style={{ marginTop: 18, gridColumn: '1 / -1' }}>
            <h2>İlgili Kişi Hakları</h2>
            <p>
              KVKK'nın 11. maddesi kapsamında; kişisel verinizin işlenip işlenmediğini öğrenme,
              işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, yurt
              içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse
              düzeltilmesini isteme, silinmesini/yok edilmesini talep etme ve otomatik
              sistemlerle analiz sonucu aleyhinize çıkan sonuca itiraz etme hakkına sahipsiniz.
            </p>
          </article>

          <article className="legal-card reveal" style={{ marginTop: 18, gridColumn: '1 / -1' }}>
            <h2>Başvuru Usulü</h2>
            <p style={{ marginBottom: 14 }}>
              Haklarınıza ilişkin başvurularınızı, kimliğinizi doğrulayacak bilgilerle birlikte iletişim sayfamızdaki kanallardan
              bize iletebilirsiniz. Talepleriniz niteliğine göre en kısa sürede ve en geç yasal süre içinde sonuçlandırılır.
            </p>
            <Link to="/iletisim" className="btn btn-red">Başvuruyu İlet <span className="arrow" /></Link>
          </article>
        </div>
      </section>
    </>
  );
}
