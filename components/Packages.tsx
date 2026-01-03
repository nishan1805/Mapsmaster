
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-bold text-googleGreen tracking-widest uppercase mb-4">Pricing</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy px-4">Affordable Plans for Every Business</h3>
          <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Clear, transparent pricing designed to provide maximum ROI for local businesses in Chhattisgarh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border ${plan.isPopular ? 'border-googleBlue shadow-2xl lg:scale-105 z-10 bg-white' : 'border-gray-100 bg-gray-50'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-googleBlue text-white text-xs font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-xl">
                  Most Popular
                </div>
              )}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h4 className="text-xl sm:text-2xl font-bold mb-3">{plan.name}</h4>
                <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy">{plan.price.split('/')[0]}</span>
                  <span className="text-gray-500 font-semibold text-base sm:text-lg">/mo</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-10 lg:mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 sm:h-6 sm:w-6 ${plan.isPopular ? 'text-googleBlue' : 'text-googleGreen'} flex-shrink-0 mt-0.5`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all ${plan.isPopular ? 'bg-googleBlue text-white hover:bg-navy shadow-xl shadow-blue-200' : 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'}`}>
                Get {plan.name} Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
