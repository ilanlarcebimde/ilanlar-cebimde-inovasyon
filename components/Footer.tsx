
import React from 'react';
import Logo from './icons/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="h-8 w-8 text-brand-blue" />
              <span className="text-xl font-bold text-white">İlanlar Cebimde</span>
            </div>
            <p className="text-sm">Ustalar için tasarlanmış, araştıran, analiz eden ve süreci hızlandıran iş bulma sistemi.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">KVKK</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Çerez Politikası</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Ana Sayfa</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Giriş Yap</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} İlanlar Cebimde. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
