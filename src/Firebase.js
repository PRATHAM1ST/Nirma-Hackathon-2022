// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
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

export {getOrg, getOrgDoc}