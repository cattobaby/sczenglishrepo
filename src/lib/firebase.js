import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBovzI907wJdYA-iQWcuOevpF12fUWcpPQ",
  authDomain: "santa-cruz-english.firebaseapp.com",
  projectId: "santa-cruz-english",
  storageBucket: "santa-cruz-english.appspot.com",
  messagingSenderId: "254059794715",
  appId: "1:254059794715:web:242b3d8ee5a1ed3ca203be",
  measurementId: "G-G9RGSDJFR6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
