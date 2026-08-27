import React from 'react';

const PeaceView = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 40s linear infinite;
          }
          .animate-spin-slow:has(.image-card:hover) {
            animation-play-state: paused;
          }
        `}
      </style>
      <section className="relative w-full min-h-[850px] bg-white overflow-hidden flex flex-col font-sans">
      {/* Circle Container */}
      <div className="absolute top-[80px] sm:top-[100px] left-1/2 w-[1000px] h-[1000px] z-0 pointer-events-none"
           style={{ transform: 'translateX(-50%)' }}>
        <div className="w-full h-full relative animate-spin-slow">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="image-card pointer-events-auto absolute top-1/2 left-1/2 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] rounded-[32px] overflow-hidden shadow-xl border-[6px] border-white/80 cursor-pointer"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-450px)`
              }}
            >
              <img src={`/Peace/Peace -${(i % 7) + 1}.webp`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-125" alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* White Mask Layer for bottom half */}
      <div className="absolute top-[520px] left-0 w-full h-[600px] bg-white z-0 pointer-events-none"></div>
      <div className="absolute top-[370px] left-0 w-full h-[150px] bg-gradient-to-b from-white/0 to-white z-0 pointer-events-none"></div>

      {/* Text Content Layer */}
      <div className="relative z-10 w-full max-w-4xl px-6 mx-auto flex flex-col items-center text-center mt-[320px] sm:mt-[380px]">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-900 mb-4 leading-[1.1] tracking-tight">
          Experience Profound <br className="hidden sm:block" /> 
          <span className="text-[#E05A00]">Soul Peace</span> With Us
        </h2>
        
        <p className="text-zinc-500 mb-8 max-w-xl text-base font-light leading-relaxed">
          Awaken your highest self and cultivate a lasting sense of tranquility that resonates through every aspect of your life.
        </p>
        
        <button className="bg-[#E05A00] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#c24e00] transition-all hover:scale-105 flex items-center gap-2 mb-12 shadow-[0_10px_25px_rgba(224,90,0,0.3)]">
          Start Your Journey <span className="text-lg">→</span>
        </button>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full pt-12 pb-8 border-t border-zinc-100">
          <div className="flex flex-col items-center text-center px-4">
            <h4 className="text-zinc-800 font-serif text-xl mb-3">Mind & Soul Alignment</h4>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">Synchronize your inner energy<br/>to achieve true serenity.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <h4 className="text-zinc-800 font-serif text-xl mb-3">Spiritual Depth</h4>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">Guided by ancient philosophies<br/>of soul elevation.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <h4 className="text-zinc-800 font-serif text-xl mb-3">Inner Sanctuary</h4>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">Cultivate a personal space of<br/>unwavering inner peace.</p>
          </div>
        </div>
      </div>

    </section>
    </>
  );
};

export default PeaceView;