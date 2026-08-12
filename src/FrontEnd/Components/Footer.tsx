"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Nested hexagon SVG for the Logo
const HexagonLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" className="text-[#E05A00]">
    <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" className="stroke-current fill-none stroke-[6]" />
    <polygon points="50,18 80,32 80,68 50,82 20,68 20,32" className="stroke-current fill-none stroke-[3]" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full pt-12 pb-6 px-4 md:pt-24 md:pb-8 md:px-12 lg:px-20 font-sans border-t border-white/5 relative z-20 overflow-hidden">
      
      {/* Background Video */}
      <video 
        src="/Videos/Footer Video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-10 md:mb-20">
          
          {/* Logo & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 md:pr-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <img src="/Logo/Quantum%20Institute%20Logo.png" alt="Quantum Institute Logo" className="h-8 md:h-12 w-auto object-contain scale-150 origin-left pl-2" />
            </div>
            
            <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-[240px]">
              Where minds collect &amp; <br/> possibilities connect.
            </p>
            
            <div className="flex items-center gap-2 md:gap-3">
              {['X', <LinkedinIcon key="li" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]"/>, <YoutubeIcon key="yt" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]"/>, <InstagramIcon key="ig" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]"/>].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#E05A00] hover:border-[#E05A00] transition-all duration-300 hover:scale-110">
                  {typeof icon === 'string' ? <span className="font-bold text-[10px] md:text-[13px]">{icon}</span> : icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-2 md:mt-0">
            
            {/* Explore */}
            <div className="flex flex-col">
              <h4 className="text-[#E05A00] text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-8">EXPLORE</h4>
              <ul className="flex flex-col gap-3 md:gap-5">
                {['Vision', 'Brand & Identity', 'Pillars', 'Research', 'Impact'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 hover:text-[#E05A00] text-xs md:text-[13px] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col">
              <h4 className="text-[#E05A00] text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-8">RESOURCES</h4>
              <ul className="flex flex-col gap-3 md:gap-5">
                {['Projects', 'Publications', 'Events', 'Careers', 'FAQs'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 hover:text-[#E05A00] text-xs md:text-[13px] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col mt-4 md:mt-0 col-span-2 md:col-span-1">
              <h4 className="text-[#E05A00] text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-8">CONNECT</h4>
              <ul className="flex flex-row md:flex-col flex-wrap gap-x-6 gap-y-3 md:gap-5">
                {['Contact Us', 'Partners', 'Community', 'Support', 'Newsroom'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 hover:text-[#E05A00] text-xs md:text-[13px] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Subscribe */}
          <div className="lg:col-span-3 flex flex-col mt-4 md:mt-0">
            <h4 className="text-[#E05A00] text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-8">SUBSCRIBE</h4>
            <p className="text-white/60 text-xs md:text-[13px] leading-relaxed mb-4 md:mb-6">
              Stay updated with our latest<br/> research, events &amp; insights.
            </p>
            
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border border-white/20 rounded-full py-3 md:py-[14px] pl-4 md:pl-6 pr-10 md:pr-12 text-xs md:text-[13px] text-white placeholder-white/40 focus:outline-none focus:border-[#E05A00]"
                style={{ transition: "background-color 9999s ease-in-out 0s", WebkitTextFillColor: "#fff" }}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#E05A00] transition-colors">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[9px] md:text-[11px] tracking-wide text-center md:text-left">
            © 2025 Quantum Institute. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <Link href="#" className="text-white/40 hover:text-white text-[9px] md:text-[11px] transition-colors tracking-wide">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-[9px] md:text-[11px] transition-colors tracking-wide">Terms of Use</Link>
            <Link href="#" className="text-white/40 hover:text-white text-[9px] md:text-[11px] transition-colors tracking-wide">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
