"use client";

import React, { useEffect, useRef } from 'react';
import { Leaf, ArrowRight, Flower2, Heart, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftImage1Ref = useRef<HTMLDivElement | null>(null);
  const leftImage2Ref = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(leftImage1Ref.current, 
        { y: '10vh', opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 
        0
      )
      .fromTo(leftImage2Ref.current, 
        { y: '-10vh', opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 
        0.1
      )
      .fromTo(badgeRef.current, 
        { scale: 0, opacity: 0, rotation: -45 }, 
        { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(1.5)" }, 
        0.2
      );

      // Animate the right side content sequentially
      if (rightContentRef.current) {
        tl.fromTo(rightContentRef.current.children,
          { y: '5vh', opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
          0.2
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white">
      <section ref={sectionRef as any} className="relative w-full py-12 lg:py-24 overflow-hidden z-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Left Side - Images */}
        <div className="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-start gap-4 lg:gap-6 min-h-[300px] lg:min-h-[500px] pl-0 lg:pl-6">
          
          {/* Circular Badge */}
          <div ref={badgeRef} className="absolute top-2 sm:top-10 left-[12%] sm:left-[20%] lg:left-[16%] z-20 w-20 h-20 lg:w-28 lg:h-28 bg-[#E05A00] rounded-full flex items-center justify-center shadow-xl opacity-0">
             {/* Inner Leaf */}
             <div className="absolute inset-0 flex items-center justify-center">
               <Leaf size={16} className="lg:w-6 lg:h-6 text-white" strokeWidth={1.5} />
             </div>
             {/* Spinning text */}
             <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
               <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
               <text fontSize="11" fill="white" letterSpacing="1.5" fontWeight="600">
                 <textPath href="#circlePath" startOffset="0%">
                   QUANTUM INSTITUTE • QUANTUM INSTITUTE •
                 </textPath>
               </text>
             </svg>
          </div>

          {/* Arch Image (Left) */}
          <div ref={leftImage1Ref} className="relative w-[45%] max-w-[260px] aspect-[2.8/4] rounded-t-[500px] overflow-hidden shadow-xl mt-10 lg:mt-16 z-10 border-4 border-white opacity-0">
            <img 
              src="/Home/The Wellness Spectrum/Holistic & Integrative Wellness.webp" 
              alt="Ayurvedic Herbs"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pill Image (Right) */}
          <div ref={leftImage2Ref} className="relative w-[45%] max-w-[260px] aspect-[1/2.2] rounded-full overflow-hidden shadow-xl mb-4 lg:mb-8 z-10 border-4 border-white opacity-0">
            <img 
              src="/Peace/Peace -7.webp" 
              alt="Meditation and Wellness"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Decorative Leaves Background */}
          <div className="absolute -left-10 bottom-0 -z-0 opacity-40 pointer-events-none">
             <Leaf size={100} className="lg:w-[140px] lg:h-[140px] text-[#E05A00] -rotate-[60deg]" strokeWidth={0.5} />
          </div>

        </div>

        {/* Right Side - Content */}
        <div ref={rightContentRef} className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-5 lg:pl-6">
          <div className="flex items-center gap-2 text-[#E05A00] font-semibold text-[10px] lg:text-xs tracking-[0.15em] uppercase opacity-0">
            <Leaf size={14} />
            <span>ABOUT AYURVEDA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif text-[#222] leading-[1.15] opacity-0">
            Ayurveda.<br />
            Ancient Wisdom,<br />
            Timeless <span className="text-[#E05A00]">Healing.</span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4 my-1 lg:my-2 opacity-0">
            <div className="h-[1px] w-8 bg-[#E05A00]/30"></div>
            <Flower2 size={16} className="text-[#E05A00]" strokeWidth={1.5} />
            <div className="h-[1px] w-8 bg-[#E05A00]/30"></div>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed opacity-0">
            Ayurveda is a holistic way of life that harmonizes the body, mind and spirit. 
            Through natural therapies, mindful living and personalized care, we help you 
            restore balance and awaken your true wellbeing.
          </p>

          {/* Icons Grid */}
          <div className="grid grid-cols-4 gap-2 mt-2 lg:mt-4 max-w-[420px] opacity-0">
            {/* Icon 1 */}
            <div className="flex flex-col items-center gap-1.5 lg:gap-3">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#f1ebd9] border border-black/5 flex items-center justify-center text-[#E05A00]">
                <Leaf size={16} className="lg:w-[22px] lg:h-[22px]" strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[9px] lg:text-[11px] font-semibold text-center leading-tight">Natural<br/>Therapies</span>
            </div>
            
            {/* Icon 2 */}
            <div className="flex flex-col items-center gap-1.5 lg:gap-3">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#f1ebd9] border border-black/5 flex items-center justify-center text-[#E05A00]">
                <Heart size={16} className="lg:w-[22px] lg:h-[22px]" strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[9px] lg:text-[11px] font-semibold text-center leading-tight">Holistic<br/>Wellbeing</span>
            </div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center gap-1.5 lg:gap-3">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#f1ebd9] border border-black/5 flex items-center justify-center text-[#E05A00]">
                <Droplets size={16} className="lg:w-[22px] lg:h-[22px]" strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[9px] lg:text-[11px] font-semibold text-center leading-tight">Authentic<br/>Ayurveda</span>
            </div>

            {/* Icon 4 */}
            <div className="flex flex-col items-center gap-1.5 lg:gap-3">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#f1ebd9] border border-black/5 flex items-center justify-center text-[#E05A00]">
                <Flower2 size={16} className="lg:w-[22px] lg:h-[22px]" strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[9px] lg:text-[11px] font-semibold text-center leading-tight">Inner<br/>Balance</span>
            </div>
          </div>

          <div className="mt-4 lg:mt-6 opacity-0">
            <button className="flex items-center justify-center gap-2 lg:gap-3 bg-[#E05A00] hover:bg-[#C04800] text-white px-6 py-2.5 lg:px-8 lg:py-3.5 rounded-[2rem] text-xs lg:text-sm font-medium transition-all hover:scale-105 duration-300 shadow-lg group w-fit">
              Discover Our Approach
              <ArrowRight size={14} className="lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

        </div>

      </div>
    </section>
    </div>
  );
};

export default GetInTouch;
