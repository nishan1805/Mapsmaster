
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 sm:py-3' : 'bg-white/95 py-3 sm:py-5'}`}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/mapmaster_logo1.png"
            alt="MapsMaster Logo"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
          />
          <span className="text-navy font-bold text-lg sm:text-xl tracking-tight">MapsMaster <span className="text-googleRed">Raipur</span></span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-navy font-medium hover:text-googleBlue transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="hidden sm:block bg-navy text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-googleBlue transition-all transform hover:scale-105 text-xs sm:text-sm"
          >
            <span className="hidden md:inline">Book Consultation</span>
            <span className="md:hidden">Book Call</span>
          </a>
          <button
            className="lg:hidden text-navy p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleMobileMenuClick(link.href)}
              className="block text-navy font-medium hover:text-googleBlue transition-colors py-2 text-base"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleMobileMenuClick('#contact')}
            className="block bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-googleBlue transition-all text-center mt-4"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
