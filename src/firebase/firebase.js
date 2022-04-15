// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0mzEGebltOCBII8T9gjoal_X1uXQ74D0",
  authDomain: "ecommerce-akila.firebaseapp.com",
  projectId: "ecommerce-akila",
  storageBucket: "ecommerce-akila.appspot.com",
  messagingSenderId: "303335005299",
  appId: "1:303335005299:web:9680cd5ce18e31c7819e06",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
