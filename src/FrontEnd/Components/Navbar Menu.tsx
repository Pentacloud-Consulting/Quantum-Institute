"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

const NavbarMenu = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full px-6 md:px-12 flex items-center justify-between z-[100] transition-all duration-300 ${
          isScrolled ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" : "pt-8 pb-6 bg-transparent"
        }`}
      >
        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/Logo/Quantum%20Institute%20Logo.png" 
              alt="Quantum Institute Logo" 
              className="h-7 sm:h-8 md:h-10 w-auto object-contain md:scale-125 origin-left" 
              style={{ filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.6)) drop-shadow(0px 2px 4px rgba(0,0,0,0.6))" }}
            />
          </Link>
        </div>

        {/* RIGHT: Menu Button */}
        <div className="flex items-center justify-end">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white rounded-full transition-all backdrop-blur-md bg-black/30 border border-white/20 flex items-center justify-center w-12 h-12 shadow-lg group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <X size={26} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Menu size={26} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* SIDEBAR MENU (Left to Right, half screen) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[98]"
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-[100dvh] w-[80%] md:w-[50%] lg:w-[40%] bg-[#050505]/95 backdrop-blur-2xl border-l border-white/10 flex flex-col z-[99] shadow-2xl pt-28 px-8 md:px-16"
            >
               <div className="flex flex-col gap-4 text-white h-full overflow-y-auto pb-8">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-gray-500 tracking-[0.2em] uppercase font-bold mb-1">H.E.R.E Pillars</p>
                    <Link href="/healing" onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-3xl font-light hover:text-[#E05A00] transition-colors">Healing</Link>
                    <Link href="#" className="text-2xl md:text-3xl font-light hover:text-[#E05A00] transition-colors">Education</Link>
                    <Link href="#" className="text-2xl md:text-3xl font-light hover:text-[#E05A00] transition-colors">Research</Link>
                    <Link href="#" className="text-2xl md:text-3xl font-light hover:text-[#E05A00] transition-colors">Exploration</Link>
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/10 my-4"></div>
                  
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-gray-500 tracking-[0.2em] uppercase font-bold mb-1">Navigation</p>
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-light hover:text-[#E05A00] transition-colors">Home</Link>
                    <Link href="#" className="text-xl md:text-2xl font-light hover:text-[#E05A00] transition-colors">Pricing</Link>
                    <Link href="#" className="text-xl md:text-2xl font-light hover:text-[#E05A00] transition-colors">Road Map</Link>
                    <Link href="#" className="text-xl md:text-2xl font-light hover:text-[#E05A00] transition-colors">Blog</Link>
                  </div>

                  <div className="mt-auto pt-10">
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full md:w-auto px-10 bg-[#E05A00] text-white font-bold tracking-widest uppercase text-sm py-4 rounded-full hover:bg-[#ff6600] transition-colors shadow-lg shadow-[#E05A00]/20"
                    >
                      Join Waitlist
                    </button>
                  </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMenu;
