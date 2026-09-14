"use client";

import React, { useState } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtHero, setIsAtHero] = useState(true);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isHomePage = pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    // Footer section check (when scrolled near the bottom of document)
    if (typeof window !== "undefined") {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      setIsAtFooter(latest + windowHeight >= documentHeight - 400);
    }
  });

  // Button state logic: Collapsed into dot strictly ONLY when at the footer section unless hovered. Otherwise always full Join waitlist pill.
  const isCollapsedDot = isAtFooter && !isButtonHovered;

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
      {/* LEFT SECTION: Logo when scrolled, or H.E.R.E pill when unscrolled */}
      <div className="hidden lg:flex items-center min-w-[180px] z-20">
        <AnimatePresence mode="wait">
          {!isScrolled ? (
            /* Unscrolled Left: Compact H.E.R.E Pill */
            <motion.div
              key="compact-here"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center bg-white/95 backdrop-blur-md border border-gray-200/90 text-black rounded-full h-10 px-5 shadow-sm hover:shadow-md transition-all duration-300 gap-3 whitespace-nowrap cursor-pointer"
            >
              <span className="text-[13px] font-heading font-bold tracking-[0.25em] text-black">H.E.R.E</span>
              <span className="text-[10px] font-heading font-medium tracking-widest text-[#E05A00] uppercase italic relative top-[0.5px]">FOR YOU</span>
            </motion.div>
          ) : (
            /* Scrolled Left: Quantum Institute Logo */
            <motion.div
              key="scrolled-logo"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src="/Logo/q%20logo.png" 
                  alt="Quantum Institute Logo" 
                  className="h-10 sm:h-11 md:h-11 w-auto object-contain" 
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CENTER SECTION: Unscrolled Logo (centered) vs Scrolled Expanded Pillars (centered) */}
      <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-20">
        <AnimatePresence mode="wait">
          {!isScrolled ? (
            /* Unscrolled Center: Large Quantum Institute Logo */
            <motion.div
              key="unscrolled-logo"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="translate-y-3"
            >
              <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src="/Logo/q%20logo.png" 
                  alt="Quantum Institute Logo" 
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                  style={{ filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" }}
                />
              </Link>
            </motion.div>
          ) : (
            /* Scrolled Center: Expanded H.E.R.E. FOR YOU Pillars */
            <motion.div
              key="expanded-pillars"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 whitespace-nowrap"
            >
              <nav className="flex items-center gap-3.5 text-[12px] font-heading tracking-wider text-gray-700">
                <Link href="/healing" className="hover:text-black transition-colors">
                  <span className="text-black font-bold">H</span>ealing
                </Link>
                <span className="text-gray-400 font-light text-[10px]">•</span>
                <a href="#" className="hover:text-black transition-colors">
                  <span className="text-black font-bold">E</span>ducation
                </a>
                <span className="text-gray-400 font-light text-[10px]">•</span>
                <a href="#" className="hover:text-black transition-colors">
                  <span className="text-black font-bold">R</span>esearch
                </a>
                <span className="text-gray-400 font-light text-[10px]">•</span>
                <a href="#" className="hover:text-black transition-colors">
                  <span className="text-black font-bold">E</span>xploration
                </a>
              </nav>
              <div className="flex items-center gap-2 pl-3 border-l border-gray-300/80">
                <span className="text-[10px] font-heading font-medium tracking-widest text-[#E05A00] uppercase italic">FOR YOU</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE CENTER LOGO (for small screens when navbar is unscrolled) */}
      <div className="lg:hidden flex items-center z-10">
        <Link href="/" className="flex items-center">
          <img 
            src="/Logo/q%20logo.png" 
            alt="Quantum Institute Logo" 
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-9' : 'h-12'}`} 
          />
        </Link>
      </div>

      {/* RIGHT: Dynamic Call to Action Button (Dot vs Expanded Pill) */}
      <div className="hidden lg:flex items-center z-10">
        <div 
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="flex items-center justify-center cursor-pointer p-1"
        >
          <motion.button
            onClick={() => router.push('/signup')}
            initial={false}
            animate={{
              width: isCollapsedDot ? 40 : 136,
              backgroundColor: isCollapsedDot ? "#ffffff" : "#000000",
              color: isCollapsedDot ? "#000000" : "#ffffff",
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="h-10 rounded-full border border-gray-200 shadow-md hover:shadow-lg flex items-center justify-center overflow-hidden whitespace-nowrap cursor-pointer relative"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isCollapsedDot ? (
                <motion.span
                  key="dot-view"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="w-3.5 h-3.5 rounded-full bg-black block"
                />
              ) : (
                <motion.span
                  key="text-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="text-[13px] font-heading font-semibold tracking-tight block text-center px-4"
                >
                  Join waitlist
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
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
                <p className="text-[10px] text-gray-500 font-heading tracking-[0.2em] uppercase font-bold mb-1">H.E.R.E Pillars</p>
                <Link href="/healing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-light hover:text-[#E05A00] transition-colors">Healing</Link>
                <a href="#" className="text-xl font-heading font-light hover:text-[#E05A00] transition-colors">Education</a>
                <a href="#" className="text-xl font-heading font-light hover:text-[#E05A00] transition-colors">Research</a>
                <a href="#" className="text-xl font-heading font-light hover:text-[#E05A00] transition-colors">Exploration</a>
             </div>
             
             <div className="mt-4 flex flex-col">
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); router.push('/signup'); }}
                  className="w-full bg-[#E05A00] text-white font-heading font-bold tracking-widest uppercase text-sm py-4 rounded-full hover:bg-[#ff6600] transition-colors shadow-lg shadow-[#E05A00]/20"
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
