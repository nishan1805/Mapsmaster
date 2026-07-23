import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IssueSelector from './components/IssueSelector';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<string | null>(null);

  const handleSelectIssue = (serviceId: string) => {
    if (serviceId === 'others') {
      setSelectedService('');
      setActiveModalService(null);
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const nameInput = document.getElementById('name') || document.querySelector('#contact input');
          if (nameInput) {
            (nameInput as HTMLElement).focus();
          }
        }, 400);
      }
    } else {
      setActiveModalService(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. "What is your issue?" Section (NEW) */}
        <IssueSelector onSelectIssue={handleSelectIssue} />

        {/* 3. Trust Statistics Section (500+, 300+, etc.) */}
        <TrustStrip />

        {/* 4. Services Section (Redesigned 5-card grid + modals) */}
        <Services 
          onSelectPackage={setSelectedService} 
          openModalServiceId={activeModalService}
          onCloseModalService={() => setActiveModalService(null)}
        />

        {/* 5. Clients Section */}
        <Clients />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Contact Section */}
        <Contact selectedService={selectedService} onSelectedServiceChange={setSelectedService} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. WhatsApp Floating Button */}
      <WhatsAppButton isCompareOpen={!!activeModalService} />
    </div>
  );
};

export default App;
