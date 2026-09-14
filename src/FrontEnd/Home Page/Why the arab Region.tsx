"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const WhyArabRegion = () => {
  const [activeTab, setActiveTab] = useState(0);

  const regionData = [
    {
      num: "01",
      tag: "WISDOM",
      subTag: "Renaissance",
      title: "Recovering Ancient Wisdom",
      img: "/Qunatum images/Islamic Golden Age.png",
      desc: "The Islamic world pioneered algebra, algorithms, and optics—viewing science and spirituality as one continuous truth. Today, the Quantum Institute aims to reignite that legacy: creating a sanctuary where ancient insight and quantum discovery converge to solve complex human challenges.",
      footer: "Scientific Sanctuary",
      quote: "Bridging the golden legacy of optics & mathematics with future quantum frontiers."
    },
    {
      num: "02",
      tag: "HERITAGE",
      subTag: "Living Ethos",
      title: "Cultural Heritage & Continuity",
      img: "/Qunatum images/Century Arabic Astrolabe .png",
      desc: "Deeply rooted in Arab and Islamic traditions, heritage here is lived through craftsmanship, hospitality, and reverence for nature. In a fast-paced world, the quiet patience of the desert shapes a sacred space for silence, introspection, and collective awakening.",
      footer: "Sacred Continuity",
      quote: "Silent intelligence of the desert shaping spaces for profound stillness."
    },
    {
      num: "03",
      tag: "CONTRASTS",
      subTag: "Sand & Shore",
      title: "Between Sand and Shore",
      img: "/Qunatum images/Arabia’s natural landscape.png",
      desc: "Set between the open Arabian Gulf and vast desert dunes, the region blends dramatic natural ecosystems with thriving global innovation hubs like Dubai, Abu Dhabi, and Riyadh—offering a retreat into nature's stillness amidst extremes.",
      footer: "Elemental Synthesis",
      quote: "Dramatic natural ecosystems harmonizing with futuristic global hubs."
    }
  ];

  return (
    <section className="w-full bg-[#fbf9f5] text-[#1e293b] pt-10 md:pt-14 pb-20 md:pb-24 px-6 md:px-12 font-body relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3">
          <span className="text-[11px] font-heading font-semibold tracking-[0.25em] uppercase text-[#ea580c]">
            Regional Foundations
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#0f172a] tracking-[0.06em] uppercase">
            Why The Arab Region
          </h2>
          <div className="w-12 h-[2px] bg-[#ea580c] mt-2" />
        </div>

        {/* 1. MINIMALIST ZEN FLOATING TIMELINE THREAD */}
        <div className="relative w-full max-w-4xl mx-auto my-4">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#ea580c]/20 -translate-y-1/2 z-0" />
          <div className="flex items-center justify-between relative z-10 px-4 md:px-12">
            {regionData.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-heading font-bold transition-all duration-500 ${
                    isActive 
                      ? 'bg-[#ea580c] text-white shadow-[0_0_20px_rgba(234,88,12,0.4)] scale-110' 
                      : 'bg-white border border-[#ea580c]/30 text-gray-500 group-hover:border-[#ea580c]'
                  }`}>
                    {item.num}
                  </div>
                  <span className={`text-[11px] font-heading tracking-widest uppercase transition-colors ${
                    isActive ? 'text-[#ea580c] font-bold' : 'text-gray-500 group-hover:text-gray-900'
                  }`}>
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. ARCHITECTURAL ACCORDION SHOWCASE DECK */}
        <div className="w-full hidden lg:flex gap-6 h-[480px] items-stretch">
          {regionData.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActiveTab(idx)}
                layout
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 border ${
                  isActive 
                    ? 'flex-[3.5] bg-gradient-to-b from-[#fbf9f5] to-[#f4efe6] border-[#ea580c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.06)]' 
                    : 'flex-1 bg-white/70 hover:bg-white border-[#ea580c]/15 shadow-sm'
                }`}
              >
                {isActive ? (
                  /* Expanded Accordion Card Content */
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="w-full h-full p-8 md:p-10 flex gap-8 items-center justify-between"
                  >
                    {/* Left Column Text */}
                    <div className="w-1/2 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#ea580c]/15">
                          <span className="text-xs font-heading font-bold tracking-[0.25em] text-[#ea580c] uppercase">
                            {item.num} / {item.tag}
                          </span>
                          <span className="text-xs font-display italic text-slate-400">{item.subTag}</span>
                        </div>
                        <h3 className="text-2xl font-display font-medium text-[#0f172a] mb-4">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-body text-justify mb-4">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#ea580c]/15 flex items-center justify-between text-xs font-heading font-medium tracking-wider text-[#ea580c]">
                        <span>{item.footer}</span>
                        <span className="w-8 h-[1px] bg-[#ea580c]" />
                      </div>
                    </div>

                    {/* Right Column Image Feature */}
                    <div className="w-1/2 h-full relative rounded-2xl overflow-hidden shadow-md border border-[#ea580c]/15">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        style={{ objectFit: item.tag === 'HERITAGE' ? 'contain' : 'cover' }}
                        className="p-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white">
                        <p className="text-[11px] font-display italic text-white/90">{item.quote}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Collapsed Vertical Bar Preview */
                  <div className="w-full h-full p-6 flex flex-col items-center justify-between text-center">
                    <span className="text-xs font-heading font-bold text-[#ea580c] tracking-widest">{item.num}</span>
                    <span className="text-sm font-heading font-semibold text-gray-700 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
                      {item.title}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#ea580c]/40" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE RESPONSIVE FALLBACK CARDS */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {regionData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-b from-[#fbf9f5] to-[#f4efe6] rounded-[2rem] p-6 border border-[#ea580c]/15 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#ea580c]/15">
                <span className="text-xs font-heading font-bold text-[#ea580c] tracking-widest">{item.num} / {item.tag}</span>
                <span className="text-xs font-display italic text-slate-400">{item.subTag}</span>
              </div>
              <div className="w-full h-44 relative rounded-xl overflow-hidden border border-[#ea580c]/10">
                <Image src={item.img} alt={item.title} fill style={{ objectFit: item.tag === 'HERITAGE' ? 'contain' : 'cover' }} className="p-2" />
              </div>
              <h3 className="text-lg font-display font-medium text-[#0f172a]">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-body text-justify">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyArabRegion;
