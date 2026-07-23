import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface IssueSelectorProps {
  onSelectIssue: (serviceId: string) => void;
}

const ISSUE_OPTIONS = [
  { id: 'gmb-opt', label: 'Google Business Profile Optimization' },
  { id: 'new-profile', label: 'New Profile Creation' },
  { id: 'call-button', label: 'Call Button Activation' },
  { id: 'recovery', label: 'Suspended Account Recovery' },
  { id: 'verification', label: 'Profile Verification' },
  { id: 'others', label: 'Others' },
];

const IssueSelector: React.FC<IssueSelectorProps> = ({ onSelectIssue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: string, label: string) => {
    setSelectedLabel(label);
    setIsOpen(false);
    onSelectIssue(id);
    setTimeout(() => {
      setSelectedLabel('');
    }, 500);
  };

  return (
    <section className="py-16 md:py-24 bg-navy text-white relative overflow-visible z-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-30 text-center">
        
        {/* Header Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 text-white mb-6 border border-white/10 shadow-inner">
          <HelpCircle className="w-7 h-7 md:w-8 md:h-8" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8">
          What is your issue?
        </h2>

        {/* Dropdown Container */}
        <div className="max-w-xl mx-auto relative" ref={dropdownRef}>
          {/* Custom Select Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white text-navy font-bold text-base md:text-lg rounded-2xl p-4 md:p-5 pr-12 transition-all outline-none cursor-pointer appearance-none shadow-xl hover:bg-gray-50 focus:ring-4 focus:ring-googleBlue/30 border border-white/20 text-left relative flex items-center justify-between"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            {selectedLabel ? (
              <span className="text-navy font-bold">{selectedLabel}</span>
            ) : (
              <span className="text-gray-400 font-normal">Select your issue</span>
            )}

            <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none text-navy">
              <ChevronDown className={`w-6 h-6 stroke-[2.5] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Dropdown Options List - ALWAYS opens below */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 py-2 text-left"
                role="listbox"
              >
                {ISSUE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect(opt.id, opt.label)}
                    className="w-full text-left px-5 py-3.5 text-navy font-semibold text-base md:text-lg hover:bg-blue-50 hover:text-googleBlue transition-colors flex items-center justify-between cursor-pointer border-b last:border-b-0 border-gray-100"
                    role="option"
                  >
                    <span>{opt.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default IssueSelector;
