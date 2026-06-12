/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, ArrowUpRight, Building2, Globe, FileText, Landmark } from "lucide-react";
import { CORPORATE_INFO } from "../data";

export default function Corporativo() {
  return (
    <section
      id="corporativo"
      className="py-24 px-6 md:px-12 bg-[#f8f9fb] border-t border-slate-200/50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-none bg-white border border-slate-200 text-lunara-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-lunara-gold mr-1" />
            <span>Transparência e Responsabilidade</span>
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl font-extrabold text-lunara-coal tracking-tighter mb-6"
            id="corp-title"
          >
            Informações Corporativas
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Garantimos legitimidade em nossas interações e conteúdos. Abaixo, constam as credenciais legais da empresa controladora que regulamenta e disponibiliza as marcas e produtos Lunara.
          </p>
        </div>

        {/* Corporate Verified Credentials Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-slate-200 rounded-none overflow-hidden shadow-sm"
          id="legitimacy-card"
        >
          {/* Custom Verification Badge Header */}
          <div className="bg-lunara-slate text-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-none bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#a58d6b] font-mono block font-bold">OPERADORA OFICIAL REGISTRADA</span>
                <span className="font-serif text-lg font-bold sm:tracking-wide">MT Enterprises LTDA</span>
              </div>
            </div>
            <div className="px-3.5 py-1.5 rounded-none bg-white/10 border border-emerald-500/40 text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-widest">
              ✦ Ativa & Regularizada
            </div>
          </div>

          {/* Grid Information Fields */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              
              {/* Field 1: Brand */}
              <div className="flex items-start space-x-3.5 p-5 rounded-none bg-[#f8f9fb] border border-slate-200">
                <div className="p-2.5 rounded-none bg-white border border-slate-200 text-lunara-gold shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-sans font-bold tracking-widest text-slate-400 uppercase block mb-1">Marca Registrada</span>
                  <span className="font-serif text-lg font-bold text-lunara-coal block" id="corp-info-brand">
                    {CORPORATE_INFO.brandName}
                  </span>
                  <span className="text-[11px] text-slate-500 font-sans mt-0.5 block">
                    Astrologia, Autoconhecimento & Bem-estar
                  </span>
                </div>
              </div>

              {/* Field 2: Operator Corporate */}
              <div className="flex items-start space-x-3.5 p-5 rounded-none bg-[#f8f9fb] border border-slate-200">
                <div className="p-2.5 rounded-none bg-white border border-slate-200 text-lunara-gold shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-sans font-bold tracking-widest text-slate-400 uppercase block mb-1">Razão Social</span>
                  <span className="font-serif text-lg font-bold text-lunara-coal block" id="corp-info-operator">
                    {CORPORATE_INFO.companyName}
                  </span>
                  <span className="text-[11px] text-slate-500 font-sans mt-0.5 block">
                    Entidade jurídica controladora
                  </span>
                </div>
              </div>

              {/* Field 3: CNPJ */}
              <div className="flex items-start space-x-3.5 p-5 rounded-none bg-[#f8f9fb] border border-slate-200">
                <div className="p-2.5 rounded-none bg-white border border-slate-200 text-lunara-gold shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-sans font-bold tracking-widest text-slate-400 uppercase block mb-1">CNPJ do Operador</span>
                  <span className="font-mono text-sm font-extrabold text-lunara-coal tracking-widest block" id="corp-info-cnpj">
                    {CORPORATE_INFO.cnpj}
                  </span>
                  <span className="text-[11px] text-slate-500 font-sans mt-0.5 block">
                    Registrado na Receita Federal do Brasil
                  </span>
                </div>
              </div>

              {/* Field 4: Corporate Website */}
              <a
                href={CORPORATE_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3.5 p-5 rounded-none bg-[#f8f9fb] border border-slate-200 hover:border-lunara-gold transition-all group"
                id="corp-info-url"
              >
                <div className="p-2.5 rounded-none bg-white border border-slate-200 text-lunara-gold group-hover:bg-lunara-slate group-hover:text-white transition-all shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-sans font-bold tracking-widest text-slate-400 uppercase block mb-1">Site Corporativo</span>
                  <span className="font-serif text-lg font-bold text-lunara-coal block truncate group-hover:text-lunara-gold transition-colors">
                    mtenterprises.com.br
                  </span>
                  <span className="text-[11px] text-slate-500 font-sans mt-0.5 block flex items-center gap-1">
                    <span>Acessar portal institucional</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>

            </div>

            {/* Verification Footer Text */}
            <div className="p-5 rounded-none bg-[#fbfaf7] border border-lunara-gold/30 text-center">
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed animate-pulse" id="corp-statement">
                A <span className="font-bold text-lunara-coal font-serif italic text-base mr-1">Lunara</span> é uma marca registrada devidamente operada de forma legítima e transparente pela <span className="font-semibold text-slate-900">MT Enterprises LTDA</span>.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
