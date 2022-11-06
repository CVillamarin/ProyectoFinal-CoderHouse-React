
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC7A7cseRWEmcb8fVXag8OMNoMC0LmRrto",
  authDomain: "proyecto-final-a9299.firebaseapp.com",
  projectId: "proyecto-final-a9299",
  storageBucket: "proyecto-final-a9299.appspot.com",
  messagingSenderId: "961879750740",
  appId: "1:961879750740:web:d7d1b6a0b4f798a89815c1"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);