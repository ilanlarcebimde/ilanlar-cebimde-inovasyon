import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Vite env'leri DOĞRUDAN oku (dinamik key yok)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// ✅ Fail-fast: eksik env varsa DEMO’ya düşmeden önce konsolda net gör
const missing = Object.entries(firebaseConfig)
  .filter(([_, v]) => !v || v === "undefined")
  .map(([k]) => k);

if (missing.length) {
  console.warn("⚠️ Firebase config eksik:", missing.join(", "));
  console.warn("Vercel Env + redeploy kontrol et.");
}

const rawApiKey = firebaseConfig.apiKey;
const apiKey = (rawApiKey && rawApiKey !== "undefined") ? rawApiKey : undefined;

let app: any;
let auth: any;
let db: any;
let googleProvider: any;

// DEMO MODU İÇİN SANAL KULLANICI
const MOCK_USER: any = {
  uid: "mock-user-123",
  displayName: "Demo Kullanıcı",
  email: "demo@ornek.com",
  photoURL: null
};

// Mock auth state
let mockCurrentUser: User | null = null;
const mockListeners: Array<(user: User | null) => void> = [];

if (apiKey) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
  } catch (error) {
    console.error("Firebase başlatma hatası:", error);
    auth = null;
  }
} else {
  console.warn("⚠️ Firebase API Key bulunamadı veya 'undefined'. DEMO/MOCK mod.");
}

// --- Auth Wrappers ---

export const loginWithGoogle = async () => {
  if (auth) {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error("Google ile giriş hatası:", error);
      throw error;
    }
  } else {
    // Mock Login
    console.log("Mock Login Başarılı");
    mockCurrentUser = MOCK_USER;
    mockListeners.forEach(listener => listener(mockCurrentUser));
    return MOCK_USER;
  }
};

export const logout = async () => {
  if (auth) {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Çıkış hatası:", error);
      throw error;
    }
  } else {
    // Mock Logout
    console.log("Mock Logout Başarılı");
    mockCurrentUser = null;
    mockListeners.forEach(listener => listener(null));
  }
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  if (auth) {
    return onAuthStateChanged(auth, callback);
  } else {
    // Mock Subscription
    mockListeners.push(callback);
    // İlk durumu bildir
    callback(mockCurrentUser);
    // Unsubscribe fonksiyonu döndür
    return () => {
      const index = mockListeners.indexOf(callback);
      if (index > -1) {
        mockListeners.splice(index, 1);
      }
    };
  }
};

export { auth, db };