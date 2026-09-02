"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SplashAnimation = () => {
  const [isFinished, setIsFinished] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Generate Octagon points
  const getOctagonPoints = (cx: number, cy: number, r: number) => {
    let points = [];
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI / 4) * i - (Math.PI / 8); 
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  const radii = [20, 38, 56, 74, 92]; // Concentric rings

  useEffect(() => {
    // Prevent scrolling while splash is active
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
          document.body.style.overflow = '';
        }
      });

      // 0. Initial Setup
      gsap.set(".octa-ring", { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });
      gsap.set(".center-dot", { scale: 0, opacity: 0 });
      gsap.set(".wordmark", { opacity: 0, y: 20, letterSpacing: "12px", filter: "blur(8px)" });
      gsap.set(".dubai-text", { opacity: 0, y: 10, filter: "blur(4px)" });
      gsap.set("#displace", { attr: { scale: 0 } });
      gsap.set("#blur", { attr: { stdDeviation: 0 } });

      // 1. Center dot ignites and pulses
      tl.to(".center-dot", { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" })
        .to(".center-dot", { scale: 1.2, opacity: 0.8, duration: 0.5, yoyo: true, repeat: 1, ease: "sine.inOut" }, "-=0.1");

      // 2. Rings trace outward
      tl.to(".octa-ring", {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.inOut"
      }, "-=0.6");

      // 3. Mark pulses once
      tl.to(markRef.current, {
        scale: 1.05,
        filter: "drop-shadow(0px 0px 20px rgba(209, 80, 0, 0.6))",
        duration: 0.4,
        ease: "sine.inOut"
      }, "-=0.2")
      .to(markRef.current, {
        scale: 1,
        filter: "drop-shadow(0px 0px 0px rgba(209, 80, 0, 0))",
        duration: 0.4,
        ease: "sine.inOut"
      });

      // 4. Crossfade: SVG fades out, Real Logo fades in
      tl.to(markRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.2")
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }, "<0.2");

      // 5. Pause for a breath with the real logo
      tl.to({}, { duration: 0.8 });

      // 6. Dissolve into golden sand
      tl.to("#displace", { attr: { scale: 150 }, duration: 1.2, ease: "power2.in" })
        .to("#blur", { attr: { stdDeviation: 4 }, duration: 1.2, ease: "power2.in" }, "<")
        .to(textRef.current, { 
          opacity: 0, 
          y: -60, 
          scale: 1.05,
          duration: 1.2, 
          ease: "power2.in" 
        }, "<0.1");

      // 7. Black background fades out seamlessly
      tl.to(bgRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.4");

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (isFinished) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Pure black background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-[#000000] z-10 will-change-transform"
      />

      {/* Main Content Wrapper */}
      <div className="relative z-30 flex flex-col items-center justify-center transform scale-[0.8] sm:scale-100">
        
        {/* SVG Geometric Mark with Wind/Sand Filter */}
        <svg 
          ref={markRef}
          viewBox="0 0 200 200" 
          className="absolute w-48 h-48 md:w-64 md:h-64 overflow-visible will-change-transform"
        >
          <defs>
            {/* Ambient gradients for rings */}
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D15000" stopOpacity="1" />
              <stop offset="100%" stopColor="#D15000" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <g>
            {/* Center Amber Point */}
            <circle cx="100" cy="100" r="3" fill="#D15000" className="center-dot shadow-[0_0_15px_#D15000]" />
            
            {/* Concentric Octagons */}
            {radii.map((r, i) => (
              <polygon
                key={i}
                points={getOctagonPoints(100, 100, r)}
                fill="none"
                stroke="url(#ring-grad)"
                strokeWidth={1.5 - (i * 0.2)} 
                className="octa-ring"
                pathLength="1000" 
              />
            ))}
          </g>
        </svg>

        {/* Real Logo Image that fades in */}
        <div ref={textRef} className="opacity-0 flex flex-col items-center will-change-transform z-20">
          {/* We apply the dissolve filter to a wrapper so it works on the image too */}
          <div className="filter-[url(#sand-dissolve)] flex flex-col items-center">
            <img 
              src="/Logo/Quantum%20Institute%20Logo.png" 
              alt="Quantum Institute Logo"
              className="w-auto h-24 sm:h-32 md:h-40 object-contain drop-shadow-[0_0_20px_rgba(209,80,0,0.3)]"
            />
          </div>
        </div>

        {/* Hidden SVG just to hold the sand filter for the image */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="sand-dissolve" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
              <feOffset dx="0" dy="-20" in="noise" result="shiftedNoise" />
              <feDisplacementMap in="SourceGraphic" in2="shiftedNoise" scale="0" xChannelSelector="R" yChannelSelector="G" id="displace" />
              <feGaussianBlur stdDeviation="0" id="blur" />
            </filter>
          </defs>
        </svg>

      </div>
    </div>
  );
};

export default SplashAnimation;
