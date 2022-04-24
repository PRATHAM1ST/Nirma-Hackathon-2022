// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFfTPmkHG0ux3SwWG4x4vnet3tBzOfTn4",
  authDomain: "hackathon-41255.firebaseapp.com",
  projectId: "hackathon-41255",
  storageBucket: "hackathon-41255.appspot.com",
  messagingSenderId: "612276348576",
  appId: "1:612276348576:web:76591262058ec8f0384bc5",
  measurementId: "G-6WKEW6TDEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getOrg() {
    const all = collection(db, 'All');
    const allSnapshot = await getDocs(all);
    const allList = allSnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}});
    return allList;
}

async function getOrgDoc(id){
    const all = collection(db, 'All');
    const Snapshot = await getDoc(doc(all, id));
    return Snapshot.data();
}

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  }
});

async function createUser(email, password){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage
    // ..
  });
}

async function checkUser(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage
  });
}



export {getOrg, getOrgDoc, checkUser, createUser}