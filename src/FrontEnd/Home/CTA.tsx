"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Heading comes from LEFT
      if (headingRef.current) {
        tl.fromTo(headingRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0
        );
      }

      // Description comes from BOTTOM
      if (descRef.current) {
        tl.fromTo(descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.2
        );
      }

      // Button comes from RIGHT
      if (btnRef.current) {
        tl.fromTo(btnRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.4
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#fdfcfb] pt-6 lg:pt-10 pb-12 lg:pb-20 flex flex-col items-center justify-center font-sans z-20 overflow-hidden md:border-t md:border-black/5">

      <div className="w-full max-w-[1500px] px-4 md:px-12 lg:px-20 mx-auto relative z-10">
        
        {/* Light Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center bg-white border border-black/5 p-5 md:p-16 rounded-[1.5rem] md:rounded-3xl shadow-md md:shadow-xl relative overflow-hidden">
          
          {/* Subtle inner card glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent pointer-events-none" />

          {/* Left: Heading */}
          <div 
            ref={headingRef}
            className="md:col-span-5 flex flex-col items-start relative z-10 opacity-0"
          >
            <h4 className="text-[#E05A00] text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-5 flex items-center gap-2 md:gap-3">
              <span className="w-5 md:w-8 h-[1px] bg-[#E05A00]"></span>
              JOIN THE FUTURE
            </h4>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[3.25rem] font-light tracking-tight text-black leading-[1.1] drop-shadow-sm">
              Be part of something <br />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black/50">limitless.</span>
            </h2>
          </div>

          {/* Middle: Description */}
          <div 
            ref={descRef}
            className="md:col-span-4 relative z-10 opacity-0"
          >
            <p className="text-black/60 text-[10px] sm:text-sm md:text-base leading-relaxed max-w-sm">
              Whether you're a learner, researcher, healer, or dreamer—there's a place for you in the <strong className="text-black font-medium">Quantum movement</strong>.
            </p>
          </div>

          {/* Right: Button */}
          <div 
            ref={btnRef}
            className="md:col-span-3 flex md:justify-end relative z-10 opacity-0"
          >
            <button className="group relative flex items-center justify-center gap-2 md:gap-3 bg-[#E05A00] hover:bg-[#C04800] text-white px-5 py-3 md:px-8 md:py-5 rounded-full text-[9px] md:text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 shadow-md md:shadow-lg cursor-pointer whitespace-nowrap">
              <span>JOIN OUR COMMUNITY</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
