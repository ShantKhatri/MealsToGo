import firebase from "firebase/compat/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbOEmseK2tSW2hQdI3nOnmWfet8qTONsw",
  authDomain: "mealstogo-b9402.firebaseapp.com",
  projectId: "mealstogo-b9402",
  storageBucket: "mealstogo-b9402.appspot.com",
  messagingSenderId: "902892159261",
  appId: "1:902892159261:web:dc774ee64cf31f959461f4",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password, repeatedPassword) =>
  createUserWithEmailAndPassword(auth, email, password);

// export const userChanged = (user) => onAuthStateChanged(auth, user);
