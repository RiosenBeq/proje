import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useSeo } from '../lib/seo';

const PARTNER_BASE = 'https://hizlakirala.com';

type RentalCategory = 'ses' | 'led' | 'sahne' | 'backline' | 'av';

const CATEGORIES: Array<{ id: RentalCategory; name: string; count?: number }> = [
  { id: 'ses', name: 'Ses Sistemi' },
  { id: 'led', name: 'LED & Video' },
  { id: 'sahne', name: 'Sahne & Işık' },
  { id: 'backline', name: 'Backline' },
  { id: 'av', name: 'Konferans / AV' },
];

type RentalItem = {
  id: string;
  category: RentalCategory;
  brand: string;
  name: string;
  short: string;
  description: string;
  specs: Array<[label: string, value: string]>;
  dailyFrom?: string;
  href: string;
  cls: 'red' | 'gold' | 'indigo' | 'teal' | 'plum' | 'olive';
};

// Hizla Kirala ortaklı katalog. URL'ler şu an kategori sayfalarına gidiyor;
// canlı ürün linkleri Hizla Kirala tarafından paylaşıldıkça tek tek güncellenecek.
const ITEMS: RentalItem[] = [
  {
    id: 'line-array-12',
    category: 'ses',
    brand: 'L-Acoustics · K-serisi',
    name: 'Line Array Stack — 12 kutu',
    short: '2000+ kişi açık alan / orta-büyük salon',
    description:
      'K2 + KS28 sub kombinasyonu. Soundvision projesi, rigging hesabı ve DSP preset dahil. Festival, konser ve kurumsal açılış için.',
    specs: [
      ['SPL hedef', '105 dB @ 50 m'],
      ['Kapsama', '90° × 110°'],
      ['Rigging', 'CE sertifikalı motor + kontrol'],
    ],
    dailyFrom: '₺18.500 / gün',
    href: `${PARTNER_BASE}/kategori/ses-sistemi/line-array`,
    cls: 'red',
  },
  {
    id: 'point-source-pa',
    category: 'ses',
    brand: 'Bose Pro · L1 Pro / F1',
    name: 'Point Source PA — 4 hoparlör',
    short: '200–500 kişi · konferans, lansman, salon',
    description:
      'Hızlı kurulum, tek operatörle 30 dakikada ayakta. DJ + konuşma + arka plan müzik için DSP preset hazır.',
    specs: [
      ['SPL hedef', '98 dB @ 20 m'],
      ['Setup', '30 dk · 1 operatör'],
      ['Aksesuar', 'Stand + kablo dahil'],
    ],
    dailyFrom: '₺4.200 / gün',
    href: `${PARTNER_BASE}/kategori/ses-sistemi/aktif-hoparlor`,
    cls: 'gold',
  },
  {
    id: 'digital-mixer-foh',
    category: 'ses',
    brand: 'DiGiCo · SD12 / Yamaha CL5',
    name: 'Dijital Mikser — FOH Konsol',
    short: '48 kanal · Dante / MADI ağ',
    description:
      'Sahne, konferans ve hibrit yayın için. Show dosyası ön hazırlığı ile teslim ediyoruz; sahaya yeniden programlama gerekmiyor.',
    specs: [
      ['Kanal', '48 giriş · 24 mix bus'],
      ['Ağ', 'Dante + MADI'],
      ['Yedek', 'Hot-spare kart'],
    ],
    dailyFrom: '₺6.800 / gün',
    href: `${PARTNER_BASE}/kategori/ses-sistemi/dijital-mikser`,
    cls: 'indigo',
  },
  {
    id: 'wireless-mic-8',
    category: 'ses',
    brand: 'Shure · ULX-D / QLX-D',
    name: 'Telsiz Mikrofon Seti — 8 kanal',
    short: 'Koordineli frekans dosyası · BTK uyumlu',
    description:
      'Vokal, headset ve yaka karışık konfigürasyon. RF taraması ve koordinasyon raporu teslim dosyasında. Konuşmacı sayısına göre genişletilebilir.',
    specs: [
      ['Kanal', '8 (16/24\'e çıkar)'],
      ['Frekans', 'BTK uyumlu · koordineli'],
      ['Pil', 'Şarjlı + yedek 2 saat'],
    ],
    dailyFrom: '₺3.400 / gün',
    href: `${PARTNER_BASE}/kategori/ses-sistemi/telsiz-mikrofon`,
    cls: 'teal',
  },
  {
    id: 'led-wall-p2-9',
    category: 'led',
    brand: 'Absen · Polaris / ROE',
    name: 'LED Ekran Duvar — 6×3 m',
    short: 'Pixel pitch 2.9 · iç mekân',
    description:
      'Lansman, sahne arkası ve kurumsal etkinlikler için. NovaStar processor ve yedek modül havuzu dahil. Tasarım için 1920×1080 maskeleme şablonu veriyoruz.',
    specs: [
      ['Boyut', '6 m × 3 m'],
      ['Pixel pitch', '2.9 mm iç mekân'],
      ['Parlaklık', '1200 nit'],
    ],
    dailyFrom: '₺22.000 / gün',
    href: `${PARTNER_BASE}/kategori/led-ekran/ic-mekan`,
    cls: 'red',
  },
  {
    id: 'led-outdoor-p4',
    category: 'led',
    brand: 'Absen · A-serisi',
    name: 'LED Ekran Duvar — Outdoor 8×4 m',
    short: 'Pixel pitch 3.9 · IP65 dış mekân',
    description:
      'Festival, konser ve kurumsal açılışlar için yağmur korumalı outdoor seri. Gündüz okunabilir parlaklık + yedek besleme.',
    specs: [
      ['Boyut', '8 m × 4 m'],
      ['Pixel pitch', '3.9 mm dış mekân'],
      ['Koruma', 'IP65 ön / IP54 arka'],
    ],
    dailyFrom: '₺34.000 / gün',
    href: `${PARTNER_BASE}/kategori/led-ekran/dis-mekan`,
    cls: 'gold',
  },
  {
    id: 'truss-grid-10x8',
    category: 'sahne',
    brand: 'Prolyte · H30V',
    name: 'Truss Grid — 10×8 m',
    short: 'CE sertifikalı yük hesabı ile',
    description:
      'Sahne üstü ground-support grid + 4 köşe motor. Yük hesabı, rigging plan ve operatör sertifikası dosyada teslim edilir.',
    specs: [
      ['Açıklık', '10 m × 8 m'],
      ['Motor', '4 × 1 ton Chain-Hoist'],
      ['Sertifika', 'CE + statik rapor'],
    ],
    dailyFrom: '₺9.500 / gün',
    href: `${PARTNER_BASE}/kategori/sahne/truss`,
    cls: 'olive',
  },
  {
    id: 'moving-heads-12',
    category: 'sahne',
    brand: 'Robe · MegaPointe / Spiider',
    name: 'Moving Head Set — 12 fikstür',
    short: 'Beam + spot + wash karışım',
    description:
      'Sahne ışık paketi. GrandMA3 ile pre-programlama opsiyonu, operatör talebi durumunda dahildir. DMX evren planı teslim dosyasında.',
    specs: [
      ['Fikstür', '6 beam + 6 wash'],
      ['Kontrol', 'GrandMA3 / Avolites'],
      ['DMX', '2 evren + ArtNet'],
    ],
    dailyFrom: '₺7.800 / gün',
    href: `${PARTNER_BASE}/kategori/sahne/moving-head`,
    cls: 'plum',
  },
  {
    id: 'backline-drum',
    category: 'backline',
    brand: 'DW · Performance Series',
    name: 'Davul Seti + Bakır',
    short: 'Festival rider uyumlu',
    description:
      '5\'li shell pack + Zildjian K Custom bakır set. Vurmalı mikrofon paketi (DPA + Shure SM57) opsiyonel.',
    specs: [
      ['Shell', '22" kick · 10/12/14/16'],
      ['Bakır', 'Zildjian K Custom 5\'li'],
      ['Mic paketi', 'Opsiyonel · 8 kanal'],
    ],
    dailyFrom: '₺2.400 / gün',
    href: `${PARTNER_BASE}/kategori/backline/davul`,
    cls: 'gold',
  },
  {
    id: 'backline-guitar-amp',
    category: 'backline',
    brand: 'Fender / Marshall / Ampeg',
    name: 'Gitar & Bas Amfi Seti',
    short: 'Twin Reverb · JCM800 · SVT-Classic',
    description:
      'Rider klasiği üç amfi paket. Sahnede yedek lamba + IEC kablo + cabinet kombinasyonları dahil.',
    specs: [
      ['Gitar', 'Twin Reverb + JCM800'],
      ['Bas', 'Ampeg SVT-Classic + 8×10'],
      ['Yedek', 'Lamba + sigorta dahil'],
    ],
    dailyFrom: '₺1.800 / gün',
    href: `${PARTNER_BASE}/kategori/backline/amfi`,
    cls: 'teal',
  },
  {
    id: 'beamforming-mic',
    category: 'av',
    brand: 'Shure · MXA920 / Sennheiser TCC2',
    name: 'Beamforming Konferans Mikrofonu',
    short: 'Hibrit toplantı · AEC + AGC dahil',
    description:
      'Tavan dizi mikrofon + Q-SYS / Dante DSP processor. Zoom Rooms, Teams Rooms ve Webex uyumlu konfigürasyon teslim ediliyor.',
    specs: [
      ['Kapsama', '6 m × 6 m konferans'],
      ['DSP', 'AEC + AGC + denoise'],
      ['Uyum', 'Zoom / Teams / Webex'],
    ],
    dailyFrom: '₺3.200 / gün',
    href: `${PARTNER_BASE}/kategori/konferans/beamforming-mikrofon`,
    cls: 'indigo',
  },
  {
    id: 'simultane-cevirmen',
    category: 'av',
    brand: 'Bosch · DICENTIS Wireless',
    name: 'Simültane Çeviri Sistemi',
    short: '6 dil · 200 alıcı',
    description:
      'DICENTIS kabin + tercüman ünitesi + IR yayıcı + alıcı havuzu. Devlet, AB ve kurumsal protokol toplantıları için kurulu teslim.',
    specs: [
      ['Dil', '6 kanal simültane'],
      ['Alıcı', '200 kulaklık seti'],
      ['Kabin', 'ISO 4043 uyumlu'],
    ],
    dailyFrom: '₺14.500 / gün',
    href: `${PARTNER_BASE}/kategori/konferans/simultane`,
    cls: 'plum',
  },
];

const FILTERS: Array<RentalCategory | 'all'> = ['all', ...CATEGORIES.map((c) => c.id)];

export default function HizlaKirala() {
  const [filter, setFilter] = useState<RentalCategory | 'all'>('all');

  useSeo({
    title: 'Ekipman Kiralama — Hizla Kirala Partnerliği · Ses, LED, Sahne | On Muzik Proje',
    description:
      'Etkinlik, konser, lansman ve konferans için günlük / haftalık AV kiralama. Hizla Kirala ortaklığıyla line array, LED ekran, sahne ışığı, dijital mikser, beamforming mikrofon ve simültane çeviri sistemleri. Mühendislik destekli teslim.',
    path: '/hizla-kirala',
    keywords: 'ses kiralama, led ekran kiralama, sahne kiralama, ışık kiralama, line array kiralama, simültane çeviri kiralama, dijital mikser kiralama, hizla kirala, etkinlik AV kiralama, İstanbul',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Ekipman Kiralama — Hizla Kirala Partnerliği',
      url: 'https://onmuzikproje.com/hizla-kirala',
      isPartOf: { '@id': 'https://onmuzikproje.com/#website' },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: ITEMS.length,
        itemListElement: ITEMS.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `${it.brand} — ${it.name}`,
          url: it.href,
        })),
      },
    },
  });

  const list = useMemo(() => {
    if (filter === 'all') return ITEMS;
    return ITEMS.filter((it) => it.category === filter);
  }, [filter]);

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />KİRALAMA · HIZLA KIRALA × ON MUZIK PROJE</span>
          <h1 className="subhero-title">
            Etkinlik için <em>ekipman</em>,<br />arkasında <em>mühendislik.</em>
          </h1>
          <p className="subhero-lead">
            Sahne, konser, lansman ve konferans için günlük / haftalık AV kiralama.{' '}
            <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', borderBottom: '1px solid currentColor' }}>
              Hizla Kirala
            </a>
            {' '}ortaklığıyla seçili envanteri burada listeliyoruz — kart üzerindeki bağlantı doğrudan
            ilgili ürünün Hizla Kirala sayfasına gider. Kurulum, DSP preset ve operatör desteği
            On Muzik Proje tarafından sağlanır.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer" className="btn btn-red">
              Hizla Kirala'yı Aç <span className="arrow" />
            </a>
            <Link to="/iletisim" className="btn btn-ghost">
              Önce keşif iste <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Süreç — 3 adım */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />01 · NASIL İŞLİYOR</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Üç adımda <em>sahaya</em>.</h2>
            </div>
            <div className="right">
              Hizla Kirala envanterini seçer, biz mühendislik tarafını koyarız. Kurulum, kalibrasyon,
              operatör ve söküm dahil teslim — sadece kutu değil, çalışan bir sistem alırsınız.
            </div>
          </div>
          <div className="paths reveal">
            <article
              className="path"
              style={{
                ['--c' as string]: 'var(--red)',
                ['--cs' as string]: 'var(--red-soft)',
                ['--cl' as string]: 'var(--red-line)',
              }}
            >
              <span className="p-tag">01 · SEÇ</span>
              <h4 style={{ marginTop: 22 }}>Listeden veya bize sor</h4>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                ENVANTER · HIZLA KIRALA
              </p>
              <ul className="p-list" style={{ gridTemplateColumns: '1fr' }}>
                <li>Aşağıdaki listeden uygun ekipmanı seç</li>
                <li>Bilmiyorsan: mekân büyüklüğü + kişi sayısı yaz, biz öneririz</li>
                <li>Doğrudan Hizla Kirala'ya gidip rezerve edebilirsin</li>
              </ul>
            </article>
            <article
              className="path"
              style={{
                ['--c' as string]: 'var(--gold)',
                ['--cs' as string]: 'var(--gold-soft)',
                ['--cl' as string]: 'var(--gold-line)',
                transitionDelay: '60ms',
              }}
            >
              <span className="p-tag">02 · KUR</span>
              <h4 style={{ marginTop: 22 }}>Mühendislik teslim</h4>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                KURULUM · DSP · OPERATÖR
              </p>
              <ul className="p-list" style={{ gridTemplateColumns: '1fr' }}>
                <li>Saha kurulumu + DSP preset + kalibrasyon</li>
                <li>Sertifikalı rigging (gereken yerlerde)</li>
                <li>Show süresince operatör opsiyonu</li>
              </ul>
            </article>
            <article
              className="path"
              style={{
                ['--c' as string]: 'var(--indigo)',
                ['--cs' as string]: 'var(--indigo-soft)',
                ['--cl' as string]: 'var(--indigo-line)',
                transitionDelay: '120ms',
              }}
            >
              <span className="p-tag">03 · TESLİM</span>
              <h4 style={{ marginTop: 22 }}>Söküm ve çıkış</h4>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                SÖKÜM · DOKÜMAN
              </p>
              <ul className="p-list" style={{ gridTemplateColumns: '1fr' }}>
                <li>Etkinlik sonrası söküm ve nakliye</li>
                <li>Mekân tutanağı + ölçüm dökümü</li>
                <li>Sonraki etkinlik için arşiv preset</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Filtre + Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · KATALOG · {ITEMS.length} ÜRÜN</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Seçili <em>envanter</em>.</h2>
            </div>
            <div className="right">
              Hizla Kirala kataloğundan On Muzik Proje mühendislik standardına uygun seçtiklerimiz.
              Her kart doğrudan ilgili ürünün Hizla Kirala sayfasına gider — fiyat ve müsaitlik
              orada güncel tutulur.
            </div>
          </div>

          <div className="venue-tabs reveal">
            {FILTERS.map((f, i) => {
              const cat = CATEGORIES.find((c) => c.id === f);
              const label = cat ? cat.name : 'Tüm Ekipman';
              const count = f === 'all' ? ITEMS.length : ITEMS.filter((it) => it.category === f).length;
              return (
                <button
                  key={String(f)}
                  type="button"
                  className={`venue-tab${filter === f ? ' on' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  <span className="vt-num">{i === 0 ? '00' : `0${i}`}</span>
                  {label}
                  <span style={{ opacity: 0.6, marginLeft: 6 }}>{count}</span>
                </button>
              );
            })}
          </div>

          <div
            className="equip-grid reveal"
            style={{ marginTop: 0, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {list.map((it) => (
              <a
                key={it.id}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="equip-cell rental-card"
                style={{
                  padding: '26px 24px',
                  minHeight: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'inherit',
                  borderTop: `2px solid var(--${it.cls})`,
                }}
              >
                <div className="k" style={{ color: `var(--${it.cls})`, fontWeight: 600 }}>
                  {CATEGORIES.find((c) => c.id === it.category)?.name}
                </div>
                <div className="v" style={{ fontSize: 19, marginTop: 4, lineHeight: 1.25 }}>
                  {it.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10.5,
                    letterSpacing: '0.14em',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    marginTop: 6,
                  }}
                >
                  {it.brand}
                </div>
                <p
                  style={{
                    marginTop: 14,
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: 'var(--ink-2)',
                    fontStyle: 'italic',
                  }}
                >
                  {it.short}
                </p>
                <p
                  style={{
                    marginTop: 8,
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: 'var(--ink-3)',
                  }}
                >
                  {it.description}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '14px 0 0',
                    borderTop: '1px solid var(--line)',
                    paddingTop: 12,
                  }}
                >
                  {it.specs.map(([label, value]) => (
                    <li
                      key={label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 12,
                        fontSize: 12,
                        lineHeight: 1.7,
                        color: 'var(--ink-3)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--f-mono)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                          fontSize: 10.5,
                        }}
                      >
                        {label}
                      </span>
                      <span style={{ textAlign: 'right' }}>{value}</span>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: 18,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>
                    {it.dailyFrom ? <><strong style={{ color: 'var(--ink)' }}>{it.dailyFrom}</strong><br /><span style={{ fontSize: 10.5, color: 'var(--muted)' }}>başlangıç · KDV hariç</span></> : 'Fiyat için tıklayın'}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 11,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: `var(--${it.cls})`,
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Hizla Kirala'da gör <span className="arrow" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p
            style={{
              marginTop: 28,
              fontSize: 12.5,
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            Aradığın ekipman listede yoksa{' '}
            <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)' }}>
              Hizla Kirala'nın tam kataloğunu
            </a>
            {' '}görebilir ya da{' '}
            <Link to="/iletisim" style={{ color: 'var(--red)' }}>bize özel paket</Link>
            {' '}talep edebilirsin. Etkinlik tarihinden en az 10 gün önce planlanırsa fiyat ve müsaitlik
            avantajlı oluyor.
          </p>
        </div>
      </section>

      {/* Neden On Muzik + Hizla Kirala */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />03 · ORTAKLIK</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>
                Envanter <em>onların,</em><br />mühendislik <em>bizim.</em>
              </h2>
            </div>
            <div className="right">
              Hizla Kirala, Türkiye'nin önde gelen AV ekipman havuzlarından biri. Biz bu havuzdan
              projeye uygun olanı seçer, kalibre eder ve sahada operatörle birlikte teslim ederiz.
              Etkinliğiniz "tak çalıştır" değil, ölçülmüş bir sistem olur.
            </div>
          </div>
          <div className="standards-grid reveal">
            <div className="standard">
              <div className="s-num">01</div>
              <h4>Marka bağımsız seçim</h4>
              <p>
                Tek bir vitrinden değil, projeye uygun olandan seçeriz. L-Acoustics da olabilir,
                Bose Pro da, Yamaha da — hedef metriği karşılayan kazanır.
              </p>
            </div>
            <div className="standard">
              <div className="s-num">02</div>
              <h4>Mühendislik teslim</h4>
              <p>
                Kutu teslimi değil. Soundvision / Mapp XT projesi, DSP preset, rigging hesabı ve
                ölçüm dökümü ile teslim. Etkinlik sonrası tutanak dahil.
              </p>
            </div>
            <div className="standard">
              <div className="s-num">03</div>
              <h4>Operatör opsiyonu</h4>
              <p>
                FOH mühendisi, monitör mühendisi, ışık operatörü ve LED VJ desteği. Show süresince
                arkamızdayız — sadece kuruluma değil, performansa kadar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section quote-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />ÖZEL PAKET TALEBİ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>
                Etkinliğinin <em>mühendislik</em><br />tarafı için keşif iste.
              </h2>
            </div>
            <div className="right">
              Mekân, tarih, beklenen kişi sayısı ve özel istekleri yaz — 24 saat içinde
              Hizla Kirala envanterinden uygun paketi öneririz. Birden fazla seçenek ile fiyat
              karşılaştırması yaparız.
              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/iletisim" className="btn btn-red">
                  Keşif Talep Et <span className="arrow" />
                </Link>
                <a href={PARTNER_BASE} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Tam katalog · Hizla Kirala <span className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
