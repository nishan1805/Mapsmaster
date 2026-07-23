import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  selectedService?: string;
  onSelectedServiceChange?: (service: string) => void;
}

const Contact: React.FC<ContactProps> = ({
  selectedService,
  onSelectedServiceChange
}) => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    businessName: '',
    interestedService: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        interestedService: selectedService
      }));
    }
  }, [selectedService]);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);

  const message = `
New Inquiry from MapsMaster Website

Full Name: ${formData.fullName}
Phone Number: ${formData.phoneNumber}
Business Name: ${formData.businessName}
Interested Service: ${formData.interestedService}
`;

  const whatsappNumber = "919179775502";

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  await new Promise(resolve => setTimeout(resolve, 1000));

  window.open(whatsappUrl, "_blank");

  setIsSubmitting(false);
  setIsSuccess(true);
};

const resetForm = () => {
  setFormData({
    fullName: '',
    phoneNumber: '',
    businessName: '',
    interestedService: ''
  });

  setIsSuccess(false);

  if (onSelectedServiceChange) {
    onSelectedServiceChange('');
  }
};
  
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
                    <div className="flex items-center text-white text-lg gap-3">
                    <span>9179775502</span>
                    {/* separator */}
                    <span className="h-4 w-px bg-gray-500/60"></span>
                    <span>9893556566</span>
                  </div>
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
                    <p className="text-white text-lg">Office No. 5071, 5th Floor, Currency Tower,<br/>Raipur, Chhattisgarh 492001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[60%] p-10 lg:p-20 bg-white flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="space-y-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-navy uppercase tracking-widest">Full Name</label>
                          <input 
                            name="fullName"
                            type="text" 
                            required
                            placeholder="John Doe" 
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none" 
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-navy uppercase tracking-widest">Phone Number</label>
                          <input 
                            name="phoneNumber"
                            type="tel" 
                            required
                            placeholder="+91 91797 75502" 
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none" 
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-navy uppercase tracking-widest">Business Name</label>
                          <input 
                            name="businessName"
                            type="text" 
                            required
                            placeholder="Your Local Shop" 
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none" 
                          />
                        </div>
            
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-navy uppercase tracking-widest">
                            Interested Service
                          </label>
                          <select
                            name="interestedService"
                            value={formData.interestedService}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-base focus:ring-2 focus:ring-googleBlue transition-all outline-none"
                            >
                            <option value="">Select Service</option>
                            <option value="Starter Plan">Starter Plan</option>
                            <option value="Growth Plan">Growth Plan</option>
                            <option value="Pro Plan">Pro Plan</option>
                            <option value="Basic Profile Creation">
                              Basic Profile Creation
                            </option> 
                            <option value="Optimized Profile Creation">
                              Optimized Profile Creation
                            </option>
                            <option value="Call Activation Plan">
                              Call Activation Plan
                            </option>
                            <option value="Suspended Account Recovery">
                              Suspended Account Recovery
                            </option>
                            <option value="Profile Verification">
                              Profile Verification
                            </option>
                            <option value="Others">
                              Others
                            </option>
                          </select>
                        </div>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full bg-googleBlue text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-blue-100 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-navy'}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          "Send Inquiry"
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8">
                      <motion.svg 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-12 w-12 text-green-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </div>
                    <h4 className="text-3xl font-bold text-navy mb-4">Request Sent!</h4>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                      Thank you for reaching out. Our team will contact you shortly at the phone number provided.
                    </p>
                    <button 
                      onClick={resetForm}
                      className="w-full max-w-sm bg-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-googleBlue transition-all shadow-xl"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
