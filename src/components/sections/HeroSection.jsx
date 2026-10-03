import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Award className="w-4 h-4" /> Ranked Among India's Top Residential Schools
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Empowering Minds, <span className="text-amber-400">Shaping Futures.</span>
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to Tulas International School. We blend rigorous academics, holistic sports training, and moral integrity on a pristine 22-acre campus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#admissions" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5">
                Schedule Campus Tour <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#programs" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition">
                Explore Programs
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-400" /> Co-Educational Boarding</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-400" /> CBSE & CIE Curriculum</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] bg-blue-900">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern School Campus Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-lg">World-Class Infrastructure</p>
                  <p className="text-sm text-gray-300">Smart classrooms, Olympic-size sports arenas & secure dorms.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};