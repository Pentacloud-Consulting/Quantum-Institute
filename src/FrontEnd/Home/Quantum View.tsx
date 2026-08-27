"use client";

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const QuantumView = () => {
  const letters = ['Q', 'U', 'A', 'N', 'T', 'U', 'M'];
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered fade in for the panels
      gsap.fromTo(".value-panel",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: ".values-section",
            start: "top 60%",
            toggleActions: "play reverse play reverse"
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out"
        }
      );

      // 2. Staggered fade in for the text labels
      gsap.fromTo(".panel-text",
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".values-section",
            start: "top 50%",
            toggleActions: "play reverse play reverse"
          },
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out"
        }
      );

      // 3. Subtle parallax drift for the images inside the panels
      gsap.utils.toArray('.panel-bg').forEach((bg: any) => {
        gsap.to(bg, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: bg.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const panels = [
    { word: "Presence", img: "/Peace/Peace -1.webp" },
    { word: "Harmony", img: "/Peace/Peace -2.webp" },
    { word: "Flow", img: "/Peace/Peace -3.webp" },
    { word: "Awakening", img: "/Peace/Peace -4.webp" },
    { word: "Connection", img: "/Peace/Peace -5.webp" }, // Fallbacks in case "Quantum Hero" files aren't in this project
    { word: "Evolution", img: "/Peace/Peace -6.webp" },
    { word: "Transcendence", img: "/Peace/Peace -7.webp" }
  ];

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-white border-b border-zinc-200">
      
      {/* 1. The QUANTUM Stencil Cutout */}
      <section className="relative w-full bg-white overflow-hidden flex items-center justify-center font-sans z-20">
        
        {/* Layer 1: Background Video */}
        <video 
          src="/Videos/PROPOSITION Video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover" 
        />

        {/* Layer 2: Stencil Mask */}
        <div className="relative z-10 bg-white mix-blend-screen w-full flex items-center justify-center pt-4 md:pt-8 pb-6 md:pb-10">
          
          <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 px-4 w-full">
            {letters.map((char, i) => (
              <span 
                key={i}
                className="text-black text-[15vw] md:text-[18vw] leading-none uppercase tracking-tighter"
                style={{ 
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  fontWeight: 900
                }}
              >
                {char}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 2. The GSAP Value Panels Accordion */}
      <section className="values-section relative w-full h-auto bg-white z-20 pb-20 md:pb-28 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 h-[80vh] md:h-[55vh]">
          
          {panels.map((panel, idx) => (
            <div 
              key={idx} 
              className="value-panel relative flex flex-col items-center justify-end h-full overflow-hidden flex-1 hover:flex-[1.5] lg:hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group rounded-xl md:rounded-none"
            >
              {/* Parallax Background */}
              <div className="absolute inset-[-15%] z-0 panel-bg">
                 <img 
                   src={panel.img} 
                   alt={panel.word} 
                   className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                 />
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-100 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Bottom Badge Text */}
              <span className="panel-text relative z-20 text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-[12px] font-sans opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-500 mb-8 md:mb-12 whitespace-nowrap bg-black/40 backdrop-blur-md px-4 py-2 rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] border border-white/20 w-auto inline-block">
                {panel.word}
              </span>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default QuantumView;
