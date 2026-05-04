import { Link } from 'react-router-dom';
import { type CSSProperties, type ImgHTMLAttributes, type ReactNode } from 'react';
import { useSeo } from '../lib/seo';

function ImgFade(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} onLoad={(e) => { e.currentTarget.classList.add('loaded'); props.onLoad?.(e); }} />;
}

type DiscCls = 'red' | 'gold' | 'indigo' | 'teal' | 'plum' | 'olive';

const CLS_VARS: Record<DiscCls, CSSProperties> = {
  red:    { ['--c' as any]: 'var(--red)',    ['--cs' as any]: 'var(--red-soft)',    ['--cl' as any]: 'var(--red-line)' },
  gold:   { ['--c' as any]: 'var(--gold)',   ['--cs' as any]: 'var(--gold-soft)',   ['--cl' as any]: 'var(--gold-line)' },
  indigo: { ['--c' as any]: 'var(--indigo)', ['--cs' as any]: 'var(--indigo-soft)', ['--cl' as any]: 'var(--indigo-line)' },
  teal:   { ['--c' as any]: 'var(--teal)',   ['--cs' as any]: 'var(--teal-soft)',   ['--cl' as any]: 'var(--teal-line)' },
  plum:   { ['--c' as any]: 'var(--plum)',   ['--cs' as any]: 'var(--plum-soft)',   ['--cl' as any]: 'var(--plum-line)' },
  olive:  { ['--c' as any]: 'var(--olive)',  ['--cs' as any]: 'var(--olive-soft)',  ['--cl' as any]: 'var(--olive-line)' },
};

const SERVICES: Array<{ slug: string; cls: DiscCls; tag: string; title: string; desc: string; bullets: string[]; metric: [string, string] }> = [
  { slug: 'ses',       cls: 'red',    tag: 'SES SİSTEMİ',     title: 'Profesyonel Ses',      desc: 'Zonlu PA mimarisi, ürün-bağımsız tasarım, DSP ve Dante ağ kalibrasyonu.',                          bullets: ['Çok zonlu hoparlör', 'DSP & matrix routing', 'EQ kalibrasyon', 'Dante / 70V dağıtım'],     metric: ['SPL HEDEF', '82–105 dB'] },
  { slug: 'akustik',   cls: 'gold',   tag: 'AKUSTİK',         title: 'Akustik Mühendislik',  desc: 'RT60, STI, EDT hedefli panel mimarisi, modal kontrol ve in-situ ölçüm.',                            bullets: ['Akustik ölçüm', 'Panel & diffüzör', 'Modal analiz', 'RFZ kontrol odası'],                  metric: ['RT60 HEDEF', '0.28–1.4 s'] },
  { slug: 'led',       cls: 'indigo', tag: 'LED & GÖRÜNTÜ',   title: 'LED Ekran Sistemi',    desc: 'Sahne, kurumsal lobi ve kontrol odaları için pixel pitch, processor ve AV-sync entegrasyonu.',     bullets: ['Pixel pitch analizi', 'Video processor', 'Truss & rigging', 'AV sync timeline'],          metric: ['PIXEL PITCH', 'P1.5 – P3.9'] },
  { slug: 'studio',    cls: 'teal',   tag: 'STÜDYO',          title: 'Stüdyo & Kayıt',       desc: 'Kontrol ve kayıt odaları için modal kontrol, izolasyon ve kalibre referans dinleme.',              bullets: ['Bass trap', 'Kayan kat', 'RFZ kontrol', 'Monitör tuning'],                                 metric: ['NC HEDEF', 'NC-18 / NC-20'] },
  { slug: 'konferans', cls: 'plum',   tag: 'KONFERANS / AV',  title: 'Toplantı & Konferans', desc: 'Beamforming mikrofon, hibrit toplantı, tek dokunuş kontrol ve simültane çeviri sistemleri.',       bullets: ['Beamforming mic', 'AEC + AGC', 'Kamera tracking', 'Tek dokunuş kontrol'],                  metric: ['STI HEDEF', '≥ 0.62'] },
  { slug: 'anons',     cls: 'olive',  tag: 'ANONS / VA',      title: 'Anons & Güvenlik',     desc: 'EN 54-16 uyumlu Voice Alarm, evakuasyon mimarisi ve merkezi anons sistemi tasarımı.',                bullets: ['EN 54-16 sertifika', 'Evakuasyon zoneları', 'BMS entegrasyon', 'Merkezi kontrol'],         metric: ['STANDART', 'EN 54-16'] },
];

const FEATURES: Array<{
  id: string; cls: DiscCls; partner?: string; title: ReactNode; desc: string;
  img: string; alt: string; flip?: boolean;
  stats: Array<[string, string]>;
}> = [
  {
    id: 'AT-01', cls: 'gold',
    title: <>Akustik <em>tasarım</em>.</>,
    desc: 'İzolasyon ve diffüzyon stratejileriyle, mekânın sonik karakterini yeniden tanımlıyoruz. Her yüzey, ses dalgalarını kontrol etmek için hibrit polimer panel ve modal kontrol kasetleriyle optimize edilir.',
    img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',
    alt: 'Akustik tasarım — vinyl ve hoparlör duvarı',
    stats: [['RT60 HEDEFİ', '0.45 – 0.60 s'], ['FREKANS', '20Hz – 22kHz'], ['MATERYAL', 'Hibrit Polimer'], ['İZOLASYON', '−55 dB STC']],
  },
  {
    id: 'PS-04', cls: 'red', partner: 'PIONEER PRO AUDIO',
    title: <>Profesyonel <em>ses</em>.</>,
    desc: 'Pioneer Pro Audio iş ortaklığımız ile konser salonlarından butik stüdyolara kadar en yüksek sadakatli ses sistemlerini kuruyoruz. Class-D amfi zinciri, 96kHz DSP ve cardioid sub array tasarımı.',
    img: 'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Profesyonel ses sistemi — gece ambiyansında hoparlör',
    flip: true,
    stats: [['MAX SPL', '136 dB Peak'], ['DİSPERSİYON', '110° × 10°'], ['İŞLEME', '96 kHz DSP'], ['AMFİ', 'Class-D Peak']],
  },
  {
    id: 'GU-09', cls: 'plum',
    title: <>Güvenlik & <em>kontrol</em>.</>,
    desc: 'Entegre bina otomasyonu ve üst düzey güvenlik sistemleri. Akustik konforunuzu teknik güvenlik ile mühürlüyoruz — yapay zeka destekli takip, biyometrik erişim ve DALI-2 aydınlatma entegrasyonu.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
    alt: 'Güvenlik kontrol odası ve hoparlör tavan kurulumu',
    stats: [['AI TAKİP', 'Aktif'], ['BİYOMETRİK', 'L5 Secure'], ['AYDINLATMA', 'DALI-2'], ['UZAK İZLEME', 'Mobil / Web']],
  },
];

export default function Services() {
  useSeo({
    title: 'Hizmetler — Akustik · Ses · LED · Stüdyo · Konferans · Anons | On Muzik Proje',
    description: 'Akustik tasarım, profesyonel ses sistemi, LED ekran, stüdyo akustiği, konferans/AV ve EN 54-16 voice alarm. Ölçüme dayalı, marka bağımsız mühendislik. RT60, STI, NC hedefli teslim.',
    path: '/hizmetler',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://onmuzik.com/' },
        { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://onmuzik.com/hizmetler' },
      ],
    },
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />HİZMET ARŞİVİ · 01</span>
          <h1 className="subhero-title">Disipliner <em>mühendislik</em><br />arşivi.</h1>
          <p className="subhero-lead">
            Akustikten LED ekrana, stüdyo tasarımından EN 54-16 voice alarm sistemine — her hizmet kendi
            ölçüm hedefiyle, ürün-bağımsız mühendislik diliyle teslim edilir.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Link key={s.title} to={`/hizmetler/${s.slug}`} className="svc-card reveal" style={{ ...CLS_VARS[s.cls], transitionDelay: `${i * 60}ms` }}>
                <span className="sc-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>
                <ul className="sc-list">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="sc-foot">
                  <span>{s.metric[0]}</span>
                  <span style={{ color: 'var(--ink-2)' }}>Detayını incele <span className="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · ÖNE ÇIKAN DİSİPLİNLER</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Detayda<br /><em>fark yaratan</em>.</h2>
            </div>
            <div className="right">
              Akustik tasarım, profesyonel ses ve güvenlik entegrasyonu üçlüsü için detaylı kapsam
              ve teslim hedefleri. Her başlık marka-bağımsız ve ölçüme dayalıdır.
            </div>
          </div>

          <div className="svc-features">
            {FEATURES.map((f, i) => (
              <article
                key={f.id}
                className={`svc-feature reveal${f.flip ? ' flip' : ''}`}
                style={{ ...CLS_VARS[f.cls], transitionDelay: `${i * 80}ms` }}
              >
                <div className="sf-frame">
                  <span className="sf-id">ID: {f.id}</span>
                  <ImgFade src={f.img} alt={f.alt} loading="lazy" />
                </div>
                <div>
                  {f.partner && (
                    <div className="sf-tag-row">
                      <span>OFFICIAL PARTNER</span>
                      <span className="line" />
                      <b>{f.partner}</b>
                    </div>
                  )}
                  <h3>{f.title}</h3>
                  <p className="sf-desc">{f.desc}</p>
                  <div className="sf-stats">
                    {f.stats.map(([k, v]) => (
                      <div key={k} className="sf-stat">
                        <div className="k">{k}</div>
                        <div className="v">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />03 · TESLİM ZİNCİRİ</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Anahtar teslim<br /><em>mühendislik</em>.</h2>
            </div>
            <div className="right">
              Her hizmet bağımsız olarak veya entegre paket olarak alınabilir. Akustik ölçüm + ses
              sistemi + LED görüntü için tek bir teslim zinciri kurguluyoruz.
            </div>
          </div>
          <div className="dashboard reveal">
            <div className="dash-head">
              <div className="dash-tabs">
                <button className="on" type="button">TESLİM AKIŞI</button>
                <button type="button">ÜRÜN-BAĞIMSIZ MARKA LİSTESİ</button>
              </div>
              <div className="dash-meta"><span className="dot" />SLA · 24 SAAT YANIT</div>
            </div>
            <div className="dash-grid">
              <div className="dash-cell">
                <div className="lbl"><span>SAHA KEŞFİ</span><span>ÜCRETSİZ</span></div>
                <div className="val"><em>1–2</em><small>gün</small></div>
                <div className="sub">→ Brifing · ölçüm planı · ihtiyaç haritası</div>
              </div>
              <div className="dash-cell">
                <div className="lbl"><span>ÖLÇÜM RAPORU</span><span>HAZIRLIK</span></div>
                <div className="val"><em>5–7</em><small>gün</small></div>
                <div className="sub">→ RT60 · STI · NC · CAD overlay</div>
              </div>
              <div className="dash-cell">
                <div className="lbl"><span>UYGULAMA</span><span>TESLİM</span></div>
                <div className="val"><em>4–8</em><small>hafta</small></div>
                <div className="sub">→ Montaj · DSP tuning · final ölçüm</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, marginTop: 32 }} className="svc-policy-grid">
            <div className="stat-hero reveal">
              <div className="sh-num">0.00%</div>
              <div className="sh-lbl">HATA PAYI POLİTİKASI</div>
              <p>
                Mühendislik ekibimiz, her kurulumda sıfır tolerans prensibiyle çalışır. Tüm donanımlar
                kurulum öncesi 48 saatlik stres testine tabi tutulur ve teslim öncesi RT60 / STI / NC ölçümleri
                hedef-fiili karşılaştırmasıyla raporlanır.
              </p>
            </div>
            <div className="contact-card reveal">
              <h3>Marka Bağımsız Mimari</h3>
              <div className="ic-row">
                <span className="k">SES</span>
                <span className="v">d&b · L-Acoustics · Meyer · Bose · JBL · Pioneer Pro</span>
              </div>
              <div className="ic-row">
                <span className="k">STÜDYO</span>
                <span className="v">Genelec · Neumann · Focal</span>
              </div>
              <div className="ic-row">
                <span className="k">AĞ</span>
                <span className="v">Dante · AES67 · AVB</span>
              </div>
              <div className="ic-row">
                <span className="k">VA</span>
                <span className="v">Bosch · Honeywell · TOA</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <div className="section-head reveal" style={{ marginBottom: 0, alignItems: 'baseline' }}>
              <div className="left">
                <span className="eyebrow"><span className="bar" />04 · LABORATUVAR STANDARTLARI</span>
                <h2 className="h-section" style={{ marginTop: 18, fontSize: 'clamp(28px, 4vw, 48px)' }}>Ekipman <em>envanteri</em>.</h2>
              </div>
              <div className="right">
                Envanterimizdeki tüm ürünler, küresel akustik standartlarına (ISO 3382) uygun olarak seçilmiştir.
              </div>
            </div>
            <div className="equip-grid reveal">
              <div className="equip-cell"><div className="k">Marka</div><div className="v">Pioneer Pro</div></div>
              <div className="equip-cell"><div className="k">Tip</div><div className="v">Point Source</div></div>
              <div className="equip-cell"><div className="k">Menşei</div><div className="v">UK / Japan</div></div>
              <div className="equip-cell"><div className="k">Destek</div><div className="v">24/7 Remote</div></div>
              <div className="equip-cell"><div className="k">Garanti</div><div className="v">5 Yıl Ltd.</div></div>
              <div className="equip-cell"><div className="k">Mikrofon</div><div className="v">B&K · DPA</div></div>
              <div className="equip-cell"><div className="k">Ölçüm</div><div className="v">SMAART · ARTA</div></div>
              <div className="equip-cell"><div className="k">DSP</div><div className="v">Q-SYS · BSS</div></div>
              <div className="equip-cell"><div className="k">Amfi</div><div className="v">Powersoft · Lab.gruppen</div></div>
              <div className="equip-cell"><div className="k">Ağ</div><div className="v">Dante / AES67</div></div>
            </div>
          </div>

          <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Hizmet İçin Teklif <span className="arrow" /></Link>
            <Link to="/portfolyo" className="btn btn-ghost">Portföyü Gör <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
