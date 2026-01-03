
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-32 bg-blue-50/50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-bold text-googleYellow tracking-widest uppercase mb-4">Success Stories</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy px-4">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all">
              <div className="flex gap-1 text-googleYellow mb-6 sm:mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700 mb-8 sm:mb-10 flex-grow leading-relaxed text-base sm:text-lg">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 sm:gap-5 pt-6 sm:pt-8 border-t border-gray-50">
                <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover grayscale" />
                <div>
                  <h5 className="font-bold text-navy text-sm sm:text-base">{t.name}</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold mt-1">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
