"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SplashAnimation = () => {
  const [isFinished, setIsFinished] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while splash is active
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
          document.body.style.overflow = '';
        }
      });

      // 1. Fade in the text with a slight vertical drift and blur removal
      tl.fromTo(textRef.current,
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: "power3.out", delay: 0.2 }
      )
      
      // 2. Animate the glowing progress bar expanding from the center
      .fromTo(progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "expo.inOut" },
        "-=1.0"
      )

      // 3. Short pause for dramatic effect
      .to({}, { duration: 0.4 })

      // 4. Fade out the text and line gracefully
      .to(logoWrapperRef.current, {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(10px)',
        duration: 0.6,
        ease: "power2.in"
      })

      // 5. Cinematic split screen reveal!
      // Top half slides up, Bottom half slides down
      .to(topHalfRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "expo.inOut"
      }, "-=0.2")
      .to(bottomHalfRef.current, {
        y: "100%",
        duration: 1.2,
        ease: "expo.inOut"
      }, "<"); // Run at the exact same time as topHalf

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (isFinished) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Top Half of the screen */}
      <div 
        ref={topHalfRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#050505] origin-top will-change-transform shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10"
      />
      
      {/* Bottom Half of the screen */}
      <div 
        ref={bottomHalfRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] origin-bottom will-change-transform shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-10"
      />

      {/* Ambient background glow attached to the back of the logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E05A00] rounded-full blur-[150px] opacity-10 pointer-events-none z-20" />

      {/* Main Content Wrapper */}
      <div ref={logoWrapperRef} className="relative z-30 flex flex-col items-center">
        
        {/* Text Container */}
        <div ref={textRef} className="flex flex-col items-center will-change-transform">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-serif font-light tracking-[0.1em] text-white uppercase leading-none mb-2 sm:mb-3 text-center drop-shadow-2xl">
            Quantum
          </h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="h-[1px] w-6 sm:w-8 md:w-16 bg-[#E05A00]/50" />
            <p className="text-[10px] sm:text-xs md:text-sm font-sans font-medium tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[#E05A00] drop-shadow-lg">
              Institute
            </p>
            <div className="h-[1px] w-6 sm:w-8 md:w-16 bg-[#E05A00]/50" />
          </div>
        </div>

        {/* Minimal Progress Line */}
        <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 -translate-x-1/2 w-40 sm:w-48 md:w-80 h-[1px] bg-white/10 overflow-hidden">
          <div 
            ref={progressRef}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#E05A00] to-transparent origin-center will-change-transform"
          />
        </div>

      </div>
    </div>
  );
};

export default SplashAnimation;
