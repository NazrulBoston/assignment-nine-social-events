// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgly0v0Nbs52I1GXNfIhH0yQXzU1xI8Ew",
  authDomain: "assignment-nine-social-events.firebaseapp.com",
  projectId: "assignment-nine-social-events",
  storageBucket: "assignment-nine-social-events.appspot.com",
  messagingSenderId: "632791475863",
  appId: "1:632791475863:web:be5bc984cb86529afa6bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;