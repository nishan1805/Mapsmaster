import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-navy overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trusted Partners Across India
          </h2>
          <div className="w-20 h-1.5 bg-googleBlue rounded-full"></div>
        </div>
      </div>
      
      <div className="relative w-full">
        <div className="animate-scroll flex">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
            <div 
              key={index} 
              className="px-6 flex items-center justify-center shrink-0"
            >
              <div className="w-48 h-28 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-white/10 hover:shadow-googleBlue/20 transition-all duration-300 group">
                <img
                src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-w-[80%] max-h-[70%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
