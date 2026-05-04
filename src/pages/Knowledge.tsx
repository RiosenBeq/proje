import { Link } from 'react-router-dom';
import { ARTICLES } from '../lib/articles';
import { useSeo } from '../lib/seo';

export default function Knowledge() {
  useSeo({
    title: 'Bilgi Merkezi — RT60, Restoran Ses Sistemi, EN 54-16 Rehberleri | On Muzik Proje',
    description: 'Akustik mühendisliği, ses sistemi tasarımı ve EN 54-16 voice alarm mevzuatı üzerine derinlemesine teknik makaleler. Saha deneyiminden çıkarılmış rehberler.',
    path: '/bilgi-merkezi',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Bilgi Merkezi — On Muzik Proje',
      url: 'https://onmuzikproje.com/bilgi-merkezi',
      blogPost: ARTICLES.map((a) => ({
        '@type': 'BlogPosting',
        headline: a.title,
        url: `https://onmuzikproje.com/bilgi-merkezi/${a.slug}`,
        datePublished: a.publishedAt,
        articleSection: a.category,
        description: a.summary,
      })),
    },
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />BİLGİ MERKEZİ · TEKNİK REHBERLER</span>
          <h1 className="subhero-title">
            Sahada öğrendiklerimiz,<br /><em>açıkça</em>.
          </h1>
          <p className="subhero-lead">
            240+ proje teslim ettiğimiz disiplinlerden çıkardığımız teknik rehberler. Akustik mühendisliği,
            ses sistemi tasarımı ve mevzuat üzerine derinlemesine — pazarlama dili yok, ölçülmüş veri var.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="paths">
            {ARTICLES.map((a, i) => (
              <Link
                key={a.slug}
                to={`/bilgi-merkezi/${a.slug}`}
                className="path reveal"
                style={{
                  ['--c' as any]:  a.category === 'Akustik' ? 'var(--gold)'      : a.category === 'Ses Sistemi' ? 'var(--red)'      : a.category === 'LED' ? 'var(--indigo)'      : a.category === 'Stüdyo' ? 'var(--teal)'      : 'var(--olive)',
                  ['--cs' as any]: a.category === 'Akustik' ? 'var(--gold-soft)' : a.category === 'Ses Sistemi' ? 'var(--red-soft)' : a.category === 'LED' ? 'var(--indigo-soft)' : a.category === 'Stüdyo' ? 'var(--teal-soft)' : 'var(--olive-soft)',
                  ['--cl' as any]: a.category === 'Akustik' ? 'var(--gold-line)' : a.category === 'Ses Sistemi' ? 'var(--red-line)' : a.category === 'LED' ? 'var(--indigo-line)' : a.category === 'Stüdyo' ? 'var(--teal-line)' : 'var(--olive-line)',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span className="p-tag">{a.category.toUpperCase()}</span>
                <h4 style={{ marginTop: 22 }}>{a.title}</h4>
                <p style={{ fontStyle: 'italic', color: 'var(--ink-2)', marginBottom: 14 }}>{a.excerpt}</p>
                <p>{a.summary}</p>
                <div className="p-foot">
                  <span className="p-link">Okumaya başla <span className="arrow" /></span>
                  <span className="p-price">{a.readMin} DK · {new Date(a.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
