// Hizla Kirala canlı katalogundaki 20 ürünün tamamı.
// Görseller hizlakirala.com CDN'inden (api.hizlakirala.com) hot-link.
// Fiyatlar hizlakirala.com'un canlı keşfet sayfasından alındı.
// İsim + açıklama metinleri SEO açısından zenginleştirildi (uzun-kuyruk anahtar
// kelimeler, marka + ürün + özellik üçlüsü, niyet sinyali "kiralama" eklendi).

export type Glyph =
  | 'projector'
  | 'laptop'
  | 'console'
  | 'phone'
  | 'wand'
  | 'camera'
  | 'bottle'
  | 'vacuum'
  | 'switch'
  | 'vr'
  | 'scooter'
  | 'fan'
  | 'plant'
  | 'mask'
  | 'iron'
  | 'kettle';

export type ProductDetail = {
  slug: string;
  brand: string;
  /** h1 first line — örn. "Anker Nebula Apollo Projeksiyon" */
  name: string;
  /** h1 second line (kırmızı) — kısa SEO açıklaması */
  tagline: string;
  /** breadcrumb display */
  breadcrumbName: string;
  /** breadcrumb kategori adı */
  category: string;
  /** breadcrumb kategori linki (Hızla Kirala kategori sayfası) */
  categoryHref: string;
  /** subtitle "Marka · Marka serisi" satırının ikinci kısmı */
  series: string;
  /** description below h1 */
  short: string;
  /** spec chip'leri (~6) */
  chips: string[];
  /** Uzun dönem aylık fiyatlar — index 0..3 → 1/3/6/12 ay */
  monthly: [string, string, string, string];
  /** Kısa dönem günlük fiyatlar — index 0..3 → 3/7/14/30 gün */
  daily: [string, string, string, string];
  /** "Hemen kirala" tuşunun gittiği Hızla Kirala URL */
  rentalUrl: string;
  /** 4 sayısal vurgu */
  highlights: Array<{ t: string; d: string }>;
  /** Description sekmesi başlığı + paragraflar */
  description: {
    headline: string;
    paragraphs: string[];
    useCases: Array<[label: string, emoji: string]>;
  };
  /** "Bir bakışta" madde listesi (8 madde) */
  glance: string[];
  /** Teknik özellikler — 12 K-V (çift sayı, grid 2 sütun için) */
  specs: Array<[label: string, value: string]>;
  /** Kutu içeriği listesi */
  box: string[];
  /** Glyph fallback (görsel yüklenmezse) */
  glyph: Glyph;
  /** Public veya CDN image path(ler)i */
  images: string[];
  /** "YENİ" rozet etiketi */
  tag: string | null;
  /** "1.850" gibi başlangıç fiyatı (en uzun süredeki en düşük aylık) */
  priceFrom: string;
  /** hizlakirala.com anasayfasındaki "En Çok Kiralananlar" carousel'inde geçen ürünler */
  popular?: boolean;
};

const PARTNER_BASE = 'https://www.hizlakirala.com';
// Hizla Kirala CDN'inde her ürün görseli ULID isimle hostlanıyor.
const CDN = 'https://api.hizlakirala.com/storage/products/gallery';

const SHARED_BOX = [
  'on music kurulum kartı',
  'Hijyen sertifikası',
];

const CAT = {
  simart:    { name: 'Şımart Kendini',      href: `${PARTNER_BASE}/urunler/kategori/simart-kendini` },
  evAlet:    { name: 'Ev Aletleri',         href: `${PARTNER_BASE}/urunler/kategori/ev-aletleri-kiralama` },
  anne:      { name: 'Anne & Bebek',        href: `${PARTNER_BASE}/urunler/kategori/anne-bebek-urunleri-kiralama` },
  oyun:      { name: 'Oyun & Hobi',         href: `${PARTNER_BASE}/urunler/kategori/oyun-ve-hobi-kiralama` },
  kamera:    { name: 'Kamera & Aksesuar',   href: `${PARTNER_BASE}/urunler/kategori/kamera-ve-aksesuar-kiralama` },
  telefon:   { name: 'Telefon',             href: `${PARTNER_BASE}/urunler/kategori/telefon-kiralama` },
  bilgi:     { name: 'Bilgisayar & Tablet', href: `${PARTNER_BASE}/urunler/kategori/bilgisayar-tablet-kiralama` },
};

export const PRODUCTS: ProductDetail[] = [
  /* ─────────── Şımart Kendini ─────────── */

  // 1 — Dyson Airwrap ID Ceramic Pink (saç şekillendirici)
  {
    slug: 'dyson-airwrap',
    brand: 'Dyson',
    name: 'Dyson Airwrap i.d. Saç Şekillendirici',
    tagline: 'Ceramic Pink · Coanda hava akımı şekillendirme',
    breadcrumbName: 'Dyson Airwrap i.d. Ceramic Pink',
    category: CAT.simart.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/sac-sakal-bakim-urunleri-kiralama`,
    series: 'Saç şekillendirici · Dyson Airwrap serisi',
    short: 'Dyson Coanda hava akımı teknolojisiyle saçı aşırı ısıdan korur. Bukle, dalga, düzleştirme ve hacim — 6 aksesuar ile tek cihazda profesyonel kuaför sonucu. Düğün, davet ve özel etkinlik için aylık kiralama 1.450 TL\'den.',
    chips: ['Coanda hava akımı', '6 aksesuar', '4 ısı kademesi', 'Bluetooth', 'MyDyson app', 'Ceramic Pink'],
    monthly: ['1.950', '1.850', '1.600', '1.450'],
    daily:   ['1.550', '1.800', '1.800', '1.800'],
    rentalUrl: `${PARTNER_BASE}/urunler/dyson-airwrap-id-ceramic-pink-kiralama`,
    highlights: [
      { t: '6 aksesuar', d: 'tek cihazda 6 stil' },
      { t: 'Coanda',     d: 'aşırı ısı yok' },
      { t: '110.000 RPM',d: 'V9 dijital motor' },
      { t: '24 ay',      d: 'tam garanti' },
    ],
    description: {
      headline: 'Düğün, davet ve özel günler için profesyonel saç şekillendirici.',
      paragraphs: [
        'Dyson Airwrap ID, patentli Coanda hava akımı sayesinde saçı 150°C üstüne ısıtmadan şekillendirir. 6 aksesuar (uzun bukle silindiri, kısa bukle silindiri, sıcak hava brushu, yuvarlak fırça, ön kurutma fırçası, düzleştirici) tek cihazda profesyonel kuaför düzeyinde sonuç verir.',
        'MyDyson uygulaması ile saç tipine özel profil kaydedebilir, sık kullanılan aksesuarda ısı ve hız kombinasyonlarını otomatik geri çağırabilirsiniz. Düğün öncesi gelin hazırlığı, lansman gecesi ve fotoğraf çekimi için aylık kiralama uygun fiyatlı çözüm.',
      ],
      useCases: [
        ['Düğün & davet', '💍'],
        ['Lansman gecesi', '✨'],
        ['Fotoğraf çekimi', '📸'],
      ],
    },
    glance: [
      'Coanda hava akımı şekillendirme',
      'V9 dijital motor · 110.000 RPM',
      '4 ısı kademesi (cool–100°C)',
      '3 hız ayarı',
      '6 aksesuar kutu içinde',
      'Bluetooth + MyDyson app',
      'IQ profil ile saç tipi kayıt',
      'Çantada taşınabilir saklama kutusu',
    ],
    specs: [
      ['Marka', 'Dyson'],                    ['Model', 'Airwrap ID'],
      ['Renk', 'Ceramic Pink'],              ['Motor', 'V9 dijital · 110.000 RPM'],
      ['Isı ayarı', '4 kademe (cool–100°C)'], ['Hız', '3 kademe'],
      ['Bağlantı', 'Bluetooth + MyDyson'],   ['Voltaj', '230V · 50/60 Hz'],
      ['Kablo uzunluğu', '2.7 m'],           ['Aksesuar', '6 adet'],
      ['Ağırlık', '0.61 kg'],                ['Boyut', '278 × 41 × 41 mm'],
    ],
    box: [
      'Dyson Airwrap ID ana gövde',
      '40mm uzun bukle silindiri',
      '30mm kısa bukle silindiri',
      'Sıcak hava brushu',
      'Yumuşak fırça',
      'Ön kurutma fırçası',
      'Saklama / taşıma kutusu',
      ...SHARED_BOX,
    ],
    glyph: 'wand',
    images: [`${CDN}/01KKH3YA4THFSY8EG0RSV3CDWE.webp`],
    tag: 'YENİ',
    priceFrom: '1.450',
    popular: true,
  },

  // 2 — Dreame AirStyle Pro saç şekillendirici
  {
    slug: 'dreame-airstyle-pro',
    brand: 'Dreame',
    name: 'Dreame AirStyle Pro Saç Şekillendirici',
    tagline: '7\'si 1 arada saç kurutma ve şekillendirme seti',
    breadcrumbName: 'Dreame AirStyle Pro',
    category: CAT.simart.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/sac-sakal-bakim-urunleri-kiralama`,
    series: 'Saç şekillendirici · Dreame AirStyle serisi',
    short: 'Dreame AirStyle Pro, kurutma + bukle + dalga + hacim + düzleştirme tek cihazda. 7 farklı aksesuarla tüm saç tiplerine uygun şekillendirme; akıllı sıcaklık kontrolü ile saç sağlığını koruyan kiralık premium şekillendirici. Aylık 1.250 TL\'den.',
    chips: ['7 aksesuar', 'Akıllı ısı', 'Negatif iyon', '110.000 RPM', '3 hız', 'Dijital ekran'],
    monthly: ['1.600', '1.450', '1.350', '1.250'],
    daily:   ['1.300', '1.400', '1.400', '1.400'],
    rentalUrl: `${PARTNER_BASE}/urunler/dreame-airstyle-pro-sac-sekillendirici-kiralama`,
    highlights: [
      { t: '7 aksesuar', d: 'kapsamlı şekillendirme' },
      { t: '110.000 RPM', d: 'dijital motor' },
      { t: 'Negatif iyon', d: 'antistatik saç' },
      { t: '24 ay', d: 'tam garanti' },
    ],
    description: {
      headline: 'Tek cihazla salon kalitesinde saç şekillendirme.',
      paragraphs: [
        'Dreame AirStyle Pro\'nun 110.000 RPM dijital motoru, ısıyı 150°C ile sınırlayarak saç kütikülünü korur. Negatif iyon yayılımı statik elektriği önler, parlaklığı artırır. 7 aksesuar ile bukle (3 kademe), dalga, hacim, ön kurutma ve düzleştirme — her stil için ayrı bir cihaz almak yerine tek kiralama.',
        'Dijital ekrandan ısı ve hız ayarı, akıllı sıcaklık sensörü ile saçın aşırı ısınması engellenir. Davet, etkinlik, fotoğraf çekimi öncesi kuaförden çok daha uygun fiyatlı premium alternatif.',
      ],
      useCases: [
        ['Davet & parti', '🎉'],
        ['Günlük şekillendirme', '💁‍♀️'],
        ['Foto çekimi', '📸'],
      ],
    },
    glance: [
      '110.000 RPM dijital motor',
      '7 aksesuarlı tam set',
      'Negatif iyon teknolojisi',
      'Akıllı sıcaklık kontrolü (150°C max)',
      '3 hız + 4 ısı kademesi',
      'Dijital ekran + dokunmatik kontrol',
      'Saklama kutusu dahil',
      '2.5 m kablo',
    ],
    specs: [
      ['Marka', 'Dreame'],                  ['Model', 'AirStyle Pro'],
      ['Motor', '110.000 RPM dijital'],     ['Aksesuar', '7 parça'],
      ['Isı', '4 kademe · max 150°C'],     ['Hız', '3 kademe'],
      ['İyon', 'Negatif iyon (antistatik)'], ['Ekran', 'Dijital LED'],
      ['Voltaj', '220-240V'],                ['Güç', '1300W'],
      ['Kablo', '2.5 m'],                    ['Ağırlık', '0.66 kg'],
    ],
    box: [
      'Dreame AirStyle Pro gövde',
      '30mm + 40mm bukle silindiri',
      'Sıcak hava brushu',
      'Yumuşak düzleştirme fırçası',
      'Ön kurutma nozulu',
      'Saklama kutusu',
      ...SHARED_BOX,
    ],
    glyph: 'wand',
    images: [`${CDN}/01KKKJ7Q0QXJ43NMP690XXV2GS.jpg`],
    tag: 'YENİ',
    priceFrom: '1.250',
  },

  // 3 — Dyson Airstrait Prusya Mavisi (ıslak/kuru düzleştirici)
  {
    slug: 'dyson-airstrait',
    brand: 'Dyson',
    name: 'Dyson Airstrait Saç Düzleştirici',
    tagline: 'Prusya Mavisi · ıslak ve kuru saç düzleştirme',
    breadcrumbName: 'Dyson Airstrait Prusya Mavisi',
    category: CAT.simart.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/sac-sakal-bakim-urunleri-kiralama`,
    series: 'Saç düzleştirici · Dyson Airstrait serisi',
    short: 'Dyson Airstrait, ısıtmalı plaka yerine yüksek basınçlı hava akımıyla saçı düzleştirir — saç kütikülüne minimum hasar. Islak veya kuru saçta tek dokunuşta düzleştirme, aylık 1.400 TL\'den kiralık premium cihaz.',
    chips: ['Islak + kuru', 'Plakasız', 'Hava akımı', '140°C max', 'Prusya Mavisi', 'Cool shot'],
    monthly: ['2.450', '2.050', '1.700', '1.400'],
    daily:   ['1.600', '1.950', '1.950', '1.950'],
    rentalUrl: `${PARTNER_BASE}/urunler/dyson-airstrait-sac-duzlestirici-prusya-mavisi-kiralama`,
    highlights: [
      { t: 'Plakasız', d: 'hava akımı düzleştirme' },
      { t: '140°C',    d: 'düşük ısı zarar yok' },
      { t: 'Islak/kuru', d: '2-in-1 kullanım' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Saç kütikülünü yormadan düz, parlak saç.',
      paragraphs: [
        'Dyson Airstrait, geleneksel düzleştiricilerin aksine ısıtmalı plaka kullanmaz. Yüksek basınçlı hava akımıyla saç ipliklerini hizalar; 140°C\'lik düşük ısı sayesinde kütikül hasarı minimum. Saçı yıkadıktan sonra ıslakken veya kuruykennanan kullanabilirsiniz — kurutma + düzleştirme tek adımda.',
        'Cool shot soğutma fonksiyonu ile düzleştirme sonrası saçı sabitler. Akıllı ısı kontrolü, ısının saç boyunca eşit dağılmasını sağlar. Düğün, davet veya günlük şekillendirme için aylık kiralama 1.400 TL\'den.',
      ],
      useCases: [
        ['Günlük şekillendirme', '🌸'],
        ['Düğün öncesi', '👰'],
        ['Lansman gecesi', '✨'],
      ],
    },
    glance: [
      'Plakasız hava akımı düzleştirme',
      'Islak ve kuru saçta kullanım',
      '140°C max ısı (saç koruyucu)',
      'Cool shot soğutma fonksiyonu',
      'Akıllı sıcaklık sensörü',
      'Negatif iyon yayılımı',
      '3 ısı + 3 hava akımı ayarı',
      'Prusya Mavisi premium renk',
    ],
    specs: [
      ['Marka', 'Dyson'],            ['Model', 'Airstrait HT01'],
      ['Renk', 'Prusya Mavisi'],     ['Motor', 'V9 dijital'],
      ['Max ısı', '140°C'],          ['Ayar', '3 ısı · 3 akım'],
      ['Kullanım', 'Islak + kuru'],  ['Cool shot', 'Var'],
      ['Voltaj', '230V'],            ['Kablo', '2.7 m döner kablo'],
      ['Ağırlık', '0.72 kg'],        ['Boyut', '320 × 90 × 60 mm'],
    ],
    box: [
      'Dyson Airstrait ana gövde',
      'Filtre temizleme fırçası',
      'Saklama kılıfı',
      'Kullanım kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'wand',
    images: [`${CDN}/01KFJCTAAAWDJAZPBMK7ARP1ZH.webp`],
    tag: 'YENİ',
    priceFrom: '1.400',
    popular: true,
  },

  // 4 — FOREO FAQ 202 LED Yüz Maskesi
  {
    slug: 'foreo-faq-202',
    brand: 'Foreo',
    name: 'FOREO FAQ 202 LED Yüz Maskesi',
    tagline: 'Yaşlanma karşıtı silikon LED maske · 8 dalga',
    breadcrumbName: 'FOREO FAQ™ 202 LED Yüz Maskesi',
    category: CAT.simart.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/cilt-bakimi-cihazlari-kiralama`,
    series: 'Cilt bakım cihazı · FOREO FAQ serisi',
    short: 'FOREO FAQ 202 LED yüz maskesi, 8 farklı LED ışık dalgası ve NIR (Yakın Kızılötesi) teknolojisi ile cilt yenilenmesi sağlar. Kırışıklık, sivilce ve cilt tonu eşitsizliğine karşı klinik kanıtlanmış cilt bakım cihazı — aylık 3.750 TL\'den.',
    chips: ['8 LED dalga', 'NIR teknolojisi', 'Silikon malzeme', 'Şarjlı', 'FDA onaylı', 'App kontrol'],
    monthly: ['4.950', '4.500', '4.000', '3.750'],
    daily:   ['3.750', '4.000', '4.000', '4.000'],
    rentalUrl: `${PARTNER_BASE}/urunler/foreo-faq-202-led-yuz-maskesi-kiralama`,
    highlights: [
      { t: '8 dalga',     d: 'LED ışık spektrumu' },
      { t: 'NIR',         d: 'yakın kızılötesi' },
      { t: 'Klinik test', d: 'kanıtlanmış sonuç' },
      { t: '24 ay',       d: 'tam garanti' },
    ],
    description: {
      headline: 'Profesyonel LED ışık terapisi, evde.',
      paragraphs: [
        'FOREO FAQ 202, dermatologların klinik tedavilerinde kullandığı 8 farklı LED dalga boyunu (kırmızı, yakın kızılötesi, mor, mavi, sarı, yeşil, beyaz, turuncu) tek cihazda buluşturur. Kollajen üretimini destekler, kırışıklıkları azaltır, sivilceyi yatıştırır ve cilt tonu eşitsizliğini giderir.',
        'Silikon yumuşak yüzey cilde rahat oturur; yıkanabilir, hijyenik. FOREO app ile cilt analizinize göre kişiselleştirilmiş program. Düğün, lansman veya kişisel cilt bakım rutini için aylık 3.750 TL\'den kiralık.',
      ],
      useCases: [
        ['Düğün öncesi cilt bakımı', '✨'],
        ['Anti-aging rutini', '🌸'],
        ['Sivilce tedavisi', '🌿'],
      ],
    },
    glance: [
      '8 LED dalga boyu + NIR teknolojisi',
      'Klinik onaylı anti-aging etkisi',
      'Silikon yumuşak yüzey',
      'USB-C şarjlı (1 saat → 3 gün kullanım)',
      'FOREO app entegrasyonu',
      'Cilt analizi + kişisel program',
      'IPX7 su koruması (yıkanabilir)',
      '90 saniye seans · 5 dk total',
    ],
    specs: [
      ['Marka', 'Foreo'],          ['Model', 'FAQ 202'],
      ['Malzeme', 'Tıbbi silikon'], ['LED sayısı', '600 LED'],
      ['Dalga boyu', '8 farklı'],   ['NIR', '850 nm'],
      ['Şarj', 'USB-C'],            ['Su koruma', 'IPX7'],
      ['Seans süresi', '5 dk'],     ['Pil ömrü', '3 gün'],
      ['Ağırlık', '230 g'],         ['App', 'FOREO For You'],
    ],
    box: [
      'FOREO FAQ 202 maske',
      'USB-C şarj kablosu',
      'Saklama kutusu',
      'Hızlı başlangıç kılavuzu',
      'App kayıt kartı',
      ...SHARED_BOX,
    ],
    glyph: 'mask',
    images: [`${CDN}/01KKH6NNTN4CSB4WWTETVCYK4B.webp`],
    tag: 'YENİ',
    priceFrom: '3.750',
    popular: true,
  },

  // 5 — Xiaomi Mi Pro 4 Scooter
  {
    slug: 'xiaomi-mi-pro-4',
    brand: 'Xiaomi',
    name: 'Xiaomi Mi Pro 4 Elektrikli Scooter',
    tagline: 'Şehir içi 45 km menzilli mikro mobilite',
    breadcrumbName: 'Xiaomi Mi Pro 4 Scooter',
    category: CAT.simart.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/mikro-mobilite-kiralama`,
    series: 'Mikro mobilite · Xiaomi Mi serisi',
    short: 'Xiaomi Mi Pro 4, 350W motor + 474Wh batarya ile 45 km menzil sunan elektrikli scooter. Şehir içi günlük ulaşım, kısa kiralık ev konaklaması veya etkinlik transferi için aylık 2.350 TL\'den kiralama.',
    chips: ['45 km menzil', '25 km/h', '350W motor', 'IP54', 'Disk fren', 'Katlanabilir'],
    monthly: ['3.250', '2.950', '2.750', '2.350'],
    daily:   ['2.450', '2.750', '2.750', '2.750'],
    rentalUrl: `${PARTNER_BASE}/urunler/xiaomi-mi-pro-4-elektrikli-scooter-kiralama`,
    highlights: [
      { t: '45 km',    d: 'tek şarjla menzil' },
      { t: '25 km/h',  d: 'üst hız limiti' },
      { t: '12 kg',    d: 'katlanabilir gövde' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Şehirde günlük ulaşım için elektrikli özgürlük.',
      paragraphs: [
        'Xiaomi Mi Pro 4, 350W motoru ve 474Wh lityum-iyon bataryası ile 45 km menzil sağlar. Üç sürüş modu (eco / standart / sport) bataryayı planlamanıza izin verir, %20\'ye varan eğimlerde tutunma sağlar.',
        'Disk fren + ABS rejeneratif fren ile güvenli durma, 10" şişme tubeless lastik konforlu sürüş. IP54 sertifikası ile hafif yağmurda da kullanılır, saniyeler içinde katlanır — BTS metroya alır, otomobil bagajına koyabilirsiniz.',
      ],
      useCases: [
        ['Şehir içi ulaşım', '🏙️'],
        ['Etkinlik alanı', '🎪'],
        ['Geçici konaklama', '🏠'],
      ],
    },
    glance: [
      '350W motor (peak 700W)',
      '474Wh lityum-iyon batarya',
      '45 km menzil (eco modunda)',
      '25 km/h üst hız',
      'Disk fren + ABS',
      '10" tubeless lastik',
      'IP54 su dayanımı',
      '12 kg · saniyede katlanır',
    ],
    specs: [
      ['Marka', 'Xiaomi'],            ['Model', 'Mi Pro 4'],
      ['Motor', '350W (peak 700W)'],  ['Batarya', '474Wh lityum-iyon'],
      ['Menzil', '45 km (eco)'],      ['Üst hız', '25 km/h'],
      ['Tırmanma', '%20 eğim'],        ['Şarj süresi', '8–9 saat'],
      ['Frenler', 'Disk + ABS'],       ['Lastik', '10" tubeless'],
      ['Ağırlık', '12 kg'],             ['Boyut', '1130 × 430 × 1180 mm'],
    ],
    box: [
      'Mi Pro 4 scooter',
      'Şarj adaptörü',
      'Vida + alet kiti',
      'Kullanım kılavuzu (TR)',
      ...SHARED_BOX,
    ],
    glyph: 'scooter',
    images: [`${CDN}/01KFN908M3HWPVSDG52MSWCWGW.webp`],
    tag: 'YENİ',
    priceFrom: '2.350',
    popular: true,
  },

  // 6 — Philips GC810/20 Buharlı Düzleştirici
  {
    slug: 'philips-gc810-20',
    brand: 'Philips',
    name: 'Philips GC810/20 El Tipi Buharlı Düzleştirici',
    tagline: 'Kıyafetlerde anında buhar — taşınabilir ütü',
    breadcrumbName: 'Philips GC810/20 Buharlı Düzleştirici',
    category: CAT.simart.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/kisisel-bakim-urunleri-kiralama`,
    series: 'Kişisel bakım · Philips Steam serisi',
    short: 'Philips GC810/20 el tipi buharlı düzleştirici, dikey kıyafet ütüsü için 30 saniyede hazır. Otel odası, geçici konaklama veya yurtdışı seyahat için aylık 500 TL\'den kiralık. Asılı kıyafette buruşukluğu anında giderir.',
    chips: ['30 saniyede hazır', '1300W', '70 ml tank', 'Dikey ütü', '8 dk sürekli', 'Taşınabilir'],
    monthly: ['850', '700', '600', '500'],
    daily:   ['600', '700', '700', '700'],
    rentalUrl: `${PARTNER_BASE}/urunler/philips-gc81020-el-tipi-buharli-duzlestirici-kiralama`,
    highlights: [
      { t: '30 sn',   d: 'ısınma süresi' },
      { t: '1300W',   d: 'güçlü buhar' },
      { t: '70 ml',   d: 'tek dolum tank' },
      { t: '24 ay',   d: 'tam garanti' },
    ],
    description: {
      headline: 'Yolda bile her zaman ütülü kıyafet.',
      paragraphs: [
        'Philips GC810/20, asılı kıyafette dikey ütüleme yapar — askılığa as, üzerinden geçir, buruşukluk gider. 30 saniyede hazır, 1300W güçlü buhar; pamuklu, polyester, ipek dahil çoğu kumaşta güvenli kullanım.',
        '70 ml su tankı tek dolumda 8 dakika sürekli buhar verir — bir takım veya 2-3 gömlek için yeterli. Kompakt gövdesi (45 cm) ile valize sığar, otel odasında, AirBnB konaklamada veya geçici ofiste pratik çözüm.',
      ],
      useCases: [
        ['Otel / AirBnB konaklama', '🏨'],
        ['İş seyahati', '✈️'],
        ['Hızlı ütü', '👔'],
      ],
    },
    glance: [
      '30 saniyede ısınma',
      '1300W güç · güçlü buhar',
      '70 ml su tankı (8 dk sürekli)',
      'Dikey kıyafet ütüleme',
      'Pamuklu, polyester, ipek uyumlu',
      'Otomatik kapanma',
      'Kireçten arındırma kabiliyeti',
      'Kompakt 45 cm boyut',
    ],
    specs: [
      ['Marka', 'Philips'],         ['Model', 'GC810/20'],
      ['Güç', '1300W'],             ['Su tankı', '70 ml'],
      ['Isınma', '30 saniye'],      ['Sürekli buhar', '8 dk'],
      ['Buhar atışı', '24 g/dk'],   ['Kablo', '1.8 m'],
      ['Voltaj', '220-240V'],        ['Otomatik kapanma', 'Var'],
      ['Ağırlık', '0.7 kg'],         ['Boyut', '450 × 130 × 130 mm'],
    ],
    box: [
      'Philips GC810/20',
      'Su doldurma şişesi',
      'Saklama torbası',
      'Kullanım kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'iron',
    images: [`${CDN}/01KFNGAPPXVAXVNGN2G3WGNFMX.webp`],
    tag: 'YENİ',
    priceFrom: '500',
  },

  /* ─────────── Ev Aletleri ─────────── */

  // 7 — Vahaa Akıllı Bahçe
  {
    slug: 'vahaa-akilli-bahce',
    brand: 'Vahaa',
    name: 'Vahaa Akıllı Bahçe Topraksız Tarım Cihazı',
    tagline: 'İnox Gri · 6 kapsüllü IoT destekli ev bahçesi',
    breadcrumbName: 'Vahaa Akıllı Bahçe İnox Gri',
    category: CAT.evAlet.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/akilli-bahce-kiralama`,
    series: 'Akıllı bahçe · Vahaa serisi',
    short: 'Vahaa Akıllı Bahçe, 6 kapsüllü topraksız tarım cihazı ile evinizde taze fesleğen, kekik, marul, çilek yetiştirin. IoT destekli, su seviyesi + LED ışık otomatik. Aylık 890 TL\'den kiralık akıllı ev bahçesi.',
    chips: ['6 kapsül', 'IoT destekli', 'LED grow ışık', 'Otomatik sulama', 'WiFi', 'İnox Gri'],
    monthly: ['1.690', '1.290', '1.090', '890'],
    daily:   ['990', '1.290', '1.290', '1.290'],
    rentalUrl: `${PARTNER_BASE}/urunler/vahaa-akilli-bahce-inox-gri-kiralama`,
    highlights: [
      { t: '6 kapsül',    d: 'eş zamanlı bitki' },
      { t: 'IoT',         d: 'app + WiFi kontrol' },
      { t: '3 hafta',     d: 'ilk hasat süresi' },
      { t: '24 ay',       d: 'tam garanti' },
    ],
    description: {
      headline: 'Mutfağında taze ot ve sebze yetiştirme.',
      paragraphs: [
        'Vahaa Akıllı Bahçe, hidroponik (topraksız) tarım teknolojisi ile 6 farklı bitkiyi aynı anda yetiştirmenizi sağlar. Fesleğen, kekik, maydanoz, marul, çilek, çeri domates — hepsi mutfak tezgâhınızda.',
        'IoT modülü su seviyesini, LED grow ışıklarının zamanını ve sıcaklığı otomatik yönetir. WiFi + app ile bitkilerinizi telefondan takip edersiniz. Çocuklu aile, glütensiz beslenen, organik yiyen profil için aylık 890 TL\'den kiralık.',
      ],
      useCases: [
        ['Mutfak ot bahçesi', '🌿'],
        ['Çocuk eğitimi', '👶'],
        ['Organik beslenme', '🥗'],
      ],
    },
    glance: [
      '6 kapsüllü hidroponik sistem',
      'LED grow ışık (full spectrum)',
      'IoT modülü + WiFi bağlantı',
      'Otomatik sulama + nutrient',
      '3 haftada ilk hasat',
      'Mobil app ile uzaktan izleme',
      'Sessiz pompa (< 35 dB)',
      'İnox Gri premium tasarım',
    ],
    specs: [
      ['Marka', 'Vahaa'],            ['Model', 'Akıllı Bahçe'],
      ['Renk', 'İnox Gri'],          ['Kapsül', '6 yuvalı'],
      ['Aydınlatma', 'LED grow'],     ['Bağlantı', 'WiFi + app'],
      ['Su tankı', '4 L'],            ['Güç', '40W LED + pompa'],
      ['Ses', '< 35 dB'],             ['Boyut', '380 × 200 × 420 mm'],
      ['Ağırlık', '4 kg'],            ['Voltaj', '220-240V'],
    ],
    box: [
      'Vahaa Akıllı Bahçe ana ünite',
      '6 başlangıç kapsülü (ot karışımı)',
      'Hidroponik nutrient solüsyonu',
      'WiFi modül + app kayıt kartı',
      'Kullanım kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'plant',
    images: [`${CDN}/01KNHMSYWDV31KE74XMCEKZDKC.avif`],
    tag: 'YENİ',
    priceFrom: '890',
  },

  // 8 — Anker Nebula Apollo
  {
    slug: 'anker-nebula-apollo',
    brand: 'Anker',
    name: 'Anker Nebula Apollo Taşınabilir Projeksiyon',
    tagline: '200 ANSI lümen · Android TV · 4 saat pil',
    breadcrumbName: 'Anker Nebula Apollo Projeksiyon',
    category: CAT.evAlet.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/projeksiyon-cihazi-kiralama`,
    series: 'Projeksiyon · Anker Nebula serisi',
    short: 'Anker Nebula Apollo, 200 ANSI lümen parlaklık, dahili Android TV ve 4 saat batarya ile cep boyutunda projeksiyon. Cafe açılışı, dış mekan etkinlik, geçici sinema kurulumu için aylık 1.850 TL\'den kiralık.',
    chips: ['200 ANSI', '480p · HDR10', '4 saat pil', 'Android TV', 'Bluetooth hoparlör', 'HDMI · USB'],
    monthly: ['3.650', '3.300', '3.050', '2.650'],
    daily:   ['1.850', '2.300', '2.300', '2.300'],
    rentalUrl: `${PARTNER_BASE}/urunler/anker-nebula-apollo-tasinabilir-projeksiyon-cihazi-kiralama`,
    highlights: [
      { t: '4 saat',   d: 'kesintisiz pil' },
      { t: '200 ANSI', d: '480p HDR projeksiyon' },
      { t: '0.9 kg',   d: 'çantanda taşınır' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Mekanını sinemaya, sahneye, sunum salonuna çevir.',
      paragraphs: [
        'Nebula Apollo, 200 ANSI lümen parlaklığı ve 4 saat batarya ömrüyle kafe duvarına maç gösteriminden, kurumsal lansman geceleri için dış mekan projeksiyonuna kadar her senaryoya uyum sağlar. Android TV arayüzü sayesinde Netflix, YouTube, Spotify ve binlerce uygulamayı doğrudan üzerinden çalıştırır.',
        'Dahili 8W hoparlörü Bluetooth modunda taşınabilir hoparlör olarak da çalışır — tek cihazla iki ihtiyaç. Kalibrasyon, kurulum ve teslim sonrası destek on music ekibi tarafından sağlanır.',
      ],
      useCases: [
        ['Dış mekan etkinliği', '🌙'],
        ['Kafe & restoran', '☕'],
        ['Lansman & sunum', '◐'],
      ],
    },
    glance: [
      '200 ANSI lümen parlaklık',
      'Native 480p · 1080p destekli',
      '4 saat batarya · USB-C şarj',
      'Android TV 9.0 dahili',
      '8W omnidirectional hoparlör',
      'HDMI, USB-A, AUX bağlantı',
      'Otomatik keystone düzeltme',
      '0.9 kg · cep boyutu',
    ],
    specs: [
      ['Marka', 'Anker'],                   ['Model', 'Nebula Apollo'],
      ['Parlaklık', '200 ANSI lümen'],      ['Çözünürlük', '854×480 (1080p destekli)'],
      ['Görüntü oranı', '16:9'],             ['Yansıtma boyutu', '40" – 100"'],
      ['Ses', '8W dahili hoparlör'],         ['Pil ömrü', '4 saat'],
      ['İşletim sistemi', 'Android TV 9.0'], ['Bağlantı', 'HDMI · USB-A · USB-C · AUX · Wi-Fi · BT 4.2'],
      ['Ağırlık', '0.9 kg'],                 ['Boyut', '128 × 128 × 52 mm'],
    ],
    box: [
      'Nebula Apollo cihazı',
      'USB-C şarj kablosu',
      'Güç adaptörü (30W)',
      'HDMI kablosu (1.5m)',
      'Uzaktan kumanda + pil',
      'Taşıma kılıfı',
      'Kullanım kılavuzu (TR)',
      ...SHARED_BOX,
    ],
    glyph: 'projector',
    images: [`${CDN}/01KKH2M0E907VV6SFN50PGQ270.jpg`],
    tag: 'YENİ',
    priceFrom: '1.850',
    popular: true,
  },

  // 9 — Dreame PM10 Hava Temizleyici
  {
    slug: 'dreame-pm10',
    brand: 'Dreame',
    name: 'Dreame PM10 Akıllı Hava Temizleyici Fan',
    tagline: '2-in-1 hava temizleyici + serinletici fan',
    breadcrumbName: 'Dreame PM10 Hava Temizleyici',
    category: CAT.evAlet.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/hava-temizleyici-cihaz-kiralama`,
    series: 'Ev aletleri · Dreame serisi',
    short: 'Dreame PM10, HEPA filtre + UV-C sterilizasyon + serinletici fan tek cihazda. PM2.5 partikül, polen, bakteri ve virüsü yakalar; yaz aylarında oda fanı, dört mevsim akıllı hava temizleyici. Aylık 1.700 TL\'den.',
    chips: ['HEPA filtre', 'UV-C sterilize', 'PM2.5 sensör', 'Fan modu', 'WiFi + app', 'Sessiz çalışma'],
    monthly: ['2.250', '2.050', '1.850', '1.750'],
    daily:   ['1.700', '2.000', '2.000', '2.000'],
    rentalUrl: `${PARTNER_BASE}/urunler/dreame-pm10-akilli-hava-temizleyici-kiralama`,
    highlights: [
      { t: 'HEPA',     d: '0.3μm partikül %99.97' },
      { t: 'UV-C',     d: 'bakteri sterilizasyon' },
      { t: '60 m²',    d: 'kapsama alanı' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Tüm yıl temiz ve serin ev havası.',
      paragraphs: [
        'Dreame PM10, HEPA H13 filtre + UV-C ışın + aktif karbon üçlü filtrasyon ile PM2.5 partikül, polen, evcil hayvan tüyü, koku ve bakterileri yakalar. PM2.5 sensörü hava kalitesini canlı izler, otomatik mod ile temizleme yoğunluğunu ayarlar.',
        '360° fan modu yaz aylarında oda fanı olarak kullanılır — tek cihazla iki fonksiyon. Sessiz gece modu (< 30 dB) yatak odasında uykuyu bölmez. WiFi + Dreamehome app ile uzaktan kontrol. 60 m²\'ye kadar alan için aylık 1.700 TL\'den.',
      ],
      useCases: [
        ['Alerjik kullanım', '🌸'],
        ['Yaz fan + temizleyici', '🌬️'],
        ['Yeni bebek odası', '👶'],
      ],
    },
    glance: [
      'HEPA H13 filtre (%99.97 0.3μm)',
      'UV-C bakteri sterilizasyonu',
      'Aktif karbon koku filtresi',
      'PM2.5 + sıcaklık + nem sensörü',
      '360° serinletici fan modu',
      'WiFi + Dreamehome app',
      'Sessiz gece modu (< 30 dB)',
      '60 m² kapsama',
    ],
    specs: [
      ['Marka', 'Dreame'],            ['Model', 'PM10'],
      ['Filtre', 'HEPA H13'],          ['Sterilizasyon', 'UV-C 254nm'],
      ['Sensör', 'PM2.5 + nem + ısı'], ['Fan modu', '360° osilasyon'],
      ['Bağlantı', 'WiFi + app'],      ['Ses', '23-58 dB'],
      ['Güç', '40W'],                  ['Voltaj', '220-240V'],
      ['Boyut', '210 × 210 × 700 mm'], ['Ağırlık', '4.5 kg'],
    ],
    box: [
      'Dreame PM10 ana gövde',
      'HEPA filtre (takılı)',
      'Uzaktan kumanda',
      'Şarj kablosu',
      'Kullanım kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'fan',
    images: [`${CDN}/01KKH0DSZGCJSQ0QSX3DKMHGFK.webp`],
    tag: 'YENİ',
    priceFrom: '1.700',
  },

  // 10 — Dyson Purifier Cool Hava Temizleyici
  {
    slug: 'dyson-purifier-cool',
    brand: 'Dyson',
    name: 'Dyson Purifier Cool Hava Temizleme Cihazı',
    tagline: 'HEPA H13 + 350° serinletici fan',
    breadcrumbName: 'Dyson Purifier Cool',
    category: CAT.evAlet.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/hava-temizleyici-cihaz-kiralama`,
    series: 'Ev aletleri · Dyson Purifier serisi',
    short: 'Dyson Purifier Cool, HEPA H13 filtreli + 350° dönen serinletici fan ile yaz-kış kullanılan akıllı hava temizleyici. PM0.1\'e kadar partikül, polen, koku ve gaz yakalama; aylık 2.500 TL\'den premium kiralık.',
    chips: ['HEPA H13', 'PM0.1', '350° osilasyon', 'Air Multiplier', 'Dyson Link app', 'Sessiz'],
    monthly: ['3.450', '2.950', '2.750', '2.500'],
    daily:   ['2.500', '2.850', '3.150', '3.150'],
    rentalUrl: `${PARTNER_BASE}/urunler/dyson-purifier-cool-hava-temizleme-cihazi-kiralama`,
    highlights: [
      { t: 'HEPA H13', d: 'PM0.1 %99.95' },
      { t: '350°',     d: 'osilasyon fan' },
      { t: '290 m³/sa',d: 'temiz hava akışı' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Görünmeyen havayı görünür kılar.',
      paragraphs: [
        'Dyson Purifier Cool, HEPA H13 + aktif karbon ikili filtrasyon ile 0.1 mikrona kadar partikülleri (PM0.1) %99.95 oranında yakalar. Air Multiplier teknolojisi havayı saniyede 290 m³ debide odaya yayar — 350° osilasyon ile geniş kapsama.',
        'Dahili sensör hava kalitesini canlı LCD ekranda gösterir; otomatik mod gerektiğinde devreye girer. Yaz aylarında oda fanı olarak kullanılır — bıçaksız, çocuk güvenli tasarım. Dyson Link app ile uzaktan kontrol, gece modu sessiz.',
      ],
      useCases: [
        ['Alerji + astım', '🌬️'],
        ['Yaz serinleme', '☀️'],
        ['Bebek odası', '👶'],
      ],
    },
    glance: [
      'HEPA H13 + aktif karbon filtrasyon',
      'PM0.1 partikül %99.95 yakalama',
      'Air Multiplier 350° osilasyon',
      '290 m³/saat temiz hava debisi',
      'LCD canlı hava kalite ekranı',
      'Dyson Link app + sesli asistan',
      'Sessiz gece modu',
      'Bıçaksız çocuk güvenli tasarım',
    ],
    specs: [
      ['Marka', 'Dyson'],            ['Model', 'Purifier Cool TP07'],
      ['Filtre', 'HEPA H13 + karbon'], ['Hava debisi', '290 m³/sa'],
      ['Osilasyon', '350°'],           ['Sensör', 'PM2.5 + PM10 + VOC + NO₂'],
      ['Bağlantı', 'WiFi + Alexa'],    ['Ses', '24.5-49.5 dB'],
      ['Güç', '40W max'],              ['Voltaj', '220-240V'],
      ['Boyut', '220 × 220 × 1050 mm'], ['Ağırlık', '4.99 kg'],
    ],
    box: [
      'Dyson Purifier Cool TP07',
      'HEPA H13 filtre (takılı)',
      'Uzaktan kumanda',
      'Hızlı başlangıç kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'fan',
    images: [`${CDN}/01KFJDHGTWGVSYR65E8NVJXX5E.webp`],
    tag: 'YENİ',
    priceFrom: '2.500',
  },

  // 11 — Karaca Robotea Pro 4-in-1 Çay Makinesi
  {
    slug: 'karaca-robotea-pro',
    brand: 'Karaca',
    name: 'Karaca Robotea Pro 4\'ü 1 Arada Çay Makinesi',
    tagline: 'Sesli asistanlı akıllı çay makinesi',
    breadcrumbName: 'Karaca Robotea Pro',
    category: CAT.evAlet.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/mutfak-aletleri-kiralama`,
    series: 'Mutfak aletleri · Karaca Robotea serisi',
    short: 'Karaca Robotea Pro, çay demleme + kahve ısıtma + su kaynatma + bebek sütü hazırlama 4 fonksiyonu bir arada. Sesli asistan çayınızın hazır olduğunu söyler. Aylık 1.350 TL\'den kiralık akıllı çay makinesi.',
    chips: ['4-in-1', 'Sesli asistan', '2.5 L kapasite', 'Akıllı sıcaklık', 'Otomatik kapanma', 'BPA-free'],
    monthly: ['2.250', '1.850', '1.600', '1.350'],
    daily:   ['1.350', '1.850', '2.050', '2.050'],
    rentalUrl: `${PARTNER_BASE}/urunler/karaca-robotea-pro-4-in-1-konusan-cay-makinesi-kiralama`,
    highlights: [
      { t: '4-in-1',     d: 'çay + kahve + süt + su' },
      { t: 'Sesli',      d: 'Türkçe asistan' },
      { t: '2.5 L',      d: 'su kapasitesi' },
      { t: '24 ay',      d: 'tam garanti' },
    ],
    description: {
      headline: 'Mutfak asistanın: çay hazır olunca sana söyler.',
      paragraphs: [
        'Karaca Robotea Pro, 4 farklı sıcak içecek modunda çalışır: Türk çayı demleme, kahve ısıtma, su kaynatma ve bebek sütü hazırlama. Akıllı sıcaklık kontrolü ile her içeceğe özel ideal ısı, otomatik tutma fonksiyonu.',
        'Türkçe sesli asistan, çayınızın hazır olduğunu, su seviyesinin düştüğünü veya bakım gerektiğini söyler — mutfaktan ayrılsanız bile fark edersiniz. 2.5 L kapasite çay demliği, geniş aile veya misafir kullanımı için. Aylık 1.350 TL\'den kiralık.',
      ],
      useCases: [
        ['Geniş aile', '👨‍👩‍👧‍👦'],
        ['Misafir günleri', '☕'],
        ['Yeni doğan ailesi', '🍼'],
      ],
    },
    glance: [
      '4-in-1: çay, kahve, su, bebek sütü',
      'Türkçe sesli asistan',
      '2.5 L su tankı + 1 L demlik',
      'Akıllı sıcaklık kontrolü',
      'Otomatik tutma + kapanma',
      'BPA-free malzeme',
      'Sessiz kaynatma',
      'Anti-kireç filtre',
    ],
    specs: [
      ['Marka', 'Karaca'],            ['Model', 'Robotea Pro'],
      ['Fonksiyon', '4-in-1'],         ['Su tankı', '2.5 L'],
      ['Demlik', '1 L'],               ['Güç', '2200W'],
      ['Sesli asistan', 'Türkçe'],     ['Sıcaklık', 'Akıllı kontrol'],
      ['Malzeme', 'BPA-free + cam'],   ['Voltaj', '220-240V'],
      ['Boyut', '230 × 230 × 320 mm'], ['Ağırlık', '3 kg'],
    ],
    box: [
      'Karaca Robotea Pro ana ünite',
      'Cam demlik',
      'Kullanım kılavuzu (TR)',
      'Anti-kireç filtre',
      ...SHARED_BOX,
    ],
    glyph: 'kettle',
    images: [`${CDN}/01KKH2PSAM1X8QN41S28HEFQF8.avif`],
    tag: 'YENİ',
    priceFrom: '1.350',
  },

  // 12 — Karcher SC 3 EasyFix Buharlı Temizlik
  {
    slug: 'karcher-sc3-easyfix',
    brand: 'Kärcher',
    name: 'Kärcher SC 3 EasyFix Buharlı Temizlik Makinesi',
    tagline: 'Kimyasalsız buharlı derin temizlik',
    breadcrumbName: 'Kärcher SC 3 EasyFix',
    category: CAT.evAlet.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/temizlik-aletleri-kiralama`,
    series: 'Ev aletleri · Kärcher Steam serisi',
    short: 'Kärcher SC 3 EasyFix, 3.5 bar basınçlı buharla zemini, mutfak yüzeyini, banyoyu ve halıları kimyasalsız temizler. Bakteriyi öldürür, alerjeni nötralize eder. Yeni eve taşınma veya derin temizlik için aylık 1.980 TL\'den.',
    chips: ['3.5 bar', 'Kimyasalsız', '30 sn ısınma', '0.5 L tank', 'EasyFix paspas', '8 aksesuar'],
    monthly: ['3.750', '3.150', '2.750', '2.180'],
    daily:   ['1.980', '2.450', '3.100', '3.100'],
    rentalUrl: `${PARTNER_BASE}/urunler/karcher-sc3-easyfix-buharli-temizlik-makinesi-kiralama`,
    highlights: [
      { t: '3.5 bar',  d: 'yüksek basınçlı buhar' },
      { t: '30 sn',    d: 'hızlı ısınma' },
      { t: '%99.99',   d: 'bakteri öldürme' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Kimyasalsız derin temizlik, %99.99 bakteriyel arınma.',
      paragraphs: [
        'Kärcher SC 3 EasyFix, 3.5 bar basınçlı buhar ile zemin, fayans, mutfak yüzeyi, banyo, halı ve perdeyi kimyasalsız temizler. 30 saniyede ısınır, kireçten arındırma kartuşu ile uzun ömürlü.',
        'EasyFix paspas başlığı zemini hızlı kuruturken, 8 aksesuar (fırça, nozul, kenar başlığı, halı pedi) ile mutfak süzgecinden cam yüzeye kadar her noktayı temizler. Buhar 100°C üstüne çıkar — %99.99 bakteri ve virüsü öldürür. Yeni eve taşınma, derin bahar temizliği, AirBnB yenileme için ideal.',
      ],
      useCases: [
        ['Eve taşınma temizliği', '🏠'],
        ['AirBnB yenileme', '🧹'],
        ['Alerjen temizliği', '🌸'],
      ],
    },
    glance: [
      '3.5 bar basınçlı buhar',
      'Kimyasalsız temizlik (%99.99 bakteri öldürme)',
      '30 saniye ısınma süresi',
      '0.5 L su tankı (15 dk sürekli buhar)',
      'EasyFix paspas başlığı',
      '8 aksesuar (fırça, nozul, halı pedi)',
      'Kireçten arındırma kartuşu',
      '4 m kablo',
    ],
    specs: [
      ['Marka', 'Kärcher'],            ['Model', 'SC 3 EasyFix'],
      ['Basınç', '3.5 bar'],           ['Su tankı', '0.5 L'],
      ['Isınma', '30 saniye'],         ['Sürekli buhar', '15 dk'],
      ['Buhar miktarı', '40 g/dk'],    ['Güç', '1900W'],
      ['Bakteri öldürme', '%99.99'],   ['Aksesuar', '8 parça'],
      ['Kablo', '4 m'],                 ['Ağırlık', '3 kg'],
    ],
    box: [
      'Kärcher SC 3 EasyFix ana ünite',
      'EasyFix paspas başlığı',
      'Mikrofiber paspas pedi',
      '8 aksesuar (fırça, nozul, halı pedi)',
      'Kireçten arındırma kartuşu',
      ...SHARED_BOX,
    ],
    glyph: 'vacuum',
    images: [`${CDN}/01KKK8Y3Q6VJHRW9Q7H63HJ8KM.jpg`],
    tag: 'YENİ',
    priceFrom: '1.980',
    popular: true,
  },

  // 13 — Dyson V15 Detect Süpürge
  {
    slug: 'dyson-v15-detect',
    brand: 'Dyson',
    name: 'Dyson V15 Detect Kablosuz Süpürge',
    tagline: 'Lazerli toz görüntüleme + HEPA filtre',
    breadcrumbName: 'Dyson V15 Detect',
    category: CAT.evAlet.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/supurge-kiralama`,
    series: 'Ev aletleri · Dyson V serisi',
    short: 'Dyson V15 Detect, yeşil lazer ışını ile gözle görünmeyen tozu görünür kılar. LCD ekranda parçacık sayımı canlı; HEPA filtre + 60 dakika pil ile evdeki en güçlü kablosuz süpürge. Aylık 1.600 TL\'den.',
    chips: ['Lazer detect', '60 dk pil', '0.76 L hazne', 'HEPA filtre', 'LCD ekran', '125.000 RPM'],
    monthly: ['2.850', '2.550', '2.150', '1.600'],
    daily:   ['2.100', '2.400', '2.400', '2.400'],
    rentalUrl: `${PARTNER_BASE}/urunler/dyson-v15-detect-kablosuz-supurge-kiralama`,
    highlights: [
      { t: '60 dk',   d: 'kesintisiz pil' },
      { t: 'Lazer',   d: 'mikro toz görür' },
      { t: '3 kg',    d: 'tek elle kullan' },
      { t: '24 ay',   d: 'tam garanti' },
    ],
    description: {
      headline: 'Gözle görmediğin tozu lazerle yakalar.',
      paragraphs: [
        'Yer başlığındaki yeşil lazer ışın, zemine gizlenmiş mikro tozu görünür kılar. LCD ekranda parçacık sayımı canlı gösterilir — temizlediğin ile temizlenmesi gerekenin farkını görürsün.',
        'Hyperdymium dijital motor 125.000 RPM hıza çıkar; HEPA filtre 0.3 mikrona kadar parçacıkları yakalar. Boost modunda kalın halıyı, eco modunda 60 dakika geniş alanı temizler. Cordless tasarım merdivenden balkona her noktada kullanılır.',
      ],
      useCases: [
        ['Kısa kiralık ev', '🏠'],
        ['Etkinlik öncesi', '✨'],
        ['Premium hediye', '🎁'],
      ],
    },
    glance: [
      'Yeşil lazer toz görüntüleme',
      'LCD ekranda parçacık sayımı',
      '125.000 RPM Hyperdymium motor',
      '60 dakika pil (eco modunda)',
      'HEPA filtre · 5 aşamalı filtrasyon',
      '0.76L şeffaf toz haznesi',
      'Cordless · 3 kg ağırlık',
      'Boost / Auto / Eco mod',
    ],
    specs: [
      ['Marka', 'Dyson'],                 ['Model', 'V15 Detect'],
      ['Motor', 'Hyperdymium dijital'],   ['RPM', '125.000'],
      ['Pil ömrü', '60 dk (eco)'],        ['Şarj süresi', '4.5 saat'],
      ['Hazne', '0.76 L'],                 ['Filtre', 'HEPA · 5 stage'],
      ['Vakum gücü', '230 AW'],            ['Gürültü', '78 dB'],
      ['Ağırlık', '3 kg'],                 ['Boyut', '1257 × 250 × 261 mm'],
    ],
    box: [
      'Dyson V15 Detect ana gövde',
      'Yer başlığı (lazer detect)',
      'Mini motorlu kafa',
      'Combination tool',
      'Crevice tool',
      'Soft dusting brush',
      'Şarj istasyonu + adaptör',
      ...SHARED_BOX,
    ],
    glyph: 'vacuum',
    images: [`${CDN}/01KFNFX3ATF6A6RD6Z6DF8PH4A.webp`],
    tag: 'YENİ',
    priceFrom: '1.600',
    popular: true,
  },

  /* ─────────── Anne & Bebek ─────────── */

  // 14 — Cybex Anoris T i-Size Bebek Oto Koltuğu
  {
    slug: 'cybex-anoris-t',
    brand: 'Cybex',
    name: 'Cybex Anoris T i-Size Bebek Oto Koltuğu',
    tagline: 'Tam vücut hava yastıklı dünyanın ilk oto koltuğu',
    breadcrumbName: 'Cybex Anoris T i-Size',
    category: CAT.anne.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/anne-bebek-urunleri-kiralama`,
    series: 'Anne & bebek · Cybex Premium serisi',
    short: 'Cybex Anoris T, dünyada ilk tam vücut hava yastıklı bebek oto koltuğu — yan çarpışmada %50 daha az darbe. i-Size sertifikalı, 76-115 cm çocuk için 15 ay - 6 yaş arası. Aylık 3.350 TL\'den kiralık premium güvenlik.',
    chips: ['Tam vücut hava yastığı', 'i-Size sertifika', '76-115 cm', '%50 darbe azaltma', 'ISOFIX', 'L.S.P. yan koruma'],
    monthly: ['4.250', '3.900', '3.650', '3.350'],
    daily:   ['1.450', '2.050', '2.950', '2.950'],
    rentalUrl: `${PARTNER_BASE}/urunler/cybex-anoris-t-i-size-bebek-oto-koltugu`,
    highlights: [
      { t: 'Hava yastığı', d: 'tam vücut koruma' },
      { t: '%50',          d: 'daha az çarpışma darbesi' },
      { t: 'i-Size',       d: 'AB güvenlik sertifika' },
      { t: '24 ay',        d: 'tam garanti' },
    ],
    description: {
      headline: 'Yolculukta bebeğin için maksimum güvenlik.',
      paragraphs: [
        'Cybex Anoris T, dünyanın ilk tam vücut hava yastığı sistemli i-Size bebek oto koltuğudur. Yan çarpışmada koltuğun çocuğun başını + omuzlarını + göğsünü saran şişme yastıklar tetiklenir; geleneksel oto koltuğuna göre %50 daha az darbe enerjisi iletir.',
        'ISOFIX + destek ayağı ile arabaya tek hareketle takılır. L.S.P. (Linear Side-impact Protection) yan koruma teknolojisi ek emniyet sağlar. 76-115 cm boy (yaklaşık 15 ay - 6 yaş) için kullanılır. Tatil yolculuğu, kısa kiralık ev konaklaması veya geçici çocuk bakımı için aylık 3.350 TL\'den kiralık.',
      ],
      useCases: [
        ['Yaz tatili', '🏖️'],
        ['Yurtdışı seyahat', '✈️'],
        ['Geçici bakım', '👶'],
      ],
    },
    glance: [
      'Dünyanın ilk tam vücut hava yastıklı oto koltuğu',
      'i-Size R129/03 sertifika',
      '15 ay - 6 yaş (76-115 cm)',
      'L.S.P. yan darbe koruma',
      'ISOFIX + destek ayağı',
      '%50 daha az çarpışma darbesi',
      '12 pozisyon ayarlanabilir',
      'Premium gri kumaş, yıkanabilir',
    ],
    specs: [
      ['Marka', 'Cybex'],                ['Model', 'Anoris T i-Size'],
      ['Sertifika', 'i-Size R129/03'],   ['Yaş', '15 ay - 6 yaş'],
      ['Boy', '76-115 cm'],              ['Kilo', '< 21 kg'],
      ['Yön', 'İleri bakışlı'],          ['Bağlantı', 'ISOFIX + ayak'],
      ['Hava yastığı', 'Tam vücut'],     ['Yan koruma', 'L.S.P. ileri'],
      ['Ağırlık', '14.7 kg'],            ['Boyut', '52 × 41 × 67 cm'],
    ],
    box: [
      'Cybex Anoris T koltuk',
      'Hava yastığı modülü (entegre)',
      'Destek ayağı',
      'Kullanım kılavuzu',
      'Garanti belgesi',
      ...SHARED_BOX,
    ],
    glyph: 'bottle',
    images: [`${CDN}/01KKGZX1JKWMJPYCJHQSMG2S6M.webp`],
    tag: 'YENİ',
    priceFrom: '1.450',
  },

  /* ─────────── Oyun & Hobi ─────────── */

  // 15 — Sony PlayStation 5 Slim
  {
    slug: 'playstation-5-slim',
    brand: 'Sony',
    name: 'Sony PlayStation 5 Slim 1TB Oyun Konsolu',
    tagline: '4K 120 FPS · Ray tracing · 2 DualSense',
    breadcrumbName: 'Sony PlayStation 5 Slim 1TB',
    category: CAT.oyun.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/oyun-konsolu-ve-cihazlari-kiralama`,
    series: 'Oyun konsolu · PlayStation 5 serisi',
    short: 'Sony PS5 Slim 1TB, 4K 120 FPS ray tracing destekli yeni nesil oyun konsolu. 2 DualSense kontrolcü dahil — LAN parti, etkinlik aktivasyonu veya salon kullanımı için aylık 1.850 TL\'den kiralık.',
    chips: ['1TB SSD', '4K 120Hz', 'Ray tracing', 'Tempest 3D', '2× DualSense', '8K Ready'],
    monthly: ['3.450', '3.050', '2.650', '2.050'],
    daily:   ['1.850', '2.250', '3.050', '3.050'],
    rentalUrl: `${PARTNER_BASE}/urunler/sony-playstation-5-slim-1-tb-kiralama`,
    highlights: [
      { t: '4K 120 FPS', d: 'ray tracing' },
      { t: '1TB',        d: 'NVMe SSD' },
      { t: 'Tempest 3D', d: 'mekansal ses' },
      { t: '24 ay',      d: 'tam garanti' },
    ],
    description: {
      headline: 'Salonunda sinema kalitesinde oyun deneyimi.',
      paragraphs: [
        'PS5 Slim, yeni nesil oyunları 4K çözünürlükte 120 FPS\'ye kadar koşturur. Özel NVMe SSD\'si yükleme ekranlarını saniyelere indirir; oyun değişiklikleri bir tetikleme uzaklığında.',
        'Kiralama paketinde 2 adet DualSense kontrolcü dahil — uyarlanabilir tetikleyici ve haptik geri bildirim ile her sahneyi parmak uçlarınla hissetmeni sağlar. Tempest 3D ses motoru ile 360° mekansal ses — kulaklıkla bile odanı saran bir deneyim.',
      ],
      useCases: [
        ['Etkinlik & lansman', '🎮'],
        ['Salon kullanımı', '🛋️'],
        ['LAN parti', '🕹️'],
      ],
    },
    glance: [
      '4K çözünürlük · 120 FPS desteği',
      'Ray tracing ile gerçek zamanlı yansıma',
      '1TB özel NVMe SSD',
      '2× DualSense uyarlanabilir kontrolcü',
      'Tempest 3D mekansal ses motoru',
      'Wi-Fi 6 · BT 5.1 · USB-C ön panel',
      '4K Blu-ray sürücü dahil',
      '8K çıkış desteği (uyumlu içerikle)',
    ],
    specs: [
      ['Marka', 'Sony'],                  ['Model', 'PlayStation 5 Slim'],
      ['Depolama', '1TB NVMe SSD'],       ['CPU', 'AMD Zen 2 8-core 3.5GHz'],
      ['GPU', 'AMD RDNA 2 · 10.3 TF'],    ['Çözünürlük', '4K 120Hz · 8K hazır'],
      ['Ses', 'Tempest 3D Audio'],         ['Kontrolcü', '2× DualSense'],
      ['Optik sürücü', '4K UHD Blu-ray'],  ['Bağlantı', 'HDMI 2.1 · USB-C/A · Wi-Fi 6'],
      ['Ağırlık', '3.2 kg'],               ['Boyut', '358 × 216 × 80 mm'],
    ],
    box: [
      'PlayStation 5 Slim konsol',
      '2× DualSense kablosuz kontrolcü',
      'HDMI 2.1 kablosu',
      'Güç kablosu',
      'USB-C şarj kablosu',
      ...SHARED_BOX,
    ],
    glyph: 'console',
    images: [`${CDN}/01KF6951YBD8S78SSYDB1N0FAG.webp`],
    tag: 'YENİ',
    priceFrom: '1.850',
  },

  // 16 — Meta Quest 3 VR
  {
    slug: 'meta-quest-3',
    brand: 'Meta',
    name: 'Meta Quest 3 VR Sanal Gerçeklik Gözlüğü',
    tagline: '128GB · 4K LCD · karma gerçeklik passthrough',
    breadcrumbName: 'Meta Quest 3 VR 128GB',
    category: CAT.oyun.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/sanal-gerceklik-vr-setleri-kiralama`,
    series: 'VR · Meta Quest serisi',
    short: 'Meta Quest 3, Snapdragon XR2 Gen 2 + 4K LCD panel + renkli passthrough karma gerçeklik gözlüğü. Lansman demosu, eğitim simülasyonu veya gaming için aylık 2.300 TL\'den 128GB premium VR seti.',
    chips: ['Karma gerçeklik', '4K LCD', '128GB', 'Snapdragon XR2', 'Touch Plus', 'Wi-Fi 6E'],
    monthly: ['3.450', '2.950', '2.650', '2.300'],
    daily:   ['2.300', '2.550', '3.100', '3.100'],
    rentalUrl: `${PARTNER_BASE}/urunler/meta-quest-3-vr-gozluk-kiralama`,
    highlights: [
      { t: '4K LCD',  d: 'panel başına 2064×2208' },
      { t: '110°',    d: 'görüş açısı' },
      { t: '515 g',   d: 'denge ağırlığı' },
      { t: '24 ay',   d: 'tam garanti' },
    ],
    description: {
      headline: 'Lansman demosundan eğitim simülasyonuna VR.',
      paragraphs: [
        'Quest 3, Snapdragon XR2 Gen 2 işlemcisi ve panel başına 4K LCD ekran ile önceki nesle göre çift kat daha güçlü. Renkli passthrough kameralarıyla karma gerçeklik içerikleri sunabilir — sanal nesneleri gerçek dünyana yerleştirebilirsin.',
        'Touch Plus kontrolcüleri ring-less tasarımı ile doğal el hareketleri sağlar. Eğitim, ürün lansmanı, gayrimenkul turu ve gaming için kurulumu 2 dakika.',
      ],
      useCases: [
        ['Ürün lansmanı', '🚀'],
        ['Eğitim simülasyonu', '🎓'],
        ['Gaming etkinliği', '🎮'],
      ],
    },
    glance: [
      'Snapdragon XR2 Gen 2 işlemci',
      '2× 4K LCD panel · 2064×2208 her göz',
      '110° yatay görüş açısı',
      'Renkli passthrough · karma gerçeklik',
      'Touch Plus kontrolcü (ring-less)',
      'Wi-Fi 6E · BT 5.2',
      '128GB dahili depolama',
      'PCVR Air Link desteği',
    ],
    specs: [
      ['Marka', 'Meta'],                     ['Model', 'Quest 3 · 128GB'],
      ['İşlemci', 'Snapdragon XR2 Gen 2'],   ['Bellek', '8GB RAM'],
      ['Depolama', '128GB'],                  ['Ekran', '2× 4K LCD · 2064×2208'],
      ['Tazeleme', '90–120 Hz'],              ['FOV', '110° yatay'],
      ['Pil ömrü', '2–2.5 saat'],            ['Bağlantı', 'Wi-Fi 6E · BT 5.2 · USB-C'],
      ['Ağırlık', '515 g'],                   ['Kutu içeriği', 'Headset + 2× Touch Plus'],
    ],
    box: [
      'Meta Quest 3 headset',
      '2× Touch Plus kontrolcü',
      '2× AA pil',
      'USB-C şarj kablosu',
      '18W güç adaptörü',
      'Glasses spacer',
      ...SHARED_BOX,
    ],
    glyph: 'vr',
    images: [`${CDN}/01KFG8AZ4884YDW586D0QWMAW0.webp`],
    tag: 'YENİ',
    priceFrom: '2.300',
    popular: true,
  },

  // 17 — Nintendo Switch OLED
  {
    slug: 'nintendo-switch-oled',
    brand: 'Nintendo',
    name: 'Nintendo Switch OLED Model Oyun Konsolu',
    tagline: '7" OLED · TV + handheld mod',
    breadcrumbName: 'Nintendo Switch OLED',
    category: CAT.oyun.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/oyun-konsolu-ve-cihazlari-kiralama`,
    series: 'Oyun konsolu · Nintendo Switch serisi',
    short: 'Nintendo Switch OLED, 7 inç canlı OLED ekran + çıkarılabilir Joy-Con + TV dock\'lu hibrit konsol. Etkinlik aktivasyonu, çocuk partisi, salon kullanımı için aylık 1.030 TL\'den kiralık.',
    chips: ['7" OLED', '64GB', 'Joy-Con', 'HDMI dock', '9 saat pil', 'TV + handheld'],
    monthly: ['1.950', '1.575', '1.250', '1.030'],
    daily:   ['1.100', '1.300', '1.150', '1.150'],
    rentalUrl: `${PARTNER_BASE}/urunler/nintendo-switch-oled-kirala`,
    highlights: [
      { t: '7" OLED',  d: 'canlı renkli ekran' },
      { t: '9 saat',   d: 'mobil pil ömrü' },
      { t: '320 g',    d: 'handheld ağırlık' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Ev salonundan etkinliğe, Joy-Con\'unu çıkar oyna.',
      paragraphs: [
        '7" OLED ekran ile renkler daha canlı, siyahlar daha derin. Çıkarılabilir Joy-Con kontrolcüler iki oyuncuya anında çoklu oyun sunar; dock\'la TV\'ye bağlayınca 1080p\'ye yükselir.',
        'Mario Kart, Smash Bros, Animal Crossing ve binlerce indie oyunla evrensel hediye seçimi. Etkinlik aktivasyonu ve çocuk partileri için kurulum gerektirmez.',
      ],
      useCases: [
        ['Etkinlik aktivasyon', '🎉'],
        ['Çocuk partisi', '🎂'],
        ['Ev salonu', '🛋️'],
      ],
    },
    glance: [
      '7" OLED · 1280×720 dokunmatik',
      'Çıkarılabilir Joy-Con kontrolcü',
      'TV modunda 1080p · handheld 720p',
      '9 saat batarya · USB-C şarj',
      'Built-in Ethernet (dock)',
      'Stereo hoparlör',
      '64GB dahili + microSD slot',
      'Wi-Fi · BT 4.1 · NFC (amiibo)',
    ],
    specs: [
      ['Marka', 'Nintendo'],          ['Model', 'Switch OLED'],
      ['Ekran', '7" OLED dokunmatik'], ['Çözünürlük', '1280×720 · 1080p (dock)'],
      ['CPU/GPU', 'NVIDIA Custom Tegra'], ['RAM', '4GB LPDDR4'],
      ['Depolama', '64GB + microSD'],  ['Pil ömrü', '4.5–9 saat'],
      ['Kontrolcü', '2× Joy-Con'],     ['Bağlantı', 'Wi-Fi · BT 4.1 · NFC · HDMI (dock)'],
      ['Ağırlık', '320 g (handheld)'], ['Boyut', '242 × 102 × 14 mm'],
    ],
    box: [
      'Nintendo Switch OLED konsol',
      'Switch dock (HDMI)',
      '2× Joy-Con (kırmızı/mavi)',
      'Joy-Con kavrama tutacağı',
      '2× Joy-Con bilek askısı',
      'HDMI kablosu',
      'AC adaptör',
      ...SHARED_BOX,
    ],
    glyph: 'switch',
    images: [`${CDN}/01KFJC3X2XSJGCS1C87T3EK1R0.webp`],
    tag: 'YENİ',
    priceFrom: '1.030',
    popular: true,
  },

  /* ─────────── Kamera & Aksesuar ─────────── */

  // 18 — DJI Osmo Pocket 3 Creator Combo
  {
    slug: 'dji-osmo-pocket-3',
    brand: 'DJI',
    name: 'DJI Osmo Pocket 3 Creator Combo',
    tagline: '1" sensör · 4K/120fps gimbal kamera',
    breadcrumbName: 'DJI Osmo Pocket 3 Creator',
    category: CAT.kamera.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/drone-ve-hobi-kameralari-kiralama`,
    series: 'Vlog kamera · DJI Osmo Pocket serisi',
    short: 'DJI Osmo Pocket 3, 1 inç CMOS sensör + 3 eksen mekanik gimbal + 4K/120 FPS video çekim. Vlogger, content creator, etkinlik kayıt için aylık 2.450 TL\'den kiralık premium gimbal kamera.',
    chips: ['1" CMOS', '4K 120 FPS', '3-eksen gimbal', '2" döner ekran', '166 dk pil', '10-bit D-Log M'],
    monthly: ['3.650', '3.350', '2.850', '2.450'],
    daily:   ['2.700', '3.050', '3.300', '3.300'],
    rentalUrl: `${PARTNER_BASE}/urunler/dji-osmo-pocket-3-creator-combo-kiralama`,
    highlights: [
      { t: '4K 120 FPS', d: 'cinema video' },
      { t: '1" sensör',  d: 'düşük ışık performans' },
      { t: '166 dk',     d: 'çekim süresi' },
      { t: '24 ay',      d: 'tam garanti' },
    ],
    description: {
      headline: 'Cebine sığan profesyonel video kamera.',
      paragraphs: [
        'DJI Osmo Pocket 3, 1 inç CMOS sensör + 3 eksen mekanik gimbal kombinasyonu ile cep telefonundan kat kat üstün video kalitesi sunar. 4K 120 FPS, 10-bit D-Log M renk profili, ActiveTrack 6.0 otomatik konu takibi.',
        '2 inç döner OLED ekran ile vlogger için ideal — yatay/dikey çekim arası saniyede geçiş. Creator Combo kiralama paketinde dış mikrofon (DJI Mic 2), uzaktan kumanda, yedek pil ve ND filtre seti dahil. Lansman çekimi, sosyal medya içerik üretimi, etkinlik kayıt için aylık 2.450 TL.',
      ],
      useCases: [
        ['Vlog & sosyal medya', '🎥'],
        ['Lansman çekimi', '🚀'],
        ['Etkinlik kayıt', '🎬'],
      ],
    },
    glance: [
      '1 inç CMOS sensör',
      '3 eksen mekanik gimbal',
      '4K 120 FPS slow motion',
      '10-bit D-Log M renk profili',
      'ActiveTrack 6.0 konu takibi',
      '2" döner OLED ekran',
      '166 dakika çekim süresi',
      'Creator Combo: DJI Mic 2 dahil',
    ],
    specs: [
      ['Marka', 'DJI'],                  ['Model', 'Osmo Pocket 3 Creator'],
      ['Sensör', '1 inç CMOS'],          ['Çözünürlük', '4K 120 FPS · FHD 240 FPS'],
      ['Gimbal', '3 eksen mekanik'],     ['Ekran', '2" döner OLED'],
      ['Renk', '10-bit D-Log M'],         ['Stabilizasyon', 'HorizonSteady'],
      ['Pil', '1300 mAh · 166 dk'],       ['Şarj', 'USB-C 35 dk hızlı'],
      ['Ağırlık', '179 g'],               ['Bellek', 'microSD (512 GB\'a kadar)'],
    ],
    box: [
      'DJI Osmo Pocket 3 ana ünite',
      'DJI Mic 2 kablosuz mikrofon',
      'Cebe takılabilir tripod',
      'ND filtre seti (ND8/ND16/ND32)',
      'Geniş açı lens',
      'Uzaktan kumanda + bilek strap',
      'Taşıma kılıfı',
      ...SHARED_BOX,
    ],
    glyph: 'camera',
    images: [`${CDN}/01KFNH0B4D3HGTA3VPEB2B20VE.jpg`],
    tag: null,
    priceFrom: '2.450',
  },

  /* ─────────── Telefon ─────────── */

  // 19 — Apple iPhone 17 Pro
  {
    slug: 'iphone-17-pro',
    brand: 'Apple',
    name: 'Apple iPhone 17 Pro 256GB',
    tagline: 'Kozmik Turuncu · A19 Pro · titanium',
    breadcrumbName: 'iPhone 17 Pro 256GB Kozmik Turuncu',
    category: CAT.telefon.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/iphone-telefonlar`,
    series: 'iPhone · Apple Pro serisi',
    short: 'Apple iPhone 17 Pro 256GB Kozmik Turuncu, A19 Pro çip + titanium gövde + 48MP triple kamera. Premium kullanım, sosyal medya çekimi, lansman vlog için aylık 7.500 TL\'den kiralık 2026\'nın en iddialı telefonu.',
    chips: ['A19 Pro', '256GB', 'Titanium', 'iOS 19', '48MP triple', 'ProMotion 120Hz'],
    monthly: ['12.450', '9.250', '8.000', '7.500'],
    daily:   ['9.000', '10.750', '10.750', '10.750'],
    rentalUrl: `${PARTNER_BASE}/urunler/apple-iphone-17-pro-256gb-turuncu-kiralama`,
    highlights: [
      { t: 'A19 Pro', d: '6-core neural engine' },
      { t: '48MP',    d: 'triple kamera + 5× zoom' },
      { t: '6.3"',    d: 'ProMotion 120Hz OLED' },
      { t: '24 ay',   d: 'tam garanti' },
    ],
    description: {
      headline: 'Lansman fotoğrafından kurumsal vloga, profesyonel ekipman.',
      paragraphs: [
        'A19 Pro çipinin 6-core neural engine\'i Final Cut Pro Camera, LumaFusion ve DaVinci ile cep boyutunda profesyonel video kayıt akışı kurar. ProRes 4K 60FPS video, 48MP RAW fotoğraf ve 5× optik zoom — telefon değil, ekipman.',
        'Titanium çerçeve ve seramik shield ekran, sahada darbeye dayanıklılık sağlar. iOS 19\'un Apple Intelligence özelliklerini tam kullanır.',
      ],
      useCases: [
        ['Lansman vlog', '🎥'],
        ['Sosyal medya', '📱'],
        ['Premium hediye', '🎁'],
      ],
    },
    glance: [
      'A19 Pro · 6-core CPU · 6-core neural engine',
      '6.3" ProMotion OLED · 120Hz · 2500 nit',
      '48MP triple kamera sistemi · 5× optik zoom',
      'ProRes 4K 60FPS video kayıt',
      'Titanium çerçeve · seramik shield',
      'USB-C 3.0 · MagSafe · Wi-Fi 7',
      'iOS 19 · Apple Intelligence',
      '256GB dahili depolama',
    ],
    specs: [
      ['Marka', 'Apple'],                  ['Model', 'iPhone 17 Pro'],
      ['Renk', 'Kozmik Turuncu'],          ['İşlemci', 'A19 Pro'],
      ['Depolama', '256GB'],               ['Ekran', '6.3" ProMotion OLED'],
      ['Tazeleme', '120 Hz'],               ['Parlaklık', '2500 nit (HDR)'],
      ['Arka kamera', '48 + 12 + 12 MP'],   ['Ön kamera', '12 MP TrueDepth'],
      ['Bağlantı', 'USB-C 3.0 · MagSafe · Wi-Fi 7 · BT 5.4 · 5G'],
      ['Ağırlık', '198 g'],
    ],
    box: [
      'iPhone 17 Pro 256GB',
      'USB-C / USB-C şarj kablosu (1m)',
      'Çıkartma seti',
      'SIM kart çıkarma aracı',
      ...SHARED_BOX,
    ],
    glyph: 'phone',
    images: [`${CDN}/01KFX4B3K7VKFEYHK6EDTX95N3.webp`],
    tag: 'YENİ',
    priceFrom: '7.500',
    popular: true,
  },

  /* ─────────── Bilgisayar & Tablet ─────────── */

  // 20 — Apple MacBook Neo 12" M4
  {
    slug: 'macbook-neo-m4',
    brand: 'Apple',
    name: 'Apple MacBook Neo 12" M4 Laptop',
    tagline: 'M4 çip · 16GB RAM · 512GB SSD',
    breadcrumbName: 'MacBook Neo 12" M4 16GB / 512GB',
    category: CAT.bilgi.name,
    categoryHref: `${PARTNER_BASE}/urunler/kategori/laptop-ve-dizustu-bilgisayar-kiralama`,
    series: 'Laptop · Apple silikon serisi',
    short: 'Apple MacBook Neo 12 inç, M4 çip + 16GB unified memory + 512GB SSD ile 1.1 kg taşınabilir performans. Sunum, video düzenleme, mobil ofis için aylık 2.450 TL\'den kiralık premium ultrabook.',
    chips: ['M4', '16GB RAM', '512GB SSD', '12" Retina', '18 saat pil', 'macOS Sonoma'],
    monthly: ['3.350', '3.150', '3.000', '2.850'],
    daily:   ['2.450', '2.850', '2.850', '2.850'],
    rentalUrl: `${PARTNER_BASE}/urunler/apple-macbook-neo-12-inc-m4-kiralama`,
    highlights: [
      { t: '18 saat', d: 'pil ömrü' },
      { t: 'M4',      d: '10-core CPU · 10-core GPU' },
      { t: '1.1 kg',  d: 'çantanda taşınır' },
      { t: '24 ay',   d: 'tam garanti' },
    ],
    description: {
      headline: 'Tek bir cihazla sunum salonundan mobil ofise.',
      paragraphs: [
        'M4 çipinin 10-core CPU ve 10-core GPU gücü ile 4K video düzenleme, çoklu uygulama akışı ve Xcode build\'lerini fan duymadan kaldırır. 16GB unified memory hafıza yönetimini sıfıra indirir; Final Cut, Logic Pro, Figma ve Chrome aynı anda açık kalsa bile akışkan.',
        'Düşük profilli alüminyum gövde ve 12" Retina ekran, çantanda yer kaplamadan günlük taşımana izin verir. 18 saat batarya ömrü ve MagSafe + USB-C şarj ile sahada güç sorunu yaşamazsın.',
      ],
      useCases: [
        ['Sunum & lansman', '◐'],
        ['Geçici ofis', '💼'],
        ['Video & kayıt', '🎬'],
      ],
    },
    glance: [
      'Apple M4 · 10-core CPU · 10-core GPU',
      '16GB unified memory',
      '512GB NVMe SSD',
      '12" Retina · True Tone · 500 nit',
      '18 saat pil · MagSafe + USB-C şarj',
      '1080p FaceTime kamera · 3-mic dizisi',
      'macOS Sonoma · Touch ID',
      '1.1 kg · cep boyutu çanta',
    ],
    specs: [
      ['Marka', 'Apple'],                  ['Model', 'MacBook Neo M4'],
      ['İşlemci', 'Apple M4 · 10-core'],   ['GPU', '10-core entegre'],
      ['Bellek', '16GB unified memory'],   ['Depolama', '512GB NVMe SSD'],
      ['Ekran', '12" Retina · 500 nit'],   ['Pil ömrü', '18 saat (video)'],
      ['İşletim sistemi', 'macOS Sonoma'], ['Bağlantı', '2× USB-C TB4 · MagSafe · Wi-Fi 6E · BT 5.3'],
      ['Ağırlık', '1.1 kg'],               ['Boyut', '280 × 200 × 11 mm'],
    ],
    box: [
      'MacBook Neo M4 cihazı',
      'USB-C / MagSafe 70W şarj adaptörü',
      'USB-C şarj kablosu (2m)',
      'Hızlı başlangıç kılavuzu',
      'AppleCare+ bilgi kartı',
      ...SHARED_BOX,
    ],
    glyph: 'laptop',
    images: [`${CDN}/01KKH1NMV49VNJE3J8ZC1BY2B4.jpg`],
    tag: 'YENİ',
    priceFrom: '2.450',
    popular: true,
  },
];

export const getProduct = (slug: string): ProductDetail | null =>
  PRODUCTS.find((p) => p.slug === slug) ?? null;

export const getRelated = (slug: string, n = 4): ProductDetail[] => {
  // İlk olarak aynı kategoride olanlar, sonra diğerleri.
  const me = PRODUCTS.find((p) => p.slug === slug);
  if (!me) return PRODUCTS.slice(0, n);
  const sameCat = PRODUCTS.filter((p) => p.slug !== slug && p.category === me.category);
  const others = PRODUCTS.filter((p) => p.slug !== slug && p.category !== me.category);
  return [...sameCat, ...others].slice(0, n);
};
