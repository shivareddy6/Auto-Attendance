import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA2n28T5ut29awb0V9P2TnDbiQWjoZ-1OE",
  authDomain: "auto-attendance-5de43.firebaseapp.com",
  projectId: "auto-attendance-5de43",
  storageBucket: "auto-attendance-5de43.appspot.com",
  messagingSenderId: "375539971560",
  appId: "1:375539971560:web:c1e6bcfa8dca3209b2605d",
  measurementId: "G-X9XC4ZZRJQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
