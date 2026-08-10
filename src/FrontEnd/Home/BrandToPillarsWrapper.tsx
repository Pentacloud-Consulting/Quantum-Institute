"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Proposition from "./PROPOSITION";
import PillarsQI from "./Pillars QI";

const BrandToPillarsWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500", // Reduced back to original shorter scroll distance
          pin: true,
          scrub: 1, // GPU-accelerated smooth scrubbing
          anticipatePin: 1,
        },
      });

      // 1. Stick on Proposition section and hold briefly
      tl.to(trackRef.current, {
        x: "0%",
        duration: 0.5, 
      })
      // 1b. Fade out Slide 1 (Importance of Exploration)
      .to(".prop-slide-1", {
        opacity: 0,
        y: -30,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.inOut"
      })
      // 1c. Fade in Slide 2 (Brand Story)
      .to(".prop-slide-2", {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.4,
        ease: "power2.out"
      }, "<0.2")
      // 1d. Hold on Slide 2 briefly before moving to next section
      .to(trackRef.current, {
        x: "0%",
        duration: 0.5, 
      })
      // 2. Slide horizontally to Pillars QI section
      .to(trackRef.current, {
        x: "-50%", // Moves the track to the left by 1 viewport width
        ease: "power1.inOut",
        duration: 1.5,
      })
      // 3. Stick on Pillars QI section
      .to(trackRef.current, {
        x: "-50%",
        duration: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black z-30">
      {/* Horizontal Track */}
      <div 
        ref={trackRef} 
        className="flex h-full w-[200vw] will-change-transform"
      >
        <Proposition />
        <PillarsQI />
      </div>
    </div>
  );
};

export default BrandToPillarsWrapper;
