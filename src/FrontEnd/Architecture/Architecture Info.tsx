"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const architectureData = [
  {
    id: "canyon",
    title: "CANYON",
    tag: "SPACE 01 / NATURE'S MEDIATOR",
    subtitle: "A Journey Through the Earth",
    description: [
      "A canyon in the desert offers sanctuary from exhausting heat and blinding sunlight, yet avoids the dark isolation of a cave. Instead, it acts as a masterful intermediate threshold—a transition space bridging the scorching open-air dunes and the cool, shadowed environments beyond.",
      "The defining characteristic of the Canyon lies in its profound proportions. Narrow corridors formed by massive, high stone-textured walls create an overwhelming sensation of being embraced by the earth itself. The sky above provides the sole source of natural light, cascading down to illuminate the rugged walls and ground below.",
      "Within these walls, the presence of water—whether running streams or still, reflective ponds—instantly signals a shift in climate. Upon entering, the drop in temperature is immediate, and the sudden comfort of shade offers deep relief. Mentally, one experiences an instinctive calm and security, breathing in cool, humid air that starkly contrasts with the burning desert sands just steps away."
    ],
    image: "/Home images/CANYON.png",
  },
  {
    id: "agora",
    title: "AGORÀ",
    tag: "SPACE 02 / COLLECTIVE AWAKENING",
    subtitle: "The Center of Collective Consciousness",
    description: [
      "The internal core of the Institute is named the Agorà, a homage to the historic civic and intellectual hubs of gathering and discourse. It serves as a serene, protected sanctuary that fosters tranquility and deep human connection.",
      "At its heart lies a reflective water feature, surrounded by seating that allows visitors to pause and immerse themselves in the interplay of natural elements. Rays of sunlight stream delicately through an overhead opening, casting dynamic patterns that soothe the senses and invite profound personal healing.",
      "Reaching this oasis requires a thoughtful transition from the intense heat and shifting sands of the surrounding desert. The journey inward is intentionally gradual, bridging the stark external landscape with the cool, cave-like sanctuary of the Agorà."
    ],
    image: "/Home images/AGORA.png",
  },
  {
    id: "elysium",
    title: "ELYSIUM",
    tag: "SPACE 03 / SANCTUARY OF LIGHT",
    subtitle: "The Sacred Meadow of Wellbeing",
    description: [
      "Inclusive architecture fosters a welcoming and adaptable environment, evoking safety, relaxation, and wellbeing. Spaces must flexibly respond to diverse needs, offering both interaction and solitude, brightness and shade—mimicking natural rhythms.",
      "Geometric forms like circles, octagons, and spheres create a sense of community, security, and openness. Thoughtfully integrated, these shapes establish harmonious environments that embrace diversity and enhance human connection.",
      "Elysium comes from ancient Greek mythology - It was believed to be a paradise — a perfect, peaceful place, sometimes called the Elysian Fields. It was described as: Bathed in soft sunlight, gentle breezes, and eternal spring; a place of perfect happiness, rest, and freedom from sorrow; a dream-like, sacred meadow beyond the ordinary world."
    ],
    image: "/Home images/ELYSIUM.png",
  }
];

const ArchitectureInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const sections = gsap.utils.toArray('.info-section');
        
        sections.forEach((section: any, i) => {
          const imageWrapper = section.querySelector('.image-wrapper');
          const textElements = section.querySelectorAll('.text-element');
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            }
          });

          const isEven = i % 2 === 0;

          tl.fromTo(imageWrapper, 
            { x: isEven ? -40 : 40, opacity: 0, scale: 0.95 },
            { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", clearProps: "transform" },
            0
          )
          .fromTo(textElements,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", clearProps: "transform" },
            0.2
          );
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#fbf9f5] py-10 md:py-16 lg:py-20 flex flex-col items-center relative overflow-hidden">
      
      {/* Background Soft Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1040px] px-6 md:px-8 mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 relative z-10">
        {architectureData.map((item, index) => (
          <div 
            key={item.id} 
            id={item.id}
            className={`info-section w-full flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-10 bg-gradient-to-b from-white/90 via-[#fbf9f5] to-[#f4efe6]/80 rounded-[2rem] p-5 sm:p-7 md:p-8 border border-[#ea580c]/15 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#ea580c]/30 hover:shadow-[0_15px_40px_rgba(234,88,12,0.06)] transition-all duration-500`}
          >
            {/* Sticky Image Feature Column */}
            <div className="w-full lg:w-4/12 relative shrink-0">
              <div className="image-wrapper w-full [perspective:1000px] group">
                
                {/* Outer Glassmorphic Photo Container (Compact Portrait) */}
                <div className="relative w-full aspect-[3/4] max-h-[340px] lg:max-h-[360px] mx-auto rounded-[1.6rem] p-2 bg-white/90 backdrop-blur-xl border border-[#ea580c]/20 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-700 hover:border-[#ea580c]/40">
                  
                  <div className="w-full h-full rounded-[1.3rem] overflow-hidden relative bg-[#090d16]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Caption Badge */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white">
                      <span className="text-[8px] font-heading font-bold tracking-[0.25em] text-[#ea580c] uppercase">{item.tag}</span>
                      <p className="text-[10px] font-display italic text-white/90 mt-0.5 line-clamp-1">{item.subtitle}</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Peaceful Editorial Text Column */}
            <div className="text-container w-full lg:w-8/12 flex flex-col justify-center">
              
              {/* Category Header Dot & Pill */}
              <div className="flex items-center gap-2 mb-2 text-element">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span className="text-[#ea580c] tracking-[0.25em] text-[10px] font-heading font-bold uppercase">
                  {item.tag}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-[#0f172a] tracking-[0.04em] mb-1.5 text-element">
                {item.title}
              </h2>
              
              <h4 className="text-xs md:text-sm text-[#64748b] font-heading font-light italic mb-4 border-l-2 border-[#ea580c]/30 pl-3 tracking-wide text-element">
                {item.subtitle}
              </h4>
              
              {/* Continuous Serene Body Narrative */}
              <div className="flex flex-col gap-3 text-element">
                {Array.isArray(item.description) 
                  ? item.description.map((p, idx) => (
                      <p key={idx} className="text-slate-600 text-xs md:text-[13px] leading-relaxed font-body text-justify">
                        {p}
                      </p>
                    ))
                  : (
                    <p className="text-slate-600 text-xs md:text-[13px] leading-relaxed font-body text-justify">
                      {item.description}
                    </p>
                  )
                }
              </div>

              {/* Bottom Subtle Divider Line */}
              <div className="w-10 h-[2px] bg-[#ea580c]/30 mt-4 text-element" />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureInfo;
