// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXJJFJoJ2sgUBQ0GJRy34STeHyHvFkHU",
  authDomain: "facebook-clone-akash.firebaseapp.com",
  projectId: "facebook-clone-akash",
  storageBucket: "facebook-clone-akash.appspot.com",
  messagingSenderId: "158972387720",
  appId: "1:158972387720:web:852efcb7ad9eb29db09a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider };
export default db;