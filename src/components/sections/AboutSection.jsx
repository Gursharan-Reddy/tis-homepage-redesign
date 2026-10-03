import React from 'react';
import { motion } from 'framer-motion';
import { schoolStats } from '../../data/schoolData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-bold tracking-widest uppercase text-xs sm:text-sm bg-blue-100 px-3 py-1 rounded-full">
            The TIS Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Where Excellence Meets Character
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Nestled in the serene foothills of Dehradun, Tulas International School provides a nurturing ecosystem designed to develop confident leaders of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {schoolStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-center"
            >
              <h3 className="text-4xl font-extrabold text-blue-900 mb-2">{stat.value}</h3>
              <p className="font-bold text-gray-900 text-lg mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};