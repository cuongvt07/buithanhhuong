import React from 'react';
import SectionLabel from './SectionLabel';

const Study: React.FC = () => {
  const gems = [
    {
      text: "Teeter-totter wall - designing for human connection rights",
      image: "images/image1.png",
      width: "291px",
      height: "199px"
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

  return (
    <section className="w-full md:h-full min-h-screen relative overflow-hidden flex-grow flex flex-col md:block">
      {/* Container anchored to bottom on desktop, stacked on mobile */}
      <div className="relative md:absolute bottom-0 left-0 w-full flex flex-col items-center justify-start md:justify-end z-10 pointer-events-none pb-20 md:pb-0">
        {/* Label: Pushed up by list with 32px gap */}
        <SectionLabel
          text="gems"
          width="192px"
          mobileWidth="192px"
          className="pointer-events-auto mt-20 md:mt-0"
          style={{ position: 'relative', transform: 'none', left: 'auto', top: 'auto' }}
        />

        {/* Gap of 32px */}
        <div className="h-[32px]"></div>

        {/* List: Bottom block with padding */}
        <div className="text-center px-4 py-8 md:p-[120px_32px_120px_32px] pointer-events-auto">
          <div className="flex flex-col gap-[16px] items-center">
            {gems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="group relative block text-[16px] font-stix text-[#1d3413] transition-all w-fit leading-relaxed"
              >
                {/* Hover Image: Centered, 8px above text */}
                <div
                  className="absolute bottom-full mb-[8px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                  style={{ width: item.width, height: item.height }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
