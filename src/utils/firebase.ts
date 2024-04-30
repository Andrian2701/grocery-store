import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgu0SXevoMyelrZgsK44TDFQPs3UoWVbg",
  authDomain: "grocery-store-e26c0.firebaseapp.com",
  projectId: "grocery-store-e26c0",
  storageBucket: "grocery-store-e26c0.appspot.com",
  messagingSenderId: "952650901925",
  appId: "1:952650901925:web:c4ada825692c3c8f67604c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
