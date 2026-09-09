"use client";

import React from 'react';
import { motion } from 'framer-motion';

const VennAnimation = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-8 perspective-[1200px]">
      
      {/* Text Labels pointing towards the core */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
        <span className="text-[#ea580c] font-heading font-bold tracking-widest text-xs md:text-sm bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">EDUCATION</span>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#ea580c] to-transparent mt-2 opacity-60"></div>
      </div>

      <div className="absolute bottom-12 left-4 md:left-8 flex flex-col items-center z-30">
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-t from-[#ea580c] to-transparent mb-2 opacity-60"></div>
        <span className="text-[#ea580c] font-heading font-bold tracking-widest text-xs md:text-sm bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">HEALING</span>
      </div>

      <div className="absolute bottom-12 right-4 md:right-8 flex flex-col items-center z-30">
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-t from-[#ea580c] to-transparent mb-2 opacity-60"></div>
        <span className="text-[#ea580c] font-heading font-bold tracking-widest text-xs md:text-sm bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">RESEARCH</span>
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
          
          <span className="relative text-white font-heading font-bold tracking-widest text-[9px] md:text-xs z-20 drop-shadow-md">EXPLORATION</span>
        </div>
      </div>
    </div>
  );
};

const ArchSketchAnimation = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#e0f2fe] to-[#ffedd5] rounded-3xl shadow-lg border border-orange-200 p-4 md:p-12">
      <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">
        
        <defs>
          <linearGradient id="sunRayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>

          <pattern id="desertTriangles" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon points="10,10 15,18 5,18" fill="#fef3c7" opacity="0.7" />
            <polygon points="30,25 33,30 27,30" fill="#fde68a" opacity="0.6" />
          </pattern>
          
          <pattern id="desertTrianglesTop" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="skewX(-45)">
            <polygon points="20,10 25,18 15,18" fill="#fffbeb" opacity="0.8" />
            <polygon points="40,30 43,35 37,35" fill="#fef3c7" opacity="0.6" />
          </pattern>
        </defs>

        {/* Background Subtle Guides */}
        <line x1="520" y1="30" x2="520" y2="480" stroke="#fdba74" strokeWidth="1" strokeDasharray="10,10" opacity="0.5" />
        <line x1="50" y1="260" x2="950" y2="260" stroke="#fdba74" strokeWidth="1" strokeDasharray="10,10" opacity="0.5" />

        {/* Sun Path Arc */}
        <path d="M 280 180 A 300 300 0 0 1 760 180" fill="transparent" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.8" />

        {/* 3D Base Platform */}
        <g className="base-model">
          {/* Base Right Side */}
          <path d="M 950 380 L 990 340 L 990 380 L 950 420 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="1" strokeLinejoin="round" />
          {/* Base Front */}
          <path d="M 50 380 L 420 380 L 500 450 L 580 380 L 950 380 L 950 420 L 580 420 L 500 490 L 420 420 L 50 420 Z" fill="#fdba74" stroke="#c2410c" strokeWidth="1" strokeLinejoin="round" />
          {/* Base Top (Ground Plane) Left */}
          <path d="M 50 380 L 90 340 L 460 340 L 420 380 Z" fill="#fed7aa" stroke="#f97316" strokeWidth="1" strokeLinejoin="round" />
          {/* Base Top (Ground Plane) Right */}
          <path d="M 580 380 L 620 340 L 990 340 L 950 380 Z" fill="#fed7aa" stroke="#f97316" strokeWidth="1" strokeLinejoin="round" />
          
          {/* Pit Left Trough */}
          <path d="M 420 380 L 500 450 L 540 410 L 460 340 Z" fill="#fdba74" stroke="#ea580c" strokeWidth="1" strokeLinejoin="round" />
          {/* Pit Right Trough */}
          <path d="M 500 450 L 580 380 L 620 340 L 540 410 Z" fill="#fb923c" stroke="#ea580c" strokeWidth="1" strokeLinejoin="round" />
          
          {/* Water Top */}
          <path d="M 465 419 L 505 379 L 575 379 L 535 419 Z" fill="#38bdf8" opacity="0.9" />
          {/* Water Front */}
          <path d="M 465 419 L 500 450 L 535 419 Z" fill="#0284c7" opacity="0.9" />
        </g>

        {/* Left Outer Building */}
        <motion.g 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <path d="M 270 285 L 300 380 L 340 340 L 310 245 Z" fill="#b45309" stroke="#92400e" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 130 320 L 170 280 L 310 245 L 270 285 Z" fill="#fcd34d" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 130 320 L 170 280 L 310 245 L 270 285 Z" fill="url(#desertTrianglesTop)" />
          <path d="M 120 380 L 130 320 L 270 285 L 300 380 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 120 380 L 130 320 L 270 285 L 300 380 Z" fill="url(#desertTriangles)" />
        </motion.g>

        {/* Left Inner Building */}
        <motion.g 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <path d="M 450 240 L 420 380 L 460 340 L 490 200 Z" fill="#b45309" stroke="#92400e" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 300 278 L 450 240 L 490 200 L 340 238 Z" fill="#fcd34d" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 300 278 L 450 240 L 490 200 L 340 238 Z" fill="url(#desertTrianglesTop)" />
          <path d="M 330 380 L 300 278 L 450 240 L 420 380 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 330 380 L 300 278 L 450 240 L 420 380 Z" fill="url(#desertTriangles)" />
        </motion.g>

        {/* Right Inner Building */}
        <motion.g 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <path d="M 700 278 L 670 380 L 710 340 L 740 238 Z" fill="#b45309" stroke="#92400e" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 550 240 L 700 278 L 740 238 L 590 200 Z" fill="#fcd34d" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 550 240 L 700 278 L 740 238 L 590 200 Z" fill="url(#desertTrianglesTop)" />
          <path d="M 580 380 L 550 240 L 700 278 L 670 380 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 580 380 L 550 240 L 700 278 L 670 380 Z" fill="url(#desertTriangles)" />
        </motion.g>

        {/* Right Outer Building */}
        <motion.g 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          <path d="M 870 320 L 880 380 L 920 340 L 910 280 Z" fill="#b45309" stroke="#92400e" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 730 285 L 870 320 L 910 280 L 770 245 Z" fill="#fcd34d" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 730 285 L 870 320 L 910 280 L 770 245 Z" fill="url(#desertTrianglesTop)" />
          <path d="M 700 380 L 730 285 L 870 320 L 880 380 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          <path d="M 700 380 L 730 285 L 870 320 L 880 380 Z" fill="url(#desertTriangles)" />
        </motion.g>

        {/* Left Gap Arrow */}
        <motion.g 
          stroke="#ea580c" fill="none" opacity="0.8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <line x1="280" y1="180" x2="330" y2="340" strokeWidth="2" strokeDasharray="6,6" />
          <path d="M 315 330 L 330 340 L 335 325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* Right Gap Arrow */}
        <motion.g 
          stroke="#ea580c" fill="none" opacity="0.8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <line x1="760" y1="180" x2="710" y2="340" strokeWidth="2" strokeDasharray="6,6" />
          <path d="M 725 330 L 710 340 L 705 325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* Thick Dotted Airflow Line across mid-depth Ground */}
        <line x1="80" y1="360" x2="960" y2="360" stroke="#ea580c" strokeWidth="4" strokeDasharray="1,14" strokeLinecap="round" />
        
        {/* Far Left Inward Arrow */}
        <motion.path 
          d="M 60 350 L 80 360 L 60 370" 
          fill="none" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        
        {/* Far Right Inward Arrow */}
        <motion.path 
          d="M 980 350 L 960 360 L 980 370" 
          fill="none" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Central Dashed Circle */}
        <motion.circle 
          cx="520" cy="360" r="75" 
          fill="transparent" stroke="#ea580c" strokeWidth="2.5" strokeDasharray="10,8" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          style={{ transformOrigin: "520px 360px" }}
        />

        {/* Sun Animation along Arc */}
        <g>
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="36.87 520 360" 
            to="143.13 520 360" 
            dur="10s" 
            repeatCount="indefinite" 
          />
          {/* Sun Body */}
          <circle cx="220" cy="360" r="14" fill="#f97316" />
          {/* Sun Halo */}
          <circle cx="220" cy="360" r="22" fill="transparent" stroke="#f97316" strokeWidth="2" strokeDasharray="4,4" />
          
          {/* Animated Flowing Light Ray */}
          <line x1="245" y1="360" x2="500" y2="360" stroke="url(#sunRayGrad)" strokeWidth="3" strokeDasharray="12,12">
            <animate attributeName="stroke-dashoffset" from="24" to="0" dur="0.8s" repeatCount="indefinite" />
          </line>

          {/* Small directional arrow at the tip of the light ray */}
          <path d="M 490 355 L 500 360 L 490 365" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  );
};

const TheMission = () => {
  return (
    <section className="w-full bg-slate-50 text-[#1e293b] pt-12 pb-24 md:pt-12 md:pb-24 px-6 md:px-12 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Intro */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-[#ea580c] font-display font-normal tracking-[0.12em] uppercase"
          >
            The Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-[#334155] leading-relaxed font-display italic tracking-wide"
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
              className="text-base md:text-lg text-[#475569] leading-loose font-body text-justify"
            >
              The Quantum Institute is a timeless space where ancient wisdom meets modern research to reshape the human experience. This is a bold and imaginative approach to architecture and spatial design. It is an avant-garde re-imagining of what a sanctuary for elevating body, mind and spirit can be, while continuing to foster the dynamic exchange of knowledge and wisdom.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-base md:text-lg text-[#475569] leading-loose font-body text-justify"
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-200"
            >
              <p className="text-base md:text-lg text-[#475569] leading-loose text-justify font-body">
                It is a rare architectural challenge: to conceive a place that not only responds to climate, culture, and context, but also aspires to stir the human soul. The Quantum Institute is conceived not as an inert structure, but as a living environment; one that adapts, breathes, and resonates with the rhythms of nature and the pursuits of thought.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-200"
            >
              <p className="text-base md:text-lg text-[#475569] leading-loose text-justify font-body">
                It draws equally from the silent intelligence of vernacular forms and the precision of scientific insight, bridging the past and future in a language of materials, light, and space. Here, learning is not limited to classrooms, but embedded in the architecture itself. Paths of movement, transitions between climate zones, and encounters with elemental phenomena - cool breezes, dappled light, the scent of local vegetation - become opportunities for reflection and growth. The built form does not instruct, but inspires.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TheMission;
