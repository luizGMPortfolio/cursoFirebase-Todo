// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKb2osm3BJd59zOgoBFe8bOw3WCtlc7RE",
  authDomain: "todo-ad2df.firebaseapp.com",
  projectId: "todo-ad2df",
  storageBucket: "todo-ad2df.appspot.com",
  messagingSenderId: "1085189428621",
  appId: "1:1085189428621:web:efbff7de1e121bb4ca19c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};