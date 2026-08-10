"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Proposition = () => {
  return (
    <section className="relative w-screen h-screen shrink-0 overflow-hidden bg-white z-30 flex flex-col lg:flex-row font-sans shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Left Column - Text Content */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-white flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 z-10 overflow-hidden">
        
        {/* Subtle geometric wireframe background (matching design) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-black fill-none stroke-[0.2]">
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
            <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
            <line x1="5" y1="25" x2="50" y2="50" />
            <line x1="95" y1="25" x2="50" y2="50" />
            <line x1="50" y1="95" x2="50" y2="50" />
            <line x1="15" y1="35" x2="50" y2="50" />
            <line x1="85" y1="35" x2="50" y2="50" />
            <line x1="50" y1="85" x2="50" y2="50" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center"
        >
          <div className="relative z-10 grid grid-cols-1 grid-rows-1 w-full items-center">
            
            {/* SLIDE 1: IMPORTANCE OF EXPLORATION */}
            <div className="prop-slide-1 col-start-1 row-start-1 flex flex-col w-full h-fit z-20">
              {/* Label */}
              <h4 className="text-[#d15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                PROPOSITION
              </h4>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-black leading-[1.1] mb-2 whitespace-nowrap">
                HERE for you.
              </h2>

              <h3 className="text-sm md:text-base text-black/80 font-medium mb-6">
                H.E.R.E (Healing, Education, Research, Exploration)
              </h3>

              <div className="flex flex-col gap-2 w-full max-w-xl">
                <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 mb-1 border-b border-black/10 pb-2">
                  Importance of Exploration
                </h5>
                
                <div className="flex flex-col gap-2">
                  {[
                    { 
                      title: "Physical Location",
                      desc: "The acronym “HERE” alludes to physical location and presence."
                    },
                    { 
                      title: "Symmetrical Balance",
                      desc: "Slot machine style substantiation gains balance in both acronyms (M.I.N.D + H.E.R.E)." 
                    },
                    { 
                      title: "Journey to Health",
                      desc: "Exploration invites customers on a journey to gain health and/or knowledge." 
                    },
                    { 
                      title: "Open Doorways",
                      desc: "It doesn’t limit the scientific community to strict research but opens doorways of exploration." 
                    }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="group relative overflow-hidden bg-black/[0.02] border border-black/5 rounded-xl p-3 transition-all duration-300 hover:bg-black/[0.04] hover:border-[#d15000]/30 hover:-translate-y-0.5 cursor-default"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#d15000]/30 to-transparent group-hover:from-[#d15000] group-hover:to-[#d15000]/30 transition-colors duration-300" />
                      <div className="relative z-10 pl-2">
                        <h6 className="text-black text-[12px] font-bold mb-0.5 group-hover:text-[#d15000] transition-colors tracking-wide">{item.title}</h6>
                        <p className="text-black/60 text-[11px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SLIDE 2: BRAND STORY */}
            <div className="prop-slide-2 col-start-1 row-start-1 flex flex-col w-full h-fit opacity-0 translate-y-8 pointer-events-none z-10">
              {/* Label */}
              <h4 className="text-[#d15000] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border-b border-black/10 pb-3 inline-block">
                BRAND STORY (H.E.R.E FOR YOU)
              </h4>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-black/90 leading-[1.1] mb-12">
                The Agora of Wisdom.
              </h2>

              <div className="flex flex-col gap-2 w-full max-w-xl">
                {[
                  { 
                    label: "MIND",
                    desc: "We break the boundaries of what can be achieved through the natural application of theoretical sciences."
                  },
                  { 
                    label: "BODY",
                    desc: "We revolutionize our understanding of health, merging rigorous research with ancient wisdom, to co-create new pathways to well-being." 
                  },
                  { 
                    label: "SOUL",
                    desc: "We transcend science to promote a quantum understanding of the human experience, in order to unlock new frontiers." 
                  },
                  { 
                    label: "BP+V",
                    desc: "Welcome to the Quantum Institute, the agora of wisdom. Where minds collect and possibilities connect." 
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden bg-black/[0.02] border border-black/5 rounded-xl p-3 transition-all duration-300 hover:bg-black/[0.04] hover:border-[#d15000]/30 hover:-translate-y-0.5 cursor-default"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#d15000]/30 to-transparent group-hover:from-[#d15000] group-hover:to-[#d15000]/30 transition-colors duration-300" />
                    <div className="relative z-10 pl-2">
                      <h6 className="text-black text-[12px] font-bold mb-0.5 group-hover:text-[#d15000] transition-colors tracking-wide uppercase">{item.label}</h6>
                      <p className="text-black/60 text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-white flex items-center justify-center p-8 lg:p-16">
        <div className="relative w-full h-[90%] lg:w-[90%] lg:h-[75%] rounded-[2rem] overflow-hidden shadow-2xl mt-0 lg:mt-4">
          <video 
            src="/Videos/Futuristic_institute_in_desert_1080p_202608101438.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      </div>

    </section>
  );
};

export default Proposition;
