import { Link } from 'react-router-dom';
import { useEffect, type ImgHTMLAttributes } from 'react';

function ImgFade(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} onLoad={(e) => { e.currentTarget.classList.add('loaded'); props.onLoad?.(e); }} />;
}

type DiscCls = 'red' | 'gold' | 'indigo' | 'teal' | 'plum' | 'olive';
type Tag = [DiscCls, string];

const CASES: Array<{
  t: string; e: string; year: string; img: string; tags: Tag[];
  st: Array<[string, string]>;
  d: string;
}> = [
  {
    t: 'Studio Alpha',     e: 'İstanbul', year: '2024',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=80',
    tags: [['teal', 'STÜDYO'], ['gold', 'AKUSTİK']],
    st: [['NC', 'NC-20'], ['RT60', '0.28s']],
    d: 'Dolby Atmos 9.1.4 miksaj stüdyosu akustik tasarımı ve ana monitör sistemi entegrasyonu. Modal kontrol için kayan kat, bass trap kasetleri ve RFZ kontrol odası tasarımı.',
  },
  {
    t: 'Club Nexus',       e: 'İzmir',    year: '2024',
    img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tags: [['red', 'SES'], ['indigo', 'LED']],
    st: [['SPL', '106dB'], ['LED', 'P3.9']],
    d: '3000 kişilik performans mekanı için Pioneer Pro Audio XY serisi ana PA sistemi, cardioid sub array ve 64m² LED P3.9 ana sahne ekranı.',
  },
  {
    t: 'Grand Auditorium', e: 'Ankara',   year: '2023',
    img: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tags: [['plum', 'KONFERANS'], ['gold', 'AKUSTİK']],
    st: [['STI', '0.71'], ['MIC', '32 ch']],
    d: 'Çok amaçlı 420 kişilik salon — değişken akustik paneller, DICENTIS konferans, beamforming mikrofon dizisi ve dijital yönlendirilebilir line array kurulumu.',
  },
  {
    t: 'Boğaz Restoran',   e: 'İstanbul', year: '2024',
    img: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tags: [['red', 'SES'], ['gold', 'AKUSTİK']],
    st: [['RT60', '0.62s'], ['SPL', '82dB']],
    d: '180 kişilik teras restoran için 4 zonlu ses sistemi ve akustik panel mimarisi. Konuşma netliği hedef üstünde teslim edildi.',
  },
  {
    t: 'Ballroom Otel',    e: 'Antalya',  year: '2024',
    img: 'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tags: [['red', 'SES'], ['olive', 'VA'], ['indigo', 'LED']],
    st: [['RT60', '1.2s'], ['SPL', '98dB']],
    d: '800 kişilik ballroom + lobi + 24 oda zon yönetimi. EN 54-16 uyumlu voice alarm + LED P2.6 sahne ekranı.',
  },
  {
    t: 'Konser Sahnesi',   e: 'Ankara',   year: '2023',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1400&q=80',
    tags: [['red', 'SES'], ['indigo', 'LED']],
    st: [['SPL', '105dB'], ['LED', 'P2.6']],
    d: 'Açık hava sahnesi. Cardioid sub array + line array L/R, 64m² LED ana sahne ekranı, dijital yönlendirilebilir delay tower.',
  },
];

const GALLERY: Array<{ src: string; label: string; size: '' | 'wide' | 'tall' }> = [
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80', label: 'Restoran — Ses Sistemi',         size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',  label: 'Vinil Duvar Sistemi',            size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',  label: 'VOID — Tavan Kurulum',           size: '' },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',  label: 'Kafe — Ses Tasarımı',            size: '' },
  { src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=900&q=80',  label: 'Pioneer — Duvar Montajı',        size: '' },
  { src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900', label: 'DJ Booth — Ses Kurulumu',     size: '' },
  { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80', label: 'Rooftop — Mekan Ses Sistemi',     size: 'wide' },
  { src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'Restoran — Kolon Hoparlör',   size: '' },
  { src: 'https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?auto=compress&cs=tinysrgb&w=900', label: 'Pioneer — Gece Ambiyansı',    size: '' },
  { src: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=900', label: 'Vinyl + Speaker Wall',       size: 'tall' },
  { src: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=900',  label: 'Tavan — Beyaz Hoparlör',      size: '' },
  { src: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=900', label: 'Neytin — Konsept Duvar',      size: '' },
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
            Türkiye'nin en prestijli mekânları için tasarladığımız 240+ akustik ve ses sistemi çözümünden seçmeler.
            Stüdyodan konser sahnesine, restoran ve kurumsal lobiye — her proje için ölçüm raporu mevcut.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="portfolio-grid">
            {CASES.map((c, i) => (
              <article key={c.t} className="case reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="frame">
                  <ImgFade src={c.img} alt={c.t} loading="lazy" />
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
              <div key={`${g.src}-${i}`} className={`gal-cell ${g.size} reveal`} style={{ transitionDelay: `${i * 40}ms` }}>
                <ImgFade src={g.src} alt={g.label} loading="lazy" />
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
