
import React, { useState } from 'react';
import GoogleLogo from './icons/GoogleLogo';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      await signInWithPopup(auth, googleProvider);
      // Başarılı girişten sonra modalı kapat
      onClose();
    } catch (err: any) {
      console.error("Giriş hatası:", err);
      setError("Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md m-4 relative transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center text-brand-text-primary mb-6">Giriş Yap</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin}
            className="w-full bg-white text-brand-text-primary ring-1 ring-gray-300 font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <GoogleLogo className="h-6 w-6" />
            <span>Google ile Giriş Yap</span>
          </button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">veya</span>
            </div>
          </div>
          
          <button className="w-full bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 opacity-50 cursor-not-allowed" disabled>
            E-posta ile Giriş Yap (Yakında)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
