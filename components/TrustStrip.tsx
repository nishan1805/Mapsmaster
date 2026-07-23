
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
        {/* Mobile & Tablet Layout (2x2 grid with center divider between col 1 & 2) */}
        <div className="grid grid-cols-2 lg:hidden gap-y-8 items-center">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`text-center px-4 ${
                index % 2 === 0 ? 'border-r border-white/20' : ''
              }`}
            >
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] leading-relaxed">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout (4 items with 3 standalone, vertically centered divider lines) */}
        <div className="hidden lg:flex items-center justify-between text-center">
          {metrics.map((metric, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 text-center group px-4">
                <div className="text-4xl lg:text-5xl font-semibold text-white mb-2 group-hover:text-googleBlue transition-colors duration-300 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] leading-relaxed">
                  {metric.label}
                </div>
              </div>
              {index < metrics.length - 1 && (
                <div className="w-[1px] h-12 bg-white/20 shrink-0 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
