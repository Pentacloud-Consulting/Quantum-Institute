"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const lenis = new Lenis({ 
      duration: 1.2, 
      smoothWheel: true 
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateGSAP = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGSAP);
    gsap.ticker.lagSmoothing(0);

    const sections = gsap.utils.toArray('.snap-section');
    if (sections.length === 0) return;
    
    const snapTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: () => {
        const lastSection = sections[sections.length - 1] as HTMLElement;
        return `+=${lastSection.offsetTop + lastSection.offsetHeight}`;
      },
      snap: {
        snapTo: (progress: number, self: any) => {
          const maxScroll = (snapTrigger && snapTrigger.end) ? snapTrigger.end : Math.max(1, document.body.scrollHeight - window.innerHeight);
          const snapPoints = sections.map((sec: any) => Math.max(0, Math.min(1, sec.offsetTop / maxScroll)));
          
          let closestIndex = 0;
          let minDiff = Infinity;
          
          snapPoints.forEach((p: number, i: number) => {
            const diff = Math.abs(progress - p);
            if (diff < minDiff) {
              minDiff = diff;
              closestIndex = i;
            }
          });
          
          // Escape hatch: If at the last snap point and scrolling down, disable snapping
          if (closestIndex === snapPoints.length - 1 && self.direction === 1 && progress > snapPoints[closestIndex] + 0.02) {
            return progress; // Return current progress to do nothing (normal scroll)
          }
          
          if (self.direction === 1 && progress > snapPoints[closestIndex] + 0.01) {
             if (closestIndex < snapPoints.length - 1) closestIndex++;
          } else if (self.direction === -1 && progress < snapPoints[closestIndex] - 0.01) {
             if (closestIndex > 0) closestIndex--;
          }
          
          return snapPoints[closestIndex];
        },
        duration: { min: 0.6, max: 1.2 },
        delay: 0.05,
        ease: "power3.inOut",
      }
    });
    
    return () => {
      gsap.ticker.remove(updateGSAP);
      snapTrigger.kill();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimation;
