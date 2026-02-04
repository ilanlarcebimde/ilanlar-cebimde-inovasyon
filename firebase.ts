
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ÖNEMLİ: Bu bilgileri Firebase Console -> Project Settings kısmından alıp değiştirmelisiniz.
const firebaseConfig = {
  apiKey: "BURAYA_API_KEY_GELECEK",
  authDomain: "BURAYA_AUTH_DOMAIN_GELECEK",
  projectId: "BURAYA_PROJECT_ID_GELECEK",
  storageBucket: "BURAYA_STORAGE_BUCKET_GELECEK",
  messagingSenderId: "BURAYA_SENDER_ID_GELECEK",
  appId: "BURAYA_APP_ID_GELECEK"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Kimlik Doğrulama (Login işlemleri için)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Veritabanı (Kullanıcı paneli, geçmiş ve kayıtlar için)
export const db = getFirestore(app);

export default app;
