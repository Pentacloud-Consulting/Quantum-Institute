"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Architecture = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        }
      });

      tl.to(".architecture-bg-upper", {
        scale: 1.5,
        opacity: 0,
        ease: "none"
      }, 0)
      .to(".architecture-bg-base", {
        scale: 1.1,
        ease: "none"
      }, 0)
      .to(".architecture-title", {
        y: -30,
        opacity: 0,
        ease: "none"
      }, 0)
      .to(".architecture-box", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "none"
      }, 0.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen relative flex items-center justify-center overflow-hidden shrink-0 architecture-section">
      {/* Base Background */}
      <img 
        src="/Home images/qt.jpeg" 
        alt="Architecture Base" 
        className="architecture-bg-base w-full h-full object-cover absolute inset-0 transform origin-center z-0" 
      />
      
      {/* Upper Background that will fade out */}
      <img 
        src="/Home images/wall .png" 
        alt="Architecture Upper" 
        className="architecture-bg-upper w-full h-full object-cover absolute inset-0 transform origin-center z-0" 
      />
      
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      <div className="relative z-10 text-white text-center architecture-title">
        <h2 className="text-5xl md:text-7xl font-serif tracking-tight drop-shadow-lg">Architecture</h2>
      </div>

      {/* Floating Boxes Container */}
      <div className="absolute top-[12%] left-0 w-full flex flex-wrap justify-center items-start gap-8 md:gap-24 lg:gap-32 px-4 z-20">
        {/* Floating Box 1 */}
        <div className="architecture-box w-48 md:w-56 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-2xl opacity-0 translate-y-12">
           <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden">
              <img src="/Home images/AGORÀ.png" alt="AGORÀ" className="w-full h-full object-cover" />
           </div>
           <h4 className="text-white text-sm md:text-base font-semibold font-sans tracking-wide text-center uppercase">AGORÀ</h4>
           
           {/* Indicating Dot */}
           <div className="absolute top-full left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-[1px] h-16 md:h-32 lg:h-48 bg-white/40"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.8)] animate-pulse"></div>
           </div>
        </div>

        {/* Floating Box 2 */}
        <div className="architecture-box w-48 md:w-56 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-2xl opacity-0 translate-y-12">
           <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden">
              <img src="/Home images/CANYON.png" alt="CANYON" className="w-full h-full object-cover" />
           </div>
           <h4 className="text-white text-sm md:text-base font-semibold font-sans tracking-wide text-center uppercase">CANYON</h4>
           
           {/* Indicating Dot */}
           <div className="absolute top-full left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-[1px] h-12 md:h-24 lg:h-32 bg-white/40"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.8)] animate-pulse"></div>
           </div>
        </div>

        {/* Floating Box 3 */}
        <div className="architecture-box w-48 md:w-56 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-2xl opacity-0 translate-y-12">
           <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden">
              <img src="/Home images/ELYSIUM.png" alt="ELYSIUM" className="w-full h-full object-cover" />
           </div>
           <h4 className="text-white text-sm md:text-base font-semibold font-sans tracking-wide text-center uppercase">ELYSIUM</h4>
           
           {/* Indicating Dot */}
           <div className="absolute top-full left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-[1px] h-16 md:h-32 lg:h-40 bg-white/40"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.8)] animate-pulse"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
