"use client";

import React, { useEffect, useRef } from 'react';
import { Leaf, Flower2, User, Heart, ArrowRight, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AncientWisdom = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const box1Ref = useRef<HTMLDivElement | null>(null);
  const box2Ref = useRef<HTMLDivElement | null>(null);
  const box3Ref = useRef<HTMLDivElement | null>(null);
  const box4Ref = useRef<HTMLDivElement | null>(null);
  const box5Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Pin the section independently only on desktop
        ScrollTrigger.create({
          trigger: section,
          start: "center center",
          end: "+=500", // Reduced stick duration so scrolling up isn't tedious
          pin: true,
        });

        // Animation timeline triggers as soon as section enters the viewport
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%", // Starts much earlier when user scrolls down
            toggleActions: "play none none reverse", // Stay visible when scrolling past, only reverse when scrolling all the way up
          }
        });

        // Box 1 from left
        tl.fromTo(box1Ref.current, 
          { x: '-15vw', opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" }, 
          0
        )
        // Box 2 from right
        .fromTo(box2Ref.current, 
          { x: '15vw', opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" }, 
          0.05
        )
        // Box 3 from left
        .fromTo(box3Ref.current, 
          { x: '-15vw', opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" }, 
          0.1
        )
        // Box 4 from down
        .fromTo(box4Ref.current, 
          { y: '15vh', opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }, 
          0.15
        )
        // Box 5 from right
        .fromTo(box5Ref.current, 
          { x: '15vw', opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" }, 
          0.2
        );
      });
    }, containerRef); // Scope to the outer container so pin-spacer is cleaned up properly!

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#fafafa]">
      <section ref={sectionRef as any} className="relative w-full z-20 pt-4 lg:pt-10 overflow-hidden">
        <div className="relative w-full max-w-[1500px] mx-auto px-4 md:px-6 lg:px-8 py-6 lg:py-8 flex flex-col gap-4 lg:gap-6 h-auto lg:h-[90vh] lg:min-h-[650px] lg:max-h-[950px] justify-center">
        
        {/* Top Section - Split into 2 boxes */}
        <div className="w-full flex-none lg:flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-0 lg:min-h-[300px]">
          
          {/* Left Box (Hero Text & Image) */}
          <div ref={box1Ref} className="relative w-full lg:w-2/3 h-[200px] sm:h-[250px] lg:h-full rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-md lg:shadow-xl group flex items-center ring-0 hover:ring-2 hover:ring-inset hover:ring-[#E05A00]/80 transition-all duration-500 cursor-pointer lg:opacity-0">
            <div className="absolute inset-0 z-0">
              <video 
                src="/Videos/Yoga.mp4" 
                autoPlay muted loop playsInline
                className="w-full h-full object-cover scale-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 w-full p-5 sm:p-6 md:p-10 lg:p-12 flex flex-col items-start gap-1.5 lg:gap-4">
              <h2 className="text-[22px] sm:text-3xl md:text-5xl lg:text-[56px] font-serif text-white leading-[1.1] font-light">
                Ancient Wisdom.<br/>Modern Wellness.
              </h2>
              <p className="text-[10px] sm:text-sm md:text-lg text-white/90 max-w-[250px] sm:max-w-md font-light leading-snug lg:leading-relaxed hidden sm:block">
                Experience the power of Ayurveda for natural healing and lifelong balance.
              </p>
              <button className="flex items-center gap-1.5 lg:gap-2 bg-[#E05A00] hover:bg-[#C04800] text-white px-3.5 py-1.5 lg:px-6 lg:py-2.5 rounded-full text-[10px] lg:text-sm font-medium transition-colors mt-1 lg:mt-2">
                Explore Ayurveda <ChevronRight size={14} className="lg:w-[18px] lg:h-[18px]" />
              </button>
            </div>
          </div>

          {/* Right Box (Info Card) */}
          <div ref={box2Ref} className="relative w-full lg:w-1/3 h-[220px] sm:h-[250px] lg:h-full rounded-[1.5rem] lg:rounded-[3rem] p-5 lg:p-10 flex flex-col justify-center shadow-md lg:shadow-xl border border-black/5 overflow-hidden group cursor-pointer lg:opacity-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/Ayurvadic/Ayurvedic.webp" 
                alt="Ayurvedic Background" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark gradient overlay matching the other cards for perfect text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col gap-1.5 lg:gap-5 w-full h-full justify-center">
              <div className="text-white/90 drop-shadow-md hidden sm:block lg:block">
                <Leaf size={18} className="lg:w-8 lg:h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-2xl lg:text-[32px] font-serif text-white leading-tight mb-0.5 lg:mb-3 drop-shadow-lg">
                  Holistic Care<br/>for Your Wellbeing
                </h3>
                <p className="text-[10px] sm:text-sm lg:text-base text-white/90 leading-tight lg:leading-relaxed font-light drop-shadow-md">
                  Balance mind, body & soul the natural way.
                </p>
              </div>

              {/* Icons Row */}
              <div className="flex justify-between items-center mt-2 lg:mt-4 w-full max-w-[230px] lg:max-w-[280px]">
                <div className="flex flex-col items-center gap-1 lg:gap-2">
                  <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <Leaf size={14} className="lg:w-[18px] lg:h-[18px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[8px] lg:text-[10px] text-white/90 font-bold uppercase tracking-wider drop-shadow-md">Herbal</span>
                </div>
                <div className="flex flex-col items-center gap-1 lg:gap-2">
                  <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <Flower2 size={14} className="lg:w-[18px] lg:h-[18px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[8px] lg:text-[10px] text-white/90 font-bold uppercase tracking-wider drop-shadow-md">Mind</span>
                </div>
                <div className="flex flex-col items-center gap-1 lg:gap-2">
                  <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <User size={14} className="lg:w-[18px] lg:h-[18px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[8px] lg:text-[10px] text-white/90 font-bold uppercase tracking-wider drop-shadow-md">Body</span>
                </div>
                <div className="flex flex-col items-center gap-1 lg:gap-2">
                  <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <Heart size={14} className="lg:w-[18px] lg:h-[18px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[8px] lg:text-[10px] text-white/90 font-bold uppercase tracking-wider drop-shadow-md">Life</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 h-auto lg:h-[260px]">
          
          {/* Card 1 */}
          <div ref={box3Ref} className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden w-full h-[180px] lg:h-full group cursor-pointer shadow-md lg:shadow-lg ring-0 hover:ring-2 hover:ring-inset hover:ring-[#E05A00]/80 transition-all duration-500 lg:opacity-0">
            <video 
              src="/Videos/Ayurvedic-Massage.mp4" 
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.25] group-hover:scale-[1.35] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
            
            <div className="absolute inset-0 p-5 lg:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl lg:text-3xl font-serif text-white mb-1 lg:mb-2 leading-tight">Ayurvedic<br/>Massage</h3>
                <p className="text-white/80 text-[11px] lg:text-sm font-light">Detoxify. Rejuvenate. Heal.</p>
              </div>
              <div className="flex justify-start items-end">
                <div className="flex items-center gap-1.5 lg:gap-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-white/90 text-[10px] lg:text-xs">
                  <Leaf size={12} className="lg:w-[14px] lg:h-[14px]" />
                  Body Balance
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={box4Ref} className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden w-full h-[180px] lg:h-full group cursor-pointer shadow-md lg:shadow-lg ring-0 hover:ring-2 hover:ring-inset hover:ring-[#E05A00]/80 transition-all duration-500 lg:opacity-0">
            <video 
              src="/Videos/Herbal Healing.mp4" 
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.25] group-hover:scale-[1.35] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
            
            <div className="absolute inset-0 p-5 lg:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl lg:text-3xl font-serif text-white mb-1 lg:mb-2 leading-tight">Herbal Healing</h3>
                <p className="text-white/80 text-[11px] lg:text-sm font-light max-w-[200px]">Nature's remedy for lasting wellness.</p>
              </div>
              <div className="flex justify-start items-end">
                <div className="flex items-center gap-1.5 lg:gap-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-white/90 text-[10px] lg:text-xs">
                  <Leaf size={12} className="lg:w-[14px] lg:h-[14px]" />
                  Natural Remedies
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div ref={box5Ref} className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden w-full h-[180px] lg:h-full group cursor-pointer shadow-md lg:shadow-lg ring-0 hover:ring-2 hover:ring-inset hover:ring-[#E05A00]/80 transition-all duration-500 lg:opacity-0">
            <video 
              src="/Videos/Meditation.mp4" 
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.25] group-hover:scale-[1.35] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
            
            <div className="absolute inset-0 p-5 lg:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl lg:text-3xl font-serif text-white mb-1 lg:mb-2 leading-tight">Detox &<br/>Rejuvenation</h3>
                <p className="text-white/80 text-[11px] lg:text-sm font-light max-w-[200px]">Cleanse. Restore.<br/>Feel Renewed.</p>
              </div>
              <div className="flex justify-start items-end">
                <div className="flex items-center gap-1.5 lg:gap-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-white/90 text-[10px] lg:text-xs">
                  <Leaf size={12} className="lg:w-[14px] lg:h-[14px]" />
                  Ayurvedic Wellness
                </div>
              </div>
            </div>
          </div>

        </div>

        </div>
      </section>
    </div>
  );
};

export default AncientWisdom;
