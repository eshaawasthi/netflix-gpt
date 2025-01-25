// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPq40cIlpYQNQJz6STBMLIHSDem7IyOJ4",
  authDomain: "netflixgpt-cb1dd.firebaseapp.com",
  projectId: "netflixgpt-cb1dd",
  storageBucket: "netflixgpt-cb1dd.firebasestorage.app",
  messagingSenderId: "628382372422",
  appId: "1:628382372422:web:e6d818a9d64228f5eef047",
  measurementId: "G-3RKDLN85SK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
