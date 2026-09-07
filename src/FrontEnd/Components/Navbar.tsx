"use client";

import React, { useState } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full px-6 md:px-12 flex items-center justify-between z-[100] transition-all duration-300 ${
        isScrolled ? "py-4" : "pt-8 pb-6"
      }`}
    >
      {/* Dynamic Solid Background with Smooth SVG Trapezoid & Drop Shadow */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[-1]
          ${isScrolled ? 'drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)]' : 'drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]'}
        `}
      >
        <div className="w-full h-full bg-[#f4f1eb]" />
        
        <svg 
          width="250" 
          height="32" 
          viewBox="0 0 250 32" 
          className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-1px)]"
        >
          <motion.path 
            fill="#f4f1eb"
            initial={false}
            animate={{
              d: isScrolled 
                ? "M 0 0 L 250 0 L 250 0 Q 250 0 250 0 L 0 0 Q 0 0 0 0 Z"
                : "M 0 0 L 250 0 L 230 25 Q 225 32 215 32 L 35 32 Q 25 32 20 25 Z"
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>
      {/* LEFT: H.E.R.E Pill */}
      <div className="hidden lg:flex items-center">
        <motion.nav 
          layout
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => setIsNavHovered(false)}
          className="flex items-center justify-center bg-white/95 backdrop-blur-md border border-gray-200 text-black rounded-full overflow-hidden cursor-pointer h-10 px-6 shadow-md"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <AnimatePresence mode="popLayout">
            {!isNavHovered ? (
              <motion.div
                layout
                key="here"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-[14px] font-medium tracking-[0.3em] whitespace-nowrap"
              >
                H.E.R.E
              </motion.div>
            ) : (
              <motion.div
                layout
                key="links"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-5 text-[15px] font-medium tracking-wide whitespace-nowrap"
              >
                <Link href="/healing" className="text-black hover:text-[#E05A00] font-semibold transition-colors">Healing</Link>
                <span className="text-gray-300 font-light">|</span>
                <a href="#" className="text-black hover:text-[#E05A00] font-semibold transition-colors">Education</a>
                <span className="text-gray-300 font-light">|</span>
                <a href="#" className="text-black hover:text-[#E05A00] font-semibold transition-colors">Research</a>
                <span className="text-gray-300 font-light">|</span>
                <a href="#" className="text-black hover:text-[#E05A00] font-semibold transition-colors">Exploration</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>



      {/* CENTER: LOGO */}
      <Link 
        href="/" 
        className={`flex items-center gap-3 hover:opacity-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:absolute lg:left-1/2 lg:-translate-x-[54%] z-10
          ${isScrolled ? 'translate-y-0' : 'translate-y-2 lg:translate-y-5'}
        `}
      >
        <img 
          src="/Logo/q%20logo.png" 
          alt="Quantum Institute Logo" 
          className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
            ${isScrolled 
              ? 'h-10 sm:h-12 md:h-14' 
              : 'h-14 sm:h-18 md:h-24'
            }
          `} 
          style={{ filter: isScrolled ? "none" : "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" }}
        />
      </Link>
      
      {/* RIGHT: Call to Action Pill */}
      <div className="hidden lg:flex items-center">
        <div className="flex items-center bg-white/95 backdrop-blur-md border border-gray-200 rounded-full p-1 shadow-md h-10">
          <button
            onClick={() => router.push('/signup')}
            className="bg-black text-white text-[13px] font-semibold px-4 h-full rounded-full whitespace-nowrap hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center"
          >
            Join waitlist
          </button>
        </div>
      </div>

      {/* MOBILE MENU TOGGLE */}
      <div className="lg:hidden flex items-center">
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black p-2 hover:bg-black/5 rounded-full transition-colors">
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
         </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col px-6 py-8 gap-6 z-[99] lg:hidden shadow-2xl"
          >
             <div className="flex flex-col gap-4 text-white">
                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-bold mb-1">H.E.R.E Pillars</p>
                <Link href="/healing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light hover:text-[#E05A00] transition-colors">Healing</Link>
                <a href="#" className="text-xl font-light hover:text-[#E05A00] transition-colors">Education</a>
                <a href="#" className="text-xl font-light hover:text-[#E05A00] transition-colors">Research</a>
                <a href="#" className="text-xl font-light hover:text-[#E05A00] transition-colors">Exploration</a>
             </div>
             
             <div className="mt-4 flex flex-col">
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); router.push('/signup'); }}
                  className="w-full bg-[#E05A00] text-white font-bold tracking-widest uppercase text-sm py-4 rounded-full hover:bg-[#ff6600] transition-colors shadow-lg shadow-[#E05A00]/20"
                >
                  Join Waitlist
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;
