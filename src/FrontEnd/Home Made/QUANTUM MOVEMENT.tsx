"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Future Impact Programs",
    subtitle: "Shaping a better tomorrow.",
    image: "/Peace/Peace -1.webp"
  },
  {
    title: "Quantum Healing Sanctuaries",
    subtitle: "Wellness meets science.",
    image: "/Peace/Peace -2.webp"
  },
  {
    title: "Infinite Learning Campus",
    subtitle: "Explore. Learn. Evolve.",
    image: "/Peace/Peace -3.webp"
  },
  {
    title: "Quantum Research Labs",
    subtitle: "Discover. Innovate. Transform.",
    image: "/Peace/Peace -4.webp"
  },
  {
    title: "Global Exploration Initiatives",
    subtitle: "Expanding horizons, together",
    image: "/Peace/Peace -5.webp"
  }
];

const QuantumMovement = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start at 0, goes infinitely negative/positive
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const N = projects.length;

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      scroll('right');
    } else if (isRightSwipe) {
      scroll('left');
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // c is the actual index of the centered project in the array
  const c = ((currentIndex % N) + N) % N;

  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Existing entry animation (triggered early)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // Play once and never reverse, ensures it doesn't disappear
        }
      });

      tl.fromTo(".quantum-subtitle",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(".quantum-title",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(".quantum-carousel",
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.7"
      );

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#FDFBF7] to-[#F3F0EA] overflow-hidden">
      {/* Ambient glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] h-[600px] bg-[#E05A00]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div ref={wrapperRef} className="w-full relative z-10">
        <section ref={sectionRef} className="relative w-full h-auto min-h-0 lg:min-h-screen flex flex-col items-center justify-center font-sans pt-24 pb-12 lg:pt-32 lg:pb-16">
          
        {/* Top Header Section */}
        <div className="w-full max-w-[1000px] px-4 sm:px-6 md:px-12 mx-auto mb-12 lg:mb-16 relative z-10 flex flex-col items-center text-center">
          
          {/* Premium Glass Badge Subtitle */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#E05A00]/20 bg-white/60 backdrop-blur-md mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="w-2 h-2 rounded-full bg-[#E05A00] shadow-[0_0_8px_rgba(224,90,0,0.6)] animate-pulse"></span>
            <h4 className="quantum-subtitle text-[#E05A00] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap pt-[2px]">
              THE QUANTUM MOVEMENT
            </h4>
          </div>
          
          {/* Elegant Mixed Typography Title */}
          <h2 className="quantum-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 leading-[1.1] drop-shadow-sm">
            Where Every Mind <br className="hidden sm:block" />
            <span className="font-serif italic text-gray-600 pr-2">Shapes Tomorrow.</span>
          </h2>
          
        </div>

        {/* Carousel Section (3D Coverflow Style) */}
      <div 
        className="quantum-carousel relative w-full max-w-[1400px] mx-auto flex items-center justify-center h-[280px] sm:h-[360px] md:h-[400px] lg:h-[420px] px-2 sm:px-4 mt-2 md:mt-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        
        {/* Left Nav Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-6 md:left-16 lg:left-32 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-300/50 flex items-center justify-center bg-white/70 backdrop-blur-md text-gray-700 transition-all duration-500 hover:border-[#E05A00] hover:bg-[#E05A00] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(224,90,0,0.4)] cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>

        {/* Carousel Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
          {projects.map((project, idx) => {
            // Calculate shortest distance in a circular array
            let offset = (idx - c) % N;
            if (offset > Math.floor(N / 2)) offset -= N;
            if (offset < -Math.floor(N / 2)) offset += N;

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);
            const direction = Math.sign(offset);

            // Determine X offset percentage and Scale
            const x = direction === 0 ? "0%" : `${direction * (absOffset === 1 ? 75 : 130)}%`;
            const scale = isCenter ? 1 : 1 - absOffset * 0.12;
            const zIndex = 50 - absOffset;
            const opacity = absOffset > 2 ? 0 : 1;

            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  x,
                  scale,
                  zIndex,
                  opacity,
                  rotateX: isCenter ? 0 : 5,
                  rotateY: isCenter ? 0 : direction * -15,
                  z: isCenter ? 0 : -100 * absOffset,
                  borderRadius: isCenter ? "2rem" : "1.5rem",
                  borderColor: isCenter ? "rgba(224,90,0,0.3)" : "rgba(255,255,255,0.7)",
                  boxShadow: isCenter ? "0 40px 80px rgba(0,0,0,0.15), 0 0 40px rgba(224,90,0,0.1)" : "0 10px 30px rgba(0,0,0,0.05)",
                }}
                whileHover={isCenter ? {
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: -2,
                  z: 20,
                  borderColor: "rgba(224,90,0,0.8)",
                  boxShadow: "0px 50px 100px rgba(0,0,0,0.2), 0 0 30px rgba(224,90,0,0.3)",
                } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setCurrentIndex((prev) => prev + offset)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute w-[180px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[260px] sm:h-[340px] md:h-[380px] lg:h-[400px] overflow-hidden cursor-pointer origin-center group border-2"
              >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Light glass overlay for unfocused side cards */}
                <motion.div 
                  className="absolute inset-0 bg-white/40 backdrop-blur-[3px] pointer-events-none"
                  animate={{ opacity: isCenter ? 0 : 1 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Elegant Text Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                {/* Card Content - Dynamic based on focus */}
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 lg:p-6 flex flex-col z-10">
                  <h3 className="text-white font-medium text-sm sm:text-lg md:text-xl lg:text-xl mb-1 md:mb-2 leading-snug drop-shadow-lg">
                    {project.title}
                  </h3>
                  
                  <motion.div 
                    className="h-[2px] bg-[#E05A00] mb-2 md:mb-3 origin-left rounded-full"
                    animate={{ width: isCenter ? "30px" : "0px", opacity: isCenter ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: isCenter ? 0.2 : 0 }}
                  />
                  
                  <motion.p 
                    className="text-white/90 font-light text-[9px] sm:text-[10px] md:text-xs lg:text-xs leading-relaxed drop-shadow-md"
                    animate={{ y: isCenter ? 0 : 10, opacity: isCenter ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: isCenter ? 0.1 : 0 }}
                  >
                    {project.subtitle}
                  </motion.p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Right Nav Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-6 md:right-16 lg:right-32 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-300/50 flex items-center justify-center bg-white/70 backdrop-blur-md text-gray-700 transition-all duration-500 hover:border-[#E05A00] hover:bg-[#E05A00] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(224,90,0,0.4)] cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>

      </div>

        </section>
      </div>
    </div>
  );
};

export default QuantumMovement;
