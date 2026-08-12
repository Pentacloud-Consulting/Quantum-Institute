"use client";

import React, { useState } from 'react';
import { Hexagon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
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
        isScrolled ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" : "pt-8 pb-6 bg-transparent"
      }`}
    >
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
                <a href="#" className="text-black hover:text-[#E05A00] font-semibold transition-colors">Healing</a>
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
      <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img 
          src="/Logo/Quantum%20Institute%20Logo.png" 
          alt="Quantum Institute Logo" 
          className="h-8 md:h-10 w-auto object-contain scale-150" 
          style={{ filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.6)) drop-shadow(0px 2px 4px rgba(0,0,0,0.6))" }}
        />
      </Link>
      
      {/* RIGHT: Dynamic Scroll Pill */}
      <div className="hidden lg:flex items-center">
        <motion.div 
          layout
          className="flex items-center bg-white/95 backdrop-blur-md border border-gray-200 text-black rounded-full p-1.5 shadow-md h-10"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <AnimatePresence mode="popLayout">
            {isScrolled && (
              <motion.div
                layout
                initial={{ opacity: 0, width: 0, scale: 0 }}
                animate={{ opacity: 1, width: 'auto', scale: 1 }}
                exit={{ opacity: 0, width: 0, scale: 0 }}
                className="flex items-center pl-1 pr-3 overflow-hidden origin-left"
              >
                <div className="bg-[#E05A00] p-1 rounded flex items-center justify-center">
                  <Hexagon className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-5 px-3 text-[13px] font-semibold whitespace-nowrap">
             <a href="#" className="text-black hover:text-[#E05A00] transition-colors">Pricing</a>
             <a href="#" className="text-black hover:text-[#E05A00] transition-colors">Road Map</a>
             <a href="#" className="text-black hover:text-[#E05A00] transition-colors">Blog</a>
          </div>

          <AnimatePresence mode="popLayout">
            {isScrolled && (
              <motion.button
                layout
                onClick={() => router.push('/signup')}
                initial={{ opacity: 0, scale: 0, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                exit={{ opacity: 0, scale: 0, width: 0 }}
                className="bg-black text-white text-[13px] font-semibold px-4 py-1 rounded-full whitespace-nowrap ml-2 hover:bg-gray-800 transition-colors origin-right cursor-pointer"
              >
                Join waitlist
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>


    </motion.header>
  );
};

export default Navbar;
