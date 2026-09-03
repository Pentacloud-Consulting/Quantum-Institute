"use client";

import React, { useState, useRef } from "react";
import { motion, LayoutGroup, useScroll, useTransform } from "framer-motion";

const imagesData = [
  { id: 1, src: "/OG IMAGES/q1.png", alt: "Architecture Detail 1", title: "THE APEX", description: "A towering testament to structural superiority." },
  { id: 2, src: "/OG IMAGES/q2.png", alt: "Architecture Detail 2", title: "QUANTUM CORE", description: "Energy distribution network seamlessly integrated." },
  { id: 3, src: "/OG IMAGES/q3.png", alt: "Architecture Detail 3", title: "SOLAR VEIL", description: "Photovoltaic glass providing ambient lighting." },
  { id: 4, src: "/OG IMAGES/q4.png", alt: "Architecture Detail 4", title: "CANYON WALK", description: "Natural pathways mimicking ancient landscapes." },
  { id: 5, src: "/OG IMAGES/q5.png", alt: "Architecture Detail 5", title: "THE AGORÀ", description: "Central gathering space for community resonance." },
  { id: 6, src: "/OG IMAGES/q6.png", alt: "Architecture Detail 6", title: "ELYSIUM ARCH", description: "Vaulted ceilings engineered for acoustic perfection." },
  { id: 7, src: "/OG IMAGES/q7.png", alt: "Architecture Detail 7", title: "ZENITH POINT", description: "Highest observation deck offering panoramic views." },
  { id: 8, src: "/OG IMAGES/q8.png", alt: "Architecture Detail 8", title: "OASIS ATRIUM", description: "Lush indoor gardens sustaining natural microclimates." },
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
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
      
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 text-white">
        
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
          className={`font-serif tracking-widest uppercase mb-2 transform transition-transform duration-500 group-hover:-translate-y-2 ${isSelected ? 'text-4xl md:text-6xl drop-shadow-2xl' : 'text-2xl md:text-3xl'}`}
        >
          {img.title}
        </motion.h3>
        <p className={`text-sm md:text-base font-sans text-white/90 max-w-sm transition-all duration-500 delay-75 ${isSelected ? 'opacity-100 translate-y-0 drop-shadow-lg' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
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
