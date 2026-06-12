/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Atuacao from "./components/Atuacao";
import LunarWidget from "./components/LunarWidget";
import Corporativo from "./components/Corporativo";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden antialiased">
      {/* 1. Header Navigation */}
      <Header />

      <main>
        {/* 2. Hero Presentation Section */}
        <Hero />

        {/* 3. About Section ("Sobre a Lunara") */}
        <About />

        {/* 4. Actuation Section ("Nossa Atuação") */}
        <Atuacao />

        {/* 5. Custom Dynamic Lunar Interactive Experience */}
        <LunarWidget />

        {/* 6. Legal and Transparency Details Page Section */}
        <Corporativo />

        {/* 7. Newsletter Report Opt-In */}
        <Newsletter />
      </main>

      {/* 8. Corporate compliant Footer markings */}
      <Footer />
    </div>
  );
}
