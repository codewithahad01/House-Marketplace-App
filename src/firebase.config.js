import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
    


const firebaseConfig = {
    apiKey: "AIzaSyA_881bmb3QMueYd8BUPl6vxSHeKkAuzgI",
    authDomain: "house-marketplace-app-fa67e.firebaseapp.com",
    projectId: "house-marketplace-app-fa67e",
    storageBucket: "house-marketplace-app-fa67e.appspot.com",
    messagingSenderId: "952964036513",
    appId: "1:952964036513:web:aa163935bca26cd0063de0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();