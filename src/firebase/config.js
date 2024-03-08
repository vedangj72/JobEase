import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDfFlg3OfBzKDTPW11uE6IvWj7f-5aVtN4",
    authDomain: "abhi-6eaf6.firebaseapp.com",
    projectId: "abhi-6eaf6",
    storageBucket: "abhi-6eaf6.appspot.com",
    messagingSenderId: "568793694710",
    appId: "1:568793694710:web:be0b9b16f973585ff807d7",
    measurementId: "G-THXVNE5R5L"
};


//init firebase
const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth();
const projectFirestore = getFirestore(app)

export { auth, projectFirestore }