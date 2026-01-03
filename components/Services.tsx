
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const cardThemes = [
    { bg: 'bg-blue-50', icon: 'text-googleBlue', border: 'hover:border-googleBlue', iconBg: 'group-hover:bg-googleBlue' },
    { bg: 'bg-red-50', icon: 'text-googleRed', border: 'hover:border-googleRed', iconBg: 'group-hover:bg-googleRed' },
    { bg: 'bg-green-50', icon: 'text-googleGreen', border: 'hover:border-googleGreen', iconBg: 'group-hover:bg-googleGreen' },
    { bg: 'bg-yellow-50', icon: 'text-googleYellow', border: 'hover:border-googleYellow', iconBg: 'group-hover:bg-googleYellow' },
    { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'hover:border-purple-600', iconBg: 'group-hover:bg-purple-600' },
    { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'hover:border-indigo-600', iconBg: 'group-hover:bg-indigo-600' },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-bold text-googleBlue tracking-widest uppercase mb-4">What We Do</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy px-4">Our Specialized Services</h3>
          <p className="text-gray-600 mt-4 lg:mt-6 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed px-4">
            We provide everything you need to boost your local digital presence and drive more customers to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">{SERVICES.map((service, index) => {
          const theme = cardThemes[index % cardThemes.length];
          return (
            <div
              key={service.id}
              className={`bg-white p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-50/50 transition-all group border-b-transparent border-b-2 ${theme.border}`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${theme.bg} rounded-xl lg:rounded-2xl flex items-center justify-center text-2xl sm:text-2xl lg:text-3xl mb-6 lg:mb-8 ${theme.iconBg} group-hover:text-white transition-all duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl sm:text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-navy transition-colors">{service.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
