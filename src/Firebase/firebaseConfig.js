import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl6cIMUwLEkTSZ-5SzkgTCw5LoDvzgUWM",
  authDomain: "realmod-app-fa1bf.firebaseapp.com",
  projectId: "realmod-app-fa1bf",
  storageBucket: "realmod-app-fa1bf.appspot.com",
  messagingSenderId: "361220128982",
  appId: "1:361220128982:web:f2e581e4bfcbeaaa124977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const collectionFirebase = getFirestore()

export {app, google, facebook, collectionFirebase}