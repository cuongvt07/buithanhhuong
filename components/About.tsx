
import React from 'react';
import SectionLabel from './SectionLabel';

const About: React.FC = () => {
  const currentInterests = [
    { label: 'redesigning', desc: 'my family living experience at Phuongmao house' },
    { label: 'learning', desc: 'data analytics & psychology' },
    { label: 'tying', desc: 'flowers in felicità' },
    { label: 'coloring', desc: 'what color was your day?' },
  ];

  const history = [
    { period: '2021 - now', desc: 'design digital product' },
    { period: '2020 - 2021', desc: 'simulate energy and audit green building' },
    { period: '2018 - 2021', desc: 'design architecture' },
    { period: '2013 - 2018', desc: 'learn architecture & design' },
  ];

  return (
    <section className="h-[100vh] px-0 w-full relative overflow-hidden flex flex-col items-center">
      <div className="w-full h-full flex flex-col">

        {/* Group 1: Interests */}
        <div className="w-full relative px-8 sm:px-12 flex-1 flex flex-col justify-center">
          {/* Label: Aligned Left (Nav Start), Bottom of Row */}
          {/* Label: Vertically centered, Left aligned with padding */}
          <SectionLabel
            text="'m"
            width="84px"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          />

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
            <div className="ml-[340px] space-y-4 px-[24px] py-[32px]">
              {currentInterests.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 text-[15px] leading-relaxed">
                  <span className="w-[120px] h-[20px] shrink-0 text-left text-[#1d3413]">{item.label}</span>
                  <span className="text-[#1d3413]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Group 2: History */}
        <div className="w-full relative px-8 sm:px-12 pb-[32px] shrink-0">
          {/* Label: Aligned Left, Bottom */}
          {/* Label: Vertically centered, Left aligned with padding */}
          <SectionLabel
            text="drifted"
            width="112px"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          />

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
            <div className="ml-[340px] space-y-4 px-[24px] py-[32px]">
              {history.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 text-[15px] leading-relaxed">
                  <span className="w-[120px] h-[20px] shrink-0 text-left text-[#1d3413]">{item.period}</span>
                  <span className="text-[#1d3413]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

