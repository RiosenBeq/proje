import { Link, useParams } from 'react-router-dom';
import { getDiscipline, getVenue } from '../lib/content';
import { ARTICLES, getArticle } from '../lib/articles';
import { useSeo } from '../lib/seo';
import CrossSell from '../components/CrossSell';
import NotFound from './NotFound';

export default function Article() {
  const { slug = '' } = useParams();
  const a = getArticle(slug);

  useSeo(a ? {
    title: `${a.title} | On Muzik Proje Bilgi Merkezi`,
    description: a.summary,
    path: `/bilgi-merkezi/${a.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `https://onmuzik.com/bilgi-merkezi/${a.slug}#article`,
          headline: a.title,
          description: a.summary,
          articleSection: a.category,
          datePublished: a.publishedAt,
          dateModified: a.publishedAt,
          author: { '@id': 'https://onmuzik.com/#org' },
          publisher: { '@id': 'https://onmuzik.com/#org' },
          mainEntityOfPage: `https://onmuzik.com/bilgi-merkezi/${a.slug}`,
          wordCount: a.body.reduce((acc, b) => acc + ('text' in b ? b.text.length : 0), 0),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://onmuzik.com/' },
            { '@type': 'ListItem', position: 2, name: 'Bilgi Merkezi', item: 'https://onmuzik.com/bilgi-merkezi' },
            { '@type': 'ListItem', position: 3, name: a.title, item: `https://onmuzik.com/bilgi-merkezi/${a.slug}` },
          ],
        },
      ],
    },
  } : { title: '404', description: '404', path: `/bilgi-merkezi/${slug}`, noIndex: true });

  if (!a) return <NotFound />;

  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);
  const relatedDiscipline = a.related.discipline ? getDiscipline(a.related.discipline) : null;
  const relatedVenue = a.related.venue ? getVenue(a.related.venue) : null;

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner" style={{ maxWidth: 820 }}>
          <span className="eyebrow"><span className="bar" />{a.category.toUpperCase()} · {a.readMin} DK OKUMA</span>
          <h1 className="subhero-title" style={{ fontSize: 'clamp(34px, 5.5vw, 64px)' }}>{a.title}</h1>
          <p className="subhero-lead" style={{ fontStyle: 'italic' }}>{a.excerpt}</p>
          <p className="subhero-lead" style={{ marginTop: 14, fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Yayım: {new Date(a.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="article-body reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
            {a.body.map((block, i) => {
              if (block.type === 'p') return <p key={i}>{block.text}</p>;
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
              if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
              if (block.type === 'ul') return (
                <ul key={i}>
                  {block.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              );
              if (block.type === 'callout') return (
                <aside key={i} className="article-callout">
                  <strong>{block.title}</strong>
                  <span>{block.text}</span>
                </aside>
              );
              if (block.type === 'table') return (
                <div key={i} className="article-table">
                  {block.caption && <div className="atc">{block.caption}</div>}
                  <table>
                    <thead>
                      <tr>{block.headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, j) => (
                        <tr key={j}>
                          {row.map((cell, k) => <td key={k}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
              return null;
            })}
          </div>

          {/* Related discipline / venue CTA */}
          {(relatedDiscipline || relatedVenue) && (
            <div className="article-related reveal" style={{ maxWidth: 760, margin: '40px auto 0' }}>
              <div className="contact-card" style={{ background: 'var(--ink)', color: 'var(--stage-fg)', borderColor: 'var(--ink)' }}>
                <h3 style={{ color: 'var(--stage-fg)' }}>Bu konuda hizmet veriyoruz</h3>
                <p style={{ color: 'rgba(245,239,224,0.78)', fontSize: 14.5, lineHeight: 1.65, margin: '0 0 18px' }}>
                  {relatedDiscipline && <>Detaylı kapsam, hedef metrikler, süreç ve marka listesi için <strong>{relatedDiscipline.name}</strong> hizmet sayfasına göz atın.</>}
                  {!relatedDiscipline && relatedVenue && <>Bu mekân tipi için tipik problem, hedef ve sistem mimarisini <strong>{relatedVenue.name}</strong> sayfasında topladık.</>}
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {relatedDiscipline && <Link to={`/hizmetler/${relatedDiscipline.slug}`} className="btn btn-on-stage">{relatedDiscipline.name} <span className="arrow" /></Link>}
                  {relatedVenue && <Link to={`/mekanlar/${relatedVenue.slug}`} className="btn btn-ghost-stage">{relatedVenue.name} <span className="arrow" /></Link>}
                  <Link to="/iletisim" className="btn btn-ghost-stage">Keşif Talep Et <span className="arrow" /></Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other articles */}
      {related.length > 0 && (
        <section className="section venues" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head reveal">
              <div className="left">
                <span className="eyebrow"><span className="bar" />DEVAMI</span>
                <h2 className="h-section gold" style={{ marginTop: 18, fontSize: 'clamp(28px, 4vw, 48px)' }}>Diğer <em>rehberler</em>.</h2>
              </div>
              <div className="right">Bilgi Merkezi'ndeki diğer derin teknik makaleler.</div>
            </div>
            <div className="paths reveal" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {related.map((r, i) => (
                <Link key={r.slug} to={`/bilgi-merkezi/${r.slug}`} className="path" style={{ ['--c' as any]: 'var(--gold)', ['--cs' as any]: 'var(--gold-soft)', ['--cl' as any]: 'var(--gold-line)', transitionDelay: `${i * 60}ms` }}>
                  <span className="p-tag">{r.category.toUpperCase()}</span>
                  <h4 style={{ marginTop: 22 }}>{r.title}</h4>
                  <p>{r.summary}</p>
                  <div className="p-foot">
                    <span className="p-link">Okumaya başla <span className="arrow" /></span>
                    <span className="p-price">{r.readMin} DK</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {a.related.discipline && (
        <CrossSell
          eyebrow="İLGİLİ DİSİPLİN & MEKÂN"
          title="Konuyla doğrudan tamamlayıcı."
          disciplines={[a.related.discipline]}
          venues={a.related.venue ? [a.related.venue] : []}
        />
      )}
    </>
  );
}
