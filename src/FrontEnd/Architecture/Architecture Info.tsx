"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const architectureData = [
  {
    id: "agora",
    title: "AGORÀ",
    subtitle: "The Center of Collective Consciousness",
    description: "A monumental space designed to foster unity and open discourse. The Agorà harnesses natural light and sweeping curves to create an environment where minds converge, facilitating deep meditation, collective healing, and profound shared experiences.",
    image: "/Home images/AGORÀ.png",
  },
  {
    id: "canyon",
    title: "CANYON",
    subtitle: "A Journey Through the Earth",
    description: "Carved with precision and inspired by nature's deepest ravines, the Canyon offers a transcendent passage. The sheer scale and raw textures connect individuals back to the primordial earth, encouraging introspection and a profound grounding effect.",
    image: "/Home images/CANYON.png",
  },
  {
    id: "elysium",
    title: "ELYSIUM",
    subtitle: "The Sanctuary of Light",
    description: "Elysium is the pinnacle of serenity. Dappled sunlight filters through structural voids, casting divine geometric patterns that dance across the stone. It is a sanctuary designed for pure elevation, where the soul finds its ultimate rest and rejuvenation.",
    image: "/Home images/ELYSIUM.png",
  }
];

const ArchitectureInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.info-section');
      
      sections.forEach((section: any, i) => {
        const textWrapper = section.querySelector('.text-wrapper');
        const imageWrapper = section.querySelector('.image-wrapper');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          }
        });

        // Alternate incoming directions
        const isEven = i % 2 === 0;

        tl.fromTo(imageWrapper, 
          { x: isEven ? -100 : 100, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          0
        )
        .fromTo(textWrapper,
          { x: isEven ? 100 : -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          0.2
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#faf9f8] py-24 flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-6 md:px-12 mx-auto flex flex-col gap-24 md:gap-40">
        {architectureData.map((item, index) => (
          <div 
            key={item.id} 
            className={`info-section w-full flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
          >
            {/* Image Container */}
            <div className="image-wrapper w-full md:w-1/2 flex justify-center opacity-0">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5 group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* Text Container */}
            <div className="text-wrapper w-full md:w-1/2 flex flex-col opacity-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#D15000]"></div>
                <span className="text-[#D15000] tracking-[0.2em] text-xs font-bold uppercase">Space {String(index + 1).padStart(2, '0')}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-black tracking-tight mb-4 drop-shadow-sm">
                {item.title}
              </h2>
              <h4 className="text-lg md:text-xl text-black/80 font-light italic mb-8 border-l-2 border-black/20 pl-4">
                {item.subtitle}
              </h4>
              <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-lg font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureInfo;
