// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvwDm5VEmfVroYspzTaGHMgt_CBd9Xkds",
  authDomain: "typescript-household.firebaseapp.com",
  projectId: "typescript-household",
  storageBucket: "typescript-household.appspot.com",
  messagingSenderId: "434002750632",
  appId: "1:434002750632:web:f4a8f0fe012570ae0c669d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
