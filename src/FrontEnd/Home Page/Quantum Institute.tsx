"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const StaggeredCarousel = () => {
  const col1Images = [
    "/Qunatum%20images/Aloe%20Vera%20and%20the%20Golden%20spira.png",
    "/Qunatum%20images/Arabia’s%20natural%20landscape.png",
    "/Qunatum%20images/atmosphere%20inside%20the%20Canyon.png",
    "/Qunatum%20images/Canyon%20rock,%20passage%20wall%20skylight.png",
    "/Qunatum%20images/Desert-dunes%20wind%20sun%20and%20sand.png"
  ];
  const col2Images = [
    "/Qunatum%20images/Desired%20Natural%20Environment.png",
    "/Qunatum%20images/Heet%20Cave,%20Saudi%20Arabia.png",
    "/Qunatum%20images/Night%20sky%20stars%20cool%20breeze%20the%20universe.png",
    "/Qunatum%20images/Oasis%20water%20vegetation%20green%20and%20shade.png",
    "/Qunatum%20images/Upper%20Antelope%20Canyon%20in%20Arizona,%20USA.png"
  ];

  return (
    <div className="w-[280px] h-[350px] lg:w-[320px] lg:h-[400px] xl:w-[380px] xl:h-[480px] relative shrink-0 mx-auto flex gap-4 overflow-hidden rounded-[2rem] border border-[#ea580c]/10 shadow-[0_0_80px_rgba(234,88,12,0.05)] bg-white/50 p-4">
      
      {/* Overlays for smooth fading at top and bottom */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#f8fafc] to-transparent z-20 pointer-events-none rounded-t-[2rem]"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8fafc] to-transparent z-20 pointer-events-none rounded-b-[2rem]"></div>

      {/* Column 1 - Scrolls Up */}
      <div className="w-1/2 h-full relative">
        <motion.div 
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-col absolute w-full will-change-transform"
        >
          {/* Set 1 */}
          <div className="flex flex-col gap-4 pb-4">
            {col1Images.map((src, i) => (
              <div key={`col1-orig-${i}`} className="w-full relative rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: i % 2 === 0 ? '4/5' : '1/1' }}>
                <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
          {/* Set 2 (Duplicate) */}
          <div className="flex flex-col gap-4 pb-4">
            {col1Images.map((src, i) => (
              <div key={`col1-dup-${i}`} className="w-full relative rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: i % 2 === 0 ? '4/5' : '1/1' }}>
                <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Column 2 - Scrolls Down */}
      <div className="w-1/2 h-full relative">
        <motion.div 
          animate={{ y: ["-50%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-col absolute w-full will-change-transform"
        >
          {/* Set 1 */}
          <div className="flex flex-col gap-4 pb-4">
            {col2Images.map((src, i) => (
              <div key={`col2-orig-${i}`} className="w-full relative rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: i % 2 === 0 ? '1/1' : '4/5' }}>
                <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
          {/* Set 2 (Duplicate) */}
          <div className="flex flex-col gap-4 pb-4">
            {col2Images.map((src, i) => (
              <div key={`col2-dup-${i}`} className="w-full relative rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: i % 2 === 0 ? '1/1' : '4/5' }}>
                <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

const CrossfadingCircle = ({ progress }: { progress: any }) => {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let reqId: number;
    let currentRot = 0;
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

  const opacity1 = useTransform(progress, [0, 0.45, 0.55], [1, 1, 0]);
  const opacity2 = useTransform(progress, [0.45, 0.55, 1], [0, 1, 1]);

  return (
    <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] relative shrink-0 mx-auto">
      {/* State 1 */}
      <motion.div style={{ opacity: opacity1 }} className="absolute inset-0">
        <div ref={el => { circlesRef.current[0] = el; }} className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform">
          <img src="/Qunatum%20images/Night%20sky%20stars%20cool%20breeze%20the%20universe.png" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
          <img src="/Qunatum%20images/Heet%20Cave,%20Saudi%20Arabia.png" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
          <img src="/Qunatum%20images/atmosphere%20inside%20the%20Canyon.png" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
          <img src="/Qunatum%20images/Canyon%20rock,%20passage%20wall%20skylight.png" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
          <div className="absolute inset-0 rounded-full border border-[#D15000]/20 z-20 m-6 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-[#F5F3EE]/30 z-20 m-2 pointer-events-none"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[6px] border-[#F5F3EE] shadow-2xl z-10">
          <video src="/Videos/qt-inside-view.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 pointer-events-none" />
          <div className="absolute inset-0 bg-[#D15000]/10 mix-blend-overlay pointer-events-none"></div>
        </div>
      </motion.div>

      {/* State 2 */}
      <motion.div style={{ opacity: opacity2 }} className="absolute inset-0">
        <div ref={el => { circlesRef.current[1] = el; }} className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform">
          <img src="/Qunatum%20images/Oasis%20water%20vegetation%20green%20and%20shade.png" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
          <img src="/Qunatum%20images/atmosphere%20inside%20the%20Canyon.png" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
          <img src="/Qunatum%20images/Upper%20Antelope%20Canyon%20in%20Arizona,%20USA.png" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
          <img src="/Qunatum%20images/Aloe%20Vera%20and%20the%20Golden%20spira.png" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
          <div className="absolute inset-0 rounded-full border border-[#D15000]/20 z-20 m-6 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-[#F5F3EE]/30 z-20 m-2 pointer-events-none"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[6px] border-[#F5F3EE] shadow-2xl z-10">
          <video src="/Videos/qt-inside-view.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 pointer-events-none" />
          <div className="absolute inset-0 bg-[#D15000]/10 mix-blend-overlay pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
};

const QuantumInstitute = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Crossfading timeline aligned with scroll
  const text1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const text1X = useTransform(scrollYProgress, [0, 0.4, 0.5], ["0%", "0%", "-20%"]);
  const text1Display = useTransform(scrollYProgress, (v) => v > 0.5 ? "none" : "flex");

  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);
  const text2X = useTransform(scrollYProgress, [0.5, 0.6, 1], ["20%", "0%", "0%"]);
  const text2Display = useTransform(scrollYProgress, (v) => v < 0.5 ? "none" : "flex");

  const circleLeft = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["50%", "50%", "0%", "0%"]);

  return (
    <section className="relative w-full bg-white text-[#1e293b]">
      
      {/* Header section (normal scroll) */}
      <div className="w-full pt-16 md:pt-24 pb-8 relative z-10 bg-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#ea580c] font-heading font-medium"
          >
            The Quantum Institute
          </motion.h2>
        </div>
      </div>

      {/* Sticky Scroll Section Container */}
      <div ref={containerRef} className="relative h-[200vh] w-full">
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fff7ed]/50 to-white z-0 pointer-events-none"></div>

        {/* Sticky wrapper that stays pinned to viewport */}
        <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden z-10">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:block h-auto md:h-[65vh] relative">
            
            {/* Circle Wrapper (Starts Right, Moves Left) */}
            <motion.div 
              style={{ '--circle-left': circleLeft } as any}
              className="w-full md:w-[50%] h-[40vh] md:h-full relative md:absolute md:top-0 md:[left:var(--circle-left)] flex justify-center items-center z-20 shrink-0"
            >
               <CrossfadingCircle progress={scrollYProgress} />
            </motion.div>

            {/* Texts Container */}
            <div className="w-full md:w-full h-[45vh] md:h-full relative flex items-center mt-8 md:mt-0">
              
              {/* Text Block 1 - Left Side */}
              <motion.div 
                style={{ opacity: text1Opacity, x: text1X, display: text1Display }}
                className="absolute inset-0 md:w-[50%] md:h-full flex-col justify-center md:pr-8 lg:pr-16 pointer-events-auto z-10"
              >
                <div className="w-12 h-[2px] bg-[#ea580c] mb-6 md:mb-8"></div>
                 <p className="text-xl md:text-3xl leading-[1.6] md:leading-[1.7] font-display font-normal text-[#1e293b] tracking-wide">
                  The Quantum Institute's vision is to <span className="text-[#ea580c] font-normal italic">bridge science and spirituality</span> with the goal of elevating our human experience. 
                </p>
                <p className="text-base md:text-lg leading-[1.8] font-display text-[#64748b] mt-6 md:mt-8">
                  Quantum science has emerged as the means for exploring many unanswered questions about our world. Standing on the pillars of Healing, Education, Research and Exploration, the Quantum Institute is designed to inspire a profound sense of belonging for all those seeking knowledge and wisdom: scientists, students, inventors, practitioners, educators and those in search of healing.
                </p>
              </motion.div>

              {/* Text Block 2 - Right Side */}
              <motion.div 
                style={{ opacity: text2Opacity, x: text2X, display: text2Display }}
                className="absolute inset-0 md:left-auto md:right-0 md:w-[50%] md:h-full flex-col justify-center md:pl-8 lg:pl-16 pointer-events-auto z-10"
              >
                <div className="w-12 h-[2px] bg-[#ea580c] mb-6 md:mb-8"></div>
                <p className="text-xl md:text-3xl leading-[1.6] md:leading-[1.7] font-display font-normal text-[#1e293b] tracking-wide">
                  By empowering minds to connect, explore, and embark on journeys, we will weave the fabric of <span className="text-[#ea580c] font-normal italic">understanding ourselves</span>.
                </p>
                <p className="text-base md:text-lg leading-[1.8] font-display text-[#64748b] mt-6 md:mt-8">
                  The Institute’s transcendental architecture, inspired by the sacred mathematics of geometry, identifies this fertile oasis of knowledge and well-being as a beacon for a new Golden Age, uniting cultures and minds across the world. A new renaissance unfolds where innovation and spirit evolve in tandem, guiding us toward a more conscious, connected, and elevated future.
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </div>

      {/* Section 2: Quote / Mission block (Center Circle Layout) */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-8 py-10 md:py-16 bg-white overflow-hidden">
        
        {/* Container */}
        <div className="relative w-full bg-[#f8fafc]/80 backdrop-blur-md border border-[#e2e8f0] rounded-3xl shadow-[0_10px_40px_-10px_rgba(234,88,12,0.1)] py-12 px-6 lg:px-12">
          
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ea580c]/40 to-transparent"></div>
          
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center">
            
            {/* Left Column (Points 1 & 3) */}
            <div className="flex flex-col gap-10 lg:gap-24 text-center lg:text-right w-full lg:pr-4">
              
              {/* Point 1: Top Left */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                 <p className="text-sm md:text-base xl:text-lg font-display italic text-[#1e293b] leading-relaxed">
                  "We will break the boundaries of what can be achieved through the natural application of theoretical sciences."
                </p>
              </motion.div>

              {/* Point 3: Bottom Left */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <p className="text-sm md:text-base xl:text-lg font-display italic text-[#1e293b] leading-relaxed">
                  "We will promote a quantum understanding of the human experience in order to unlock new frontiers."
                </p>
              </motion.div>

            </div>

            {/* Center Column: Carousel */}
            <div className="flex justify-center items-center py-4 lg:py-0 pointer-events-auto">
               <StaggeredCarousel />
            </div>

            {/* Right Column (Points 2 & 4) */}
            <div className="flex flex-col gap-10 lg:gap-24 text-center lg:text-left w-full lg:pl-4">
              
              {/* Point 2: Top Right */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <p className="text-sm md:text-base xl:text-lg font-display italic text-[#1e293b] leading-relaxed">
                  "We will revolutionize our understanding of health, merging rigorous research with ancient wisdom, to co-create new pathways to well-being."
                </p>
              </motion.div>

              {/* Point 4: Bottom Right (Welcome Text) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="pt-4 lg:pt-6 border-t border-[#ea580c]/20 inline-block lg:block">
                  <span className="block text-lg md:text-xl xl:text-2xl font-display text-[#ea580c] mb-2 drop-shadow-sm">
                    Welcome to the Quantum Institute,<br className="hidden xl:block"/>the agorà of wisdom.
                  </span>
                  <span className="block text-[10px] md:text-xs font-heading font-medium tracking-[0.2em] text-[#64748b] uppercase">
                    Where minds collect and possibilities connect
                  </span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default QuantumInstitute;
