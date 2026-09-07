"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// 🚨 GEOMETRIC VECTOR ANIMATION. EXACTLY 8 STRAIGHT SIDES PER OCTAGON. EXACTLY 8 SHARP CORNERS. BUILD THE OCTAGON BY DRAWING ITS 8 SIDES. NEVER CREATE A CIRCLE. NEVER CREATE A ROUND RING. NEVER MORPH INTO A CIRCLE. NEVER USE CURVED EDGES. NEVER USE CIRCULAR EXPANSION. NEVER SMOOTH THE CORNERS.

const SplashAnimation = () => {
  const [isFinished, setIsFinished] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGSVGElement>(null);
  const octagonsRef = useRef<(SVGPathElement | null)[]>([]);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textInnerRef = useRef<HTMLDivElement>(null);
  const mainWrapperRef = useRef<HTMLDivElement>(null);

  // Generate perfect straight-edged Octagon path
  const getOctagonPath = (cx: number, cy: number, r: number) => {
    let d = "";
    const startAngle = -5 * Math.PI / 8; // Top-Left vertex
    for (let i = 0; i < 8; i++) {
      const angle = startAngle + i * (Math.PI / 4);
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) {
        d += `M ${x},${y} `;
      } else {
        d += `L ${x},${y} `;
      }
    }
    d += "Z";
    return d;
  };

  const numOctagons = 12; // Exactly matches the reference image layers
  const textDarkBrown = "#3b2210"; 
  const textGrayBlue = "#767b82"; 

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            delay: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
              setIsFinished(true);
              document.body.style.overflow = '';
            }
          });
        }
      });

      // 0. Initial Setup
      gsap.set(markRef.current, { x: 0, rotation: 0, transformOrigin: "50% 50%" });
      
      gsap.set(markRef.current, { x: 0, rotation: 0, transformOrigin: "50% 50%" });
      octagonsRef.current.forEach((oct, i) => {
        if (!oct) return;
        const reverseI = (numOctagons - 1) - i;
        const scale = Math.pow(0.92, reverseI);
        
        // Ensure NO consecutive octagons are ever aligned. 
        // We create a strong vortex by accumulating 18.5 degrees per layer.
        const finalRotation = i * 18.5; 
        const initialRotation = finalRotation - 8; // Small twist offset for the drawing phase

        gsap.set(oct, { 
          opacity: 1, 
          scale: scale,
          rotation: initialRotation, // Never aligned with the previous octagon
          strokeDasharray: 735,
          strokeDashoffset: 735,
          transformOrigin: "50% 50%" 
        });
      });
      
      gsap.set(textWrapperRef.current, { 
        x: 0, 
        opacity: 0,
        clipPath: "inset(0 100% 0 0)"
      });
      gsap.set(textInnerRef.current, { x: -30 });
      gsap.set('.institute-text', { opacity: 0, y: -10 }); 

      // 2. sequentially draw 8 sides, THEN rotate
      let currentTime = 0.3; 
      
      octagonsRef.current.forEach((oct, i) => {
        if (!oct) return;
        const finalRotation = i * 18.5; 
        
        // dot -> 8 straight lines are drawn -> octagon is completed
        tl.to(oct, {
          strokeDashoffset: 0,
          duration: 0.25,
          ease: "none"
        }, currentTime);
        
        currentTime += 0.25; 
        
        // apply a small controlled rotation to that completed octagon
        tl.to(oct, {
          rotation: finalRotation,
          duration: 0.2,
          ease: "power2.out"
        }, currentTime);
      });

      // 3. Wait for emblem to lock completely 
      currentTime += 0.3;

      // 4. QUANTUM emerges from center and travels right, while emblem moves left
      tl.to(markRef.current, {
        x: -110, // Reduced from -160 to bring emblem closer to text
        duration: 1.4,
        ease: "power3.inOut"
      }, currentTime);

      tl.to(textWrapperRef.current, {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        x: 0, // Reduced from 20 to bring text closer to emblem
        duration: 1.4,
        ease: "power3.inOut"
      }, currentTime);

      tl.to(textInnerRef.current, {
        x: 0,
        duration: 1.4,
        ease: "power3.inOut"
      }, currentTime);

      // 5. INSTITUTE appears directly underneath
      tl.to('.institute-text', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, currentTime + 0.6);

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
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center pointer-events-none bg-white" 
    >
      <div ref={mainWrapperRef} className="relative z-30 flex items-center justify-center w-full max-w-4xl">
        
        {/* SVG Geometric Mark - ZERO circles allowed in the vortex, strict straight edges */}
        <svg 
          ref={markRef}
          width="260" 
          height="260" 
          viewBox="0 0 260 260" 
          className="absolute w-56 h-56 md:w-64 md:h-64 overflow-visible"
        >
          <g transform="translate(130, 130)">
            {[...Array(numOctagons)].map((_, i) => {
              // Now i=0 is the innermost (bright orange), numOctagons-1 is the outermost (light peach)
              // This ensures the DOM order naturally paints outer on top or inner on top (doesn't matter since strokes don't fill)
              // But logically it matches the animation order.
              
              const reverseI = (numOctagons - 1) - i; // map to old logic for colors/scales
              
              let strokeColor = "";
              let strokeWidth = 4; // Bold orange lines (2x thicker)
              
              if (reverseI === 0) {
                strokeColor = "#f4d8b8"; // Outermost distinct light peach
                strokeWidth = 1.5; // Thinner peach outer lines
              } else if (reverseI === 1) {
                strokeColor = "#f6a039"; // Transitional orange
                strokeWidth = 2.5; 
              } else if (reverseI === 2) {
                strokeColor = "#ff7f00"; // Bright orange
                strokeWidth = 4; // Bold
              } else {
                // Deeper orange/red for the inner vortex
                const ratio = (reverseI - 2) / (numOctagons - 3);
                const r = Math.round(255 - (ratio * 25)); // 255 to 230
                const g = Math.round(100 - (ratio * 50)); // 100 to 50
                const b = 0;
                strokeColor = `rgb(${r}, ${g}, ${b})`;
                strokeWidth = 4; // Bold
              }
              
              return (
                <path
                  key={i}
                  ref={el => { octagonsRef.current[i] = el; }}
                  d={getOctagonPath(0, 0, 120)} 
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth={strokeWidth} 
                  strokeLinejoin="miter" // STRICT SHARP CORNERS ONLY
                  strokeLinecap="square" // NO ROUNDED EDGES
                  className="will-change-transform"
                  // Transform (scale/rotation) and stroke drawing are handled by GSAP
                />
              );
            })}
          </g>
        </svg>

        {/* Typography */}
        <div 
          ref={textWrapperRef} 
          className="absolute left-1/2 flex flex-col justify-center whitespace-nowrap pl-6 md:pl-10"
        >
          <div ref={textInnerRef} className="flex flex-col">
            <span 
              className="font-sans font-semibold tracking-normal leading-none" 
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                color: textDarkBrown,
                fontFamily: 'Optima, "Segoe UI", "Helvetica Neue", sans-serif' 
              }}
            >
              QUANTUM
            </span>
            <span 
              className="institute-text font-sans font-medium tracking-[0.02em] leading-none"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                color: textGrayBlue,
                fontFamily: 'Optima, "Segoe UI", "Helvetica Neue", sans-serif' 
              }}
            >
              INSTITUTE
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SplashAnimation;

// 🚨 GEOMETRIC VECTOR ANIMATION. EXACTLY 8 STRAIGHT SIDES PER OCTAGON. EXACTLY 8 SHARP CORNERS. BUILD THE OCTAGON BY DRAWING ITS 8 SIDES. NEVER CREATE A CIRCLE. NEVER CREATE A ROUND RING. NEVER MORPH INTO A CIRCLE. NEVER USE CURVED EDGES. NEVER USE CIRCULAR EXPANSION. NEVER SMOOTH THE CORNERS.
// CRITICAL GEOMETRY RULE: Every octagon must be rotated by a different angle from the previous octagon. The rotation must accumulate layer by layer. Never align the top, bottom, left, or right vertices of consecutive octagons. The purpose is to create a strong spiral/vortex geometry. Image 2 is the exact target structure. Image 1 is INCORRECT and must NOT be reproduced.
