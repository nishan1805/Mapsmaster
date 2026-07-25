import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface ContactProps {
  selectedService?: string;
  onSelectedServiceChange?: (service: string) => void;
}

const Contact: React.FC<ContactProps> = ({ selectedService, onSelectedServiceChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    interestedService: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, interestedService: selectedService }));
      
      const selectElement = document.getElementById("interestedServiceSelect");
      if (selectElement) {
        selectElement.focus({ preventScroll: true });
      }
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.interestedService) {
      alert("Please select an interested service.");
      return;
    }

    setIsSubmitting(true);

    // Submission / lead data output
    console.log("Lead Submission Payload:", {
      businessName: formData.businessName,
      phoneNumber: formData.phoneNumber,
      interestedService: formData.interestedService,
      submittedAt: new Date().toISOString()
    });

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      businessName: '',
      phoneNumber: '',
      interestedService: ''
    });
    if (onSelectedServiceChange) {
      onSelectedServiceChange('');
    }
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-white scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-gray-50 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Details Left Column */}
            <div className="lg:w-[45%] p-6 sm:p-8 lg:p-14 xl:p-16 bg-navy text-white flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 lg:mb-8 leading-tight">
                Let's Rank Your Business <span className="text-googleBlue">#1</span>
              </h3>
              
              <div className="space-y-6 lg:space-y-8">
                {/* Contact No. */}
                <div className="flex items-center gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-2xl flex items-center justify-center text-googleBlue flex-shrink-0 group-hover:bg-googleBlue group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-0.5">Contact No.</h6>
                    <p className="text-white text-base sm:text-lg font-medium">9179775502, 9893556566</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-2xl flex items-center justify-center text-googleRed flex-shrink-0 group-hover:bg-googleRed group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-0.5">Email</h6>
                    <p className="text-white text-base sm:text-lg font-medium break-all sm:break-normal">mapsmasterraipur@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-2xl flex items-center justify-center text-googleGreen flex-shrink-0 group-hover:bg-googleGreen group-hover:text-white transition-all mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-0.5">Address</h6>
                    <p className="text-white text-sm sm:text-base leading-relaxed">Office No. 5071, 5th Floor, Currency Tower,<br/>Raipur, Chhattisgarh 492001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right Column */}
            <div id="contact-form" className="lg:w-[55%] p-6 sm:p-8 lg:p-14 xl:p-16 bg-white flex flex-col justify-center scroll-mt-20">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form className="space-y-5 sm:space-y-6 lg:space-y-7" onSubmit={handleSubmit}>
                      <div className="space-y-5 sm:space-y-6 lg:space-y-7">
                        {/* Business Name */}
                        <div className="space-y-2 lg:space-y-2.5">
                          <label className="text-xs font-bold text-navy uppercase tracking-widest">Business Name *</label>
                          <input 
                            id="businessName"
                            name="businessName"
                            type="text" 
                            required
                            placeholder="Your Business / Shop Name" 
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base focus:ring-2 focus:ring-googleBlue focus:bg-white transition-all outline-none" 
                          />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-2 lg:space-y-2.5">
                          <label className="text-xs font-bold text-navy uppercase tracking-widest">Phone Number *</label>
                          <input 
                            name="phoneNumber"
                            type="tel" 
                            required
                            placeholder="+91 91797 75502" 
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base focus:ring-2 focus:ring-googleBlue focus:bg-white transition-all outline-none" 
                          />
                        </div>

                        {/* Interested Service */}
                        <div className="space-y-2 lg:space-y-2.5">
                          <label className="text-xs font-bold text-navy uppercase tracking-widest">Interested Service *</label>
                          <div className="relative">
                            <select 
                              id="interestedServiceSelect"
                              name="interestedService"
                              required
                              value={formData.interestedService}
                              onChange={handleChange}
                              className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base text-navy font-semibold focus:ring-2 focus:ring-googleBlue focus:bg-white transition-all outline-none cursor-pointer pr-10 appearance-none" 
                            >
                              <option value="" disabled className="text-gray-400">Select a plan / service...</option>
                              <optgroup label="Google Business Optimization" className="font-bold text-navy bg-white">
                                <option value="Starter Plan" className="font-normal text-gray-700 bg-white">Starter Plan</option>
                                <option value="Growth Plan" className="font-normal text-gray-700 bg-white">Growth Plan</option>
                                <option value="Pro Plan" className="font-normal text-gray-700 bg-white">Pro Plan</option>
                              </optgroup>
                              <optgroup label="New Profile Creation" className="font-bold text-navy bg-white">
                                <option value="Basic Profile Creation" className="font-normal text-gray-700 bg-white">Basic Profile Creation</option>
                                <option value="Optimized Profile Creation" className="font-normal text-gray-700 bg-white">Optimized Profile Creation</option>
                              </optgroup>
                              <optgroup label="Other Services" className="font-bold text-navy bg-white">
                                <option value="Call Activation Plan" className="font-normal text-gray-700 bg-white">Call Activation Plan</option>
                                <option value="Account Recovery Plan" className="font-normal text-gray-700 bg-white">Account Recovery Plan</option>
                                <option value="Profile Verification" className="font-normal text-gray-700 bg-white">Profile Verification</option>
                              </optgroup>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full bg-googleBlue text-white py-4 sm:py-4.5 rounded-2xl font-bold text-base sm:text-lg transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 mt-4 sm:mt-6 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-navy'}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <motion.svg 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-10 w-10 text-green-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Request Sent!</h4>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-6 text-left max-w-md w-full mx-auto space-y-2">
                      <p className="text-xs font-bold text-navy uppercase tracking-widest border-b border-gray-200 pb-2 mb-2.5">Inquiry Confirmation</p>
                      <p className="text-sm text-gray-600"><span className="font-bold text-navy">Business Name:</span> {formData.businessName}</p>
                      <p className="text-sm text-gray-600"><span className="font-bold text-navy">Phone:</span> {formData.phoneNumber}</p>
                      <p className="text-sm text-gray-650 bg-googleBlue/5 p-2.5 rounded-xl border border-googleBlue/10 inline-block font-semibold text-googleBlue mt-1 w-full"><span className="font-bold text-navy text-xs uppercase tracking-wider block mb-1">Interested Service:</span> {formData.interestedService}</p>
                    </div>
                    <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                      Thank you for reaching out. Our team will contact you shortly to review your selected option.
                    </p>
                    <button 
                      onClick={resetForm}
                      className="w-full max-w-sm bg-navy text-white py-4 rounded-2xl font-bold text-base hover:bg-googleBlue transition-all shadow-lg"
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
