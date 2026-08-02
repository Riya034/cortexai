// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexdemo-d6cde.firebaseapp.com",
  projectId: "cortexdemo-d6cde",
  storageBucket: "cortexdemo-d6cde.firebasestorage.app",
  messagingSenderId: "37371901654",
  appId: "1:37371901654:web:eab5ee6ee382c3759dfb77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()