// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgmn-msDkUxpjv-x7FHhuowRHyiV35Wmw",
  authDomain: "facebook-ui-38ced.firebaseapp.com",
  projectId: "facebook-ui-38ced",
  storageBucket: "facebook-ui-38ced.appspot.com",
  messagingSenderId: "674441074032",
  appId: "1:674441074032:web:6785a03045f85f3b87abb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider };
export default db;