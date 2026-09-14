"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Send } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-10 pb-6 px-6 md:px-12 lg:px-16 font-body relative z-20 overflow-hidden text-[#2C1810] border-t border-[#E05A00]/15">
      
      {/* Background Video */}
      <video 
        src="/Videos/qt-inside-view.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Warm Light Overlay for Text Readability */}
      <div className="absolute inset-0 bg-[#FFF8F3]/90 z-0 backdrop-blur-[2px]"></div>

      <div className="w-full max-w-[1600px] mx-auto relative z-10 flex flex-col justify-between">
        
        {/* Top Hero Section: Join Our Community + Big Circular Social Buttons */}
        <div className="flex flex-col items-center justify-center text-center pt-2 pb-8 md:pb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold tracking-tight mb-6 md:mb-8 text-[#2C1810]">
            Join Our Community
          </h2>

          {/* Large Circle Social Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto w-full">
            
            {/* Telegram / Connect */}
            <a href="#" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border border-[#E05A00]/25 flex items-center justify-center bg-white/80 shadow-md group-hover:bg-[#E05A00] group-hover:border-[#E05A00] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#E05A00] group-hover:text-white transition-colors -translate-x-0.5 translate-y-0.5" />
              </div>
              <span className="text-xs md:text-xs font-semibold text-[#2C1810]/70 group-hover:text-[#E05A00] transition-colors">
                Telegram
              </span>
            </a>

            {/* Facebook */}
            <a href="#" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border border-[#E05A00]/25 flex items-center justify-center bg-white/80 shadow-md group-hover:bg-[#E05A00] group-hover:border-[#E05A00] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E05A00] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs md:text-xs font-semibold text-[#2C1810]/70 group-hover:text-[#E05A00] transition-colors">
                Facebook
              </span>
            </a>

            {/* YouTube */}
            <a href="#" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border border-[#E05A00]/25 flex items-center justify-center bg-white/80 shadow-md group-hover:bg-[#E05A00] group-hover:border-[#E05A00] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <YoutubeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#E05A00] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs md:text-xs font-semibold text-[#2C1810]/70 group-hover:text-[#E05A00] transition-colors">
                YouTube
              </span>
            </a>

            {/* Instagram */}
            <a href="#" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border border-[#E05A00]/25 flex items-center justify-center bg-white/80 shadow-md group-hover:bg-[#E05A00] group-hover:border-[#E05A00] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E05A00] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs md:text-xs font-semibold text-[#2C1810]/70 group-hover:text-[#E05A00] transition-colors">
                Instagram
              </span>
            </a>

          </div>
        </div>

        {/* Middle Section: Divided by thin border */}
        <div className="w-full pt-6 pb-6 border-t border-[#E05A00]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Brand Logo + Physical Address / Mission Info */}
          <div className="lg:col-span-5 flex items-center gap-5">
            <div className="bg-white rounded-full p-4 md:p-5 shadow-md shrink-0 flex items-center justify-center border border-[#E05A00]/20">
              <img src="/Logo/q%20logo.png" alt="Quantum Institute Logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" />
            </div>
            <div className="flex flex-col text-[#2C1810]/80 text-xs md:text-sm leading-relaxed">
              <p className="font-bold text-[#2C1810] text-base md:text-xl mb-1">Quantum Institute</p>
              <p className="text-[#2C1810]/70 text-xs md:text-sm font-medium">Where minds collect &amp; possibilities connect.</p>
              <p className="text-[#2C1810]/50 text-xs mt-1.5">Doha, Qatar · Research &amp; Innovation Hub</p>
            </div>
          </div>

          {/* Right Area: 2 Link Columns + Join Waitlist Button */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start justify-between gap-6 lg:pl-4">

            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-[#2C1810]/75 hover:text-[#E05A00] text-xs md:text-sm font-medium transition-colors">Healing</Link>
              <Link href="#" className="text-[#2C1810]/75 hover:text-[#E05A00] text-xs md:text-sm font-medium transition-colors">Education</Link>
              <Link href="#" className="text-[#2C1810]/75 hover:text-[#E05A00] text-xs md:text-sm font-medium transition-colors">Research</Link>
              <Link href="#" className="text-[#2C1810]/75 hover:text-[#E05A00] text-xs md:text-sm font-medium transition-colors">Exploration</Link>
            </div>

            {/* Circular "Join Waitlist" Button */}
            <Link 
              href="/signup" 
              className="w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border border-[#E05A00]/30 bg-white/80 flex items-center justify-center text-center p-2 text-xs md:text-sm font-semibold text-[#E05A00] hover:bg-[#E05A00] hover:text-white hover:border-[#E05A00] transition-all duration-300 hover:scale-105 shadow-md leading-tight shrink-0 self-start sm:self-center ml-auto sm:ml-0"
            >
              Join<br/>Waitlist
            </Link>

          </div>

        </div>

        {/* Bottom Bar: All rights reserved | Privacy Policy & Terms */}
        <div className="w-full pt-4 border-t border-[#E05A00]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-[#2C1810]/60">
          <p>© All rights reserved — Quantum Institute</p>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-[#E05A00] transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#E05A00] transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
