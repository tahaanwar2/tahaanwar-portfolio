
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyEsEif8kO11SmyJyhG7fzJfsf58HawiY",
    authDomain: "portfolio-web-b3922.firebaseapp.com",
    projectId: "portfolio-web-b3922",
    storageBucket: "portfolio-web-b3922.appspot.com",
    messagingSenderId: "1019286438513",
    appId: "1:1019286438513:web:5617982d0dbf6449a791d0",
    measurementId: "G-BXK5Y5SXNM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };


const db = getFirestore(app);

export { db };

