"use client";

import React, { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';

const services = [
  { id: '01', title1: 'Quantum', title2: 'Healing', subtitle: 'Advanced therapeutic programs integrating bio-frequency and holistic practices for complete restoration.', details: 'Immerse yourself in our advanced therapeutic programs that seamlessly integrate cutting-edge bio-frequency technology with ancient holistic practices. Designed to operate at the cellular level, this restorative experience clears energetic blockages, realigns your natural frequencies, and promotes profound physical and emotional healing for complete restoration.', img: '/OG IMAGES/q1.png' },
  { id: '02', title1: 'Conscious', title2: 'Evolution', subtitle: 'Transformational retreats and workshops designed to elevate your awareness and spiritual growth.', details: 'Embark on a journey of profound self-discovery through our transformational retreats and highly immersive workshops. By combining guided introspective practices with expansive thought-leadership, we help you break through limiting paradigms, elevate your daily awareness, and accelerate your lifelong spiritual growth and evolution.', img: '/OG IMAGES/q2.png' },
  { id: '03', title1: 'Inner', title2: 'Stillness', subtitle: 'Immersive meditation experiences focused on silencing the mind and finding profound inner peace.', details: 'Step away from the noise of the modern world and into our deeply immersive meditation environments. Through guided stillness, breathwork, and sensory deprivation techniques, we provide the perfect sanctuary for silencing the restless mind, reducing chronic stress, and connecting with a state of profound, unwavering inner peace.', img: '/OG IMAGES/q3.png' },
  { id: '04', title1: 'Soul', title2: 'Resonance', subtitle: 'Community-driven initiatives harmonizing spiritual connections and unified field practices.', details: 'Join a vibrant, community-driven ecosystem dedicated to harmonizing spiritual connections across the globe. Through shared unified field practices, group consciousness exercises, and collaborative learning, Soul Resonance creates a powerful collective frequency that empowers individuals and uplifts the entire community.', img: '/OG IMAGES/q4.png' },
];
const smoothTransition: any = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

const QuantumTrust = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  return (
    <div className="w-full h-auto lg:h-[100dvh] pt-24 pb-12 lg:pt-28 flex flex-col text-white font-sans relative overflow-hidden bg-black">
      
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/Home images/Desert.png" 
          alt="Desert Background" 
          className="w-full h-full object-cover blur-xl scale-110 opacity-50" 
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      </div>

      {/* Header section */}
      <div className="flex justify-between items-center px-4 md:px-12 pb-8 border-b border-white/20 relative z-10">
        <span className="text-xs md:text-sm tracking-widest text-white/70">/Soul Peace</span>
        <span className="text-xs md:text-sm tracking-widest text-white/70">What we do (and do really well)</span>
      </div>

      {/* ─── MOBILE CARD LIST (hidden on md+) ─── */}
      <div className="flex md:hidden flex-col flex-1 relative z-10 px-4 pt-6 pb-6 gap-4 overflow-y-auto">
        {services.map((item, idx) => {
          const isOpen = mobileExpanded === idx;
          return (
            <motion.div
              key={item.id}
              layout
              transition={smoothTransition}
              onClick={() => setMobileExpanded(isOpen ? null : idx)}
              className="relative w-full overflow-hidden rounded-2xl cursor-pointer border border-white/10 shadow-lg"
              style={{ minHeight: 100 }}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <img src={item.img} className="w-full h-full object-cover" alt={item.title1} />
                <div className={`absolute inset-0 transition-all duration-700 ${isOpen ? 'bg-black/70' : 'bg-black/50'}`} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.3em] text-white/50 mb-1">/{item.id}</span>
                    <h3 className="text-xl font-serif font-medium tracking-tight leading-tight">
                      {item.title1} <span className="text-[#E05A00]">{item.title2}</span>
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0 ml-4"
                  >
                    <span className="text-white text-xl leading-none font-light">+</span>
                  </motion.div>
                </div>

                {/* Expandable description */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-white/75 text-sm leading-relaxed">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── DESKTOP (hidden on mobile) ─── */}
      <LayoutGroup>
        <div className="hidden md:flex w-full flex-1 relative z-10">
          {expandedIndex === null ? (
            // STATE 1: ROWS
            <div className="flex flex-col w-full h-full">
              {services.map((item, idx) => {
                const isHovered = hoveredIndex === idx;

                return (
                  <motion.div 
                    key={item.id}
                    layoutId={`container-${item.id}`}
                    transition={smoothTransition}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setExpandedIndex(idx)}
                    className="relative w-full border-b border-white/20 group cursor-pointer flex flex-col justify-center overflow-hidden flex-1"
                    animate={{ flexGrow: isHovered ? 1.5 : 1 }}
                  >
                    {/* Background giant faded number */}
                    <div className="absolute left-[4%] top-1/2 -translate-y-1/2 text-[20vh] font-bold pointer-events-none select-none z-0 leading-none text-white/[0.02]">
                      {parseInt(item.id)}
                    </div>
                    <div className="absolute right-[4%] top-1/2 -translate-y-1/2 text-[20vh] font-bold pointer-events-none select-none z-0 leading-none text-white/[0.02]">
                      {parseInt(item.id)}
                    </div>

                    {/* Top corner labels */}
                    <div className="absolute left-8 top-4 text-xs tracking-widest text-white/50 z-10 transition-colors group-hover:text-white">
                      /{item.id}
                    </div>
                    <div className="absolute right-8 top-4 text-xs tracking-widest text-white/50 z-10 transition-colors group-hover:text-white">
                      /See more
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center w-full py-8 lg:py-0">
                      {/* Title splitting */}
                      <div className="flex items-center justify-center w-full max-w-[90vw] mx-auto pointer-events-none">
                        <motion.span layoutId={`title1-${item.id}`} className="text-5xl xl:text-6xl font-medium tracking-tight whitespace-nowrap drop-shadow-lg text-white">
                          {item.title1}
                        </motion.span>
                        
                        <motion.div
                          layout
                          initial={false}
                          animate={{ 
                            width: isHovered ? 'auto' : 0, 
                            opacity: isHovered ? 1 : 0 
                          }}
                          transition={smoothTransition}
                          className="flex justify-center overflow-hidden shrink-0 pointer-events-auto"
                        >
                          <div className="px-6">
                            <motion.img layoutId={`img-${item.id}`} src={item.img} alt={item.title1} className="h-14 lg:h-16 xl:h-20 w-20 lg:w-28 xl:w-32 object-cover rounded-xl shadow-2xl" />
                          </div>
                        </motion.div>

                        <motion.span layoutId={`title2-${item.id}`} className="text-5xl xl:text-6xl font-medium tracking-tight whitespace-nowrap drop-shadow-lg text-white group-hover:text-[#E05A00] transition-colors duration-300">
                          {item.title2}
                        </motion.span>
                      </div>

                      {/* Subtitle */}
                      <motion.div
                        layout
                        initial={false}
                        animate={{ 
                          height: isHovered ? 'auto' : 0, 
                          opacity: isHovered ? 1 : 0 
                        }}
                        transition={smoothTransition}
                        className="flex flex-col items-center justify-center overflow-hidden w-full"
                      >
                        <p className="pt-6 pb-2 text-white/80 text-xs tracking-wide text-center max-w-xl uppercase px-4 drop-shadow-md">
                          {item.subtitle}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            // STATE 2: SPLIT VIEW
            <div className="flex w-full h-full p-4 lg:p-8 gap-4 lg:gap-8">
              
              {/* Left Side: Selected Details */}
              <motion.div 
                layoutId={`container-${services[expandedIndex].id}`}
                transition={smoothTransition}
                className="w-[65%] h-full relative overflow-hidden rounded-[2rem] border border-white/20 group flex flex-col"
              >
                <motion.img 
                  layoutId={`img-${services[expandedIndex].id}`} 
                  src={services[expandedIndex].img} 
                  alt={services[expandedIndex].title1}
                  className="absolute inset-0 w-full h-full object-cover" 
                  transition={smoothTransition}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 backdrop-blur-md" />
                
                <div className="relative z-10 p-10 lg:p-14 h-full flex flex-col">
                  {/* Top area: Badge and Small Title */}
                  <div className="flex flex-col items-start gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <span className="px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 font-mono text-sm tracking-widest">
                        /{services[expandedIndex].id}
                      </span>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-x-3 items-center">
                      <motion.span 
                        layoutId={`title1-${services[expandedIndex].id}`} 
                        transition={smoothTransition}
                        className="text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md"
                      >
                        {services[expandedIndex].title1}
                      </motion.span>
                      <motion.span 
                        layoutId={`title2-${services[expandedIndex].id}`} 
                        transition={smoothTransition}
                        className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#E05A00] drop-shadow-md"
                      >
                        {services[expandedIndex].title2}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Bottom area: Big Description */}
                  <div className="mt-auto max-w-4xl">
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light drop-shadow-md"
                    >
                      {services[expandedIndex].details}
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Small List */}
              <div className="w-[35%] h-full flex flex-col gap-3 justify-center">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.2 }}
                  className="mb-2 text-xs tracking-widest text-white/50 uppercase px-4"
                >
                  Select to explore
                </motion.div>
                
                {services.map((item, idx) => {
                  const isSelected = expandedIndex === idx;
                  return (
                    <motion.div 
                      key={item.id}
                      layoutId={isSelected ? undefined : `container-${item.id}`}
                      transition={smoothTransition}
                      className={`w-full p-6 rounded-2xl flex items-center gap-4 cursor-pointer border transition-all duration-300 ${
                        isSelected 
                          ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                          : 'border-white/5 hover:bg-white/5 hover:border-white/20'
                      }`}
                      onClick={() => setExpandedIndex(isSelected ? null : idx)}
                    >
                      <span className={`font-mono text-sm ${isSelected ? 'text-white/80' : 'text-white/40'}`}>
                        /{item.id}
                      </span>
                      
                      <div className="flex gap-1.5 text-xl lg:text-2xl font-medium ml-2">
                        <motion.span 
                          layoutId={isSelected ? undefined : `title1-${item.id}`}
                          transition={smoothTransition}
                          className={isSelected ? 'text-white' : 'text-white/80'}
                        >
                          {item.title1}
                        </motion.span>
                        <motion.span 
                          layoutId={isSelected ? undefined : `title2-${item.id}`}
                          transition={smoothTransition}
                          className={isSelected ? "text-[#E05A00]" : "text-white/80"}
                        >
                          {item.title2}
                        </motion.span>
                      </div>
                      
                      <div className="ml-auto text-xs tracking-widest text-white/50 uppercase transition-colors hover:text-white">
                        {isSelected ? '/See less' : '/See more'}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </LayoutGroup>
    </div>
  );
};

export default QuantumTrust;
