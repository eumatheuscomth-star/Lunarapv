/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("sobre");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-radial from-amber-50/20 via-[#f8f9fb] to-[#f8f9fb]"
    >
      {/* Background Starry & Astrological Details (Subtle design elements) */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        {/* Orbit Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-200/45 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-slate-200/60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-amber-200/30" />
        
        {/* Constellation Star Accents */}
        <div className="absolute top-1/4 left-1/5 text-amber-500/40 select-none text-xs">✦</div>
        <div className="absolute top-1/3 right-1/4 text-amber-500/50 select-none text-lg">✦</div>
        <div className="absolute bottom-1/4 left-1/3 text-amber-500/35 select-none text-sm">✦</div>
        <div className="absolute bottom-1/3 right-1/5 text-amber-500/40 select-none text-xs">✦</div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/65 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-8 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Selo de Legitimidade</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-7xl md:text-[9.5rem] font-extrabold tracking-tighter text-lunara-coal leading-none select-none uppercase mb-2"
          id="hero-title"
        >
          LUNARA
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-xs md:text-sm uppercase tracking-[0.45em] font-bold text-lunara-gold mb-8 max-w-2xl px-4"
          id="hero-subtitle"
        >
          Astrologia, Autoconhecimento e Desenvolvimento Pessoal
        </motion.h2>

        {/* Core Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-lg md:text-xl text-slate-700 italic leading-relaxed max-w-2xl mb-12 px-6"
          id="hero-description"
        >
          A Lunara é uma marca da <span className="font-semibold text-slate-950 font-sans not-italic">MT Enterprises LTDA</span> dedicada à criação de conteúdos, análises e experiências voltadas ao autoconhecimento, astrologia e desenvolvimento pessoal.
        </motion.p>

        {/* Main call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5"
        >
          <button
            onClick={scrollToAbout}
            className="group relative inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-none bg-lunara-slate hover:bg-lunara-coal text-white border border-lunara-slate hover:border-lunara-coal shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-xs font-bold uppercase tracking-widest cursor-pointer"
            id="hero-cta"
          >
            <span>Conheça a Lunara</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300 text-lunara-gold" />
          </button>
        </motion.div>
      </div>

      {/* Floating Animated Mouse Wheel Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 select-none opacity-50 hover:opacity-100 transition-opacity">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Deslizar</span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-400 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-2 rounded-full bg-amber-500"
          />
        </div>
      </div>
    </section>
  );
}
