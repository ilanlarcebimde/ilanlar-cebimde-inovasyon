
import React from 'react';
import Logo from './icons/Logo';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Logo className="h-10 w-10 text-brand-blue" />
            <span className="text-xl font-bold text-brand-text-primary tracking-wider">İlanlar Cebimde</span>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-brand-text-secondary hover:text-brand-blue transition-colors duration-200">Ana Sayfa</a>
            </nav>
            <button
              onClick={onLoginClick}
              className="bg-brand-blue hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
