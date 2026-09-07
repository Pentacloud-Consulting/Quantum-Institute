"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const QuantumInstitute = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white text-[#1e293b] py-16 md:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fff7ed] to-white z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-16 md:gap-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#ea580c] font-semibold mb-3"
          >
            The Quantum Institute
          </motion.h2>
        </div>
        
        {/* Row 1: Text + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl leading-relaxed md:leading-[1.7] font-serif text-[#334155]">
              The Quantum Institute’s vision is to bridge science and spirituality with the goal of elevating our human experience. Quantum science has emerged as the means for exploring many unanswered questions about our world. Standing on the pillars of Healing, Education, Research and Exploration, the Quantum Institute is designed to inspire a profound sense of belonging for all those seeking knowledge and wisdom: scientists, students, inventors, practitioners, educators and those in search of healing.
            </p>
          </motion.div>

          <motion.div 
            style={{ y: y1 }}
            className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/Home images/AGORA.png"
              alt="Quantum Institute Agora"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>
        
        {/* Row 2: Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center flex-col-reverse md:flex-row">
          <motion.div 
            style={{ y: y2 }}
            className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl md:order-1 order-2"
          >
            <Image
              src="/Home images/ELYSIUM.png"
              alt="Quantum Institute Elysium"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center md:order-2 order-1"
          >
            <p className="text-lg md:text-xl leading-relaxed md:leading-[1.7] font-serif text-[#334155]">
              By empowering minds to connect, explore, engage and embark on personal and professional journeys, with quantum as the thread, we will weave the fabric of understanding ourselves and our world, with the goal of uplifting humanity and prioritizing the health of humankind and our planet. The Institute’s transcendental architecture, inspired by the sacred mathematics of geometry, identifies this fertile oasis of knowledge and well-being as a beacon for a new Golden Age, uniting cultures and minds across the world. A new renaissance unfolds where innovation and spirit evolve in tandem, guiding us toward a more conscious, connected, and elevated future.
            </p>
          </motion.div>
        </div>

        {/* Section 2: Quote / Mission block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative mt-8 py-10 px-6 md:py-12 md:px-16 bg-[#f8fafc]/80 backdrop-blur-md border border-[#e2e8f0] rounded-2xl shadow-[0_10px_40px_-10px_rgba(234,88,12,0.1)] overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ea580c]/40 to-transparent"></div>
          
          <div className="flex flex-col gap-6 text-lg md:text-2xl font-serif leading-snug italic text-[#1e293b] text-center relative z-10">
            <p>
              "We will break the boundaries of what can be achieved through the natural application of theoretical sciences."
            </p>
            <p>
              "We will revolutionize our understanding of health, merging rigorous research with ancient wisdom, to co-create new pathways to well-being."
            </p>
            <p>
              "We will promote a quantum understanding of the human experience in order to unlock new frontiers."
            </p>
            
            <div className="mt-8 pt-8 border-t border-[#ea580c]/10 not-italic">
              <span className="block text-xl md:text-3xl font-serif text-[#ea580c] mb-3 drop-shadow-sm">
                Welcome to the Quantum Institute,<br/>the agorà of wisdom.
              </span>
              <span className="block text-xs md:text-sm font-sans tracking-widest text-[#64748b] uppercase">
                Where minds collect and possibilities connect
              </span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default QuantumInstitute;
