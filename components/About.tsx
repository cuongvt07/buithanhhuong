
import React from 'react';

const About: React.FC = () => {
  const currentInterests = [
    { label: 'redesigning', desc: 'my family living experience - Phuongmao house' },
    { label: 'learning', desc: 'data analytics & psychology' },
    { label: 'tying', desc: 'flowers - felicità' },
    { label: 'coloring', desc: 'what color was your day?' },
  ];

  const history = [
    { period: '2021 - now', desc: 'design digital product' },
    { period: '2020 - 2021', desc: 'simulate energy and audit green building' },
    { period: '2018 - 2021', desc: 'design architecture (huge physical product)' },
    { period: '2013 - 2018', desc: 'learn architecture & design' },
  ];

  return (
    <section className="h-full pt-20 px-0 w-full relative overflow-hidden flex flex-col justify-end items-center space-y-32">

      {/* Group 1: Interests */}
      <div className="w-full relative px-8 sm:px-12">
        {/* Label: Aligned Left (Nav Start), Bottom of Row */}
        <div className="absolute left-8 sm:left-12 bottom-0">
          <span className="font-serif italic text-[15px] text-[#1d3413]">( 'm )</span>
        </div>

        {/* Content Wrapper: Centered & Width-Matched to Hero */}
        <div className="relative w-fit mx-auto translate-x-[50px]">
          {/* Ghost to Set Width */}
          <div className="flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
            <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
            <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
            <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
            <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
            <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
            <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
          </div>

          {/* Actual Content */}
          <div className="ml-[340px] space-y-6">
            {currentInterests.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-x-20 text-[15px] leading-relaxed">
                <span className="w-24 text-[#1d3413]">{item.label}</span>
                <span className="text-[#1d3413]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Group 2: History */}
      <div className="w-full relative px-8 sm:px-12">
        {/* Label: Aligned Left, Bottom */}
        <div className="absolute left-8 sm:left-12 bottom-0">
          <span className="font-serif italic text-[15px] text-[#1d3413] mb-1">( drifted )</span>
        </div>

        {/* Content Wrapper */}
        <div className="relative w-fit mx-auto translate-x-[50px]">
          {/* Ghost (Identical Copy) */}
          <div className="flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
            <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
            <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
            <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
            <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
            <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
            <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
          </div>

          {/* Actual Content */}
          <div className="ml-[340px] space-y-6">
            {history.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-x-20 text-[15px] leading-relaxed">
                <span className="w-24 text-[#1d3413]">{item.period}</span>
                <span className="text-[#1d3413]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

