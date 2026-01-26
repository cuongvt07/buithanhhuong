import React from 'react';
import SectionLabel from './SectionLabel';
import WannaTalk from './WannaTalk';
import ThoughtDetailModal from './ThoughtDetail';

interface ObserveProps {
}

const Observe: React.FC<ObserveProps> = () => {
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

  const [selectedThought, setSelectedThought] = React.useState<ThoughtConfig | null>(null);

  const thoughts: ThoughtConfig[] = [
    {
      text: "Highschool Student Assessment or fastest-finger-first competition?",
      image: { src: 'images/study_1.png', width: '160px', x: 12, y: 0 }
    },
    {
      text: "Digital Product vs Architecture - a type of huge physical product",
      image: { src: 'images/study_3.png', width: '160px', x: 12, y: 0 }
    }
  ];

  return (
    <section className="flex-1 w-full md:h-screen min-h-screen flex flex-col items-center px-0 md:px-6 pb-24 md:pb-[20px] relative overflow-hidden">
      {/* Section Label (Mobile: Centered, Desktop: Centered Fixed) */}
      <div className="md:hidden w-full flex justify-center">
        <SectionLabel
          text="what's around me"
          width="214px"
          mobileWidth="214px"
          className="relative"
        />
      </div>

      <div className="hidden md:flex fixed top-1/2 left-0 w-full -translate-y-1/2 items-center justify-start pointer-events-none z-10">
        <SectionLabel
          text="what's around me"
          width="214px"
          mobileWidth="214px"
        />
      </div>

      {/* Main Content - Centered Full Viewport */}
      <div className="relative md:fixed md:inset-0 w-full flex flex-col justify-start md:justify-center items-center z-10 pointer-events-none">
        <div className="relative w-full md:w-max md:ml-[120px] md:p-[32px_42px] pointer-events-auto">

          {/* Actual Content - Left aligned items within a centered block */}
          <div className="flex flex-col gap-8 md:gap-[16px] px-0 md:px-0 py-0 w-full items-center md:items-start">
            {thoughts.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedThought(item)}
                className="group relative flex flex-row md:block items-end md:items-start text-[16px] font-stix text-[#1d3413] leading-[20px] cursor-pointer w-full md:w-fit mx-0 md:mx-0 gap-[24px] md:gap-0 transition-opacity"
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
                <span className="relative z-10 text-left flex-1 md:flex-none">
                  {/* Handle specific mobile line breaks */}
                  <span className="md:hidden">
                    {i === 0 && (
                      <>
                        Highschool Student <br /> Assessment or fastest- <br /> finger-first competition?
                      </>
                    )}
                    {i === 1 && (
                      <>
                        Digital Product vs <br /> Architecture - a type of <br /> huge physical product
                      </>
                    )}
                    {/* Fallback for other items if any */}
                    {i > 1 && item.text}
                  </span>
                  {/* Desktop Text */}
                  <span className="hidden md:inline">
                    {item.text}
                  </span>
                </span>

                {/* Desktop Hover Image - Positioned to the right of the text */}
                {item.image && (
                  <div
                    className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 pointer-events-none"
                    style={{
                      width: item.image.width,
                    }}
                  >
                    <img
                      src={item.image.src}
                      alt={item.text}
                      className="w-full h-auto object-cover opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left rounded-sm"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile "Wanna Talk" - Integrated in flow - only visible on mobile */}
          <div className="md:hidden w-full pointer-events-auto bg-[#faf7f3] mt-8 flex justify-center">
            <div className="w-full">
              <WannaTalk />
            </div>
          </div>
        </div>
      </div>

      <ThoughtDetailModal
        isOpen={!!selectedThought}
        onClose={() => setSelectedThought(null)}
        data={selectedThought}
      />
    </section>
  );
};

export default Observe;
