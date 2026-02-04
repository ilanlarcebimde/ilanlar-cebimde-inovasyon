
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ÖNEMLİ: Bu bilgileri Firebase Console -> Project Settings kısmından alıp değiştirmelisiniz.
const firebaseConfig = {
  apiKey: "AIzaSyBV9ccYeRwYQKwsTw04ah3Onx6AbUdCQbk",
  authDomain: "ilanlar-cebimde-inovasyon.firebaseapp.com",
  projectId: "ilanlar-cebimde-inovasyon",
  storageBucket: "ilanlar-cebimde-inovasyon.firebasestorage.app",
  messagingSenderId: "668410591994",
  appId: "1:668410591994:web:c7cb904f8b0ff9341aa743"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Kimlik Doğrulama (Login işlemleri için)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Veritabanı (Kullanıcı paneli, geçmiş ve kayıtlar için)
export const db = getFirestore(app);

export default app;
