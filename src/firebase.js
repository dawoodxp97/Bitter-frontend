import firebase from "firebase";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBmOWwlCb8afMbsBwQD2xnuNDSEUumZ7_g",
  authDomain: "bitter-app-e4cab.firebaseapp.com",
  projectId: "bitter-app-e4cab",
  storageBucket: "bitter-app-e4cab.appspot.com",
  messagingSenderId: "957310994414",
  appId: "1:957310994414:web:45cf193a588fbc2bbff0ff",
  measurementId: "G-5Q143CS915",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
