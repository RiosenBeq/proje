import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { FAQ_GROUPS } from '../lib/content';
import { useSeo } from '../lib/seo';

export default function Faq() {
  const [activeGroup, setActiveGroup] = useState(FAQ_GROUPS[0].id);
  const [open, setOpen] = useState<string | null>(`${FAQ_GROUPS[0].id}-0`);
  const [query, setQuery] = useState('');

  const allItems = useMemo(
    () => FAQ_GROUPS.flatMap((g) => g.items.map(([q, a]) => ({ groupId: g.id, q, a }))),
    [],
  );

  const visible = useMemo(() => {
    if (query.trim()) {
      const needle = query.toLowerCase();
      return allItems.filter(({ q, a }) => q.toLowerCase().includes(needle) || a.toLowerCase().includes(needle));
    }
    const g = FAQ_GROUPS.find((x) => x.id === activeGroup);
    return g ? g.items.map(([q, a]) => ({ groupId: g.id, q, a })) : [];
  }, [query, activeGroup, allItems]);

  useSeo({
    title: 'Sık Sorulan Sorular — Akustik · Ses · Süreç · KVKK | On Muzik Proje',
    description: '4 kategori altında 18 soru-cevap. Akustik ölçüm, ses sistemi, süreç & garanti, mevzuat ve KVKK ile ilgili tüm sorular.',
    path: '/sss',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allItems.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />SIK SORULAN · TÜM SORULAR</span>
          <h1 className="subhero-title">
            Önce <em>cevaplar</em>.
          </h1>
          <p className="subhero-lead">
            Akustik, ses sistemi, süreç & garanti ve mevzuat / KVKK kategorilerinde 18 soru. Aradığınızı
            yukarıdaki kutudan filtreleyebilir ya da kategoriden seçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Arama */}
          <div className="form reveal" style={{ marginBottom: 24, padding: '14px 18px' }}>
            <div className="field" style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              <label style={{ flex: '0 0 auto' }}>ARA</label>
              <input
                type="search"
                placeholder="Soru veya anahtar kelime — örn: RT60, Dante, EN 54-16..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Kategori sekmeleri */}
          {!query.trim() && (
            <div className="venue-tabs reveal">
              {FAQ_GROUPS.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  className={`venue-tab${activeGroup === g.id ? ' on' : ''}`}
                  onClick={() => { setActiveGroup(g.id); setOpen(`${g.id}-0`); }}
                >
                  <span className="vt-num">0{i + 1}</span>{g.name}
                </button>
              ))}
            </div>
          )}

          {/* Sorular */}
          <div className="reveal">
            {visible.length === 0 ? (
              <p style={{ padding: '32px 0', color: 'var(--ink-3)', fontSize: 15 }}>
                "{query}" için sonuç bulunamadı. Farklı bir kelime deneyin ya da{' '}
                <Link to="/iletisim" style={{ borderBottom: '1px dashed var(--red)', color: 'var(--red)' }}>doğrudan iletişime geçin</Link>.
              </p>
            ) : (
              visible.map(({ groupId, q, a }, i) => {
                const key = `${groupId}-${i}`;
                return (
                  <div key={key} className={`faq-row${open === key ? ' open' : ''}`} onClick={() => setOpen(open === key ? null : key)}>
                    <div className="qn">0{i + 1}</div>
                    <div>
                      <div className="qq">{q}</div>
                      <div className="qa">{a}</div>
                    </div>
                    <div className="toggle" />
                  </div>
                );
              })
            )}
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/iletisim" className="btn btn-red">Cevabını bulamadım — yazın <span className="arrow" /></Link>
            <a href="tel:+908502419515" className="btn btn-ghost">0850 241 9515 <span className="arrow" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
