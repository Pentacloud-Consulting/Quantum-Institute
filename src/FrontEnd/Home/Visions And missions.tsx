"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contentData = [
  {
    subtitle: "ELEVATED",
    title: "VISION",
    heading: "Expanding the boundaries of human potential.",
    desc: "A new approach to learning, consciousness and wellbeing — where scientific discovery and human experience come together to create meaningful transformation."
  },
  {
    subtitle: "ELEVATED",
    title: "MISSION",
    heading: "Turning knowledge into transformation.",
    desc: "We create immersive environments where research, education, wellness and human connection work together to unlock new possibilities."
  },
  {
    subtitle: "ELEVATED",
    title: "RESEARCH",
    heading: "Exploring what lies beyond the known.",
    desc: "A multidisciplinary ecosystem connecting emerging science, consciousness, technology and human potential."
  },
  {
    subtitle: "ELEVATED",
    title: "TRANSFORMATION",
    heading: "Catalyzing profound shifts in human experience.",
    desc: "Through the integration of ancient wisdom and quantum science, we facilitate lasting evolution of the mind, body, and spirit."
  }
];

const VisionsAndMissions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const circleContainerRef = useRef<HTMLDivElement>(null);
  const circleRotRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleEntranceRef = useRef<HTMLDivElement>(null);
  const textEntranceRef = useRef<HTMLDivElement>(null);
  
  // Independent rotation state
  const rotState = useRef({ speed: 1 });
  const currentRot = useRef(0);
  const reqRef = useRef<number | null>(null);

  // Continuous rotation loop
  useEffect(() => {
    const render = () => {
      currentRot.current += rotState.current.speed * 0.15; // Base idle speed
      if (circleRotRef.current) {
        gsap.set(circleRotRef.current, { rotation: currentRot.current });
      }
      reqRef.current = requestAnimationFrame(render);
    };
    reqRef.current = requestAnimationFrame(render);
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  // GSAP ScrollTrigger Timeline
  useEffect(() => {
    const mm = gsap.matchMedia(sectionRef);

    mm.add({
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)"
      }, (context) => {
        const { isDesktop } = context.conditions as any;
        
        // Initial state
        if (isDesktop) {
          gsap.set(circleContainerRef.current, { x: "-26vw" }); // Fully visible on left side
        } else {
          gsap.set(circleContainerRef.current, { x: "0vw", y: "-10vh" }); // Centered top on mobile
        }

        gsap.set(textRefs.current[0], { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
        gsap.set(textRefs.current[1], { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" });

        // 1. Entrance Animation Timeline (Triggers when entering section)
        const entranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // Start early
            toggleActions: "play reverse play reverse", // Animate from both top and bottom
          }
        });

        // Circle container slides in from LEFT
        entranceTl.fromTo(circleEntranceRef.current,
          { x: "-15vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1.2, ease: "power3.out" },
          0
        )
        // Text container slides in from RIGHT
        .fromTo(textEntranceRef.current,
          { x: "15vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1.2, ease: "power3.out" },
          0.2
        );

        // 2. Scrub Timeline (Triggers when pinned)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%", // Shorter scroll distance for faster transition
            pin: true,
            scrub: 0.3, // Much faster response time to scroll (snappier)
          }
        });

        // Single Transition: Vision -> Mission
        const startTime = 0;
        
        // 1. Slow down rotation and reverse it over 2 seconds
        tl.to(rotState.current, { speed: -1, duration: 2, ease: "power2.inOut" }, startTime);
        
        if (isDesktop) {
          // Slide directly from left to right side in one smooth motion
          tl.to(circleContainerRef.current, { x: "26vw", duration: 2, ease: "power2.inOut" }, startTime);
        }

        // 2. Crossfade editorial text
        tl.to(textRefs.current[0], { opacity: 0, y: -40, scale: 0.95, filter: "blur(4px)", duration: 0.8, ease: "power2.inOut" }, startTime)
          .to(textRefs.current[1], { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, startTime + 0.5);

        // 3. Idle reading time (1 second gap in timeline)
        tl.to({}, { duration: 1 }, startTime + 2);

      });

    return () => mm.revert();
  }, []);

  return (
    <div className="w-full bg-[#F5F3EE]">
      <section ref={sectionRef} className="relative w-full h-[100vh] min-h-[700px] border-b border-zinc-200 overflow-hidden font-sans">
      
      {/* Background Subtle Grain/Texture (Optional minimal feel) */}
      <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none mix-blend-multiply">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover grayscale" alt="" />
      </div>

      {/* Circular Image Composition */}
      <div ref={circleEntranceRef} className="absolute inset-0 flex items-start lg:items-center justify-center pt-24 lg:pt-0 z-10 pointer-events-none opacity-0 will-change-transform">
        <div ref={circleContainerRef} className="relative w-[75vw] md:w-[500px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] aspect-square rounded-full will-change-transform">
          
          <div ref={circleRotRef} className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform">
            
            {/* The 4 segmented architectural/wellness images */}
            <img src="/Peace/Peace -1.webp" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
            <img src="/Peace/Peace -2.webp" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
            <img src="/Peace/Peace -3.webp" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
            <img src="/Peace/Peace -4.webp" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
            
            {/* Subtle aesthetic rings */}
            <div className="absolute inset-0 rounded-full border border-[#D15000]/20 z-20 m-6 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border border-[#F5F3EE]/30 z-20 m-2 pointer-events-none"></div>
          </div>
          
          {/* Central Quantum Visual Core (Now un-rotated) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[6px] border-[#F5F3EE] shadow-2xl z-10">
            <video 
              src="/Videos/PROPOSITION Video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              className="w-full h-full object-cover scale-110 pointer-events-none" 
            />
            <div className="absolute inset-0 bg-[#D15000]/10 mix-blend-overlay pointer-events-none"></div>
          </div>
          
        </div>
      </div>

      {/* Editorial Content Container */}
      <div className="absolute bottom-0 lg:top-0 left-0 w-full h-[55vh] lg:h-full z-20 pointer-events-none">
        <div ref={textEntranceRef} className="absolute inset-0 w-full h-full opacity-0 will-change-transform">
          {/* Vision State */}
        <div 
          ref={el => { textRefs.current[0] = el; }} 
          className="absolute right-0 w-full lg:w-[55%] top-[50%] -translate-y-1/2 flex flex-col pointer-events-auto will-change-transform px-6 sm:px-12 lg:px-16 xl:px-24"
        >
          <h3 className="text-[#D15000] font-medium text-2xl lg:text-3xl tracking-wide mb-2 flex items-center gap-4">
            Elevated
          </h3>
          <h2 className="text-[#000000] font-black text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[0.9] tracking-tighter uppercase mb-6 drop-shadow-sm">
            VISIONS
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-[#D15000]"></div>
          </div>
          
          <p className="text-zinc-500 leading-relaxed text-lg mb-8 font-light">
            Where minds collect & possibilities connect.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Minds</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Scientists, Researchers, Academics, Students, Seekers, Patients</span>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Collect</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Gather, Collaborate, Intersect</span>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Possibilities</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Advancement, Breakthroughs, Recovery, Growth</span>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Connect</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Understand, Co-create, Meet, Accomplish</span>
            </div>
          </div>
        </div>

        {/* Mission State */}
        <div 
          ref={el => { textRefs.current[1] = el; }} 
          className="absolute left-0 w-full lg:w-[55%] top-[50%] -translate-y-1/2 flex flex-col pointer-events-auto will-change-transform opacity-0 px-6 sm:px-12 lg:px-16 xl:px-24"
        >
          <h3 className="text-[#D15000] font-medium text-2xl lg:text-3xl tracking-wide mb-2 flex items-center gap-4">
            Elevated
          </h3>
          <h2 className="text-[#000000] font-black text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[0.9] tracking-tighter uppercase mb-6 drop-shadow-sm">
            MISSIONS
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-[#D15000]"></div>
          </div>
          
          <p className="text-zinc-500 leading-relaxed text-lg mb-8 font-light max-w-xl">
            Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Minds</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Scientists, Researchers, Academics, Students, Seekers, Patients</span>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Quantum Toolkit</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Science, Research, Journey</span>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md sm:col-span-2">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Ecosystem</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Network, Coherence, Interconnected, Rooted, Natural</span>
            </div>
          </div>
        </div>
        </div>

      </div>

      </section>
    </div>
  );
};

export default VisionsAndMissions;
