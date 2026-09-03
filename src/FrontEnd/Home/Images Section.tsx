"use client";

import React, { useState, useRef } from "react";
import { motion, LayoutGroup, useScroll, useTransform } from "framer-motion";

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

  const baseClasses = "relative w-full overflow-hidden group cursor-pointer shadow-xl bg-black rounded-3xl";
  const layoutClasses = isSelected 
    ? "h-[60vh] md:h-[80vh]" 
    : "aspect-[3/2]";

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
      
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-end text-left p-6 md:p-8 text-white">
        
        {/* Close Indicator for Selected Image */}
        {isSelected && (
          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white bg-black/50 px-5 py-2 rounded-full text-xs font-sans uppercase tracking-widest backdrop-blur-md border border-white/20">
              Close
            </span>
          </div>
        )}

        <motion.h3 
          layoutId={`card-title-${img.id}`}
          transition={sharedTransition}
          className={`font-serif tracking-widest uppercase mb-3 transform transition-transform duration-500 group-hover:-translate-y-1 ${isSelected ? 'text-4xl md:text-6xl drop-shadow-2xl' : 'text-xl md:text-2xl'}`}
        >
          {img.title}
        </motion.h3>
        <p className={`text-sm md:text-base font-sans text-white/85 max-w-md leading-relaxed transition-all duration-500 delay-75 ${isSelected ? 'opacity-100 translate-y-0 drop-shadow-lg' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          {img.description}
        </p>
      </div>
    </motion.div>
  );
};

const ImagesSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const selectedImage = imagesData.find(img => img.id === selectedId);
  const remainingImages = imagesData.filter(img => img.id !== selectedId);

  const handleSelect = (id: number | null) => {
    setHasInteracted(true);
    setSelectedId(id);
  };

  return (
    <LayoutGroup>
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 relative min-h-screen">
      <div className="w-full">
        {/* Title area fades out when an image is expanded for cleaner view */}
        <div className={`text-center transition-all duration-700 ${selectedId ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100 mb-12 md:mb-16'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1e1e1e] tracking-tight">
            Soul Peace
          </h2>
          <p className="text-[#1e1e1e]/60 mt-4 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover a sanctuary designed for inner tranquility. Our spaces are meticulously crafted to nurture the soul, foster deep reflection, and provide a lasting sense of spiritual harmony.
          </p>
        </div>

        <motion.div layout transition={sharedTransition} className="relative w-full">
          {!selectedId ? (
            // DEFAULT 2x4 GRID
            <motion.div layout transition={sharedTransition} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
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
            // EXPANDED SPLIT VIEW
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
