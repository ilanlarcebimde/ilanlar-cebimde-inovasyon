
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Vercel veya Local ortamda değişkenleri güvenli bir şekilde al
const getEnv = (key: string) => {
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    // @ts-ignore
    return import.meta.env[key];
  }
  return undefined;
};

const rawApiKey = getEnv('VITE_FIREBASE_API_KEY');
// Bazen env variable string olarak "undefined" gelebilir, bunu engelliyoruz.
const apiKey = (rawApiKey && rawApiKey !== "undefined") ? rawApiKey : undefined;

let app: any;
let auth: any;
let db: any;
let googleProvider: any;

// DEMO MODU İÇİN SANAL KULLANICI
// API Key girilmemişse veya hatalıysa sistem bu kullanıcı ile çalışır.
const MOCK_USER: any = {
  uid: "demo-usta-123",
  displayName: "Demo Ustası",
  email: "usta@ilanlarcebimde.com",
  photoURL: null,
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: "",
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => "mock-token",
  getIdTokenResult: async () => ({ token: "mock-token", claims: {}, authTime: "", issuedAtTime: "", expirationTime: "", signInProvider: "google", signInSecondFactor: null, blockingFunction: undefined }),
  reload: async () => {},
  toJSON: () => ({})
};

if (apiKey) {
  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: getEnv('VITE_FIREBASE_AUTH_DOMAIN'),
    projectId: getEnv('VITE_FIREBASE_PROJECT_ID'),
    storageBucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
    appId: getEnv('VITE_FIREBASE_APP_ID')
  };

  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
  } catch (error) {
    console.error("Firebase başlatma hatası (Muhtemelen geçersiz API Key):", error);
    // Hata durumunda auth'u null yap ki wrapper fonksiyonlar demo moduna geçsin
    auth = null;
  }
} else {
  console.warn("⚠️ Firebase API Key bulunamadı veya 'undefined' olarak okundu. Uygulama DEMO/MOCK modunda çalışıyor.");
}

// --- GÜVENLİ SARMALAYICI FONKSİYONLAR (WRAPPERS) ---

export const loginWithGoogle = async () => {
  if (auth) {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error("Firebase Login Hatası:", error);
      // Eğer API key hatası alırsak demo moduna düş
      if (error.code === 'auth/api-key-not-valid.-please-pass-a-valid-api-key.' || error.code === 'auth/invalid-api-key') {
        console.warn("API Key geçersiz olduğu için Demo Moduna geçiliyor.");
        await new Promise(resolve => setTimeout(resolve, 800));
        if (mockAuthSubscriber) mockAuthSubscriber(MOCK_USER);
        return { user: MOCK_USER };
      }
      throw error;
    }
  } else {
    // API Key yoksa sanal giriş yap
    console.log("Demo Modu: Sanal giriş yapılıyor...");
    await new Promise(resolve => setTimeout(resolve, 800)); // Gerçekçi gecikme
    if (mockAuthSubscriber) mockAuthSubscriber(MOCK_USER);
    return { user: MOCK_USER };
  }
};

export const logout = async () => {
  if (auth) {
    return signOut(auth);
  } else {
    console.log("Demo Modu: Çıkış yapıldı.");
    if (mockAuthSubscriber) mockAuthSubscriber(null);
  }
};

// Auth durumu dinleyicisi için değişken
let mockAuthSubscriber: ((user: User | null) => void) | null = null;

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  if (auth) {
    // onAuthStateChanged bazen hemen tetiklenmez, bu yüzden try-catch bloğuna gerek yok ama
    // eğer auth nesnesi bozuksa burada patlayabilir.
    try {
        return onAuthStateChanged(auth, callback);
    } catch (e) {
        console.error("Auth dinleyici hatası:", e);
        mockAuthSubscriber = callback;
        callback(null);
        return () => { mockAuthSubscriber = null; };
    }
  } else {
    mockAuthSubscriber = callback;
    // Başlangıçta giriş yapılmamış varsay
    callback(null);
    return () => { mockAuthSubscriber = null; };
  }
};

export { auth, db, googleProvider };
export default app;
