"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { useRouter } from 'next/navigation';

const VALUES = [
  { id: 1, title: "MASTER\nHEALING", subtitle: "Take charge of your well-being", desc: "Master your Healing. Take charge of your well-being with intention and insight. We transcend science to promote a quantum understanding.", img: "/Home/Quantum Hero/Quantum Hero - 1.webp" },
  { id: 2, title: "INNOVATE\nEDUCATION", subtitle: "Reimagine human experience", desc: "Innovate your Education. Reimagine how learning shapes the human experience through expanded learning and purposeful foundation.", img: "/Home/Quantum Hero/Quantum Hero - 2.webp" },
  { id: 3, title: "DISCOVER\nRESEARCH", subtitle: "Reveal what lies beneath", desc: "Discover your Research. Advance your inquiry with clarity and discipline. Challenge norms to uncover deeper understanding.", img: "/Home/Quantum Hero/Quantum Hero - 3.webp" },
  { id: 4, title: "NURTURE\nEXPLORATION", subtitle: "Encourage wonder through inquiry", desc: "Nurture your Exploration. Navigate new ideas with focus and curiosity. Push boundaries to reveal untapped potential.", img: "/Home/Quantum Hero/Quantum Hero - 4.webp" },
  { id: 5, title: "AGORA OF\nWISDOM", subtitle: "Where minds collect", desc: "Welcome to the Quantum Institute. We break the boundaries of what can be achieved through the natural application of theoretical sciences.", img: "/Home/Quantum Hero/Quantum Hero - 5.webp" },
  { id: 6, title: "FUTURE\nIMPACT", subtitle: "Building a better tomorrow", desc: "Drive sustainable change. Focus on holistic progress that honors both ancient wisdom and modern scientific breakthroughs.", img: "/Home/Quantum Hero/Quantum Hero - 6.webp" },
  { id: 7, title: "EXPAND\nHORIZONS", subtitle: "Journey beyond the known", desc: "Step into the unknown. Broaden your perspective and engage with groundbreaking ideas in an ever-evolving ecosystem.", img: "/Home/Quantum Hero/Quantum Hero - 7.webp" },
  { id: 8, title: "ELEVATE\nCONSCIOUSNES", subtitle: "Awaken your true potential", desc: "Tap into deeper states of awareness. Harmonize your internal state with the external world to achieve profound balance.", img: "/Home/Quantum Hero/Quantum Hero - 8.webp" },
  { id: 9, title: "GLOBAL\nSYNERGY", subtitle: "Uniting distinct disciplines", desc: "Forge connections across fields. When distinct minds collaborate, the potential for true innovation becomes limitless.", img: "/Home/Quantum Hero/Quantum Hero - 9.webp" },
  { id: 10, title: "QUANTUM\nMOVEMENT", subtitle: "Transforming the future", desc: "Join the paradigm shift. Participate in a movement dedicated to bridging the gap between holistic health and scientific rigor.", img: "/Home/Quantum Hero/Quantum Hero - 10.webp" },
  { id: 11, title: "INFINITE\nPOSSIBILITIES", subtitle: "Where science meets wonder", desc: "Discover the endless possibilities when we push past the boundaries of conventional understanding.", img: "/Home/Quantum Hero/Quantum Hero - 11.webp" },
];

const renderTitle = (title: string) => {
  return title.split('\n').map((line, i) => (
    <div key={i} className="flex flex-wrap gap-x-3 overflow-hidden leading-[0.85]">
      {line.split(' ').map((word, j) => (
        <span key={j} className="inline-block overflow-hidden pb-3">
          <span className="inline-block word-inner">{word}</span>
        </span>
      ))}
    </div>
  ));
};

const TextContent = ({ activeItem }: { activeItem: any }) => {
  const [displayItem, setDisplayItem] = useState(activeItem);
  const containerRef = useRef(null);
  const router = useRouter();

  useLayoutEffect(() => {
    if (activeItem.id !== displayItem.id) {
      const ctx = gsap.context(() => {
        gsap.to(containerRef.current, {
          y: -60,
          opacity: 0,
          filter: 'blur(12px)',
          duration: 0.6,
          ease: "power3.in",
          onComplete: () => {
            setDisplayItem(activeItem);
            gsap.set(containerRef.current, { y: 0, opacity: 1, filter: 'blur(0px)' });
            
            gsap.fromTo('.word-inner',
              { y: '100%', opacity: 0 },
              { y: '0%', opacity: 1, duration: 0.8, stagger: 0.04, ease: "power4.out" }
            );
            gsap.fromTo('.anim-desc',
              { opacity: 0, x: -30, filter: 'blur(10px)' },
              { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, ease: "power3.out", delay: 0.2 }
            );
            gsap.fromTo('.anim-btn',
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)", delay: 0.3 }
            );
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [activeItem]);

  return (
    <div ref={containerRef} className="flex flex-col items-start w-full z-20">
      <div className="w-8 h-[2px] bg-white mb-6 anim-desc"></div>
      <p className="text-sm md:text-lg tracking-wide mb-2 anim-desc font-serif italic text-white/80">{displayItem.subtitle}</p>
      <h1 className="text-6xl md:text-7xl lg:text-[100px] font-black uppercase tracking-tighter mb-6 flex flex-col drop-shadow-lg">
        {renderTitle(displayItem.title)}
      </h1>
      <p className="text-gray-200 text-sm md:text-base max-w-md leading-relaxed mb-10 anim-desc drop-shadow-md">
        {displayItem.desc}
      </p>
      
      <div className="flex items-center gap-4 md:gap-6 anim-btn">
        <motion.button 
          onClick={() => router.push('/signup')}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(209,80,0,0.9)", borderColor: "rgba(209,80,0,1)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/30 text-xs md:text-sm font-semibold tracking-widest uppercase bg-black/20 backdrop-blur-sm transition-colors duration-300 cursor-pointer"
        >
          JOIN WAITLIST
        </motion.button>
      </div>
    </div>
  );
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Clone data for shared element architecture
  const [cloneData, setCloneData] = useState<{ rect: { top: number, left: number, width: number, height: number }, item: any } | null>(null);
  const [reverseCloneData, setReverseCloneData] = useState<{ rect: { top: number, left: number, width: number, height: number }, item: any } | null>(null);

  const heroPinRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const handleNextRef = useRef<() => void>(() => {});

  useLayoutEffect(() => {
    handleNextRef.current = handleNext;
  });

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.active-bg-img', 
        { scale: 1.2 },
        { scale: 1, duration: 1.5, ease: "power3.out" }
      );
      gsap.fromTo('.slider-card',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.08, duration: 1, ease: "power3.out", delay: 0.5 }
      );
      
      // Pinning and overlap depth effect
      gsap.to(heroRef.current, {
        scale: 0.92,
        opacity: 0.2,
        filter: "blur(10px)",
        ease: "none",
        scrollTrigger: {
          trigger: heroPinRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false, // Allows the next section to smoothly slide over
          scrub: true,
        }
      });
    }, heroPinRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!cloneData && !reverseCloneData) {
      gsap.set('.cards-container', { x: 0 });
      gsap.set('.slider-card', { opacity: 1 });
    }
  }, [activeIndex, cloneData, reverseCloneData]);

  const getUpcomingCards = () => {
    const cards = [];
    for (let i = 1; i <= 4; i++) {
      cards.push(VALUES[(activeIndex + i) % VALUES.length]);
    }
    return cards;
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const container = document.querySelector('.cards-container') as HTMLElement;
    const cards = document.querySelectorAll('.slider-card');
    const firstCard = cards[0] as HTMLElement;

    if (!firstCard || !container) {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % VALUES.length);
      setIsAnimating(false);
      return;
    }

    const rect = firstCard.getBoundingClientRect();
    const heroRect = heroRef.current?.getBoundingClientRect();
    
    let relativeTop = rect.top;
    let relativeLeft = rect.left;
    if (heroRect) {
      relativeTop = rect.top - heroRect.top;
      relativeLeft = rect.left - heroRect.left;
    }

    const currentItem = getUpcomingCards()[0];
    setTextIndex((prev) => (prev + 1) % VALUES.length);

    setCloneData({ rect: { top: relativeTop, left: relativeLeft, width: rect.width, height: rect.height }, item: currentItem });
  };

  useLayoutEffect(() => {
    if (!cloneData) return;
    const container = document.querySelector('.cards-container') as HTMLElement;
    const cards = document.querySelectorAll('.slider-card');
    const firstCard = cards[0] as HTMLElement;
    const cloneEl = document.querySelector('.card-clone') as HTMLElement;
    const cloneImg = cloneEl?.querySelector('img');

    if (firstCard && container && cloneEl) {
      gsap.set(firstCard, { opacity: 0 });
      
      gsap.to(cloneEl, {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 0,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)',
        duration: 1.2,
        ease: 'power4.inOut'
      });
      
      gsap.to('.clone-card-overlay', { opacity: 0, duration: 1.2, ease: 'power4.inOut' });
      gsap.to('.clone-bg-overlay', { opacity: 1, duration: 1.2, ease: 'power4.inOut' });
      gsap.to('.clone-text', { opacity: 0, duration: 0.6, ease: 'power2.inOut' });
      
      if (cloneImg) {
        gsap.to(cloneImg, { scale: 1.01, duration: 1.2, ease: 'power4.inOut' });
      }

      const gap = 16; 
      const moveDistance = firstCard.offsetWidth + gap;

      gsap.to(container, {
        x: -moveDistance,
        duration: 1.2,
        ease: 'power4.inOut',
        onComplete: () => {
          setPrevIndex(activeIndex);
          setActiveIndex((prev) => (prev + 1) % VALUES.length);
          setCloneData(null);
          setIsAnimating(false);
        }
      });
    }
  }, [cloneData]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const container = document.querySelector('.cards-container') as HTMLElement;
    const cards = document.querySelectorAll('.slider-card');
    const firstCard = cards[0] as HTMLElement;

    if (!firstCard || !container) {
      setPrevIndex(activeIndex);
      const newIdx = (activeIndex - 1 + VALUES.length) % VALUES.length;
      setActiveIndex(newIdx);
      setTextIndex(newIdx);
      setIsAnimating(false);
      return;
    }

    const rect = firstCard.getBoundingClientRect();
    const heroRect = heroRef.current?.getBoundingClientRect();
    
    let relativeTop = rect.top;
    let relativeLeft = rect.left;
    if (heroRect) {
      relativeTop = rect.top - heroRect.top;
      relativeLeft = rect.left - heroRect.left;
    }

    const currentBgItem = VALUES[activeIndex];
    const newIdx = (activeIndex - 1 + VALUES.length) % VALUES.length;

    setTextIndex(newIdx);
    
    setReverseCloneData({ 
      rect: { top: relativeTop, left: relativeLeft, width: rect.width, height: rect.height }, 
      item: currentBgItem 
    });
    
    setPrevIndex(activeIndex); 
    setActiveIndex(newIdx); 
  };

  useLayoutEffect(() => {
    if (!reverseCloneData) return;

    const currentContainer = document.querySelector('.cards-container') as HTMLElement;
    const newCards = document.querySelectorAll('.slider-card');
    const newFirstCard = newCards[0] as HTMLElement;
    const cloneEl = document.querySelector('.reverse-clone') as HTMLElement;
    const cloneImg = cloneEl?.querySelector('img');

    if (newFirstCard && currentContainer && cloneEl) {
      gsap.set(newFirstCard, { opacity: 0 });
      
      const gap = 16;
      const moveDistance = newFirstCard.offsetWidth + gap;
      
      gsap.set(currentContainer, { x: -moveDistance });
      
      gsap.to(currentContainer, { x: 0, duration: 1.2, ease: 'power4.inOut' });

      gsap.set(cloneEl, {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '0px',
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
      });

      gsap.to(cloneEl, {
        top: reverseCloneData.rect.top,
        left: reverseCloneData.rect.left,
        width: reverseCloneData.rect.width,
        height: reverseCloneData.rect.height,
        borderRadius: '28px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        duration: 1.2,
        ease: 'power4.inOut'
      });
      
      gsap.fromTo('.rev-clone-bg-overlay', { opacity: 1 }, { opacity: 0, duration: 1.2, ease: 'power4.inOut' });
      gsap.fromTo('.rev-clone-card-overlay', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power4.inOut' });
      gsap.fromTo('.rev-clone-text', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.6, ease: 'power2.inOut' });
      
      if (cloneImg) {
        gsap.fromTo(cloneImg, { scale: 1.01 }, { scale: 1, duration: 1.2, ease: 'power4.inOut' });
      }

      setTimeout(() => {
        gsap.set(newFirstCard, { opacity: 1 });
        setReverseCloneData(null);
        setIsAnimating(false);
      }, 1200);
    }
  }, [reverseCloneData]);

  useEffect(() => {
    if (tweenRef.current) tweenRef.current.kill();
    gsap.set(progressRef.current, { scaleX: 0 });
    
    tweenRef.current = gsap.to(progressRef.current, {
      scaleX: 1,
      duration: 6,
      ease: "linear",
      onComplete: () => handleNextRef.current()
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [activeIndex]);

  useEffect(() => {
    if (!tweenRef.current) return;
    if (isAnimating || isHovered) {
      tweenRef.current.pause();
    } else {
      tweenRef.current.play();
    }
  }, [isAnimating, isHovered]);

  const handleCardHover = (e: React.MouseEvent, isEnter: boolean) => {
    const target = e.currentTarget;
    const img = target.querySelector('.card-img');
    const overlay = target.querySelector('.card-overlay');
    if (isEnter) {
      gsap.to(target, { scale: 1.05, y: -10, duration: 0.4, ease: 'power3.out' });
      gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power3.out' });
      gsap.to(overlay, { backgroundColor: 'rgba(0,0,0,0)', duration: 0.4 });
    } else {
      gsap.to(target, { scale: 1, y: 0, duration: 0.4, ease: 'power3.out' });
      gsap.to(img, { scale: 1, duration: 0.6, ease: 'power3.out' });
      gsap.to(overlay, { backgroundColor: 'rgba(0,0,0,0.1)', duration: 0.4 });
    }
  };

  return (
    <div ref={heroPinRef} className="relative w-full h-screen z-0">
      <div 
        ref={heroRef} 
        className="relative w-full h-full bg-[#000000] text-white overflow-hidden font-sans origin-center will-change-transform"
      >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 z-50 overflow-hidden">
        <div ref={progressRef} className="absolute top-0 left-0 h-full w-full bg-[#E05A00] origin-left scale-x-0 will-change-transform"></div>
      </div>

      {prevIndex !== null && VALUES[prevIndex] && (
        <div className="absolute inset-0 z-0 old-bg">
          <img src={VALUES[prevIndex].img} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {VALUES[activeIndex] && (
        <div 
          key={`bg-${VALUES[activeIndex].id}`}
          className="absolute inset-0 z-0"
        >
          <img src={VALUES[activeIndex].img} className="active-bg-img w-full h-full object-cover scale-[1.01] will-change-transform" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-30" />
        </div>
      )}



      <div className="relative z-30 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:flex-row lg:items-center pb-20">
        
        <div className="lg:w-[55%] flex flex-col items-start pr-0 lg:pr-10 pt-20 lg:pt-24 hero-text-content will-change-transform">
          {VALUES[textIndex] && <TextContent activeItem={VALUES[textIndex]} />}
        </div>

        <div 
          className="lg:w-[45%] w-full flex flex-col mt-12 lg:mt-32 relative z-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-4 overflow-visible pb-4 cards-container will-change-transform">
            {getUpcomingCards().map((item) => (
              <div 
                key={`card-${item.id}`}
                className="slider-card relative w-48 h-72 md:w-52 md:h-[380px] rounded-[28px] border border-white/10 overflow-hidden shrink-0 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                onClick={handleNext}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="card-img absolute inset-0 w-full h-full object-cover will-change-transform"
                />
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
                
                <div className="absolute bottom-0 left-0 p-5 z-20">
                  <div className="w-6 h-[2px] bg-[#E05A00] mb-3"></div>
                  <p className="text-[10px] font-serif italic text-white/80 tracking-wide mb-1">{item.subtitle}</p>
                  <h3 className="text-base font-bold uppercase tracking-wide leading-tight whitespace-pre-line">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 py-8 flex items-center justify-between z-50 pointer-events-none">
        
        <div className="flex-1 hidden md:block"></div>

        <div className="flex items-center justify-center gap-4 pointer-events-auto flex-1">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md group">
            <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white" />
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md group">
            <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white" />
          </button>
        </div>

        <div className="flex-1 flex justify-end pointer-events-auto">
          <div className="text-5xl lg:text-7xl font-light tracking-tighter opacity-80 font-serif">
            {String((activeIndex % VALUES.length) + 1).padStart(2, '0')}
          </div>
        </div>

      </div>

      {cloneData && (
        <div 
          className="card-clone absolute z-[5] overflow-hidden pointer-events-none"
          style={{
            top: cloneData.rect.top,
            left: cloneData.rect.left,
            width: cloneData.rect.width,
            height: cloneData.rect.height,
            borderRadius: '28px', // Matches the updated slider-card rounding
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          <img src={cloneData.item.img} className="w-full h-full object-cover will-change-transform" alt="" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 clone-card-overlay" />
          
          <div className="absolute inset-0 opacity-0 clone-bg-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-30" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-5 z-20 clone-text">
            <div className="w-6 h-[2px] bg-[#E05A00] mb-3"></div>
            <p className="text-[10px] font-serif italic text-white/80 tracking-wide mb-1">{cloneData.item.subtitle}</p>
            <h3 className="text-base font-bold uppercase tracking-wide leading-tight whitespace-pre-line">{cloneData.item.title}</h3>
          </div>
        </div>
      )}

      {reverseCloneData && (
        <div 
          className="reverse-clone absolute z-[5] overflow-hidden pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '0px', 
            boxShadow: '0px 0px 0px rgba(0,0,0,0)'
          }}
        >
          <img src={reverseCloneData.item.img} className="w-full h-full object-cover will-change-transform" alt="" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 rev-clone-card-overlay opacity-0" />
          
          <div className="absolute inset-0 rev-clone-bg-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-30" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-5 z-20 rev-clone-text opacity-0">
            <div className="w-6 h-[2px] bg-[#E05A00] mb-3"></div>
            <p className="text-[10px] font-serif italic text-white/80 tracking-wide mb-1">{reverseCloneData.item.subtitle}</p>
            <h3 className="text-base font-bold uppercase tracking-wide leading-tight whitespace-pre-line">{reverseCloneData.item.title}</h3>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default Hero;
