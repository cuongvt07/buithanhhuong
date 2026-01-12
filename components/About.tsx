
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
    <section className="md:h-screen px-0 w-full relative overflow-hidden flex flex-col items-center">
      <div className="w-full h-full relative">

        {/* Group 1: Interests - Full Viewport Height for Vertical Centering */}
        <div className="w-full md:absolute md:top-0 md:left-0 md:h-screen px-4 md:px-12 flex flex-col justify-start md:justify-center md:transform mb-10 md:mb-0 z-10">
          <SectionLabel
            text="'m"
            width="84px"
            mobileWidth="84px"
            className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 relative mb-8 md:mb-0 mx-auto md:mx-0"
          />

          {/* Content Wrapper: Centered & Width-Matched to Hero */}
          <div className="relative w-full md:w-fit mx-auto">
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
            <div className="w-full md:w-auto ml-0 md:ml-[340px] md:space-y-4 px-2 md:px-[16px] py-0 md:py-[32px]">
              {currentInterests.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-0 md:gap-8 text-[16px] leading-[20px] items-center md:items-start text-center md:text-left">
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

        {/* Group 2: History - Fixed to bottom via user requested structure */}
        <div className="w-full md:absolute md:bottom-0 md:left-0 relative px-4 md:px-12 flex flex-col justify-start md:block shrink-0 z-20">
          <SectionLabel
            text="drifted"
            width="112px"
            mobileWidth="112px"
            className="section-label-container md:absolute md:left-0 md:bottom-0 md:translate-y-0 relative mb-8 md:mb-0 mx-auto md:mx-0"
          />

          <div className="relative w-full md:w-fit mx-auto">
            {/* Ghost (Identical Copy) - Desktop Only */}
            <div className="hidden md:flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
              <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
              <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
              <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
              <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
              <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
              <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
            </div>

            {/* Actual Content - History */}
            <div className="w-full md:w-auto ml-0 md:ml-[340px] md:space-y-4 px-4 md:px-[16px] md:py-[32px] py-0">
              {history.map((item, idx) => (
                <div key={idx} className="flex flex-row md:flex-row gap-4 md:gap-8 text-[16px] leading-[20px] justify-between md:justify-start items-start text-left w-full">
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
