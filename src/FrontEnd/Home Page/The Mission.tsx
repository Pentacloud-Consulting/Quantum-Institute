"use client";

import React from 'react';
import { motion } from 'framer-motion';

const VennAnimation = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-8 perspective-[1200px]">
      
      {/* Text Labels pointing towards the core */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
        <span className="text-[#ea580c] font-bold tracking-widest text-xs md:text-sm font-serif bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">EDUCATION</span>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#ea580c] to-transparent mt-2 opacity-60"></div>
      </div>

      <div className="absolute bottom-12 left-4 md:left-8 flex flex-col items-center z-30">
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-t from-[#ea580c] to-transparent mb-2 opacity-60"></div>
        <span className="text-[#ea580c] font-bold tracking-widest text-xs md:text-sm font-serif bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">HEALING</span>
      </div>

      <div className="absolute bottom-12 right-4 md:right-8 flex flex-col items-center z-30">
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-t from-[#ea580c] to-transparent mb-2 opacity-60"></div>
        <span className="text-[#ea580c] font-bold tracking-widest text-xs md:text-sm font-serif bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">RESEARCH</span>
      </div>

      {/* 3D Gyroscope / Astrolabe */}
      <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Outer Ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border-[3px] border-[#ea580c]/80 shadow-[0_0_20px_rgba(234,88,12,0.4),inset_0_0_20px_rgba(234,88,12,0.4)]"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle Ring */}
        <motion.div 
          className="absolute inset-6 rounded-full border-[2px] border-[#ea580c]/60 shadow-[0_0_15px_rgba(234,88,12,0.3),inset_0_0_15px_rgba(234,88,12,0.3)]"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: [0, -360], rotateZ: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Ring */}
        <motion.div 
          className="absolute inset-12 rounded-full border border-[#ea580c]/40 shadow-[0_0_10px_rgba(234,88,12,0.2),inset_0_0_10px_rgba(234,88,12,0.2)]"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: [0, -360], rotateZ: [0, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Center Quantum Core */}
        <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center z-10">
          {/* Core Glow */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fdbA74,#ea580c)] blur-md opacity-90"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Core Physical Orb */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#ea580c] to-white shadow-[inset_-5px_-5px_15px_rgba(154,52,18,0.8)] opacity-90" />
          
          <span className="relative text-white font-bold tracking-widest text-[9px] md:text-xs z-20 drop-shadow-md">EXPLORATION</span>
        </div>
      </div>
    </div>
  );
};

const ArchSketchAnimation = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#fafaf9] rounded-3xl shadow-lg border border-slate-200 p-4 md:p-12">
      <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">
        
        <defs>
          {/* Diagonal Hatch Pattern for Buildings to match sketch */}
          <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#ea580c" strokeWidth="1.5" opacity="0.6" />
          </pattern>
          
          {/* Flowing Light Ray Gradient */}
          <linearGradient id="sunRayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background Subtle Guides */}
        <line x1="500" y1="50" x2="500" y2="480" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="10,10" />
        <line x1="50" y1="280" x2="950" y2="280" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="10,10" />

        {/* Sun Path Arc */}
        <path d="M 260 200 A 300 300 0 0 1 740 200" fill="transparent" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.8" />

        {/* Ground Hatchings (Vertical ticks below ground) */}
        {Array.from({length: 50}).map((_, i) => (
          <line key={i} x1={50 + i*18.3} y1="380" x2={50 + i*18.3} y2="400" stroke="#ea580c" strokeWidth="1.5" opacity="0.5" />
        ))}

        {/* Ground Line & V-Pit */}
        <path d="M 50 380 L 420 380 L 500 450 L 580 380 L 950 380" fill="transparent" stroke="#ea580c" strokeWidth="3" />
        
        {/* V-Pit Solid Tip (Water) */}
        <path d="M 465 419 L 500 450 L 535 419 Z" fill="#3b82f6" opacity="0.85" />

        {/* Left Outer Building */}
        <motion.path 
          d="M 120 380 L 130 320 L 270 285 L 300 380 Z" 
          fill="url(#hatch)" stroke="#ea580c" strokeWidth="3" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }} 
          whileInView={{ pathLength: 1, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Left Inner Building */}
        <motion.path 
          d="M 330 380 L 300 278 L 450 240 L 420 380 Z" 
          fill="url(#hatch)" stroke="#ea580c" strokeWidth="3" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }} 
          whileInView={{ pathLength: 1, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        />

        {/* Right Inner Building */}
        <motion.path 
          d="M 580 380 L 550 240 L 700 278 L 670 380 Z" 
          fill="url(#hatch)" stroke="#ea580c" strokeWidth="3" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }} 
          whileInView={{ pathLength: 1, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        />

        {/* Right Outer Building */}
        <motion.path 
          d="M 700 380 L 730 285 L 870 320 L 880 380 Z" 
          fill="url(#hatch)" stroke="#ea580c" strokeWidth="3" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }} 
          whileInView={{ pathLength: 1, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
        />

        {/* Left Gap Arrow */}
        <motion.g 
          stroke="#ea580c" fill="none" opacity="0.8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <line x1="260" y1="200" x2="310" y2="360" strokeWidth="2" strokeDasharray="6,6" />
          <path d="M 295 350 L 310 360 L 315 345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* Right Gap Arrow */}
        <motion.g 
          stroke="#ea580c" fill="none" opacity="0.8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <line x1="740" y1="200" x2="690" y2="360" strokeWidth="2" strokeDasharray="6,6" />
          <path d="M 705 350 L 690 360 L 685 345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* Thick Dotted Airflow Line across Ground */}
        <line x1="80" y1="375" x2="920" y2="375" stroke="#ea580c" strokeWidth="5" strokeDasharray="1,14" strokeLinecap="round" />
        
        {/* Far Left Inward Arrow */}
        <motion.path 
          d="M 60 365 L 80 375 L 60 385" 
          fill="none" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        
        {/* Far Right Inward Arrow */}
        <motion.path 
          d="M 940 365 L 920 375 L 940 385" 
          fill="none" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Central Dashed Circle */}
        <motion.circle 
          cx="500" cy="360" r="75" 
          fill="transparent" stroke="#ea580c" strokeWidth="2.5" strokeDasharray="10,8" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          style={{ transformOrigin: "500px 360px" }}
        />

        {/* Sun Animation along Arc */}
        <g>
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="36.87 500 380" 
            to="143.13 500 380" 
            dur="10s" 
            repeatCount="indefinite" 
          />
          {/* Sun Body */}
          <circle cx="200" cy="380" r="14" fill="#f59e0b" />
          {/* Sun Halo */}
          <circle cx="200" cy="380" r="22" fill="transparent" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
          
          {/* Animated Flowing Light Ray */}
          <line x1="225" y1="380" x2="480" y2="380" stroke="url(#sunRayGrad)" strokeWidth="3" strokeDasharray="12,12">
            <animate attributeName="stroke-dashoffset" from="24" to="0" dur="0.8s" repeatCount="indefinite" />
          </line>

          {/* Small directional arrow at the tip of the light ray */}
          <path d="M 470 375 L 480 380 L 470 385" fill="none" stroke="#fdbA74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  );
};

const TheMission = () => {
  return (
    <section className="w-full bg-slate-50 text-[#1e293b] py-24 px-6 md:px-12 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Intro */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-[#ea580c] font-normal tracking-widest uppercase"
          >
            The Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-[#334155] leading-relaxed italic"
          >
            The Quantum Institute’s mission is to: Empower minds through exploration, fostering a global ecosystem for learning, scientific discovery, and healing.
          </motion.p>
        </div>

        {/* Section 1 with Venn */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <motion.p 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              className="text-base md:text-lg text-[#475569] leading-loose"
            >
              The Quantum Institute is a timeless space where ancient wisdom meets modern research to reshape the human experience. This is a bold and imaginative approach to architecture and spatial design. It is an avant-garde re-imagining of what a sanctuary for elevating body, mind and spirit can be, while continuing to foster the dynamic exchange of knowledge and wisdom.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-base md:text-lg text-[#475569] leading-loose"
            >
              In an age of urgency - ecological, intellectual, and spiritual - the Quantum Institute stands as an icon of hope and possibility. It is an invitation to imagine a future where architecture is not just sustainable, but soulful; not just efficient, but elevating. Where buildings do not merely shelter, but awaken.
            </motion.p>
          </div>
          <div className="order-1 lg:order-2">
            <VennAnimation />
          </div>
        </div>

        {/* Section 2 with Arch Sketch */}
        <div className="flex flex-col items-center gap-16">
          <div className="w-full">
            <ArchSketchAnimation />
          </div>
          <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="text-base md:text-lg text-[#475569] leading-loose"
            >
              It is a rare architectural challenge: to conceive a place that not only responds to climate, culture, and context, but also aspires to stir the human soul. The Quantum Institute is conceived not as an inert structure, but as a living environment; one that adapts, breathes, and resonates with the rhythms of nature and the pursuits of thought.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-base md:text-lg text-[#475569] leading-loose"
            >
              It draws equally from the silent intelligence of vernacular forms and the precision of scientific insight, bridging the past and future in a language of materials, light, and space. Here, learning is not limited to classrooms, but embedded in the architecture itself. Paths of movement, transitions between climate zones, and encounters with elemental phenomena - cool breezes, dappled light, the scent of local vegetation - become opportunities for reflection and growth. The built form does not instruct, but inspires.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TheMission;
