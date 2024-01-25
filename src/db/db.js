import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrHRm9nxWKB5kXA2ML3JSZrJs851YxGgw",
  authDomain: "digitalspawn-bd445.firebaseapp.com",
  projectId: "digitalspawn-bd445",
  storageBucket: "digitalspawn-bd445.appspot.com",
  messagingSenderId: "127472631962",
  appId: "1:127472631962:web:a6e0e875ac184260d1df23"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db
