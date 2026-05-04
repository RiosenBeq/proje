import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Venues from './pages/Venues';
import VenueDetail from './pages/VenueDetail';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Faq from './pages/Faq';
import Service from './pages/Service';
import Brands from './pages/Brands';
import Certifications from './pages/Certifications';
import Knowledge from './pages/Knowledge';
import Article from './pages/Article';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Kvkk from './pages/Kvkk';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hizmetler" element={<Services />} />
          <Route path="hizmetler/:slug" element={<ServiceDetail />} />
          <Route path="mekanlar" element={<Venues />} />
          <Route path="mekanlar/:slug" element={<VenueDetail />} />
          <Route path="portfolyo" element={<Portfolio />} />
          <Route path="projeler/:slug" element={<ProjectDetail />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="sss" element={<Faq />} />
          <Route path="servis-bakim" element={<Service />} />
          <Route path="markalar" element={<Brands />} />
          <Route path="sertifikalar" element={<Certifications />} />
          <Route path="bilgi-merkezi" element={<Knowledge />} />
          <Route path="bilgi-merkezi/:slug" element={<Article />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="kvkk" element={<Kvkk />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
