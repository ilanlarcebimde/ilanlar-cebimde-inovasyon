
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// GÜVENLİK UYARISI:
// Google Cloud Console'dan aldığınız YENİ API anahtarlarını aşağıya yapıştırın.
// Bu dosyanın GitHub'da herkese açık (public) paylaşılmamasına dikkat edin.
// En iyi pratik: Mümkünse .env dosyası kullanın veya Google Cloud Console'dan
// API anahtarınıza "HTTP Referrer" kısıtlaması getirerek sadece kendi domaininizde çalışmasını sağlayın.

const firebaseConfig = {
  apiKey: "BURAYA_YENI_API_KEY_GELECEK", // Önceki key ifşa olduğu için yenisini üretip yapıştırın
  authDomain: "ilanlar-cebimde-inovasyon.firebaseapp.com",
  projectId: "ilanlar-cebimde-inovasyon",
  storageBucket: "ilanlar-cebimde-inovasyon.firebasestorage.app",
  messagingSenderId: "668410591994",
  appId: "1:668410591994:web:c7cb904f8b0ff9341aa743"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Kimlik Doğrulama
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Veritabanı
export const db = getFirestore(app);

export default app;
