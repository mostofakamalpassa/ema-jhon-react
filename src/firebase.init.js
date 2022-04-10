// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLCcjaR6aJgfCLK-fjFrmsVgtNIwAQyPE",
  authDomain: "ema-jhon-firebase-90a61.firebaseapp.com",
  projectId: "ema-jhon-firebase-90a61",
  storageBucket: "ema-jhon-firebase-90a61.appspot.com",
  messagingSenderId: "1048416862150",
  appId: "1:1048416862150:web:460d623966679e8f4abcc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;