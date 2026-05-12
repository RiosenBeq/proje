// Hizla Kirala ürün detay sayfası için ürün verisi.
// Tüm URL'ler ve kategori slug'ları hizlakirala.com canlı yapısıyla eşleşir.
// Ürün görselleri public/assets/hizla-kirala/<slug>.{jpg,png} altında.

export type Glyph =
  | 'projector'
  | 'laptop'
  | 'console'
  | 'phone'
  | 'wand'        // dyson airwrap, simart kendini
  | 'camera'      // kamera & aksesuar
  | 'bottle'      // anne & bebek
  | 'vacuum';     // ev aletleri

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
    useCases: Array<[label: string, emoji: string]>;
  };
  /** "Bir bakışta" madde listesi (8 madde) */
  glance: string[];
  /** Teknik özellikler — 12 K-V (çift sayı, grid 2 sütun için) */
  specs: Array<[label: string, value: string]>;
  /** Kutu içeriği listesi */
  box: string[];
  /** Ürün kart fallback'i için silüet glyph (sadece görsel yüklenmemişse) */
  glyph: Glyph;
  /** Public asset path(ler)i — galeri sıralı çıkar. İlk dosya kartlarda kullanılır. */
  images: string[];
  /** "YENİ" rozet etiketi */
  tag: string | null;
  /** "1.850" gibi başlangıç fiyatı (en uzun süredeki en düşük aylık) */
  priceFrom: string;
};

const PARTNER_BASE = 'https://www.hizlakirala.com';

const SHARED_BOX = [
  'on music kurulum kartı',
  'Hijyen sertifikası',
];

export const PRODUCTS: ProductDetail[] = [
  // 1 — Anker Nebula Apollo (Kamera & Aksesuar)
  {
    slug: 'anker-nebula-apollo',
    brand: 'Anker',
    name: 'Nebula Apollo',
    tagline: 'Taşınabilir Projeksiyon',
    breadcrumbName: 'Anker Nebula Apollo',
    category: 'Kamera & Aksesuar',
    categoryHref: `${PARTNER_BASE}/urunler/kategori/kamera-ve-aksesuar-kiralama`,
    series: 'Projeksiyon · Anker Nebula serisi',
    short: '200 ANSI lümen parlaklık, 4 saat pil ömrü ve dahili Android arayüzü. Cafe açılışları, mekan etkinlikleri ve geçici sinema kurulumları için ideal — kurulum gerektirmez, kutusundan çıkar açarsın.',
    chips: ['200 ANSI', '480p · HDR10', '4 saat pil', 'Android TV', 'Bluetooth hoparlör', 'HDMI · USB'],
    monthly: ['3.650', '2.850', '2.150', '1.850'],
    daily:   ['350',   '280',   '230',   '190'  ],
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
    images: ['/assets/hizla-kirala/anker-nebula-apollo.png'],
    tag: 'YENİ',
    priceFrom: '1.850',
  },

  // 2 — Apple MacBook Neo 12" M4 (Bilgisayar & Tablet)
  {
    slug: 'macbook-neo-m4',
    brand: 'Apple',
    name: 'MacBook Neo 12" M4',
    tagline: 'Kompakt güçlü laptop',
    breadcrumbName: 'MacBook Neo M4',
    category: 'Bilgisayar & Tablet',
    categoryHref: `${PARTNER_BASE}/urunler/kategori/bilgisayar-tablet-kiralama`,
    series: 'Bilgisayar · Apple silikon serisi',
    short: 'Apple M4 çipi, 16GB unified memory ve 512GB SSD. Sunum, video düzenleme ve mobil iş için 1.1 kg taşınabilir performans — 18 saat batarya ile gün boyu sahada.',
    chips: ['M4', '16GB RAM', '512GB SSD', '12" Retina', '18 saat pil', 'macOS Sonoma'],
    monthly: ['5.450', '4.450', '3.350', '2.450'],
    daily:   ['750',   '550',   '420',   '320'  ],
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
    images: ['/assets/hizla-kirala/macbook-neo-m4.jpg'],
    tag: 'YENİ',
    priceFrom: '2.450',
  },

  // 3 — Sony PlayStation 5 Slim 1TB (Oyun & Hobi)
  {
    slug: 'playstation-5-slim',
    brand: 'Sony',
    name: 'PlayStation 5 Slim',
    tagline: '1TB · 4K HDR konsol',
    breadcrumbName: 'PlayStation 5 Slim',
    category: 'Oyun & Hobi',
    categoryHref: `${PARTNER_BASE}/urunler/kategori/oyun-ve-hobi-kiralama`,
    series: 'Oyun & Konsol · PlayStation 5 serisi',
    short: '4K 120 FPS, ray tracing ve özel SSD ile yeni nesil oyun deneyimi. Salonunda sinema kalitesinde — DualSense haptik geri bildirim ile her tetik bir ses, her motor bir nefes.',
    chips: ['1TB SSD', '4K 120Hz', 'Ray tracing', 'Tempest 3D', '2× DualSense', '8K Ready'],
    monthly: ['3.450', '2.850', '2.250', '1.850'],
    daily:   ['450',   '350',   '290',   '240'  ],
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
      'Hızlı başlangıç kılavuzu',
      ...SHARED_BOX,
    ],
    glyph: 'console',
    images: ['/assets/hizla-kirala/playstation-5-slim.png'],
    tag: null,
    priceFrom: '1.850',
  },

  // 4 — Dyson Airwrap ID Ceramic Pink (Şımart Kendini)
  {
    slug: 'dyson-airwrap',
    brand: 'Dyson',
    name: 'Airwrap ID',
    tagline: 'Ceramic Pink · Çoklu saç şekillendirici',
    breadcrumbName: 'Dyson Airwrap ID Ceramic Pink',
    category: 'Şımart Kendini',
    categoryHref: `${PARTNER_BASE}/urunler/kategori/simart-kendini`,
    series: 'Saç bakımı · Dyson Airwrap serisi',
    short: 'Dyson Coanda hava akımı teknolojisiyle saçı aşırı ısıdan korur. Bukle, dalga, düzleştirme, hacim — 5 aksesuar ile tek cihazda profesyonel kuaför düzeyinde sonuç. Düğün, davet ve özel etkinlik için ideal.',
    chips: ['Coanda hava akımı', '6 aksesuar', '4 ısı kademesi', '3 hız', 'Bluetooth bağlantı', 'Ceramic Pink'],
    monthly: ['2.850', '2.350', '1.950', '1.600'],
    daily:   ['400',   '320',   '270',   '230'  ],
    rentalUrl: `${PARTNER_BASE}/urunler/dyson-airwrap-id-ceramic-pink-kiralama`,
    highlights: [
      { t: '6 aksesuar', d: 'tek cihazda 6 stil' },
      { t: 'Coanda',     d: 'aşırı ısı yok' },
      { t: '110.000 RPM',d: 'V9 dijital motor' },
      { t: '24 ay',      d: 'tam garanti' },
    ],
    description: {
      headline: 'Düğün, davet, özel etkinlikler için profesyonel saç şekillendirici.',
      paragraphs: [
        'Dyson Airwrap ID, patentli Coanda hava akımı sayesinde saçı 150°C üstüne ısıtmadan şekillendirir — diğer şekillendiricilerin aksine ısıyla saçı yakmaz. 6 aksesuar (uzun bukle silindiri, kısa bukle silindiri, sıcak hava brushu, yuvarlak fırça, ön kurutma fırçası, düzleştirici) tek cihazda profesyonel kuaför düzeyinde sonuç verir.',
        'Bluetooth ile Dyson MyDyson uygulamasından özel saç profili kaydedebilir, sıklıkla kullandığın aksesuara göre ısı ve hız kombinasyonlarını otomatik geri çağırabilirsin. Düğün öncesi gelin hazırlığı, podcast / lansman gecesi, fotoğraf çekimi gibi tek seferlik kullanım senaryoları için ideal.',
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
      '4 ısı kademesi (cool, 60°C, 80°C, 100°C)',
      '3 hız ayarı',
      '6 aksesuar kutu içinde dahil',
      'Bluetooth + MyDyson app entegrasyonu',
      'IQ profil ile saç tipi kayıt',
      'Çantada taşınabilir saklama kutusu',
    ],
    specs: [
      ['Marka', 'Dyson'],                  ['Model', 'Airwrap ID'],
      ['Renk', 'Ceramic Pink'],            ['Motor', 'V9 dijital · 110.000 RPM'],
      ['Isı ayarı', '4 kademe (cool–100°C)'], ['Hız', '3 kademe'],
      ['Bağlantı', 'Bluetooth + MyDyson app'], ['Voltaj', '230V · 50/60 Hz'],
      ['Kablo uzunluğu', '2.7 m'],         ['Aksesuar', '6 adet (kutu dahil)'],
      ['Ağırlık', '0.61 kg'],              ['Boyut', '278 × 41 × 41 mm'],
    ],
    box: [
      'Dyson Airwrap ID ana gövde',
      '40mm uzun bukle silindiri',
      '30mm kısa bukle silindiri',
      'Sıcak hava brushu (yuvarlak)',
      'Yumuşak fırça (saç düzleştirme)',
      'Ön kurutma fırçası',
      'Çift sıralı saç şekillendirici fırça',
      'Saklama / taşıma kutusu',
      ...SHARED_BOX,
    ],
    glyph: 'wand',
    images: ['/assets/hizla-kirala/dyson-airwrap.png'],
    tag: 'YENİ',
    priceFrom: '1.600',
  },

  // 5 — Samsung Galaxy A36 5G 256GB Siyah (Bilgisayar & Tablet)
  {
    slug: 'samsung-galaxy-a36',
    brand: 'Samsung',
    name: 'Galaxy A36 5G',
    tagline: '256GB · Siyah · Akıllı telefon',
    breadcrumbName: 'Samsung Galaxy A36 5G 256GB',
    category: 'Bilgisayar & Tablet',
    categoryHref: `${PARTNER_BASE}/urunler/kategori/bilgisayar-tablet-kiralama`,
    series: 'Telefon · Samsung Galaxy A serisi',
    short: '6.7 inç Super AMOLED ekran, 256GB depolama ve 5G bağlantı. Üçlü arka kamera, 5000 mAh batarya ve One UI 7 ile günlük kullanım, sosyal medya ve mobil ödeme için ideal kiralık telefon.',
    chips: ['6.7" AMOLED', '256GB', '5G', 'One UI 7', '50MP triple', '5000 mAh'],
    monthly: ['2.250', '1.850', '1.450', '1.200'],
    daily:   ['320',   '250',   '210',   '180'  ],
    rentalUrl: `${PARTNER_BASE}/urunler/samsung-galaxy-a36-5g-256gb-siyah-kiralama`,
    highlights: [
      { t: '6.7"',     d: 'Super AMOLED 120Hz' },
      { t: '256GB',    d: 'dahili depolama' },
      { t: '5000 mAh', d: '2 günlük pil' },
      { t: '24 ay',    d: 'tam garanti' },
    ],
    description: {
      headline: 'Geçici telefon ihtiyacın için 5G destekli akıllı çözüm.',
      paragraphs: [
        'Samsung Galaxy A36 5G, 6.7 inç Super AMOLED ekranı ve 120Hz tazeleme hızıyla pürüzsüz bir kullanım deneyimi sunar. 256GB dahili depolama ve microSD genişletme imkanıyla foto / video birikimine yer açar; 5G ile yurtdışı veya tatil senaryosunda hızlı veri.',
        '50MP üçlü arka kamera (geniş + ultra geniş + makro) sosyal medya, kurumsal foto / video çekim için yeterli; 13MP ön kamera selfie ve görüntülü görüşme için. 5000 mAh batarya 2 günlük tipik kullanıma yeter; 25W hızlı şarj desteklenir.',
      ],
      useCases: [
        ['Kısa kiralık konaklama', '🏠'],
        ['Yurtdışı / tatil', '✈️'],
        ['İkinci telefon', '📱'],
      ],
    },
    glance: [
      '6.7" Super AMOLED 120Hz · FHD+',
      'Exynos 1380 8-core işlemci',
      '6GB RAM · 256GB dahili depolama',
      'microSD destekli (1TB\'a kadar)',
      '50MP triple kamera + 13MP ön',
      '5000 mAh batarya · 25W hızlı şarj',
      '5G / Wi-Fi 5 / BT 5.3 / NFC',
      'Samsung Knox güvenlik · One UI 7',
    ],
    specs: [
      ['Marka', 'Samsung'],                ['Model', 'Galaxy A36 5G'],
      ['Renk', 'Siyah'],                   ['İşlemci', 'Exynos 1380 8-core'],
      ['RAM', '6 GB'],                     ['Depolama', '256 GB + microSD'],
      ['Ekran', '6.7" Super AMOLED'],      ['Tazeleme', '120 Hz'],
      ['Arka kamera', '50 + 8 + 5 MP'],    ['Ön kamera', '13 MP'],
      ['Batarya', '5000 mAh · 25W'],       ['Bağlantı', '5G · Wi-Fi 5 · BT 5.3 · NFC'],
    ],
    box: [
      'Samsung Galaxy A36 5G 256GB',
      'USB-C / USB-C şarj kablosu',
      'SIM kart çıkarma aracı',
      'Hızlı başlangıç kılavuzu',
      'Garanti belgesi',
      ...SHARED_BOX,
    ],
    glyph: 'phone',
    images: ['/assets/hizla-kirala/samsung-galaxy-a36.png'],
    tag: null,
    priceFrom: '1.200',
  },
];

export const getProduct = (slug: string): ProductDetail | null =>
  PRODUCTS.find((p) => p.slug === slug) ?? null;

export const getRelated = (slug: string, n = 4): ProductDetail[] => {
  const others = PRODUCTS.filter((p) => p.slug !== slug);
  return others.slice(0, n);
};
