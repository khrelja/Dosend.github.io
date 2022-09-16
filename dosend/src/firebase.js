
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAk_MMRgfgZ4zuf2Vs4QWKwtEQR-iPLBsk",
    authDomain: "dosend-b39ad.firebaseapp.com",
    projectId: "dosend-b39ad",
    storageBucket: "dosend-b39ad.appspot.com",
    messagingSenderId: "550142200800",
    appId: "1:550142200800:web:a793095fc537a0a9f4f985"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };