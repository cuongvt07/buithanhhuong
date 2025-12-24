
import React from 'react';

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
    <nav className="relative z-50 py-[20px] px-8 sm:px-12 flex justify-between items-center bg-transparent pointer-events-auto w-full">
      {/* Logo - Chữ thẳng, STIX, không mờ, gạch chân khi hover */}
      <button
        onClick={() => onNavigate('home')}
        className="navbar-title transition-all duration-300 outline-none relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413]"
      >
        Hi, I'm Thanh Huong Bui,
      </button>

      {/* Menu - Chữ thẳng, STIX, không mờ, gạch chân khi hover/active */}
      <div className="hidden md:flex space-x-12 items-center">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              font-stix text-[15px] transition-all duration-300 outline-none relative text-[#1d3413]
              ${currentPage === item.id
                ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-[#1d3413]'
                : 'hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413]'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="text-[15px] font-stix text-[#1d3413]">
        <a
          href="mailto:hello@buithanhhuong.com"
          className="relative transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#1d3413]"
        >
          wanna talk?
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
