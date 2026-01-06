import React from 'react';
import SectionLabel from './SectionLabel';
import WannaTalk from './WannaTalk';

interface ObserveProps {
  onNavigate: (page: string) => void;
}

const Observe: React.FC<ObserveProps> = ({ onNavigate }) => {
  // Mobile-specific interfaces
  interface ThoughtConfig {
    text: string;
    image?: {
      src: string;
      width: string;
      x: number;
      y: number;
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
        className="relative mb-10 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:mt-0"
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
          <div className="ml-0 md:ml-[340px] flex flex-col gap-8 md:gap-4 px-4 md:px-[48px] py-0 md:py-[32px] w-full">
            {thoughts.map((item, i) => (
              <a
                key={i}
                href="#"
                className="group relative flex flex-row md:block items-end md:items-start text-[16px] font-stix text-[#1d3413] leading-relaxed cursor-help w-full md:w-fit mx-0 md:mx-0 gap-[24px] md:gap-0"
              >
                {/* Mobile Image: Left side, static */}
                {item.image && (
                  <div className="block md:hidden shrink-0 w-[120px] h-[120px]">
                    <img
                      src={item.image.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Text */}
                <span className="relative z-10 text-left md:text-left flex-1 md:flex-none">
                  {item.text}
                </span>

                {/* Desktop Hover Image */}
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

          {/* Mobile "Wanna Talk" - Integrated in flow - only visible on mobile */}
          <div className="md:hidden w-full pointer-events-auto bg-[#faf7f3] mt-8">
            <WannaTalk onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Observe;
