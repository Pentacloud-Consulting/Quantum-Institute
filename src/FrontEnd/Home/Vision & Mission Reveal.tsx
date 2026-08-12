"use client";

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VisionMissionReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top", 
        end: "+=200%", // Pin for 200vh
        pin: true,
        pinSpacing: false, // Allows next section to slide over
        onUpdate: (self) => {
          // Flip at 25% of the total 200vh pin (which is 50vh of scrolling)
          if (self.progress > 0.25) {
            setStep(2);
          } else {
            setStep(1);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full flex flex-col">
      <section ref={sectionRef} className="relative w-full min-h-screen bg-white text-black flex flex-col items-center justify-center pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[#E05A00] opacity-5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto h-full flex items-center justify-center">
          
          {/* Texts Container (Absolute to overlay) */}
          <div className="absolute inset-0 flex items-center w-full pointer-events-none">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="vision-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2 flex flex-col items-start pr-8 pointer-events-auto"
                >
                  <div className="flex flex-col items-start">
                    <h4 className="text-[#E05A00] text-xs font-bold tracking-[0.3em] uppercase mb-3">Vision</h4>
                    <div className="w-8 h-[2px] bg-[#E05A00]"></div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-light tracking-tight leading-[1.1] text-black mt-8">
                    Where minds collect <br/>
                    & possibilities <br/>
                    connect.
                  </h2>
                  
                  <div className="flex flex-col mt-10 w-full max-w-lg">
                    <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 border-b border-gray-200 pb-3">Substantiation</h5>
                    <div className="flex flex-col">
                      {[
                        { title: 'Minds', tags: ['Scientists', 'Researchers', 'Academics', 'Students', 'Seekers', 'Patients'] },
                        { title: 'Collect', tags: ['Gather', 'Collaborate', 'Intersect'] },
                        { title: 'Possibilities', tags: ['Advancement', 'Breakthroughs', 'Recovery', 'Growth'] },
                        { title: 'Connect', tags: ['Understand', 'Co-create', 'Meet', 'Accomplish'] }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-3 border-b border-gray-100 last:border-0 group">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-black w-32 shrink-0 pt-1 group-hover:text-[#E05A00] transition-colors">{item.title}</span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-50/80 text-gray-600 text-[11px] font-medium rounded-full border border-gray-200/80 hover:border-[#E05A00]/40 hover:bg-[#E05A00]/5 hover:text-black transition-all cursor-default">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-6">
                    <button className="group flex items-center gap-4 px-8 py-3 border border-gray-300 rounded-full bg-transparent text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:border-[#E05A00] hover:bg-[#E05A00]/5 transition-colors duration-300">
                      Explore Our Vision
                      <ArrowRight className="w-4 h-4 text-[#E05A00] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="mission-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2 flex flex-col items-start pl-8 ml-auto pointer-events-auto"
                >
                  <div className="flex flex-col items-start">
                    <h4 className="text-[#E05A00] text-xs font-bold tracking-[0.3em] uppercase mb-3">Mission</h4>
                    <div className="w-8 h-[2px] bg-[#E05A00]"></div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-relaxed text-black font-serif italic mt-8">
                    Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
                  </h2>
                  
                  <div className="flex flex-col mt-10 w-full max-w-lg">
                    <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 border-b border-gray-200 pb-3">Substantiation</h5>
                    <div className="flex flex-col">
                      {[
                        { title: 'Minds', tags: ['Scientists', 'Researchers', 'Academics', 'Students', 'Seekers', 'Patients'] },
                        { title: 'Quantum Exploration', tags: ['Toolkit', 'Science', 'Research', 'Journey'] },
                        { title: 'Ecosystem', tags: ['Network', 'Coherence', 'Interconnected', 'Rooted', 'Natural'] }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-3 border-b border-gray-100 last:border-0 group">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-black w-40 shrink-0 pt-1 group-hover:text-[#E05A00] transition-colors">{item.title}</span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-50/80 text-gray-600 text-[11px] font-medium rounded-full border border-gray-200/80 hover:border-[#E05A00]/40 hover:bg-[#E05A00]/5 hover:text-black transition-all cursor-default">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-6">
                    <button className="group flex flex-col items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-black hover:text-[#E05A00] transition-colors duration-300">
                      <span>Learn More</span>
                      <div className="w-full h-[1px] bg-gray-300 group-hover:bg-[#E05A00] transition-colors relative">
                        <div className="absolute left-0 top-0 h-full w-1/3 bg-[#E05A00]"></div>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Image Container */}
          <div className="absolute inset-0 flex items-center justify-center w-full pointer-events-none">
             <div className={`w-full flex ${step === 1 ? 'justify-end' : 'justify-start'} items-center h-full`}>
                <motion.div 
                  layout
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[45%] max-w-[400px] aspect-[4/5] flex items-center justify-center"
                >
                  {/* Thin orange border frame */}
                  <div className="absolute inset-0 border border-[#E05A00] opacity-40 z-0"></div>
                  
                  {/* The Images */}
                  <motion.img 
                    src="/Home/Vision Mission Hero/Vision Hero.webp"
                    alt="Vision"
                    className="absolute inset-2 z-10 object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none"
                    initial={false}
                    animate={{ opacity: step === 1 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <motion.img 
                    src="/Home/Vision Mission Hero/Mission Hero.webp"
                    alt="Mission"
                    className="absolute inset-2 z-10 object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none"
                    initial={false}
                    animate={{ opacity: step === 2 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
             </div>
          </div>

        </div>
      </section>

      {/* Invisible spacer to delay the next section from overlapping prematurely */}
      <div className="w-full h-[200vh] pointer-events-none"></div>
    </div>
  );
};

export default VisionMissionReveal;
