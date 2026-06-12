/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkle } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-6 md:px-12 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Celestial Art */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-xs"
            >
              {/* Spinning orbital lines */}
              <div className="absolute inset-4 rounded-full border border-slate-100 animate-spin" style={{ animationDuration: "120s" }} />
              <div className="absolute inset-10 rounded-full border border-dashed border-slate-200/80 animate-spin" style={{ animationDuration: "60s" }} />
              
              {/* Moon phase cycles in SVGs */}
              <svg
                width="80%"
                height="80%"
                viewBox="0 0 200 200"
                className="text-slate-800 relative z-10"
              >
                {/* Central Alignment Axis */}
                <line
                  x1="100"
                  y1="25"
                  x2="100"
                  y2="175"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  className="text-slate-300"
                />
                <line
                  x1="25"
                  y1="100"
                  x2="175"
                  y2="100"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  className="text-slate-300"
                />

                {/* Celestial Path */}
                <circle
                  cx="100"
                  cy="100"
                  r="55"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-slate-300"
                />

                {/* Elegant Central Moon Graphic */}
                <g transform="translate(100, 100) scale(0.9)">
                  {/* Glowing background */}
                  <circle cx="0" cy="0" r="28" className="fill-amber-500/10" />
                  
                  {/* Crescent Moon overlay and inner depth */}
                  <path
                    d="M-4,-22 A22,22 0 1,0 24,0 A16,16 0 1,1 -4,-22 Z"
                    fill="currentColor"
                    className="text-slate-900"
                  />
                  
                  {/* Subtle dots representing alignments */}
                  <circle cx="0" cy="0" r="1.5" className="fill-amber-500" />
                </g>

                {/* Sparkle detailing */}
                <g transform="translate(100, 45)">
                  <path d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z" className="fill-amber-500" />
                </g>
                <g transform="translate(100, 155)">
                  <path d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z" className="fill-amber-500" />
                </g>
                <g transform="translate(45, 100)">
                  <circle cx="0" cy="0" r="2" className="fill-slate-400" />
                </g>
                <g transform="translate(155, 100)">
                  <circle cx="0" cy="0" r="2" className="fill-slate-400" />
                </g>
              </svg>

              {/* Decorative brand tag */}
              <div className="absolute bottom-6 bg-lunara-slate text-[#fff] text-[9px] font-mono tracking-[0.25em] px-4 py-1.5 rounded-none uppercase">
                Est. 2024
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="max-w-2xl">
              {/* Category tag */}
              <div className="flex items-center space-x-2 text-lunara-gold mb-4">
                <Sparkle className="w-4 h-4 text-lunara-gold" />
                <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase">Sobre a Marca</span>
              </div>

              {/* Section Header */}
              <h2
                className="font-serif text-4xl md:text-5xl font-extrabold text-lunara-coal tracking-tighter leading-tight mb-8 border-b border-slate-200/60 pb-6"
                id="about-title"
              >
                Sobre a Lunara
              </h2>

              {/* Main descriptive paragraph */}
              <p
                className="font-serif text-lg md:text-xl italic leading-relaxed text-slate-700/90 mb-6"
                id="about-text-1"
              >
                A <span className="font-semibold text-lunara-coal font-sans not-italic">Lunara</span> nasceu com o propósito de tornar o autoconhecimento mais acessível através da astrologia. Nossa missão é oferecer conteúdos, interpretações e experiências que auxiliem cada pessoa a compreender melhor seus ciclos, potenciais e jornadas.
              </p>

              {/* Substantiated mission detail values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-none bg-white border border-slate-200 hover:border-lunara-gold transition-colors duration-300">
                  <span className="font-serif text-[15px] uppercase tracking-wider font-bold text-lunara-gold block mb-2">Visão Integradora</span>
                  <span className="font-sans text-xs text-slate-600 leading-relaxed block">
                    Unimos o rigor interpretativo astrológico com abordagens psicológicas contemporâneas para fornecer reflexões úteis ao dia a dia.
                  </span>
                </div>
                <div className="p-6 rounded-none bg-white border border-slate-200 hover:border-lunara-gold transition-colors duration-300">
                  <span className="font-serif text-[15px] uppercase tracking-wider font-bold text-lunara-gold block mb-2">Foco no Indivíduo</span>
                  <span className="font-sans text-xs text-slate-600 leading-relaxed block">
                    Acreditamos que o mapa astral não limita ou determina seu destino, mas expande e clareia o potencial das suas próprias escolhas.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
