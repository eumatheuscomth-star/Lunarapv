/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Compass, Calendar, Moon } from "lucide-react";
import { LUNAR_PHASES } from "../data";

export default function LunarWidget() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [typedDate, setTypedDate] = useState("");
  const [calculatedPhase, setCalculatedPhase] = useState<null | {
    phaseId: string;
    phaseName: string;
    description: string;
    moonAgeDays: number;
  }>(null);

  const activePhase = LUNAR_PHASES[selectedIdx];

  // Client-side astronomical moon phase approximation
  const calculatePhaseFromDate = (dateString: string) => {
    if (!dateString) return;
    const inputDate = new Date(dateString);
    if (isNaN(inputDate.getTime())) return;

    // Reference New Moon: Jan 6, 2000
    const referenceNewMoon = new Date(2000, 0, 6, 18, 14, 0); 
    const diffMs = inputDate.getTime() - referenceNewMoon.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    
    // Synodic month is approx 29.530588853 days
    const synodicMonth = 29.530588853;
    let moonAge = diffDays % synodicMonth;
    if (moonAge < 0) {
      moonAge += synodicMonth;
    }

    let phaseId = "nova";
    let phaseName = "Lua Nova";
    let description = "";

    // Classification based on lunar age
    if (moonAge >= 27.68 || moonAge < 1.84) {
      phaseId = "nova";
      phaseName = "Lua Nova";
      description = "Nesta data, o céu estava recolhido. Sua essência lunar é dotada de grande intuição, foco em novos inícios e forte necessidade de solitude restauradora.";
    } else if (moonAge >= 1.84 && moonAge < 12.92) {
      phaseId = "crescente";
      phaseName = "Lua Crescente";
      description = "Ativa e inspirada. A lua acumulava luz e energia nesta data. Propensas à ação imediata, as pessoas desta fase buscam constante crescimento e superação.";
    } else if (moonAge >= 12.92 && moonAge < 16.61) {
      phaseId = "cheia";
      phaseName = "Lua Cheia";
      description = "Momento de brilho máximo. A lua iluminava as águas da intuição nesta data. Traz um perfil vibrante, emocionalmente aberto, expressivo e profundamente conectado aos outros.";
    } else {
      phaseId = "minguante";
      phaseName = "Lua Minguante";
      description = "Sabedoria mística e conclusões. A lua minguava, descarregando ciclos. Alinha pessoas com forte capacidade analítica, desapego maduro e inclinação a ensinar.";
    }

    setCalculatedPhase({
      phaseId,
      phaseName,
      description,
      moonAgeDays: Math.round(moonAge * 10) / 10
    });

    // Auto switch tab to selected phase index to show recommendations
    const foundIdx = LUNAR_PHASES.findIndex((p) => p.id === phaseId);
    if (foundIdx !== -1) {
      setSelectedIdx(foundIdx);
    }
  };

  // Helper to render customized responsive Moon Phase icons dynamically using SVG
  const renderMoonSVG = (phaseId: string, customSize = "w-24 h-24") => {
    let dMoonPath = "";
    
    // Moon SVGs
    if (phaseId === "nova") {
      // Almost dark outline with inner aura
      return (
        <svg viewBox="0 0 100 100" className={`${customSize} text-slate-800`}>
          <circle cx="50" cy="50" r="40" className="stroke-slate-700 stroke-1 fill-slate-900/60" />
          <circle cx="50" cy="50" r="39" className="stroke-amber-400/20 stroke-1 fill-none" />
          {/* Subtle starry glints inside */}
          <circle cx="40" cy="35" r="0.5" className="fill-white/80" />
          <circle cx="62" cy="55" r="0.8" className="fill-white/60" />
        </svg>
      );
    } else if (phaseId === "crescente") {
      // Golden right crescent
      return (
        <svg viewBox="0 0 100 100" className={`${customSize} text-amber-400`}>
          <circle cx="50" cy="50" r="40" className="fill-slate-900/30 stroke-slate-700 stroke-1" />
          <path d="M50 10 A40 40 0 0 1 50 90 A30 30 0 0 0 50 10 Z" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        </svg>
      );
    } else if (phaseId === "cheia") {
      // Vibrant gold sphere
      return (
        <svg viewBox="0 0 100 100" className={`${customSize} text-amber-400`}>
          <circle cx="50" cy="50" r="40" fill="currentColor" className="drop-shadow-[0_0_12px_rgba(245,158,11,0.73)]" />
          {/* Surface detailing craters simulation */}
          <circle cx="35" cy="40" r="5" className="fill-amber-500/20" />
          <circle cx="60" cy="35" r="6" className="fill-amber-500/20" />
          <circle cx="45" cy="65" r="8" className="fill-amber-500/20" />
          <circle cx="55" cy="58" r="4" className="fill-amber-500/20" />
        </svg>
      );
    } else if (phaseId === "minguante") {
      // Golden left crescent
      return (
        <svg viewBox="0 0 100 100" className={`${customSize} text-amber-400`}>
          <circle cx="50" cy="50" r="40" className="fill-slate-900/30 stroke-slate-700 stroke-1" />
          <path d="M50 10 A30 30 0 0 0 50 90 A40 40 0 0 1 50 10 Z" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        </svg>
      );
    }
  };

  return (
    <section
      id="lunar-cycles"
      className="py-24 px-6 md:px-12 bg-white relative overflow-hidden text-slate-900"
    >
      {/* Light background graphic accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-slate-50 border border-slate-100/50 -mr-64 -mt-32 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic header of the segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 text-lunara-gold mb-4">
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: "30s" }} />
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase">CONEXÃO CÓSMICA</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold tracking-tighter text-lunara-coal mb-6">
              Influência dos Ciclos Lunares
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
              Nossa marca propaga a compreensão de que as flutuações das marés mentais e focos produtivos estão diretamente harmonizadas às transições lunares. Conecte-se com as quatro fases basilares e planeje seu cotidiano de forma inteligente.
            </p>
          </div>

          {/* Calculator Tool embedded in the section for interactive experience */}
          <div className="lg:col-span-6 bg-white border border-slate-200 p-6 md:p-8 rounded-none shadow-xs">
            <div className="flex items-center space-x-2.5 mb-5">
              <Calendar className="w-5 h-5 text-lunara-gold" />
              <h3 className="font-serif text-[15px] uppercase tracking-wider font-bold text-lunara-coal">Calculadora Luna Astral</h3>
            </div>
            <p className="font-sans text-xs text-slate-600 mb-6 leading-relaxed">
              Descubra qual era a fase lunar aproximada da sua data de nascimento ou de qualquer evento valioso, e veja as sugestões correspondentes:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 mb-5">
              <input
                type="date"
                value={typedDate}
                onChange={(e) => setTypedDate(e.target.value)}
                className="flex-1 bg-[#f8f9fb] border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-lunara-slate focus:ring-1 focus:ring-lunara-slate transition-all font-sans"
              />
              <button
                onClick={() => calculatePhaseFromDate(typedDate)}
                className="px-6 py-3 rounded-none bg-lunara-slate hover:bg-lunara-coal text-[#fff] border border-lunara-slate hover:border-lunara-coal font-sans text-[11px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 shrink-0"
              >
                <span>Descobrir Fase</span>
              </button>
            </div>

            {calculatedPhase && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 border border-lunara-gold/40 bg-[#fbfaf7] rounded-none flex items-start space-x-4"
              >
                <div className="shrink-0 pt-1">
                  {renderMoonSVG(calculatedPhase.phaseId, "w-11 h-11")}
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-serif text-sm font-bold text-lunara-coal">Sob a {calculatedPhase.phaseName}</span>
                    <span className="text-[9px] bg-lunara-gold-light text-lunara-gold px-2.5 py-0.5 rounded-none font-mono font-bold uppercase tracking-wider border border-lunara-gold/20">
                      Dia {calculatedPhase.moonAgeDays} do Ciclo
                    </span>
                  </div>
                  <p className="font-sans text-xs text-slate-700 leading-relaxed font-light">
                    {calculatedPhase.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Phase interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Tabs Selector Side */}
          <div className="lg:col-span-4 flex flex-col space-y-3 justify-center">
            {LUNAR_PHASES.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center justify-between p-5 rounded-none border text-left transition-all duration-300 cursor-pointer ${
                  selectedIdx === idx
                    ? "bg-lunara-slate border-lunara-slate text-white shadow-sm transform translate-x-1"
                    : "bg-white border-[#e5e7eb] text-slate-800 hover:bg-[#f8f9fb] hover:border-slate-300"
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="shrink-0">
                    {renderMoonSVG(phase.id, "w-8 h-8")}
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold block">{phase.name}</span>
                    <span className={`text-[9px] font-mono tracking-wider uppercase block ${selectedIdx === idx ? "text-amber-300" : "text-lunara-gold"}`}>
                      Aspecto: {phase.rulingAspect}
                    </span>
                  </div>
                </div>
                <div className={`w-1.5 h-1.5 rounded-none ${selectedIdx === idx ? "bg-amber-400" : "bg-transparent"}`} />
              </button>
            ))}
          </div>

          {/* Active Phase Readings Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full p-8 md:p-12 rounded-none bg-white border border-[#e5e7eb] flex flex-col justify-between shadow-xs/50"
              >
                <div>
                  
                  {/* Phase visual graphic badge */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center space-x-4">
                      {renderMoonSVG(activePhase.id, "w-16 h-16")}
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold block mb-1">ARQUÉTIPO LUNAR</span>
                        <h3 className="font-serif text-3xl font-extrabold text-lunara-coal tracking-tight">{activePhase.name}</h3>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="px-3.5 py-1.5 rounded-none bg-[#f8f9fb] border border-slate-200 text-slate-600 text-[10px] font-mono tracking-wide font-extrabold uppercase">
                        Força: {activePhase.energyLevel}
                      </div>
                      <div className="px-3.5 py-1.5 rounded-none bg-[#fbfaf7] border border-lunara-gold/40 text-lunara-gold text-[10px] font-mono tracking-wide font-extrabold uppercase animate-pulse">
                        Guia: {activePhase.rulingAspect}
                      </div>
                    </div>
                  </div>

                  {/* Scientific/Astrological Explanation */}
                  <div className="mb-8">
                    <h4 className="font-serif text-[10px] uppercase tracking-widest text-[#a58d6b] font-bold mb-3.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-lunara-gold" />
                      <span>Significado Arquetípico</span>
                    </h4>
                    <p className="font-serif text-base md:text-[17px] italic text-[#4a5568] leading-relaxed">
                      {activePhase.astrologicalMeaning}
                    </p>
                  </div>

                  {/* Application Practical recommendation */}
                  <div>
                    <h4 className="font-serif text-[10px] uppercase tracking-widest text-[#a58d6b] font-bold mb-3.5 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-lunara-gold" />
                      <span>Recomendação Prática de Desenvolvimento</span>
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-slate-650 leading-relaxed bg-[#f8f9fb] border border-slate-200/50 p-5 rounded-none relative">
                      {activePhase.recommendation}
                    </p>
                  </div>

                </div>

                {/* Micro branding disclaimer */}
                <div className="mt-8 border-t border-slate-200/60 pt-4 flex items-center justify-between text-[10px] text-slate-400 font-sans font-medium uppercase tracking-wider">
                  <span>Conteúdo proprietário Lunara®</span>
                  <span>Análise de Ciclos • MT Enterprises LTDA</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
