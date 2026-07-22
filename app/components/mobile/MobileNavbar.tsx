'use client';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="w-full flex flex-row-reverse justify-between items-center text-white">
        
        {/* لۆگۆ لە لای ڕاست */}
        <div className="font-black text-white text-2xl tracking-tighter whitespace-nowrap">
          Nabaz&nbsp;<span className="text-red-600">Designer</span>
        </div>

        {/* دوگمەی مینیو لە لای چەپ */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* لیستی مینیوی مۆبایل */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 py-6 px-6 flex flex-col gap-4 font-bold text-lg shadow-2xl backdrop-blur-lg text-white">
          <a href="#home" onClick={handleLinkClick} className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Home</a>
          <a href="#about" onClick={handleLinkClick} className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">About</a>
          <a href="#work" onClick={handleLinkClick} className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Work</a>
          <a href="#skills" onClick={handleLinkClick} className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Skills</a>
          <a href="#contact" onClick={handleLinkClick} className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
}