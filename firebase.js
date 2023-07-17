import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW9fACsgud_I4H_uvt3BzwDa95SMZpSok",
  authDomain: "whatsapp-clone-f2444.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-f2444-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-f2444",
  storageBucket: "whatsapp-clone-f2444.appspot.com",
  messagingSenderId: "789899947248",
  appId: "1:789899947248:web:4f79ae2a12e9cbab422635",
  measurementId: "G-DD9JCBC8BQ",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
