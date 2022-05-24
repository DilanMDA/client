// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe45Fxt1sqULtOkTIih7f9JS6R23vhZV4",
  authDomain: "ecommerce-forshop.firebaseapp.com",
  databaseURL: "https://ecommerce-forshop-default-rtdb.firebaseio.com",
  projectId: "ecommerce-forshop",
  storageBucket: "ecommerce-forshop.appspot.com",
  messagingSenderId: "465889158037",
  appId: "1:465889158037:web:32a0c5a618050f28680c9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth( app );

export const googleAuthProvider = new GoogleAuthProvider();
