
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 text-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-6 sm:space-y-8 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-googleBlue flex items-center justify-center text-white font-bold text-lg sm:text-xl">M</div>
              <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">MapsMaster <span className="text-googleRed">Raipur</span></span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Raipur's leading Google My Business and Local SEO consultancy. We transform local visibility into measurable business growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-10 uppercase tracking-[0.2em] text-googleYellow">Quick Navigation</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors text-sm">Packages</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-10 uppercase tracking-[0.2em] text-googleGreen">Core Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">GMB Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Local Search Rankings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Citation Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Lead Generation</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-10 uppercase tracking-[0.2em] text-googleBlue">Weekly SEO Tips</h4>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">Join 200+ business owners receiving our weekly Raipur local market insights.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" className="bg-white/5 border-0 rounded-l-xl sm:rounded-l-2xl px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm focus:ring-0 outline-none flex-grow" />
              <button className="bg-googleBlue text-white px-4 sm:px-6 py-3 sm:py-4 rounded-r-xl sm:rounded-r-2xl hover:bg-white hover:text-navy transition-all text-xs sm:text-sm font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold text-center md:text-left">
            © {new Date().getFullYear()} MapsMaster Raipur. Empowering Local Business.
          </p>
          <div className="flex gap-6 sm:gap-8 lg:gap-10">
            <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
