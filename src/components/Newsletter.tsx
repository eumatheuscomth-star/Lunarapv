/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor, preencha o seu e-mail.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, digite um e-mail válido.");
      return;
    }

    // Success response simulation
    setError("");
    setSuccess(true);
    // Persist newsletter signup locally as a token of state interaction
    const existing = localStorage.getItem("lunara_subscribers") || "[]";
    const parsed = JSON.parse(existing);
    parsed.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem("lunara_subscribers", JSON.stringify(parsed));
  };

  return (
    <section
      id="newsletter"
      className="py-20 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-none bg-[#f8f9fb] border border-slate-200 text-lunara-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-lunara-gold" />
          <span>BOLETIM DE CICLOS</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-lunara-coal tracking-tighter mb-4">
          Conecte-se aos relatórios celestes
        </h2>
        <p className="font-serif text-base md:text-lg italic text-[#4a5568] leading-relaxed max-w-xl mx-auto mb-10">
          Receba gratuitamente as previsões de lunação, interpretações de equinócios e artigos especiais do nosso time de autoconhecimento diretamente em sua caixa de entrada.
        </p>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3.5 relative">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                    <Mail className="w-4 h-4 text-lunara-gold" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Seu melhor e-mail"
                    className="w-full bg-[#f8f9fb] border border-slate-300 rounded-none pl-12 pr-6 py-3.5 text-sm outline-none focus:bg-white focus:border-lunara-slate focus:ring-1 focus:ring-lunara-slate transition-all font-sans text-slate-800"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-none bg-lunara-slate hover:bg-lunara-coal text-white font-sans text-[11px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 cursor-pointer border border-lunara-slate hover:border-lunara-coal"
                >
                  <span>Inscrever-se</span>
                  <ArrowRight className="w-3.5 h-3.5 text-lunara-gold" />
                </button>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-rose-505 font-sans mt-3 text-left pl-2 font-bold uppercase tracking-wider text-rose-600"
                >
                  {error}
                </motion.p>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="max-w-md mx-auto p-6 rounded-none bg-[#fbfaf7] border border-lunara-gold/30 flex flex-col items-center"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-3" />
              <span className="font-serif text-lg font-bold text-lunara-coal mb-1">Inscrição Confirmada!</span>
              <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-xs">
                Seu e-mail foi cadastrado com sucesso. Prepare-se para vivenciar uma jornada profunda de autoconhecimento.
              </p>
              <button
                onClick={() => {
                  setSuccess(false);
                  setEmail("");
                }}
                className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#a58d6b] hover:text-lunara-coal font-sans underline cursor-pointer"
              >
                Cadastrar outro e-mail
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
