import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQdai1CDFpju6Eh-rTu16zouh1MwjrAR8",
  authDomain: "proyecto-final-30032.firebaseapp.com",
  projectId: "proyecto-final-30032",
  storageBucket: "proyecto-final-30032.appspot.com",
  messagingSenderId: "227569716069",
  appId: "1:227569716069:web:3e8f5f8a3cc24645d82f8c",
  measurementId: "G-T3BJQH7BEM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)