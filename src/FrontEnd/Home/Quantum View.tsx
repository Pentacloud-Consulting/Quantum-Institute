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
      // 1. Staggered fade in for the panels (Triggers early, doesn't fade out on scroll down)
      gsap.fromTo(".value-panel",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: ".values-section",
            start: "top 85%", // Triggers much earlier ("coming fast")
            toggleActions: "play none none reverse" // Doesn't fade out when scrolling past
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
            start: "top 80%", // Triggers earlier
            toggleActions: "play none none reverse"
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
    { word: "Access Point", img: "/OG%20IMAGES/q1.png" },
    { word: "Access Render", img: "/OG%20IMAGES/q2.png" },
    { word: "The Agorà", img: "/OG%20IMAGES/q4.png" },
    { word: "The Elysium", img: "/OG%20IMAGES/q5.png" },
    { word: "Architectural Render", img: "/OG%20IMAGES/q6.png" },
    { word: "The Canyon", img: "/OG%20IMAGES/q8.png" },
    { word: "Access Point", img: "/OG%20IMAGES/q1.png" }
  ];

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-white border-b border-zinc-200">
      
      {/* 1. The QUANTUM Stencil Cutout */}
      <section className="hidden relative w-full bg-white overflow-hidden items-center justify-center font-sans z-20">
        
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
        <div className="relative z-10 bg-white mix-blend-screen w-full flex items-center justify-center pt-6 md:pt-8 pb-8 md:pb-10">
          
          <div className="flex items-center justify-center gap-0.5 sm:gap-2 md:gap-3 lg:gap-4 px-2 w-full">
            {letters.map((char, i) => (
              <span 
                key={i}
                className="text-black text-[13.5vw] sm:text-[15vw] md:text-[18vw] leading-none uppercase tracking-tighter"
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
      <section className="values-section relative w-full h-auto bg-white z-20 pb-12 md:pb-28 px-4 md:px-8">
        <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-2 h-auto md:h-[55vh]">
          
          {panels.map((panel, idx) => (
            <div 
              key={idx} 
              className={`value-panel relative flex flex-col items-center justify-center md:justify-end h-[160px] sm:h-[200px] md:h-full overflow-hidden w-full md:flex-1 md:hover:flex-[1.5] lg:hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group rounded-2xl md:rounded-none ${idx === panels.length - 1 ? 'col-span-2 md:col-auto' : ''}`}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-100 md:opacity-100 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Bottom Badge Text */}
              <span className="panel-text relative z-20 text-white font-bold uppercase tracking-[0.2em] text-[11px] md:text-[12px] font-sans opacity-100 md:opacity-90 md:group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-500 mb-0 md:mb-12 whitespace-nowrap bg-black/40 backdrop-blur-md px-4 py-2 rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] border border-white/20 w-auto inline-block">
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
