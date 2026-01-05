
import React from 'react';
import SectionLabel from './SectionLabel';

const Observe: React.FC = () => {
  interface ThoughtConfig {
    text: string;
    image?: {
      src: string;
      width: string;
      x: number; // Position X (px) relative to center or left
      y: number; // Position Y (px) relative to center or top
    };
  }

  const thoughts: ThoughtConfig[] = [
    {
      text: "Highschool Student Assessment or fastest-finger-first competition?",
      image: { src: 'images/study_1.png', width: '250px', x: 12, y: 0 }
    },
    {
      text: "Digital Product vs Architecture - a type of huge physical product",
      image: { src: 'images/study_3.png', width: '200px', x: 12, y: 0 }
    }
  ];

  return (
    <section className="flex-1 w-full md:h-screen min-h-screen flex flex-col items-center px-4 md:px-6 pb-24 md:pb-[20px] relative overflow-hidden">
      {/* Label: Relative Top on mobile, Absolute Left on desktop */}
      <SectionLabel
        text="what's around me"
        width="214px"
        mobileWidth="214px"
        className="relative mb-10 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mt-20 md:mt-0"
      />

      {/* Main Content - Centered like Hero */}
      <div className="flex-1 w-full flex flex-col justify-start md:justify-center items-center z-10">
        <div className="relative w-full md:w-fit mx-auto md:translate-x-[50px]">
          {/* Ghost Element from Hero - Desktop Only */}
          <div className="hidden md:flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
            {/* ... Ghost content ... */}
            <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
            <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
            <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
            <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
            <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
            <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
          </div>

          {/* Actual Content aligned with ghost structure */}
          <div className="ml-0 md:ml-[340px] flex flex-col space-y-4 text-center md:text-left px-4 md:px-[48px] py-0 md:py-[32px]">
            {thoughts.map((item, i) => (
              <a key={i} href="#" className="group relative block w-full md:w-fit text-[16px] font-stix text-[#1d3413] max-w-xl leading-relaxed cursor-help mx-auto md:mx-0">
                <span className="relative z-10">{item.text}</span>
                {item.image && (
                  <div
                    className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 z-50 pointer-events-none"
                    style={{
                      width: item.image.width,
                      transform: `translate(${item.image.x}px, ${item.image.y - 50}%)` // Adjusting Y centering + custom offset
                    }}
                  >
                    <img
                      src={item.image.src}
                      alt={item.text}
                      className="w-full h-auto object-cover opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center shadow-xl rounded-sm"
                    />
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Observe;
