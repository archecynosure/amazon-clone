import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDhv94fDS1tGOfLHs3Ey-F282fQsWv_Ye4",
    authDomain: "clone-7e778.firebaseapp.com",
    projectId: "clone-7e778",
    storageBucket: "clone-7e778.appspot.com",
    messagingSenderId: "296079463676",
    appId: "1:296079463676:web:13f34ea348023f8c97f379",
    measurementId: "G-MGK94ZTF37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };