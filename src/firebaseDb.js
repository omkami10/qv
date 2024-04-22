import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRv1baKWivEz8JnKUZtqGv4ZmraixQOFw",
  authDomain: "quasartodolist-74464.firebaseapp.com",
  projectId: "quasartodolist-74464",
  storageBucket: "quasartodolist-74464.appspot.com",
  messagingSenderId: "217277364654",
  appId: "1:217277364654:web:a81e0ae1b9a9492207b03f"
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
