import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Profesyonel Ses Sistemleri',
    description:
      'Mekanın akustik yapısına uygun olarak homojen, net ve güçlü bir ses deneyimi için projelendirilen ses sistemleri.',
    items: [
      'Restoran ve kafe seslendirme sistemleri',
      'Otel ve açık alan ses sistemleri',
      'Club ve DJ performans sistemleri',
      'Tavan hoparlörleri ve zonlama çözümleri',
    ],
    icon: 'speaker_group',
  },
  {
    title: 'Işık Sistemleri ve Atmosfer Tasarımı',
    description:
      'Mekanın karakterine uygun ambiyans ve sahne ışığı altyapılarıyla marka deneyimini görünür kılan ışık kurguları.',
    items: [
      'Mimari ve dekoratif aydınlatma',
      'Sahne ve performans ışıkları',
      'RGB ve dinamik ışık sistemleri',
      'Akıllı kontrol altyapıları',
    ],
    icon: 'lightbulb',
  },
  {
    title: 'Görüntü ve Video Sistemleri',
    description:
      'Görsel iletişimi güçlendiren modern görüntü teknolojileri ile etkili, ölçülebilir ve sürdürülebilir sunum altyapıları.',
    items: [
      'LED ekran ve video wall sistemleri',
      'Dijital menü ve signage çözümleri',
      'Projeksiyon sistemleri',
      'Kurumsal sunum altyapıları',
    ],
    icon: 'tv',
  },
  {
    title: 'Projelendirme ve Danışmanlık',
    description:
      'Mekanın fiziksel yapısı, kullanım amacı ve hedef kitlesine göre en doğru sistem mimarisini oluşturan teknik danışmanlık.',
    items: [
      'Keşif ve ihtiyaç analizi',
      'Teknik çizim ve sistem planlama',
      'Marka ve ürün seçimi',
      'Bütçe optimizasyonu',
    ],
    icon: 'rule',
  },
];

const processSteps = [
  'Keşif ve Analiz',
  'Projelendirme ve Tasarım',
  'Ürün Tedariği',
  'Kurulum ve Entegrasyon',
  'Test ve Devreye Alma',
  'Teknik Destek ve Servis',
];

const venueTypes = [
  'Restoran ve kafeler',
  'Oteller ve tatil köyleri',
  'Gece kulüpleri ve barlar',
  'Hastaneler',
  'AVM ve perakende mağazalar',
  'Konferans ve etkinlik salonları',
];

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative pt-16"
    >
      <section className="relative min-h-[720px] flex items-center px-8 lg:px-24 overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="On Müzik Proje profesyonel ses ışık görüntü sistemleri"
            className="w-full h-full object-cover opacity-35 grayscale contrast-125"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Isf7r8KlNMiLJeaGlwNe6w6nKaFXvUM3BGdkp5gR1SU_Nlfks76_14kB2U3xijSTwRrXFHou2a84mVf5068BZQr1kywJbUEoLH0ql2NMRcpcSXpIgEjglD_fd6oAU7OhcXxYy8klEYWJDRtUh5kZwGqa43EOq-wgmfH7-KUKTMbE5slClRksAQo-42z9adAIT0docfiJBoKIhNQGYM3Kexv7BnG0zavqim16F3KBVsAygW9vbFbYasrZWKSJG-XHSmWX4ZiaWOiI"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="font-label text-primary-container text-xs tracking-[0.3em] uppercase mb-6">On Müzik Proje</p>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
            Profesyonel Ses, Işık ve Görüntü Sistemleri ile
            <span className="text-primary-container"> Uçtan Uca Mekan Deneyimi</span>
          </h1>
          <p className="font-body text-lg md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed font-light mb-10">
            On Müzik Proje, mekanların teknik altyapısını yalnızca kuran değil; keşiften projelendirmeye,
            ürün tedariğinden kurulum ve devreye almaya kadar tüm süreci yöneten deneyim odaklı AV çözüm
            ortağıdır.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/iletisim"
              className="bg-primary-container text-on-primary-container px-8 py-4 font-label text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Teklif Al
            </Link>
            <Link
              to="/hizmetler"
              className="border border-outline-variant text-white px-8 py-4 font-label text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Hizmetleri İncele
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-24 py-24 bg-surface-container-lowest">
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="font-headline text-4xl font-bold text-white tracking-tight uppercase">Hizmetlerimiz</h2>
          <p className="text-on-surface-variant max-w-3xl">
            Profesyonel ses sistemleri, ışık sistemleri, görüntü çözümleri ve projelendirme danışmanlığında
            SEO ve GEO uyumlu içerik mimarisiyle, ihtiyaç duyulan teknik çözümleri anlaşılır ve ölçülebilir
            bir yapı ile sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="bg-surface-container border border-white/5 p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary-container text-3xl mb-4">{service.icon}</span>
              <h3 className="font-headline text-2xl text-white mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-outline">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-8 lg:px-24 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article className="bg-surface-container-low p-10 rounded-xl border border-white/5">
            <h2 className="font-headline text-3xl text-white mb-5 uppercase">Uçtan Uca Hizmet Süreci</h2>
            <p className="text-on-surface-variant mb-6">
              Tüm süreç tek merkezden yönetilir; böylece zaman ve maliyet açısından maksimum verim sağlanır.
            </p>
            <ol className="space-y-3 text-sm text-white/80">
              {processSteps.map((step, index) => (
                <li key={step}>
                  <span className="text-primary-container font-bold mr-2">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </article>

          <article className="bg-surface-container-low p-10 rounded-xl border border-white/5">
            <h2 className="font-headline text-3xl text-white mb-5 uppercase">Hangi Mekanlara Çözüm Sunuyoruz?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80 mb-8">
              {venueTypes.map((venue) => (
                <li key={venue} className="bg-surface-container px-4 py-3 rounded-md border border-white/5">
                  {venue}
                </li>
              ))}
            </ul>

            <h3 className="font-headline text-xl text-primary-container mb-3 uppercase">Neden On Müzik Proje?</h3>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>✔ Anahtar teslim çözüm</li>
              <li>✔ Güçlü marka iş birlikleri</li>
              <li>✔ Deneyimli ekip</li>
              <li>✔ Özelleştirilmiş çözümler</li>
              <li>✔ Satış sonrası destek</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-8 lg:px-24 pb-28">
        <div className="bg-gradient-to-r from-surface-container-high to-surface-container-lowest p-10 lg:p-16 rounded-2xl border border-white/5">
          <span className="font-label text-primary-container text-xs tracking-[0.25em] uppercase">Vizyon</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mt-4 mb-6 tracking-tight">
            Türkiye'de ve global pazarda deneyim, atmosfer ve marka değeri kazandıran lider AV çözüm markası
            olmak.
          </h2>
          <p className="text-on-surface-variant max-w-4xl">
            Gelişen teknoloji ve kullanıcı deneyimini merkezine alan yaklaşımımızla, her projede estetik,
            performans ve sürdürülebilirliği bir araya getiriyor; profesyonel ses, ışık ve görüntü sistemlerinde
            uzun vadeli değer üretiyoruz.
          </p>
        </div>
      </section>
    </motion.main>
  );
}
