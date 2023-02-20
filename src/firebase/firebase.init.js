// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqTwKrPVL0DgBEdSEmIMyy22ElrGWihek",
  authDomain: "email-authentication-94d4f.firebaseapp.com",
  projectId: "email-authentication-94d4f",
  storageBucket: "email-authentication-94d4f.appspot.com",
  messagingSenderId: "50018656427",
  appId: "1:50018656427:web:64ae3baccb26ee82b257ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;