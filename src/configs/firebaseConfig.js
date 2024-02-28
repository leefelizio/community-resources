// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3f1Er5IbhMLar_w5doXBdv9KIYw9VzPs",
  authDomain: "reacticle-e7905.firebaseapp.com",
  databaseURL:
    "https://reacticle-e7905-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reacticle-e7905",
  storageBucket: "reacticle-e7905.appspot.com",
  messagingSenderId: "425490768724",
  appId: "1:425490768724:web:373cb359d918cf683a1ec1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
