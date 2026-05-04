export type DisciplineCls = 'red' | 'gold' | 'indigo' | 'teal' | 'plum' | 'olive';
export type DiscSlug = 'ses' | 'akustik' | 'led' | 'studio' | 'konferans' | 'anons';
export type VenueSlug = 'restoran' | 'otel' | 'sahne' | 'studio' | 'konferans';

export type Discipline = {
  slug: DiscSlug;
  cls: DisciplineCls;
  short: string;
  name: string;
  sub: string;
  hz: string;
  bars: number[];
  hero: { eyebrow: string; title: string; titleEm: string; titleTail?: string; lead: string };
  scope: string[];
  metrics: Array<[label: string, value: string]>;
  process: Array<[step: string, deliv: string]>;
  brands: string[];
  faq: Array<[string, string]>;
  related: DiscSlug[];
};

export type Venue = {
  slug: VenueSlug;
  name: string;
  short: string;
  hero: { eyebrow: string; title: string; titleEm: string; titleTail?: string; lead: string };
  problems: Array<[title: string, desc: string]>;
  goals: Array<[label: string, value: string]>;
  systemSpec: Array<[label: string, value: string]>;
  sampleProjects: string[];
  faq: Array<[string, string]>;
  related: { disciplines: DiscSlug[]; venues: VenueSlug[] };
};

export type Project = {
  slug: string;
  name: string;
  city: string;
  year: string;
  venueType: VenueSlug;
  disciplines: DisciplineCls[];
  hero: { image: string; eyebrow: string; lead: string };
  gallery: string[];
  specs: Array<[label: string, value: string]>;
  beforeAfter: Array<[metric: string, before: string, after: string, target: string]>;
  story: { problem: string; approach: string; outcome: string };
  brandsUsed: string[];
  related: string[];
};

export type FaqGroup = { id: string; name: string; items: Array<[string, string]> };

export type DiscTagCls = DisciplineCls;
export const DISC_TAG: Record<DiscSlug, [DisciplineCls, string]> = {
  ses: ['red', 'SES'],
  akustik: ['gold', 'AKUSTİK'],
  led: ['indigo', 'LED'],
  studio: ['teal', 'STÜDYO'],
  konferans: ['plum', 'KONFERANS'],
  anons: ['olive', 'VA'],
};

/* =========================================================
   DISCIPLINES
   ========================================================= */
export const DISCIPLINES: Discipline[] = [
  {
    slug: 'ses',
    cls: 'red',
    short: 'SES',
    name: 'Ses Sistemi',
    sub: 'Zonlu PA · DSP · Dante',
    hz: '40 Hz – 18 kHz',
    bars: [3, 5, 7, 8, 10, 12, 11, 9, 7, 5, 4],
    hero: {
      eyebrow: 'SES SİSTEMİ · 01',
      title: 'Profesyonel',
      titleEm: 'ses sistemi',
      titleTail: ' mühendisliği.',
      lead: 'Restoran, otel, sahne ve kurumsal mekânlar için zonlu PA mimarisi, marka bağımsız ürün seçimi, DSP kalibrasyonu ve Dante / 70V dağıtım ağı. 82–105 dB SPL hedef bandında, ölçüme dayalı teslim.',
    },
    scope: [
      'Çok zonlu hoparlör mimarisi (tavan + duvar + sahne)',
      'DSP & matrix routing — Q-SYS, BSS Soundweb, Symetrix',
      'EQ + crossover + delay kalibrasyonu, in-situ ölçüm',
      'Dante / AES67 / AVB ağı, 70V/100V hat dağıtımı',
      'Class-D çok kanallı amfi zinciri (Powersoft, Lab.gruppen, Crown)',
      'Cardioid sub array konfigürasyonu — sahne arkası kontrolü',
      'Line array tasarımı, MAPP/Soundvision simülasyonu',
      'Çok zonlu kontrol paneli ve kullanıcı arayüzü',
      'Mevcut sistem audit + retrofit + DSP yenileme',
      'Yıllık bakım + uzaktan teşhis kontratı',
    ],
    metrics: [
      ['SPL HEDEF', '82–105 dB'],
      ['STI HEDEF', '≥ 0.62'],
      ['ZON SAYISI', '2–24'],
      ['LATENCY', '< 5 ms (Dante)'],
      ['ÖRNEKLEME', '96 kHz Native'],
      ['DİSPERSİYON', '110° × 10°'],
    ],
    process: [
      ['Saha keşfi', 'Mekân ölçü, kullanım profili'],
      ['Simülasyon', 'MAPP/Soundvision/EASE'],
      ['Ürün seçimi', 'Marka bağımsız + bütçe'],
      ['Montaj & devreye alma', 'Rigging + ağ'],
      ['Kalibrasyon', 'In-situ DSP tuning + rapor'],
    ],
    brands: ['d&b audiotechnik', 'L-Acoustics', 'Meyer Sound', 'Bose Pro', 'JBL Pro', 'Pioneer Pro Audio', 'Powersoft', 'Lab.gruppen', 'Crown', 'Symetrix', 'BSS', 'Q-SYS'],
    faq: [
      ['Mevcut hoparlörlerimi yeniden kullanabilir miyiz?', 'Mevcut sistem audit\'i ücretsizdir; ölçüm sonrası hangi bileşenlerin korunup hangilerinin değişmesi gerektiğini raporluyoruz.'],
      ['Line array mı point source mu?', 'Mekân hacmi, dinleme mesafesi ve mimari kısıtlara göre simülasyon yapıp öneririz; orta ölçek (≤ 800 kişi) genelde yüksek-Q point source ile çözülür.'],
      ['Dante şart mı?', 'Çok zonlu (4+) ve uzun mesafe dağıtımda Dante önerilir; küçük restoranlar için geleneksel 70V daha ekonomiktir.'],
      ['Kalibrasyondan sonra ses tekrar bozulur mu?', 'Yapısal değişiklik olmadıkça hayır. Mevsimsel bakım için 6 ayda bir kontrol uyguluyoruz.'],
    ],
    related: ['akustik', 'studio', 'konferans'],
  },
  {
    slug: 'akustik',
    cls: 'gold',
    short: 'AKUSTİK',
    name: 'Akustik Tasarım',
    sub: 'RT60 · STI · Modal Kontrol',
    hz: '63 Hz – 4 kHz',
    bars: [10, 11, 12, 11, 9, 7, 6, 5, 4, 3, 2],
    hero: {
      eyebrow: 'AKUSTİK TASARIM · 02',
      title: 'Akustik',
      titleEm: 'mühendislik',
      titleTail: ' ve tasarım.',
      lead: 'RT60, STI, EDT hedefli panel ve diffüzör mimarisi. Modal kontrol, in-situ ölçüm, hibrit polimer panel sistemleri ve RFZ kontrol odası tasarımı. Kalibre B&K mikrofonla saha doğrulaması.',
    },
    scope: [
      'Akustik ölçüm — RT60, EDT, STI, NC, C50, D50',
      'Modal analiz ve düşük frekans kontrolü (bass trap)',
      'Diffüzör yerleşimi (Schroeder, QRD, primitive root)',
      'Akustik panel tasarımı — hibrit polimer, mineral yün, perforated',
      'Tavan ve duvar absorpsiyon mimarisi',
      'Kayan kat (floating floor) izolasyon sistemi',
      'RFZ (Reflection Free Zone) kontrol odası tasarımı',
      'CAD overlay ve 3D simülasyon (EASE, ODEON)',
      'Hedef-fiili karşılaştırma raporu',
      'Mevcut mekân akustik audit + iyileştirme önerisi',
    ],
    metrics: [
      ['RT60 HEDEF', '0.28 – 1.4 s'],
      ['STI HEDEF', '≥ 0.62'],
      ['NC HEDEF', 'NC-15 / NC-30'],
      ['İZOLASYON', '−45 / −65 dB STC'],
      ['C50 HEDEF', '≥ 4 dB'],
      ['MATERYAL', 'Hibrit polimer + mineral yün'],
    ],
    process: [
      ['Saha akustik ölçüm', 'B&K mikrofon + SMAART'],
      ['Modal analiz', 'CAD overlay + simülasyon'],
      ['Panel & diffüzör tasarımı', 'Yerleşim planı'],
      ['Üretim & montaj', 'Atölye + saha'],
      ['Final ölçüm + rapor', 'Hedef vs fiili'],
    ],
    brands: ['Vicoustic', 'GIK Acoustics', 'RPG Diffusor Systems', 'Auralex', 'Primacoustic', 'Knauf', 'Rockwool', 'Owens Corning'],
    faq: [
      ['Akustik panel görsel olarak nasıl görünür?', 'Kumaş kaplama, ahşap kafes, perforated metal veya boyanabilir yüzeyle mimariye entegre edilir; hangi varyantın gerektiği projeye özeldir.'],
      ['RT60 ne kadar düşük olmalı?', 'Kullanım amacına bağlı — restoran 0.6–0.9 s, stüdyo 0.25–0.35 s, konferans 0.5–0.7 s arası tipiktir.'],
      ['Akustik ölçüm ne kadar sürer?', 'Orta ölçekli mekân için 4–6 saat saha çalışması + 2–3 gün analiz.'],
      ['İnşaat aşamasında mı sonradan mı yapılmalı?', 'İnşaat aşamasında entegre etmek hem maliyeti düşürür hem performansı yükseltir; tamamlanmış mekânlar için retrofit çözümlerimiz var.'],
    ],
    related: ['ses', 'studio', 'konferans'],
  },
  {
    slug: 'led',
    cls: 'indigo',
    short: 'LED',
    name: 'LED Ekran & Video',
    sub: 'Pixel Pitch · Processor',
    hz: 'P1.5 – P3.9',
    bars: [2, 4, 6, 9, 12, 11, 9, 6, 4, 3, 2],
    hero: {
      eyebrow: 'LED EKRAN & VİDEO · 03',
      title: 'LED ekran',
      titleEm: 'mimarisi',
      titleTail: '.',
      lead: 'Sahne, kurumsal lobi ve kontrol odaları için pixel pitch analizi, processor seçimi, AV-sync timeline ve truss/rigging entegrasyonu. P1.5\'tan P3.9\'a kadar kapalı/yarı-açık alan.',
    },
    scope: [
      'Pixel pitch analizi — izleme mesafesine göre P1.5 / P2.6 / P3.9',
      'Video processor seçimi (Novastar, Brompton, Megapixel)',
      'Truss & rigging tasarımı, statik hesap',
      'AV-sync timeline (genlock, frame-accurate)',
      'HDR/Wide gamut renk kalibrasyonu',
      'Çok ekran sürücü mimarisi (mosaic, source switcher)',
      'Power & data altyapısı (3-fazlı PDU)',
      'Servis erişim planı (front/back service)',
      'Soğutma ve titreşim kontrolü',
      'Devreye alma + içerik partneri koordinasyonu',
    ],
    metrics: [
      ['PIXEL PITCH', 'P1.5 – P3.9'],
      ['PARLAKLIK', '600 – 1200 nit (kapalı)'],
      ['REFRESH', '≥ 3840 Hz'],
      ['CONTRAST', '5000:1'],
      ['SİNYAL', 'HDMI 2.1 / SDI / IP'],
      ['SYNC', 'Genlock + frame lock'],
    ],
    process: [
      ['İzleme mesafesi analizi', 'Pixel pitch seçimi'],
      ['Yapısal hesap', 'Truss + statik'],
      ['Processor & sürücü', 'Marka seçimi'],
      ['Montaj + sync', 'Genlock kalibrasyonu'],
      ['Renk kalibrasyonu', 'HDR + içerik testi'],
    ],
    brands: ['Absen', 'Unilumin', 'ROE Visual', 'Leyard', 'Novastar', 'Brompton Tech', 'Megapixel VR'],
    faq: [
      ['Pixel pitch nasıl seçilir?', 'İzleme mesafesi (m) ≈ pixel pitch (mm) × 1.0–1.5 formülü temel referanstır; yakın izlemede P1.5–P2.6, geniş sahnede P3.9 önerilir.'],
      ['LED ekran ne kadar dayanıklı?', 'IP rating ve kabin tasarımına göre 80.000–100.000 saat ortalama ömür; yıllık bakım ile beklenen servis 8–10 yıldır.'],
      ['Mevcut HDMI/SDI kaynaklarımı kullanabilir miyim?', 'Evet, processor giriş esnekliği yüksektir; kaynaklarınızı analiz edip uygun signal flow kurguluyoruz.'],
      ['Outdoor LED de yapıyor musunuz?', 'Evet — IP65/IP68 sertifikalı kabinlerle dış mekân kurulumu yapıyoruz.'],
    ],
    related: ['ses', 'konferans', 'studio'],
  },
  {
    slug: 'studio',
    cls: 'teal',
    short: 'STÜDYO',
    name: 'Stüdyo Akustiği',
    sub: 'NC-20 · RFZ · Bass Trap',
    hz: '20 Hz – 20 kHz',
    bars: [4, 7, 10, 12, 11, 10, 9, 8, 7, 6, 5],
    hero: {
      eyebrow: 'STÜDYO AKUSTİĞİ · 04',
      title: 'Kayıt ve kontrol',
      titleEm: 'odaları',
      titleTail: '.',
      lead: 'Mix, tracking, post-prodüksiyon ve podcast stüdyoları için RFZ kontrol odası mimarisi, modal bass trap kasetleri, kayan kat izolasyon ve kalibre referans dinleme.',
    },
    scope: [
      'RFZ (Reflection Free Zone) kontrol odası tasarımı',
      'Bass trap kasetleri — 30–250 Hz modal kontrol',
      'Kayan kat (floating floor) izolasyon — −55 dB STC',
      'Çok katmanlı duvar — drywall + mineral yün + air gap',
      'Tavan absorpsiyon + bulut diffüzör',
      'Penceresiz kapı + ses kilitli giriş',
      'HVAC sessiz hava akışı (NC-20 hedef)',
      'Monitör tuning — Genelec / Neumann / Focal',
      'Dolby Atmos 9.1.4 / 7.1.4 immersive setup',
      'Tracking room akustik karakterleri (live/dead)',
    ],
    metrics: [
      ['NC HEDEF', 'NC-15 / NC-20'],
      ['RT60 HEDEF', '0.25 – 0.32 s'],
      ['İZOLASYON', '−55 dB STC'],
      ['MONİTÖR', 'Stereo + Sub / 9.1.4'],
      ['MODAL KONTROL', '20–250 Hz'],
      ['HVAC', '< 25 dB(A)'],
    ],
    process: [
      ['Brif + referans dinleme', 'Akustik hedef'],
      ['Modal simülasyon', 'CAD + EASE'],
      ['İzolasyon mimarisi', 'Kayan kat + duvar'],
      ['Akustik kasetler', 'Bass trap + diffüzör'],
      ['Monitör kalibrasyonu', 'Sonarworks + ölçüm'],
    ],
    brands: ['Genelec', 'Neumann', 'Focal Pro', 'PMC', 'ATC', 'Auralex', 'GIK Acoustics', 'Vicoustic'],
    faq: [
      ['Apartmanda stüdyo yapılabilir mi?', 'Evet — kayan kat + dual-leaf duvar mimarisi ile komşu izolasyonu sağlanabilir; kontrat öncesi ön audit gerekir.'],
      ['Dolby Atmos sertifikası alabilir miyim?', 'Tasarım Atmos hedeflerine uygun yapılır; sertifikasyon başvurusu için Dolby tarafından kontrol süreci gerekir, biz teknik dokümantasyon ile destek veririz.'],
      ['Mevcut odaya retrofit yapabilir misiniz?', 'Çoğunlukla evet — tavan + duvar + zemin kombinasyonuyla %70+ iyileştirme tipik. Ölçüm sonrası kapsamı netleştiriyoruz.'],
      ['Monitör hangisi önerilir?', 'Oda hacmine ve hedef kullanıma göre Genelec 8330/8351, Neumann KH 80/120 veya Focal Trio6 öneriyoruz.'],
    ],
    related: ['akustik', 'ses', 'konferans'],
  },
  {
    slug: 'konferans',
    cls: 'plum',
    short: 'KONFERANS',
    name: 'Toplantı / AV',
    sub: 'Beamforming · AEC · Hibrit',
    hz: 'DICENTIS',
    bars: [3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3],
    hero: {
      eyebrow: 'KONFERANS / AV · 05',
      title: 'Hibrit toplantı',
      titleEm: 'sistemleri',
      titleTail: '.',
      lead: 'Beamforming mikrofon dizileri, akustik echo + gain control, kamera tracking, simültane çeviri ve tek-dokunuş kontrol panelleri. DICENTIS, Dante ve hibrit Microsoft Teams/Zoom entegrasyonu.',
    },
    scope: [
      'Tavan beamforming mikrofon dizisi (Sennheiser TCC2, Shure MXA920)',
      'AEC + AGC + noise reduction DSP zinciri',
      'PTZ kamera + AI takip (Logitech Rally, Polycom)',
      'DICENTIS konferans / oylama / simültane çeviri',
      'Tek dokunuş kontrol paneli (Crestron, Extron, Q-SYS)',
      'MS Teams Rooms / Zoom Rooms native entegrasyonu',
      'Akustik konfor — RT60 0.5–0.7 s + STI ≥ 0.62',
      'LED veya proj. ekran + içerik paylaşımı',
      'Kapsül oda (huddle room) standart paketleri',
      'Boardroom + auditorium scale dağılımı',
    ],
    metrics: [
      ['STI HEDEF', '≥ 0.62'],
      ['MİKROFON', 'Beamforming dizi'],
      ['KAMERA', 'PTZ + AI tracking'],
      ['KONTROL', 'Tek dokunuş'],
      ['SİSTEM', 'DICENTIS / Dante'],
      ['ENTEGRASYON', 'Teams / Zoom native'],
    ],
    process: [
      ['Toplantı senaryosu', 'Kullanım analizi'],
      ['Akustik hazırlık', 'RT60 + NC ölçüm'],
      ['Sistem mimarisi', 'Mic + cam + DSP'],
      ['Devreye alma', 'Native entegrasyon'],
      ['Kullanıcı eğitimi', 'Hand-off + dokümanı'],
    ],
    brands: ['Sennheiser', 'Shure', 'Bosch DICENTIS', 'Crestron', 'Extron', 'Q-SYS', 'Logitech', 'Poly', 'Yealink'],
    faq: [
      ['Microsoft Teams Rooms sertifikalı kuruyor musunuz?', 'Evet — Logitech, Poly ve Yealink ile MTR sertifikalı odalar kuruyoruz.'],
      ['Beamforming mikrofon kaç kişiye yeter?', 'Tavan dizisi ortalama 6–12 kişilik masayı kapsar; daha büyük odalarda dual array veya delegate mikrofon önerilir.'],
      ['Simültane çeviri kabini de yapıyor musunuz?', 'Evet, ISO 4043 uyumlu çeviri kabini ve DICENTIS dağıtım sistemi kuruyoruz.'],
      ['Mevcut Zoom/Teams ekipmanımı yükseltebilir miyim?', 'Çoğu mevcut sistem upgrade edilebilir; ölçüm sonrası hangi bileşenlerin değişmesi gerektiğini raporluyoruz.'],
    ],
    related: ['ses', 'akustik', 'led'],
  },
  {
    slug: 'anons',
    cls: 'olive',
    short: 'ANONS',
    name: 'Anons & Güvenlik',
    sub: 'EN 54-16 · Voice Alarm',
    hz: '100V · 70V',
    bars: [5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6],
    hero: {
      eyebrow: 'ANONS / VOICE ALARM · 06',
      title: 'EN 54-16 uyumlu',
      titleEm: 'sesli tahliye',
      titleTail: '.',
      lead: 'AVM, otel, hastane, kamu binası ve okul için EN 54-16 sertifikalı Voice Alarm, evakuasyon zoneları, BMS / yangın paneli entegrasyonu ve merkezi anons mimarisi.',
    },
    scope: [
      'EN 54-16 uyumlu Voice Alarm panel + amfi',
      'Evakuasyon zone planı (kat, blok, mekân)',
      'STI-PA ölçüm ve dokümantasyon',
      'Yangın paneli ile entegrasyon (Bosch, Honeywell, Siemens)',
      'BMS / SCADA arayüzü',
      'Çok kanallı paging mikrofonu + öncelik mantığı',
      'Backup amfi + power redundancy',
      'Battery backup (UPS) + 24 saat yedek',
      'Kayıt ve loglama (görsel + sesli olay raporu)',
      'Yıllık test ve sertifika yenileme',
    ],
    metrics: [
      ['STANDART', 'EN 54-16 / EN 54-24'],
      ['STI-PA HEDEF', '≥ 0.50'],
      ['ZONE SAYISI', 'Sınırsız (modüler)'],
      ['BACKUP', '24 saat batarya'],
      ['REDUNDANCY', 'Hot-swap amfi'],
      ['ENTEGRASYON', 'BMS + Yangın paneli'],
    ],
    process: [
      ['Mevzuat analizi', 'Yapı sınıfı + zone'],
      ['Sistem mimarisi', 'Amfi + speaker'],
      ['Sertifikalı kurulum', 'EN 54 uyumlu'],
      ['STI-PA ölçüm', 'Doküman + rapor'],
      ['Yıllık bakım', 'Test + sertifika'],
    ],
    brands: ['Bosch Praesensa', 'Honeywell', 'TOA', 'Penton', 'Baldwin Boxall', 'AtlasIED'],
    faq: [
      ['EN 54-16 zorunlu mu?', 'AVM, otel, hastane, okul gibi belirli yapı sınıflarında zorunludur — yapı denetim onayı için sertifikalı sistem gerekir.'],
      ['Mevcut anons sistemim EN 54 uyumlu değil, ne yapmalıyım?', 'Mevcut sistem audit\'i sonrası hangi bileşenlerin değişmesi gerektiğini raporluyoruz; tipik olarak amfi + DSP merkezi yenilenir, hoparlörler EN 54-24 ise korunur.'],
      ['STI-PA ölçümü nedir?', 'Sözel netlik metriğidir — EN 54-16 uyumu için 0.50 üzeri her zon\'da ölçüm dokümantasyonu zorunludur.'],
      ['Yangın paneliyle nasıl entegre olur?', 'Yangın panelinin alarm çıkışı VA panelinin tetikleyicisine bağlanır; öncelik mantığı sistem tasarımında tanımlanır.'],
    ],
    related: ['ses', 'konferans', 'akustik'],
  },
];

/* =========================================================
   VENUES
   ========================================================= */
export const VENUES: Venue[] = [
  {
    slug: 'restoran',
    name: 'Restoran & Bar',
    short: 'RESTORAN',
    hero: {
      eyebrow: 'MEKÂN TİPİ · 01',
      title: 'Restoran & bar',
      titleEm: 'akustiği',
      titleTail: '.',
      lead: 'Müşteri konuşma netliği ön planda — arka plan müziği ve canlı performans dengesi için 4 zonlu sistem mimarisi, RT60 0.6–0.9 s hedef ve akustik panel entegrasyonu.',
    },
    problems: [
      ['Konuşma anlaşılmıyor', 'Yüksek RT60 ve yansımalar masada konuşmayı boğar; STI 0.45 altına düşer.'],
      ['Müzik bir noktada bozuk', 'Tek zonlu PA zon sınırlarında ya çok yüksek ya çok düşük; misafir konforu bozulur.'],
      ['Anons duyulmuyor', 'Dinamik aralık darken anons mesajları arka plan müziğine boğulur.'],
    ],
    goals: [
      ['RT60 Hedef', '0.6 – 0.9 s'],
      ['Ses Basıncı', '78 – 82 dB SPL'],
      ['Zon Sayısı', '2 – 4 zon'],
      ['STI Hedef', '≥ 0.62'],
      ['Müzik Stili', 'Background + canlı'],
    ],
    systemSpec: [
      ['Hoparlör Tipi', 'Tavan + sahne köşe'],
      ['Sub Sayısı', '1 – 2 sub'],
      ['Amfi Mimarisi', 'Çok kanallı Class-D'],
      ['Sinyal', 'Dante / 70V'],
      ['DSP', 'Q-SYS / Symetrix'],
      ['Akustik Panel', 'Tavan + duvar absorpsiyon'],
      ['Anons', '70V çağrı önceliği'],
    ],
    sampleProjects: ['bogaz-restoran', 'kurumsal-lobi'],
    faq: [
      ['Açık teras için ayrı sistem mi gerekir?', 'Evet — outdoor IP65 hoparlör + ayrı amfi zonu önerilir; iç mekânla aynı DSP üzerinden yönetilir.'],
      ['Akustik panel görsel olarak rahatsız mı?', 'Hayır — kumaş, ahşap kafes veya boyanabilir variant ile mimariye entegre olur.'],
      ['Canlı sahne ile arka plan müziğini birlikte yönetebilir miyim?', 'Evet — DSP üzerinde ayrı zon + ayrı kaynak mantığı kuruyoruz; canlı sahnede arka plan otomatik kısılır.'],
    ],
    related: { disciplines: ['ses', 'akustik'], venues: ['otel', 'sahne'] },
  },
  {
    slug: 'otel',
    name: 'Otel & SPA',
    short: 'OTEL',
    hero: {
      eyebrow: 'MEKÂN TİPİ · 02',
      title: 'Otel, ballroom &',
      titleEm: 'SPA',
      titleTail: '.',
      lead: 'Lobi, restoran, ballroom, SPA ve oda zonları için çok zonlu PA, EN 54-16 voice alarm, akustik konfor ve merkezi yönetim. 6–24 zon mimarisi.',
    },
    problems: [
      ['Lobi sesi bölgeye uymuyor', 'Tek seviye sistem misafiri ya rahatsız eder ya yetersiz kalır; saat dilimine göre adaptif kontrol gerekir.'],
      ['Ballroom çok amaçlı zorluğu', 'Düğün, konferans, gala için tek mimari yetmez; değişken akustik + line array öneriyoruz.'],
      ['Acil tahliye sistemi mevzuat dışı', 'Otel sınıfı için EN 54-16 zorunludur; eski paging sistemleri uyumlu değildir.'],
    ],
    goals: [
      ['RT60 Hedef', '0.7 – 1.0 s'],
      ['Ses Basıncı', '78 – 95 dB SPL'],
      ['Zon Sayısı', '6 – 24 zon'],
      ['VA Standart', 'EN 54-16'],
      ['LED Görüntü', 'Ballroom P2.6'],
    ],
    systemSpec: [
      ['Lobi', 'Tavan hoparlör + 1 sub'],
      ['Restoran', '4 zon Dante'],
      ['Ballroom', 'Line array L/R + sub array'],
      ['Oda Zonları', '24+ zon merkezi'],
      ['Anons', 'EN 54-16 + redundant amfi'],
      ['LED', 'P2.6 sahne ekranı'],
      ['Kontrol', 'Tek dokunuş + uzaktan izleme'],
    ],
    sampleProjects: ['ballroom-otel', 'kurumsal-lobi'],
    faq: [
      ['Misafir odasına da ses sistemi yerleştirilir mi?', 'Genellikle BMS üzerinden anons sistemine bağlanır; isteğe göre oda içi spa/yatak başı paneli de eklenebilir.'],
      ['Mevcut otelde retrofit mümkün mü?', 'Evet — kablolama mevcut yapıdan çekilir, kayıp minimize edilir; tipik proje 3–6 hafta arası teslim.'],
      ['EN 54-16 sertifikası nasıl alınır?', 'Sistem EN 54 sertifikalı bileşenlerle kurulur; STI-PA ölçüm raporu ile yapı denetim onayı alınır.'],
    ],
    related: { disciplines: ['ses', 'anons', 'led'], venues: ['konferans', 'restoran'] },
  },
  {
    slug: 'sahne',
    name: 'Sahne & Etkinlik',
    short: 'SAHNE',
    hero: {
      eyebrow: 'MEKÂN TİPİ · 03',
      title: 'Sahne & canlı',
      titleEm: 'etkinlik',
      titleTail: '.',
      lead: 'Konser, festival ve etkinlik mekânları için line array L/R, cardioid sub array, yüksek SPL teslim ve LED ana sahne ekranı. 1.000–10.000 kişi kapasiteli.',
    },
    problems: [
      ['SPL yetmiyor', 'Uzak mesafede konser dinamiği kaybolur; line array delay tower mimarisi gerekir.'],
      ['Sahne arkası uğuldama', 'Cardioid olmayan sub yapısı sahne arkasını döver; performansı bozar.'],
      ['LED görüntü senkron yok', 'Birden fazla kaynak frame-accurate sync olmadan görsel kayma yapar.'],
    ],
    goals: [
      ['RT60 Hedef', '1.2 – 1.6 s'],
      ['Ses Basıncı', '100 – 110 dB SPL'],
      ['Sistem Tipi', 'Line array + cardioid sub'],
      ['LED', 'P2.6 / P3.9'],
      ['Kapasite', '1.000 – 10.000'],
    ],
    systemSpec: [
      ['Ana PA', 'Line array L/R'],
      ['Sub Array', 'Cardioid (sahne arkası kontrol)'],
      ['Delay Tower', '30 m+ mekânlarda'],
      ['Sahne Monitör', 'IEM + wedge'],
      ['LED Ana Ekran', 'P3.9 outdoor / P2.6 indoor'],
      ['Sync', 'Genlock + frame lock'],
      ['Kontrol', 'FOH + monitör mix konsolu'],
    ],
    sampleProjects: ['konser-sahnesi', 'club-nexus'],
    faq: [
      ['Outdoor festival için kurulum yapıyor musunuz?', 'Evet — IP54+ ürünler ve mobil rigging ile outdoor proje teslimi yapıyoruz.'],
      ['Mevcut backline / FOH konsolumu kullanabilir misiniz?', 'Evet, mevcut ekipmana sistem mimarisi entegre edilir; ihtiyaç durumunda upgrade önerisi sunuyoruz.'],
      ['Cardioid sub array farkı nedir?', 'Sahne arkasındaki ses basıncını 12–18 dB azaltır; performans monitörlüğünü ve mikrofon feedback\'ini iyileştirir.'],
    ],
    related: { disciplines: ['ses', 'led'], venues: ['otel', 'konferans'] },
  },
  {
    slug: 'studio',
    name: 'Stüdyo & Kayıt',
    short: 'STÜDYO',
    hero: {
      eyebrow: 'MEKÂN TİPİ · 04',
      title: 'Kayıt & kontrol',
      titleEm: 'odaları',
      titleTail: '.',
      lead: 'Mix, tracking, podcast, post-prodüksiyon ve broadcast stüdyoları için RFZ kontrol odası, kayan kat izolasyon, NC-20 hedef ve kalibre referans dinleme.',
    },
    problems: [
      ['Komşu izolasyonu', 'Düşük frekans aktarımı tipik; kayan kat + dual-leaf duvar mimarisi gerekir.'],
      ['Kontrol odasında modal çıngıraklar', '30–250 Hz bandı yönetilmezse mix kararları yanlış kalır.'],
      ['Monitör tepkisi düz değil', 'Oda akustiği monitör tepkisini bozar; kalibrasyon olmadan referans kaybolur.'],
    ],
    goals: [
      ['NC Hedef', 'NC-15 / NC-20'],
      ['RT60 Hedef', '0.25 – 0.32 s'],
      ['İzolasyon', '−55 dB STC'],
      ['Modal Kontrol', '20 – 250 Hz'],
      ['Monitör', 'Stereo / 9.1.4 Atmos'],
    ],
    systemSpec: [
      ['Kayan Kat', 'Floating floor + neoprene'],
      ['Duvar', 'Dual-leaf + air gap'],
      ['Tavan', 'Bulut + diffüzör'],
      ['Bass Trap', 'Modal kasetler'],
      ['Monitör', 'Genelec / Neumann / Focal'],
      ['DAW Entegrasyonu', 'Pro Tools / Logic / Cubase'],
      ['Kalibrasyon', 'Sonarworks + ölçüm'],
    ],
    sampleProjects: ['studio-alpha'],
    faq: [
      ['Apartmanda stüdyo mümkün mü?', 'Evet — kayan kat + dual-leaf duvar ile komşu izolasyonu sağlanır; ön ölçüm zorunludur.'],
      ['Atmos sertifikalı oda nasıl yapılır?', 'Atmos referans tablosu hedeflerine göre tasarım yaparız; sertifika için Dolby kontrol süreci ayrıdır.'],
      ['Mevcut stüdyoyu yenilemek mümkün mü?', 'Evet — modal kontrol kasetleri + monitör kalibrasyonu ile %70+ iyileştirme tipik.'],
    ],
    related: { disciplines: ['studio', 'akustik'], venues: ['konferans'] },
  },
  {
    slug: 'konferans',
    name: 'Toplantı & Konferans',
    short: 'KONFERANS',
    hero: {
      eyebrow: 'MEKÂN TİPİ · 05',
      title: 'Toplantı &',
      titleEm: 'konferans',
      titleTail: ' merkezleri.',
      lead: 'Boardroom, huddle, auditorium ve konferans salonları için beamforming mikrofon, hibrit Teams/Zoom, simültane çeviri ve tek dokunuş kontrol mimarisi.',
    },
    problems: [
      ['Hibrit toplantıda uzak katılımcı duyamıyor', 'Standart konferans phone\'u oda boyutuna yetmez; beamforming dizisi gerekir.'],
      ['Kontrol paneli karmaşık', 'Kullanıcı arayüzü 5+ tıklama gerektiren sistemler kullanılmaz; tek dokunuş paketi sunulmalı.'],
      ['Akustik konfor düşük', 'Yüksek RT60 ve düşük STI sözel netliği bozar; akustik ön hazırlık şart.'],
    ],
    goals: [
      ['RT60 Hedef', '0.5 – 0.7 s'],
      ['STI Hedef', '≥ 0.62'],
      ['Mikrofon', 'Beamforming dizi'],
      ['Kontrol', 'Tek dokunuş'],
      ['Sistem', 'DICENTIS / MTR'],
    ],
    systemSpec: [
      ['Mikrofon', 'Tavan beamforming dizi'],
      ['Kamera', 'PTZ + AI tracking'],
      ['DSP', 'AEC + AGC + NR'],
      ['Hoparlör', 'Tavan absorpsiyon + soft PA'],
      ['Kontrol', 'Crestron / Q-SYS'],
      ['Hibrit', 'Teams Rooms / Zoom Rooms'],
      ['Çeviri', 'DICENTIS simültane (opsiyonel)'],
    ],
    sampleProjects: ['grand-auditorium', 'konferans-merkezi'],
    faq: [
      ['Microsoft Teams Rooms sertifikalı kuruyor musunuz?', 'Evet — Logitech, Poly ve Yealink ile MTR sertifikalı odalar kuruyoruz.'],
      ['Simültane çeviri kabini de yapıyor musunuz?', 'Evet, ISO 4043 uyumlu çeviri kabini ve DICENTIS dağıtım sistemi kuruyoruz.'],
      ['Mevcut Zoom/Teams ekipmanımı yükseltebilir misiniz?', 'Çoğu mevcut sistem upgrade edilebilir; ölçüm sonrası hangi bileşenlerin değişmesi gerektiğini raporluyoruz.'],
    ],
    related: { disciplines: ['konferans', 'akustik', 'ses'], venues: ['otel', 'studio'] },
  },
];

/* =========================================================
   PROJECTS
   ========================================================= */
export const PROJECTS: Project[] = [
  {
    slug: 'studio-alpha',
    name: 'Studio Alpha',
    city: 'İstanbul',
    year: '2024',
    venueType: 'studio',
    disciplines: ['teal', 'gold'],
    hero: {
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'STÜDYO · İSTANBUL · 2024',
      lead: 'Dolby Atmos 9.1.4 miksaj stüdyosu — modal kontrol için kayan kat, RFZ kontrol odası ve bass trap kasetleriyle NC-20 hedefli teslim.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    specs: [
      ['Format', 'Dolby Atmos 9.1.4'],
      ['Kontrol Odası', '38 m²'],
      ['Tracking Room', '24 m²'],
      ['Monitör', 'Genelec 8351B + 7370A sub'],
      ['DAW', 'Pro Tools HDX'],
      ['İzolasyon', '−55 dB STC'],
    ],
    beforeAfter: [
      ['RT60', '0.62 s', '0.28 s', '≤ 0.32 s'],
      ['NC', 'NC-32', 'NC-18', 'NC-20'],
      ['Modal Pik (40–80 Hz)', '+9 dB', '+2 dB', '≤ +3 dB'],
    ],
    story: {
      problem: 'Mevcut oda komşu izolasyonu zayıftı, modal pikler 40–80 Hz bandında mix kararlarını bozuyordu. Atmos uyumlu yerleşim için tavan ve duvar arası akustik mimari gerekti.',
      approach: 'Kayan kat (floating floor) + dual-leaf duvar + bass trap kasetleriyle modal kontrol. Tavanda diffüzör bulutu, surround monitör konumlarına RFZ optimizasyonu. Genelec 8351B + 7370A sub kalibrasyonu Sonarworks ile final.',
      outcome: 'NC-18 (hedef NC-20 üzerinde), RT60 0.28 s, modal pik +2 dB. Atmos referans monitör tepkisi ±2 dB toleransta. Stüdyo aktif kullanımda 12+ aydır referans değerlerini koruyor.',
    },
    brandsUsed: ['Genelec', 'Auralex', 'GIK Acoustics', 'Pro Tools'],
    related: ['kayit-stuyodu', 'club-nexus', 'grand-auditorium'],
  },
  {
    slug: 'club-nexus',
    name: 'Club Nexus',
    city: 'İzmir',
    year: '2024',
    venueType: 'sahne',
    disciplines: ['red', 'indigo'],
    hero: {
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600',
      eyebrow: 'SAHNE · İZMİR · 2024',
      lead: '3.000 kişilik canlı performans mekânı için Pioneer Pro Audio XY serisi PA + cardioid sub array + 64 m² LED P3.9 ana sahne ekranı.',
    },
    gallery: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: [
      ['Kapasite', '3.000 kişi'],
      ['Ana PA', 'Pioneer Pro XY-218'],
      ['Sub', 'Cardioid array (8 sub)'],
      ['LED', '64 m² P3.9'],
      ['SPL Hedef', '106 dB @ FOH'],
      ['Konsol', 'Avid S6L'],
    ],
    beforeAfter: [
      ['SPL @ FOH', '98 dB', '108 dB', '≥ 105 dB'],
      ['SPL Sahne Arkası', '102 dB', '88 dB', '≤ 92 dB'],
      ['LED Sync Drift', '3 frame', '0 frame', '0 frame'],
    ],
    story: {
      problem: 'Mevcut PA cardioid değildi; sahne arkasında ses basıncı performansı bozuyordu. LED ekran ana PA ile sync sorunluydu, frame drift gözle görülüyordu.',
      approach: 'Pioneer XY-218 line array L/R + 8 sub cardioid array konfigürasyonu. LED P3.9 panel, Brompton Tessera processor üzerinden genlock. Avid S6L FOH konsoluna Dante üzerinden bağlanan tek kaynak mantığı.',
      outcome: 'FOH 108 dB SPL, sahne arkası 88 dB — cardioid kontrol +14 dB izolasyon sağladı. LED frame drift sıfırlandı. Açılışta 4 ardı ardına etkinlik sorunsuz teslim edildi.',
    },
    brandsUsed: ['Pioneer Pro Audio', 'Powersoft', 'Brompton', 'Avid'],
    related: ['konser-sahnesi', 'studio-alpha', 'ballroom-otel'],
  },
  {
    slug: 'grand-auditorium',
    name: 'Grand Auditorium',
    city: 'Ankara',
    year: '2023',
    venueType: 'konferans',
    disciplines: ['plum', 'gold'],
    hero: {
      image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1600',
      eyebrow: 'KONFERANS · ANKARA · 2023',
      lead: '420 kişilik çok amaçlı salon — değişken akustik paneller, DICENTIS konferans sistemi, 32 kanal beamforming mikrofon dizisi ve dijital yönlendirilebilir line array.',
    },
    gallery: [
      'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    specs: [
      ['Kapasite', '420 kişi'],
      ['Mikrofon', '32 kanal beamforming'],
      ['Konferans Sistemi', 'Bosch DICENTIS'],
      ['PA', 'Steerable line array'],
      ['Çeviri Kabini', '4 dil'],
      ['Kontrol', 'Crestron tek dokunuş'],
    ],
    beforeAfter: [
      ['STI', '0.48', '0.71', '≥ 0.62'],
      ['RT60 (orta band)', '1.4 s', '0.6 s', '0.5–0.7 s'],
      ['NC', 'NC-38', 'NC-26', 'NC-30'],
    ],
    story: {
      problem: 'Yüksek RT60 ve düşük STI nedeniyle salon arkasındaki katılımcılar konuşmaları net duyamıyordu. Çok amaçlı kullanım için değişken akustik gerekiyordu.',
      approach: 'Yan duvarlara döndürülebilir akustik paneller (canlı performans için yansıtıcı, konferans için absorpsiyon). Tavana steerable line array + dijital beam forming. DICENTIS delegate mikrofon + simültane çeviri 4 dil.',
      outcome: 'STI 0.71 (hedefin üstünde), RT60 0.6 s, NC-26. Yıllık 80+ etkinlik kullanımında akustik konfor şikayeti sıfır.',
    },
    brandsUsed: ['Bosch DICENTIS', 'Sennheiser', 'Crestron', 'L-Acoustics'],
    related: ['konferans-merkezi', 'ballroom-otel', 'kurumsal-lobi'],
  },
  {
    slug: 'bogaz-restoran',
    name: 'Boğaz Restoran',
    city: 'İstanbul',
    year: '2024',
    venueType: 'restoran',
    disciplines: ['red', 'gold'],
    hero: {
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600',
      eyebrow: 'RESTORAN · İSTANBUL · 2024',
      lead: '180 kişilik teras restoran için 4 zonlu Dante ses mimarisi, akustik panel tavan kasetleri ve Boğaz manzarasıyla uyumlu DSP kontrol mantığı.',
    },
    gallery: [
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: [
      ['Kapasite', '180 kişi'],
      ['Zon Sayısı', '4 zon (iç + teras)'],
      ['Hoparlör', 'Tavan + sahne köşe'],
      ['Sub', '2 × 12" sub'],
      ['Sinyal', 'Dante / Q-SYS'],
      ['Akustik Panel', 'Tavan + duvar absorpsiyon'],
    ],
    beforeAfter: [
      ['RT60', '1.3 s', '0.62 s', '0.6–0.9 s'],
      ['STI', '0.41', '0.68', '≥ 0.62'],
      ['SPL Tutarsızlık', '±9 dB', '±2 dB', '≤ ±3 dB'],
    ],
    story: {
      problem: 'Yansıtıcı yüzeyler nedeniyle masa konuşması bozuk; teras ve iç mekân arasında ses geçişi tutarsızdı. Akşam müziği yetersiz, gündüz arka plan abartılıydı.',
      approach: 'Tavan + duvarlarda kumaş kaplı akustik paneller. Q-SYS DSP üzerinden 4 zon konfigürasyonu (iç sol/sağ + teras sol/sağ). Saat dilimine göre adaptif EQ + SPL profili.',
      outcome: 'RT60 0.62 s (hedefin altında), STI 0.68. Misafir konuşma şikayeti %92 azaldı. 18 aydır işletme aktif kullanımda.',
    },
    brandsUsed: ['Bose Pro', 'Q-SYS', 'Vicoustic'],
    related: ['ballroom-otel', 'kurumsal-lobi', 'konferans-merkezi'],
  },
  {
    slug: 'ballroom-otel',
    name: 'Ballroom Otel',
    city: 'Antalya',
    year: '2024',
    venueType: 'otel',
    disciplines: ['red', 'olive', 'indigo'],
    hero: {
      image: 'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=1600',
      eyebrow: 'OTEL · ANTALYA · 2024',
      lead: '800 kişilik ballroom + lobi + 24 oda zon yönetimi. EN 54-16 voice alarm, LED P2.6 sahne ekranı ve merkezi BMS entegrasyonu.',
    },
    gallery: [
      'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    specs: [
      ['Ballroom Kapasitesi', '800 kişi'],
      ['Toplam Zon', '24'],
      ['VA Standart', 'EN 54-16'],
      ['LED', 'P2.6 — 36 m²'],
      ['SPL Ballroom', '98 dB'],
      ['Yönetim', 'Q-SYS Reflect uzaktan'],
    ],
    beforeAfter: [
      ['RT60 (ballroom)', '1.8 s', '1.2 s', '1.1–1.4 s'],
      ['STI (lobi)', '0.45', '0.66', '≥ 0.62'],
      ['STI-PA (anons)', 'Yok', '0.58', '≥ 0.50'],
    ],
    story: {
      problem: 'Mevcut tek-zonlu sistem ballroom dışında çalışmıyordu. EN 54-16 uyumlu VA yoktu. LED ekran sahnesi sync ve renk tutarsızlığı yapıyordu.',
      approach: 'Bosch Praesensa EN 54-16 sertifikalı VA panel + redundant amfi. Q-SYS Reflect üzerinden 24 zon merkezi yönetim. LED P2.6 panel + Brompton Tessera processor + HDR kalibrasyon.',
      outcome: 'EN 54-16 sertifikalı sistem yapı denetim onayını aldı. Ballroom RT60 1.2 s, lobi STI 0.66. Anons STI-PA 0.58 — hedef üstünde. 6+ ay sorunsuz operasyon.',
    },
    brandsUsed: ['Bosch Praesensa', 'Q-SYS', 'Brompton', 'L-Acoustics'],
    related: ['konferans-merkezi', 'kurumsal-lobi', 'club-nexus'],
  },
  {
    slug: 'konser-sahnesi',
    name: 'Konser Sahnesi',
    city: 'Ankara',
    year: '2023',
    venueType: 'sahne',
    disciplines: ['red', 'indigo'],
    hero: {
      image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'SAHNE · ANKARA · 2023',
      lead: 'Açık hava konser sahnesi için cardioid sub array + line array L/R, 64 m² LED ana sahne ekranı, dijital yönlendirilebilir delay tower mimarisi.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: [
      ['Kapasite', '5.000 kişi'],
      ['Ana PA', 'L-Acoustics K2'],
      ['Sub', 'KS28 cardioid array'],
      ['LED', '64 m² P2.6'],
      ['SPL Hedef', '105 dB @ FOH'],
      ['Delay Tower', '2 × 30 m mesafe'],
    ],
    beforeAfter: [
      ['SPL @ FOH', '95 dB', '108 dB', '≥ 105 dB'],
      ['SPL @ 50m', '78 dB', '100 dB', '≥ 95 dB'],
      ['Sahne Arkası SPL', '101 dB', '85 dB', '≤ 90 dB'],
    ],
    story: {
      problem: 'Geniş açık alan için yetersiz PA, FOH ile uzak nokta arası 17 dB SPL düşüşü vardı. Sahne arkası rezidansa rahatsızlık veriyordu.',
      approach: 'L-Acoustics K2 line array L/R + KS28 cardioid sub array. 30 m mesafede 2 delay tower (steerable). LED P2.6 ana ekran + Brompton Tessera processor.',
      outcome: 'FOH 108 dB, 50 m noktada 100 dB (sadece 8 dB düşüş). Cardioid sub +16 dB izolasyon sağladı, sahne arkası 85 dB. Belediye gürültü şikâyeti almadı.',
    },
    brandsUsed: ['L-Acoustics', 'Brompton', 'Avid'],
    related: ['club-nexus', 'studio-alpha', 'ballroom-otel'],
  },
  {
    slug: 'kurumsal-lobi',
    name: 'Kurumsal Lobi',
    city: 'İstanbul',
    year: '2025',
    venueType: 'otel',
    disciplines: ['red', 'gold'],
    hero: {
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1600',
      eyebrow: 'KURUMSAL · İSTANBUL · 2025',
      lead: 'Plaza ana lobisi için 3 zonlu tavan hoparlör mimarisi, akustik tavan kasetleri ve dijital anons sistemi entegrasyonu.',
    },
    gallery: [
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80',
    ],
    specs: [
      ['Lobi Alanı', '420 m²'],
      ['Zon Sayısı', '3 (giriş + bekleme + restoran)'],
      ['Hoparlör Sayısı', '24 tavan + 2 sub'],
      ['Anons', 'Çağrı önceliği + EN 54-16'],
      ['Sinyal', 'Dante'],
      ['Kontrol', 'Tek dokunuş tablet'],
    ],
    beforeAfter: [
      ['RT60', '1.2 s', '0.7 s', '0.6–0.9 s'],
      ['STI', '0.47', '0.66', '≥ 0.62'],
      ['SPL Tutarlılık', '±7 dB', '±2 dB', '≤ ±3 dB'],
    ],
    story: {
      problem: 'Yüksek tavan ve cam yüzeyler RT60\'ı yükselttiyordu. Anons sistemi mevzuat dışıydı, mevcut hoparlörler bölgeye eşit dağılmıyordu.',
      approach: 'Tavanda kumaş kaplı akustik kasetler (mimariye gizli entegre). 24 tavan hoparlör Dante DSP üzerinden 3 zon. Bosch çağrı mikrofonu + EN 54-16 amfi.',
      outcome: 'RT60 0.7 s, STI 0.66. SPL tutarlılığı ±2 dB. Resepsiyon-misafir konuşma netliği sorunu kalmadı.',
    },
    brandsUsed: ['Bose Pro', 'Q-SYS', 'Bosch', 'Vicoustic'],
    related: ['ballroom-otel', 'bogaz-restoran', 'konferans-merkezi'],
  },
  {
    slug: 'konferans-merkezi',
    name: 'Konferans Merkezi',
    city: 'İzmir',
    year: '2023',
    venueType: 'konferans',
    disciplines: ['plum', 'gold'],
    hero: {
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'KONFERANS · İZMİR · 2023',
      lead: '6 toplantı odası + 1 boardroom + 1 auditorium kombinasyonu. MTR Teams Rooms sertifikalı, beamforming mikrofon ve simültane çeviri kabini ile hibrit toplantı odaklı.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    specs: [
      ['Toplam Oda', '6 huddle + 1 boardroom + 1 auditorium'],
      ['Mikrofon', 'Shure MXA920 (boardroom + audi)'],
      ['Kamera', 'Logitech Rally Bar'],
      ['MTR', 'Microsoft Teams Rooms sertifikalı'],
      ['Çeviri', 'DICENTIS 2 dil'],
      ['Yönetim', 'Crestron Fusion uzaktan'],
    ],
    beforeAfter: [
      ['STI (boardroom)', '0.52', '0.71', '≥ 0.62'],
      ['Yankı (AEC sonrası)', '−18 dB', '−42 dB', '≤ −35 dB'],
      ['Hibrit Katılım Memnuniyet', '%62', '%94', '≥ %85'],
    ],
    story: {
      problem: 'Yan-yana 6 huddle odası akustik geçirgendi; hibrit toplantıda uzak katılımcı duyamıyordu. Boardroom\'da AEC zayıftı, yankı yüksekti.',
      approach: 'Her odanın duvarları arasına izolasyon kasetleri. Boardroom + audi tavanına Shure MXA920 beamforming dizi. Crestron Fusion ile tüm odaların uzaktan izleme + rezervasyon entegrasyonu.',
      outcome: 'Boardroom STI 0.71, AEC sonrası yankı −42 dB. Hibrit toplantı memnuniyet skoru %62\'den %94\'e yükseldi. 24 ay aktif kullanım.',
    },
    brandsUsed: ['Shure', 'Logitech', 'Crestron', 'Bosch DICENTIS'],
    related: ['grand-auditorium', 'ballroom-otel', 'studio-alpha'],
  },
];

/* =========================================================
   FAQ_GROUPS
   ========================================================= */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'akustik',
    name: 'Akustik & Ölçüm',
    items: [
      ['Akustik ölçüm yapıyor musunuz?', 'Evet. RT60, EDT, STI, NC, C50, D50 için kalibre edilmiş B&K mikrofon ve SMAART/ARTA yazılımı kullanıyoruz. Saha keşfi ücretsizdir.'],
      ['RT60 ne kadar düşük olmalı?', 'Kullanım amacına bağlı: restoran 0.6–0.9 s, stüdyo 0.25–0.35 s, konferans 0.5–0.7 s, ballroom 1.1–1.4 s tipiktir.'],
      ['Akustik panel görsel olarak rahatsız mı?', 'Hayır — kumaş kaplama, ahşap kafes, perforated metal veya boyanabilir varyantlarla mimariye gizli entegre olur.'],
      ['İnşaat aşamasında mı sonradan mı yapılmalı?', 'İnşaat aşamasında entegre etmek hem maliyeti düşürür hem performansı yükseltir. Tamamlanmış mekânlar için retrofit çözümlerimiz var.'],
      ['Apartmanda stüdyo yapılabilir mi?', 'Evet — kayan kat (floating floor) + dual-leaf duvar mimarisi ile komşu izolasyonu sağlanır. Ön ölçüm zorunludur.'],
    ],
  },
  {
    id: 'ses',
    name: 'Ses Sistemi',
    items: [
      ['Marka bağımsız mısınız?', 'Evet. Projeye en uygun ürünü seçeriz; d&b audiotechnik, L-Acoustics, Meyer Sound, Bose Pro, JBL Pro, Pioneer Pro Audio, Genelec, Bosch dahil pek çok marka ile çalışıyoruz.'],
      ['Mevcut hoparlörlerimi yeniden kullanabilir miyiz?', 'Mevcut sistem audit\'i ücretsizdir. Ölçüm sonrası hangi bileşenlerin korunup hangilerinin değişmesi gerektiğini raporluyoruz.'],
      ['Line array mı point source mu?', 'Mekân hacmi, dinleme mesafesi ve mimari kısıtlara göre simülasyon yapıp öneririz. Orta ölçek (≤ 800 kişi) genelde yüksek-Q point source ile çözülür.'],
      ['Dante şart mı?', 'Çok zonlu (4+) ve uzun mesafe dağıtımda Dante önerilir. Küçük restoranlar için geleneksel 70V daha ekonomiktir.'],
      ['Cardioid sub array nedir?', 'Sahne arkasındaki ses basıncını 12–18 dB azaltır. Performans monitörlüğünü ve mikrofon feedback\'ini iyileştirir.'],
    ],
  },
  {
    id: 'surec',
    name: 'Süreç & Garanti',
    items: [
      ['Anahtar teslim mi çalışıyorsunuz?', 'Tasarım, satın alma, montaj, devreye alma ve kalibrasyon dahil anahtar teslim teslimat yapıyoruz. Yalnız tasarım veya yalnız kalibrasyon hizmeti de mümkündür.'],
      ['Proje süresi ne kadar?', 'Saha keşfi ücretsiz (1–2 gün), ölçüm raporu (5–7 gün), uygulama (4–8 hafta) — toplam 6–10 hafta arası.'],
      ['Garanti süreniz nedir?', 'Tüm sistemlerde 2 yıl üretici garantisi + 1 yıl yerinde servis garantisi sunuyoruz. Yıllık bakım anlaşması opsiyoneldir.'],
      ['Saha keşfi gerçekten ücretsiz mi?', 'Evet — İstanbul içi tüm saha keşifleri ücretsizdir. İl dışı projeler için ulaşım masrafı kontrat üzerinden değerlendirilir.'],
      ['Türkiye geneline hizmet veriyor musunuz?', 'Evet — 81 ilde proje teslim etmiş bir ekibiz. İstanbul merkezli operasyon, ulusal lojistik ağı.'],
    ],
  },
  {
    id: 'mevzuat',
    name: 'Mevzuat & KVKK',
    items: [
      ['EN 54-16 sertifikalı sistem kuruyor musunuz?', 'Evet. AVM, otel, hastane, okul ve kamu binaları için EN 54-16 uyumlu Voice Alarm sistemleri tasarlıyoruz. STI-PA ölçüm raporu dokümante edilir.'],
      ['Kişisel verilerim nasıl saklanıyor?', 'Form üzerinden ilettiğiniz veriler KVKK kapsamında saklanır, üçüncü taraflarla ticari amaçlı paylaşılmaz. Detaylar Gizlilik Politikası ve KVKK Aydınlatma Metni\'nde.'],
      ['Yapı denetim onayı için doküman sağlıyor musunuz?', 'Evet — STI-PA ölçüm raporu, EN 54 sertifika dokümanları, sistem mimari şeması yapı denetim sürecinde kullanılabilir.'],
      ['İhale şartnameleri için teknik destek var mı?', 'Evet — kamu ve özel sektör ihalelerinde teknik şartname yorumu, ürün uygunluk dokümantasyonu ve fiyat teklifi desteği veriyoruz.'],
    ],
  },
];

/* =========================================================
   BRANDS — Marka portföyü (text grid)
   ========================================================= */
export type BrandLevel = 'partner' | 'authorized' | 'premium';
export type BrandCategory = 'ses' | 'akustik' | 'led' | 'studio' | 'konferans' | 'anons' | 'dsp' | 'mikrofon';

export type Brand = {
  id: string;
  name: string;
  origin: string;
  level: BrandLevel;
  categories: BrandCategory[];
  description: string;
};

export const BRAND_CATEGORIES: Array<{ id: BrandCategory; name: string; cls: DisciplineCls }> = [
  { id: 'ses',       name: 'Ses Sistemi',           cls: 'red' },
  { id: 'akustik',   name: 'Akustik Panel & Diffüzör', cls: 'gold' },
  { id: 'led',       name: 'LED & Görüntü',         cls: 'indigo' },
  { id: 'studio',    name: 'Stüdyo Monitör',        cls: 'teal' },
  { id: 'konferans', name: 'Konferans / AV',        cls: 'plum' },
  { id: 'anons',     name: 'Voice Alarm',           cls: 'olive' },
  { id: 'dsp',       name: 'DSP & Ağ',              cls: 'red' },
  { id: 'mikrofon',  name: 'Mikrofon & Ölçüm',      cls: 'gold' },
];

export const BRAND_LEVELS: Record<BrandLevel, { label: string; cls: DisciplineCls }> = {
  premium:    { label: 'PREMIUM PARTNER', cls: 'red' },
  authorized: { label: 'YETKİLİ BAYİ',    cls: 'gold' },
  partner:    { label: 'ÇÖZÜM ORTAĞI',    cls: 'indigo' },
};

export const BRANDS: Brand[] = [
  // Ses Sistemi
  { id: 'db',          name: 'd&b audiotechnik', origin: 'Almanya', level: 'premium',    categories: ['ses'],          description: 'Konser ve fixed install için referans line array + cardioid sub mimarisi.' },
  { id: 'l-acoustics', name: 'L-Acoustics',      origin: 'Fransa',  level: 'premium',    categories: ['ses'],          description: 'K2, KS28 ve Soundvision simülasyon — büyük ölçek line array çözümleri.' },
  { id: 'meyer',       name: 'Meyer Sound',      origin: 'ABD',     level: 'authorized', categories: ['ses'],          description: 'Tiyatro, sahne ve broadcast için MAPP simülasyonu + self-powered hoparlörler.' },
  { id: 'bose-pro',    name: 'Bose Professional',origin: 'ABD',     level: 'authorized', categories: ['ses'],          description: 'Restoran ve kurumsal lobi için çok zonlu Dante/70V çözümleri.' },
  { id: 'jbl-pro',     name: 'JBL Professional', origin: 'ABD',     level: 'authorized', categories: ['ses'],          description: 'Sahne, kulüp ve geniş alan için yüksek-SPL line array + sub konfigürasyonu.' },
  { id: 'pioneer-pro', name: 'Pioneer Pro Audio',origin: 'Japonya', level: 'premium',    categories: ['ses'],          description: 'Kulüp, sahne ve performans alanları için XY serisi PA + cardioid sub array.' },
  { id: 'eaw',         name: 'EAW',              origin: 'ABD',     level: 'authorized', categories: ['ses'],          description: 'Microwedge sahne monitör + adaptive line array çözümleri.' },

  // DSP & Ağ
  { id: 'q-sys',       name: 'Q-SYS (QSC)',      origin: 'ABD',     level: 'premium',    categories: ['dsp', 'konferans'], description: 'Network audio platform + Q-SYS Reflect uzaktan izleme + native MTR/Zoom.' },
  { id: 'bss',         name: 'BSS Soundweb',     origin: 'İngiltere', level: 'authorized', categories: ['dsp'],        description: 'BLU-100/BLU-806 matrix DSP, Dante kart genişlemesi, fixed install referansı.' },
  { id: 'symetrix',    name: 'Symetrix',         origin: 'ABD',     level: 'authorized', categories: ['dsp'],          description: 'Edge / Radius DSP + paging mantığı + Dante / AES67 native.' },
  { id: 'biamp',       name: 'Biamp Tesira',     origin: 'ABD',     level: 'authorized', categories: ['dsp', 'konferans'], description: 'Tesira FORTÉ, AVB / Dante hibrit toplantı sistemleri.' },
  { id: 'powersoft',   name: 'Powersoft',        origin: 'İtalya',  level: 'premium',    categories: ['ses', 'dsp'],   description: 'X-Series 4 / 8 kanal Class-D amfi + entegre Armonia DSP.' },
  { id: 'lab-gruppen', name: 'Lab.gruppen',      origin: 'İsveç',   level: 'authorized', categories: ['ses'],          description: 'D-Series multi-kanal touring amfi referansı.' },

  // Akustik
  { id: 'vicoustic',   name: 'Vicoustic',        origin: 'Portekiz', level: 'authorized', categories: ['akustik'],     description: 'Hibrit polimer panel, Multifuser diffüzör, kumaş kaplı absorpsiyon kasetleri.' },
  { id: 'gik',         name: 'GIK Acoustics',    origin: 'ABD',     level: 'authorized', categories: ['akustik'],      description: 'Modal bass trap, scatter plate diffüzör, broadband absorber.' },
  { id: 'rpg',         name: 'RPG Diffusor Systems', origin: 'ABD', level: 'partner',    categories: ['akustik'],      description: 'Schroeder, QRD ve primitive root difüzör — yüksek frekans dağılımı.' },
  { id: 'auralex',     name: 'Auralex',          origin: 'ABD',     level: 'authorized', categories: ['akustik'],      description: 'Studiofoam, LENRD bass trap, modüler stüdyo akustik panelleri.' },
  { id: 'rockwool',    name: 'Rockwool',         origin: 'Danimarka', level: 'partner',  categories: ['akustik'],      description: 'Mineral yün insülasyon — duvar dolgu ve modal kontrol katmanı.' },

  // Stüdyo monitör
  { id: 'genelec',     name: 'Genelec',          origin: 'Finlandiya', level: 'premium',  categories: ['studio'],      description: '8000 ve 8300 SAM serisi referans monitör + GLM kalibrasyon.' },
  { id: 'neumann',     name: 'Neumann',          origin: 'Almanya', level: 'premium',    categories: ['studio'],       description: 'KH 80/120/420 referans monitör, MA 1 oda kalibrasyon mikrofonu.' },
  { id: 'focal-pro',   name: 'Focal Professional', origin: 'Fransa', level: 'authorized', categories: ['studio'],      description: 'Trio6, Solo6 ve SM9 monitör; broadcast referans portföyü.' },
  { id: 'pmc',         name: 'PMC',              origin: 'İngiltere', level: 'authorized', categories: ['studio'],     description: 'Transmission line tasarımı ile yüksek-end mix referans monitör.' },

  // LED & Görüntü
  { id: 'absen',       name: 'Absen',            origin: 'Çin',     level: 'authorized', categories: ['led'],          description: 'PL/HC serisi LED panel — fixed install ve sahne uygulamaları.' },
  { id: 'unilumin',    name: 'Unilumin',         origin: 'Çin',     level: 'authorized', categories: ['led'],          description: 'UpadIII ve UTV serisi P1.5–P2.6 indoor LED.' },
  { id: 'roe-visual',  name: 'ROE Visual',       origin: 'Hollanda', level: 'authorized', categories: ['led'],         description: 'Carbon Series CB serisi — touring LED referansı.' },
  { id: 'novastar',    name: 'Novastar',         origin: 'Çin',     level: 'authorized', categories: ['led'],          description: 'Coex Pro, MX serisi processor; HDR + genlock + frame lock.' },
  { id: 'brompton',    name: 'Brompton Tech',    origin: 'İngiltere', level: 'premium',  categories: ['led'],          description: 'Tessera processor — sahne ve XR stüdyo referansı.' },

  // Konferans / AV
  { id: 'shure',       name: 'Shure',            origin: 'ABD',     level: 'premium',    categories: ['konferans', 'mikrofon'], description: 'MXA920 / MXA901 tavan beamforming dizi + IntelliMix DSP.' },
  { id: 'sennheiser',  name: 'Sennheiser',       origin: 'Almanya', level: 'premium',    categories: ['konferans', 'mikrofon'], description: 'TeamConnect Ceiling 2 + EW-DX kablosuz referans.' },
  { id: 'bosch-dicentis', name: 'Bosch DICENTIS',origin: 'Almanya', level: 'authorized', categories: ['konferans'],    description: 'Konferans, oylama ve simültane çeviri (4 dile kadar).' },
  { id: 'crestron',    name: 'Crestron',         origin: 'ABD',     level: 'authorized', categories: ['konferans'],    description: 'Tek-dokunuş kontrol panelleri + Crestron Fusion uzaktan izleme.' },
  { id: 'extron',      name: 'Extron',           origin: 'ABD',     level: 'authorized', categories: ['konferans'],    description: 'Sinyal yönetimi, presentation switcher ve oda kontrolörleri.' },
  { id: 'logitech',    name: 'Logitech',         origin: 'İsviçre', level: 'authorized', categories: ['konferans'],    description: 'Rally Bar / Rally Plus — MTR ve Zoom Rooms sertifikalı.' },
  { id: 'poly',        name: 'Poly',             origin: 'ABD',     level: 'authorized', categories: ['konferans'],    description: 'Studio X serisi all-in-one konferans video bar.' },
  { id: 'yealink',     name: 'Yealink',          origin: 'Çin',     level: 'authorized', categories: ['konferans'],    description: 'MeetingBar A30 + RoomPanel — Teams Rooms paketleri.' },

  // VA
  { id: 'bosch-praesensa', name: 'Bosch Praesensa', origin: 'Almanya', level: 'premium', categories: ['anons'],        description: 'EN 54-16 sertifikalı Voice Alarm + paging + acil tahliye platformu.' },
  { id: 'honeywell',   name: 'Honeywell',        origin: 'ABD',     level: 'authorized', categories: ['anons'],        description: 'INTEVIO + Variodyn D1 EN 54-16 voice alarm panel + amfi.' },
  { id: 'toa',         name: 'TOA',              origin: 'Japonya', level: 'authorized', categories: ['anons'],        description: 'VX-3000 / VM-3000 EN 54-16 sertifikalı çağrı + anons amfi.' },

  // Mikrofon & ölçüm
  { id: 'bk',          name: 'B&K (Brüel & Kjær)',origin: 'Danimarka', level: 'partner', categories: ['mikrofon'],     description: 'Sınıf-1 ölçüm mikrofonu + saha kalibrasyon ekipmanı.' },
  { id: 'dpa',         name: 'DPA Microphones',  origin: 'Danimarka', level: 'authorized', categories: ['mikrofon'],   description: 'd:dicate / d:vote serisi referans mikrofon — broadcast + canlı ses.' },
];

/* =========================================================
   CERTIFICATIONS
   ========================================================= */
export type Certification = {
  id: string;
  code: string;
  name: string;
  body: string;
  scope: string;
  appliesTo: string[];
  documentNote: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'en-54-16',
    code: 'EN 54-16',
    name: 'Voice Alarm Sistem Bileşeni',
    body: 'CEN — Avrupa Standardizasyon Komitesi',
    scope: 'Sesli yangın tahliye sistemleri için kontrol ve gösterge bileşenleri için zorunlu standart.',
    appliesTo: ['AVM', 'Otel', 'Hastane', 'Okul', 'Kamu binası', '50+ kişilik toplanma alanı'],
    documentNote: 'Sistem tasarımı + STI-PA ölçüm raporu + bileşen sertifikaları yapı denetim sürecinde paylaşılır.',
  },
  {
    id: 'en-54-24',
    code: 'EN 54-24',
    name: 'Voice Alarm Hoparlör',
    body: 'CEN — Avrupa Standardizasyon Komitesi',
    scope: 'EN 54-16 sistemine bağlı hoparlör bileşenleri için zorunlu sertifika.',
    appliesTo: ['EN 54-16 zorunlu olan tüm yapılarda', 'Yangın yönetmeliği kapsamı'],
    documentNote: 'Hoparlör üretici sertifikaları (CE + EN 54-24) ihale dosyasıyla birlikte sunulur.',
  },
  {
    id: 'iso-3382',
    code: 'ISO 3382',
    name: 'Mekân Akustik Ölçüm Standardı',
    body: 'ISO — Uluslararası Standartlar Örgütü',
    scope: 'RT60, EDT, T20/T30, C50, D50 ölçüm metodolojisi standardı; akustik ölçüm dokümantasyonunun referansı.',
    appliesTo: ['Konser salonu', 'Stüdyo', 'Konferans odası', 'Tiyatro', 'Auditorium'],
    documentNote: 'Ölçüm raporları ISO 3382 metodolojisine uygun, kalibre B&K sınıf-1 mikrofonla saha kayıtları içerir.',
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    name: 'Kalite Yönetim Sistemi',
    body: 'ISO — Uluslararası Standartlar Örgütü',
    scope: 'Şirket içi süreç, müşteri ilişkileri ve sürekli iyileştirme yönetim sistemi.',
    appliesTo: ['Tüm projeler', 'İhale ön nitelik gereksinimi'],
    documentNote: 'Şirket sertifika belgesi talep üzerine PDF olarak iletilir.',
  },
  {
    id: 'ce',
    code: 'CE',
    name: 'Avrupa Uygunluk İşareti',
    body: 'AB Komisyonu',
    scope: 'Tüm elektrikli ve elektronik bileşenler için zorunlu uygunluk işareti.',
    appliesTo: ['Hoparlör', 'Amfi', 'DSP', 'LED panel', 'Mikrofon', 'Network ekipmanı'],
    documentNote: 'Tüm önerilen ekipmanların CE belgesi proje dosyasında listelenir.',
  },
  {
    id: 'tse',
    code: 'TSE',
    name: 'Türk Standartları Enstitüsü',
    body: 'TSE — Türk Standartları Enstitüsü',
    scope: 'Türkiye pazarı için ulusal standart uygunluk ve TSE-K hizmet yeterliliği.',
    appliesTo: ['Kamu ihalesi', 'Yapı denetim'],
    documentNote: 'Hizmet yeterlilik belgesi + ürün TSE belgeleri ihale dosyasıyla sunulur.',
  },
  {
    id: 'cedia',
    code: 'CEDIA',
    name: 'Custom Electronic Design & Installation',
    body: 'CEDIA — Custom Electronic Design and Installation Association',
    scope: 'Profesyonel AV entegratörleri için uluslararası eğitim + sertifikasyon programı.',
    appliesTo: ['Konferans', 'Stüdyo', 'Smart room teslimleri'],
    documentNote: 'CEDIA EST sertifikalı ekip üyelerinin sertifika kopyaları talep üzerine iletilir.',
  },
  {
    id: 'dante',
    code: 'DANTE Lvl 2/3',
    name: 'Audinate Dante Network Sertifikası',
    body: 'Audinate',
    scope: 'Dante audio network tasarım ve kurulum yetkinliği seviyeleri.',
    appliesTo: ['Çok zonlu Dante kurulumları', 'AVB / AES67 hibrit tasarım'],
    documentNote: 'Sertifikalı ağ tasarımcısı talimatı altında devreye alma + dokümantasyon.',
  },
];


/* =========================================================
   REFERENCES — Bizi seçen mekânlar
   (placeholder isimler + sektörel etiketler — gerçek müşteri
    referanslarınızla değiştirin)
   ========================================================= */
export type Reference = {
  id: string;
  name: string;
  city: string;
  year: string;
  sector: 'Restoran' | 'Otel' | 'Sahne' | 'Stüdyo' | 'Konferans' | 'Kurumsal' | 'AVM' | 'Kamu';
  cls: DisciplineCls;
  image: string;
  scope: string;
};

export const REFERENCES: Reference[] = [
  { id: 'r1',  name: 'Bosphorus Bistro',        city: 'İstanbul', year: '2024', sector: 'Restoran',  cls: 'red',    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=900',  scope: '4 zon Dante + akustik panel' },
  { id: 'r2',  name: 'Aurora Hotel & SPA',      city: 'Antalya',  year: '2024', sector: 'Otel',      cls: 'gold',   image: 'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=900', scope: '24 zon + EN 54-16 + LED P2.6' },
  { id: 'r3',  name: 'Kıyı Konser Alanı',       city: 'İzmir',    year: '2024', sector: 'Sahne',     cls: 'red',    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900', scope: 'Line array + cardioid sub' },
  { id: 'r4',  name: 'Studio Alpha Mix',        city: 'İstanbul', year: '2024', sector: 'Stüdyo',    cls: 'teal',   image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80', scope: 'Atmos 9.1.4 + RFZ' },
  { id: 'r5',  name: 'Capital Konferans',       city: 'Ankara',   year: '2023', sector: 'Konferans', cls: 'plum',   image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=900', scope: 'DICENTIS + 32 ch beamforming' },
  { id: 'r6',  name: 'Plaza Lobi',              city: 'İstanbul', year: '2025', sector: 'Kurumsal',  cls: 'gold',   image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=900',  scope: '3 zon tavan + EN 54-16' },
  { id: 'r7',  name: 'Riva Sahne',              city: 'İstanbul', year: '2023', sector: 'Sahne',     cls: 'indigo', image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&q=80', scope: 'L-Acoustics K2 + delay tower' },
  { id: 'r8',  name: 'Kafe Akustik',            city: 'İzmir',    year: '2024', sector: 'Restoran',  cls: 'red',    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80', scope: '2 zon + tavan absorpsiyon' },
  { id: 'r9',  name: 'Marina Vista Restoran',   city: 'Bodrum',   year: '2024', sector: 'Restoran',  cls: 'gold',   image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80', scope: 'Outdoor IP65 + iç + teras' },
  { id: 'r10', name: 'Anadolu Toplantı Salonu', city: 'Bursa',    year: '2024', sector: 'Konferans', cls: 'plum',   image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80', scope: 'MTR sertifikalı + steerable' },
  { id: 'r11', name: 'Lifestyle AVM',           city: 'Ankara',   year: '2023', sector: 'AVM',       cls: 'olive',  image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80', scope: 'EN 54-16 VA + 48 zon paging' },
  { id: 'r12', name: 'Şehir Kongre Merkezi',    city: 'İzmir',    year: '2023', sector: 'Kamu',      cls: 'plum',   image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=900', scope: '8 oda + auditorium + çeviri' },
];

/* =========================================================
   TESTIMONIALS — Müşteri yorumları
   (placeholder Türkçe yorumlar — gerçek müşteri izniyle
    güncellenmesi tavsiye edilir)
   ========================================================= */
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  venue: string;
  cls: DisciplineCls;
  quote: string;
  portrait: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'M. Eren Yıldız',
    role: 'F&B Direktörü',
    venue: 'Bosphorus Bistro · İstanbul',
    cls: 'red',
    quote: 'Ölçüm raporuna kadar her şeyi şeffaf paylaştılar. Açılıştan sonra masada konuşma şikâyeti gerçekten sıfıra indi — daha önceki sistemde her gece duyuyorduk.',
    portrait: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 't2',
    name: 'Selin Aksoy',
    role: 'Genel Müdür',
    venue: 'Aurora Hotel & SPA · Antalya',
    cls: 'gold',
    quote: 'EN 54-16 yapı denetim sürecinde dosya hazırlığı dahil her şeyi onlar üstlendi. Otel zinciri standartlarına uygun bir teslim aldık, denetimden ilk seferde geçtik.',
    portrait: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 't3',
    name: 'Caner Demir',
    role: 'Mix Mühendisi',
    venue: 'Studio Alpha · İstanbul',
    cls: 'teal',
    quote: 'Apartmanda Atmos stüdyo kurmak çıldırma derecesinde zordur — kayan kat ve modal kontrolü hiç sorunsuz teslim ettiler. Komşulardan tek bir şikâyet gelmedi, mix kararlarım artık güvenilir.',
    portrait: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 't4',
    name: 'Ayşe Karadağ',
    role: 'Konferans Operasyon Sorumlusu',
    venue: 'Capital Konferans · Ankara',
    cls: 'plum',
    quote: 'Hibrit toplantıda uzak katılımcı memnuniyeti %62\'den %94\'e çıktı — kulağımızla duyuyoruz, mailde okuyoruz. Beamforming dizisi ve AEC zinciri farkını anında hissettirdi.',
    portrait: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

/* =========================================================
   Helpers
   ========================================================= */
export const getDiscipline = (slug: string) => DISCIPLINES.find((d) => d.slug === slug) ?? null;
export const getVenue = (slug: string) => VENUES.find((v) => v.slug === slug) ?? null;
export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug) ?? null;
export const projectsByVenue = (slug: VenueSlug) => PROJECTS.filter((p) => p.venueType === slug);
export const projectsByDiscipline = (cls: DisciplineCls) => PROJECTS.filter((p) => p.disciplines.includes(cls));
export const brandsByCategory = (id: BrandCategory) => BRANDS.filter((b) => b.categories.includes(id));
