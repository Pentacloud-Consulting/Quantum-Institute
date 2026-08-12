"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Atom, Compass, Users } from 'lucide-react';

const pillars = [
  {
    title: "HEALING",
    icon: <Heart strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Integrating science and<br/>
        consciousness for<br/>
        <span className="font-medium text-black">holistic well-being.</span>
      </>
    )
  },
  {
    title: "EDUCATION",
    icon: <BookOpen strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Limitless learning<br/>
        experiences for every<br/>
        <span className="font-medium text-black">curious mind.</span>
      </>
    )
  },
  {
    title: "RESEARCH",
    icon: <Atom strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Pioneering discoveries<br/>
        that shape tomorrow's<br/>
        <span className="font-medium text-black">world.</span>
      </>
    )
  },
  {
    title: "EXPLORATION",
    icon: <Compass strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Pushing boundaries to<br/>
        explore the unknown<br/>
        <span className="font-medium text-black">with purpose.</span>
      </>
    )
  },
  {
    title: "COMMUNITY",
    icon: <Users strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Uniting global minds<br/>
        to create meaningful<br/>
        <span className="font-medium text-black">impact together.</span>
      </>
    )
  }
];

const PillarsQI = () => {
  return (
    <section className="relative w-full bg-[#faf9f8] pt-16 lg:pt-24 pb-12 lg:pb-16 flex flex-col items-center font-sans z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
      
      {/* Custom styles for SVG Path Drawing loops */}
      <style>{`
        .animate-draw-icon {
          stroke-dasharray: 120;
          animation: draw-loop 5s ease-in-out infinite;
        }
        @keyframes draw-loop {
          0% { stroke-dashoffset: 120; }
          30% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 120; }
        }
      `}</style>

      <div className="w-full max-w-[1600px] px-6 md:px-12 mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-10 lg:mb-24"
        >
          <h4 className="text-[#E05A00] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 lg:mb-4">
            PILLARS OF QUANTUM INSTITUTE
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-black">
            Building the future on five pillars.
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 w-full relative gap-y-10 lg:gap-y-0 gap-x-2 lg:gap-x-0">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col items-center text-center px-1 sm:px-4 ${
                index !== pillars.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
              } ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Hexagon Icon Container */}
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 lg:mb-8 group cursor-pointer">
                {/* SVG Hexagon Outline with Rotating Line */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full group-hover:fill-[#E05A00]/5 transition-colors duration-500">
                  {/* Faint static outline */}
                  <polygon 
                    points="50,5 95,25 95,75 50,95 5,75 5,25" 
                    className="stroke-[#E05A00]/10 fill-none stroke-[1.5]"
                  />
                  {/* Rotating highlighted line (traces the perimeter) */}
                  <motion.polygon 
                    points="50,5 95,25 95,75 50,95 5,75 5,25" 
                    className="stroke-[#E05A00] fill-none stroke-[2]"
                    strokeDasharray="40 260"
                    animate={{ strokeDashoffset: [300, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
                {/* Icon */}
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[10px] lg:text-sm font-bold tracking-[0.1em] text-black uppercase mb-1.5 lg:mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-sm leading-tight lg:leading-relaxed max-w-[160px] lg:max-w-[220px]">
                {pillar.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PillarsQI;
