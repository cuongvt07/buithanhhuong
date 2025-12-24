
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Study from './components/Study';
import Observe from './components/Observe';
import Work from './components/Work';
import Play from './components/Play';
import FloatingAI from './components/FloatingAI';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: string) => {
    if (page === currentPage) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      // Không cần scrollTo(0,0) vì chúng ta dùng layout cố định viewport
    }, 300);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Hero />;
      case 'about': return <About />;
      case 'study': return <Study />;
      case 'observe': return <Observe />;
      case 'work': return <Work />;
      case 'play': return <Play />;
      default: return <Hero />;
    }
  };

  return (
    <div className="app-container flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main container cho phép cuộn nội bộ nếu cần nhưng ẩn thanh cuộn */}
      <main className={`flex-1 flex flex-col ${currentPage === 'home' ? 'overflow-hidden' : 'overflow-y-auto'} no-scrollbar transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'}`}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
