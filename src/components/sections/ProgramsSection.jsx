import React from 'react';
import { motion } from 'framer-motion';
import { programsData } from '../../data/schoolData';
import { BookOpen, Cpu, GraduationCap, ChevronRight } from 'lucide-react';

const iconMap = { BookOpen, Cpu, GraduationCap };

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs sm:text-sm bg-amber-50 px-3 py-1 rounded-full">
              Academic Pathways
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
              Structured for Success at Every Stage
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mt-4 md:mt-0 text-base">
            From formative primary years to advanced high school placement tracks, our curriculum caters to individual potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.map((prog, idx) => {
            const IconComponent = iconMap[prog.icon] || BookOpen;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 hover:border-blue-900 transition flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{prog.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{prog.description}</p>
                </div>
                <a href="#admissions" className="inline-flex items-center gap-2 text-blue-900 font-semibold group-hover:text-amber-600 transition">
                  Learn curriculum details <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};