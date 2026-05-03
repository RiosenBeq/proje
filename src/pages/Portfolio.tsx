import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type DiscCls = 'red' | 'gold' | 'indigo' | 'teal' | 'plum' | 'olive';
type Tag = [DiscCls, string];

const CASES: Array<{
  t: string; e: string; year: string; img: string; tags: Tag[];
  st: Array<[string, string]>;
  d: string;
}> = [
  { t: 'Boğaz Restoran',    e: 'İstanbul', year: '2024', img: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1400', tags: [['red', 'SES'], ['gold', 'AKUSTİK']],                d: '180 kişilik teras restoran için 4 zonlu ses sistemi ve akustik panel mimarisi. Konuşma netliği hedef üstünde teslim edildi.', st: [['RT60', '0.62s'], ['SPL', '82dB']] },
  { t: 'Ballroom Otel',     e: 'Antalya',  year: '2024', img: 'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=1400', tags: [['red', 'SES'], ['olive', 'VA'], ['indigo', 'LED']], d: '800 kişilik ballroom + lobi + 24 oda zon yönetimi. EN 54-16 uyumlu voice alarm + LED P2.6 sahne ekranı.',                  st: [['RT60', '1.2s'], ['SPL', '98dB']] },
  { t: 'Konser Sahnesi',    e: 'Ankara',   year: '2023', img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1400', tags: [['red', 'SES'], ['indigo', 'LED']],                  d: '3000 kişilik açık hava sahnesi. Cardioid sub array + line array L/R, 64m² LED ana sahne ekranı.',                            st: [['SPL', '106dB'], ['LED', 'P3.9']] },
  { t: 'Kayıt Stüdyosu',    e: 'İstanbul', year: '2024', img: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1400', tags: [['teal', 'STÜDYO'], ['gold', 'AKUSTİK']],            d: 'Mix + tracking room. Modal kontrol için kayan kat, bass trap kasetleri ve RFZ kontrol odası tasarımı.',                      st: [['NC', 'NC-18'], ['RT60', '0.28s']] },
  { t: 'Kurumsal Lobi',     e: 'İstanbul', year: '2025', img: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1400', tags: [['red', 'SES'], ['gold', 'AKUSTİK']],                d: 'Plaza ana lobi için 3 zonlu tavan hoparlör, akustik tavan kasetleri ve dijital anons sistemi.',                              st: [['RT60', '0.7s'], ['ZON', '3']] },
  { t: 'Konferans Merkezi', e: 'İzmir',    year: '2023', img: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1400', tags: [['plum', 'KONFERANS'], ['gold', 'AKUSTİK']],         d: '420 kişilik salon — DICENTIS konferans, beamforming mikrofon dizisi ve AV sync timeline.',                                   st: [['STI', '0.71'], ['MIC', '32 ch']] },
];

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80', label: 'Restoran — Ses Sistemi', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80', label: 'Vinil Duvar Sistemi',     size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80', label: 'VOID — Tavan Kurulum',    size: '' },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80', label: 'Kafe — Ses Tasarımı',     size: '' },
  { src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=900&q=80', label: 'Pioneer — Duvar Montajı', size: '' },
  { src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900', label: 'DJ Booth — Ses Kurulumu', size: '' },
  { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&q=80', label: 'Rooftop — Mekan Ses Sistemi', size: 'wide' },
  { src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'Restoran — Kolon Hoparlör', size: '' },
  { src: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=900', label: 'Tavan Montaj — Beyaz Hoparlör', size: '' },
];

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Projeler — On Muzik Proje';
  }, []);

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />SEÇİLMİŞ PROJELER · 02</span>
          <h1 className="subhero-title">Sahaya teslim<br />edilmiş <em>mühendislik</em>.</h1>
          <p className="subhero-lead">
            Restoran, otel, konser sahnesi, kayıt stüdyosu ve konferans merkezi dahil 240+ projeden seçmeler.
            Her proje için ölçüm raporu + hedef-fiili karşılaştırma mevcut.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="portfolio-grid">
            {CASES.map((c, i) => (
              <article key={c.t} className="case reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="frame">
                  <img src={c.img} alt={c.t} loading="lazy" />
                  <div className="ph">{c.t.toUpperCase()} · GÖRSEL</div>
                  <div className="stat-overlay">
                    {c.st.map(([k, v]) => <span key={k} className="mini">{k}<b>{v}</b></span>)}
                  </div>
                </div>
                <div className="meta"><span>{c.e}</span><span>{c.year}</span></div>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
                <div className="case-tags">
                  {c.tags.map(([cls, n]) => <span key={n} className={`tag ${cls}`}><span className="dot" />{n}</span>)}
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
              <span className="eyebrow"><span className="bar" />03 · KURULUM ARŞİVİ</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Saha<br /><em>karelerinden</em>.</h2>
            </div>
            <div className="right">
              Tasarımdan teslime kadar farklı projelerimizden saha kareleri. Restoran, mekân, kafe ve
              kurumsal alanlardan kurulum dokümantasyonu.
            </div>
          </div>
          <div className="gal-grid">
            {GALLERY.map((g, i) => (
              <div key={i} className={`gal-cell ${g.size} reveal`} style={{ transitionDelay: `${i * 40}ms` }}>
                <img src={g.src} alt={g.label} loading="lazy" />
                <span className="badge">SAHA · 2024</span>
                <span className="lbl">{g.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Benzer Proje İçin Teklif <span className="arrow" /></Link>
            <Link to="/hizmetler" className="btn btn-ghost">Hizmetleri İncele <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
