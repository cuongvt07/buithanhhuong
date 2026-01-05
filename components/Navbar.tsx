
import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING } from '../config/designTokens';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'about', label: 'I' },
    { id: 'study', label: 'study' },
    { id: 'observe', label: 'observe' },
    { id: 'work', label: 'and experiment' },
    // { id: 'play', label: 'and play' }
  ];

  return (
    <nav className="relative z-50 p-[32px] flex md:flex-row flex-col md:justify-between md:items-center items-start bg-transparent pointer-events-auto w-full" style={{ gap: SPACING.gap.default }}>
      {/* Top section on mobile: Intro + Navigation */}
      <div className="flex flex-col md:contents items-center w-full" style={{ gap: SPACING.gap.default }}>
        {/* Frame 1: Intro text - "Hi, I'm Thanh Huong Bui" */}
        <button
          onClick={() => onNavigate('home')}
          className={`
            flex items-center justify-center transition-all duration-300 outline-none relative
            ${currentPage === 'home'
              ? ''
              : 'hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[0.5px] hover:after:bg-[#1d3413]'
            }
          `}
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.stix,
            fontSize: currentPage === 'home' ? '17px' : '16px',
            fontWeight: TYPOGRAPHY.body.italic.fontWeight,
            fontStyle: currentPage === 'home' ? 'italic' : 'normal',
            lineHeight: '20px',
            color: COLORS.textPrimary,
            minWidth: '220px',
            whiteSpace: 'nowrap'
          }}
        >
          Hi, I'm Thanh Huong Bui
        </button>

        {/* Frame 2: Navigation - "I study observe work and play" */}
        <div className="flex flex-col md:flex-row items-center flex-wrap" style={{ gap: SPACING.gap.default }}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                transition-all duration-300 outline-none relative text-center grid place-items-center
                ${currentPage === item.id
                  ? ''
                  : 'hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[0.5px] hover:after:bg-[#1d3413]'
                }
              `}
              style={{
                fontFamily: '"STIX Two Text", serif',
                fontSize: currentPage === item.id ? '17px' : '16px',
                fontWeight: 400,
                lineHeight: '20px',
                color: '#1D3413',
                width: item.id === 'about' ? '32px' : 'auto',
                flexShrink: 0
              }}
            >
              {/* Reserve space for bold/italic/normal widest variant */}
              <span className="invisible col-start-1 row-start-1 font-normal opacity-0 pointer-events-none" aria-hidden="true">{item.label}</span>
              <span className="invisible col-start-1 row-start-1 italic opacity-0 pointer-events-none" aria-hidden="true">{item.label}</span>

              {/* Visible Text */}
              <span
                className="col-start-1 row-start-1"
                style={{
                  fontStyle: currentPage === item.id ? 'italic' : 'normal',
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Frame 3: CTA - "wanna talk?" - Bottom center on mobile, right side on desktop */}
      <div className="md:relative fixed bottom-[32px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:bottom-auto z-50">
        <button
          onClick={() => onNavigate('contact')}
          className="relative transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[0.5px] hover:after:bg-[#1d3413] outline-none"
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.stix,
            fontSize: `${TYPOGRAPHY.body.regular.fontSize}px`,
            fontWeight: TYPOGRAPHY.body.regular.fontWeight,
            lineHeight: '20px',
            color: COLORS.textPrimary,
            display: 'inline-block',
            flexShrink: 0,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
        >
          wanna talk?
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
