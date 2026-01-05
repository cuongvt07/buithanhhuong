
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Study from './components/Study';
import Observe from './components/Observe';
import Work from './components/Work';
import Play from './components/Play';
import Contact from './components/Contact';
import FloatingAI from './components/FloatingAI';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const navigateTo = (page: string) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    // Không cần scrollTo(0,0) vì chúng ta dùng layout cố định viewport
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Hero />;
      case 'about': return <About />;
      case 'study': return <Study />;
      case 'observe': return <Observe />;
      case 'work': return <Work />;
      case 'play': return <Play />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="app-container flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main container cho phép cuộn nội bộ nếu cần nhưng ẩn thanh cuộn */}
      <style>{`
        @media (max-width: 767px) {
          main {
            width: 100% !important;
          }
        }
      `}</style>
      <main className={`flex-1 flex flex-col ${currentPage === 'home' ? 'md:overflow-hidden overflow-y-auto' : 'overflow-y-auto'} no-scrollbar`}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
