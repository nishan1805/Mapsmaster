
import React from 'react';

const Hero: React.FC = () => {

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Grow Your Local Business with <span className="text-googleBlue">Google Maps</span> & <span className="text-googleGreen">Local SEO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help local businesses rank always on Google Search 1st Page and get more real customers in Raipur's local market today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-googleBlue text-white px-10 py-3 rounded-xl font-bold text-lg hover:bg-navy transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200 text-center"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto border border-navy text-navy px-10 py-3 rounded-xl font-bold text-lg hover:bg-navy hover:text-white transition-all transform hover:-translate-y-1 text-center"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-3">
                <span className="text-googleYellow text-2xl">★★★★★</span>
                <span className="text-sm font-bold text-navy"><span className="text-lg">100+</span> Happy Clients</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Raipur’s No. 1 Agency</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/mapmaster_vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
