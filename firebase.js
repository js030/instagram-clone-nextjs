import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCoO0T4Ga0RlCkNIRLWyI2mWRppMmfokQ",
  authDomain: "insta-clone-f6b53.firebaseapp.com",
  projectId: "insta-clone-f6b53",
  storageBucket: "insta-clone-f6b53.appspot.com",
  messagingSenderId: "754997510502",
  appId: "1:754997510502:web:09ab0d5093f5a3a12248a7",
  measurementId: "G-P1LMN0NB7V",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };
