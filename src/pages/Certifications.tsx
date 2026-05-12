import { Link } from 'react-router-dom';
import { CERTIFICATIONS } from '../lib/content';
import { useSeo } from '../lib/seo';

export default function Certifications() {
  useSeo({
    title: 'Sertifikalar - EN 54-16 · ISO 3382 · ISO 9001 · CE · TSE · CEDIA · Dante | On Muzik Proje',
    description: 'AVM, otel, hastane ve kamu binası ihaleleri için EN 54-16 voice alarm, ISO 3382 akustik ölçüm, ISO 9001 kalite yönetimi, CE, TSE ve CEDIA sertifikaları.',
    path: '/sertifikalar',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Sertifikalar - On Muzik Proje',
      url: 'https://onmuzikproje.com/sertifikalar',
      isPartOf: { '@id': 'https://onmuzikproje.com/#website' },
    },
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />SERTİFİKALAR · İHALE & MEVZUAT</span>
          <h1 className="subhero-title">
            Belge <em>arkasında</em><br />durulur.
          </h1>
          <p className="subhero-lead">
            Kamu ihaleleri, otel zincirleri ve yapı denetim onayı için gerekli {CERTIFICATIONS.length}{' '}
            sertifika ailesi: EN 54-16 voice alarm, ISO 3382 akustik ölçüm, ISO 9001 kalite yönetimi,
            CE / TSE uygunluk, CEDIA ve Dante ağ sertifikaları.
          </p>
        </div>
      </section>

      {/* Sertifika kartları */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="paths">
            {CERTIFICATIONS.map((c, i) => (
              <article
                key={c.id}
                className="path reveal"
                style={{
                  ['--c' as any]: 'var(--ink)',
                  ['--cs' as any]: 'var(--bg-1)',
                  ['--cl' as any]: 'var(--line-2)',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <span className="p-tag" style={{ color: 'var(--ink)' }}>{c.code}</span>
                <h4 style={{ marginTop: 22 }}>{c.name}</h4>
                <p style={{ fontFamily: 'var(--f-mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', margin: '0 0 12px' }}>{c.body}</p>
                <p>{c.scope}</p>
                <div style={{ marginTop: 14 }}>
                  <div className="k" style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 8 }}>UYGULAMA</div>
                  <ul className="p-list" style={{ gridTemplateColumns: '1fr', margin: 0 }}>
                    {c.appliesTo.map((a) => <li key={a} style={{ fontSize: 12.5 }}>{a}</li>)}
                  </ul>
                </div>
                <div className="p-foot">
                  <span className="p-link" style={{ fontSize: 12 }}>Belge talebi <span className="arrow" /></span>
                  <span className="p-price" style={{ fontSize: 9.5 }}>{c.documentNote.split('-')[0].slice(0, 28).trim()}…</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* İhale dosyası bilgi paneli */}
      <section className="section venues" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="left">
              <span className="eyebrow"><span className="bar" />İHALE DOSYASI</span>
              <h2 className="h-section indigo" style={{ marginTop: 18 }}>Şartname için<br /><em>hazır</em>.</h2>
            </div>
            <div className="right">
              Kamu ve özel sektör ihalelerinde teknik şartname yorumu, sertifika dokümantasyonu ve ürün
              uygunluk belgesi paketi tek dosyada. İhale tarihinden 5+ iş günü önce talep ediniz.
            </div>
          </div>
          <div className="dashboard reveal">
            <div className="dash-head">
              <div className="dash-tabs"><button className="on" type="button">İHALE DESTEK PAKETİ</button></div>
              <div className="dash-meta"><span className="dot" />ÜCRETSİZ</div>
            </div>
            <div className="equip-grid" style={{ marginTop: 0 }}>
              <div className="equip-cell"><div className="k">EN 54-16</div><div className="v">Sistem belgesi</div></div>
              <div className="equip-cell"><div className="k">EN 54-24</div><div className="v">Hoparlör belgeleri</div></div>
              <div className="equip-cell"><div className="k">CE</div><div className="v">Tüm ekipman</div></div>
              <div className="equip-cell"><div className="k">TSE</div><div className="v">Hizmet yeterlilik</div></div>
              <div className="equip-cell"><div className="k">ISO 9001</div><div className="v">Şirket sertifikası</div></div>
              <div className="equip-cell"><div className="k">STI-PA</div><div className="v">Örnek ölçüm raporu</div></div>
              <div className="equip-cell"><div className="k">CV</div><div className="v">Ekip CEDIA / Dante</div></div>
              <div className="equip-cell"><div className="k">REFERANS</div><div className="v">240+ proje listesi</div></div>
            </div>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">İhale destek paketi talep et <span className="arrow" /></Link>
            <Link to="/markalar" className="btn btn-ghost">Marka portföyü <span className="arrow" /></Link>
            <Link to="/hizmetler/anons" className="btn btn-ghost">EN 54-16 sayfası <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
