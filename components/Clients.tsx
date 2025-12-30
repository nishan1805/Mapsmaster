
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-navy overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-12">
        <h2 className="text-center text-gray-500 font-semibold tracking-widest uppercase text-base">
          Trusted by Top Businesses Across Raipur
        </h2>
      </div>
      
      <div className="relative w-full">
        <div className="animate-scroll">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
            <div 
              key={index} 
              className="px-16 flex items-center justify-center"
            >
              <span className="text-4xl font-bold text-gray-700 grayscale hover:grayscale-0 hover:text-white transition-all cursor-default opacity-40 hover:opacity-100">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
