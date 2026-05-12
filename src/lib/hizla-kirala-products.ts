// Hizla Kirala detay sayfası için ürün verisi.
// 8 ürünün her birinin tam içeriği: chip'ler, fiyat ızgarası (1/3/6/12 ay ve
// 3/7/14/30 gün), açıklama, "bir bakışta" madde listesi, teknik özellik tablosu,
// kutu içeriği. Anker için sahnede 4-açılı SVG illustrasyon mevcut; diğer ürünler
// kiralık ürünler sayfasındaki silüet glyph'ini tek görselli galeride kullanır.

export type Glyph =
  | 'projector'
  | 'laptop'
  | 'console'
  | 'vr'
  | 'switch'
  | 'scooter'
  | 'vacuum'
  | 'phone';

export type ProductDetail = {
  slug: string;
  brand: string;
  /** h1 first line — örn. "Nebula Apollo" */
  name: string;
  /** h1 second line (kırmızı) — örn. "Taşınabilir Projeksiyon" */
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
    /** Kullanım senaryoları — [label, emoji] */
    useCases: Array<[label: string, emoji: string]>;
  };
  /** "Bir bakışta" madde listesi (8 madde) */
  glance: string[];
  /** Teknik özellikler — 12 K-V (çift sayı, grid 2 sütun için) */
  specs: Array<[label: string, value: string]>;
  /** Kutu içeriği listesi */
  box: string[];
  /** Galeride / related kartında gösterilen silüet glyph */
  glyph: Glyph;
  /** Anker için true; 4 farklı SVG (ProjectorArt/Top/Ports/Scene) gösterilir.
   *  Diğer ürünler için false; tek bir büyük silüet gösterilir, thumbnail yok. */
  hasDetailedGallery: boolean;
  /** "YENİ" rozet etiketi */
  tag: string | null;
  /** Ürün kartında / hızla-kirala sayfasında gösterilen "1.850" gibi başlangıç fiyatı */
  priceFrom: string;
};

const SHARED_BOX = [
  'on music kurulum kartı',
  'Hijyen sertifikası',
];

export const PRODUCTS: ProductDetail[] = [
  // 1 — Anker Nebula Apollo (tam detay, design birebir)
  {
    slug: 'anker-nebula-apollo',
    brand: 'Anker',
    name: 'Nebula Apollo',
    tagline: 'Taşınabilir Projeksiyon',
    breadcrumbName: 'Anker Nebula Apollo',
    category: 'Projeksiyon',
    categoryHref: 'https://hizlakirala.com/kategori/projeksiyon',
    series: 'Projeksiyon · Anker Nebula serisi',
    short: '200 ANSI lümen parlaklık, 4 saat pil ömrü ve dahili Android arayüzü. Cafe açılışları, mekan etkinlikleri ve geçici sinema kurulumları için ideal — kurulum gerektirmez, kutusundan çıkar açarsın.',
    chips: ['200 ANSI', '480p · HDR10', '4 saat pil', 'Android TV', 'Bluetooth hoparlör', 'HDMI · USB'],
    monthly: ['3.650', '2.850', '2.150', '1.850'],
    daily:   ['350',   '280',   '230',   '190'  ],
    rentalUrl: 'https://hizlakirala.com/urun/anker-nebula-apollo',
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
    hasDetailedGallery: true,
    tag: 'YENİ',
    priceFrom: '1.850',
  },

  // 2 — Apple MacBook Neo 12" M4
  {
    slug: 'macbook-neo-m4',
    brand: 'Apple',
    name: 'MacBook Neo 12" M4',
    tagline: 'Kompakt güçlü laptop',
    breadcrumbName: 'MacBook Neo M4',
    category: 'Bilgisayar & Tablet',
    categoryHref: 'https://hizlakirala.com/kategori/bilgisayar',
    series: 'Bilgisayar · Apple silikon serisi',
    short: 'Apple M4 çipi, 16GB unified memory ve 512GB SSD. Sunum, video düzenleme ve mobil iş için 1.1 kg taşınabilir performans — 18 saat batarya ile gün boyu sahada.',
    chips: ['M4', '16GB RAM', '512GB SSD', '12" Retina', '18 saat pil', 'macOS Sonoma'],
    monthly: ['5.450', '4.450', '3.350', '2.450'],
    daily:   ['750',   '550',   '420',   '320'  ],
    rentalUrl: 'https://hizlakirala.com/urun/macbook-neo-m4',
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
    hasDetailedGallery: false,
    tag: 'YENİ',
    priceFrom: '2.450',
  },

  // 3 — Sony PlayStation 5 Slim 1TB
  {
    slug: 'playstation-5-slim',
    brand: 'Sony',
    name: 'PlayStation 5 Slim',
    tagline: '1TB · 4K HDR konsol',
    breadcrumbName: 'PlayStation 5 Slim',
    category: 'Oyun & Konsol',
    categoryHref: 'https://hizlakirala.com/kategori/oyun-konsol',
    series: 'Oyun & Konsol · PlayStation 5 serisi',
    short: '4K 120 FPS, ray tracing ve özel SSD ile yeni nesil oyun deneyimi. Salonunda sinema kalitesinde — DualSense haptik geri bildirim ile her tetik bir ses, her motor bir nefes.',
    chips: ['1TB SSD', '4K 120Hz', 'Ray tracing', 'Tempest 3D', 'DualSense', '8K Ready'],
    monthly: ['3.450', '2.850', '2.250', '1.850'],
    daily:   ['450',   '350',   '290',   '240'  ],
    rentalUrl: 'https://hizlakirala.com/urun/playstation-5-slim',
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
        'DualSense kontrolcüsünün uyarlanabilir tetikleyicileri ve haptik geri bildirimi her sahneyi parmak uçlarınla hissetmeni sağlar. Tempest 3D ses motoru ile 360° mekansal ses — kulaklıkla bile odanı saran bir deneyim.',
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
      'DualSense uyarlanabilir tetikleyici',
      'Tempest 3D mekansal ses motoru',
      'Wi-Fi 6 · BT 5.1 · USB-C ön panel',
      '4K Blu-ray sürücü dahil',
      '8K çıkış desteği (uyumlu içerikle)',
    ],
    specs: [
      ['Marka', 'Sony'],                  ['Model', 'PlayStation 5 Slim'],
      ['Depolama', '1TB NVMe SSD'],       ['CPU', 'AMD Zen 2 8-core 3.5GHz'],
      ['GPU', 'AMD RDNA 2 · 10.3 TF'],    ['Çözünürlük', '4K 120Hz · 8K hazır'],
      ['Ses', 'Tempest 3D Audio'],         ['Kontrolcü', 'DualSense (1 adet)'],
      ['Optik sürücü', '4K UHD Blu-ray'],  ['Bağlantı', 'HDMI 2.1 · USB-C/A · Wi-Fi 6'],
      ['Ağırlık', '3.2 kg'],               ['Boyut', '358 × 216 × 80 mm'],
    ],
    box: [
      'PlayStation 5 Slim konsol',
      'DualSense kablosuz kontrolcü',
      'HDMI 2.1 kablosu',
      'Güç kablosu',
      'USB-C şarj kablosu',
      'Hızlı başlangıç kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'console',
    hasDetailedGallery: false,
    tag: null,
    priceFrom: '1.850',
  },

  // 4 — Meta Quest 3 128GB
  {
    slug: 'meta-quest-3',
    brand: 'Meta',
    name: 'Quest 3 VR',
    tagline: 'Karma gerçeklik gözlüğü · 128GB',
    breadcrumbName: 'Meta Quest 3 128GB',
    category: 'VR & Sanal Gerçeklik',
    categoryHref: 'https://hizlakirala.com/kategori/vr',
    series: 'VR · Meta Quest serisi',
    short: 'Snapdragon XR2 Gen 2 işlemcisi, 4K LCD panel ve Touch Plus kontrolcüleriyle karma gerçeklik (passthrough). Lansman demosundan eğitim oturumuna kadar her senaryoya hazır.',
    chips: ['Karma gerçeklik', '4K LCD', '128GB', 'Snapdragon XR2', 'Touch Plus', 'Wi-Fi 6E'],
    monthly: ['3.450', '2.850', '2.450', '2.300'],
    daily:   ['400',   '320',   '280',   '250'  ],
    rentalUrl: 'https://hizlakirala.com/urun/meta-quest-3',
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
      'Glasses spacer (gözlük adaptörü)',
      'Hızlı başlangıç kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'vr',
    hasDetailedGallery: false,
    tag: 'YENİ',
    priceFrom: '2.300',
  },

  // 5 — Apple iPhone 17 Pro 256GB
  {
    slug: 'iphone-17-pro',
    brand: 'Apple',
    name: 'iPhone 17 Pro',
    tagline: '256GB · Kozmik Turuncu',
    breadcrumbName: 'iPhone 17 Pro 256GB',
    category: 'Telefon',
    categoryHref: 'https://hizlakirala.com/kategori/telefon',
    series: 'Telefon · iPhone Pro serisi',
    short: 'A19 Pro çipi, titanium gövde ve 48MP triple kamera sistemi. Lansman vlogu, kurumsal sosyal medya içeriği ve premium hediye senaryosu için 256GB depolama, ProMotion 120Hz ekran.',
    chips: ['A19 Pro', '256GB', 'Titanium', 'iOS 19', '48MP triple', 'ProMotion 120Hz'],
    monthly: ['12.450', '10.450', '8.950', '7.500'],
    daily:   ['1.250',  '950',    '780',   '650'  ],
    rentalUrl: 'https://hizlakirala.com/urun/iphone-17-pro',
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
      'Hızlı başlangıç kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'phone',
    hasDetailedGallery: false,
    tag: 'YENİ',
    priceFrom: '7.500',
  },

  // 6 — Nintendo Switch OLED
  {
    slug: 'nintendo-switch-oled',
    brand: 'Nintendo',
    name: 'Switch OLED Model',
    tagline: '7" OLED · TV + handheld',
    breadcrumbName: 'Nintendo Switch OLED',
    category: 'Handheld Oyun',
    categoryHref: 'https://hizlakirala.com/kategori/handheld',
    series: 'Handheld · Nintendo Switch serisi',
    short: '7" OLED ekran, çıkarılabilir Joy-Con kontrolcüleri ve dock\'lu TV bağlantısı. Etkinlik atriumundan ev salonuna, partilerden çocuk hediyesine kadar evrensel oyun deneyimi.',
    chips: ['7" OLED', '64GB', 'Joy-Con', 'HDMI dock', '9 saat pil', 'Online ready'],
    monthly: ['1.950', '1.450', '1.180', '1.030'],
    daily:   ['250',   '190',   '160',   '140'  ],
    rentalUrl: 'https://hizlakirala.com/urun/nintendo-switch-oled',
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
    hasDetailedGallery: false,
    tag: null,
    priceFrom: '1.030',
  },

  // 7 — Xiaomi Mi Pro 4 Scooter
  {
    slug: 'xiaomi-mi-pro-4',
    brand: 'Xiaomi',
    name: 'Mi Pro 4 Scooter',
    tagline: 'Elektrikli şehir içi scooter',
    breadcrumbName: 'Xiaomi Mi Pro 4',
    category: 'Mikro Mobilite',
    categoryHref: 'https://hizlakirala.com/kategori/mobilite',
    series: 'Mikro Mobilite · Xiaomi Mi serisi',
    short: '350W motor, 45 km menzil ve 25 km/h hız limiti ile şehir içi günlük ulaşımın kolay yolu. Geçici staj projesi, kısa kiralık ev konaklaması veya etkinlik ekibi için ideal.',
    chips: ['45 km menzil', '25 km/h', '350W motor', 'IP54', 'Disk fren', 'Foldable'],
    monthly: ['3.250', '2.850', '2.550', '2.350'],
    daily:   ['400',   '320',   '280',   '250'  ],
    rentalUrl: 'https://hizlakirala.com/urun/xiaomi-mi-pro-4',
    highlights: [
      { t: '45 km',    d: 'tek şarjla menzil' },
      { t: '25 km/h',  d: 'üst hız limiti' },
      { t: '12 kg',    d: 'katlanabilir gövde' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Şehirde günlük ulaşım, etkinlik alanında hızlı transfer.',
      paragraphs: [
        '350W güçlü motor ve 474Wh batarya ile 45 km menzil — Beşiktaş\'tan Levent\'e gidip dönecek kadar. Üç sürüş modu (eco / standart / sport) ile bataryanı planlayabilirsin.',
        'Saniyeler içinde katlanır, BTS metrosuna alabilir, otomobil bagajına koyabilirsin. Disk fren + ABS rejeneratif fren ile güvenli durma. IP54 sertifikası ile hafif yağmurda da kullanılabilir.',
      ],
      useCases: [
        ['Şehir içi ulaşım', '🏙️'],
        ['Etkinlik alanı', '🎪'],
        ['Geçici konaklama', '🏠'],
      ],
    },
    glance: [
      '350W güçlü motor (peak 700W)',
      '474Wh lityum-iyon batarya',
      '45 km menzil (eco modunda)',
      '25 km/h üst hız',
      'Disk fren + ABS rejeneratif',
      '10" şişme tubeless lastik',
      'IP54 su dayanımı',
      '12 kg · saniyede katlanır',
    ],
    specs: [
      ['Marka', 'Xiaomi'],            ['Model', 'Mi Pro 4'],
      ['Motor', '350W (peak 700W)'],  ['Batarya', '474Wh lityum-iyon'],
      ['Menzil', '45 km (eco)'],      ['Üst hız', '25 km/h'],
      ['Tırmanma', '20% eğim'],        ['Şarj süresi', '8–9 saat'],
      ['Frenler', 'Disk + ABS'],       ['Lastik', '10" tubeless'],
      ['Ağırlık', '12 kg'],             ['Boyut', '1130 × 430 × 1180 mm'],
    ],
    box: [
      'Mi Pro 4 scooter',
      'Şarj adaptörü',
      'Vida + alet kiti',
      'Kullanım kılavuzu (TR)',
      'Garanti belgesi',
      ...SHARED_BOX,
    ],
    glyph: 'scooter',
    hasDetailedGallery: false,
    tag: null,
    priceFrom: '2.350',
  },

  // 8 — Dyson V15 Detect
  {
    slug: 'dyson-v15-detect',
    brand: 'Dyson',
    name: 'V15 Detect',
    tagline: 'Kablosuz dik süpürge · lazer',
    breadcrumbName: 'Dyson V15 Detect',
    category: 'Akıllı Ev',
    categoryHref: 'https://hizlakirala.com/kategori/akilli-ev',
    series: 'Akıllı Ev · Dyson V serisi',
    short: 'Lazer toz görüntüleme, 60 dakika pil ömrü ve HEPA filtrasyon ile evin her köşesini görür ve temizler. Kısa kiralık ev, etkinlik öncesi mekan temizliği veya hediye senaryosu için.',
    chips: ['Lazer detect', '60 dk pil', '0.76L hazne', 'HEPA', '5 stage filtration', 'LCD ekran'],
    monthly: ['2.850', '2.350', '1.950', '1.600'],
    daily:   ['350',   '270',   '230',   '200'  ],
    rentalUrl: 'https://hizlakirala.com/urun/dyson-v15-detect',
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
    hasDetailedGallery: false,
    tag: 'YENİ',
    priceFrom: '1.600',
  },
];

export const getProduct = (slug: string): ProductDetail | null =>
  PRODUCTS.find((p) => p.slug === slug) ?? null;

export const getRelated = (slug: string, n = 4): ProductDetail[] =>
  PRODUCTS.filter((p) => p.slug !== slug).slice(0, n);
