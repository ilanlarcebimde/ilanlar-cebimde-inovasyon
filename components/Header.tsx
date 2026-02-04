
import React from 'react';
import Logo from './icons/Logo';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Logo className="h-8 w-8 md:h-10 md:w-10 text-brand-blue" />
            <span className="text-lg md:text-xl font-bold text-brand-text-primary tracking-wider truncate max-w-[150px] sm:max-w-none">İlanlar Cebimde</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <nav className="hidden sm:flex space-x-4 md:space-x-6">
              <a href="#" className="text-sm md:text-base text-brand-text-secondary hover:text-brand-blue transition-colors duration-200">Ana Sayfa</a>
            </nav>
            <button
              onClick={onLoginClick}
              className="bg-brand-blue hover:bg-blue-600 text-white font-semibold py-1.5 px-4 md:py-2 md:px-5 text-sm md:text-base rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
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