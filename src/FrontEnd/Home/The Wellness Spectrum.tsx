"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const states = [
  {
    num: "01",
    title: "Sound & Vibrational Therapy",
    desc: "Sound Baths · Singing Bowls · Reiki · Frequency Therapy",
    img: "/Home/The%20Wellness%20Spectrum/Sound%20%26%20Vibrational%20Therapy.webp"
  },
  {
    num: "02",
    title: "Holistic & Integrative Wellness",
    desc: "Naturopathy · Aromatherapy · Reflexology · Biofeedback · Forest Bathing",
    img: "/Home/The%20Wellness%20Spectrum/Holistic%20%26%20Integrative%20Wellness.webp"
  },
  {
    num: "03",
    title: "Water & Sensory Therapies",
    desc: "Floatation · Hydrotherapy · Balneotherapy",
    img: "/Home/The%20Wellness%20Spectrum/Water%20%26%20Sensory%20Therapies.webp"
  },
  {
    num: "04",
    title: "Meditation, Breathwork & Movement",
    desc: "Meditation · Breathwork · Yoga · Tai Chi · Qigong",
    img: "/Home/The%20Wellness%20Spectrum/Meditation,%20Breathwork%20%26%20Movement.webp"
  },
  {
    num: "05",
    title: "Traditional Bodywork & Detox",
    desc: "Hijama · Acupuncture · Acupressure · Lymphatic Massage",
    img: "/Home/The%20Wellness%20Spectrum/Traditional%20Bodywork%20%26%20Detox.webp"
  }
];

const TheWellnessSpectrum = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getMoveDist = () => {
      if (!wrapperRef.current || !cardRef.current) return 0;
      return -(wrapperRef.current.offsetWidth - cardRef.current.offsetWidth);
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "+=4000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      const DURATION = 100;
      const TRANS_DUR = 40;
      const HALF = TRANS_DUR / 2;

      // 1. Initial State Setup
      gsap.set(".wellness-bg-0", { autoAlpha: 1, scale: 1.0 });
      gsap.set(".wellness-content-0 .num-title", { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      gsap.set(".wellness-content-0 .desc", { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      
      for (let i = 1; i < 5; i++) {
        gsap.set(`.wellness-bg-${i}`, { autoAlpha: 0, scale: 1.03 });
        gsap.set(`.wellness-content-${i} .num-title`, { autoAlpha: 0, y: 20, filter: "blur(6px)" });
        gsap.set(`.wellness-content-${i} .desc`, { autoAlpha: 0, y: 20, filter: "blur(6px)" });
      }

      // Initial zoom for first image spanning its active lifetime
      tl.to(".wellness-bg-0", { scale: 1.08, ease: "none", duration: 120 }, 0);

      // 2. Transitions
      for (let i = 0; i < 4; i++) {
        const start = (i + 1) * DURATION - HALF; 
        const mid = (i + 1) * DURATION;          
        const end = (i + 1) * DURATION + HALF;   
        
        const isMovingLeft = (i % 2 === 0);

        // Card Move
        tl.to(cardRef.current, {
          x: isMovingLeft ? () => getMoveDist() : 0,
          ease: "power2.inOut",
          duration: TRANS_DUR,
        }, start);

        // Background Crossfade
        tl.to(`.wellness-bg-${i + 1}`, { 
          autoAlpha: 1, 
          duration: TRANS_DUR, 
          ease: "none" 
        }, start);

        // Image Zoom
        const endActive = (i === 3) ? 500 : (i + 2) * DURATION + HALF;
        tl.fromTo(`.wellness-bg-${i + 1}`,
          { scale: 1.03 },
          { scale: 1.08, ease: "none", duration: (endActive - start) },
          start
        );

        // Text Fade Out (Old)
        tl.to(`.wellness-content-${i} .num-title`, { 
          autoAlpha: 0, y: -15, filter: "blur(6px)", duration: HALF, ease: "power2.inOut" 
        }, start);
        tl.to(`.wellness-content-${i} .desc`, { 
          autoAlpha: 0, y: -15, filter: "blur(6px)", duration: HALF, ease: "power2.inOut" 
        }, start + 5);

        // Text Fade In (New)
        tl.to(`.wellness-content-${i + 1} .num-title`, { 
          autoAlpha: 1, y: 0, filter: "blur(0px)", duration: HALF, ease: "power2.out" 
        }, mid);
        tl.to(`.wellness-content-${i + 1} .desc`, { 
          autoAlpha: 1, y: 0, filter: "blur(0px)", duration: HALF, ease: "power2.out" 
        }, mid + 5);
      }

      tl.to({}, { duration: 80 }); // Pad end to allow last state to settle

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#fafafa] z-20 pt-20">
      
      {/* Centered Main Container */}
      <div className="relative w-full h-[70vh] min-h-[500px] lg:min-h-[600px] max-w-[1600px] mx-auto">
        
        {/* Background Images Container */}
        <div className="absolute inset-4 md:inset-x-12 md:inset-y-0 lg:inset-x-24 lg:inset-y-0 rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-black shadow-2xl">
          {states.map((s, i) => (
          <div 
            key={i} 
            className={`wellness-bg-${i} absolute inset-0 w-full h-full will-change-transform`}
          >
            <img 
              src={s.img} 
              alt={s.title} 
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle dark overlay for readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
        </div>

        {/* Content Card Wrapper */}
        <div className="absolute inset-0 z-30 flex items-end pointer-events-none px-6 md:px-16 lg:px-32 pb-6 md:pb-8 lg:pb-10">
          <div ref={wrapperRef} className="relative w-full h-full flex items-end">
          
          {/* The Card */}
          <div 
            ref={cardRef} 
            className="absolute right-0 w-full max-w-[420px] lg:max-w-[460px] bg-white/30 backdrop-blur-md rounded-[2rem] p-10 lg:p-12 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.15)] pointer-events-auto will-change-transform border border-white/40"
          >
            {/* Fixed height container to prevent jumping during crossfade */}
            <div className="relative z-10 w-full h-[220px] md:h-[200px]">
              {states.map((s, i) => (
                <div 
                  key={i} 
                  className={`wellness-content-${i} absolute inset-0 flex flex-col justify-center`}
                >
                  <div className="num-title will-change-transform">
                    <h4 className="text-[#E05A00] text-xs md:text-sm font-bold tracking-[0.2em] mb-3 opacity-90 uppercase">
                      {s.num}
                    </h4>
                    <h2 className="text-3xl lg:text-[34px] font-serif text-black leading-[1.2] mb-4 font-light tracking-tight">
                      {s.title}
                    </h2>
                  </div>
                  <div className="desc will-change-transform mt-auto">
                    <p className="text-[13px] lg:text-[14px] text-gray-700 leading-relaxed font-sans font-light">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      </div>

    </section>
  );
};

export default TheWellnessSpectrum;
