"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, LayoutGroup, AnimatePresence, useScroll, useTransform } from "framer-motion";

const imagesData = [
  {
    id: 1,
    src: "/Home/The Wellness Spectrum/Holistic & Integrative Wellness.webp",
    alt: "Holistic & Integrative Wellness",
    title: "HOLISTIC WELLNESS",
    description: "Embrace a complete path to healing where body, mind, and spirit unite. Our integrative approach weaves ancient wisdom with modern science. Every practice is designed to restore wholeness from within."
  },
  {
    id: 2,
    src: "/Home/The Wellness Spectrum/Meditation, Breathwork & Movement.webp",
    alt: "Meditation, Breathwork & Movement",
    title: "BREATH & MOVEMENT",
    description: "Unlock the profound stillness that lives beneath the noise of everyday life. Through guided breathwork and mindful movement, the body awakens. Each session deepens your connection to the present moment."
  },
  {
    id: 3,
    src: "/Home/Quantum Hero/Quantum Hero - 3.webp",
    alt: "Quantum Institute Architecture",
    title: "SACRED ARCHITECTURE",
    description: "Spaces crafted to inspire quiet reverence and inner calm. Every curve and corridor is engineered to align with natural energy flows. Step inside and feel the environment hold you in peace."
  },
  {
    id: 4,
    src: "/Home/Quantum Hero/Quantum Hero - 5.webp",
    alt: "Quantum Institute Sanctuary",
    title: "THE SANCTUARY",
    description: "A timeless refuge where silence becomes its own form of medicine. Immerse yourself in an atmosphere designed for profound rest and renewal. Here, the world slows down and stillness becomes home."
  },
  {
    id: 5,
    src: "/Home/Quantum Hero/Quantum Hero - 6.webp",
    alt: "Quantum Institute Exterior",
    title: "DESERT RESONANCE",
    description: "Born from the desert landscape, this space carries the earth's quiet power. The surrounding environment amplifies clarity, focus, and grounded presence. Nature itself becomes a teacher and a healer."
  },
  {
    id: 6,
    src: "/Home/Quantum Hero/Quantum Hero - 10.webp",
    alt: "Quantum Healing Environment",
    title: "HEALING LIGHT",
    description: "Light is channeled intentionally to guide the body toward restoration. Each illuminated space creates an atmosphere of warmth, safety, and clarity. Bathe in an environment that heals as much as it inspires."
  },
  {
    id: 7,
    src: "/Home/Quantum Hero/Quantum Hero - 11.webp",
    alt: "Quantum Institute Interior",
    title: "INNER OASIS",
    description: "A flowing interior world where water, air, and living nature converge. This immersive environment dissolves tension and invites deep restoration. Every detail exists to soften the edges of the restless mind."
  },
  {
    id: 8,
    src: "/Peace/Peace -7.webp",
    alt: "Soul Peace",
    title: "SOUL PEACE",
    description: "The highest aspiration — a life lived in alignment with your truest self. Soul Peace is not a destination but a practice, cultivated daily in every breath. We create the conditions; you rediscover the stillness within."
  },
];

const sharedTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const ImageCard = ({ img, isSelected, hasInteracted, onClick }: { img: any, isSelected: boolean, hasInteracted: boolean, onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12.5%", "12.5%"]);

  const baseClasses = "relative w-full overflow-hidden group cursor-pointer shadow-lg md:shadow-xl bg-black rounded-2xl md:rounded-3xl";
  const layoutClasses = isSelected 
    ? "h-[50vh] md:h-[80vh]" 
    : "aspect-square md:aspect-[3/2]";

  return (
    <motion.div
      layoutId={`card-wrapper-${img.id}`}
      ref={cardRef}
      onClick={onClick}
      className={`${baseClasses} ${layoutClasses}`}
      transition={sharedTransition}
      // Disable entrance animation if user has interacted to prevent jumping during layout changes
      initial={hasInteracted ? false : { opacity: 0, y: 60 }}
      whileInView={hasInteracted ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="w-full h-full overflow-hidden relative">
        <motion.img
          layoutId={`card-image-${img.id}`}
          transition={sharedTransition}
          // Only apply parallax translation when not selected
          style={isSelected ? { y: 0 } : { y }}
          src={img.src}
          alt={img.alt}
          // Use height 125% for parallax room instead of scale, to allow flawless layoutId projection
          className={`absolute left-0 w-full object-cover will-change-transform transition-transform duration-700 ease-out group-hover:scale-105 ${isSelected ? 'top-0 h-full' : '-top-[12.5%] h-[125%]'}`}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-end text-left p-3 sm:p-5 md:p-8 text-white">
        
        {/* Close Indicator for Selected Image */}
        {isSelected && (
          <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white bg-black/50 px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-sans uppercase tracking-widest backdrop-blur-md border border-white/20">
              Close
            </span>
          </div>
        )}

        <motion.h3 
          layoutId={`card-title-${img.id}`}
          transition={sharedTransition}
          className={`font-serif tracking-widest uppercase mb-1.5 md:mb-3 transform transition-transform duration-500 group-hover:-translate-y-1 ${isSelected ? 'text-2xl md:text-6xl drop-shadow-2xl' : 'text-[10px] sm:text-sm md:text-2xl leading-tight'}`}
        >
          {img.title}
        </motion.h3>
        <p className={`text-[10px] md:text-base font-sans text-white/85 max-w-md leading-relaxed transition-all duration-500 delay-75 ${isSelected ? 'opacity-100 translate-y-0 drop-shadow-lg' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          {img.description}
        </p>
      </div>
    </motion.div>
  );
};

const ImagesSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const selectedImage = imagesData.find(img => img.id === selectedId);
  const remainingImages = imagesData.filter(img => img.id !== selectedId);

  const handleSelect = (id: number | null) => {
    setHasInteracted(true);
    setSelectedId(id);
  };

  return (
    <LayoutGroup>
      <section className="w-full bg-white py-10 md:py-24 px-3 sm:px-4 md:px-8 relative md:min-h-screen">
      <div className="w-full">
        {/* Title area fades out when an image is expanded for cleaner view */}
        <div className={`text-center transition-all duration-700 ${selectedId && !isMobile ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100 mb-8 md:mb-16'}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#1e1e1e] tracking-tight">
            Soul Peace
          </h2>
          <p className="text-[#1e1e1e]/60 mt-3 font-sans text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Discover a sanctuary designed for inner tranquility. Our spaces are meticulously crafted to nurture the soul, foster deep reflection, and provide a lasting sense of spiritual harmony.
          </p>
        </div>

        {/* ─── MOBILE POPUP OVERLAY ─── */}
        <AnimatePresence>
          {isMobile && selectedId && selectedImage && (
            <motion.div
              key="mobile-popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-end justify-center"
              onClick={() => handleSelect(null)}
            >
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-h-[92vh] bg-white rounded-t-3xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => handleSelect(null)}
                  className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20"
                >
                  <span className="text-white text-lg leading-none">✕</span>
                </button>

                {/* Image */}
                <div className="relative w-full h-[55vw] max-h-[55vh] overflow-hidden flex-shrink-0">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Text content */}
                <div className="flex flex-col p-6 pb-10 gap-3 overflow-y-auto">
                  <div className="w-8 h-[2px] bg-[#E05A00]" />
                  <h3 className="font-serif text-2xl uppercase tracking-widest text-[#1e1e1e] leading-tight">
                    {selectedImage.title}
                  </h3>
                  <p className="text-[#1e1e1e]/70 text-sm font-sans leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── DESKTOP / TABLET LAYOUT ─── */}
        <motion.div layout transition={sharedTransition} className="relative w-full">
          {/* Always show grid on mobile; split-view only on desktop */}
          {(!selectedId || isMobile) ? (
            // DEFAULT 2x4 GRID — 2 columns on all screen sizes
            <motion.div layout transition={sharedTransition} className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 lg:gap-10">
              {imagesData.map((img) => (
                <ImageCard 
                  key={`grid-${img.id}`} 
                  img={img} 
                  isSelected={false}
                  hasInteracted={hasInteracted}
                  onClick={() => handleSelect(img.id)} 
                />
              ))}
            </motion.div>
          ) : (
            // EXPANDED SPLIT VIEW (desktop only)
            <motion.div layout transition={sharedTransition} className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-start relative w-full">
              {/* LEFT STICKY COLUMN */}
              <div className="w-full md:w-[60%] lg:w-[65%] md:sticky md:top-[120px] z-30 transition-all duration-700">
                <ImageCard 
                  key={`selected-${selectedImage!.id}`} 
                  img={selectedImage} 
                  isSelected={true}
                  hasInteracted={hasInteracted}
                  onClick={() => handleSelect(null)} 
                />
              </div>

              {/* RIGHT SCROLLABLE LIST */}
              <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col gap-6 md:gap-8 z-10 transition-all duration-700">
                {remainingImages.map((img) => (
                  <ImageCard 
                    key={`list-${img.id}`} 
                    img={img} 
                    isSelected={false}
                    hasInteracted={hasInteracted}
                    onClick={() => handleSelect(img.id)} 
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
        </div>
      </section>
    </LayoutGroup>
  );
};

export default ImagesSection;

