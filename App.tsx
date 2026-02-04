
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
import Dashboard from './components/Dashboard';
import { subscribeToAuthChanges } from './firebase'; // GÜNCELLENDİ
import { User } from 'firebase/auth';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // Basit routing state'i: 'landing' veya 'dashboard'
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  useEffect(() => {
    // Firebase Auth durumunu güvenli fonksiyon ile dinle
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // Kullanıcı çıkış yaparsa otomatik ana sayfaya at
      if (!currentUser) {
        setCurrentView('landing');
      } else {
        // Kullanıcı giriş yaptıysa dashboard'a yönlendirebiliriz veya landing'de kalabilir
        // Şimdilik landing'de kalsın, kullanıcı butona basınca gitsin
      }
    });

    // Component unmount olduğunda dinleyiciyi kaldır
    return () => unsubscribe();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Görünüm değiştirme fonksiyonu
  const handleNavigate = (view: 'landing' | 'dashboard') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-brand-bg text-brand-blue font-bold text-lg">Sistem Yükleniyor...</div>;
  }

  return (
    <div className="bg-brand-bg text-brand-text-primary font-sans flex flex-col min-h-screen">
      <Header 
        onLoginClick={handleOpenModal} 
        user={user} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      <main className="flex-grow">
        {user && currentView === 'dashboard' ? (
          <FadeInSection>
            <Dashboard user={user} />
          </FadeInSection>
        ) : (
          <>
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
          </>
        )}
      </main>

      <Footer />
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
