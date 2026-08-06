"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Play, Globe, Search, User, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

const DESTINATIONS = [
  { id: 1, title: "SAINT\nANTÖNIEN", subtitle: "Switzerland Alps", desc: "Discover the breathtaking pristine alpine landscapes, perfect for mountain biking and winter sports.", img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&w=1920&q=80" },
  { id: 2, title: "MARRAKECH\nMERZOUGA", subtitle: "Sahara Desert - Morocco", desc: "Mauris malesuada erat amet, eget accumsan id. Maecenas tincidunt, velit at porttitor pulvinar, tortor eros facilisis libero.", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&w=1920&q=80" },
  { id: 3, title: "YOSEMITE\nNATIONAL PARK", subtitle: "Sierra Nevada - United States", desc: "Experience the majestic valleys, towering granite monoliths, deep forests, and cascading waterfalls of Yosemite.", img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&w=1920&q=80" },
  { id: 4, title: "LOS LANCES\nBEACH", subtitle: "Tarifa - Spain", desc: "A spectacular stretch of white sand where the Mediterranean meets the Atlantic, perfect for kitesurfing.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&w=1920&q=80" },
  { id: 5, title: "GÖREME\nVALLEY", subtitle: "Cappadocia - Turkey", desc: "Drift over fairy chimneys and ancient rock-cut churches in a hot air balloon at sunrise.", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&w=1920&q=80" },
  { id: 6, title: "MOUNT\nFUJI", subtitle: "Honshu - Japan", desc: "Japan's highest mountain and most iconic landmark, offering stunning views and a challenging climb.", img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&w=1920&q=80" },
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
      <p className="text-sm md:text-lg tracking-wide mb-2 anim-desc">{displayItem.subtitle}</p>
      <h1 className="text-6xl md:text-7xl lg:text-[100px] font-black uppercase tracking-tighter mb-6 flex flex-col drop-shadow-lg">
        {renderTitle(displayItem.title)}
      </h1>
      <p className="text-gray-200 text-sm md:text-base max-w-md leading-relaxed mb-10 anim-desc drop-shadow-md">
        {displayItem.desc}
      </p>
      
      <div className="flex items-center gap-4 md:gap-6 anim-btn">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#fca311] flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(252,163,17,0.4)]"
        >
          <Bookmark className="w-4 h-4 md:w-5 md:h-5 fill-current" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/30 text-xs md:text-sm font-semibold tracking-widest uppercase bg-black/20 backdrop-blur-sm"
        >
          DISCOVER LOCATION
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
  const [cloneData, setCloneData] = useState<{ rect: DOMRect, item: any } | null>(null);

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
      gsap.fromTo('header',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo('.slider-card',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.08, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    // Sync GSAP DOM resets exactly when React paints the new activeIndex array
    gsap.set('.cards-container', { x: 0 });
    gsap.set('.slider-card', { opacity: 1 });
  }, [activeIndex]);

  const getUpcomingCards = () => {
    const cards = [];
    for (let i = 1; i <= 5; i++) {
      cards.push(DESTINATIONS[(activeIndex + i) % DESTINATIONS.length]);
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
      // Fallback
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % DESTINATIONS.length);
      setIsAnimating(false);
      return;
    }

    // Step 1: Capture exact dimensions
    const rect = firstCard.getBoundingClientRect();
    const currentItem = getUpcomingCards()[0];

    // Trigger text animation immediately
    setTextIndex((prev) => (prev + 1) % DESTINATIONS.length);

    // Create the clone in state
    setCloneData({ rect, item: currentItem });

    // Step 2 & 3: Wait for React to render clone, then animate ONLY clone + transforms
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        
        // Hide original card (but maintain its space perfectly in flexbox)
        gsap.set(firstCard, { opacity: 0 });

        const cloneEl = document.querySelector('.card-clone') as HTMLElement;
        const cloneImg = cloneEl?.querySelector('img');

        if (cloneEl) {
          // Clone scales up to Fullscreen Background
          gsap.to(cloneEl, {
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
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
        }

        // Entire carousel slides smoothly via transform without re-rendering or reflow
        const gap = 16; 
        const moveDistance = firstCard.offsetWidth + gap;

        gsap.to(container, {
          x: -moveDistance,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: () => {
            // Step 4: Animation finished, update true state
            setPrevIndex(activeIndex);
            setActiveIndex((prev) => (prev + 1) % DESTINATIONS.length);
            
            // Clean up
            setCloneData(null);
            setIsAnimating(false);
          }
        });
      });
    });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevIndex(activeIndex);
    const newIdx = (activeIndex - 1 + DESTINATIONS.length) % DESTINATIONS.length;
    setActiveIndex(newIdx);
    setTextIndex(newIdx);
    setTimeout(() => setIsAnimating(false), 800);
  };

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
    <div 
      ref={heroRef} 
      className="relative w-full h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 z-50 overflow-hidden">
        <div ref={progressRef} className="absolute top-0 left-0 h-full w-full bg-[#fca311] origin-left scale-x-0 will-change-transform"></div>
      </div>

      {prevIndex !== null && (
        <div className="absolute inset-0 z-0 old-bg">
          <img src={DESTINATIONS[prevIndex].img} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      <div 
        key={`bg-${DESTINATIONS[activeIndex].id}`}
        className="absolute inset-0 z-0"
      >
        <img src={DESTINATIONS[activeIndex].img} className="active-bg-img w-full h-full object-cover scale-[1.01] will-change-transform" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay opacity-50" />
      </div>

      <header className="absolute top-0 left-0 w-full px-6 md:px-12 pt-8 pb-6 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <Globe className="w-6 h-6" />
          <span className="font-bold tracking-[0.2em] text-sm md:text-base">GLOBE EXPRESS</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-widest text-gray-300">
          <a href="#" className="text-[#fca311] relative">
            HOME
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#fca311] rounded-full"></span>
          </a>
          <a href="#" className="hover:text-white transition-colors">HOLIDAYS</a>
          <a href="#" className="hover:text-white transition-colors">DESTINATIONS</a>
          <a href="#" className="hover:text-white transition-colors">FLIGHTS</a>
          <a href="#" className="hover:text-white transition-colors">OFFERS</a>
          <a href="#" className="hover:text-white transition-colors">CONTACTS</a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="hover:text-[#fca311] transition-colors"><Search className="w-5 h-5" /></button>
          <button className="hover:text-[#fca311] transition-colors"><User className="w-5 h-5" /></button>
        </div>
      </header>

      <div className="relative z-30 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:flex-row lg:items-center pb-20">
        
        <div className="lg:w-1/2 flex flex-col items-start pr-0 lg:pr-10 pt-20 lg:pt-0 hero-text-content will-change-transform">
          <TextContent activeItem={DESTINATIONS[textIndex]} />
        </div>

        <div 
          className="lg:w-1/2 w-full flex flex-col mt-12 lg:mt-32 relative z-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-4 overflow-visible pb-4 cards-container will-change-transform">
            {getUpcomingCards().map((item) => (
              <div 
                key={`card-${item.id}`}
                className="slider-card relative w-48 h-72 md:w-52 md:h-[380px] rounded-[28px] overflow-hidden shrink-0 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                onClick={handleNext}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="card-img absolute inset-0 w-full h-full object-cover will-change-transform"
                />
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-5 z-20">
                  <div className="w-4 h-[1px] bg-white/50 mb-2"></div>
                  <p className="text-[9px] text-white/70 uppercase tracking-widest mb-1">{item.subtitle}</p>
                  <h3 className="text-base font-bold uppercase leading-tight whitespace-pre-line">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 py-8 flex items-center justify-between z-50 pointer-events-none">
        
        <div className="flex-1 hidden md:block"></div>

        <div className="flex items-center justify-center gap-4 pointer-events-auto flex-1">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md">
            <ChevronLeft className="w-5 h-5 text-white/70" />
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md">
            <ChevronRight className="w-5 h-5 text-white/70" />
          </button>
        </div>

        <div className="flex-1 flex justify-end pointer-events-auto">
          <div className="text-5xl lg:text-7xl font-light tracking-tighter">
            0{(activeIndex % DESTINATIONS.length) + 1}
          </div>
        </div>

      </div>

      {cloneData && (
        <div 
          className="card-clone fixed z-[5] overflow-hidden pointer-events-none"
          style={{
            top: cloneData.rect.top,
            left: cloneData.rect.left,
            width: cloneData.rect.width,
            height: cloneData.rect.height,
            borderRadius: '28px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}
        >
          <img src={cloneData.item.img} className="w-full h-full object-cover will-change-transform" alt="" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent clone-card-overlay" />
          
          <div className="absolute inset-0 opacity-0 clone-bg-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay opacity-50" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-5 z-20 clone-text">
            <div className="w-4 h-[1px] bg-white/50 mb-2"></div>
            <p className="text-[9px] text-white/70 uppercase tracking-widest mb-1">{cloneData.item.subtitle}</p>
            <h3 className="text-base font-bold uppercase leading-tight whitespace-pre-line">{cloneData.item.title}</h3>
          </div>
        </div>
      )}

    </div>
  );
};

export default Hero;
