/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Moon, ArrowUp } from "lucide-react";
import { CORPORATE_INFO } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-lunara-coal text-slate-400 py-16 px-6 md:px-12 border-t border-slate-800 font-sans text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12 items-start">
          
          {/* Brand block Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-2.5 text-white">
              <div className="w-8 h-8 rounded-none bg-white text-slate-950 flex items-center justify-center font-bold relative shadow-sm">
                <Moon className="w-4.5 h-4.5" />
                <div className="absolute -top-1 -right-1 text-lunara-gold font-serif text-[8px] select-none">✦</div>
              </div>
              <span className="font-serif text-2xl font-extrabold tracking-tighter text-[#fff]">
                LUNARA®
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Dedicada à criação de conteúdos, análises arquetípicas e ferramentas práticas voltadas ao autoconhecimento, à compreensão dos ritmos naturais e ao aprimoramento individual.
            </p>
          </div>

          {/* Quick legal/nav list Columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-bold text-slate-200 uppercase tracking-[0.2em] block mb-4">Nossa Missão</span>
              <ul className="space-y-2 text-xs">
                <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
                <li><a href="#lunar-cycles" className="hover:text-white transition-colors">Ciclos da Lua</a></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-200 uppercase tracking-[0.2em] block mb-4">Legitimidade</span>
              <ul className="space-y-2 text-xs">
                <li><a href="#corporativo" className="hover:text-white transition-colors">Credenciais Gerais</a></li>
                <li><a href="https://mtenterprises.com.br" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">MT Enterprises LTDA</a></li>
                <li><span className="text-emerald-400 font-mono">CNPJ Verificado v</span></li>
              </ul>
            </div>
          </div>

          {/* Back to top toggle Column */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-5 py-3 rounded-none border border-slate-700 hover:bg-[#fff] hover:text-lunara-coal hover:border-[#fff] text-slate-300 transition-all text-[10px] uppercase tracking-widest font-bold cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Legal markings block exact string alignments */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-xs leading-relaxed max-w-2xl text-slate-400">
            {/* Exactly as requested: Lunara® */}
            <div className="font-serif text-sm font-semibold tracking-wider text-slate-100">
              Lunara®
            </div>

            {/* Exactly as requested: Marca operada por MT Enterprises LTDA */}
            <div className="text-slate-200 font-medium font-sans">
              Marca operada por <span className="font-semibold text-slate-100">{CORPORATE_INFO.companyName}</span>
            </div>

            {/* Exactly as requested: CNPJ 58.691.094/0001-72 © 2024. Todos os direitos reservados. */}
            <div className="text-slate-400 font-mono text-[11px] font-light">
              CNPJ {CORPORATE_INFO.cnpj} © 2024. Todos os direitos reservados.
            </div>
          </div>

          {/* Additional small certification disclaimer */}
          <div className="text-slate-600 text-[10px] uppercase font-mono tracking-wider text-right shrink-0">
            São Paulo • Brasil • Conexão Astrológica
          </div>
        </div>

      </div>
    </footer>
  );
}
