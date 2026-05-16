
import React from 'react';

const TrustStrip: React.FC = () => {
  const metrics = [
    { label: 'Happy Clients', value: '500+' },
    { label: 'Call Button Activations', value: '300+' },
    { label: 'Google Rankings', value: '100+' },
    { label: 'Businesses Ranked #1', value: '50+' },
  ];

  return (
    <div className="bg-navy py-12 md:py-16 border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
          {metrics.map((metric, index) => (
           <div
             key={index}
             className={`text-center group px-4 ${
             index !== metrics.length - 1 ? 'lg:border-r border-white/20' : ''
            }`}
          >
              <div className="text-3xl md:text-5xl font-semibold text-white mb-2 group-hover:text-googleBlue transition-colors duration-300 tracking-tight">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] leading-relaxed">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
