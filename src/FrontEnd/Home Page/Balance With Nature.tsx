"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const data = [
  {
    subtitle: "UNDERSTANDING THE CONTEXT",
    text: "Appreciating the natural richness and diversity is foundational to designing spaces that harmonize with the environment. This involves a thoughtful reflection on material choices that align with nature, fostering a sense of connection and sustainability. By leveraging vegetation and natural elements such as water and air, architecture can create environments that shield inhabitants from extreme conditions while enhancing their well-being.",
    images: [
      "/Qunatum images/Desert-dunes wind sun and sand.png",
      "/Qunatum images/Oasis water vegetation green and shade.png"
    ]
  },
  {
    subtitle: "REFLECTING THE NATURAL ENVIRONMENT THROUGH DESIGN",
    text: "Architectural design can mirror the beauty and functionality of natural landscapes, drawing inspiration from canyons, oases, and other natural formations. This approach not only integrates seamlessly with surroundings but also supports ecological balance.",
    images: [
      "/Qunatum images/Canyon rock, passage wall skylight.png"
    ]
  },
  {
    subtitle: "USING FORMS FROM NATURE IN ARCHITECTURE",
    text: "Incorporating forms derived from nature strengthens the relationship between built environments and their surroundings. Shapes inspired by natural elements - like flowing lines, organic curves, and bio-mimetic structures - blend architecture with the inherent patterns and aesthetics found in the natural world.",
    images: [
      "/Qunatum images/Aloe Vera and the Golden spira.png"
    ]
  },
  {
    subtitle: "BEING ONE WITH NATURE FOR WELL-BEING",
    text: "“People possess an inherent need to affiliate with nature in the built environment.” (Kellert, S.; Heerwagen, H.; Mador, M. Biphilic Design: The Theory, Science, and Practice of Bringing Buildings to Life. 2008.) Recognizing the healing powers of natural energy is essential for improving wellbeing. Designing spaces that prioritize this connection fosters a sense of tranquility and rejuvenation, promoting a holistic approach to architecture that benefits both individuals and the environment.",
    images: [
      "/Qunatum images/Night sky stars cool breeze the universe.png"
    ]
  }
];

const BalanceWithNature = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Moves the inner container horizontally as the user scrolls vertically
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white text-[#1e293b]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Main Title that stays pinned */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="absolute top-12 md:top-24 left-6 md:left-12 z-20 pointer-events-none"
        >
          <h2 className="text-3xl md:text-5xl font-display font-normal text-[#ea580c] tracking-[0.1em] uppercase drop-shadow-sm">
            IN BALANCE WITH NATURE
          </h2>
        </motion.div>

        <motion.div style={{ x }} className="flex w-[400vw] h-full">
          {data.map((item, index) => (
            <div key={index} className="w-screen h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-24 pt-24 md:pt-40 gap-8 md:gap-16">
              
              <div className="w-full md:w-1/2 flex flex-col gap-6 z-10 max-w-2xl px-4 md:px-0">
                <h3 className="text-xl md:text-3xl font-heading font-medium text-[#ea580c] leading-tight tracking-wide">
                  {item.subtitle}
                </h3>
                <p className="text-sm md:text-lg text-[#334155] leading-relaxed font-body text-justify">
                  {item.text}
                </p>
              </div>

              <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] relative flex justify-center gap-4 md:gap-8">
                {item.images.map((imgSrc, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className={`relative h-full rounded-2xl overflow-hidden shadow-xl bg-slate-100 ${item.images.length === 1 ? 'w-[70%] md:w-[60%]' : 'w-full'}`}
                  >
                    <Image 
                      src={imgSrc} 
                      alt={item.subtitle} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                      className="hover:scale-110 transition-transform duration-1000 ease-out cursor-pointer"
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </motion.div>
        
        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {data.map((_, i) => (
            <div key={i} className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#ea580c]"
                style={{ 
                  scaleX: useTransform(
                    scrollYProgress, 
                    [i * 0.25, (i + 1) * 0.25], 
                    [0, 1]
                  ),
                  transformOrigin: "left"
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BalanceWithNature;
