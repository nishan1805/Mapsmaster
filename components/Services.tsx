
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const cardThemes = [
    { bg: 'bg-blue-50', icon: 'text-googleBlue', border: 'hover:border-googleBlue', iconBg: 'group-hover:bg-googleBlue' },
    { bg: 'bg-red-50', icon: 'text-googleRed', border: 'hover:border-googleRed', iconBg: 'group-hover:bg-googleRed' },
    { bg: 'bg-green-50', icon: 'text-googleGreen', border: 'hover:border-googleGreen', iconBg: 'group-hover:bg-googleGreen' },
    { bg: 'bg-yellow-50', icon: 'text-googleYellow', border: 'hover:border-googleYellow', iconBg: 'group-hover:bg-googleYellow' },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-googleBlue tracking-widest uppercase mb-4">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy">Our Specialized Services</h3>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide everything you need to boost your local digital presence and drive more customers to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div 
                key={service.id} 
                className={`bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-50/50 transition-all group border-b-transparent border-b-2 ${theme.border}`}
              >
                <div className={`w-16 h-16 ${theme.bg} rounded-2xl flex items-center justify-center text-3xl mb-8 ${theme.iconBg} group-hover:text-white transition-all duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-navy transition-colors">{service.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
