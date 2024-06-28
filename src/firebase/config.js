import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urban-nest-b9.firebaseapp.com",
  projectId: "urban-nest-b9",
  storageBucket: "urban-nest-b9.appspot.com",
  messagingSenderId: "211738010524",
  appId: "1:211738010524:web:bf5808a76e1114ec4a5e59",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
