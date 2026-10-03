import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/schoolData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs sm:text-sm bg-amber-100 px-3 py-1 rounded-full">
            Parent & Student Voices
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Trusted by Families Worldwide
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Hear what our community has to say about their transformative residential school experience at TIS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200/80 flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 text-amber-500/20">
                <Quote className="w-12 h-12" />
              </div>
              <div>
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6 relative z-10">
                  "{item.quote}"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <p className="font-bold text-gray-900">{item.author}</p>
                <p className="text-xs text-amber-600 font-semibold">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};