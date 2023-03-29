// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxALTuprXoHFioqQtcj6joF727P6E2xGI",
  authDomain: "netflix-aut.firebaseapp.com",
  projectId: "netflix-aut",
  storageBucket: "netflix-aut.appspot.com",
  messagingSenderId: "303583205887",
  appId: "1:303583205887:web:da6847b02fe5e6c5e76fca",
  measurementId: "G-GVCFP572N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);