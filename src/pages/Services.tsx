import { Link } from 'react-router-dom';
import { useEffect, type CSSProperties } from 'react';

type DiscCls = 'red' | 'gold' | 'indigo' | 'teal' | 'plum' | 'olive';

const CLS_VARS: Record<DiscCls, CSSProperties> = {
  red:    { ['--c' as any]: 'var(--red)',    ['--cs' as any]: 'var(--red-soft)',    ['--cl' as any]: 'var(--red-line)' },
  gold:   { ['--c' as any]: 'var(--gold)',   ['--cs' as any]: 'var(--gold-soft)',   ['--cl' as any]: 'var(--gold-line)' },
  indigo: { ['--c' as any]: 'var(--indigo)', ['--cs' as any]: 'var(--indigo-soft)', ['--cl' as any]: 'var(--indigo-line)' },
  teal:   { ['--c' as any]: 'var(--teal)',   ['--cs' as any]: 'var(--teal-soft)',   ['--cl' as any]: 'var(--teal-line)' },
  plum:   { ['--c' as any]: 'var(--plum)',   ['--cs' as any]: 'var(--plum-soft)',   ['--cl' as any]: 'var(--plum-line)' },
  olive:  { ['--c' as any]: 'var(--olive)',  ['--cs' as any]: 'var(--olive-soft)',  ['--cl' as any]: 'var(--olive-line)' },
};

const SERVICES: Array<{ cls: DiscCls; tag: string; title: string; desc: string; bullets: string[]; metric: [string, string] }> = [
  { cls: 'red',    tag: 'SES SİSTEMİ',     title: 'Profesyonel Ses',      desc: 'Zonlu PA mimarisi, ürün-bağımsız tasarım, DSP ve Dante ağ kalibrasyonu.',                          bullets: ['Çok zonlu hoparlör', 'DSP & matrix routing', 'EQ kalibrasyon', 'Dante / 70V dağıtım'],     metric: ['SPL HEDEF', '82–105 dB'] },
  { cls: 'gold',   tag: 'AKUSTİK',         title: 'Akustik Mühendislik',  desc: 'RT60, STI, EDT hedefli panel mimarisi, modal kontrol ve in-situ ölçüm.',                            bullets: ['Akustik ölçüm', 'Panel & diffüzör', 'Modal analiz', 'RFZ kontrol odası'],                  metric: ['RT60 HEDEF', '0.28–1.4 s'] },
  { cls: 'indigo', tag: 'LED & GÖRÜNTÜ',   title: 'LED Ekran Sistemi',    desc: 'Sahne, kurumsal lobi ve kontrol odaları için pixel pitch, processor ve AV-sync entegrasyonu.',     bullets: ['Pixel pitch analizi', 'Video processor', 'Truss & rigging', 'AV sync timeline'],          metric: ['PIXEL PITCH', 'P1.5 – P3.9'] },
  { cls: 'teal',   tag: 'STÜDYO',          title: 'Stüdyo & Kayıt',       desc: 'Kontrol ve kayıt odaları için modal kontrol, izolasyon ve kalibre referans dinleme.',              bullets: ['Bass trap', 'Kayan kat', 'RFZ kontrol', 'Monitör tuning'],                                 metric: ['NC HEDEF', 'NC-18 / NC-20'] },
  { cls: 'plum',   tag: 'KONFERANS / AV',  title: 'Toplantı & Konferans', desc: 'Beamforming mikrofon, hibrit toplantı, tek dokunuş kontrol ve simültane çeviri sistemleri.',       bullets: ['Beamforming mic', 'AEC + AGC', 'Kamera tracking', 'Tek dokunuş kontrol'],                  metric: ['STI HEDEF', '≥ 0.62'] },
  { cls: 'olive',  tag: 'ANONS / VA',      title: 'Anons & Güvenlik',     desc: 'EN 54-16 uyumlu Voice Alarm, evakuasyon mimarisi ve merkezi anons sistemi tasarımı.',                bullets: ['EN 54-16 sertifika', 'Evakuasyon zoneları', 'BMS entegrasyon', 'Merkezi kontrol'],         metric: ['STANDART', 'EN 54-16'] },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Hizmetler — On Muzik Proje';
  }, []);

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
              <article key={s.title} className="svc-card reveal" style={{ ...CLS_VARS[s.cls], transitionDelay: `${i * 60}ms` }}>
                <span className="sc-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>
                <ul className="sc-list">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="sc-foot">
                  <span>{s.metric[0]}</span>
                  <span style={{ color: 'var(--ink-2)' }}>{s.metric[1]}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />02 · TESLİM ZİNCİRİ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Anahtar teslim<br /><em>mühendislik</em>.</h2>
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

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Hizmet İçin Teklif <span className="arrow" /></Link>
            <Link to="/portfolyo" className="btn btn-ghost">Portföyü Gör <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
