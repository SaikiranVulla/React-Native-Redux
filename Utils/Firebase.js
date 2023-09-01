// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEo6Pp5k-GI5u1PFwM5V-1YdC3OOyc_fc",
  authDomain: "testingredux-d677c.firebaseapp.com",
  projectId: "testingredux-d677c",
  storageBucket: "testingredux-d677c.appspot.com",
  messagingSenderId: "230979200355",
  appId: "1:230979200355:web:cebdea9c39aac0198d1f56",
  measurementId: "G-84W2JXSSDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);