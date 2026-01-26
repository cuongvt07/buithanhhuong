
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Study from './components/Study';
import Observe from './components/Observe';
import Work from './components/Work';
import Play from './components/Play';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Lenis from 'lenis';

const AppContent: React.FC = () => {
  const location = useLocation();
  const mainRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const lenis = new Lenis({
      wrapper: mainRef.current,
      duration: 1.5,
      lerp: 0.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.6,
      orientation: 'vertical', // We want to control vertical primarily here
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Map current path to a "page ID" for styling and Navbar state
  const getPageId = (path: string) => {
    switch (path) {
      case '/hi': return 'home';
      case '/about': return 'about';
      case '/study': return 'study';
      case '/observe': return 'observe';
      case '/and-experiment': return 'work';
      case '/contact': return 'contact';
      case '/play': return 'play';
      default: return 'home';
    }
  };

  const currentPage = getPageId(location.pathname);

  return (
    <div className="app-container flex flex-col">
      <Navbar currentPage={currentPage} />

      {/* Main container cho phép cuộn nội bộ nếu cần nhưng ẩn thanh cuộn */}
      <style>{`
        @media (max-width: 767px) {
          main {
            width: 100% !important;
          }
        }
      `}</style>
      <main
        ref={mainRef}
        className={`flex-1 flex flex-col 
        pt-0 ${['home', 'work', 'play', 'study', 'observe', 'about'].includes(currentPage) ? 'md:pt-0' : 'md:pt-[84px]'}
        ${currentPage === 'home' ? 'md:overflow-hidden overflow-y-auto' : 'overflow-y-auto'} no-scrollbar`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/hi" replace />} />
          <Route path="/hi" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/study" element={<Study />} />
          <Route path="/observe" element={<Observe />} />
          <Route path="/and-experiment" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to /hi */}
          <Route path="*" element={<Navigate to="/hi" replace />} />
        </Routes>
      </main>
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
