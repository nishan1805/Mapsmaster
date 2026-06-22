import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services onSelectPackage={setSelectedService} onCompareModalToggle={setIsCompareOpen} />
        <Clients />
        <Testimonials />
        <Contact selectedService={selectedService} onSelectedServiceChange={setSelectedService} />
      </main>
      <Footer />
      <WhatsAppButton isCompareOpen={isCompareOpen} />
    </div>
  );
};

export default App;
