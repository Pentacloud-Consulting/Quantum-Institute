"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Atom, Infinity as InfinityIcon, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    title: "QUANTUM HEALING",
    icon: <Heart strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Aligning your core frequency<br/>
        with the restorative energy<br/>
        <span className="font-medium text-black">of the universe.</span>
      </>
    )
  },
  {
    title: "INNER STILLNESS",
    icon: <Feather strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Silencing mental noise<br/>
        to hear the profound whispers<br/>
        <span className="font-medium text-black">of your true essence.</span>
      </>
    )
  },
  {
    title: "CONSCIOUS EVOLUTION",
    icon: <Atom strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Transcending physical limits<br/>
        to expand your awareness into<br/>
        <span className="font-medium text-black">higher dimensions.</span>
      </>
    )
  },
  {
    title: "SOUL RESONANCE",
    icon: <InfinityIcon strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Harmonizing your spirit<br/>
        with the unified field of<br/>
        <span className="font-medium text-black">absolute love and peace.</span>
      </>
    )
  },
  {
    title: "SACRED UNITY",
    icon: <Users strokeWidth={1.5} className="w-5 h-5 lg:w-8 lg:h-8 text-black animate-draw-icon" />,
    description: (
      <>
        Dissolving the illusion of<br/>
        separation to merge with<br/>
        <span className="font-medium text-black">the collective consciousness.</span>
      </>
    )
  }
];

const PillarsQI = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Header comes from LEFT
      if (headerRef.current) {
        tl.fromTo(headerRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0
        );
      }

      // Grid items come from different directions
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.pillar-card');
        
        // 1: From Left
        tl.fromTo(cards[0], { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.2);
        // 2: From Bottom
        tl.fromTo(cards[1], { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.3);
        // 3: From Top
        tl.fromTo(cards[2], { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.4);
        // 4: From Bottom
        tl.fromTo(cards[3], { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.5);
        // 5: From Right
        tl.fromTo(cards[4], { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.6);
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
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
      <section ref={sectionRef} className="relative w-full bg-[#faf9f8] pt-16 lg:pt-24 pb-12 lg:pb-16 flex flex-col items-center font-sans z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="w-full max-w-[1600px] px-6 md:px-12 mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div 
          ref={headerRef}
          className="flex flex-col items-center text-center mb-10 lg:mb-24 opacity-0"
        >
          <h4 className="text-[#E05A00] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 lg:mb-4">
            PILLARS OF SOUL PEACE
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-black">
            Building spiritual harmony on five pillars.
          </h2>
        </div>

        {/* Pillars Grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-5 w-full relative gap-y-10 lg:gap-y-0 gap-x-2 lg:gap-x-0">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`pillar-card relative flex flex-col items-center text-center px-1 sm:px-4 opacity-0 ${
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

            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
};

export default PillarsQI;
