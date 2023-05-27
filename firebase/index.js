// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk8gOTBTgdlaJecz-Vqy-Un2MWZpZm-pE",
  authDomain: "sqft-expert-webapp.firebaseapp.com",
  projectId: "sqft-expert-webapp",
  storageBucket: "sqft-expert-webapp.appspot.com",
  messagingSenderId: "293365487987",
  appId: "1:293365487987:web:9ab66df3f4828d739a0d06",
  measurementId: "G-R8T88RFE3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export { app, firestore };
