import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// GÜVENLİK GÜNCELLEMESİ:
// Artık API anahtarları doğrudan kodun içinde yazmıyor.
// Vercel panelinde 'Environment Variables' kısmına eklediğiniz değerleri otomatik çeker.
// Bu sayede GitHub'da kodunuz görünse bile şifreleriniz görünmez.

const firebaseConfig = {
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY,
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Kimlik Doğrulama
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Veritabanı
export const db = getFirestore(app);

export default app;