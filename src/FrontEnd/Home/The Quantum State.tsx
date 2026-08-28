"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TheQuantumState = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const centerBoxRef = useRef<HTMLDivElement>(null);
  
  const columns = [
    // Col 1
    {
      mt: 'mt-[140px]',
      items: [
        { h: 'h-[180px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%203.webp' },
        { h: 'h-[220px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%206.webp' }
      ]
    },
    // Col 2
    {
      mt: 'mt-[60px]',
      items: [
        { h: 'h-[140px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%205.webp' },
        { h: 'h-[160px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%207.webp' },
        { h: 'h-[180px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%209.webp' }
      ]
    },
    // Col 3
    {
      mt: 'mt-[180px]',
      items: [
        { h: 'h-[320px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%2011.webp' }
      ]
    },
    // Col 4
    {
      mt: 'mt-[20px]',
      items: [
        { h: 'h-[400px]', img: '/Home/QUANTUM%20MOVEMENT/Global%20Exploration%20Initiatives.webp' }
      ]
    },
    // Col 5
    {
      mt: 'mt-[40px]',
      items: [
        { h: 'h-[340px]', img: '/Home/QUANTUM%20MOVEMENT/Quantum%20Healing%20Sanctuaries.webp' }
      ]
    },
    // Col 6
    {
      mt: 'mt-[140px]',
      items: [
        { h: 'h-[360px]', img: '/Home/QUANTUM%20MOVEMENT/Quantum%20Research%20Labs.webp' }
      ]
    },
    // Col 7
    {
      mt: 'mt-[80px]',
      items: [
        { h: 'h-[120px]', img: '/Home/The%20Wellness%20Spectrum/Holistic%20%26%20Integrative%20Wellness.webp' },
        { h: 'h-[200px]', img: '/Peace/Peace%20-7.webp' },
        { h: 'h-[160px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%203.webp' }
      ]
    },
    // Col 8
    {
      mt: 'mt-[120px]',
      items: [
        { h: 'h-[220px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%206.webp' },
        { h: 'h-[240px]', img: '/Home/Quantum%20Hero/Quantum%20Hero%20-%209.webp' }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        }
      });

      if (centerBoxRef.current) {
        // Center box scales up and fades in
        tl.fromTo(centerBoxRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );

        const innerContent = centerBoxRef.current.querySelector('.inner-content');
        if (innerContent && innerContent.children.length >= 3) {
          const children = innerContent.children;
          
          // Button drops from TOP
          tl.fromTo(children[0], 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" }, 
            "-=0.5"
          )
          // Main heading comes from LEFT
          .fromTo(children[1], 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
            "-=0.6"
          )
          // Highlight text comes from RIGHT
          .fromTo(children[2], 
            { x: 100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
            "-=0.6"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @keyframes scroll-left-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-marquee {
          animation: scroll-left-right 40s linear infinite;
        }
        .animate-scroll-marquee:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll-up-loop {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up-loop {
          animation: scroll-up-loop 40s linear infinite;
          will-change: transform;
        }
        .animate-scroll-up-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section ref={sectionRef} className="w-full bg-[#faf9f8] pt-0 pb-16 md:pb-24 overflow-hidden flex flex-col font-sans border-b border-zinc-100">

      {/* Grid Container with fades and Centered Text */}
      <div className="relative w-full h-[550px] md:h-[650px] max-w-[100vw] overflow-hidden flex items-center justify-center">
        
        {/* Top & Bottom Fade Masks (shade white) */}
        <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-[#faf9f8] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#faf9f8] to-transparent z-10 pointer-events-none"></div>

        {/* Grid Arch */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex gap-4 sm:gap-5 lg:gap-6 px-4 pointer-events-none opacity-40">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className={`w-[140px] sm:w-[160px] lg:w-[180px] shrink-0 ${col.mt} relative`}>
              <div 
                className="absolute top-0 left-0 flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full animate-scroll-up-loop"
                style={{ animationDuration: `${30 + (colIdx % 3) * 10}s` }}
              >
                {[...col.items, ...col.items, ...col.items, ...col.items, ...col.items, ...col.items].map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className={`w-full ${item.h} rounded-[24px] md:rounded-[32px] overflow-hidden bg-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 shrink-0`}
                  >
                    <img 
                      src={item.img} 
                      alt="Quantum Wellness" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Text Area Placed Center with Video Background */}
        <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 pointer-events-none">
          <div ref={centerBoxRef} className="relative pointer-events-auto flex flex-col items-center py-12 px-10 md:px-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden opacity-0">
            
            {/* Background Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              disablePictureInPicture
              disableRemotePlayback
              className="absolute inset-0 w-full h-full object-cover z-0 scale-105 pointer-events-none"
            >
              <source src="/Videos/Yoga.mp4" type="video/mp4" />
            </video>
            
            {/* Frosted Glass Overlay */}
            <div className="absolute inset-0 bg-[#faf9f8]/30 backdrop-blur-sm z-0"></div>

            {/* Text Content */}
            <div className="inner-content relative z-10 flex flex-col items-center">
              <button className="px-6 py-2.5 border border-[#E05A00]/30 rounded-full text-[#E05A00] text-[14px] font-bold mb-6 hover:bg-[#E05A00] hover:text-white transition-colors bg-white/90 backdrop-blur-md shadow-[0_4px_14px_rgba(224,90,0,0.1)] flex items-center justify-center opacity-0">
                The Quantum State
              </button>
              <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold text-zinc-900 mb-2 tracking-tight leading-tight max-w-2xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] opacity-0">
                Elevate your frequency and awaken
              </h2>
              <p className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-[#E05A00] tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] opacity-0">
                to a state of profound soul peace
              </p>
            </div>
            
          </div>
        </div>

      </div>

    </section>
    </>
  );
};

export default TheQuantumState;
