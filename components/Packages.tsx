import React from 'react';
import { PRICING_PLANS } from '../constants';

const CheckIcon = () => (
  <svg 
    className="h-5 w-5 text-googleBlue flex-shrink-0" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path 
      fillRule="evenodd" 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      clipRule="evenodd" 
    />
  </svg>
);

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50/50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
            Affordable Plans for Every Business
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Choose the plan that fits your growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isRecommended = plan.id === 'growth';
            
            return (
              <div 
                key={plan.id}
                className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] transition-all duration-300 group
                  ${isRecommended 
                    ? 'bg-white border-2 border-googleBlue shadow-2xl scale-100 md:scale-105 z-10' 
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl'
                  }`}
              >
                {isRecommended && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-googleBlue text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl md:text-5xl font-black text-navy">{plan.price}</span>
                    <span className="text-gray-500 font-medium text-lg">/month</span>
                  </div>
                  <p className="text-gray-500 mt-4 text-sm leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="w-full h-px bg-gray-100 mb-8"></div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-700 text-sm md:text-base font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-2xl font-bold text-base transition-all transform active:scale-95
                    ${isRecommended 
                      ? 'bg-googleBlue text-white hover:bg-navy shadow-xl shadow-blue-100' 
                      : 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'
                    }`}
                >
                  {plan.id === 'starter' ? 'Get Started' : plan.id === 'growth' ? 'Get Growth Plan' : 'Get Pro Plan'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
