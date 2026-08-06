"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AgoraReveal = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [revealedLines, setRevealedLines] = useState(0);

  // Track video progress to trigger text reveals
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      // Avoid division by zero
      if (!video.duration) return;
      
      const progress = (video.currentTime / video.duration) * 100;
      
      // Reveal lines based on video playback percentage
      if (progress > 40) setRevealedLines(prev => Math.max(prev, 1));
      if (progress > 70) setRevealedLines(prev => Math.max(prev, 2));
      if (progress > 95) setRevealedLines(prev => Math.max(prev, 3));
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black z-20 flex flex-col font-sans">
      {/* Fullscreen Background Video */}
      <video 
        ref={videoRef}
        src="/Home/BRAND & IDENTITY.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Vignette Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* OVERLAYS CONTAINER */}
      <div className="relative z-10 w-full h-full p-8 md:p-12 lg:p-16 flex flex-col justify-between">
        
        {/* TOP ROW */}
        <div className="flex justify-between items-start w-full">
          
          {/* Top-Left: Removed per request */}
          <div></div>

          {/* Top-Right: Editorial Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col items-end text-right"
          >
            <p className="text-white/60 font-serif italic text-sm md:text-base leading-relaxed max-w-[220px]">
              "Design is 98% common sense. <br /> And 2% aesthetics."
            </p>
            <span className="text-white/40 font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase mt-4">
              DUBAI, UAE
            </span>
          </motion.div>

        </div>

        {/* BOTTOM CENTER: Main Line */}
        <div className="w-full flex justify-center pb-4 md:pb-8">
          <div className="flex flex-col items-center text-center space-y-3">
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: revealedLines >= 1 ? 1 : 0, y: revealedLines >= 1 ? 0 : 20 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight drop-shadow-lg"
            >
              The layers deepen in contrast
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: revealedLines >= 2 ? 1 : 0, y: revealedLines >= 2 ? 0 : 20 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight drop-shadow-lg"
            >
              as they arrive at <span className="text-[#d15000] font-normal">the Agora</span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: revealedLines >= 3 ? 1 : 0, y: revealedLines >= 3 ? 0 : 20 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-white/70 text-lg md:text-xl lg:text-2xl font-light tracking-wide mt-3 drop-shadow-md"
            >
              the true center of our ecosystem.
            </motion.p>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgoraReveal;
