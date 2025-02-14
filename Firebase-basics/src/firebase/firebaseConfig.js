// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7I3R5UJn1mAWpgmh5gkFHlRE-jKBKZ8A",
  authDomain: "lullu-pullu.firebaseapp.com",
  projectId: "lullu-pullu",
  storageBucket: "lullu-pullu.firebasestorage.app",
  messagingSenderId: "734486930885",
  appId: "1:734486930885:web:51943e0885546e810dd7ac"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);