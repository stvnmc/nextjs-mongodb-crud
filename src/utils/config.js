import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5WqDM-Qfz1mmqxudlosb_gxkt0YVIsiQ",
  authDomain: "apphermanos.firebaseapp.com",
  projectId: "apphermanos",
  storageBucket: "apphermanos.appspot.com",
  messagingSenderId: "304054329525",
  appId: "1:304054329525:web:c5b517f83f11bec6a11efc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const dbAuth = getAuth(app);
