import React from 'react';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { CtaSection } from './components/sections/CtaSection';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-amber-500 selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;