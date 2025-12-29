
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
    { id: 'work', label: 'work' },
    { id: 'play', label: 'and play' }
  ];

  return (
    <nav className="relative z-50 p-[32px] flex justify-between items-center bg-transparent pointer-events-auto w-full" style={{ gap: SPACING.gap.default }}>
      {/* Frame 1: Intro text - "Hi, I'm Thanh Huong Bui" */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center justify-center transition-all duration-300 outline-none relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413]"
        style={{
          fontFamily: TYPOGRAPHY.body.fontFamily.stix,
          fontSize: `${TYPOGRAPHY.body.italic.fontSize}px`,
          fontWeight: TYPOGRAPHY.body.italic.fontWeight,
          fontStyle: TYPOGRAPHY.body.italic.fontStyle,
          lineHeight: TYPOGRAPHY.body.italic.lineHeight,
          color: COLORS.textPrimary
        }}
      >
        Hi, I'm Thanh Huong Bui
      </button>

      {/* Frame 2: Navigation - "I study observe work and play" */}
      <div className="flex items-center" style={{ gap: SPACING.gap.default }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              transition-all duration-300 outline-none relative text-center
              ${currentPage === item.id
                ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-[#1d3413]'
                : 'hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413]'
              }
            `}
            style={{
              fontFamily: '"STIX Two Text", serif',
              fontSize: currentPage === item.id ? '17px' : '16px',
              fontStyle: currentPage === item.id ? 'italic' : 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              color: '#1D3413',
              width: item.id === 'about' ? '32px' : 'auto',
              flexShrink: 0
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Frame 3: CTA - "wanna talk?" */}
      <div>
        <a
          href="mailto:hello@buithanhhuong.com"
          className="relative transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413]"
          style={{
            fontFamily: TYPOGRAPHY.body.fontFamily.stix,
            fontSize: `${TYPOGRAPHY.body.regular.fontSize}px`,
            fontWeight: TYPOGRAPHY.body.regular.fontWeight,
            lineHeight: TYPOGRAPHY.body.regular.lineHeight,
            color: COLORS.textPrimary,
            display: 'inline-block',
            flexShrink: 0
          }}
        >
          wanna talk?
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
