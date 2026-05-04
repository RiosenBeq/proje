import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Code-split detail + secondary pages: keeps the initial bundle ~hot Anasayfa-only.
const ServiceDetail   = lazy(() => import('./pages/ServiceDetail'));
const Venues          = lazy(() => import('./pages/Venues'));
const VenueDetail     = lazy(() => import('./pages/VenueDetail'));
const ProjectDetail   = lazy(() => import('./pages/ProjectDetail'));
const About           = lazy(() => import('./pages/About'));
const Faq             = lazy(() => import('./pages/Faq'));
const Service         = lazy(() => import('./pages/Service'));
const Brands          = lazy(() => import('./pages/Brands'));
const Certifications  = lazy(() => import('./pages/Certifications'));
const Knowledge       = lazy(() => import('./pages/Knowledge'));
const Article         = lazy(() => import('./pages/Article'));
const PrivacyPolicy   = lazy(() => import('./pages/PrivacyPolicy'));
const Kvkk            = lazy(() => import('./pages/Kvkk'));

function PageFallback() {
  return (
    <section className="section" aria-busy="true">
      <div className="container">
        <div style={{ height: 'min(60vh, 480px)', display: 'grid', placeItems: 'center', color: 'var(--muted)', fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Yükleniyor…
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hizmetler" element={<Services />} />
          <Route path="hizmetler/:slug" element={<Suspense fallback={<PageFallback />}><ServiceDetail /></Suspense>} />
          <Route path="mekanlar" element={<Suspense fallback={<PageFallback />}><Venues /></Suspense>} />
          <Route path="mekanlar/:slug" element={<Suspense fallback={<PageFallback />}><VenueDetail /></Suspense>} />
          <Route path="portfolyo" element={<Portfolio />} />
          <Route path="projeler/:slug" element={<Suspense fallback={<PageFallback />}><ProjectDetail /></Suspense>} />
          <Route path="hakkimizda" element={<Suspense fallback={<PageFallback />}><About /></Suspense>} />
          <Route path="sss" element={<Suspense fallback={<PageFallback />}><Faq /></Suspense>} />
          <Route path="servis-bakim" element={<Suspense fallback={<PageFallback />}><Service /></Suspense>} />
          <Route path="markalar" element={<Suspense fallback={<PageFallback />}><Brands /></Suspense>} />
          <Route path="sertifikalar" element={<Suspense fallback={<PageFallback />}><Certifications /></Suspense>} />
          <Route path="bilgi-merkezi" element={<Suspense fallback={<PageFallback />}><Knowledge /></Suspense>} />
          <Route path="bilgi-merkezi/:slug" element={<Suspense fallback={<PageFallback />}><Article /></Suspense>} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="gizlilik-politikasi" element={<Suspense fallback={<PageFallback />}><PrivacyPolicy /></Suspense>} />
          <Route path="kvkk" element={<Suspense fallback={<PageFallback />}><Kvkk /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
