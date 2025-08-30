
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQkRXTZM6CN1-52ORW3D5VrZp-4YIqalw",
  authDomain: "prepwise-65295.firebaseapp.com",
  projectId: "prepwise-65295",
  storageBucket: "prepwise-65295.firebasestorage.app",
  messagingSenderId: "51057662635",
  appId: "1:51057662635:web:b30ba4e8c53ac53ae1b5ee",
  measurementId: "G-FRGDYF4BYW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);