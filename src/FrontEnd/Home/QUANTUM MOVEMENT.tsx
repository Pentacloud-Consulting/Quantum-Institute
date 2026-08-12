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
    image: "/Home/QUANTUM MOVEMENT/Future Impact Programs.webp"
  },
  {
    title: "Quantum Healing Sanctuaries",
    subtitle: "Wellness meets science.",
    image: "/Home/QUANTUM MOVEMENT/Quantum Healing Sanctuaries.webp"
  },
  {
    title: "Infinite Learning Campus",
    subtitle: "Explore. Learn. Evolve.",
    image: "/Home/QUANTUM MOVEMENT/Infinite Learning Campus.webp"
  },
  {
    title: "Quantum Research Labs",
    subtitle: "Discover. Innovate. Transform.",
    image: "/Home/QUANTUM MOVEMENT/Quantum Research Labs.webp"
  },
  {
    title: "Global Exploration Initiatives",
    subtitle: "Expanding horizons, together",
    image: "/Home/QUANTUM MOVEMENT/Global Exploration Initiatives.webp"
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

      // 2. Pinning logic: stick for a second (only on desktop)
      if (window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=100%", 
          pin: true,
          pinSpacing: true, 
        });
      }

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-[#fafafa]">
      <div ref={wrapperRef} className="w-full">
        <section ref={sectionRef} className="relative w-full h-auto min-h-0 lg:min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans z-20 py-8 lg:py-24">
          
        {/* Top Header Section */}
        <div className="w-full max-w-[1000px] px-4 sm:px-6 md:px-12 mx-auto mb-8 lg:mb-16 relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            <h4 className="quantum-subtitle text-[#E05A00] text-[8px] lg:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 lg:mb-4 md:mb-6">
              THE QUANTUM MOVEMENT
            </h4>
            
            <h2 className="quantum-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-black leading-[1.1]">
              Where Every Mind <br className="hidden sm:block" />
              Shapes Tomorrow.
            </h2>
          </div>
        </div>

        {/* Carousel Section (3D Coverflow Style) */}
      <div 
        className="quantum-carousel relative w-full max-w-[1600px] mx-auto flex items-center justify-center h-[220px] sm:h-[300px] md:h-[360px] lg:h-[380px] px-2 sm:px-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        
        {/* Left Nav Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 md:left-12 lg:left-24 z-50 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/80 backdrop-blur-sm text-black transition-colors hover:border-[#E05A00] hover:text-[#E05A00] cursor-pointer shadow-sm"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Carousel Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
          {projects.map((project, idx) => {
            // Calculate shortest distance in a circular array
            let offset = (idx - c) % N;
            if (offset > Math.floor(N / 2)) offset -= N;
            if (offset < -Math.floor(N / 2)) offset += N;

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);
            const direction = Math.sign(offset);

            // Determine X offset percentage and Scale
            const x = direction === 0 ? "0%" : `${direction * (absOffset === 1 ? 80 : 150)}%`;
            const scale = isCenter ? 1 : 1 - absOffset * 0.15;
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
                  rotateX: 0,
                  rotateY: 0,
                  z: 0,
                  borderRadius: "1.5rem",
                  borderColor: "rgba(0,0,0,0.05)",
                }}
                whileHover={isCenter ? {
                  scale: 1.05,
                  rotateX: 2,
                  rotateY: -4,
                  z: 30,
                  borderRadius: "2.5rem",
                  borderColor: "rgba(209, 80, 0, 0.6)",
                  boxShadow: "0px 30px 60px rgba(0,0,0,0.2), 0 0 20px rgba(209, 80, 0, 0.3)",
                } : {}}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setCurrentIndex((prev) => prev + offset)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute w-[150px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[340px] overflow-hidden cursor-pointer shadow-2xl origin-center group border"
              >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Light overlay for unfocused side cards */}
                <motion.div 
                  className="absolute inset-0 bg-white pointer-events-none"
                  animate={{ opacity: isCenter ? 0 : 0.3 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Text Gradient Background (Dark at bottom, clear at top) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-4 lg:p-6 flex flex-col z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-medium text-xs sm:text-base md:text-lg lg:text-xl mb-0.5 sm:mb-1 md:mb-2 leading-snug drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-tight sm:leading-relaxed drop-shadow-md">
                    {project.subtitle}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Right Nav Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 md:right-12 lg:right-24 z-50 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/80 backdrop-blur-sm text-black transition-colors hover:border-[#E05A00] hover:text-[#E05A00] cursor-pointer shadow-sm"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

      </div>

        </section>
      </div>
    </div>
  );
};

export default QuantumMovement;
