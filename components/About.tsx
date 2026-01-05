
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
    <section className="min-h-screen md:h-[100vh] px-0 w-full relative overflow-hidden flex flex-col items-center pb-40 md:pb-0">
      <div className="w-full h-full flex flex-col pt-20 md:pt-0">

        {/* Group 1: Interests */}
        <div className="w-full relative px-4 md:px-12 flex-1 flex flex-col justify-start md:justify-center mb-10 md:mb-0">
          {/* Label: Relative on mobile, Absolute left/center on desktop */}
          <SectionLabel
            text="'m"
            width="84px"
            mobileWidth="84px"
            className="relative mb-8 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mx-auto md:mx-0"
          />

          {/* Content Wrapper: Centered & Width-Matched to Hero */}
          <div className="relative w-full md:w-fit mx-auto md:translate-x-[50px]">
            {/* Ghost to Set Width - Desktop Only */}
            <div className="hidden md:flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
              {/* ... Keep ghost content mostly as is, just wrapped in hidden md:flex ... */}
              <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
              <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
              <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
              <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
              <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
              <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
            </div>

            {/* Actual Content - Interests */}
            <div className="w-full md:w-auto ml-0 md:ml-[340px] md:space-y-4 px-2 md:px-[48px] py-0 md:py-[32px]">
              {currentInterests.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-0 md:gap-8 text-[16px] leading-relaxed items-center md:items-start text-center md:text-left">
                  {/* Mobile: Inline text */}
                  <span className="md:hidden text-[#1d3413]">
                    <span className="font-medium mr-1">{item.label}</span>
                    {item.desc}{idx < currentInterests.length - 1 ? ',' : ''}
                  </span>
                  {/* Desktop: Columns */}
                  <span className="hidden md:block w-full md:w-[120px] h-auto md:h-[20px] shrink-0 text-[#1d3413] font-medium md:font-normal">{item.label}</span>
                  <span className="hidden md:block text-[#1d3413]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Group 2: History */}
        <div className="w-full relative px-4 md:px-12 pb-[48px] shrink-0 flex flex-col justify-start md:block">
          {/* Label */}
          <SectionLabel
            text="drifted"
            width="112px"
            mobileWidth="112px"
            className="relative mb-8 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mx-auto md:mx-0"
          />

          {/* Content Wrapper */}
          <div className="relative w-full md:w-fit mx-auto md:translate-x-[50px]">
            {/* Ghost (Identical Copy) - Desktop Only */}
            <div className="hidden md:flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
              {/* ... Keep ghost content ... */}
              <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
              <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
              <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
              <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
              <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
              <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
            </div>

            {/* Actual Content - History */}
            <div className="w-full md:w-auto ml-0 md:ml-[340px] md:space-y-4 px-4 md:px-[48px] py-0 md:py-[48px]">
              {history.map((item, idx) => (
                <div key={idx} className="flex flex-row md:flex-row gap-4 md:gap-8 text-[16px] leading-relaxed justify-between md:justify-start items-start text-left w-full">
                  <span className="w-[120px] md:w-[120px] shrink-0 text-[#1d3413] font-normal whitespace-nowrap">{item.period}</span>
                  <span className="text-[#1d3413] text-left md:text-left flex-1">{item.desc}</span>
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

