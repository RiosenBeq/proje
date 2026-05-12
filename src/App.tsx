import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Code-split detail + secondary pages: keeps the initial bundle ~hot Anasayfa-only.
// We keep references to the loaders so we can prefetch them after first paint.
const loadServiceDetail  = () => import('./pages/ServiceDetail');
const loadVenues         = () => import('./pages/Venues');
const loadVenueDetail    = () => import('./pages/VenueDetail');
const loadProjectDetail  = () => import('./pages/ProjectDetail');
const loadAbout          = () => import('./pages/About');
const loadFaq            = () => import('./pages/Faq');
const loadService        = () => import('./pages/Service');
const loadBrands         = () => import('./pages/Brands');
const loadCertifications = () => import('./pages/Certifications');
const loadKnowledge      = () => import('./pages/Knowledge');
const loadArticle        = () => import('./pages/Article');
const loadPrivacyPolicy  = () => import('./pages/PrivacyPolicy');
const loadKvkk           = () => import('./pages/Kvkk');
const loadHizlaKirala    = () => import('./pages/HizlaKirala');

const ServiceDetail   = lazy(loadServiceDetail);
const Venues          = lazy(loadVenues);
const VenueDetail     = lazy(loadVenueDetail);
const ProjectDetail   = lazy(loadProjectDetail);
const About           = lazy(loadAbout);
const Faq             = lazy(loadFaq);
const Service         = lazy(loadService);
const Brands          = lazy(loadBrands);
const Certifications  = lazy(loadCertifications);
const Knowledge       = lazy(loadKnowledge);
const Article         = lazy(loadArticle);
const PrivacyPolicy   = lazy(loadPrivacyPolicy);
const Kvkk            = lazy(loadKvkk);
const HizlaKirala     = lazy(loadHizlaKirala);

const ALL_LOADERS = [
  loadServiceDetail, loadVenues, loadVenueDetail, loadProjectDetail,
  loadAbout, loadFaq, loadService, loadBrands, loadCertifications,
  loadKnowledge, loadArticle, loadPrivacyPolicy, loadKvkk,
  loadHizlaKirala,
];

function usePrefetchRoutes() {
  useEffect(() => {
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    const run = () => {
      // Stagger imports so the network/parser doesn't choke at once.
      ALL_LOADERS.forEach((load, i) => {
        setTimeout(() => { load().catch(() => {}); }, i * 60);
      });
    };
    if (typeof ric === 'function') {
      ric(run, { timeout: 2500 });
    } else {
      setTimeout(run, 1500);
    }
  }, []);
}

function PageFallback() {
  // Slim top-of-page loading bar only — no 60vh placeholder to avoid layout
  // shift / flash. With prefetched chunks (see usePrefetchRoutes), this
  // fallback should rarely render.
  return <div className="route-loading" aria-busy="true" aria-label="Yükleniyor" />;
}

export default function App() {
  usePrefetchRoutes();
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
          <Route path="hizla-kirala" element={<Suspense fallback={<PageFallback />}><HizlaKirala /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
