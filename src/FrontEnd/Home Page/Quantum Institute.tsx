"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const RotatingCircle = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let reqId: number;
    let currentRot = 0;
    const render = () => {
      currentRot += 0.15;
      if (circleRef.current) {
         circleRef.current.style.transform = `rotate(${currentRot}deg)`;
      }
      reqId = requestAnimationFrame(render);
    };
    reqId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(reqId);
  }, []);

  return (
    <div className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[420px] xl:h-[420px] relative shrink-0 mx-auto">
      <div ref={circleRef} className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform">
        <img src="/OG%20IMAGES/q1.png" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
        <img src="/OG%20IMAGES/q2.png" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
        <img src="/OG%20IMAGES/q9.png" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
        <img src="/OG%20IMAGES/q5.png" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
        <div className="absolute inset-0 rounded-full border border-[#ea580c]/20 z-20 m-4 md:m-6 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-full border border-[#f8fafc]/50 z-20 m-1.5 md:m-2 pointer-events-none"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[4px] md:border-[6px] border-[#f8fafc] shadow-2xl z-10">
        <video src="/Videos/Footer Video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 pointer-events-none" />
        <div className="absolute inset-0 bg-[#ea580c]/10 mix-blend-overlay pointer-events-none"></div>
      </div>
    </div>
  );
};

const QuantumInstitute = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image transitions based on scroll progress of the container
  // 0 to 0.4: Image 1 is visible.
  // 0.4 to 0.6: Crossfade.
  // 0.6 to 1: Image 2 is visible.
  const img1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  const img1Scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.05]);

  const img2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]);
  const img2Scale = useTransform(scrollYProgress, [0.45, 1], [1.05, 1]);

  // Text transitions (strict non-overlap)
  const text1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.5], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.45, 0.5], [0, 0, -30]);
  const text1Display = useTransform(scrollYProgress, (v) => v > 0.5 ? "none" : "flex");

  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.55, 1], [0, 1, 1]);
  const text2Y = useTransform(scrollYProgress, [0.5, 0.55, 1], [30, 0, 0]);
  const text2Display = useTransform(scrollYProgress, (v) => v < 0.5 ? "none" : "flex");

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
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-24">
            
            {/* Left Side: Images */}
            <div className="w-full md:w-[50%] h-[40vh] md:h-[65vh] relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shrink-0">
              {/* Image 1 */}
              <motion.div 
                style={{ opacity: img1Opacity, scale: img1Scale }}
                className="absolute inset-0 w-full h-full origin-center"
              >
                <Image
                  src="/Home images/AGORA.png"
                  alt="Quantum Institute Agora"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
              
              {/* Image 2 */}
              <motion.div 
                style={{ opacity: img2Opacity, scale: img2Scale }}
                className="absolute inset-0 w-full h-full origin-center"
              >
                <Image
                  src="/Home images/ELYSIUM.png"
                  alt="Quantum Institute Elysium"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>

            {/* Right Side: Texts */}
            <div className="w-full md:w-[50%] relative h-[45vh] md:h-[65vh] flex items-center">
              
              {/* Text Block 1 */}
              <motion.div 
                style={{ opacity: text1Opacity, y: text1Y, display: text1Display }}
                className="absolute inset-0 flex-col justify-center"
              >
                <div className="w-12 h-[2px] bg-[#ea580c] mb-6 md:mb-8"></div>
                 <p className="text-xl md:text-3xl leading-[1.6] md:leading-[1.7] font-display font-normal text-[#1e293b] tracking-wide">
                  The Quantum Institute's vision is to <span className="text-[#ea580c] font-normal italic">bridge science and spirituality</span> with the goal of elevating our human experience. 
                </p>
                <p className="text-base md:text-lg leading-[1.8] font-display text-[#64748b] mt-6 md:mt-8">
                  Quantum science has emerged as the means for exploring many unanswered questions about our world. Standing on the pillars of Healing, Education, Research and Exploration, the Quantum Institute is designed to inspire a profound sense of belonging for all those seeking knowledge and wisdom: scientists, students, inventors, practitioners, educators and those in search of healing.
                </p>
              </motion.div>

              {/* Text Block 2 */}
              <motion.div 
                style={{ opacity: text2Opacity, y: text2Y, display: text2Display }}
                className="absolute inset-0 flex-col justify-center"
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

            {/* Center Column: Circle */}
            <div className="flex justify-center items-center py-4 lg:py-0 pointer-events-auto">
               <RotatingCircle />
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
