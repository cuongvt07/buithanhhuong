import React from 'react';
import SectionLabel from './SectionLabel';
import WannaTalk from './WannaTalk';

interface StudyProps {
  onNavigate: (page: string) => void;
}

const Study: React.FC<StudyProps> = ({ onNavigate }) => {
  const gems = [
    {
      text: "Teeter-totter wall - designing for human connection rights",
      image: "images/image1.png",
      width: "232px",
      height: "158px"
    },
    {
      text: "Missing bullet holes of fighters - a classic data analysis case study",
      image: "images/image2.png",
      width: "256px",
      height: "191px"
    },
    {
      text: "Mōn - Tran Canh's ashtray",
      image: "images/image3.png",
      width: "180px",
      height: "180px"
    }
  ];

  // Duplicate gems for mobile "infinite" scroll simulation
  const mobileGems = [...gems, ...gems, ...gems, ...gems];

  return (
    <section className="w-full md:h-screen min-h-screen relative overflow-hidden flex-grow flex flex-col md:block">
      {/* Desktop: Centered Label */}
      <div className="hidden md:flex fixed top-1/2 left-0 w-full -translate-y-1/2 items-center justify-center pointer-events-none z-10">
        <SectionLabel
          text="gems"
          width="192px"
          mobileWidth="192px"
        />
      </div>

      {/* Main Container: Anchored to bottom on desktop, stacked on mobile */}
      <div className="relative md:fixed bottom-0 left-0 w-full flex flex-col items-center justify-start md:justify-end z-10 pointer-events-none">

        {/* MOBILE VIEW ONLY: Label pushed up by list with 32px gap */}
        <div className="md:hidden flex flex-col items-center">
          <SectionLabel
            text="gems"
            width="192px"
            mobileWidth="192px"
            className="relative pointer-events-auto"
            style={{ position: 'relative', transform: 'none', left: 'auto', top: 'auto' }}
          />
          <div className="h-[32px]"></div>
        </div>

        {/* List: Bottom block with padding */}
        <div className="w-full text-center px-0 md:px-4 py-8 md:p-[120px_32px_32px_32px] pointer-events-auto overflow-hidden md:overflow-visible">

          {/* MOBILE VIEW: Horizontal Infinite Scroll */}
          <div className="flex md:hidden flex-row flex-nowrap gap-8 items-start overflow-x-auto snap-x snap-mandatory px-8 w-full scrollbar-hide pb-8">
            {mobileGems.map((item, i) => (
              <a
                key={`mobile-${i}`}
                href="#"
                className="group relative flex flex-col items-center shrink-0 w-[219px] snap-center text-[16px] font-stix text-[#1d3413] transition-all leading-[20px]"
              >
                {/* Image: Fixed 219x150 */}
                <div
                  className="relative mb-6 opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-[219px] h-[150px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="block whitespace-normal w-full">{item.text}</span>
              </a>
            ))}
          </div>

          {/* DESKTOP VIEW: Vertical List */}
          <div className="hidden md:flex flex-col gap-[16px] items-center">
            {gems.map((item, i) => (
              <a
                key={`desktop-${i}`}
                href="#"
                className="group relative block text-[16px] font-stix text-[#1d3413] transition-all w-fit leading-[20px]"
              >
                {/* Hover Image: Centered, 8px above text */}
                <div
                  className="absolute bottom-full mb-[8px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 md:w-[var(--d-w)] md:h-[var(--d-h)]"
                  style={{ '--d-w': item.width, '--d-h': item.height } as React.CSSProperties}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="block">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile "Wanna Talk" - Integrated in flow */}
        <div className="md:hidden w-full pointer-events-auto bg-[#faf7f3]">
          <WannaTalk onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
};

export default Study;
