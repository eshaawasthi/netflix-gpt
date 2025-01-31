// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf1eior5iW-cIVeFuu8BePkh4Gq1M-9Uo",
  authDomain: "netflixgpt-3583a.firebaseapp.com",
  projectId: "netflixgpt-3583a",
  storageBucket: "netflixgpt-3583a.firebasestorage.app",
  messagingSenderId: "590185151462",
  appId: "1:590185151462:web:583c0a75693819af543427",
  measurementId: "G-WDJP7GZ3RY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
