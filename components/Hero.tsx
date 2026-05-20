
import React from 'react';

const Hero: React.FC = () => {

  return (
   <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left">
            {/* <div className="inline-block px-4 py-1.5 bg-googleBlue/10 text-googleBlue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Raipur’s No. 1 Agency
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Grow Your Local Business with <span className="text-googleBlue">
                <span className="text-googleBlue">G</span>
                <span className="text-googleRed">o</span>
                <span className="text-googleYellow">o</span>
                <span className="text-googleBlue">g</span>
                <span className="text-googleGreen">l</span>
                <span className="text-googleRed">e</span>
              </span> <span className="text-googleBlue">Maps</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              India’s trusted Google Maps growth agency for businesses that want to appear at the top of Google search results.
            </p>
            {/* <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="#services"
                className="w-full sm:w-auto bg-googleBlue text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-navy transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200 text-center"
              >
                Our Services
              </a>
              <a 
                href="#packages"
                className="w-full sm:w-auto border-2 border-navy text-navy px-10 py-5 rounded-xl font-bold text-lg hover:bg-navy hover:text-white transition-all transform hover:-translate-y-1 text-center"
              >
                Our Packages
              </a>
            </div>
          </div> */}

          <div className="lg:w-1/2 w-full relative px-4 sm:px-0">
            <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              <video
                src="/mapmaster_vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
