
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pt-14 pb-8 text-center text-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
       <div className="flex flex-col items-center max-w-2xl mx-auto mb-10">
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src="/MM logo.png"
            alt="MapsMaster Logo"
            className="w-14 h-14 object-contain"
            />
          <span className="text-white font-bold text-2xl tracking-tight leading-none">
            MapsMaster
          </span>
        </div>
          <p className="text-gray-400 text-base mb-8 leading-relaxed font-normal">
            Trusted Google Maps SEO services for businesses across India.
          </p>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/mapsmaster_raipur/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-googleBlue transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61585099034811" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-googleBlue transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/company/maps-master/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-googleBlue transition-all"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <p className="text-gray-500 text-sm font-semibold">
            © {new Date().getFullYear()} MapsMaster. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-bold transition-all">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-bold transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
