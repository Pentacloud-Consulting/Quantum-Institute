"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Visions_And_missions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let currentRot = 0;
    let reqId: number;
    const render = () => {
      currentRot += 0.15;
      circlesRef.current.forEach(circle => {
        if (circle) circle.style.transform = `rotate(${currentRot}deg)`;
      });
      reqId = requestAnimationFrame(render);
    };
    reqId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(reqId);
  }, []);

  // Track scroll progress within this 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Step 1: 0 to 0.33 (Project Information)
  // Step 2: 0.33 to 0.66 (Visions)
  // Step 3: 0.66 to 1 (Missions)

  // Opacity & Translation for Left Content 1 (Project Info)
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const x1 = useTransform(scrollYProgress, [0.25, 0.33], ["0%", "-30%"]);
  const pointerEvents1 = useTransform(scrollYProgress, (val) => val < 0.33 ? "auto" : "none");

  // Opacity & Translation for Left Content 2 (Visions)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], ["30%", "0%", "0%", "-30%"]);
  const pointerEvents2 = useTransform(scrollYProgress, (val) => val >= 0.33 && val < 0.66 ? "auto" : "none");

  // Opacity & Translation for Left Content 3 (Missions)
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);
  const x3 = useTransform(scrollYProgress, [0.58, 0.66, 1], ["30%", "0%", "0%"]);
  const pointerEvents3 = useTransform(scrollYProgress, (val) => val >= 0.66 ? "auto" : "none");

  return (
    <div ref={containerRef} className="w-full h-[300svh] bg-white text-gray-900 relative">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex h-[100svh] sticky top-0">
        
        {/* Left Sticky Content */}
        <div className="w-full md:w-[50%] h-[100svh] relative flex flex-col justify-center overflow-hidden z-20">
          
          {/* Step 1 Content */}
          <motion.div 
            style={{ opacity: opacity1, x: x1, pointerEvents: pointerEvents1 as any }} 
            className="absolute inset-0 flex flex-col justify-center pr-8 bg-white z-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light leading-[1.2] tracking-tight text-gray-900">
                <span className="block text-gray-400 mb-4 text-sm font-medium tracking-[0.2em] uppercase">Overview</span>
                {"Guiding our journey with a "}
                <br className="hidden md:block" />
                {"clear and powerful "}
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 font-bold mt-2 inline-block drop-shadow-sm">Vision and Mission.</span>
              </h2>
            </div>
            <div className="mt-10 border-l-4 border-orange-500 pl-6 py-2 bg-gradient-to-r from-orange-50 to-transparent rounded-r-lg">
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed max-w-sm">
                We are committed to excellence, innovation, and integrity. We&apos;ll show you how our core principles shape every decision we make, so you can simply <span className="text-orange-500 font-medium">trust the process.</span>
              </p>
            </div>
          </motion.div>

          {/* Step 2 Content (VISIONS) */}
          <motion.div 
            style={{ opacity: opacity2, x: x2, pointerEvents: pointerEvents2 as any }} 
            className="absolute inset-0 flex flex-col justify-center pr-8 bg-white z-20"
          >
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-[0.2em]">Elevated</div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-4 drop-shadow-sm">
                VISIONS
              </h2>
              <p className="text-xl md:text-2xl font-light text-orange-500 mb-8 italic">
                Where minds collect & possibilities connect.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10">
              <div className="group border-l-2 border-orange-200 pl-4 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Minds</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Scientists, Researchers, Academics, Students, Seekers, Patients</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-4 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Collect</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Gather, Collaborate, Intersect</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-4 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Possibilities</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Advancement, Breakthroughs, Recovery, Growth</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-4 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Connect</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Understand, Co-create, Meet, Accomplish</p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 Content (MISSIONS) */}
          <motion.div 
            style={{ opacity: opacity3, x: x3, pointerEvents: pointerEvents3 as any }} 
            className="absolute inset-0 flex flex-col justify-center pr-8 bg-white z-30"
          >
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-[0.2em]">Elevated</div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-4 drop-shadow-sm">
                MISSIONS
              </h2>
              <p className="text-lg md:text-xl font-light text-orange-500 mb-8 leading-relaxed italic border-l-4 border-orange-500 pl-4 py-1">
                Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              <div className="group border-l-2 border-orange-200 pl-4 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Minds</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Scientists, Researchers, Academics, Students, Seekers, Patients</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-4 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Quantum Toolkit</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Science, Research, Journey</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-4 hover:border-orange-500 transition-colors duration-300 md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Ecosystem</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Network, Coherence, Interconnected, Rooted, Natural</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Static Logo Container */}
        <div className="hidden md:flex w-full md:w-[50%] h-full items-center justify-center pl-4 lg:pl-12 z-0">
          
          {/* Big rotating circle collage */}
          <div className="relative w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] xl:w-[520px] xl:h-[520px] shrink-0">
             <div 
               ref={el => { circlesRef.current[0] = el; }} 
               className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform"
             >
                <img src="/OG IMAGES/q1.png" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
                <img src="/OG IMAGES/q2.png" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
                <img src="/OG IMAGES/q9.png" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
                <img src="/OG IMAGES/q5.png" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
                
                <div className="absolute inset-0 rounded-full border border-orange-500/20 z-20 m-4 lg:m-5 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-full border border-orange-200/30 z-20 m-2 lg:m-3 pointer-events-none"></div>
             </div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[6px] lg:border-[8px] border-white shadow-2xl z-10">
                <video src="/Videos/Footer Video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 pointer-events-none" />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay pointer-events-none"></div>
             </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Visions_And_missions;
