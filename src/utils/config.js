import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZCaMBe5EflrgDoODgTDWmGdLn1kQ51FY",
  authDomain: "betspage-61531.firebaseapp.com",
  projectId: "betspage-61531",
  storageBucket: "betspage-61531.appspot.com",
  messagingSenderId: "933481404079",
  appId: "1:933481404079:web:38bcd2ce13cc8ef96b265a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const dbAuth = getAuth(app);
