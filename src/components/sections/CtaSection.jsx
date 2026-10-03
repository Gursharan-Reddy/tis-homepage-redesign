export const CtaSection = () => {
  return (
    <section id="admissions" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">
          Begin Your Child's Journey with TIS
        </h2>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
          Admissions for the upcoming academic session are now open. Secure your child's future at one of India's premier residential campuses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+919876543210" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition">
            Call Admissions Desk
          </a>
          <a href="https://tis.edu.in" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition">
            Visit Official Portal
          </a>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-white font-bold text-lg">Tulas International School</p>
          <p className="text-sm text-gray-500">Dhoolkot, Near Selakui, Chakrata Road, Dehradun, Uttarakhand</p>
        </div>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Tulas International School. Redesigned for Technical Assessment.
        </p>
      </div>
    </footer>
  );
};