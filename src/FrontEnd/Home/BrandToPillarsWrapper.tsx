"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Proposition from "./PROPOSITION";

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
          end: "+=1500", // Shorter scroll distance since we only do the fade now
          pin: true,
          scrub: 1, // GPU-accelerated smooth scrubbing
          anticipatePin: 1,
        },
      });

      // 1. Fade out Slide 1 (Importance of Exploration)
      tl.to(".prop-slide-1", {
        autoAlpha: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.inOut"
      })
      // 2. Fade in Slide 2 (Brand Story)
      .to(".prop-slide-2", {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }, "<0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white z-30">
      <Proposition />
    </div>
  );
};

export default BrandToPillarsWrapper;
