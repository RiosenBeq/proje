import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { VENUES, DISC_TAG, type DisciplineCls } from '../lib/content';
import { useSeo } from '../lib/seo';

const CLS_VARS: Record<DisciplineCls, CSSProperties> = {
  red:    { ['--c' as any]: 'var(--red)',    ['--cs' as any]: 'var(--red-soft)',    ['--cl' as any]: 'var(--red-line)' },
  gold:   { ['--c' as any]: 'var(--gold)',   ['--cs' as any]: 'var(--gold-soft)',   ['--cl' as any]: 'var(--gold-line)' },
  indigo: { ['--c' as any]: 'var(--indigo)', ['--cs' as any]: 'var(--indigo-soft)', ['--cl' as any]: 'var(--indigo-line)' },
  teal:   { ['--c' as any]: 'var(--teal)',   ['--cs' as any]: 'var(--teal-soft)',   ['--cl' as any]: 'var(--teal-line)' },
  plum:   { ['--c' as any]: 'var(--plum)',   ['--cs' as any]: 'var(--plum-soft)',   ['--cl' as any]: 'var(--plum-line)' },
  olive:  { ['--c' as any]: 'var(--olive)',  ['--cs' as any]: 'var(--olive-soft)',  ['--cl' as any]: 'var(--olive-line)' },
};

export default function Venues() {
  useSeo({
    title: 'Mekân Tipleri — Restoran · Otel · Sahne · Kayıt Stüdyosu · Konferans Salonu | On Muzik Proje',
    description: 'Restoran ses sistemi, otel akustiği, sahne ses çözümü, kayıt stüdyosu tasarımı ve konferans salonu AV — her mekân tipi için tipik akustik hedef, sistem mimarisi ve marka bağımsız kurumsal teslim. RT60, STI, EN 54-16 dahil.',
    path: '/mekanlar',
    keywords: 'restoran ses sistemi, otel ses sistemi, sahne ses sistemi, kayıt stüdyosu akustiği, konferans salonu ses sistemi, mekân akustiği, kurumsal ses çözümü, RT60 hedef, STI ölçüm, ses mühendisliği',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Mekân Tipleri — On Muzik Proje',
      url: 'https://onmuzikproje.com/mekanlar',
      isPartOf: { '@id': 'https://onmuzikproje.com/#website' },
    },
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />MEKÂN TİPLERİ · {VENUES.length}</span>
          <h1 className="subhero-title">Her mekânın<br /><em>kendi sesi</em> var.</h1>
          <p className="subhero-lead">
            Restoran ve otelden konser sahnesine, kayıt stüdyosundan konferans merkezine — her mekân
            tipi kendi akustik hedeflerine, sistem mimarisine ve mevzuat zorunluluklarına sahiptir.
            Kurumsal projeler için marka bağımsız, ölçüme dayalı tasarım yapıyoruz.
          </p>
        </div>
      </section>

      {/* Mekân kartları */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="paths">
            {VENUES.map((v, i) => {
              const primary = v.related.disciplines[0];
              const cls = DISC_TAG[primary][0];
              return (
                <Link
                  key={v.slug}
                  to={`/mekanlar/${v.slug}`}
                  className="path reveal"
                  style={{ ...CLS_VARS[cls], transitionDelay: `${i * 60}ms` }}
                >
                  <span className="p-tag">{v.short}</span>
                  <h4 style={{ marginTop: 22 }}>{v.name}</h4>
                  <p>{v.hero.lead.split('.')[0]}.</p>
                  <ul className="p-list">
                    {v.goals.slice(0, 4).map(([k, val]) => (
                      <li key={k} style={{ fontFamily: 'var(--f-mono)', fontSize: 11.5, letterSpacing: '0.06em' }}>{k}: {val}</li>
                    ))}
                  </ul>
                  <div className="p-foot">
                    <span className="p-link">Detayını incele <span className="arrow" /></span>
                    <span className="p-price">{v.related.disciplines.length} DİSİPLİN</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mekân-tipine-göre karşılaştırma */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />HEDEF METRİKLER</span>
              <h2 className="h-section indigo" style={{ marginTop: 18 }}>Mekân tipi,<br /><em>frekans cevabını</em> belirler.</h2>
            </div>
            <div className="right">
              Aynı sistem her mekâna uymaz. Bir restoranın ideal RT60'ı bir konser sahnesinde tamamen
              yanlış olur. Hedef metriği, hacmi ve kullanıcı senaryosunu birlikte ele alıyoruz.
            </div>
          </div>
          <div className="dashboard reveal">
            <div className="dash-head">
              <div className="dash-tabs"><button className="on" type="button">MEKÂN HEDEF KARŞILAŞTIRMASI</button></div>
              <div className="dash-meta"><span className="dot" />ÖLÇÜLMÜŞ</div>
            </div>
            <div className="article-table" style={{ margin: 0, border: 0, borderRadius: 0 }}>
              <table>
                <thead>
                  <tr>
                    <th>Mekân</th>
                    <th>RT60</th>
                    <th>SPL</th>
                    <th>Zon</th>
                    <th>Tipik Sistem</th>
                  </tr>
                </thead>
                <tbody>
                  {VENUES.map((v) => {
                    const rt = v.goals.find((g) => g[0].toLowerCase().includes('rt60'))?.[1] ?? '—';
                    const spl = v.goals.find((g) => g[0].toLowerCase().includes('basınc') || g[0].toLowerCase().includes('spl'))?.[1] ?? '—';
                    const zone = v.goals.find((g) => g[0].toLowerCase().includes('zon'))?.[1] ?? '—';
                    const sys = v.systemSpec.find((s) => s[0].toLowerCase().includes('hoparlör'))?.[1] ?? v.systemSpec[0]?.[1] ?? '—';
                    return (
                      <tr key={v.slug}>
                        <td><strong>{v.name}</strong></td>
                        <td>{rt}</td>
                        <td>{spl}</td>
                        <td>{zone}</td>
                        <td>{sys}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal yaklaşım */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />KURUMSAL TESLİM</span>
              <h2 className="h-section gold" style={{ marginTop: 18 }}>Tek mekân değil,<br /><em>zincir</em> ölçeği.</h2>
            </div>
            <div className="right">
              Tek şube açılışından 24 odalı otel zincirine — proje yönetimi, satın alma, kurulum ve
              servis bakımını tek elden yürütüyoruz. Saha keşfi, şartname uyumu ve ihale dosyası dahil.
            </div>
          </div>
          <div className="standards-grid reveal">
            <div className="standard">
              <div className="s-num">01</div>
              <h4>Saha keşfi</h4>
              <p>Mekânda ölçüm + akustik fotoğraflama. Hedef metrik, mevcut durum ve kullanıcı senaryosu raporlanır.</p>
            </div>
            <div className="standard">
              <div className="s-num">02</div>
              <h4>Mühendislik</h4>
              <p>EASE / ODEON simülasyonu, sistem mimarisi, akustik kaplama detayı. Marka bağımsız ürün karşılaştırması.</p>
            </div>
            <div className="standard">
              <div className="s-num">03</div>
              <h4>Saha teslim</h4>
              <p>Kurulum + DSP kalibrasyon + STI-PA / RT60 ölçüm raporu. EN 54-16 mevzuatı için belgelendirme.</p>
            </div>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Saha keşfi talep et <span className="arrow" /></Link>
            <Link to="/portfolyo" className="btn btn-ghost">Tamamlanan projeler <span className="arrow" /></Link>
            <Link to="/sertifikalar" className="btn btn-ghost">Sertifikalar <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
