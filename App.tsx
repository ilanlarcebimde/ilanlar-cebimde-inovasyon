
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemSupport from './components/SystemSupport';
import JobUniverse from './components/JobUniverse';
import Countries from './components/Countries';
import Infrastructure from './components/Infrastructure';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import FadeInSection from './components/FadeInSection';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-brand-bg text-brand-text-primary font-sans">
      <Header onLoginClick={handleOpenModal} />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <SystemSupport />
        </FadeInSection>
        <FadeInSection>
          <JobUniverse />
        </FadeInSection>
        <FadeInSection>
          <Countries />
        </FadeInSection>
        <FadeInSection>
          <Infrastructure />
        </FadeInSection>
        <FadeInSection>
          <HowItWorks />
        </FadeInSection>
      </main>
      <Footer />
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
