
import React from 'react';

const Observe: React.FC = () => {
  const thoughts = [
    "Highschool Student Assessment or fastest-finger-first competition?",
    "Digital Product vs Architecture - a type of huge physical product"
  ];

  return (
    <section className="flex-1 w-full flex flex-col items-center px-6 pb-[20px] relative overflow-hidden">
      {/* Label: Left aligned, Vertically centered */}
      <div className="absolute left-8 sm:left-12 top-1/2 -translate-y-1/2 z-20">
        <div className="font-stix italic text-[#1d3413] text-[15px] flex items-center gap-x-4">
          <span>(</span>
          <span className="tracking-wide">what's around me</span>
          <span>)</span>
        </div>
      </div>

      {/* Main Content - Centered like Hero */}
      <div className="flex-1 w-full flex flex-col justify-center items-center z-10">
        <div className="relative w-fit mx-auto translate-x-[50px]">
          {/* Ghost Element from Hero to force identical centering */}
          <div className="flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
            <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
            <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
            <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
            <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
            <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
            <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
          </div>

          {/* Actual Content aligned with ghost structure */}
          <div className="ml-[340px] flex flex-col space-y-4 text-left">
            {thoughts.map((thought, i) => (
              <a key={i} href="#" className="block text-[16px] font-stix text-[#1d3413] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413] transition-all max-w-xl leading-relaxed">
                {thought}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Observe;
