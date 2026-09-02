"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Visions_And_missions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex h-full">
        
        {/* Left Sticky Content */}
        <div className="w-full md:w-[45%] h-[100svh] sticky top-0 flex flex-col justify-center overflow-hidden z-20">
          
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
              <h2 className="text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-4 drop-shadow-sm">
                VISIONS
              </h2>
              <p className="text-2xl font-light text-orange-500 mb-10 italic">
                Where minds collect & possibilities connect.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div className="group border-l-2 border-orange-200 pl-5 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Minds</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Scientists, Researchers, Academics, Students, Seekers, Patients</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-5 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Collect</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Gather, Collaborate, Intersect</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-5 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Possibilities</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Advancement, Breakthroughs, Recovery, Growth</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-5 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Connect</h3>
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
              <h2 className="text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-4 drop-shadow-sm">
                MISSIONS
              </h2>
              <p className="text-xl font-light text-orange-500 mb-10 leading-relaxed italic border-l-4 border-orange-500 pl-4 py-1">
                Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              <div className="group border-l-2 border-orange-200 pl-5 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Minds</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Scientists, Researchers, Academics, Students, Seekers, Patients</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-5 hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Quantum Toolkit</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Science, Research, Journey</p>
              </div>
              <div className="group border-l-2 border-orange-200 pl-5 hover:border-orange-500 transition-colors duration-300 md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Ecosystem</h3>
                <p className="text-gray-500 font-light text-sm mt-2 leading-relaxed">Network, Coherence, Interconnected, Rooted, Natural</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Scrollable Timeline Content */}
        <div className="w-full md:w-[55%] h-full flex flex-col relative">
          
          {/* Continuous Vertical Line */}
          <div className="absolute left-[55%] top-[5%] bottom-[5%] w-[1px] bg-orange-200 hidden md:block z-0" />

          {/* Section 1 */}
          <div className="snap-section h-[100svh] relative flex items-center justify-center z-10">
            <div className="relative flex w-full items-center">
              <div className="w-[55%] flex justify-end pr-8 items-center relative gap-6">
                 <div className="text-right shrink-0">
                   <div className="text-sm text-orange-500 mb-1">Our Foundation</div>
                   <div className="text-2xl font-semibold">Values</div>
                 </div>
              </div>
              <div className="absolute left-[55%] -translate-x-1/2 w-[14px] h-[14px] bg-orange-500 rounded-full hidden md:block shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
              <div className="w-[45%] pl-10 flex items-center">
                 <div className="relative hidden md:block w-48 h-32 xl:w-64 xl:h-40 shadow-lg">
                   <Image src="/OG IMAGES/q2.png" alt="Project Info" fill className="object-cover rounded opacity-90 hover:opacity-100 transition-opacity" />
                 </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="snap-section h-[100svh] relative flex items-center justify-center z-10">
            <div className="relative flex w-full items-center">
              <div className="w-[55%] pr-8 flex justify-end items-center relative">
                 <div className="relative hidden md:block w-48 h-32 xl:w-64 xl:h-40 shadow-xl">
                   <Image src="/OG IMAGES/q4.png" alt="Visions" fill className="object-cover rounded" />
                 </div>
              </div>
              <div className="absolute left-[55%] -translate-x-1/2 w-[14px] h-[14px] bg-orange-500 rounded-full hidden md:block shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
              <div className="w-[45%] pl-10 flex items-center relative gap-6">
                 <div className="text-left shrink-0">
                   <div className="text-sm text-orange-500 mb-1">Our Goal</div>
                   <div className="text-2xl font-semibold">Vision</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="snap-section h-[100svh] relative flex items-center justify-center z-10">
            <div className="relative flex w-full items-center">
              <div className="w-[55%] flex justify-end pr-8 items-center relative gap-6">
                 <div className="text-right shrink-0">
                   <div className="text-sm text-orange-500 mb-1">Our Path</div>
                   <div className="text-2xl font-semibold">Mission</div>
                 </div>
              </div>
              <div className="absolute left-[55%] -translate-x-1/2 w-[14px] h-[14px] bg-orange-500 rounded-full hidden md:block shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
              <div className="w-[45%] pl-10 flex items-center relative">
                 <div className="relative hidden md:block w-48 h-32 xl:w-64 xl:h-40 shadow-lg">
                   <Image src="/OG IMAGES/q8.png" alt="Missions" fill className="object-cover rounded" />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Visions_And_missions;
