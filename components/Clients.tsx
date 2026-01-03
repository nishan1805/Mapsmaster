
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-navy overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-center text-gray-500 font-semibold tracking-widest uppercase text-sm sm:text-base px-4">
          Trusted by Top Businesses Across Raipur
        </h2>
      </div>

      <div className="relative w-full">
        <div className="animate-scroll">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logoPath, index) => (
            <div
              key={index}
              className="px-8 sm:px-12 lg:px-16 flex items-center justify-center"
            >
              <img
                src={logoPath}
                alt={`Client ${index + 1}`}
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
