"use client";

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ----------------------------------------------------------------------
// DESKTOP COMPONENT (Original)
// ----------------------------------------------------------------------
const DesktopVisionMission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const circleContainerRef = useRef<HTMLDivElement>(null);
  const circleRotRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleEntranceRef = useRef<HTMLDivElement>(null);
  const textEntranceRef = useRef<HTMLDivElement>(null);
  
  const rotState = useRef({ speed: 1 });
  const currentRot = useRef(0);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    const render = () => {
      currentRot.current += rotState.current.speed * 0.15; 
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

  useEffect(() => {
    const mm = gsap.matchMedia(sectionRef);

    mm.add("(min-width: 768px)", () => {
        gsap.set(circleContainerRef.current, { x: "-26vw" });

        gsap.set(textRefs.current[0], { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
        gsap.set(textRefs.current[1], { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" });

        const entranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          }
        });

        entranceTl.fromTo(circleEntranceRef.current,
          { x: "-15vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1.2, ease: "power3.out" },
          0
        )
        .fromTo(textEntranceRef.current,
          { x: "15vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1.2, ease: "power3.out" },
          0.2
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%", 
            pin: true,
            scrub: 0.3,
          }
        });

        const startTime = 0;
        
        tl.to(rotState.current, { speed: -1, duration: 2, ease: "power2.inOut" }, startTime);
        tl.to(circleContainerRef.current, { x: "26vw", duration: 2, ease: "power2.inOut" }, startTime);

        tl.to(textRefs.current[0], { opacity: 0, y: -40, scale: 0.95, filter: "blur(4px)", duration: 0.8, ease: "power2.inOut" }, startTime)
          .to(textRefs.current[1], { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, startTime + 0.5);

        tl.to({}, { duration: 1 }, startTime + 2);
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="w-full bg-[#F5F3EE] hidden md:block">
      <section ref={sectionRef} className="relative w-full h-[100vh] min-h-[700px] border-b border-zinc-200 overflow-hidden font-sans">
      
      <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none mix-blend-multiply">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover grayscale" alt="" />
      </div>

      <div ref={circleEntranceRef} className="absolute inset-0 flex items-start lg:items-center justify-center pt-24 lg:pt-0 z-10 pointer-events-none opacity-0 will-change-transform">
        <div ref={circleContainerRef} className="relative w-[75vw] md:w-[500px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] aspect-square rounded-full will-change-transform">
          
          <div ref={circleRotRef} className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform">
            <img src="/OG%20IMAGES/q1.png" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
            <img src="/OG%20IMAGES/q2.png" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
            <img src="/OG%20IMAGES/q9.png" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
            <img src="/OG%20IMAGES/q5.png" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
            
            <div className="absolute inset-0 rounded-full border border-[#D15000]/20 z-20 m-6 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border border-[#F5F3EE]/30 z-20 m-2 pointer-events-none"></div>
          </div>
          
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

      <div className="absolute bottom-0 lg:top-0 left-0 w-full h-[55vh] lg:h-full z-20 pointer-events-none">
        <div ref={textEntranceRef} className="absolute inset-0 w-full h-full opacity-0 will-change-transform">
        <div 
          ref={el => { textRefs.current[0] = el; }} 
          className="absolute right-0 w-full lg:w-[55%] top-[25%] -translate-y-1/2 flex flex-col pointer-events-auto will-change-transform px-6 sm:px-12 lg:px-16 xl:px-24"
        >
          <h3 className="text-[#D15000] font-medium text-2xl lg:text-3xl tracking-wide mb-2 flex items-center gap-4">
            Elevated
          </h3>
          <h2 className="text-[#000000] font-black text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-sm">
            VISIONS
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-[#D15000]"></div>
          </div>
          
          <p className="text-zinc-500 leading-relaxed text-lg mb-6 font-light">
            Where minds collect & possibilities connect.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">Minds</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Scientists, Researchers, Academics, Students, Seekers, Patients</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">Collect</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Gather, Collaborate, Intersect</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">Possibilities</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Advancement, Breakthroughs, Recovery, Growth</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">Connect</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Understand, Co-create, Meet, Accomplish</span>
            </div>
          </div>
        </div>

        <div 
          ref={el => { textRefs.current[1] = el; }} 
          className="absolute left-0 w-full lg:w-[55%] top-[25%] -translate-y-1/2 flex flex-col pointer-events-auto will-change-transform opacity-0 px-6 sm:px-12 lg:px-16 xl:px-24"
        >
          <h3 className="text-[#D15000] font-medium text-2xl lg:text-3xl tracking-wide mb-2 flex items-center gap-4">
            Elevated
          </h3>
          <h2 className="text-[#000000] font-black text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-sm">
            MISSIONS
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-[#D15000]"></div>
          </div>
          
          <p className="text-zinc-500 leading-relaxed text-base lg:text-lg mb-6 font-light max-w-xl">
            Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">Minds</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Scientists, Researchers, Academics, Students, Seekers, Patients</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">Quantum Toolkit</span>
              <span className="text-zinc-600 text-sm leading-relaxed block">Science, Research, Journey</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 transition-shadow hover:shadow-md sm:col-span-2">
              <span className="text-[#D15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">Ecosystem</span>
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

// ----------------------------------------------------------------------
// MOBILE COMPONENT (New VisionMissionReveal)
// ----------------------------------------------------------------------
const MobileVisionMission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mobile
      mm.add("(max-width: 767px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=80%", // Shorter scroll distance on mobile to reduce 'spacing'
          pin: true,
          pinSpacing: false,
          onUpdate: (self) => {
            if (self.progress > 0.25) {
              setStep(2);
            } else {
              setStep(1);
            }
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full flex flex-col block md:hidden">
      <section ref={sectionRef} className="relative w-full min-h-screen bg-white text-black flex flex-col items-center justify-center pt-20 pb-8 px-4 sm:px-6 overflow-hidden z-20">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[#E05A00] opacity-5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full mx-auto h-full flex flex-col items-center justify-center gap-4">
          
          {/* Texts Container */}
          <div className="relative flex items-center w-full pointer-events-none z-20 order-2 min-h-[320px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="vision-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col items-start px-0 pointer-events-auto"
                >
                  <div className="flex flex-col items-start">
                    <h4 className="text-[#E05A00] text-[8px] font-bold tracking-[0.3em] uppercase mb-1.5">Vision</h4>
                    <div className="w-4 h-[2px] bg-[#E05A00]"></div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-4xl font-light tracking-tight leading-[1.1] text-black mt-3">
                    Where minds collect <br className="hidden sm:block"/>
                    & possibilities <br className="hidden sm:block"/>
                    connect.
                  </h2>
                  
                  <div className="flex flex-col mt-4 w-full max-w-lg">
                    <h5 className="text-[7px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 border-b border-gray-200 pb-1.5">Substantiation</h5>
                    <div className="flex flex-col">
                      {[
                        { title: 'Minds', tags: ['Scientists', 'Researchers', 'Academics', 'Students', 'Seekers', 'Patients'] },
                        { title: 'Collect', tags: ['Gather', 'Collaborate', 'Intersect'] },
                        { title: 'Possibilities', tags: ['Advancement', 'Breakthroughs', 'Recovery', 'Growth'] },
                        { title: 'Connect', tags: ['Understand', 'Co-create', 'Meet', 'Accomplish'] }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-1 py-1.5 border-b border-gray-100 last:border-0 group">
                          <span className="text-[8px] font-bold uppercase tracking-widest text-black shrink-0 pt-1 group-hover:text-[#E05A00] transition-colors">{item.title}</span>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, i) => (
                              <span key={i} className="px-1.5 py-[2px] bg-gray-50/80 text-gray-600 text-[8px] font-medium rounded-full border border-gray-200/80 hover:border-[#E05A00]/40 hover:bg-[#E05A00]/5 hover:text-black transition-all cursor-default">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-4">
                    <button className="group flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-transparent text-black text-[8px] font-bold tracking-[0.2em] uppercase hover:border-[#E05A00] hover:bg-[#E05A00]/5 transition-colors duration-300">
                      Explore Our Vision
                      <ArrowRight className="w-3 h-3 text-[#E05A00] group-hover:translate-x-1 transition-transform" />
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
                  className="w-full flex flex-col items-start px-0 pointer-events-auto z-20"
                >
                  <div className="flex flex-col items-start">
                    <h4 className="text-[#E05A00] text-[8px] font-bold tracking-[0.3em] uppercase mb-1.5">Mission</h4>
                    <div className="w-4 h-[2px] bg-[#E05A00]"></div>
                  </div>
                  
                  <h2 className="text-lg sm:text-2xl font-light tracking-tight leading-relaxed text-black font-serif italic mt-3">
                    Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
                  </h2>
                  
                  <div className="flex flex-col mt-4 w-full max-w-lg">
                    <h5 className="text-[7px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 border-b border-gray-200 pb-1.5">Substantiation</h5>
                    <div className="flex flex-col">
                      {[
                        { title: 'Minds', tags: ['Scientists', 'Researchers', 'Academics', 'Students', 'Seekers', 'Patients'] },
                        { title: 'Quantum Exploration', tags: ['Toolkit', 'Science', 'Research', 'Journey'] },
                        { title: 'Ecosystem', tags: ['Network', 'Coherence', 'Interconnected', 'Rooted', 'Natural'] }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-1 py-1.5 border-b border-gray-100 last:border-0 group">
                          <span className="text-[8px] font-bold uppercase tracking-widest text-black shrink-0 pt-1 group-hover:text-[#E05A00] transition-colors">{item.title}</span>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, i) => (
                              <span key={i} className="px-1.5 py-[2px] bg-gray-50/80 text-gray-600 text-[8px] font-medium rounded-full border border-gray-200/80 hover:border-[#E05A00]/40 hover:bg-[#E05A00]/5 hover:text-black transition-all cursor-default">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-4">
                    <button className="group flex flex-col items-center gap-1.5 text-[8px] font-bold tracking-[0.2em] uppercase text-black hover:text-[#E05A00] transition-colors duration-300">
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
          <div className="relative flex items-center justify-center w-full pointer-events-none z-10 order-1">
             <div className="w-full flex justify-center items-center h-full">
                <motion.div 
                  layout
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[45%] sm:w-[40%] max-w-[200px] aspect-[4/5] flex items-center justify-center mx-auto"
                >
                  {/* Thin orange border frame */}
                  <div className="absolute inset-0 border border-[#E05A00] opacity-40 z-0 rounded-3xl"></div>
                  
                  {/* The Videos */}
                  <motion.video 
                    src="/Videos/Meditation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    className="absolute inset-2 z-10 object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none rounded-2xl"
                    initial={false}
                    animate={{ opacity: step === 1 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <motion.video 
                    src="/Videos/Yoga.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    className="absolute inset-2 z-10 object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none rounded-2xl"
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
      <div className="w-full h-[80vh] pointer-events-none"></div>
    </div>
  );
};

// ----------------------------------------------------------------------
// MAIN EXPORT
// ----------------------------------------------------------------------
const VisionsAndMissions = () => {
  return (
    <>
      <DesktopVisionMission />
      <MobileVisionMission />
    </>
  );
};

export default VisionsAndMissions;
