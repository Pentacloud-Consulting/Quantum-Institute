"use client";

import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Sections() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Trail State
  const [trail, setTrail] = useState<{ id: number; x: number; y: number; src: string; rotation: number }[]>([]);
  const imageIndex = useRef(0);
  const calmingSectionRef = useRef<HTMLElement>(null);
  
  const trailImages = [
    "/Home/Quantum Hero/Quantum Hero - 3.webp",
    "/Home/Quantum Hero/Quantum Hero - 4.webp",
    "/Home/Quantum Hero/Quantum Hero - 5.webp",
    "/Home/Quantum Hero/Quantum Hero - 6.webp",
    "/Home/Quantum Hero/Quantum Hero - 7.webp",
    "/Home/Quantum Hero/Quantum Hero - 8.webp",
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!calmingSectionRef.current) return;
    
    const rect = calmingSectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTrail((currentTrail) => {
      // Check distance against ALL active images to strictly prevent overlapping
      const isTooClose = currentTrail.some(img => Math.hypot(x - img.x, y - img.y) < 220);
      
      if (isTooClose) return currentTrail;

      const newId = Date.now();
      const src = trailImages[imageIndex.current % trailImages.length];
      const rotation = Math.random() * 20 - 10;
      imageIndex.current++;

      // Auto-remove after 1.5 seconds
      setTimeout(() => {
        setTrail((prev) => prev.filter(img => img.id !== newId));
      }, 1500);

      return [...currentTrail, { id: newId, x, y, src, rotation }];
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Global ease for smooth natural feeling
      gsap.defaults({ ease: "power2.out" });


      // Section 5: Unique 3D Scroll Flip
      const flipTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vm-pin-container",
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        }
      });
      
      flipTl.to(".vm-flip-inner", {
        rotateY: 180,
        ease: "none",
        duration: 1
      });



      // Section 2: Calming Phrase fade in & stick
      const calmingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".calming-section",
          start: "center center",
          end: "+=100%", // Pins it for the equivalent of 1 viewport height of scroll
          pin: true,
          scrub: true,
        }
      });

      calmingTl.fromTo(".calming-word", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out"
        }
      ).to(".calming-section", { duration: 1.5 }); // Holds the pin for a bit before unpinning

      // Section 3: Pinned Sticky Sequence
      const stickyTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".structure-section",
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
        }
      });

      // Step 1 -> Step 2
      stickyTl
        // Move boxes to extreme Top-Left and Bottom-Right corners safely inside bounds
        .to(".float-img-1", { y: "-25vh", x: "0vw", duration: 2 }, 0)
        .to(".float-img-2", { y: "35vh", x: "0vw", duration: 2 }, 0)
        // Crossfade background
        .to(".bg-img-1", { opacity: 0, duration: 1 }, 0)
        .to(".bg-img-2", { opacity: 0.3, duration: 1 }, 0.5)
        // Crossfade Left Box
        .to(".l-img-1", { opacity: 0, duration: 1 }, 0.5)
        .to(".l-img-2", { opacity: 1, duration: 1 }, 0.5)
        // Crossfade Right Box
        .to(".r-img-1", { opacity: 0, duration: 1 }, 0.5)
        .to(".r-img-2", { opacity: 1, duration: 1 }, 0.5)
        // Text fade out / in
        .to(".structure-text-1", { opacity: 0, y: -20, duration: 1 }, 0)
        .fromTo(".structure-text-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 1);

      // Step 2 -> Step 3
      stickyTl
        // Move boxes back to Bottom-Left and Top-Right corners safely inside bounds
        .to(".float-img-1", { y: "0vh", x: "0vw", duration: 2 }, 2)
        .to(".float-img-2", { y: "0vh", x: "0vw", duration: 2 }, 2)
        // Crossfade background
        .to(".bg-img-2", { opacity: 0, duration: 1 }, 2)
        .to(".bg-img-3", { opacity: 0.3, duration: 1 }, 2.5)
        // Crossfade Left Box
        .to(".l-img-2", { opacity: 0, duration: 1 }, 2.5)
        .to(".l-img-3", { opacity: 1, duration: 1 }, 2.5)
        // Crossfade Right Box
        .to(".r-img-2", { opacity: 0, duration: 1 }, 2.5)
        .to(".r-img-3", { opacity: 1, duration: 1 }, 2.5)
        // Text fade out / in
        .to(".structure-text-2", { opacity: 0, y: -20, duration: 1 }, 2)
        .fromTo(".structure-text-3", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 3);

      // Section 4: Seven Value Panels
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


      // Subtle parallax drift for panels
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

  return (
    <div ref={containerRef} className="bg-black text-white w-full overflow-hidden font-serif selection:bg-[#D8B48F]/30">
      


      {/* Section 5 — Unique 3D Flip Card */}
      <section className="vision-mission-section relative w-full bg-black z-20">
        <div className="relative w-full h-screen flex items-center justify-center px-4 md:px-12 pt-24 lg:pt-32 pb-12 vm-pin-container overflow-hidden">
          
          <div className="relative w-full max-w-7xl h-[85vh] md:h-[80vh] rounded-3xl" style={{ perspective: "2500px" }}>
            <div className="vm-flip-inner w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
              
              {/* FRONT: VISION */}
              <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(216,180,143,0.1)]" style={{ backfaceVisibility: "hidden" }}>
                {/* Rotating Shine Background */}
                <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 animate-spin [animation-duration:4s]" style={{ background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(216, 180, 143, 0.8) 80%, transparent 100%)" }}></div>
                
                {/* Inner Mask Container */}
                <div className="absolute inset-[1.5px] bg-[#0a0a0a] rounded-[22px] overflow-hidden flex flex-col md:flex-row z-10">
                <div className="w-full md:w-1/2 h-[40%] md:h-full relative">
                  <img src="/Home/Vision Mission Hero/Vision Hero.webp" alt="Vision" className="w-full h-full object-cover sepia-[0.3] opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
                  <h3 className="absolute bottom-8 left-8 text-5xl md:text-7xl font-light text-white/20 uppercase tracking-[0.2em] font-serif mix-blend-overlay">Vision</h3>
                </div>
                <div className="w-full md:w-1/2 h-[60%] md:h-full p-6 md:p-8 lg:p-12 flex flex-col justify-center relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <div className="flex flex-col gap-4 mb-4 md:mb-6 mt-auto md:mt-0">
                    <h4 className="text-[#D8B48F] text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase flex items-center gap-4">
                      <span className="w-8 h-[1px] bg-[#D8B48F]"></span> The Vision
                    </h4>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.1em] leading-[1.3] text-white uppercase font-serif mb-6 md:mb-8">
                    Where minds collect <br className="hidden md:block" />& possibilities connect.
                  </h2>
                  <div className="flex flex-col gap-4 md:gap-5 w-full max-w-lg mb-auto md:mb-0">
                    {[
                      { title: 'Minds', tags: ['Scientists', 'Researchers', 'Academics', 'Seekers'] },
                      { title: 'Collect', tags: ['Gather', 'Collaborate', 'Intersect'] },
                      { title: 'Possibilities', tags: ['Advancement', 'Breakthroughs', 'Recovery'] }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-6 border-b border-white/5 pb-3 md:pb-4 last:border-0 group/row">
                        <span className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-[#D8B48F] w-24 shrink-0">{item.title}</span>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 md:px-3 md:py-1 bg-white/5 text-white/60 text-[8px] md:text-[9px] font-sans tracking-widest uppercase rounded border border-white/10 hover:border-[#D8B48F]/40 hover:text-[#D8B48F] transition-all cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>

              {/* BACK: MISSION */}
              <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(216,180,143,0.1)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                {/* Rotating Shine Background */}
                <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 animate-spin [animation-duration:4s]" style={{ background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(216, 180, 143, 0.8) 80%, transparent 100%)" }}></div>
                
                {/* Inner Mask Container */}
                <div className="absolute inset-[1.5px] bg-[#0a0a0a] rounded-[22px] overflow-hidden flex flex-col md:flex-row z-10">
                <div className="w-full md:w-1/2 h-[60%] md:h-full p-6 md:p-8 lg:p-12 flex flex-col justify-center relative order-2 md:order-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <div className="flex flex-col gap-4 mb-4 md:mb-6 mt-auto md:mt-0">
                    <h4 className="text-[#D8B48F] text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase flex items-center gap-4">
                      <span className="w-8 h-[1px] bg-[#D8B48F]"></span> The Mission
                    </h4>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.1em] leading-relaxed text-white font-serif uppercase mb-6 md:mb-8">
                    Empower minds through quantum exploration, fostering a global ecosystem for transformative healing.
                  </h2>
                  <div className="flex flex-col gap-4 md:gap-5 w-full max-w-lg mb-auto md:mb-0">
                    {[
                      { title: 'Exploration', tags: ['Toolkit', 'Science', 'Research', 'Journey'] },
                      { title: 'Ecosystem', tags: ['Network', 'Coherence', 'Interconnected', 'Natural'] }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-6 border-b border-white/5 pb-3 md:pb-4 last:border-0 group/row">
                        <span className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-[#D8B48F] w-24 shrink-0">{item.title}</span>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 md:px-3 md:py-1 bg-white/5 text-white/60 text-[8px] md:text-[9px] font-sans tracking-widest uppercase rounded border border-white/10 hover:border-[#D8B48F]/40 hover:text-[#D8B48F] transition-all cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-[40%] md:h-full relative order-1 md:order-2">
                  <img src="/Home/Vision Mission Hero/Mission Hero.webp" alt="Mission" className="w-full h-full object-cover sepia-[0.3] opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
                  <h3 className="absolute bottom-8 right-8 text-5xl md:text-7xl font-light text-white/20 uppercase tracking-[0.2em] font-serif mix-blend-overlay">Mission</h3>
                </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* Section 2 — Calming Phrase */}
      <section 
        ref={calmingSectionRef}
        onMouseMove={handleMouseMove}
        className="calming-section relative w-full h-[80vh] md:h-screen flex items-center justify-center bg-black py-20 md:py-24 z-20 overflow-hidden"
      >
        {/* Mouse Trail Images (Behind Text) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatePresence>
            {trail.map((img) => (
              <motion.img
                key={img.id}
                src={img.src}
                initial={{ opacity: 0, scale: 0.5, rotate: img.rotation, x: "-50%", y: "-50%" }}
                animate={{ opacity: 0.35, scale: 1, rotate: img.rotation, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-32 h-44 md:w-48 md:h-64 object-cover rounded-[2rem] shadow-2xl"
                style={{
                  left: img.x,
                  top: img.y,
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-12 max-w-4xl px-6 pointer-events-none">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-[0.15em] text-[#D8B48F] uppercase leading-relaxed flex flex-col gap-4">
            <span className="calming-word">RETURN</span>
            <span className="calming-word text-sm md:text-xl tracking-[0.3em] lowercase italic font-sans text-white/40">to</span>
            <span className="calming-word">ESSENCE</span>
          </h2>
          <div className="w-8 h-[1px] bg-[#D8B48F]/30 calming-word mt-4"></div>
          <div className="flex flex-col gap-4 text-[9px] md:text-xs tracking-[0.3em] text-[#D8B48F]/60 font-sans uppercase calming-word mt-2">
            <span>Clarity in Mind</span>
            <span>Balance in Body</span>
            <span>Stillness in Being</span>
          </div>
        </div>
      </section>

      {/* Section 3 — Structure/Institute (Sticky Sequence) */}
      <section className="structure-section relative w-full h-screen bg-black z-20 overflow-hidden flex flex-col justify-center items-center p-6 md:p-16">
        
        {/* Main Backgrounds */}
        <div className="absolute inset-0 z-0">
          <img src="/Peace/Peace -1.webp" alt="Dome 1" className="bg-img-1 absolute inset-0 w-full h-full object-cover opacity-30 sepia-[0.4]" />
          <img src="/Peace/Peace -2.webp" alt="Dome 2" className="bg-img-2 absolute inset-0 w-full h-full object-cover opacity-0 sepia-[0.4]" />
          <img src="/Peace/Peace -3.webp" alt="Dome 3" className="bg-img-3 absolute inset-0 w-full h-full object-cover opacity-0 sepia-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black"></div>
        </div>
        
        {/* Parallax Floating Image 1 (Left Box) */}
        <div className="float-img-1 absolute left-[-10%] md:left-8 bottom-4 md:bottom-12 w-48 h-64 md:w-[280px] md:h-[380px] z-10 hidden md:block overflow-hidden rounded-sm shadow-2xl">
           <img src="/Peace/Peace -4.webp" className="l-img-1 absolute inset-0 w-full h-full object-cover mix-blend-luminosity" />
           <img src="/Peace/Peace -5.webp" className="l-img-2 absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-0" />
           <img src="/Peace/Peace -1.webp" className="l-img-3 absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-0" />
        </div>

        {/* Parallax Floating Image 2 (Right Box) */}
        <div className="float-img-2 absolute right-[-5%] md:right-12 top-12 md:top-[15vh] w-40 h-56 md:w-[240px] md:h-[320px] z-10 hidden md:block overflow-hidden rounded-sm shadow-2xl">
           <img src="/Peace/Peace -2.webp" className="r-img-1 absolute inset-0 w-full h-full object-cover mix-blend-luminosity" />
           <img src="/Peace/Peace -3.webp" className="r-img-2 absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-0" />
           <img src="/Peace/Peace -4.webp" className="r-img-3 absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-0" />
        </div>

        {/* Foreground Content Strings */}
        <div className="relative z-20 w-full max-w-4xl flex items-center justify-center text-center h-[200px] mt-12 md:mt-0">
          
          <div className="structure-text-1 absolute flex flex-col items-center justify-center gap-8 w-full">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-[#D8B48F] uppercase">The Sanctuary</h3>
            <div className="w-12 h-[1px] bg-[#D8B48F]/40"></div>
            <p className="text-[10px] md:text-sm tracking-[0.15em] text-white/60 font-sans max-w-lg leading-loose uppercase">A harmonious convergence of ancient architectural wisdom.</p>
          </div>

          <div className="structure-text-2 absolute flex flex-col items-center justify-center gap-8 w-full opacity-0">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-[#D8B48F] uppercase">The Awakening</h3>
            <div className="w-12 h-[1px] bg-[#D8B48F]/40"></div>
            <p className="text-[10px] md:text-sm tracking-[0.15em] text-white/60 font-sans max-w-lg leading-loose uppercase">Modern therapeutic environments designed to naturally lower cortisol.</p>
          </div>

          <div className="structure-text-3 absolute flex flex-col items-center justify-center gap-8 w-full opacity-0">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-[#D8B48F] uppercase">The Connection</h3>
            <div className="w-12 h-[1px] bg-[#D8B48F]/40"></div>
            <p className="text-[10px] md:text-sm tracking-[0.15em] text-white/60 font-sans max-w-lg leading-loose uppercase">Awaken the spirit and reconnect with your inner stillness.</p>
          </div>

        </div>
      </section>

      {/* Section 4 — Seven Value Panels */}
      <section className="values-section relative w-full h-auto bg-black z-20 py-24 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 h-auto md:h-[55vh]">
          
          {[
            { word: "Presence", img: "/Peace/Peace -1.webp" },
            { word: "Harmony", img: "/Peace/Peace -2.webp" },
            { word: "Flow", img: "/Peace/Peace -3.webp" },
            { word: "Awakening", img: "/Peace/Peace -4.webp" },
            { word: "Connection", img: "/Home/Quantum Hero/Quantum Hero - 7.webp" },
            { word: "Evolution", img: "/Home/Quantum Hero/Quantum Hero - 8.webp" },
            { word: "Transcendence", img: "/Peace/Peace -7.webp" }
          ].map((panel, idx) => (
            <div key={idx} className="value-panel relative flex flex-col items-center justify-end h-[40vh] md:h-full overflow-hidden flex-1 hover:flex-[1.5] lg:hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group">
              <div className="absolute inset-[-15%] z-0 panel-bg">
                 <img src={panel.img} alt={panel.word} className="w-full h-full object-cover opacity-50 mix-blend-luminosity sepia-[0.3] group-hover:scale-[1.03] group-hover:opacity-100 group-hover:sepia-0 group-hover:mix-blend-normal transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10 opacity-100 group-hover:opacity-70 transition-opacity duration-700"></div>
              <span className="panel-text relative z-20 text-[#D8B48F] uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-sans opacity-60 group-hover:opacity-100 group-hover:scale-[1.15] transition-all duration-500 mb-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] whitespace-nowrap">
                {panel.word}
              </span>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
