"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
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
        y: -50,
        opacity: 0,
        ease: "none"
      }, 0)
      .fromTo(".architecture-scrolled-content", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        0.2
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen relative flex items-center justify-center overflow-hidden shrink-0 architecture-section">
      {/* Base Background */}
      <img 
        src="/Qunatum images/Quantum_night_mode.jpeg" 
        alt="Architecture Base" 
        className="architecture-bg-base w-full h-full object-cover absolute inset-0 transform origin-center z-0" 
      />
      
      {/* Upper Background that will fade out */}
      <img 
        src="/Home images/wall .png" 
        alt="Architecture Upper Desktop" 
        className="architecture-bg-upper hidden md:block w-full h-full object-cover absolute inset-0 transform origin-center z-0" 
      />
      <img 
        src="/Home images/wall 2.png" 
        alt="Architecture Upper Mobile" 
        className="architecture-bg-upper block md:hidden w-full h-full object-cover absolute inset-0 transform origin-center z-0" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0"></div>
      
      {/* Initial Title */}
      <div className="relative z-10 text-white text-center architecture-title px-4 w-full">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif tracking-wide drop-shadow-xl">The Quantum Institute</h1>
      </div>

      {/* Content that appears on scroll */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start opacity-0 architecture-scrolled-content pointer-events-none pt-[25vh] will-change-transform transform-gpu">
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#dcc7a1] max-w-4xl leading-relaxed drop-shadow-md text-center pointer-events-auto">
          Where Minds Collect and<br className="hidden md:block"/> Possibilities Connect
        </h2>

        {/* Global Buttons */}
        <div className="absolute bottom-[8vh] flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4 pointer-events-auto">
          <Link 
            href="/signup" 
            className="px-8 py-3 rounded-full border border-white/60 text-white text-sm font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Join WaitList
          </Link>
          <Link 
            href="/architecture" 
            className="px-8 py-3 rounded-full border border-white/60 text-white text-sm font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Architecture
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;;
