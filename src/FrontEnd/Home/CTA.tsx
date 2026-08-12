"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#fdfcfb] py-6 lg:py-16 flex flex-col items-center justify-center font-sans z-20 overflow-hidden border-t border-black/5">

      <div className="w-full max-w-[1500px] px-4 md:px-12 lg:px-20 mx-auto relative z-10">
        
        {/* Light Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center bg-white border border-black/5 p-6 md:p-16 rounded-[1.5rem] md:rounded-3xl shadow-md md:shadow-xl relative overflow-hidden">
          
          {/* Subtle inner card glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent pointer-events-none" />

          {/* Left: Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col items-start relative z-10"
          >
            <h4 className="text-[#E05A00] text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-5 flex items-center gap-2 md:gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-[#E05A00]"></span>
              JOIN THE FUTURE
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-light tracking-tight text-black leading-[1.1] drop-shadow-sm">
              Be part of something <br />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black/50">limitless.</span>
            </h2>
          </motion.div>

          {/* Middle: Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 relative z-10"
          >
            <p className="text-black/60 text-[11px] sm:text-sm md:text-base leading-relaxed max-w-sm">
              Whether you're a learner, researcher, healer, or dreamer—there's a place for you in the <strong className="text-black font-medium">Quantum movement</strong>.
            </p>
          </motion.div>

          {/* Right: Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 flex md:justify-end relative z-10"
          >
            <button className="group relative flex items-center justify-center gap-2 md:gap-3 bg-[#E05A00] hover:bg-[#C04800] text-white px-6 py-3.5 md:px-8 md:py-5 rounded-full text-[9px] md:text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 shadow-md md:shadow-lg cursor-pointer whitespace-nowrap">
              <span>JOIN OUR COMMUNITY</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
