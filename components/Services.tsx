import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Sparkles, 
  Phone, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Check, 
  Rocket, 
  Crown, 
  PlusCircle,
  HelpCircle
} from 'lucide-react';

interface ServicesProps {
  onSelectPackage?: (pkgName: string) => void;
  openModalServiceId?: string | null;
  onCloseModalService?: () => void;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  accent: 'blue' | 'green' | 'yellow' | 'red' | 'teal';
  bgLight: string;
  iconBg: string;
  borderHover: string;
  textAccent: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gmb-opt',
    title: 'Google Business Profile Optimization',
    description: 'Boost your local visibility, rank higher in Google Maps, and attract more customers to your business.',
    accent: 'blue',
    bgLight: 'bg-blue-50/50',
    iconBg: 'bg-googleBlue/10 text-googleBlue',
    borderHover: 'hover:border-googleBlue',
    textAccent: 'text-googleBlue',
    icon: TrendingUp,
  },
  {
    id: 'new-profile',
    title: 'New Profile Creation',
    description: 'Create a professionally optimized Google Business Profile from scratch and start building local visibility correctly.',
    accent: 'green',
    bgLight: 'bg-green-50/50',
    iconBg: 'bg-googleGreen/10 text-googleGreen',
    borderHover: 'hover:border-googleGreen',
    textAccent: 'text-googleGreen',
    icon: Sparkles,
  },
  {
    id: 'call-button',
    title: 'Call Button Activation',
    description: 'Enable direct customer calls from your Google Business Profile and improve lead generation.',
    accent: 'yellow',
    bgLight: 'bg-yellow-50/50',
    iconBg: 'bg-googleYellow/10 text-googleYellow',
    borderHover: 'hover:border-googleYellow',
    textAccent: 'text-googleYellow',
    icon: Phone,
  },
  {
    id: 'recovery',
    title: 'Suspended Account Recovery',
    description: 'Recover suspended Google Business Profiles and restore local business visibility quickly.',
    accent: 'red',
    bgLight: 'bg-red-50/50',
    iconBg: 'bg-googleRed/10 text-googleRed',
    borderHover: 'hover:border-googleRed',
    textAccent: 'text-googleRed',
    icon: ShieldAlert,
  },
  {
    id: 'verification',
    title: 'Profile Verification',
    description: 'Complete Google Business Profile verification quickly and correctly with expert assistance.',
    accent: 'teal',
    bgLight: 'bg-teal-50/50',
    iconBg: 'bg-teal-500/10 text-teal-600',
    borderHover: 'hover:border-teal-500',
    textAccent: 'text-teal-600',
    icon: CheckCircle2,
  },
];

const Services: React.FC<ServicesProps> = ({ 
  onSelectPackage, 
  openModalServiceId, 
  onCloseModalService 
}) => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  useEffect(() => {
    if (openModalServiceId) {
      setActiveModalId(openModalServiceId);
    }
  }, [openModalServiceId]);

  const closeModal = () => {
    setActiveModalId(null);
    if (onCloseModalService) {
      onCloseModalService();
    }
  };

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModalId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalId]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleGetThisPlan = (pkgName: string) => {
    closeModal();
    if (onSelectPackage) {
      onSelectPackage(pkgName);
    }
    setTimeout(() => {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 bg-googleBlue/10 text-googleBlue rounded-full text-xs font-extrabold uppercase tracking-widest mb-4">
            Services & Packages
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy max-w-3xl mx-auto tracking-tight leading-tight">
            Comprehensive Google Maps Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Select a service below to explore features, pricing options, and find the right package for your business.
          </p>
        </div>

        {/* 5 Service Cards Grid:
            Desktop: Row 1 (3 items), Row 2 (2 items centered)
            Tablet: 2 columns
            Mobile: 1 column
        */}
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {/* Row 1: Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES_DATA.slice(0, 3).map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveModalId(service.id)}
                  className={`bg-white p-7 md:p-8 rounded-3xl border border-gray-100 shadow-sm ${service.borderHover} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative transform hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.iconBg} shadow-xs`}>
                        <IconComp className="w-7 h-7" />
                      </div>
                      
                      {/* Circular Arrow Button */}
                      <div className="w-11 h-11 rounded-full bg-gray-50 group-hover:bg-navy group-hover:text-white text-navy flex items-center justify-center transition-all duration-300 shadow-xs border border-gray-100">
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-googleBlue transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: Bottom 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {SERVICES_DATA.slice(3, 5).map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveModalId(service.id)}
                  className={`bg-white p-7 md:p-8 rounded-3xl border border-gray-100 shadow-sm ${service.borderHover} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative transform hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.iconBg} shadow-xs`}>
                        <IconComp className="w-7 h-7" />
                      </div>

                      {/* Circular Arrow Button */}
                      <div className="w-11 h-11 rounded-full bg-gray-50 group-hover:bg-navy group-hover:text-white text-navy flex items-center justify-center transition-all duration-300 shadow-xs border border-gray-100">
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-googleBlue transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* MODALS FOR EACH SERVICE */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeModalId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-navy/40 backdrop-blur-md"
            />

            {/* Modal Window Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-white w-full max-w-6xl rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 overflow-y-auto max-h-[90vh] z-10 border border-gray-100"
            >
              {/* Close Icon Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 md:top-7 md:right-7 p-2 text-gray-400 hover:text-navy hover:bg-gray-100 rounded-full transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* MODAL CONTENT PER SERVICE TYPE */}

              {/* 1. GOOGLE BUSINESS PROFILE OPTIMIZATION MODAL */}
              {activeModalId === 'gmb-opt' && (
                <div>
                  {/* Header */}
                  <div className="text-center max-w-2xl mx-auto mb-8 pr-8 sm:pr-0">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-googleBlue/10 text-googleBlue rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                      <TrendingUp className="w-4 h-4" />
                      Google Business Profile Optimization
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                      Choose Your Optimization Plan
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      Boost local search ranking, attract high-intent calls, and dominate Google Maps in your area.
                    </p>

                    {/* Monthly / Yearly Toggle */}
                    <div className="flex items-center justify-center gap-3 mt-6 bg-gray-50 p-1.5 rounded-2xl border border-gray-200/80 w-fit mx-auto">
                      <button
                        type="button"
                        onClick={() => setIsYearly(false)}
                        className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                          !isYearly ? 'bg-navy text-white shadow-sm' : 'text-gray-500 hover:text-navy'
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-12 h-6 bg-gray-200 rounded-full cursor-pointer relative flex items-center px-1 border border-gray-300 transition-colors"
                      >
                        <div className={`w-4 h-4 rounded-full bg-navy shadow-xs transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsYearly(true)}
                        className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                          isYearly ? 'bg-navy text-white shadow-sm' : 'text-gray-500 hover:text-navy'
                        }`}
                      >
                        <span>Yearly</span>
                        <span className="text-[10px] bg-googleGreen text-white px-2 py-0.5 font-bold rounded-full uppercase">
                          Save up to ₹24k
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* 3 Package Cards Grid - Vertical Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {/* Starter Plan */}
                    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="p-2.5 bg-blue-50 text-googleBlue rounded-xl">
                            <Rocket className="w-5 h-5" />
                          </span>
                          <h4 className="text-xl font-bold text-navy">Starter Plan</h4>
                        </div>
                        
                        <div className="flex items-baseline gap-1 my-3">
                          <span className="text-3xl font-black text-navy">
                            {isYearly ? '₹1,250' : '₹1,999'}
                          </span>
                          <span className="text-gray-400 text-xs font-semibold">/month</span>
                          {isYearly && (
                            <span className="text-[10px] font-bold text-googleGreen bg-green-50 px-2 py-0.5 rounded-md ml-1">
                              Save ₹9k/yr
                            </span>
                          )}
                        </div>

                        <p className="text-gray-500 text-xs md:text-sm mb-5 leading-relaxed">
                          Perfect for small local businesses starting their Google Maps visibility journey.
                        </p>

                        <div className="border-t border-gray-150 pt-4 mb-4">
                          <h5 className="text-[11px] font-bold text-navy uppercase tracking-wider mb-3">Included Features</h5>
                          <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>GBP Setup & Optimization</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Up to 5 Keywords</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>8 Google Posts / Month</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>8 Product Listings / Month</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                              <span className="text-[#EF4444] text-lg font-bold select-none">✕</span>
                              <span className="line-through decoration-gray-300">High-Quality Local Backlinks</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                              <span className="text-[#EF4444] text-lg font-bold select-none">✕</span>
                              <span className="line-through decoration-gray-300">High-Quality Business Citations</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Review Management</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Competitor Analysis</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Monthly Performance Reports</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <button
                        onClick={() => handleGetThisPlan("Google Business Optimization → Starter Plan")}
                        className="w-full mt-6 py-3.5 px-6 rounded-xl font-bold text-sm bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-300"
                      >
                        Get This Plan
                      </button>
                    </div>

                    {/* Growth Plan (Most Popular) */}
                    <div className="bg-white rounded-3xl border-2 border-googleBlue p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between relative ring-4 ring-googleBlue/5 mt-3 md:mt-0">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-googleBlue text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest shadow-xs whitespace-nowrap">
                        Most Popular Choice
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3 mt-1">
                          <span className="p-2.5 bg-green-50 text-googleGreen rounded-xl">
                            <TrendingUp className="w-5 h-5" />
                          </span>
                          <h4 className="text-xl font-bold text-navy">Growth Plan</h4>
                        </div>
                        
                        <div className="flex items-baseline gap-1 my-3">
                          <span className="text-3xl font-black text-navy">
                            {isYearly ? '₹2,000' : '₹2,999'}
                          </span>
                          <span className="text-gray-400 text-xs font-semibold">/month</span>
                          {isYearly && (
                            <span className="text-[10px] font-bold text-googleGreen bg-green-50 px-2 py-0.5 rounded-md ml-1">
                              Save ₹12k/yr
                            </span>
                          )}
                        </div>

                        <p className="text-gray-500 text-xs md:text-sm mb-5 leading-relaxed">
                          Ideal for growing businesses aiming for consistent top Google Maps rankings.
                        </p>

                        <div className="border-t border-gray-150 pt-4 mb-4">
                          <h5 className="text-[11px] font-bold text-navy uppercase tracking-wider mb-3">Included Features</h5>
                          <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>GBP Setup & Optimization</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-semibold text-navy">Up to 10 Keywords</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>12 Google Posts / Month</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>12 Product Listings / Month</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-semibold text-googleBlue">High-Quality Local Backlinks</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                              <span className="text-[#EF4444] text-lg font-bold select-none">✕</span>
                              <span className="line-through decoration-gray-300">High-Quality Business Citations</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Review Management</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Competitor Analysis</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Monthly Performance Reports</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <button
                        onClick={() => handleGetThisPlan("Google Business Optimization → Growth Plan")}
                        className="w-full mt-6 py-3.5 px-6 rounded-xl font-bold text-sm bg-googleBlue text-white hover:bg-navy transition-colors duration-300 shadow-md shadow-blue-100"
                      >
                        Get This Plan
                      </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="p-2.5 bg-yellow-50 text-googleYellow rounded-xl">
                            <Crown className="w-5 h-5" />
                          </span>
                          <h4 className="text-xl font-bold text-navy">Pro Plan</h4>
                        </div>
                        
                        <div className="flex items-baseline gap-1 my-3">
                          <span className="text-3xl font-black text-navy">
                            {isYearly ? '₹3,000' : '₹4,999'}
                          </span>
                          <span className="text-gray-400 text-xs font-semibold">/month</span>
                          {isYearly && (
                            <span className="text-[10px] font-bold text-googleGreen bg-green-50 px-2 py-0.5 rounded-md ml-1">
                              Save ₹24k/yr
                            </span>
                          )}
                        </div>

                        <p className="text-gray-500 text-xs md:text-sm mb-5 leading-relaxed">
                          Advanced market dominance for established businesses scaling leads fast.
                        </p>

                        <div className="border-t border-gray-150 pt-4 mb-4">
                          <h5 className="text-[11px] font-bold text-navy uppercase tracking-wider mb-3">Included Features</h5>
                          <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>GBP Setup & Optimization</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-bold text-navy">Up to 20 Keywords</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-bold text-navy">16 Google Posts / Month</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-bold text-navy">16 Product Listings / Month</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-bold text-navy">High-Quality Local Backlinks</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-bold text-googleBlue">High-Quality Business Citations</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Review Management</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Competitor Analysis</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Monthly Performance Reports</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <button
                        onClick={() => handleGetThisPlan("Google Business Optimization → Pro Plan")}
                        className="w-full mt-6 py-3.5 px-6 rounded-xl font-bold text-sm bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-300"
                      >
                        Get This Plan
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. NEW PROFILE CREATION MODAL */}
              {activeModalId === 'new-profile' && (
                <div>
                  <div className="text-center max-w-2xl mx-auto mb-8 pr-8 sm:pr-0">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-googleGreen/10 text-googleGreen rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                      <Sparkles className="w-4 h-4" />
                      New Profile Creation
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                      New Profile Creation Packages
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      Get your Google Business Profile built professionally from scratch for immediate local indexation.
                    </p>
                  </div>

                  {/* 2 Package Cards Grid - Vertical Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
                    {/* Basic Profile Creation */}
                    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="p-2.5 bg-green-50 text-googleGreen rounded-xl">
                            <PlusCircle className="w-5 h-5" />
                          </span>
                          <h4 className="text-xl font-bold text-navy">Basic Profile Creation</h4>
                        </div>
                        
                        <div className="flex items-baseline gap-1 my-3">
                          <span className="text-3xl font-black text-navy">₹2,999</span>
                          <span className="text-gray-400 text-xs font-bold uppercase bg-gray-100 px-2 py-0.5 rounded ml-1">One-Time</span>
                        </div>

                        <p className="text-gray-500 text-xs md:text-sm mb-5 leading-relaxed">
                          Clean baseline presence for new local stores & businesses.
                        </p>

                        <div className="border-t border-gray-150 pt-4 mb-4">
                          <h5 className="text-[11px] font-bold text-navy uppercase tracking-wider mb-3">Included Features</h5>
                          <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>New GBP Setup</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Category Selection</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>NAP & Address Setup</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Initial Basic Optimization</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                              <span className="text-[#EF4444] text-lg font-bold select-none">✕</span>
                              <span className="line-through decoration-gray-300">Advanced Category Research</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                              <span className="text-[#EF4444] text-lg font-bold select-none">✕</span>
                              <span className="line-through decoration-gray-300">Products & Services Catalog</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Verification Guidance</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>15 Days Basic Support</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <button
                        onClick={() => handleGetThisPlan("New Profile Creation → Basic Profile Creation")}
                        className="w-full mt-6 py-3.5 px-6 rounded-xl font-bold text-sm bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-300"
                      >
                        Get This Plan
                      </button>
                    </div>

                    {/* Optimized Profile Creation */}
                    <div className="bg-white rounded-3xl border-2 border-googleGreen p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between relative ring-4 ring-googleGreen/5 mt-3 md:mt-0">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-googleGreen text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest shadow-xs whitespace-nowrap">
                        Recommended Setup
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3 mt-1">
                          <span className="p-2.5 bg-green-50 text-googleGreen rounded-xl">
                            <Sparkles className="w-5 h-5" />
                          </span>
                          <h4 className="text-xl font-bold text-navy">Optimized Profile Creation</h4>
                        </div>
                        
                        <div className="flex items-baseline gap-1 my-3">
                          <span className="text-3xl font-black text-navy">₹4,999</span>
                          <span className="text-gray-400 text-xs font-bold uppercase bg-gray-100 px-2 py-0.5 rounded ml-1">One-Time</span>
                        </div>

                        <p className="text-gray-500 text-xs md:text-sm mb-5 leading-relaxed">
                          Complete expert setup including SEO keyword mapping for instant traction.
                        </p>

                        <div className="border-t border-gray-150 pt-4 mb-4">
                          <h5 className="text-[11px] font-bold text-navy uppercase tracking-wider mb-3">Included Features</h5>
                          <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Complete GBP Setup</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-semibold text-googleGreen">Advanced Category Research</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-semibold text-navy">SEO Optimized Description & Meta</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-semibold text-navy">Products & Services Catalog</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Image Metadata Optimization</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span>Priority Verification Support</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#22C55E] text-lg font-bold select-none">✓</span>
                              <span className="font-bold text-navy">30 Days Extended Follow-Through Support</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <button
                        onClick={() => handleGetThisPlan("New Profile Creation → Optimized Profile Creation")}
                        className="w-full mt-6 py-3.5 px-6 rounded-xl font-bold text-sm bg-googleBlue text-white hover:bg-navy transition-colors duration-300 shadow-md shadow-blue-100"
                      >
                        Get This Plan
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. CALL BUTTON ACTIVATION MODAL */}
              {activeModalId === 'call-button' && (
                <div className="max-w-xl mx-auto py-2">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-googleYellow/10 text-googleYellow flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                      Call Activation Plan
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      Enable direct customer calls from your Google Business Profile and improve lead generation.
                    </p>
                    <div className="flex items-baseline justify-center gap-1 my-4">
                      <span className="text-4xl font-black text-navy">₹1,999</span>
                      <span className="text-gray-400 text-xs font-bold uppercase bg-gray-100 px-2 py-0.5 rounded">One-Time</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 mb-6">
                    <h5 className="text-xs font-bold text-navy uppercase tracking-wider mb-4">Package Deliverables</h5>
                    <ul className="space-y-3 text-sm text-gray-700 font-medium">
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Call Button Setup & Linkage</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Phone Number Formatting & Verification</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Resolution of Internal GMB Dialing Errors</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Configuration Review & Basic Optimization</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Activation Support & Completion Report</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleGetThisPlan("Call Activation Plan")}
                    className="w-full py-4 px-8 rounded-xl font-bold text-base bg-googleBlue text-white hover:bg-navy transition-colors duration-300 shadow-lg shadow-blue-100"
                  >
                    Get This Plan
                  </button>
                </div>
              )}

              {/* 4. SUSPENDED ACCOUNT RECOVERY MODAL */}
              {activeModalId === 'recovery' && (
                <div className="max-w-xl mx-auto py-2">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-googleRed/10 text-googleRed flex items-center justify-center mx-auto mb-4">
                      <ShieldAlert className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                      Account Recovery Plan
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      Recover suspended Google Business Profiles and restore local business visibility quickly.
                    </p>
                    <div className="flex items-baseline justify-center gap-1 my-4">
                      <span className="text-4xl font-black text-navy">₹2,999</span>
                      <span className="text-gray-400 text-xs font-bold uppercase bg-gray-100 px-2 py-0.5 rounded">One-Time</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 mb-6">
                    <h5 className="text-xs font-bold text-navy uppercase tracking-wider mb-4">Package Deliverables</h5>
                    <ul className="space-y-3 text-sm text-gray-700 font-medium">
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Comprehensive Suspension Cause Audit</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Issue & Guidelines Compliance Identification</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Official Reinstatement Submission & Filing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Recovery Documentation & Case Notes</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Priority Reinstatement Follow-Up Support</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleGetThisPlan("Account Recovery Plan")}
                    className="w-full py-4 px-8 rounded-xl font-bold text-base bg-googleBlue text-white hover:bg-navy transition-colors duration-300 shadow-lg shadow-blue-100"
                  >
                    Get This Plan
                  </button>
                </div>
              )}

              {/* 5. PROFILE VERIFICATION MODAL */}
              {activeModalId === 'verification' && (
                <div className="max-w-xl mx-auto py-2">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                      Profile Verification Plan
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      Complete Google Business Profile verification quickly and correctly with expert assistance.
                    </p>
                    <div className="flex items-baseline justify-center gap-1 my-4">
                      <span className="text-4xl font-black text-navy">₹2,499</span>
                      <span className="text-gray-400 text-xs font-bold uppercase bg-gray-100 px-2 py-0.5 rounded">One-Time</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 mb-6">
                    <h5 className="text-xs font-bold text-navy uppercase tracking-wider mb-4">Package Deliverables</h5>
                    <ul className="space-y-3 text-sm text-gray-700 font-medium">
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Verification Method Selection & Guidance</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Video / Postcard Verification Step-by-Step Help</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Address & Business Document Compliance Review</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Re-Verification & Pending Flag Resolution</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#22C55E] text-xl font-bold select-none">✓</span>
                        <span>Live Verification Expert Consultation</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleGetThisPlan("Profile Verification Plan")}
                    className="w-full py-4 px-8 rounded-xl font-bold text-base bg-googleBlue text-white hover:bg-navy transition-colors duration-300 shadow-lg shadow-blue-100"
                  >
                    Get This Plan
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Services;
