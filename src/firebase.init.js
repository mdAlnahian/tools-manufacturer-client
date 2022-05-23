// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXKbmT8L2W8P0W3-3FmGvwwNy6vw1WSTQ",
  authDomain: "big-bros-limited.firebaseapp.com",
  projectId: "big-bros-limited",
  storageBucket: "big-bros-limited.appspot.com",
  messagingSenderId: "1041811293336",
  appId: "1:1041811293336:web:4d19acdba85566aa653ced",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
