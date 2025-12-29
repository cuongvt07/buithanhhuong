import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING, BREAKPOINTS } from '../config/designTokens';

const Hero: React.FC = () => {
  // Figma asset URLs for decorative rainbow elements
  const rainbowLightStickerUrl = 'https://www.figma.com/api/mcp/asset/c652ca89-7bd9-46c5-b869-04ffd572b903';
  const rainbowLightSticker286Url = 'https://www.figma.com/api/mcp/asset/8881352c-5c4c-4dea-8f71-8d51fa2e91e9';

  // Text lines with positioning (top-aligned, laptop 1440px width)
  const textLines = [
    {
      text: 'I WALK',
      top: '60px', // Legacy props kept for reference/fallback
      left: 'calc(50% - 78px)'
    },
    {
      text: 'THIS EARTH,',
      top: '147px',
      left: 'calc(50% - 305px)',
      image: {
        src: 'images/earth.avif',
        width: '199px',
        height: '125px',
        top: '20px',
        left: '189px',
      }
    },
    {
      text: 'WATER THE FLOWERS',
      top: '234px',
      left: 'calc(50% - 208px)',
      image: {
        src: 'images/theflower.avif',
        width: '230px',
        height: '135px',
        top: '20px',
        left: '340px',
      }
    },
    {
      text: 'PAT THE LITTLE PUPPIES,',
      top: '321px',
      left: 'calc(50% - 486px)',
      image: {
        src: 'images/pat.avif',
        width: '155px',
        height: '150px',
        top: '20px',
        left: '200px',
      }
    },
    {
      text: 'SEW, GROW RICE, AND',
      top: '408px',
      left: 'calc(50% - 257px)'
    },
    {
      text: 'READ ARCHITECTURE NEWS',
      top: '495px',
      left: 'calc(50% - 446px)',
      image: {
        src: 'images/news.avif',
        width: '145px',
        height: '140px',
        top: '20px',
        left: '620px',
      }
    },
  ];


  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: 'calc(100vh - 88px)',
        backgroundColor: COLORS.bgPrimary
      }}
    >


      {/* Right side decoration - fixed to screen right edge */}
      <div
        className="absolute flex items-center justify-center pointer-events-none hidden lg:flex"
        style={{
          right: '-105px',
          top: '150px',
          width: '200px',
          height: '100px'
        }}
      >
        <div style={{ transform: 'rotate(-28.701deg)', width: '300px', height: '250px', opacity: 0.3 }}>
          <img
            src={rainbowLightSticker286Url}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
        </div>
      </div>

      {/* Main hero text - responsive scaling */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '960px',
          left: '50%',
          top: '73px',
          transform: 'translateX(-50%)'
        }}
      >
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (min-width: ${BREAKPOINTS.tabletLg}px) {
            .hero-text { 
              font-size: ${TYPOGRAPHY.hero.laptop.fontSize}px; 
              line-height: ${TYPOGRAPHY.hero.laptop.lineHeight}px; 
            }
            .hero-line {
              animation: fadeInUp 0.8s ease-out forwards;
            }
          }
          @media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.tabletLg - 1}px) {
            .hero-text { 
              font-size: ${TYPOGRAPHY.hero.tablet.fontSize}px; 
              line-height: ${TYPOGRAPHY.hero.tablet.lineHeight}px; 
            }
            .hero-line {
              animation: fadeInUp 0.8s ease-out forwards;
            }
          }
          @media (max-width: ${BREAKPOINTS.tablet - 1}px) {
            .hero-text { 
              font-size: ${TYPOGRAPHY.hero.mobile.fontSize}px; 
              line-height: ${TYPOGRAPHY.hero.mobile.lineHeight}px; 
            }
            .hero-line {
              animation: fadeInUp 0.6s ease-out forwards;
            }
          }
          /* Custom overrides per user request */
          .hero-line {
             position: relative !important;
             top: auto !important;
             left: auto !important;
          }
        `}</style>

        <div
          className="hero-text relative w-full flex flex-col gap-[28px]"
          style={{ alignItems: 'flex-start' }}
        >
          {/* Decorative light-leak elements - hide on mobile */}
          <div className="hidden md:block">
            {/* Center decoration - laptop only */}
            <div
              className="absolute flex items-center justify-center pointer-events-none hidden lg:flex"
              style={{
                left: '150px',
                top: '230px',
                width: '367.399px',
                height: '469.488px'
              }}
            >
              <div style={{ transform: 'rotate(-28.701deg)', width: '367.399px', height: '469.488px', opacity: 0.8 }}>
                <img
                  src={rainbowLightSticker286Url}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>

          </div>

          {/* Right side decoration - fixed to screen right edge */}
          {textLines.map((line, index) => (
            <div
              key={index}
              className="hero-line whitespace-nowrap group pointer-events-auto cursor-default inline-flex items-center justify-center z-40 group-hover:z-[100] relative"
              style={{
                fontFamily: TYPOGRAPHY.hero.fontFamily,
                fontWeight: TYPOGRAPHY.hero.fontWeight,
                color: COLORS.textPrimary,
                letterSpacing: '0',
                marginLeft: line.left,
                opacity: 0,
              }}
            >
              {line.text}
              {line.image && (
                <div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[9999]"
                  style={{
                    width: line.image.width,
                    height: line.image.height,
                    ...(line.image.top && { top: line.image.top }),
                    ...(line.image.left && { left: line.image.left }),
                  }}
                >
                  <img
                    src={line.image.src}
                    alt=""
                    className="w-full h-full object-cover rounded-sm shadow-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute left-1/2 z-50 pointer-events-none"
        style={{
          transform: 'translateX(-50%)',
          display: 'flex',
          padding: '32px',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '337px',
          bottom: '0',
          position: 'absolute'
        }}
      >
        <style>{`
            .bottom-label-text { font-size: 17px; }
            @media (max-width: ${BREAKPOINTS.tablet - 1}px) {
              .bottom-label-text { font-size: 14px; }
              .bottom-label-container { gap: 60px !important; }
            }
          `}</style>

        <span
          className="bottom-label-text"
          style={{
            fontFamily: '"STIX Two Text", serif',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 'normal',
            color: '#1D3413',
          }}
        >
          (
        </span>

        <p
          className="bottom-label-text"
          style={{
            fontFamily: '"STIX Two Text", serif',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 'normal',
            color: '#1D3413',
            margin: 0,
            whiteSpace: 'nowrap'
          }}
        >
          or mostly just breathe
        </p>

        <span
          className="bottom-label-text"
          style={{
            fontFamily: '"STIX Two Text", serif',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 'normal',
            color: '#1D3413',
          }}
        >
          )
        </span>
      </div>
    </section>
  );
};

export default Hero;