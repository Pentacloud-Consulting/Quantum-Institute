"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { useRouter } from 'next/navigation';

const VALUES = [
  { id: 1, title: "MASTER\nHEALING", subtitle: "Take charge of your well-being", desc: "Master your Healing. Take charge of your well-being with intention and insight. We transcend science to promote a quantum understanding.", img: "/Home/Quantum%20Hero/Quantum%20Hero%20-%2010.webp" },
  { id: 2, title: "ACCESS\nPOINT", subtitle: "Architectural Render", desc: "Innovate your Education. Reimagine how learning shapes the human experience through expanded learning and purposeful foundation.", img: "/OG%20IMAGES/q2.png" },
  { id: 3, title: "EXTERIOR\nVIEW", subtitle: "Architectural Render", desc: "Discover your Research. Advance your inquiry with clarity and discipline. Challenge norms to uncover deeper understanding.", img: "/OG%20IMAGES/q3.png" },
  { id: 4, title: "THE\nAGORÀ", subtitle: "Interior View in Meditation Arrangement", desc: "Nurture your Exploration. Navigate new ideas with focus and curiosity. Push boundaries to reveal untapped potential.", img: "/OG%20IMAGES/q4.png" },
  { id: 5, title: "THE\nELYSIUM", subtitle: "Interior View for Healing and Relaxation", desc: "Welcome to the Quantum Institute. We break the boundaries of what can be achieved through the natural application of theoretical sciences.", img: "/OG%20IMAGES/q5.png" },
  { id: 6, title: "ARCHITECTURAL\nRENDER", subtitle: "Building a better tomorrow", desc: "Drive sustainable change. Focus on holistic progress that honors both ancient wisdom and modern scientific breakthroughs.", img: "/OG%20IMAGES/q6.png" },
  { id: 7, title: "DESERT\nENVIRONMENT", subtitle: "Journey beyond the known", desc: "Step into the unknown. Broaden your perspective and engage with groundbreaking ideas in an ever-evolving ecosystem.", img: "/OG%20IMAGES/q7.png" },
  { id: 8, title: "INTERIOR\nCANYON", subtitle: "Interior View of the Canyon", desc: "Tap into deeper states of awareness. Harmonize your internal state with the external world to achieve profound balance.", img: "/OG%20IMAGES/q8.png" },
  { id: 9, title: "THE\nOASIS", subtitle: "Uniting distinct disciplines", desc: "Forge connections across fields. When distinct minds collaborate, the potential for true innovation becomes limitless.", img: "/OG%20IMAGES/q9.png" },
  { id: 10, title: "ACCESS\nPOINT", subtitle: "Transforming the future", desc: "Join the paradigm shift. Participate in a movement dedicated to bridging the gap between holistic health and scientific rigor.", img: "/OG%20IMAGES/q1.png" },
  { id: 11, title: "ACCESS\nPOINT", subtitle: "Architectural Render", desc: "Discover the endless possibilities when we push past the boundaries of conventional understanding.", img: "/OG%20IMAGES/q2.png" },
];

const renderTitle = (title: string) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6 overflow-hidden leading-[1]">
      {title.replace(/\n/g, ' ').split(' ').map((word, j) => (
        <span key={j} className="inline-block overflow-hidden pb-3">
          <span className="inline-block word-inner">{word}</span>
        </span>
      ))}
    </div>
  );
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
    <div ref={containerRef} className="flex flex-col items-center w-full z-20">
      <h1 className="text-3xl md:text-5xl lg:text-[50px] font-light uppercase tracking-[0.2em] mb-2 md:mb-4 flex flex-col drop-shadow-lg text-center text-white/90">
        {renderTitle(displayItem.title)}
      </h1>
      <p className="text-xs sm:text-sm md:text-lg tracking-[0.2em] lg:tracking-[0.3em] mb-4 md:mb-8 anim-desc font-serif italic text-white/90 text-center">{displayItem.subtitle}</p>
    </div>
  );
};

const Hero_View = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  
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



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.active-bg-img', 
        { scale: 1.2 },
        { scale: 1, duration: 1.5, ease: "power3.out" }
      );
      gsap.fromTo('.slider-card',
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: (i: number) => i === 0 ? 1 : i === 1 ? 0.7 : 0, 
          stagger: 0.08, 
          duration: 1, 
          ease: "power3.out", 
          delay: 0.5 
        }
      );
      
      // Pinning and overlap depth effect removed for normal scroll
    }, heroPinRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!cloneData && !reverseCloneData) {
      gsap.set('.cards-container', { clearProps: "all" });
      gsap.set('.slider-card', { clearProps: "all" });
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

      const computedStyle = window.getComputedStyle(container);
      const gap = parseFloat(computedStyle.gap) || 16; 
      const moveDistance = firstCard.offsetWidth + gap;

      const secondCard = cards[1] as HTMLElement;
      const targetScale = secondCard ? firstCard.offsetWidth / secondCard.offsetWidth : 1.222;
      const xOffset = secondCard ? (firstCard.offsetWidth - secondCard.offsetWidth) / 2 : 16;

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
      
      if (secondCard) {
        gsap.to(secondCard, {
          scale: targetScale,
          x: xOffset,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.inOut'
        });
      }

      const thirdCard = cards[2] as HTMLElement;
      if (thirdCard) {
        gsap.fromTo(thirdCard,
          { x: 0 },
          {
            x: xOffset * 2,
            opacity: 0.7,
            duration: 0.8,
            delay: 0.3, 
            ease: 'power2.out'
          }
        );
      }
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
      
      const computedStyle = window.getComputedStyle(currentContainer);
      const gap = parseFloat(computedStyle.gap) || 16;
      const moveDistance = newFirstCard.offsetWidth + gap;
      
      const newSecondCard = newCards[1] as HTMLElement;
      const startScale = newSecondCard ? newFirstCard.offsetWidth / newSecondCard.offsetWidth : 1.222;
      const xOffset = newSecondCard ? (newFirstCard.offsetWidth - newSecondCard.offsetWidth) / 2 : 16;
      
      gsap.fromTo(currentContainer, 
        { x: -moveDistance }, 
        { x: 0, duration: 1.2, ease: 'power4.inOut' }
      );

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
        borderRadius: window.innerWidth < 768 ? '16px' : '28px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        duration: 1.2,
        ease: 'power4.inOut'
      });
      
      if (newSecondCard) {
        gsap.fromTo(newSecondCard,
          {
            scale: startScale,
            x: xOffset,
            opacity: 1,
          },
          {
            scale: 0.95,
            x: 0,
            opacity: 0.7,
            duration: 1.2,
            ease: 'power4.inOut',
            clearProps: "all"
          }
        );
      }

      const newThirdCard = newCards[2] as HTMLElement;
      if (newThirdCard) {
        gsap.fromTo(newThirdCard,
          { opacity: 0.7, x: xOffset * 2 },
          { opacity: 0, x: 0, duration: 0.8, ease: 'power2.out', clearProps: "all" }
        );
      }
      
      gsap.fromTo('.rev-clone-bg-overlay', { opacity: 1 }, { opacity: 0, duration: 1.2, ease: 'power4.inOut' });
      gsap.fromTo('.rev-clone-card-overlay', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power4.inOut' });
      gsap.fromTo('.rev-clone-text', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.6, ease: 'power2.inOut' });
      
      if (cloneImg) {
        gsap.fromTo(cloneImg, { scale: 1.01 }, { scale: 1, duration: 1.2, ease: 'power4.inOut' });
      }

      setTimeout(() => {
        setReverseCloneData(null);
        setIsAnimating(false);
      }, 1200);
    }
  }, [reverseCloneData]);

  useEffect(() => {
    if (isHovered || isAnimating) return;
    const interval = setInterval(() => {
      handleNextRef.current();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isAnimating]);

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
    <div ref={heroPinRef} className="relative w-full h-[100dvh] z-0">
      <div 
        ref={heroRef} 
        className="relative w-full h-full bg-[#000000] text-white overflow-hidden font-sans origin-center will-change-transform"
      >
      {/* Progress bar removed since rotation is disabled */}

      {prevIndex !== null && VALUES[prevIndex] && (
        <div className="absolute inset-0 z-0 old-bg">
          <img src={VALUES[prevIndex].img} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {VALUES[activeIndex] && (
        <div 
          key={`bg-${VALUES[activeIndex].id}`}
          className="absolute inset-0 z-0"
        >
          <img src={VALUES[activeIndex].img} className="active-bg-img w-full h-full object-cover scale-[1.01] will-change-transform" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/5 mix-blend-overlay opacity-20" />
        </div>
      )}



      {/* Glass curved shape on the left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[55%] w-[160vh] h-[160vh] bg-white/5 backdrop-blur-[16px] rounded-full border border-white/10 pointer-events-none z-10 hidden lg:block shadow-[20px_0_60px_rgba(0,0,0,0.3)]" />

      <div className="relative z-30 w-full h-full flex flex-col justify-center px-4 md:px-8 lg:flex-row-reverse lg:items-center lg:justify-between pb-24 md:pb-20 pt-20 lg:pt-0">
        
        <div className="lg:w-[65%] flex flex-col items-center justify-center pr-0 pt-32 md:pt-56 lg:pt-[65vh] hero-text-content will-change-transform z-20">
          {VALUES[textIndex] && <TextContent activeItem={VALUES[textIndex]} />}
        </div>

        <div 
          className="lg:w-[35%] w-full flex flex-col items-center lg:items-start mt-4 md:mt-12 lg:mt-32 relative z-20 pl-0 lg:pl-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center w-full justify-center lg:justify-start gap-2 lg:gap-4">
            <button onClick={handlePrev} className="hidden lg:flex w-8 h-8 rounded-full border border-white/30 items-center justify-center hover:bg-white/10 transition-all backdrop-blur-md group cursor-pointer shrink-0 z-30">
              <ChevronLeft className="w-4 h-4 text-white/70 group-hover:text-white" />
            </button>
            
            <div className="flex gap-3 md:gap-6 overflow-visible pb-4 cards-container will-change-transform items-center relative">
              {getUpcomingCards().slice(0, 3).map((item, i) => (
                <div 
                  key={`card-${item.id}`}
                  className={`slider-card ${i === 0 ? 'relative w-28 h-48 sm:w-36 sm:h-60 md:w-40 md:h-[280px] lg:w-44 lg:h-[300px]' : i === 1 ? 'relative w-24 h-40 sm:w-28 sm:h-48 md:w-32 md:h-[220px] lg:w-36 lg:h-[240px] opacity-70 scale-95' : 'absolute left-[calc(100%+0.75rem)] md:left-[calc(100%+1.5rem)] w-24 h-40 sm:w-28 sm:h-48 md:w-32 md:h-[220px] lg:w-36 lg:h-[240px] opacity-0 scale-95 pointer-events-none'} rounded-[16px] md:rounded-[20px] border border-white/10 overflow-hidden shrink-0 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}
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
                  
                  <div className="absolute bottom-0 left-0 p-4 md:p-5 z-20">
                    <div className="w-4 md:w-6 h-[2px] bg-[#E05A00] mb-2 md:mb-3"></div>
                    <p className="text-[8px] md:text-[10px] font-serif italic text-white/80 tracking-wide mb-1">{item.subtitle}</p>
                    <h3 className="text-xs md:text-base font-bold uppercase tracking-wide leading-tight whitespace-pre-line">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleNext} className="hidden lg:flex w-8 h-8 rounded-full border border-white/30 items-center justify-center hover:bg-white/10 transition-all backdrop-blur-md group cursor-pointer shrink-0 z-30">
              <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-white" />
            </button>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start w-full lg:pl-14 gap-4 flex-wrap">
            <button 
              onClick={() => router.push('/signup')}
              className="px-6 py-2 md:px-10 md:py-3 rounded-full border-[1.5px] border-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer text-white shadow-lg"
            >
              JOIN WISHLIST
            </button>
            <button 
              onClick={() => router.push('/architecture')}
              className="px-6 py-2 md:px-10 md:py-3 rounded-full border-[1.5px] border-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer text-white shadow-lg"
            >
              ARCHITECTURE
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 py-4 md:py-8 flex items-center justify-between z-50 pointer-events-none">
        
        <div className="flex-1 hidden md:block">
          {/* In mobile, arrows are here. In desktop, we can put pagination dots */}
        </div>

        <div className="flex-1 flex items-center justify-center gap-2 pointer-events-auto">
          {VALUES.map((_, i) => (
            <div 
              key={`dot-${i}`}
              className={`w-1.5 h-1.5 rounded-full ${i === textIndex ? 'bg-white' : 'bg-white/30 border border-white/50'} transition-all duration-300`}
            />
          ))}
        </div>

        <div className="flex-1 flex justify-end pointer-events-auto overflow-hidden">
          <div className="flex items-end opacity-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-3xl md:text-5xl lg:text-5xl font-light font-serif"
              >
                {String((textIndex % VALUES.length) + 1).padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <span className="text-xl md:text-2xl font-light font-serif mb-1 ml-1">/{VALUES.length.toString().padStart(2, '0')}</span>
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
            borderRadius: window.innerWidth < 768 ? '16px' : '28px', // Matches the updated slider-card rounding
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          <img src={cloneData.item.img} className="w-full h-full object-cover will-change-transform" alt="" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 clone-card-overlay" />
          
          <div className="absolute inset-0 opacity-0 clone-bg-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay opacity-20" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-4 md:p-5 z-20 clone-text">
            <div className="w-4 md:w-6 h-[2px] bg-[#E05A00] mb-2 md:mb-3"></div>
            <p className="text-[8px] md:text-[10px] font-serif italic text-white/80 tracking-wide mb-1">{cloneData.item.subtitle}</p>
            <h3 className="text-xs md:text-base font-bold uppercase tracking-wide leading-tight whitespace-pre-line">{cloneData.item.title}</h3>
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay opacity-20" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-4 md:p-5 z-20 rev-clone-text opacity-0">
            <div className="w-4 md:w-6 h-[2px] bg-[#E05A00] mb-2 md:mb-3"></div>
            <p className="text-[8px] md:text-[10px] font-serif italic text-white/80 tracking-wide mb-1">{reverseCloneData.item.subtitle}</p>
            <h3 className="text-xs md:text-base font-bold uppercase tracking-wide leading-tight whitespace-pre-line">{reverseCloneData.item.title}</h3>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default Hero_View;
