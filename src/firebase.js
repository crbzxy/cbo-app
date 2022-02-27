// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCffPtGpSC_Pzi6KSVxc8-nN2yAczU4gdY",
  authDomain: "react-auth-cbo-app.firebaseapp.com",
  projectId: "react-auth-cbo-app",
  storageBucket: "react-auth-cbo-app.appspot.com",
  messagingSenderId: "628970960918",
  appId: "1:628970960918:web:8f5a03a10df3f6e4949d37",
  measurementId: "G-S70J0CNLVV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth(app)