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
  <svg width="40" height="40" viewBox="0 0 100 100" className="text-[#d15000]">
    <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" className="stroke-current fill-none stroke-[6]" />
    <polygon points="50,18 80,32 80,68 50,82 20,68 20,32" className="stroke-current fill-none stroke-[3]" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-8 px-6 md:px-12 lg:px-20 font-sans border-t border-white/5 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Logo & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start pr-8">
            <div className="flex items-center gap-3 mb-6">
              <img src="/Logo/Quantum%20Institute%20Logo.png" alt="Quantum Institute Logo" className="h-10 md:h-12 w-auto object-contain scale-150 origin-left" />
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[240px]">
              Where minds collect &amp; <br/> possibilities connect.
            </p>
            
            <div className="flex items-center gap-3">
              {['X', <LinkedinIcon key="li" className="w-[18px] h-[18px]"/>, <YoutubeIcon key="yt" className="w-[18px] h-[18px]"/>, <InstagramIcon key="ig" className="w-[18px] h-[18px]"/>].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#d15000] hover:border-[#d15000] transition-all duration-300 hover:scale-110">
                  {typeof icon === 'string' ? <span className="font-bold text-[13px]">{icon}</span> : icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Explore */}
            <div className="flex flex-col">
              <h4 className="text-[#d15000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">EXPLORE</h4>
              <ul className="flex flex-col gap-5">
                {['Vision', 'Brand & Identity', 'Pillars', 'Research', 'Impact'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 hover:text-[#d15000] text-[13px] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col">
              <h4 className="text-[#d15000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">RESOURCES</h4>
              <ul className="flex flex-col gap-5">
                {['Projects', 'Publications', 'Events', 'Careers', 'FAQs'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 hover:text-[#d15000] text-[13px] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col">
              <h4 className="text-[#d15000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">CONNECT</h4>
              <ul className="flex flex-col gap-5">
                {['Contact Us', 'Partners', 'Community', 'Support', 'Newsroom'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 hover:text-[#d15000] text-[13px] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Subscribe */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[#d15000] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">SUBSCRIBE</h4>
            <p className="text-white/60 text-[13px] leading-relaxed mb-6">
              Stay updated with our latest<br/> research, events &amp; insights.
            </p>
            
            <div className="relative w-full mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border border-white/20 rounded-full py-[14px] pl-6 pr-12 text-[13px] text-white placeholder-white/40 focus:outline-none focus:border-[#d15000] transition-colors"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#d15000] transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[11px] tracking-wide">
            © 2025 Quantum Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-white/40 hover:text-white text-[11px] transition-colors tracking-wide">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-[11px] transition-colors tracking-wide">Terms of Use</Link>
            <Link href="#" className="text-white/40 hover:text-white text-[11px] transition-colors tracking-wide">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
