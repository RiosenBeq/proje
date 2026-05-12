import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';

const POLICY = [
  { title: 'Toplanan Veriler', body: 'Web sitemizi ziyaret ettiğinizde; ad-soyad, e-posta, telefon, proje detayı ve teknik talep bilgileri gibi formlar üzerinden paylaştığınız veriler işlenebilir. Ayrıca cihaz, tarayıcı, IP ve ziyaret süresi gibi teknik log kayıtları güvenlik ve performans amacıyla tutulabilir.' },
  { title: 'Veri İşleme Amaçları', body: 'Kişisel verileriniz; teklif hazırlama, proje iletişimi, teknik destek süreçleri, müşteri memnuniyeti takibi, yasal yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin geliştirilmesi amaçlarıyla işlenir.' },
  { title: 'Veri Paylaşımı', body: 'Verileriniz, yalnızca mevzuatın izin verdiği çerçevede; iş ortakları, teknik servis sağlayıcıları, hukuk/mali danışmanlar ve resmi kurumlarla gerektiği ölçüde paylaşılabilir. Ticari amaçlı izinsiz üçüncü taraf paylaşımı yapılmaz.' },
  { title: 'Saklama Süresi', body: 'Kişisel veriler, ilgili yasal saklama süreleri boyunca veya işleme amacının gerektirdiği süre kadar saklanır. Süre sona erdiğinde veriler güvenli biçimde silinir, yok edilir veya anonim hale getirilir.' },
  { title: 'Haklarınız', body: '6698 sayılı Kanun kapsamında; verinize erişme, düzeltme isteme, silme/yok etme talep etme, işlemeye itiraz etme ve zarar halinde tazmin talebinde bulunma haklarına sahipsiniz. Taleplerinizi iletişim sayfamızdaki kanallar üzerinden bize iletebilirsiniz.' },
  { title: 'Güvenlik Önlemleri', body: 'Veri güvenliği için erişim kısıtlaması, kayıt takibi, güncel güvenlik yazılımları ve düzenli sistem kontrolleri uygulanır. Yetkisiz erişim, kayıp veya ifşa risklerine karşı teknik ve idari tedbirler alınır.' },
];

export default function PrivacyPolicy() {
  useSeo({
    title: 'Gizlilik Politikası | On Muzik Proje',
    description: 'On Muzik Proje gizlilik politikası - kişisel verilerin toplanması, işlenmesi, saklanması ve korunmasına ilişkin politika metni.',
    path: '/gizlilik-politikasi',
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />YASAL · 04</span>
          <h1 className="subhero-title">Gizlilik<br /><em>politikası</em>.</h1>
          <p className="subhero-lead">
            Bu metin, On Muzik Proje tarafından sunulan hizmetlerde kişisel verilerin nasıl toplandığını, işlendiğini, saklandığını ve korunduğunu açıklar.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-grid">
            {POLICY.map((p, i) => (
              <article key={p.title} className="legal-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </article>
            ))}
          </div>

          <div className="legal-card reveal" style={{ marginTop: 18, gridColumn: '1 / -1' }}>
            <h2>İletişim</h2>
            <p style={{ marginBottom: 14 }}>
              Gizlilik politikası ile ilgili tüm taleplerinizi iletişim kanallarımız üzerinden iletebilirsiniz.
              Başvurularınız mevzuatta öngörülen sürelerde değerlendirilir ve size geri dönüş sağlanır.
            </p>
            <Link to="/iletisim" className="btn btn-red">İletişime Geç <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
