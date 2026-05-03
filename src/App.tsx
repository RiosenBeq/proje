import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Kvkk from './pages/Kvkk';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hizmetler" element={<Services />} />
          <Route path="portfolyo" element={<Portfolio />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="kvkk" element={<Kvkk />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
