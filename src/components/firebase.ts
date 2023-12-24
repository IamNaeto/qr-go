import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

// using type assertion assuming the firebase type definitions are incorrect.
const firebaseWithAssertion = firebase as any;

if (!firebaseWithAssertion.apps.length) {
  firebaseWithAssertion.initializeApp(firebaseConfig);
}

export default firebaseWithAssertion;
