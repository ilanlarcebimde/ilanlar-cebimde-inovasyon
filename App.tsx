
import React, { useState, useEffect } from 'react';
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
import { auth } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase Auth durumunu dinle
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Component unmount olduğunda dinleyiciyi kaldır
    return () => unsubscribe();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-brand-bg text-brand-blue">Yükleniyor...</div>;
  }

  return (
    <div className="bg-brand-bg text-brand-text-primary font-sans">
      <Header onLoginClick={handleOpenModal} user={user} />
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
