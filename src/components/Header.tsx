/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Moon, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8f9fb]/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      }`}
      id="header-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2.5 text-slate-900 group cursor-pointer"
          id="logo-brand"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 text-[#fff] group-hover:scale-105 transition-transform duration-300">
            <Moon className="w-5 h-5 animate-pulse" />
            <div className="absolute -top-1.5 -right-1.5 text-amber-400 font-serif text-[10px] select-none">✦</div>
          </div>
          <span className="font-serif text-2xl font-semibold tracking-widest text-slate-800 transition-colors duration-300 group-hover:text-amber-600">
            LUNARA
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium text-slate-600">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("atuacao")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Nossa Atuação
          </button>
          <button
            onClick={() => scrollToSection("lunar-cycles")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Ciclos Lunares
          </button>
          <button
            onClick={() => scrollToSection("corporativo")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Transparência
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("sobre")}
            className="flex items-center space-x-2 px-6 py-3 rounded-none border border-lunara-slate hover:bg-lunara-slate hover:text-white text-lunara-slate transition-all duration-300 text-[11px] uppercase tracking-widest font-bold cursor-pointer"
            id="nav-cta"
          >
            <span>Conhecer a Lunara</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-btn"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav expand */}
      {isOpen && (
        <div
          className="md:hidden bg-[#f8f9fb] border-b border-slate-200/50 shadow-lg absolute top-20 left-0 w-full py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-expanded-nav"
        >
          <button
            onClick={() => scrollToSection("hero")}
            className="text-left py-2 font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-left py-2 font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("atuacao")}
            className="text-left py-2 font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 cursor-pointer"
          >
            Nossa Atuação
          </button>
          <button
            onClick={() => scrollToSection("lunar-cycles")}
            className="text-left py-2 font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 cursor-pointer"
          >
            Ciclos Lunares
          </button>
          <button
            onClick={() => scrollToSection("corporativo")}
            className="text-left py-2 font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 cursor-pointer"
          >
            Transparência
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="flex items-center justify-center space-x-2 w-full py-4.5 rounded-none bg-lunara-slate hover:bg-lunara-coal text-white text-[11px] uppercase tracking-widest font-bold cursor-pointer transition-all duration-300"
            id="mobile-nav-cta"
          >
            <span>Conhecer a Lunara</span>
            <ArrowRight className="w-3.5 h-3.5 text-lunara-gold" />
          </button>
        </div>
      )}
    </header>
  );
}
