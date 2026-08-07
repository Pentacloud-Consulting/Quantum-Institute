"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#fdfcfb] py-12 md:py-16 flex flex-col items-center justify-center font-sans z-20 overflow-hidden border-t border-black/5">

      <div className="w-full max-w-[1500px] px-6 md:px-12 lg:px-20 mx-auto relative z-10">
        
        {/* Dark Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center bg-[#0a0a0a] border border-[#1a1a1a] p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle inner card glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

          {/* Left: Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col items-start relative z-10"
          >
            <h4 className="text-[#d15000] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#d15000]"></span>
              JOIN THE FUTURE
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-light tracking-tight text-white leading-[1.1] drop-shadow-lg">
              Be part of something <br />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">limitless.</span>
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
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
              Whether you're a learner, researcher, healer, or dreamer—there's a place for you in the <strong className="text-white font-medium">Quantum movement</strong>.
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
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes innerShimmer {
                0% { transform: translateX(-150%) skewX(-20deg); }
                100% { transform: translateX(200%) skewX(-20deg); }
              }
              .group:hover .hover-shimmer-effect {
                animation: innerShimmer 1.5s infinite;
              }
            `}} />

            <div className="relative group cursor-pointer">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d15000] via-[#ff7b00] to-[#d15000] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
              
              <button className="relative flex items-center justify-center gap-3 bg-[#0a0a0a] text-white px-8 py-5 rounded-full text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase border border-white/10 hover:border-[#d15000]/50 transition-all duration-300 shadow-xl whitespace-nowrap overflow-hidden">
                
                {/* Flashy Inner Shimmer Loop */}
                <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-[150%] -skew-x-12 hover-shimmer-effect pointer-events-none" />

                <span className="relative z-10">JOIN OUR COMMUNITY</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#d15000] group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
