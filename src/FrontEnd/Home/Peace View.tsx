"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PeaceView = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Circle scales up and fades in
      tl.fromTo(circleRef.current,
        { scale: 0.5, opacity: 0, y: -50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0
      );

      if (textContentRef.current && textContentRef.current.children.length >= 4) {
        const children = textContentRef.current.children;
        
        // Heading comes from LEFT
        tl.fromTo(children[0],
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0.3
        )
        // Paragraph comes from RIGHT
        .fromTo(children[1],
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0.4
        )
        // Button comes from UP (drops down)
        .fromTo(children[2],
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
          0.5
        )
        // Bottom Grid comes from DOWN (rises up)
        .fromTo(children[3],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.6
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full relative overflow-hidden bg-white">
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 40s linear infinite;
          }
          .animate-spin-slow:has(.image-card:hover) {
            animation-play-state: paused;
          }
          .image-card {
            --card-radius: -220px;
          }
          @media (min-width: 640px) {
            .image-card {
              --card-radius: -450px;
            }
          }
        `}
      </style>
      <section ref={sectionRef} className="relative w-full min-h-[600px] sm:min-h-[850px] bg-white overflow-hidden flex flex-col font-sans pb-16">
        {/* Circle Container */}
        <div ref={circleRef} className="absolute top-[20px] sm:top-[100px] left-1/2 w-[500px] h-[500px] sm:w-[1000px] sm:h-[1000px] z-0 pointer-events-none opacity-0 will-change-transform"
             style={{ transform: 'translateX(-50%)' }}>
          <div className="w-full h-full relative animate-spin-slow">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="image-card pointer-events-auto absolute top-1/2 left-1/2 w-[90px] h-[90px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl border-4 sm:border-[6px] border-white/80 cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(var(--card-radius))`
                }}
              >
                <img src={`/OG%20IMAGES/q${(i % 9) + 1}.png`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-125" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* White Mask Layer for bottom half */}
        <div className="absolute top-[270px] sm:top-[520px] left-0 w-full h-[600px] bg-white z-0 pointer-events-none"></div>
        <div className="absolute top-[170px] sm:top-[370px] left-0 w-full h-[100px] sm:h-[150px] bg-gradient-to-b from-white/0 to-white z-0 pointer-events-none"></div>

        {/* Text Content Layer */}
        <div ref={textContentRef} className="relative z-10 w-full max-w-4xl px-4 sm:px-6 mx-auto flex flex-col items-center text-center mt-[220px] sm:mt-[380px]">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-900 mb-4 leading-[1.1] tracking-tight opacity-0">
            Experience Profound <br className="hidden sm:block" /> 
            <span className="text-[#E05A00]">Soul Peace</span> With Us
          </h2>
          
          <p className="text-zinc-500 mb-8 max-w-xl text-base font-light leading-relaxed opacity-0">
            Awaken your highest self and cultivate a lasting sense of tranquility that resonates through every aspect of your life.
          </p>
          
          <div className="opacity-0">
            <button className="bg-[#E05A00] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#c24e00] transition-all hover:scale-105 flex items-center gap-2 mb-12 shadow-[0_10px_25px_rgba(224,90,0,0.3)]">
              Start Your Journey <span className="text-lg">→</span>
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-12 w-full pt-8 sm:pt-12 pb-4 sm:pb-8 border-t border-zinc-100 opacity-0">
            <div className="flex flex-col items-center text-center px-1 sm:px-4">
              <h4 className="text-zinc-800 font-serif text-xs sm:text-xl mb-1 sm:mb-3 leading-tight sm:leading-normal">Mind & Soul Alignment</h4>
              <p className="text-zinc-500 text-[10px] sm:text-sm font-light leading-relaxed">Synchronize your inner energy <br className="hidden sm:block"/>to achieve true serenity.</p>
            </div>
            <div className="flex flex-col items-center text-center px-1 sm:px-4">
              <h4 className="text-zinc-800 font-serif text-xs sm:text-xl mb-1 sm:mb-3 leading-tight sm:leading-normal">Spiritual Depth</h4>
              <p className="text-zinc-500 text-[10px] sm:text-sm font-light leading-relaxed">Guided by ancient philosophies <br className="hidden sm:block"/>of soul elevation.</p>
            </div>
            <div className="flex flex-col items-center text-center px-1 sm:px-4">
              <h4 className="text-zinc-800 font-serif text-xs sm:text-xl mb-1 sm:mb-3 leading-tight sm:leading-normal">Inner Sanctuary</h4>
              <p className="text-zinc-500 text-[10px] sm:text-sm font-light leading-relaxed">Cultivate a personal space of <br className="hidden sm:block"/>unwavering inner peace.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeaceView;