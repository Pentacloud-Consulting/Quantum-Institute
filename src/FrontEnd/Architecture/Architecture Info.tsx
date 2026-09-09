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
    title: "AGORA",
    subtitle: "The Center of Collective Consciousness",
    description: [
      "The internal core of the Institute is named the Agorà, a homage to the historic civic and intellectual hubs of gathering and discourse. It serves as a serene, protected sanctuary that fosters tranquility and deep human connection.",
      "At its heart lies a reflective water feature, surrounded by seating that allows visitors to pause and immerse themselves in the interplay of natural elements. Rays of sunlight stream delicately through an overhead opening, casting dynamic patterns that soothe the senses and invite profound personal healing.",
      "Reaching this oasis requires a thoughtful transition from the intense heat and shifting sands of the surrounding desert. The journey inward is intentionally gradual, bridging the stark external landscape with the cool, cave-like sanctuary of the Agorà.",
      "A series of transitional interstitial spaces act as sensory filters. By gently easing the shift in light, temperature, and stimuli, they enhance comfort and mindfulness, ensuring the journey itself reflects the transformative ethos of the Institute.",
      "The Agorà’s design is deeply rooted in organic harmony. Seating around the central pond follows the Fibonacci spiral, echoing the golden ratio. This natural geometry fosters a sense of balance and unity, subtly drawing people inward as they align with the gentle curves of this mathematically inspired sanctuary."
    ],
    image: "/Home images/AGORA.png",
  },
  {
    id: "canyon",
    title: "CANYON",
    subtitle: "A Journey Through the Earth",
    description: [
      "A canyon in the desert offers sanctuary from exhausting heat and blinding sunlight, yet avoids the dark isolation of a cave. Instead, it acts as a masterful intermediate threshold—a transition space bridging the scorching open-air dunes and the cool, shadowed environments beyond.",
      "The defining characteristic of the Canyon lies in its profound proportions. Narrow corridors formed by massive, high stone-textured walls create an overwhelming sensation of being embraced by the earth itself. The sky above provides the sole source of natural light, cascading down to illuminate the rugged walls and ground below.",
      "Within these walls, the presence of water—whether running streams or still, reflective ponds—instantly signals a shift in climate. Upon entering, the drop in temperature is immediate, and the sudden comfort of shade offers deep relief. Mentally, one experiences an instinctive calm and security, breathing in cool, humid air that starkly contrasts with the burning desert sands just steps away.",
      "This powerful transitional space serves as a critical mediator, guiding visitors seamlessly toward the serene interior of the Agorà. Its intuitive layout draws guests into an infinite spiral of interconnected pathways, offering natural access to all essential areas of the Institute.",
      "Beyond its navigational brilliance, the Canyon is ingeniously designed to elevate the Institute’s sustainability. By channeling abundant natural light deep into the interior, it significantly reduces the need for artificial illumination, while its soaring architectural forms facilitate passive airflow and natural, restorative cooling."
    ],
    image: "/Home images/CANYON.png",
  },
  {
    id: "elysium",
    title: "ELYSIUM",
    subtitle: "The Sanctuary of Light",
    description: [
      "Inclusive architecture fosters a welcoming and adaptable environment, evoking safety, relaxation, and wellbeing. Spaces must flexibly respond to diverse needs, offering both interaction and solitude, brightness and shade—mimicking natural rhythms.",
      "Geometric forms like circles, octagons, and spheres create a sense of community, security, and openness. Thoughtfully integrated, these shapes establish harmonious environments that embrace diversity and enhance human connection.",
      "Elysium comes from ancient Greek mythology - It was believed to be a paradise — a perfect, peaceful place, sometimes called the Elysian Fields. It was described as: Bathed in soft sunlight, gentle breezes, and eternal spring; a place of perfect happiness, rest, and freedom from sorrow; a dream-like, sacred meadow beyond the ordinary world"
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
    <div ref={containerRef} className="w-full bg-[#faf9f8] py-16 md:py-32 flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-6 md:px-12 mx-auto flex flex-col gap-24 md:gap-40">
        {architectureData.map((item, index) => (
          <div 
            key={item.id} 
            id={item.id}
            className={`info-section w-full flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-10 md:gap-20`}
          >
            {/* Sticky Image Column */}
            <div className="w-full md:w-1/2 relative">
              <div className="image-wrapper sticky top-24 md:top-32 w-full [perspective:1000px]">
                <div className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5 group transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner glare for a premium glass-like edge */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/50 rounded-[2rem] pointer-events-none mix-blend-overlay" />
                  {/* Very soft lighting effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Scrolling Text Column */}
            <div className="text-container w-full md:w-1/2 flex flex-col justify-center py-4 md:py-12">
              <div className="flex items-center gap-4 mb-6 text-element">
                <div className="w-12 h-[2px] bg-[#D15000]"></div>
                <span className="text-[#D15000] tracking-[0.3em] text-[11px] md:text-xs font-heading font-bold uppercase">Space {String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal text-black tracking-[0.02em] mb-4 drop-shadow-sm text-element">
                {item.title}
              </h2>
              
              <h4 className="text-base md:text-xl text-black/60 font-heading font-light italic mb-10 border-l-2 border-[#D15000]/30 pl-5 tracking-wide text-element">
                {item.subtitle}
              </h4>
              
              <div className="flex flex-col gap-6">
                {Array.isArray(item.description) 
                  ? item.description.map((p, idx) => (
                      <p key={idx} className="text-[#4a4a4a] text-sm md:text-base leading-[1.8] font-body text-justify text-element">
                        {p}
                      </p>
                    ))
                  : <p className="text-[#4a4a4a] text-sm md:text-base leading-[1.8] font-body text-justify text-element">{item.description}</p>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureInfo;
