// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pinterest-clone-13445.firebaseapp.com",
  projectId: "pinterest-clone-13445",
  storageBucket: "pinterest-clone-13445.firebasestorage.app",
  messagingSenderId: "857178845885",
  appId: "1:857178845885:web:88e8f9f026971adfdafdd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;