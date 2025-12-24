
import React from 'react';

const Study: React.FC = () => {
  const gems = [
    "Teeter-totter wall - designing for human connection rights",
    "Missing bullet holes of fighters - a classic data analysis case study",
    "Mōn - Tran Canh's ashtray"
  ];

  return (
    <section className="w-full h-full relative overflow-hidden flex-grow">
      {/* Label: Centered in the middle of the page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="font-stix italic text-[#1d3413] text-[15px] flex items-center gap-x-16">
          <span>(</span>
          <span>gems</span>
          <span>)</span>
        </div>
      </div>

      {/* List: Centered at the bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center pb-8 z-10">
        <div className="flex flex-col space-y-2 items-center">
          {gems.map((gem, i) => (
            <a key={i} href="#" className="block text-[16px] font-stix text-[#1d3413] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413] transition-all w-fit leading-relaxed">
              {gem}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Study;
