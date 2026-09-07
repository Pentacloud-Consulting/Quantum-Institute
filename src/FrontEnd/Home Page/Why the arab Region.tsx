"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyArabRegion = () => {
  return (
    <section className="w-full bg-white text-[#1e293b] pb-16 md:pb-24 pt-4 md:pt-8 px-6 md:px-12 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24 text-sm md:text-base text-[#334155] leading-relaxed">
        
        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="clearfix group/section"
        >
          <h2 className="text-2xl md:text-3xl text-[#ea580c] mb-4 font-normal group-hover/section:translate-x-2 transition-transform duration-500">1. Recovering Ancient Wisdom</h2>
          
          <div className="float-left w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mr-6 mb-4 relative aspect-[4/3] rounded-md overflow-hidden shadow-sm">
            <Image 
              src="/Qunatum images/Islamic Golden Age.png" 
              alt="Islamic Golden Age" 
              fill 
              style={{ objectFit: 'cover' }}
              className="hover:scale-110 transition-transform duration-1000 ease-out cursor-pointer" 
            />
          </div>
          
          <p className="mb-4 hover:text-[#1e293b] hover:-translate-y-0.5 transition-all duration-300">
            The Islamic world was once the beating heart of global scientific discovery, where scholars pioneered breakthroughs in science, astronomy, mathematics, and philosophy. Algebra, algorithms, and even the foundations of modern optics emerged from a culture that saw no division between science and spirituality. Today, this region stands at a unique crossroads - blessed with vision, resources, and the ambition to reignite that flame of knowledge. The Quantum Institute aims to become a sanctuary where ancient wisdom and cutting-edge science converge. Rooted in simplicity, surrounded by nature, and open to the unseen, it will be a space for science, healing, meditation, and deeper human connection.
          </p>
          
          <p className="hover:text-[#1e293b] hover:-translate-y-0.5 transition-all duration-300">
            The goal of the Institute is to help humankind solve complex problems by first transcending the space in which they are created. By affiliating with notable centers of research and excellence, the Institute will extend their work in an effort to expand science. Nowhere is this vision more fitting than in the Arab context, a land of contrasts and clarity, tradition and transformation. Here, the silence of the desert and the innovation of the cities form the perfect backdrop for a new scientific renaissance. It is not merely a return to greatness, but the emergence of something entirely new: a future shaped by ancient insight, modern knowledge, and the possibilities of the quantum world.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="clearfix group/section"
        >
          <h2 className="text-2xl md:text-3xl text-[#ea580c] mb-4 font-normal group-hover/section:translate-x-2 transition-transform duration-500">2. Cultural Heritage</h2>
          
          <div className="float-right w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ml-6 mb-4 relative aspect-square flex justify-center items-center overflow-hidden">
            <Image 
              src="/Qunatum images/Century Arabic Astrolabe .png" 
              alt="Astrolabe" 
              fill 
              style={{ objectFit: 'contain' }}
              className="hover:scale-110 hover:rotate-3 transition-transform duration-1000 ease-out cursor-pointer" 
            />
          </div>
          
          <p className="mb-4 hover:text-[#1e293b] hover:-translate-y-0.5 transition-all duration-300">
            The region’s cultural identity is deeply rooted in Arab and Islamic traditions that have been passed down through generations with pride and care. Every tribe and nation in the region adds its own distinct character to a shared national ethos, one grounded in hospitality, generosity, and a profound respect for community and family. Heritage here is not just preserved - it is lived, expressed in traditional ceremonies, architecture, craftsmanship, and everyday gestures of connection. The values of tolerance, spiritual awareness, and reverence for nature are woven into the societal fabric, creating a culture that naturally supports introspection, healing, and human connection.
          </p>
          
          <p className="hover:text-[#1e293b] hover:-translate-y-0.5 transition-all duration-300">
            In a world driven by speed and detachment, the Arabian Peninsula offers a rare continuity between past and present, where cultural memory remains a source of strength. The desert itself has shaped a people who understand silence, patience, and the sacredness of time. This is not only a place of innovation, but of rootedness - a land where the future is envisioned with the foundational wisdom of the past. The Quantum Institute will not stand apart from this heritage, but grow from it, shaped by values that align with its mission of inner exploration and collective awakening. In embracing its cultural legacy, the region becomes more than a setting - it becomes the soul of the Institute.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="clearfix group/section"
        >
          <h2 className="text-2xl md:text-3xl text-[#ea580c] mb-6 font-normal group-hover/section:translate-x-2 transition-transform duration-500">3. Between Sand and Shore: A Land of Contrasts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-6">
            {/* Column 1 */}
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden shadow-sm cursor-pointer">
              <Image 
                src="/Qunatum images/Arabia’s natural landscape.png" 
                alt="Desert landscape" 
                fill 
                style={{ objectFit: 'cover' }}
                className="hover:scale-110 transition-transform duration-1000 ease-out" 
              />
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div className="hover:text-[#1e293b] hover:translate-x-1 transition-all duration-300">
                <h4 className="text-[#ea580c] text-sm md:text-base font-normal mb-1">Contextual Diversity</h4>
                <p>
                  The unique geographical location is placed between two powerful natural forces: the sea and the desert. On one side lies the Arabian Gulf - a vast, open body of water that connects the region to the wider world. On the other, the endless sands of the desert stretch across the horizon, shaped by harsh conditions: searing heat, scorching winds, high humidity, and frequent dust storms during the long summer season.
                </p>
              </div>
              <div className="hover:text-[#1e293b] hover:translate-x-1 transition-all duration-300">
                <h4 className="text-[#ea580c] text-sm md:text-base font-normal mb-1">Cultural Diversity</h4>
                <p>
                  Complementing this natural richness is the region's vibrant multicultural fabric. Cities like Abu Dhabi, Dubai, Riyadh, Sharjah, Jeddah, Muscat and others thrive as global crossroads, where a mosaic of cultures, traditions, and perspectives coexist. This diversity fuels a dynamic atmosphere of creativity, collaboration, and cross-cultural exchange - turning the region into not just a geographic intersection, but a cultural one as well.
                </p>
              </div>
            </div>
          </div>

          <p className="hover:text-[#1e293b] hover:-translate-y-0.5 transition-all duration-300">
            This dramatic contrast in ecosystems - from rolling dunes and rugged mountains to fertile oases and pristine coastlines - creates a rich natural tapestry. These environments offer more than just visual beauty; they present a profound opportunity for escape. They invite a retreat from material reality into nature’s embrace - a space of stillness, reflection, and inner peace amidst the extremes.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyArabRegion;
