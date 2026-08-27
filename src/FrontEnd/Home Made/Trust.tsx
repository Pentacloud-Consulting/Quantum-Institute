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
  { value: 24, suffix: "M+", label: "Lives Touched" },
  { value: 120, suffix: "+", label: "Countries Reached" },
  { value: 200, suffix: "K+", label: "Researchers & Learners" },
  { value: 500, suffix: "+", label: "Ongoing Projects" }
];

const Trust = () => {
  return (
    <section className="relative w-full bg-[#fdfcfb] pt-8 md:pt-16 pb-8 md:pb-12 flex flex-col items-center justify-center font-sans z-20 overflow-hidden">
      
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

      <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-20 mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Row */}
        <div className="w-full relative flex flex-col md:flex-row items-center justify-center mb-8 md:mb-28">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="md:absolute left-0 top-1/2 md:-translate-y-1/2 mb-2 md:mb-0 w-full text-center md:text-left"
          >
            <h4 className="text-[#E05A00] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              GLOBAL IMPACT
            </h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center w-full"
          >
            <h2 className="text-xl md:text-3xl lg:text-[2rem] font-normal tracking-tight text-[#1a1a1a]">
              A global movement for a better tomorrow.
            </h2>
          </motion.div>

        </div>

        {/* Stats Row */}
        <div className="w-full grid grid-cols-4 gap-y-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className={`flex flex-col items-center justify-center text-center w-full ${
                idx !== stats.length - 1 ? 'border-r border-[#1a1a1a]/10' : ''
              } px-1 md:px-4 lg:px-6`}
            >
              <div className="h-10 md:h-20 flex items-center justify-center mb-1 md:mb-2">
                <h3 className="font-light leading-none text-[#222222] text-[15px] sm:text-xl md:text-5xl lg:text-[3.25rem]">
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                </h3>
              </div>
              <p className="text-[#1a1a1a]/60 text-[7px] sm:text-[9px] md:text-xs font-semibold tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trust;
