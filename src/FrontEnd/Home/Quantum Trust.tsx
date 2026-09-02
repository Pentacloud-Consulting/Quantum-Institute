"use client";

import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

const services = [
  { id: '01', title1: 'Quantum', title2: 'Healing', subtitle: 'Advanced therapeutic programs integrating bio-frequency and holistic practices for complete restoration.', img: '/OG IMAGES/q1.png' },
  { id: '02', title1: 'Conscious', title2: 'Evolution', subtitle: 'Transformational retreats and workshops designed to elevate your awareness and spiritual growth.', img: '/OG IMAGES/q2.png' },
  { id: '03', title1: 'Inner', title2: 'Stillness', subtitle: 'Immersive meditation experiences focused on silencing the mind and finding profound inner peace.', img: '/OG IMAGES/q3.png' },
  { id: '04', title1: 'Soul', title2: 'Resonance', subtitle: 'Community-driven initiatives harmonizing spiritual connections and unified field practices.', img: '/OG IMAGES/q4.png' },
];
const smoothTransition: any = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

const QuantumTrust = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#050505] h-auto lg:h-[100dvh] pt-24 pb-12 lg:pt-28 flex flex-col text-white font-sans relative overflow-hidden">
      
      {/* Header section */}
      <div className="flex justify-between items-center px-4 md:px-12 pb-8 border-b border-white/20">
        <span className="text-xs md:text-sm tracking-widest text-white/70">/Soul Peace</span>
        <span className="text-xs md:text-sm tracking-widest text-white/70">What we do (and do really well)</span>
      </div>

      {/* Accordion List */}
      <LayoutGroup>
        <div className="flex flex-col w-full flex-1">
          {services.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div 
                key={item.id}
                layout
                transition={smoothTransition}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative w-full border-b border-white/20 group cursor-pointer flex flex-col justify-center"
                animate={{ flexGrow: isHovered ? 1.5 : 1 }}
              >
                
                {/* Background giant faded number */}
                <div className="absolute left-[4%] top-1/2 -translate-y-1/2 text-[15vh] md:text-[20vh] font-bold text-white/[0.02] pointer-events-none select-none z-0 leading-none">
                  {parseInt(item.id)}
                </div>
                <div className="absolute right-[4%] top-1/2 -translate-y-1/2 text-[15vh] md:text-[20vh] font-bold text-white/[0.02] pointer-events-none select-none z-0 leading-none">
                  {parseInt(item.id)}
                </div>

                {/* Top corner labels */}
                <div className="absolute left-4 md:left-8 top-4 md:top-4 text-xs tracking-widest text-white/50 z-10 transition-colors group-hover:text-white">
                  /{item.id}
                </div>
                <div className="absolute right-4 md:right-8 top-4 md:top-4 text-xs tracking-widest text-white/50 z-10 transition-colors group-hover:text-white">
                  /See more
                </div>

                <motion.div 
                  layout 
                  transition={smoothTransition}
                  className="relative z-10 flex flex-col items-center justify-center w-full py-6 md:py-8 lg:py-0"
                >
                  
                  {/* Title and splitting logic */}
                  <motion.div layout transition={smoothTransition} className="flex items-center justify-center w-full max-w-[95vw] md:max-w-[90vw] mx-auto">
                    <motion.span 
                      layout 
                      transition={smoothTransition}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight whitespace-nowrap"
                    >
                      {item.title1}
                    </motion.span>
                    
                    <motion.div
                      layout
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ 
                        width: isHovered ? 'auto' : 0, 
                        opacity: isHovered ? 1 : 0 
                      }}
                      transition={smoothTransition}
                      className="flex justify-center overflow-hidden shrink-0"
                    >
                      <div className="px-2 sm:px-4 md:px-6">
                        <img 
                          src={item.img} 
                          alt={item.title1} 
                          className="h-8 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-12 sm:w-16 md:w-20 lg:w-28 xl:w-32 object-cover rounded-xl shadow-2xl" 
                        />
                      </div>
                    </motion.div>

                    <motion.span 
                      layout 
                      transition={smoothTransition}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight whitespace-nowrap"
                    >
                      {item.title2}
                    </motion.span>
                  </motion.div>

                  {/* Subtitle and Action Button (Revealed on hover) */}
                  <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isHovered ? 'auto' : 0, 
                      opacity: isHovered ? 1 : 0 
                    }}
                    transition={smoothTransition}
                    className="flex flex-col items-center justify-center overflow-hidden w-full"
                  >
                    <motion.p layout transition={smoothTransition} className="pt-4 md:pt-6 pb-2 text-white/60 text-[10px] sm:text-[11px] md:text-xs tracking-wide text-center max-w-sm md:max-w-xl uppercase px-4">
                      {item.subtitle}
                    </motion.p>
                  </motion.div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
};

export default QuantumTrust;
