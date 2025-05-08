import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Faq from './pages/Faq';
import LoW from './pages/LoW';

// list winner
import Spesial from './pages/listwinner/Spesial';
import OfflineElement from './pages/listwinner/OfflineElement';

// certificate
import Certificatesupervisor from './pages/certife/Certificatesupervisor';

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import OfflineSecond from './pages/listwinner/OfflineSecond';
import OfflineUniv from './pages/listwinner/OfflineUniv';
import OnlineElement from './pages/listwinner/OnlineElement';
import OnlineSecond from './pages/listwinner/OnlineSecond';
import OnlineUniv from './pages/listwinner/OnlineUniv';
import Offline2024 from './pages/listwinner/Offline2024';
import Online2024 from './pages/listwinner/Online2024';

import Berita2024 from './pages/berita/berita2024/Berita2024';
import Berita2025 from './pages/berita/berita2025/Berita2025';
import News2024 from './pages/berita/News2024';
import MediaCoverage from './pages/MediaCoverage';

import HomeRegist from './pages/registration/homeregist';
import HomeIndo from './pages/registration/homeindo';
import IndonesiaOnline from './pages/registration/indo-online';
import Thankyou from './pages/thankyoupage';


import Spesial2025 from './pages/listwinner2025/Spesial2025';
import Online2025 from './pages/listwinner2025/Online2025';
import Offline2025 from './pages/listwinner2025/Offline2025';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle('JNSF - Official');

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/ListofWinner" element={<LoW />} />
            <Route path="/Winner2024" element={<Spesial />} />
            <Route path="/Offline2024" element={<Offline2024 />} />
            <Route path="/Online2024" element={<Online2024 />} />
            <Route path="/ElementaryOffline" element={<OfflineElement />} />
            <Route path="/SecondaryOffline" element={<OfflineSecond />} />
            <Route path="/UniversitasOffline" element={<OfflineUniv/>} />
            <Route path="/ElementaryOnline" element={<OnlineElement/>} />
            <Route path="/SecondaryOnline" element={<OnlineSecond/>} />
            <Route path="/UniversitasOnline" element={<OnlineUniv/>} />

            <Route path="/CertificateSupervisor" element={<Certificatesupervisor/>} />
            <Route path="/Mediacoverage" element={<MediaCoverage/>} />
            <Route path="/Berita" element={<News2024/>} />
            <Route path="/News2024" element={<Berita2024/>} />
            <Route path="/News2025" element={<Berita2025/>} />
            <Route path="/homeregist" element={<HomeRegist/>} />
            <Route path="/homeindo" element={<HomeIndo/>} />
            <Route path="/indoonline" element={<IndonesiaOnline/>} />
            <Route path="/thankyou" element={<Thankyou/>} />


            <Route path="/Winner2025" element={<Spesial2025 />} />
            <Route path="/Offline2025" element={<Offline2025 />} />
            <Route path="/Online2025" element={<Online2025 />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
