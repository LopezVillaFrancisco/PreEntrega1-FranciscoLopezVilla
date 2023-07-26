import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA98yObH2wGYCk8tNQBlbHvvkM9bLR-B24",
  authDomain: "proyecto-final-23cc1.firebaseapp.com",
  projectId: "proyecto-final-23cc1",
  storageBucket: "proyecto-final-23cc1.appspot.com",
  messagingSenderId: "809601058956",
  appId: "1:809601058956:web:59e77f28dbf44488d4d3a9",
  measurementId: "G-QHRKKER1DX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
