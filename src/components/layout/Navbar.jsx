import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-900 text-white font-bold text-xl px-3 py-2 rounded-lg tracking-wider">
            TIS
          </div>
          <div>
            <span className="font-bold text-gray-900 text-lg block leading-tight">Tulas International</span>
            <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">School, Dehradun</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#about" className="hover:text-blue-900 transition">About</a>
          <a href="#programs" className="hover:text-blue-900 transition">Academics</a>
          <a href="#campus" className="hover:text-blue-900 transition">Campus Life</a>
          <a href="#admissions" className="hover:text-blue-900 transition">Admissions</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-semibold text-blue-900 bg-blue-50 px-4 py-2.5 rounded-full hover:bg-blue-100 transition">
            <PhoneCall className="w-4 h-4" /> +91 98765 43210
          </a>
          <a href="#admissions" className="bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:bg-amber-700 transition">
            Apply Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium">About</a>
          <a href="#programs" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium">Academics</a>
          <a href="#campus" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium">Campus Life</a>
          <a href="#admissions" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium">Admissions</a>
          <div className="pt-2">
            <a href="#admissions" className="block text-center w-full bg-amber-600 text-white font-semibold py-3 rounded-xl shadow">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};