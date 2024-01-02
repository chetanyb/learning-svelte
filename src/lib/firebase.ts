import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARsVGzNdFoNqx7hkC6Ldri8NeSEyI07xE",
  authDomain: "svelte-course-17e03.firebaseapp.com",
  projectId: "svelte-course-17e03",
  storageBucket: "svelte-course-17e03.appspot.com",
  messagingSenderId: "195311295545",
  appId: "1:195311295545:web:17c48f867771550836c1e8",
  measurementId: "G-6K003R5S90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage  = getStorage();
