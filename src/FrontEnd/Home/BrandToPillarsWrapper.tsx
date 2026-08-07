"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandIdentity from "./BRAND & IDENTITY";
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

      // 1. Stick on Brand Identity section
      tl.to(trackRef.current, {
        x: "0%",
        duration: 0.5, 
      })
      // 2. Slide horizontally to Pillars QI section
      .to(trackRef.current, {
        x: "-50%", // Moves the track to the left by 1 viewport width (50% of the 200vw track)
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
        <BrandIdentity />
        <PillarsQI />
      </div>
    </div>
  );
};

export default BrandToPillarsWrapper;
