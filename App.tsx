import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { KeyFeatures } from './components/KeyFeatures';
import { InteractiveDemo } from './components/InteractiveDemo';
import { TargetAudience } from './components/TargetAudience';
import { TesterBenefits } from './components/TesterBenefits';
import { FAQSection } from './components/FAQSection';
import { FooterCTA } from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0B63E5] selection:text-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <KeyFeatures />
        <InteractiveDemo />
        <TargetAudience />
        <TesterBenefits />
        <FAQSection />
      </main>
      <FooterCTA />
    </div>
  );
}
