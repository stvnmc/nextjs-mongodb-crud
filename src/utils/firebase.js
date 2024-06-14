// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwbzBbB737FNOVf7GnzPX4YytL6r8dgI8",
  authDomain: "futbolbase-d75be.firebaseapp.com",
  projectId: "futbolbase-d75be",
  storageBucket: "futbolbase-d75be.appspot.com",
  messagingSenderId: "952578033669",
  appId: "1:952578033669:web:4b0eb4354923e78d73346c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dbAuth = getAuth(app);

export { db, dbAuth };
