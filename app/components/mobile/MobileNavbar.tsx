'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full p-4 flex justify-start items-center gap-6 bg-black relative z-50">
      {/* دوگمەی مێنیو لە لای چەپ */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-white text-sm font-semibold border border-white/20 px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
      >
        Menu
      </button>

      {/* لۆگۆ */}
      <div className="font-bold text-xl text-white tracking-widest">
         <span className="text-red-600"></span>
      </div>

      {/* مێنیوی Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 w-[85%] h-full bg-black border-r border-red-600/50 p-8 z-[100] flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-lg text-white">Nabaz Designer</span>
              <button onClick={() => setIsOpen(false)} className="text-2xl text-white">✕</button>
            </div>

            <div className="flex flex-col gap-8 text-xl font-medium text-white">
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">About</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">Projects</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">Services</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-red-500 border-t border-white/10 pt-8">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ڕەشکردنەوەی پاشبنەما */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-[90]" onClick={() => setIsOpen(false)} />
      )}
    </nav>
  );
}