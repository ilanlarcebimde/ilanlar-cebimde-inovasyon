
import React, { useState } from 'react';
import Logo from './icons/Logo';
import { User } from 'firebase/auth';
import { logout } from '../firebase'; // GÜNCELLENDİ

interface HeaderProps {
  onLoginClick: () => void;
  user: User | null;
  onNavigate: (view: 'landing' | 'dashboard') => void;
  currentView: 'landing' | 'dashboard';
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, user, onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout(); // Güvenli çıkış
      setIsMenuOpen(false);
      onNavigate('landing');
    } catch (error) {
      console.error("Çıkış yapılırken hata oluştu", error);
    }
  };

  const handleNavigation = (view: 'landing' | 'dashboard', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
  }

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer" 
            onClick={(e) => handleNavigation('landing', e)}
          >
            <Logo className="h-8 w-8 md:h-10 md:w-10 text-brand-blue" />
            <span className="text-lg md:text-xl font-bold text-brand-text-primary tracking-wider truncate max-w-[150px] sm:max-w-none">İlanlar Cebimde</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <nav className="hidden sm:flex space-x-4 md:space-x-6">
              <a 
                href="#" 
                onClick={(e) => handleNavigation('landing', e)}
                className={`text-sm md:text-base transition-colors duration-200 ${currentView === 'landing' ? 'text-brand-blue font-semibold' : 'text-brand-text-secondary hover:text-brand-blue'}`}
              >
                Ana Sayfa
              </a>
              {user && (
                 <a 
                    href="#panel" 
                    onClick={(e) => handleNavigation('dashboard', e)}
                    className={`text-sm md:text-base transition-colors duration-200 ${currentView === 'dashboard' ? 'text-brand-blue font-semibold' : 'text-brand-text-secondary hover:text-brand-blue'}`}
                 >
                    Panelim
                 </a>
              )}
            </nav>
            
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profil" className="h-9 w-9 rounded-full border border-gray-300" />
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                      {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="hidden md:block text-sm font-medium text-brand-text-primary">
                    {user.displayName || user.email?.split('@')[0]}
                  </span>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 animate-fadeIn">
                    <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100 truncate">
                      {user.email}
                    </div>
                    <button onClick={(e) => { setIsMenuOpen(false); handleNavigation('dashboard', e); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Kontrol Paneli
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-brand-blue hover:bg-blue-600 text-white font-semibold py-1.5 px-4 md:py-2 md:px-5 text-sm md:text-base rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
              >
                Giriş Yap
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
