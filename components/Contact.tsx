import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[40%] p-10 lg:p-16 bg-navy text-white flex flex-col justify-center">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Let's Rank Your Business <span className="text-googleBlue">#1</span></h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-googleBlue flex-shrink-0 group-hover:bg-googleBlue group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-sm uppercase tracking-widest text-gray-500">Contact No.</h6>
                    <p className="text-white text-lg">9179775502</p>
                    <p className="text-white text-lg">9893556566</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-googleRed flex-shrink-0 group-hover:bg-googleRed group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-sm uppercase tracking-widest text-gray-500">Email</h6>
                    <p className="text-white text-lg">mapsmasterraipur@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-googleGreen flex-shrink-0 group-hover:bg-googleGreen group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-sm uppercase tracking-widest text-gray-500">Address</h6>
                    <p className="text-white text-lg">4th floor, Currency Tower, Vishal Nagar,<br/>Raipur, Chhattisgarh 492001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[60%] p-10 lg:p-20 bg-white">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-navy uppercase tracking-widest">Business Name</label>
                  <input type="text" placeholder="Your Local Shop" className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-navy uppercase tracking-widest">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about your business..." className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-googleBlue text-white py-5 rounded-2xl font-bold text-xl hover:bg-navy transition-all shadow-2xl shadow-blue-100">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
