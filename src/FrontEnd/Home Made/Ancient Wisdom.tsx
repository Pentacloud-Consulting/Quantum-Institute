"use client";

import React, { useState } from 'react';
import { Leaf, Flower2, User, Heart, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VIDEOS = [
  {
    id: "yoga",
    src: "/Videos/Yoga.mp4",
    titleMain: <>Mindful<br/>Movement</>,
    descMain: "Align your physical vessel with your energetic state. Our yoga practices are deeply rooted in ancient traditions to foster profound flexibility and inner peace.",
    titleSub: "Movement",
    descSub: "Align body & mind.",
    badge: "Mindful"
  },
  {
    id: "massage",
    src: "/Videos/Ayurvedic-Massage.mp4",
    titleMain: <>Ayurvedic<br/>Massage</>,
    descMain: "Experience deep relaxation and detoxification. Our specialized massages use ancient oils to restore balance and rejuvenate your body's vital energies.",
    titleSub: "Massage",
    descSub: "Detoxify & relax.",
    badge: "Detoxify"
  },
  {
    id: "herbal",
    src: "/Videos/Herbal Healing.mp4",
    titleMain: <>Botanical<br/>Healing</>,
    descMain: "Harness the power of nature's purest ingredients. Customized herbal remedies designed to balance your unique dosha and support natural healing.",
    titleSub: "Botanical",
    descSub: "Nature's remedies.",
    badge: "Healing"
  },
  {
    id: "meditation",
    src: "/Videos/Meditation.mp4",
    titleMain: <>Inner<br/>Stillness</>,
    descMain: "Find your center in a chaotic world. Guided meditation practices that calm the mind, reduce stress, and awaken your spiritual awareness.",
    titleSub: "Meditation",
    descSub: "Inner stillness.",
    badge: "Stillness"
  }
];

const SPOTS = [
  { order: 'order-1', classes: 'col-span-1 md:col-span-2 md:row-span-3 min-h-[300px] md:min-h-0', isMain: true, subType: 'main' },
  { order: 'order-3', classes: 'col-span-1 md:col-span-1 md:row-span-2 min-h-[250px] md:min-h-0', isMain: false, subType: 'tall' },
  { order: 'order-4', classes: 'col-span-1 md:col-span-1 md:row-span-1 min-h-[200px] md:min-h-0', isMain: false, subType: 'square' },
  { order: 'order-5', classes: 'col-span-1 md:col-span-1 md:row-span-1 min-h-[200px] md:min-h-0', isMain: false, subType: 'square' }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  show: { 
    y: 0, 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number]
    } 
  },
};

const springTransition = {
  layout: { type: "spring" as const, bounce: 0.15, duration: 0.7 }
};

const AncientWisdom = () => {
  // videoSpots maps the video index to the spot index. 
  // Initially: video 0 is in spot 0, video 1 in spot 1, etc.
  const [videoSpots, setVideoSpots] = useState([0, 1, 2, 3]);

  const handleSwap = (videoIndex: number) => {
    setVideoSpots(prev => {
      const newSpots = [...prev];
      const clickedSpot = newSpots[videoIndex];
      
      // If clicking the main video, do nothing
      if (clickedSpot === 0) return prev; 
      
      // Find the video that is currently in the main spot (spot 0)
      const currentMainVideoIndex = newSpots.findIndex(spot => spot === 0);
      
      // Swap their spots
      newSpots[videoIndex] = 0;
      newSpots[currentMainVideoIndex] = clickedSpot;
      
      return newSpots;
    });
  };

  return (
    <div className="w-full bg-white">
      <section className="relative w-full py-10 lg:py-16 overflow-hidden z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-6 lg:gap-8"
        >
          
          {/* Header */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E05A00]/20 bg-[#E05A00]/5 mb-4 lg:mb-5">
              <Leaf size={12} className="text-[#E05A00]" />
              <span className="text-[#E05A00] text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">Ayurvedic Wellness</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-2 lg:mb-3">
              Ancient Wisdom. <span className="font-serif italic text-gray-500">Modern Healing.</span>
            </h2>
            <p className="text-gray-600 max-w-xl text-xs md:text-sm">
              Experience the transformative power of Ayurveda. A holistic approach that brings your mind, body, and spirit into perfect harmony.
            </p>
          </motion.div>

          {/* Premium Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-3 lg:gap-4 md:h-[450px] lg:h-[550px] w-full">
            
            {/* The 4 Interactive Videos */}
            {VIDEOS.map((video, index) => {
              const spotIndex = videoSpots[index];
              const spot = SPOTS[spotIndex];
              
              return (
                <motion.div
                  layout
                  variants={itemVariants}
                  transition={springTransition}
                  key={video.id}
                  onClick={() => handleSwap(index)}
                  className={`relative rounded-2xl lg:rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-md ring-0 hover:ring-2 hover:ring-inset hover:ring-[#E05A00]/50 transition-shadow duration-300 cursor-pointer ${spot.order} ${spot.classes}`}
                >
                  <video 
                    src={video.src} 
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-1000"
                  />
                  <motion.div layout transition={springTransition} className={`absolute inset-0 bg-gradient-to-t ${spot.isMain ? 'from-black/90 via-black/20 to-transparent opacity-80' : 'from-black/90 via-black/20 to-transparent'}`} />
                  


                  <motion.div layout="position" transition={springTransition} className={`absolute bottom-0 left-0 w-full ${spot.isMain ? 'p-5 md:p-6 lg:p-8' : 'p-5 lg:p-6'}`}>
                    <AnimatePresence mode="popLayout">
                      {spot.isMain ? (
                        <motion.div
                          key="main-content"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight mb-2 lg:mb-3">
                            {video.titleMain}
                          </h3>
                          <p className="text-white/80 max-w-xs font-light text-[10px] md:text-xs">
                            {video.descMain}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sub-content"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className={`font-serif text-white ${spot.subType === 'tall' ? 'text-lg lg:text-xl mb-1.5 lg:mb-2' : 'text-lg lg:text-xl mb-0.5 lg:mb-1'}`}>
                            {video.titleSub}
                          </h3>
                          {spot.subType === 'tall' ? (
                            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 text-white/90 text-[8px] lg:text-[10px] w-fit">
                              <Leaf size={10} />
                              {video.badge}
                            </div>
                          ) : (
                            <p className="text-white/70 text-[10px] font-light">
                              {video.descSub}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Static Info Box (Always Order 2) */}
            <motion.div variants={itemVariants} className="order-2 col-span-1 md:col-span-2 md:row-span-1 relative rounded-2xl lg:rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-md min-h-[200px] md:min-h-0 cursor-pointer">
              <img 
                src="/Ayurvadic/Ayurvedic.webp" 
                alt="Ayurvedic Background"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
              
              <div className="relative z-10 w-full h-full p-5 lg:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-serif text-white leading-tight mb-1 lg:mb-1.5">Holistic Care</h3>
                  <p className="text-white/80 text-[9px] lg:text-[10px] font-light tracking-wide">BALANCE YOUR DOSHAS NATURALLY.</p>
                </div>
                
                <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2 lg:gap-3">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Leaf size={14} />
                    </div>
                    <span className="text-[8px] text-white/90 font-bold uppercase tracking-wider">Herbal</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Flower2 size={14} />
                    </div>
                    <span className="text-[8px] text-white/90 font-bold uppercase tracking-wider">Mind</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <User size={14} />
                    </div>
                    <span className="text-[8px] text-white/90 font-bold uppercase tracking-wider">Body</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Heart size={14} />
                    </div>
                    <span className="text-[8px] text-white/90 font-bold uppercase tracking-wider">Life</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AncientWisdom;
