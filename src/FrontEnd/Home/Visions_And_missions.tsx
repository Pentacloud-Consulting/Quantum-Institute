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
// DESKTOP COMPONENT (New Pinned Swap)
// ----------------------------------------------------------------------
const DesktopVisionMission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const visionTextRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const visionCircleInnerRef = useRef<HTMLDivElement>(null);
  const missionCircleInnerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let reqId: number;
    let currentRot = 0;
    const render = () => {
      currentRot += 0.15;
      circlesRef.current.forEach(circle => {
        if (circle) gsap.set(circle, { rotation: currentRot });
      });
      reqId = requestAnimationFrame(render);
    };
    reqId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(reqId);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia(sectionRef);

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", 
          scrub: 1, 
          pin: true,
          invalidateOnRefresh: true
        }
      });

      // 1. Vision text slides out to the left and fades
      tl.to(visionTextRef.current, { x: -100, opacity: 0, duration: 1, ease: "power2.inOut" }, 0);
      
      // 2. Circle translates exactly by half the container's width
      tl.to(circleRef.current, { 
        x: () => -(sectionRef.current ? sectionRef.current.clientWidth / 2 : window.innerWidth / 2), 
        duration: 1, 
        ease: "power2.inOut" 
      }, 0);
      
      // 3. Circle internals crossfade halfway through the animation
      tl.to(visionCircleInnerRef.current, { opacity: 0, duration: 0.5, ease: "power1.inOut" }, 0.25);
      tl.to(missionCircleInnerRef.current, { opacity: 1, duration: 0.5, ease: "power1.inOut" }, 0.25);

      // 4. Mission text slides in from the right
      tl.fromTo(missionTextRef.current, 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, 
        0
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="w-full bg-[#F5F3EE] hidden md:block">
      <section ref={sectionRef} className="relative w-full h-screen min-h-[700px] border-b border-zinc-200 overflow-hidden font-sans">
      
        <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none mix-blend-multiply">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover grayscale" alt="" />
        </div>

        {/* The Main Container */}
        <div className="absolute inset-0 flex flex-row items-center w-full h-full z-10">
          
          {/* Left Column */}
          <div className="w-1/2 h-full flex flex-col justify-center items-center relative px-12 lg:px-24">
            
            {/* Vision Text */}
            <div ref={visionTextRef} className="w-full max-w-[600px] flex flex-col pointer-events-auto">
              <h3 className="text-[#D15000] font-medium text-2xl lg:text-3xl tracking-wide mb-2 flex items-center gap-4">
                Elevated
              </h3>
              <h2 className="text-[#000000] font-black text-5xl md:text-6xl lg:text-7xl xl:text-[85px] leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-sm">
                VISIONS
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-[#D15000]"></div>
              </div>
              
              <p className="text-zinc-500 leading-relaxed text-lg mb-4 font-light">
                Where minds collect & possibilities connect.
              </p>

              <p className="text-zinc-500 leading-relaxed text-sm mb-6 font-light max-w-[90%]">
                Quantum Institute brings together scientists, researchers, academics, students, seekers, and patients within an environment designed for meaningful exchange. It creates space where knowledge can be shared, disciplines can intersect, and new possibilities can emerge through collaboration, discovery, recovery, and growth. By connecting diverse minds and perspectives, the Institute seeks to transform individual potential into collective progress.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 h-full flex flex-col justify-center items-center relative px-12 lg:px-24">
            
            {/* Mission Text (Starts hidden and shifted right) */}
            <div ref={missionTextRef} className="w-full max-w-[600px] flex flex-col pointer-events-auto absolute opacity-0">
              <h3 className="text-[#D15000] font-medium text-2xl lg:text-3xl tracking-wide mb-2 flex items-center gap-4">
                Elevated
              </h3>
              <h2 className="text-[#000000] font-black text-5xl md:text-6xl lg:text-7xl xl:text-[85px] leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-sm">
                MISSIONS
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-[#D15000]"></div>
              </div>
              
              <p className="text-zinc-500 leading-relaxed text-base lg:text-lg mb-4 font-light">
                Empower minds through quantum-lensed exploration, fostering a global ecosystem for expanded learning, scientific discovery, and transformative healing.
              </p>

              <p className="text-zinc-500 leading-relaxed text-sm mb-6 font-light max-w-[90%]">
                Quantum Institute is committed to creating a connected ecosystem where science, research, learning, and human experience come together. Through a quantum-lensed approach to exploration, it encourages deeper inquiry, meaningful collaboration, and new ways of understanding human potential. The Institute brings together diverse communities and disciplines to create pathways for expanded learning, scientific discovery, personal growth, and transformative healing.
              </p>
            </div>

            {/* The Moving Circle (Starts in Right Column) */}
            <div ref={circleRef} className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] relative shrink-0">
               
               {/* Vision Inner */}
               <div ref={visionCircleInnerRef} className="absolute inset-0">
                 <div ref={el => { circlesRef.current[0] = el; }} className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform">
                    <img src="/OG%20IMAGES/q1.png" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
                    <img src="/OG%20IMAGES/q2.png" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
                    <img src="/OG%20IMAGES/q9.png" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
                    <img src="/OG%20IMAGES/q5.png" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
                    <div className="absolute inset-0 rounded-full border border-[#D15000]/20 z-20 m-6 pointer-events-none"></div>
                    <div className="absolute inset-0 rounded-full border border-[#F5F3EE]/30 z-20 m-2 pointer-events-none"></div>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[6px] border-[#F5F3EE] shadow-2xl z-10">
                    <video src="/Videos/Footer Video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 pointer-events-none" />
                    <div className="absolute inset-0 bg-[#D15000]/10 mix-blend-overlay pointer-events-none"></div>
                 </div>
               </div>

               {/* Mission Inner (Starts hidden) */}
               <div ref={missionCircleInnerRef} className="absolute inset-0 opacity-0">
                 <div ref={el => { circlesRef.current[1] = el; }} className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.06)] border border-[#000000]/5 bg-[#000000] will-change-transform">
                    <img src="/OG%20IMAGES/q3.png" className="absolute top-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-br-[40%] opacity-90" alt="" />
                    <img src="/OG%20IMAGES/q4.png" className="absolute top-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-bl-[40%] opacity-90" alt="" />
                    <img src="/OG%20IMAGES/q6.png" className="absolute bottom-0 left-0 w-[50.5%] h-[50.5%] object-cover rounded-tr-[40%] opacity-90" alt="" />
                    <img src="/OG%20IMAGES/q8.png" className="absolute bottom-0 right-0 w-[50.5%] h-[50.5%] object-cover rounded-tl-[40%] opacity-90" alt="" />
                    <div className="absolute inset-0 rounded-full border border-[#D15000]/20 z-20 m-6 pointer-events-none"></div>
                    <div className="absolute inset-0 rounded-full border border-[#F5F3EE]/30 z-20 m-2 pointer-events-none"></div>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[6px] border-[#F5F3EE] shadow-2xl z-10">
                    <video src="/Videos/Footer Video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 pointer-events-none" />
                    <div className="absolute inset-0 bg-[#D15000]/10 mix-blend-overlay pointer-events-none"></div>
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
                  
                  <p className="text-gray-500 font-light text-[10px] sm:text-xs leading-relaxed mt-4 max-w-lg">
                    Quantum Institute brings together scientists, researchers, academics, students, seekers, and patients within an environment designed for meaningful exchange. It creates space where knowledge can be shared, disciplines can intersect, and new possibilities can emerge through collaboration, discovery, recovery, and growth. By connecting diverse minds and perspectives, the Institute seeks to transform individual potential into collective progress.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-6">
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
                  
                  <p className="text-gray-500 font-light text-[10px] sm:text-xs leading-relaxed mt-4 max-w-lg">
                    Quantum Institute is committed to creating a connected ecosystem where science, research, learning, and human experience come together. Through a quantum-lensed approach to exploration, it encourages deeper inquiry, meaningful collaboration, and new ways of understanding human potential. The Institute brings together diverse communities and disciplines to create pathways for expanded learning, scientific discovery, personal growth, and transformative healing.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-6">
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
                  
                  {/* The Video */}
                  <video 
                    src="/Videos/Footer Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    className="absolute inset-2 z-10 object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none rounded-2xl"
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
const Visions_And_missions = () => {
  return (
    <>
      <DesktopVisionMission />
      <MobileVisionMission />
    </>
  );
};

export default Visions_And_missions;
