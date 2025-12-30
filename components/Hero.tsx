
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Grow Your Local Business with <span className="text-googleBlue">Google Maps</span> & <span className="text-googleGreen">Local SEO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              We help local businesses rank better on Google Search & Maps and get more real customers from their neighborhood. Start dominating Raipur's local market today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="#contact"
                className="w-full sm:w-auto bg-googleBlue text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-navy transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200 text-center"
              >
                Get Started
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto border-2 border-navy text-navy px-10 py-5 rounded-xl font-bold text-lg hover:bg-navy hover:text-white transition-all transform hover:-translate-y-1 text-center"
              >
                Contact Us
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-3">
                <span className="text-googleYellow text-2xl">★★★★★</span>
                <span className="text-sm font-semibold">50+ Happy Clients</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Raipur's #1 Agency</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/id/2/1000/800" 
                alt="Local SEO Marketing" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-5">
                <div className="w-14 h-14 bg-googleRed rounded-2xl flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy">New Local Review!</p>
                  <p className="text-sm text-gray-500">Just arrived at Sharma Auto Works</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-googleBlue/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-googleYellow/5 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
