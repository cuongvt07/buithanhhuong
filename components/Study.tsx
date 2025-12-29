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
    <section className="w-full h-full relative overflow-hidden flex-grow">
      {/* Container anchored to bottom, grouping Label and List */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end z-10 pointer-events-none">
        {/* Label: Pushed up by list with 32px gap */}
        <SectionLabel
          text="gems"
          width="192px"
          className="pointer-events-auto"
          style={{ position: 'relative', transform: 'none', left: 'auto', top: 'auto' }}
        />

        {/* Gap of 32px */}
        <div style={{ height: '32px' }}></div>

        {/* List: Bottom block with padding */}
        <div className="text-center p-[120px_32px_120px_32px] pointer-events-auto">
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
