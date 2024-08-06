// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW65mhpGdxTCBIcCJ_sAdqxRFWVK7KQ34",
  authDomain: "crave-wave-47d02.firebaseapp.com",
  projectId: "crave-wave-47d02",
  storageBucket: "crave-wave-47d02.appspot.com",
  messagingSenderId: "544275788457",
  appId: "1:544275788457:web:2c72e47d4a7cb4dd06afb8",
  measurementId: "G-0ET2VJSBBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);