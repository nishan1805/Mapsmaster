import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, TrendingUp, Crown, Check, X, PlusCircle, Sparkles, Phone, Shield } from 'lucide-react';

// Sub-components: Custom Icons
const CheckIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5 text-googleBlue" }) => (
  <svg 
    className={`${className} flex-shrink-0`}   
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

const CloseIcon: React.FC = () => (
  <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5 text-googleYellow" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Formatted Data Types
interface Plan {
  id: string;
  name: string;
  price?: string;             // For flat rate plans
  priceMonthly?: string;      // Monthly pricing GMB Opt
  priceYearly?: string;       // Yearly pricing GMB Opt
  billingMonthly?: string;    // "/month" or flat
  billingYearly?: string;     // "/month" or flat
  savings?: string;
  isOneTime?: boolean;
  description: string;
  isRecommended?: boolean;
  features: string[];
  additionalInfo: {
    deliverables: string;
    process: string;
    support: string;
  };
}

interface ServiceTab {
  id: string;
  name: string;
  shortName: string;
  icon: (colorClass: string) => React.ReactNode;
  description: string;
  accent: string;              // 'googleBlue' | 'googleGreen' | 'googleYellow' | 'googleRed'
  accentHex: string;
  bgLight: string;
  hasPricingToggle: boolean;
  plans: Plan[];
}

interface ServicesPricingProps {
  onSelectPackage?: (pkgName: string) => void;
  onCompareModalToggle?: (isOpen: boolean) => void;
}

const TABS_DATA: ServiceTab[] = [
  {
    id: 'gmb-opt',
    name: 'Google Business Profile Optimization',
    shortName: 'Profile Optimization',
    icon: (cls) => (
      <svg className={`w-5 h-5 ${cls}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: 'Boost your local visibility, rank higher in Google Maps, and attract more customers to your business.',
    accent: 'googleBlue',
    accentHex: '#4285F4',
    bgLight: 'bg-blue-50/50',
    hasPricingToggle: true,
    plans: [
      {
        id: 'starter',
        name: 'Starter Plan',
        priceMonthly: '₹1,999',
        priceYearly: '₹1,250',
        billingMonthly: 'month',
        billingYearly: 'month',
        savings: 'Save ₹9,000/year',
        description: 'Perfect for businesses starting their local visibility journey.',
        features: [
          'GBP Setup & Optimization',
          'Keyword Optimization (Up to 5 Keywords)',
          '8 Google Posts/month',
          '8 Product Listings / Month',
          'Review Management',
          'Competitor Analysis',
          'Monthly Performance Report'
        ],
        additionalInfo: {
          deliverables: 'Complete core profile audit, Google Maps structural verification setup, and basic monthly metric tracking report.',
          process: 'Within 3 days we finalize your GMB configuration, map secondary categories, index primary search terms, and schedule initial posts.',
          support: 'Standard email, chat with real Raipur support desk. Expected turnarounds within 24-48 business hours.'
        }
      },
      {
        id: 'growth',
        name: 'Growth Plan',
        priceMonthly: '₹2,999',
        priceYearly: '₹2,000',
        billingMonthly: 'month',
        billingYearly: 'month',
        savings: 'Save ₹12,000/year',
        description: 'Ideal for growing businesses aiming for stronger first-page visibility.',
        isRecommended: true,
        features: [
          'GBP Setup & Optimization',
          'Keyword Optimization (Up to 10 Keywords)',
          '12 Google Posts/month',
          '12 Product Listings/month',
          'High-Quality Local Backlinks',
          'Review Management',
          'Competitor Analysis',
          'Monthly Performance Report'
        ],
        additionalInfo: {
          deliverables: 'In-depth local competitor keyword benchmarking, Geo-tagged photo additions, custom review response scripts, and local citation audit.',
          process: 'Week 1: Competitor research and priority keywords blueprint. Weeks 2-4: Structured organic post campaigns, review requests push, citation updates.',
          support: 'Priority priority callback & direct WhatsApp customer line. Fast SLA under 12 hours.'
        }
      },
      {
        id: 'pro',
        name: 'Pro Plan',
        priceMonthly: '₹4,999',
        priceYearly: '₹3,000',
        billingMonthly: 'month',
        billingYearly: 'month',
        savings: 'Save ₹24,000/year',
        description: 'Advanced visibility and lead generation for businesses ready to scale.',
        features: [
          'GBP Setup & Optimization',
          'Keyword Optimization (Up to 20 Keywords)',
          '16 Google Posts / Month',
          '16 Product Listings / Month',
          'High-Quality Local Backlinks',
          'High-Quality Business Citations',
          'Review Management',
          'Competitor Analysis',
          'Monthly Performance Reports'
        ],
        additionalInfo: {
          deliverables: 'Full-pack local takeover strategy, geo-grid heatmap tracking reports, custom CTA links mapping, automated call analytics.',
          process: 'Strategic 30-day blitz layout updated weekly. We analyze competitors top moves, secure high domain citations, and constantly refine optimization.',
          support: 'VIP phone support, 1-on-1 advisor briefings, and responsive WhatsApp responses inside 4 hours.'
        }
      }
    ]
  },
  {
    id: 'new-profile',
    name: 'New Profile Creation',
    shortName: 'New Profile',
    icon: (cls) => (
      <svg className={`w-5 h-5 ${cls}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Create a professionally optimized Google Business Profile from scratch and start building local visibility correctly.',
    accent: 'googleGreen',
    accentHex: '#34A853',
    bgLight: 'bg-green-50/50',
    hasPricingToggle: false,
    plans: [
      {
        id: 'basic-creation',
        name: 'Basic Profile Creation',
        price: '₹2,999',
        isOneTime: true,
        description: 'Perfect for new shops wanting a basic, clean baseline presence.',
        features: [
          'New GBP Setup',
          'Category Selection',
          'NAP Setup',
          'Initial Optimization',
          'Verification Guidance',
          'Basic Support'
        ],
        additionalInfo: {
          deliverables: 'Profile claim & initialization on Google, standard category grouping, coordinate checking, and clean address mapping.',
          process: 'Within 48 hours our GMB experts perform correct registrations, prepare compliance items, and initiate official verification methods.',
          support: 'Standard checkout and handoff with 15 days of post-verification validation support.'
        }
      },
      {
        id: 'optimized-creation',
        name: 'Optimized Profile Creation',
        price: '₹4,999',
        isOneTime: true,
        description: 'Complete expert setup including market research for powerful traction.',
        isRecommended: true,
        features: [
          'Complete GBP Setup',
          'Advanced Category Research',
          'SEO Optimized Profile',
          'Products & Services Setup',
          'Image Optimization',
          'Priority Support'
        ],
        additionalInfo: {
          deliverables: 'Hyper-optimized meta description keywords, custom list of localized service keywords, image metadata adjustments, and map catalog layout.',
          process: 'Day 1-2: Thorough keyword profiling & competitors schema audit. Day 3-4: Secure profile publishing and complete live verification backup.',
          support: '30 days extended follow-through covering verification validation and initial listing index.'
        }
      }
    ]
  },
  {
    id: 'call-button',
    name: 'Call Button Activation',
    shortName: 'Call Activation',
    icon: (cls) => <Phone className={`w-5 h-5 ${cls}`} />,
    description: 'Enable direct customer calls from your Google Business Profile and improve lead generation.',
    accent: 'googleYellow',
    accentHex: '#FBBC05',
    bgLight: 'bg-yellow-50/50',
    hasPricingToggle: false,
    plans: [
      {
        id: 'call-single',
        name: 'Call Activation Plan',
        price: '₹1,999',
        isOneTime: true,
        description: 'Quickly resolve deactivated or missing GMB layout call parameters.',
        features: [
          'Call Button Setup',
          'Verification Assistance',
          'Configuration Review',
          'Basic Optimization',
          'Activation Support',
          'Completion Report'
        ],
        additionalInfo: {
          deliverables: 'Restore dialing linkage inside listing, secure correct cell / landline configuration, and ensure immediate click-to-call response.',
          process: 'Evaluation of number formatting issues or duplicate flags immediately in Day 1. Resolve internal panel errors with support appeals by Day 3.',
          support: '10 days verification check tracking dial status changes.'
        }
      }
    ]
  },
  {
    id: 'recovery',
    name: 'Suspended Account Recovery',
    shortName: 'Account Recovery',
    icon: (cls) => <Shield className={`w-5 h-5 ${cls}`} />,
    description: 'Recover suspended Google Business Profiles and restore local business visibility quickly.',
    accent: 'googleRed',
    accentHex: '#EA4335',
    bgLight: 'bg-red-50/50',
    hasPricingToggle: false,
    plans: [
      {
        id: 'recovery-single',
        name: 'Account Recovery Plan',
        price: '₹2,999',
        isOneTime: true,
        description: 'Professional representation and review audit to reinstate your profile.',
        features: [
          'Suspension Audit',
          'Issue Identification',
          'Recovery Documentation',
          'Reinstatement Submission',
          'Follow-up Support',
          'Recovery Guidance'
        ],
        additionalInfo: {
          deliverables: 'Strict audit matching Google GMB guideline limits, submission filings and case tracking notes, and appeal letter template drafts.',
          process: 'Detailed dashboard validation analysis matching local documentation guidelines within 24 hours. Submit structured official appeals via Google agency routes.',
          support: 'Continuous advice and appeal tracking until decision resolution.'
        }
      }
    ]
  }
];

const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectPackage, onCompareModalToggle }) => {
  const [activeTab, setActiveTab] = useState<string>('gmb-opt');
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<Plan | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  const currentTab = TABS_DATA.find(t => t.id === activeTab) || TABS_DATA[0];

  useEffect(() => {
    if (onCompareModalToggle) {
      onCompareModalToggle(isCompareModalOpen);
    }
  }, [isCompareModalOpen, onCompareModalToggle]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset active state & scroll position when changing tabs
  useEffect(() => {
    setActiveCardIndex(0);
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const children = Array.from(container.children);
    if (children.length <= 1) return;

    const containerRect = container.getBoundingClientRect();
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childRect = child.getBoundingClientRect();
      // Calculate how close the card's left edge is to the container's left edge
      const dist = Math.abs(childRect.left - containerRect.left);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeCardIndex) {
      setActiveCardIndex(closestIndex);
    }
  };

  // Disable body scrolling when modal is active
  useEffect(() => {
    if (selectedPlanForModal || isCompareModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPlanForModal, isCompareModalOpen]);

  // Handle escape key closures
  useEffect(() => {
    const handleCloseOnEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlanForModal(null);
        setIsCompareModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleCloseOnEsc);
    return () => window.removeEventListener('keydown', handleCloseOnEsc);
  }, []);

  const getPlanAccent = (tab: ServiceTab, plan: Plan) => {
    if (tab.id === 'gmb-opt') {
      if (plan.id === 'starter') return 'googleBlue';
      if (plan.id === 'growth') return 'googleGreen';
      if (plan.id === 'pro') return 'googleYellow';
    }
    return tab.accent;
  };

  const getHeadingColorClassByAccent = (accent: string) => {
    switch (accent) {
      case 'googleBlue': return 'text-googleBlue';
      case 'googleGreen': return 'text-googleGreen';
      case 'googleYellow': return 'text-googleYellow';
      case 'googleRed': return 'text-googleRed';
      default: return 'text-googleBlue';
    }
  };

  const getButtonBgClassByAccent = (accent: string, isRec: boolean) => {
    if (isRec) {
      switch (accent) {
        case 'googleBlue': return 'bg-googleBlue hover:bg-navy text-white shadow-md shadow-blue-100';
        case 'googleGreen': return 'bg-googleGreen hover:bg-navy text-white shadow-md shadow-green-100';
        case 'googleYellow': return 'bg-googleYellow hover:bg-navy text-white shadow-md shadow-yellow-101';
        case 'googleRed': return 'bg-googleRed hover:bg-navy text-white shadow-md shadow-red-100';
        default: return 'bg-googleBlue hover:bg-navy text-white shadow-md shadow-blue-100';
      }
    }
    switch (accent) {
      case 'googleBlue': return 'bg-white text-googleBlue border border-googleBlue hover:bg-googleBlue hover:text-white';
      case 'googleGreen': return 'bg-white text-googleGreen border border-googleGreen hover:bg-googleGreen hover:text-white';
      case 'googleYellow': return 'bg-white text-googleYellow border border-googleYellow hover:bg-googleYellow hover:text-white';
      case 'googleRed': return 'bg-white text-googleRed border border-googleRed hover:bg-googleRed hover:text-white';
      default: return 'bg-white text-navy border border-gray-200 hover:bg-navy hover:text-white';
    }
  };

  const getRecommendedBorderClass = (accent: string) => {
    switch (accent) {
      case 'googleBlue': return 'border-2 border-googleBlue ring-4 ring-googleBlue/5';
      case 'googleGreen': return 'border-2 border-googleGreen ring-4 ring-googleGreen/5';
      case 'googleYellow': return 'border-2 border-googleYellow ring-4 ring-googleYellow/5';
      case 'googleRed': return 'border-2 border-googleRed ring-4 ring-googleRed/5';
      default: return 'border-2 border-googleBlue ring-4 ring-googleBlue/5';
    }
  };

  const getHoverBorderClass = (accent: string) => {
    switch (accent) {
      case 'googleBlue': return 'hover:border-googleBlue';
      case 'googleGreen': return 'hover:border-googleGreen';
      case 'googleYellow': return 'hover:border-googleYellow';
      case 'googleRed': return 'hover:border-googleRed';
      default: return 'hover:border-gray-200';
    }
  };

  const getBgLightClassByAccent = (accent: string) => {
    switch (accent) {
      case 'googleBlue': return 'bg-blue-50/50';
      case 'googleGreen': return 'bg-green-50/50';
      case 'googleYellow': return 'bg-yellow-50/50';
      case 'googleRed': return 'bg-red-50/50';
      default: return 'bg-gray-50/50';
    }
  };

  const getPlanIcon = (tabId: string, planId: string, colorClass: string) => {
    const sizeCls = "w-6 h-6 " + colorClass;
    if (tabId === 'gmb-opt') {
      if (planId === 'starter') return <Rocket className={sizeCls} />;
      if (planId === 'growth') return <TrendingUp className={sizeCls} />;
      if (planId === 'pro') return <Crown className={sizeCls} />;
    }
    if (tabId === 'new-profile') {
      if (planId === 'basic-creation') return <PlusCircle className={sizeCls} />;
      if (planId === 'optimized-creation') return <Sparkles className={sizeCls} />;
    }
    if (tabId === 'call-button') {
      return <Phone className={sizeCls} />;
    }
    if (tabId === 'recovery') {
      return <Shield className={sizeCls} />;
    }
    return <Rocket className={sizeCls} />;
  };

  const getHeadingColorClass = (tab: ServiceTab) => {
    switch (tab.accent) {
      case 'googleBlue': return 'text-googleBlue';
      case 'googleGreen': return 'text-googleGreen';
      case 'googleYellow': return 'text-googleYellow';
      case 'googleRed': return 'text-googleRed';
      default: return 'text-googleBlue';
    }
  };

  const handleGetThisPlan = (plan: Plan) => {
  let optionName = "";
 
    if (currentTab.id === 'gmb-opt') { 
      if (plan.id === 'starter')
        optionName = "Starter Plan";

      if (plan.id === 'growth')
        optionName = "Growth Plan";

      if (plan.id === 'pro') 
        optionName = "Pro Plan";

    } else if (currentTab.id === 'new-profile') {

      if (plan.id === 'basic-creation')
        optionName = "Basic Profile Creation";

      if (plan.id === 'optimized-creation')
        optionName = "Optimized Profile Creation";

    } else if (currentTab.id === 'call-button') {

      optionName = "Call Activation Plan";

    } else if (currentTab.id === 'recovery') {

      optionName = "Account Recovery Plan";
  
    }

    if (onSelectPackage) { 
      onSelectPackage(optionName);
    }

    const contactElem = document.getElementById("contact");

    if (contactElem) {
      contactElem.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-base font-bold text-googleBlue tracking-widest uppercase mb-4">
            Services & Pricing
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy max-w-3xl mx-auto tracking-tight leading-tight">
            Grow Your Business with Our Specialized Services
          </h3>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Choose the service that best fits your business needs and growth goals. Explore our plans in deep detail.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-start lg:justify-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4 mb-12 -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-gray-100 gap-1 md:gap-2 whitespace-nowrap">
            {TABS_DATA.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-navy text-white shadow-md' 
                      : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                  }`}
                >
                  {tab.icon(isActive ? 'text-white' : getHeadingColorClass(tab))}
                  <span>{tab.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Box with motion wrapper */}
        <div className="max-w-6xl mx-auto">
          {/* Active Tab Info */}
          <div className="text-left mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
            <div className="max-w-2xl text-left">
              <h4 className="text-xl md:text-2xl font-bold text-navy mb-3 text-left">
                {currentTab.name}
              </h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                {currentTab.description}
              </p>
            </div>

            {/* Monthly / Yearly Toggle - ONLY for Optimization Tab */}
            {currentTab.hasPricingToggle && (
              <div className="flex items-center justify-center gap-3 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-150">
                <button
                  type="button"
                  onClick={() => setIsYearly(false)}
                  className={`text-xs sm:text-sm font-bold transition-all px-3 py-1.5 rounded-xl ${!isYearly ? 'bg-navy text-white shadow-sm' : 'text-gray-500 hover:text-navy'}`}
                >
                  Monthly
                </button>
                
                <button 
                  type="button"
                  onClick={() => setIsYearly(!isYearly)}
                  className="w-12 h-6 bg-gray-100 rounded-full cursor-pointer relative flex items-center transition-colors px-1 border border-gray-200"
                >
                  <div className={`w-4 h-4 rounded-full bg-navy shadow-sm transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsYearly(true)}
                  className={`text-xs sm:text-sm font-bold transition-all px-3 py-1.5 rounded-xl flex items-center gap-1.5 ${isYearly ? 'bg-navy text-white shadow-sm' : 'text-gray-500 hover:text-navy'}`}
                >
                  <span>Yearly</span>
                  <span className="text-[10px] bg-googleGreen text-white px-2 py-0.5 font-bold rounded-full whitespace-nowrap font-sans">
                    Save up to ₹24k
                  </span>
                </button>
              </div>
            )}
          </div>

          <div id="packages" className="relative -top-24 opacity-0 h-0 w-0"></div>

          {/* Cards showcase area */}
          <div className="relative">
            <div 
              ref={cardsContainerRef}
              onScroll={handleScroll}
              className={currentTab.plans.length === 1 
                ? "flex justify-center md:justify-start items-stretch pt-6 pb-8 md:pt-4 md:pb-0 px-5 md:px-0 w-full"
                : `flex md:grid ${currentTab.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-6 pb-8 md:pt-4 md:pb-0 -mx-4 md:mx-0 justify-start md:justify-center`
              }
              style={isMobile && currentTab.plans.length > 1 ? {
                paddingLeft: '20px',
                paddingRight: '20px',
                scrollPaddingLeft: '20px',
                scrollPaddingRight: '20px'
              } : undefined}
            >
              {currentTab.plans.map((plan) => {
                const isRecommended = plan.isRecommended;
                const price = currentTab.hasPricingToggle 
                  ? (isYearly ? plan.priceYearly : plan.priceMonthly) 
                  : plan.price;
                const billingText = currentTab.hasPricingToggle 
                  ? (isYearly ? '/month' : '/month') 
                  : (plan.isOneTime ? '' : '/month');

                const planAccent = getPlanAccent(currentTab, plan);
                const accentBorderClass = getRecommendedBorderClass(planAccent);
                const headingColorClass = getHeadingColorClassByAccent(planAccent);
                const bgLightClass = getBgLightClassByAccent(planAccent);
                const hoverBorderClass = getHoverBorderClass(planAccent);

                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col p-6 md:p-8 rounded-[2rem] bg-white transition-all duration-300 shadow-sm border snap-start shrink-0 ${
                      currentTab.plans.length === 1
                        ? 'w-full max-w-[350px] md:w-full md:max-w-[350px]'
                        : 'w-[73vw] sm:w-[325px] md:w-full md:max-w-none'
                    } group select-none hover:shadow-xl ${
                      isRecommended 
                        ? `${accentBorderClass} z-10 shadow-md` 
                        : `border-gray-100 ${hoverBorderClass}`
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-googleBlue text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md z-25 whitespace-nowrap">
                        Recommended
                      </div>
                    )}

                    {/* Card Top Service Icon & Plan Info */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`w-14 h-14 min-w-14 min-h-14 rounded-2xl flex items-center justify-center ${bgLightClass}`}>
                          {getPlanIcon(currentTab.id, plan.id, headingColorClass)}
                        </span>
                        {currentTab.hasPricingToggle && isYearly && (
                          <span className="text-[10px] font-bold text-googleGreen bg-green-50 px-2.5 py-1 rounded-md">
                            {plan.savings}
                          </span>
                        )}
                      </div>

                      <h5 className="font-extrabold text-navy text-lg tracking-tight mb-1">{plan.name}</h5>

                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl font-black text-navy">{price}</span>
                        {billingText && (
                          <span className="text-gray-400 font-medium text-xs">{billingText}</span>
                        )}
                        {!billingText && plan.isOneTime && (
                          <span className="text-gray-400 font-bold text-[10px] ml-1 uppercase bg-gray-100 px-2 py-0.5 rounded">One-Time</span>
                        )}
                      </div>

                      {currentTab.hasPricingToggle && isYearly && (
                        <div className="text-[10px] text-gray-400 font-medium mt-1">
                          Billed yearly • {plan.priceMonthly}/mo regular rate
                        </div>
                      )}

                      <p className="text-gray-500 mt-3 text-sm leading-relaxed min-h-[44px]">
                        {plan.description}
                      </p>
                    </div>

                    <div className="w-full h-px bg-gray-100 mb-5"></div>

                    {/* Feature Lists - inline normal sized ✓ (16-20px) inline with description */}
                    <ul className="space-y-3 mb-5 flex-grow text-left">
                      {plan.features.slice(0, 6).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700 font-medium">
                          <CheckIcon className={`h-4 w-4 ${headingColorClass} flex-shrink-0 mt-0.5`} />
                          <span className="leading-normal break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Get This Plan button - Know More links have been removed */}
                    <div className="mt-auto">
                      <button
                        onClick={() => handleGetThisPlan(plan)}
                        className="block w-full py-3.5 rounded-xl font-medium text-sm text-center bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        Get This Plan
                      </button>
                    </div>
                  </div>
                );
              })}
              {isMobile && currentTab.plans.length > 1 && (
                <div className="w-[10px] shrink-0 pointer-events-none" />
              )}
            </div>
            
            {/* Carousel indicator helpers on mobile */}
            {currentTab.plans.length > 1 && (
              <div className="flex justify-center gap-2 mt-2 md:hidden">
                {currentTab.plans.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeCardIndex ? 'w-4 bg-navy' : 'w-1.5 bg-gray-300'
                    }`} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Compare All Plans Button - ONLY for GMB Optimization Tab */}
          {activeTab === 'gmb-opt' && (
            <div className="flex justify-center mt-12 md:mt-16">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-navy border-2 border-navy px-8 py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-navy hover:text-white transition-all transform hover:-translate-y-0.5 shadow-sm active:scale-95"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Compare All Plans</span>
              </button>
            </div>
          )}

        </div>
      </div>

      {/* PLAN DETAILS / "KNOW MORE" MODAL */}
      <AnimatePresence>
        {selectedPlanForModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            {/* Overlay - subtle dark 20-25% opacity with slight blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlanForModal(null)}
              className="absolute inset-0 bg-navy/25 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-white w-[95%] sm:w-full max-w-2xl rounded-3xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] z-10 border border-gray-100"
            >
              <button 
                onClick={() => setSelectedPlanForModal(null)}
                className="absolute top-6 right-6 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <CloseIcon />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block p-2 rounded-xl ${currentTab.bgLight}`}>
                  {currentTab.icon(getHeadingColorClass(currentTab))}
                </span>
                <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                  {currentTab.name}
                </span>
              </div>

              <h4 className="text-2xl md:text-3xl font-extrabold text-navy mb-2">
                {selectedPlanForModal.name}
              </h4>
              <p className="text-gray-500 text-sm mb-6">
                {selectedPlanForModal.description}
              </p>

              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* Complete Features Listing */}
              <div className="mb-6">
                <h5 className="font-extrabold text-navy text-sm uppercase tracking-wider mb-4">What's Included (Complete List)</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPlanForModal.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                      <CheckIcon className={`h-4 w-4 mt-0.5 ${getHeadingColorClass(currentTab)} flex-none`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery, Process, Support details */}
              <div className="bg-gray-50 rounded-2xl p-5 space-y-4 text-xs md:text-sm mb-6 border border-gray-150">
                <div>
                  <h6 className="font-bold text-navy mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-googleBlue"></span> Deliverables Details:
                  </h6>
                  <p className="text-gray-600 pl-3.5 leading-relaxed">{selectedPlanForModal.additionalInfo.deliverables}</p>
                </div>
                <div>
                  <h6 className="font-bold text-navy mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-googleGreen"></span> Process & Launch Workflow:
                  </h6>
                  <p className="text-gray-600 pl-3.5 leading-relaxed">{selectedPlanForModal.additionalInfo.process}</p>
                </div>
                <div>
                  <h6 className="font-bold text-navy mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-googleYellow"></span> Support Levels:
                  </h6>
                  <p className="text-gray-600 pl-3.5 leading-relaxed">{selectedPlanForModal.additionalInfo.support}</p>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={() => setSelectedPlanForModal(null)}
                  className={`flex-1 py-4 px-6 rounded-xl font-bold text-base text-center transition-all ${
                    selectedPlanForModal.isRecommended 
                      ? getButtonBgClass(currentTab, true)
                      : 'bg-navy text-white hover:bg-googleBlue shadow-lg'
                  }`}
                >
                  Request This Plan
                </a>
                <button
                  onClick={() => setSelectedPlanForModal(null)}
                  className="px-6 py-4 rounded-xl border border-gray-200 text-gray-500 hover:text-navy font-bold text-base hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* REDESIGNED COMPARISON EXPERIENCE (MOBILE FULL-SCREEN ACTION SHEET & DESKTOP COMPACT MODAL) */}
      <AnimatePresence>
        {isCompareModalOpen && (
          <div className="fixed inset-0 z-[101] flex items-end md:items-center justify-center p-0 md:p-6 lg:p-8 overflow-hidden">
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCompareModalOpen(false)}
              className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            />

            {/* Modal / Action Sheet Container */}
            <motion.div
              initial={isMobile ? { y: '100dvh' } : { scale: 0.95, y: 15, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={isMobile ? { y: '100dvh' } : { scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 350 }}
              className="relative bg-white w-full h-[100dvh] md:h-auto md:w-[90%] xl:w-[85%] max-w-[1150px] shadow-2xl flex flex-col md:max-h-[80vh] rounded-none md:rounded-3xl overflow-hidden z-10 border-t border-gray-150 md:border border-gray-100"
            >
              {/* Sticky Header at the top of the modal/action sheet */}
              <div className="bg-white border-b border-gray-100 py-4 px-5 md:px-8 flex justify-between items-center shrink-0 sticky top-0 z-40">
                <div className="flex items-center gap-3">
                  <span className="p-1.5 bg-blue-50 text-googleBlue rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-extrabold text-navy text-sm md:text-base">Plan Comparison Matrix</h4>
                  </div>
                </div>
                <button 
                  onClick={() => setIsCompareModalOpen(false)}
                  className="p-1.5 px-3.5 hover:bg-gray-100 rounded-full text-navy font-bold text-xs transition-all border border-gray-100 flex items-center gap-1.5 focus:outline-none cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-gray-500" />
                  <span>Close</span>
                </button>
              </div>

              {/* Table Body Content Area */}
              <div className="p-4 md:p-8 overflow-y-auto flex-1 bg-white">
                {/* Table Wrapper for horizontal scroll on mobile with hidden scrollbars */}
                <div className="overflow-x-auto border border-gray-100 rounded-2xl bg-white shadow-sm max-w-4xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <table className="w-full min-w-max md:min-w-[700px] border-collapse text-left text-xs md:text-sm">
                    <thead>
                      <tr className="bg-navy text-white text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-navy/10">
                        <th className="p-3 md:p-5 sticky left-0 bg-navy z-30 w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none text-left border-r border-navy/10 shadow-[2px_0_5px_rgba(0,0,0,0.15)]">
                          Feature
                        </th>
                        <th className="p-3 md:p-5 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Starter Plan
                        </th>
                        <th className="p-3 md:p-5 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none bg-blue-900/15">
                          Growth Plan (Recommended)
                        </th>
                        <th className="p-3 md:p-5 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Pro Plan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-sans">
                      
                      {/* Price Row */}
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Monthly Pricing
                        </td>
                        <td className="p-3 md:p-5 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">
                          <span className="font-extrabold text-navy">₹1,999</span>
                          <span className="text-gray-400 text-[10px]">/month</span>
                        </td>
                        <td className="p-3 md:p-5 bg-blue-50/30 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">
                          <span className="font-extrabold text-googleBlue">₹2,999</span>
                          <span className="text-gray-400 text-[10px]">/month</span>
                        </td>
                        <td className="p-3 md:p-5 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">
                          <span className="font-extrabold text-navy">₹4,999</span>
                          <span className="text-gray-400 text-[10px]">/month</span>
                        </td>
                      </tr>

                      {/* Yearly Effective row */}
                      <tr className="hover:bg-gray-50/50 bg-gray-50/25">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Yearly (Effective)
                        </td>
                        <td className="p-3 md:p-5 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none text-googleGreen font-semibold">
                          ₹1,250<span className="text-[10px]">/mo</span>
                          <div className="text-[9px] text-gray-450 font-medium font-sans">Save ₹9,000 / year</div>
                        </td>
                        <td className="p-3 md:p-5 bg-blue-50/45 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none text-googleGreen font-bold">
                          ₹2,000<span className="text-[10px]">/mo</span>
                          <div className="text-[9px] text-gray-505 font-bold font-sans">Save ₹12,000 / year</div>
                        </td>
                        <td className="p-3 md:p-5 w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none text-googleGreen font-semibold">
                          ₹3,000<span className="text-[10px]">/mo</span>
                          <div className="text-[9px] text-gray-450 font-medium font-sans">Save ₹24,000 / year</div>
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          GBP Setup
                        </td>
                        <td className="p-3 md:p-5 text-googleBlue font-bold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">✓</td>
                        <td className="p-3 md:p-5 text-googleBlue font-bold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">✓</td>
                        <td className="p-3 md:p-5 text-googleBlue font-bold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">✓</td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Keywords
                        </td>
                        <td className="p-3 md:p-5 text-gray-600 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Basic Config</td>
                        <td className="p-3 md:p-5 text-navy font-semibold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Up to 10 Keywords</td>
                        <td className="p-3 md:p-5 text-navy font-semibold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Up to 20 Keywords</td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Google Posts
                        </td>
                        <td className="p-3 md:p-5 text-gray-500 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">4 / month</td>
                        <td className="p-3 md:p-5 text-navy font-semibold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">8 / month</td>
                        <td className="p-3 md:p-5 text-navy font-semibold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Weekly posts</td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Product Updates
                        </td>
                        <td className="p-3 md:p-5 text-gray-500 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">2 / month</td>
                        <td className="p-3 md:p-5 text-navy font-semibold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">4 / month</td>
                        <td className="p-3 md:p-5 text-navy font-semibold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Weekly updates</td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Photo Uploads
                        </td>
                        <td className="p-3 md:p-5 text-gray-650 font-medium font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Unlimited</td>
                        <td className="p-3 md:p-5 text-navy font-bold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Unlimited</td>
                        <td className="p-3 md:p-5 text-gray-650 font-medium font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Unlimited</td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Reviews Mod.
                        </td>
                        <td className="p-3 md:p-5 text-googleBlue font-bold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">✓</td>
                        <td className="p-3 md:p-5 text-googleBlue font-bold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">✓</td>
                        <td className="p-3 md:p-5 text-navy font-semibold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Priority Response</td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Monthly Report
                        </td>
                        <td className="p-3 md:p-5 text-gray-500 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Standard Overview</td>
                        <td className="p-3 md:p-5 text-navy font-semibold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Enhanced Analytics</td>
                        <td className="p-3 md:p-5 text-navy font-semibold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Detailed & Audited</td>
                      </tr>

                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3 md:p-5 font-bold text-navy sticky left-0 bg-white z-20 border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.03)] w-[110px] min-w-[110px] max-w-[110px] md:w-1/4 md:min-w-0 md:max-w-none">
                          Support
                        </td>
                        <td className="p-3 md:p-5 text-gray-500 font-sans font-medium w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Standard Support</td>
                        <td className="p-3 md:p-5 text-navy font-semibold bg-blue-50/30 font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Priority Support</td>
                        <td className="p-3 md:p-5 text-navy font-bold font-sans w-[130px] min-w-[130px] max-w-[130px] md:w-1/4 md:min-w-0 md:max-w-none">Dedicated Manager</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesPricing;
