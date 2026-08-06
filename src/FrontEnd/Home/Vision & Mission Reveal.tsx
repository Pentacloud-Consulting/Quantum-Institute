"use client";

import React, { useRef } from 'react';
import { Globe, ArrowRight, Atom, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const VisionMissionReveal = () => {
  const row2Ref = useRef<HTMLDivElement>(null);
  
  // Triggers when at least 40% of Row 2 is in the viewport
  const isRow2InView = useInView(row2Ref, { amount: 0.4 });

  return (
    <section className="relative w-full min-h-screen bg-white text-black flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden gap-24 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[#d15000] opacity-5 rounded-full blur-[120px]" />
      </div>

      {/* --- ROW 1: Heading (Left), Image (Center), Text/CTA (Right) --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start space-y-8"
        >
          <div className="flex flex-col items-start">
            <h4 className="text-[#d15000] text-xs font-bold tracking-[0.3em] uppercase mb-3">Vision</h4>
            <div className="w-8 h-[2px] bg-[#d15000]"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-black">
            Where minds <br/>
            collect & <br/>
            possibilities <br/>
            connect.
          </h2>
        </motion.div>

        {/* Center Column: Floating Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center py-10 lg:py-20 w-full"
        >
          {/* Center Container for Image and Border */}
          <div className="relative w-[70%] lg:w-[60%] aspect-[2/3] flex items-center justify-center">
            {/* Thin orange border frame (Portrait Box) */}
            <div className="absolute inset-0 border border-[#d15000] opacity-40 z-0"></div>
            
            {/* The Animated Image (Only renders here if Row 2 is NOT in view) */}
            {!isRow2InView && (
              <motion.img 
                layoutId="infinity-graphic"
                src="/Home/Vision & Mission Reveal.png"
                alt="Vision and Mission Reveal"
                className="absolute z-10 w-[180%] max-w-none object-contain pointer-events-none"
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </div>
        </motion.div>

        {/* Right Column: Italic Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-start space-y-8 lg:pl-8"
        >
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm font-serif italic">
            Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
          </p>
          
          <div className="flex flex-wrap items-center gap-8 mt-2">
            <button className="group flex items-center gap-4 px-8 py-4 border border-gray-300 rounded-full bg-transparent text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:border-[#d15000] hover:bg-[#d15000]/5 transition-colors duration-300">
              Explore Our Vision
              <ArrowRight className="w-4 h-4 text-[#d15000] group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex flex-col items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-black hover:text-[#d15000] transition-colors duration-300">
              <span>Learn More</span>
              <div className="w-full h-[1px] bg-gray-300 group-hover:bg-[#d15000] transition-colors relative">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-[#d15000]"></div>
              </div>
            </button>
          </div>
        </motion.div>

      </div>

      {/* --- ROW 2: Image (Left) & Features (Right) --- */}
      <div ref={row2Ref} className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center pt-10 border-t border-gray-100">
        
        {/* Left Column: Floating Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center py-10 lg:py-20 w-full"
        >
          {/* Center Container for Image and Border */}
          <div className="relative w-[70%] lg:w-[60%] aspect-[2/3] flex items-center justify-center">
            {/* Thin orange border frame (Portrait Box) */}
            <div className="absolute inset-0 border border-[#d15000] opacity-40 z-0"></div>
            
            {/* The Animated Image (Flies down here when Row 2 is in view) */}
            {isRow2InView && (
              <motion.img 
                layoutId="infinity-graphic"
                src="/Home/Vision & Mission Reveal.png"
                alt="Vision and Mission Reveal"
                className="absolute z-10 w-[180%] max-w-none object-contain pointer-events-none"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </div>
        </motion.div>

        {/* Right Column: Features */}
        <div className="flex flex-col items-start space-y-8 lg:pl-16 pt-12 lg:pt-0">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="group flex items-center gap-6 cursor-pointer w-full"
          >
            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#d15000] group-hover:bg-[#d15000]/5 transition-colors duration-300">
              <Globe className="w-6 h-6 text-black group-hover:text-[#d15000] transition-colors duration-300" />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-medium tracking-wide mb-1 text-black group-hover:text-[#d15000] transition-colors duration-300">Global Ecosystem</h3>
              <p className="text-gray-600 text-sm font-serif italic pr-8">Connecting learners, researchers and innovators worldwide.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#d15000] group-hover:translate-x-2 transition-transform duration-300" />
          </motion.div>

          <div className="w-full h-[1px] bg-gray-200"></div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="group flex items-center gap-6 cursor-pointer w-full"
          >
            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#d15000] group-hover:bg-[#d15000]/5 transition-colors duration-300">
              <Atom className="w-6 h-6 text-black group-hover:text-[#d15000] transition-colors duration-300" />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-medium tracking-wide mb-1 text-black group-hover:text-[#d15000] transition-colors duration-300">Expanded Learning</h3>
              <p className="text-gray-600 text-sm font-serif italic pr-8">Beyond boundaries. Beyond conventional thinking.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#d15000] group-hover:translate-x-2 transition-transform duration-300" />
          </motion.div>

          <div className="w-full h-[1px] bg-gray-200"></div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="group flex items-center gap-6 cursor-pointer w-full"
          >
            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#d15000] group-hover:bg-[#d15000]/5 transition-colors duration-300">
              <Sparkles className="w-6 h-6 text-black group-hover:text-[#d15000] transition-colors duration-300" />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-medium tracking-wide mb-1 text-black group-hover:text-[#d15000] transition-colors duration-300">Transformative Healing</h3>
              <p className="text-gray-600 text-sm font-serif italic pr-8">Science, consciousness and compassion working in harmony.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#d15000] group-hover:translate-x-2 transition-transform duration-300" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VisionMissionReveal;
