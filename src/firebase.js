// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqV0XVANQV-0IBUU5D2ALYVFN5aq4Tp_E",
  authDomain: "auth-e5694.firebaseapp.com",
  projectId: "auth-e5694",
  storageBucket: "auth-e5694.appspot.com",
  messagingSenderId: "877182734664",
  appId: "1:877182734664:web:3297d70c2ec0da9dffe37d",
  measurementId: "G-XBK5L2QC7K"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);