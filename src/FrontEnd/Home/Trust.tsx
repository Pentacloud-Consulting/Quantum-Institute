"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';

const AnimatedCounter = ({ from, to, suffix, duration = 2.5 }: { from: number, to: number, suffix: string, duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(val) {
          setValue(Math.floor(val));
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const stats = [
  { value: "432", suffix: "Hz", label: "Universal Frequency" },
  { value: "1", suffix: " Field", label: "Unified Consciousness" },
  { value: "∞", suffix: "", label: "Infinite Potential" },
  { value: "0", suffix: " Point", label: "Absolute Stillness" }
];

const Trust = () => {
  return (
    <section className="relative w-full bg-[#fdfcfb] py-4 md:py-8 flex flex-col items-center justify-center font-sans z-20 overflow-hidden">
      
      {/* Animated looping background map overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
          backgroundPosition: 'center',
          backgroundSize: '120% auto',
          backgroundRepeat: 'no-repeat'
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.02, 0.04, 0.02],
          backgroundPositionX: ['50%', '52%', '50%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="w-full max-w-[100vw] mx-auto relative z-10 flex flex-col items-center overflow-hidden">
        
        {/* Massive Animated Looping Text */}
        <div className="w-full relative flex items-center overflow-hidden py-2 md:py-4">
          {/* Fading Edges for the Marquee */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#fdfcfb] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#fdfcfb] to-transparent z-20 pointer-events-none"></div>

          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <h2 
                key={i} 
                className="text-[40px] sm:text-[60px] md:text-[8vw] lg:text-[120px] font-bold tracking-tighter text-zinc-900 pr-8 md:pr-16 flex items-center"
              >
                A global awakening for a peaceful tomorrow.
                <motion.span 
                  className="text-[#E05A00] text-[40px] md:text-[6vw] lg:text-[100px] flex items-center justify-center w-[1em] h-[1em] mx-4 md:mx-12 leading-none pb-2 md:pb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.span>
              </h2>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Trust;
