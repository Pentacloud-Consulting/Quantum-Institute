"use client";

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VisionToBrandWrapper({
  visionComponent,
  brandComponent
}: {
  visionComponent: React.ReactNode;
  brandComponent: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Create a unified ScrollTrigger timeline for the horizontal wipe
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom bottom", // Start when the bottom of the vision section reaches the bottom of the screen
          end: "+=150%", // How much scroll distance the user must scroll to complete the horizontal wipe (150% makes it smooth and deliberate)
          pin: true,
          scrub: 1, // Smooth scrubbing (adds a slight 1s catchup delay for a premium feel)
        }
      });

      // Animate Vision out to the left
      tl.to(visionRef.current, {
        xPercent: -100,
        ease: "none"
      }, 0);

      // Animate Brand in from the right simultaneously
      tl.fromTo(brandRef.current, 
        { xPercent: 100 },
        { xPercent: 0, ease: "none" },
        0
      );

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-black">
      
      {/* Vision Section: Normal document flow so it controls the height naturally */}
      <div ref={visionRef} className="w-full will-change-transform">
        {visionComponent}
      </div>

      {/* Brand Identity: Positioned absolutely at the bottom to match the pinned viewport */}
      <div 
        ref={brandRef} 
        className="absolute bottom-0 left-0 w-full h-screen will-change-transform"
      >
        {brandComponent}
      </div>

    </div>
  );
}
