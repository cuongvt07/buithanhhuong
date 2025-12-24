
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-400">
      <div>&copy; {new Date().getFullYear()} Bui Thanh Huong.</div>
      <div className="mt-4 md:mt-0 space-x-8">
        <a href="#" className="hover:text-black">Instagram</a>
        <a href="#" className="hover:text-black">LinkedIn</a>
        <a href="#" className="hover:text-black">Framer</a>
      </div>
    </footer>
  );
};

export default Footer;
