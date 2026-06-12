/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, BookOpen, User, Check, Stars } from "lucide-react";
import { ATUACAO_CARDS } from "../data";

// Helper function to return the correct icon for each card index
const getCardIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Sparkles className="w-5 h-5 text-lunara-slate group-hover:text-white transition-colors duration-300" />;
    case 1:
      return <BookOpen className="w-5 h-5 text-lunara-slate group-hover:text-white transition-colors duration-300" />;
    case 2:
      return <User className="w-5 h-5 text-lunara-slate group-hover:text-white transition-colors duration-300" />;
    default:
      return <Stars className="w-5 h-5 text-lunara-slate group-hover:text-white transition-colors duration-300" />;
  }
};

export default function Atuacao() {
  return (
    <section
      id="atuacao"
      className="py-24 px-6 md:px-12 bg-[#f8f9fb]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-white border border-slate-200 text-lunara-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            <span>Frentes de Trabalho</span>
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl font-extrabold text-lunara-coal tracking-tighter mb-6"
            id="atuacao-title"
          >
            Nossa Atuação
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
            Unindo sensibilidade interpretativa e responsabilidade analítica, estruturamos nossas entregas em três pilares fundamentais de capacitação humana e autoconhecimento.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ATUACAO_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between p-8 rounded-none bg-white border border-[#e5e7eb] hover:border-lunara-gold shadow-xs hover:shadow-md transition-all duration-300"
              id={`atuacao-card-${idx}`}
            >
              <div>
                {/* Icon Container with transition mimicking the provided code */}
                <div className="w-12 h-12 rounded-full bg-[#f8f9fb] flex items-center justify-center mb-6 border border-slate-200/50 group-hover:bg-lunara-gold group-hover:border-lunara-gold transition-colors duration-300">
                  {getCardIcon(idx)}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl font-bold text-lunara-coal group-hover:text-lunara-gold transition-colors duration-300 mb-4">
                  {card.title}
                </h3>

                {/* Professional Description */}
                <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-slate-100 my-5" />

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs text-slate-600 font-sans leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-lunara-gold mr-2 shrink-0 p-0.5 border border-slate-100 rounded-none bg-[#f8f9fb]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefit Footer */}
              <div className="mt-4 p-4 rounded-none bg-slate-50 border border-slate-100 text-[10px] font-sans font-bold text-slate-600 uppercase tracking-widest text-center">
                {card.benefit}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
