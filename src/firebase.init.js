// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2xbr2rK_Xixb7K74wLRQxV1HjYD1tcrk",
  authDomain: "go-techdoctor.firebaseapp.com",
  projectId: "go-techdoctor",
  storageBucket: "go-techdoctor.appspot.com",
  messagingSenderId: "233984827309",
  appId: "1:233984827309:web:1c8fe8e8887cac1fb38b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;