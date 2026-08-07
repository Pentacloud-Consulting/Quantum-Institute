"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BrandIdentity = () => {
  return (
    <section className="relative w-screen h-screen shrink-0 overflow-hidden bg-black z-30 flex flex-col lg:flex-row font-sans shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Left Column - Text Content */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-[#0a0a0a] flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 z-10 overflow-hidden">
        
        {/* Subtle geometric wireframe background (matching design) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[0.2]">
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
            <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
            <line x1="5" y1="25" x2="50" y2="50" />
            <line x1="95" y1="25" x2="50" y2="50" />
            <line x1="50" y1="95" x2="50" y2="50" />
            <line x1="15" y1="35" x2="50" y2="50" />
            <line x1="85" y1="35" x2="50" y2="50" />
            <line x1="50" y1="85" x2="50" y2="50" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-start"
        >
          {/* Label */}
          <h4 className="text-[#d15000] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            BRAND &amp; IDENTITY
          </h4>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] mb-8">
            Rooted in purpose. <br />
            Designed for <br />
            impact.
          </h2>

          {/* Body Text */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm mb-12">
            Quantum Institute is more than a space—<br className="hidden md:block" />
            it's a movement. Our identity reflects<br className="hidden md:block" />
            clarity, innovation, and the timeless pursuit<br className="hidden md:block" />
            of truth.
          </p>

          {/* CTA Link */}
          <button className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-[#d15000] transition-colors duration-300">
            OUR STORY
            <ArrowRight className="w-4 h-4 text-[#d15000] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Right Column - Video */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-black">
        <video 
          src="/Home/BRAND & IDENTITY.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle inner shadow/gradient for blending the edge */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0a0a0a] to-transparent w-16 opacity-80" />
      </div>

    </section>
  );
};

export default BrandIdentity;
