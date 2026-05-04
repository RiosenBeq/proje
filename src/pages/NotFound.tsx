import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';

export default function NotFound() {
  useSeo({
    title: 'Sayfa bulunamadı (404) | On Muzik Proje',
    description: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Anasayfaya dönün ya da hizmet listesini inceleyin.',
    path: '/404',
    noIndex: true,
  });

  return (
    <>
      <section className="subhero">
        <div className="container subhero-inner">
          <span className="eyebrow"><span className="bar" />404 · BULUNAMADI</span>
          <h1 className="subhero-title">Aradığınız <em>frekans</em><br />kapsam dışı.</h1>
          <p className="subhero-lead">
            Bu URL bizde tanımlı değil. Belki linki yanlış kopyaladınız, belki içerik taşındı.
            Aşağıdaki kapılardan birinden devam edebilirsiniz.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-red">Anasayfa <span className="arrow" /></Link>
            <Link to="/hizmetler" className="btn btn-ghost">Hizmetler <span className="arrow" /></Link>
            <Link to="/portfolyo" className="btn btn-ghost">Projeler <span className="arrow" /></Link>
            <Link to="/iletisim" className="btn btn-ghost">İletişim <span className="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
