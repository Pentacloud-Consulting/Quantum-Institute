"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Scale, Activity, DoorOpen, Brain, ActivitySquare, Sparkles, Layers } from 'lucide-react';

const PROPOSITION_DATA = [
  { 
    title: "Physical Location",
    desc: "The acronym “HERE” alludes to physical location and presence.",
    icon: <MapPin size={16} strokeWidth={1.5} />
  },
  { 
    title: "Symmetrical Balance",
    desc: "Substantiation gains balance in both acronyms (M.I.N.D + H.E.R.E).",
    icon: <Scale size={16} strokeWidth={1.5} />
  },
  { 
    title: "Journey to Health",
    desc: "Exploration invites customers on a journey to gain health and/or knowledge.",
    icon: <Activity size={16} strokeWidth={1.5} />
  },
  { 
    title: "Open Doorways",
    desc: "It doesn’t limit the scientific community to strict research but opens doorways of exploration.",
    icon: <DoorOpen size={16} strokeWidth={1.5} />
  }
];

const BRAND_STORY_DATA = [
  { 
    title: "MIND",
    desc: "We break the boundaries of what can be achieved through the natural application of theoretical sciences.",
    icon: <Brain size={16} strokeWidth={1.5} />
  },
  { 
    title: "BODY",
    desc: "We revolutionize our understanding of health, merging rigorous research with ancient wisdom.",
    icon: <ActivitySquare size={16} strokeWidth={1.5} />
  },
  { 
    title: "SOUL",
    desc: "We transcend science to promote a quantum understanding of the human experience.",
    icon: <Sparkles size={16} strokeWidth={1.5} />
  },
  { 
    title: "BP+V",
    desc: "Welcome to the Quantum Institute, the agora of wisdom. Where minds collect and possibilities connect.",
    icon: <Layers size={16} strokeWidth={1.5} />
  }
];

const Proposition = () => {
  const [activeTab, setActiveTab] = useState<'proposition' | 'brand'>('proposition');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0, duration: 0.5 } }
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] flex flex-col lg:flex-row font-sans overflow-hidden py-10 lg:py-0 lg:h-[600px] xl:h-[650px]">
      
      {/* Left Column - Text Content */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-6 lg:px-12 xl:px-16 z-10 py-6 lg:py-8">
        
        {/* Tab Switcher */}
        <div className="flex items-center gap-1 mb-6 lg:mb-8 bg-black/5 p-1 rounded-full w-fit">
          <button 
            onClick={() => setActiveTab('proposition')}
            className={`relative px-4 py-2 rounded-full text-[10px] lg:text-xs font-bold tracking-wider uppercase transition-colors z-10 ${activeTab === 'proposition' ? 'text-white' : 'text-black/50 hover:text-black/80'}`}
          >
            {activeTab === 'proposition' && (
              <motion.div layoutId="prop-tab" className="absolute inset-0 bg-[#E05A00] rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
            )}
            Proposition
          </button>
          <button 
            onClick={() => setActiveTab('brand')}
            className={`relative px-4 py-2 rounded-full text-[10px] lg:text-xs font-bold tracking-wider uppercase transition-colors z-10 ${activeTab === 'brand' ? 'text-white' : 'text-black/50 hover:text-black/80'}`}
          >
            {activeTab === 'brand' && (
              <motion.div layoutId="prop-tab" className="absolute inset-0 bg-[#E05A00] rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
            )}
            Brand Story
          </button>
        </div>

        <div className="relative min-h-[440px]">
          <AnimatePresence mode="wait">
            {activeTab === 'proposition' ? (
              <motion.div 
                key="prop"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col w-full h-full"
              >
                {/* Fixed Height Header Area */}
                <div className="h-[90px] lg:h-[100px] flex flex-col justify-start">
                  <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-black mb-2">
                    HERE <span className="font-serif italic text-black/40">for you.</span>
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-[11px] lg:text-xs text-black/60 font-light max-w-sm">
                    <strong className="font-semibold text-black/80">H.E.R.E</strong> (Healing, Education, Research, Exploration)
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {PROPOSITION_DATA.map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      className="group p-4 lg:p-5 rounded-2xl bg-white border border-black/[0.04] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(224,90,0,0.08)] transition-all duration-300 hover:border-[#E05A00]/20 h-[170px] lg:h-[190px] flex flex-col justify-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#E05A00]/5 flex items-center justify-center text-[#E05A00] mb-3 group-hover:scale-110 group-hover:bg-[#E05A00]/10 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <h6 className="text-black text-[13px] lg:text-sm font-semibold mb-1.5 shrink-0">{item.title}</h6>
                      <p className="text-black/50 text-[10px] lg:text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="brand"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col w-full h-full"
              >
                {/* Fixed Height Header Area */}
                <div className="h-[90px] lg:h-[100px] flex flex-col justify-start">
                  <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-black mb-2">
                    The Agora <span className="font-serif italic text-black/40">of Wisdom.</span>
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-[11px] lg:text-xs text-black/60 font-light max-w-sm">
                    Discover a new frontier in holistic wellness, rigorous theoretical sciences, and absolute spiritual harmony.
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {BRAND_STORY_DATA.map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      className="group p-4 lg:p-5 rounded-2xl bg-white border border-black/[0.04] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(224,90,0,0.08)] transition-all duration-300 hover:border-[#E05A00]/20 h-[170px] lg:h-[190px] flex flex-col justify-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#E05A00]/5 flex items-center justify-center text-[#E05A00] mb-3 group-hover:scale-110 group-hover:bg-[#E05A00]/10 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <h6 className="text-black text-[13px] lg:text-sm font-semibold mb-1.5 tracking-wide shrink-0">{item.title}</h6>
                      <p className="text-black/50 text-[10px] lg:text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column - Video */}
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full bg-[#FAFAFA] flex items-center justify-center p-4 lg:p-8 xl:p-12 mt-4 lg:mt-0">
        <div className="relative w-full h-full lg:rounded-[2.5rem] overflow-hidden shadow-2xl group">
          <video 
            src="/Videos/PROPOSITION Video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
        </div>
      </div>

    </section>
  );
};

export default Proposition;
