import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlz2Xm93DhzOWmHW_-B-yFcJGo60pKnSo",
    authDomain: "virtual-classroom-8a746.firebaseapp.com",
    projectId: "virtual-classroom-8a746",
    storageBucket: "virtual-classroom-8a746.appspot.com",
    messagingSenderId: "526722323208",
    appId: "1:526722323208:web:883e22289223698dcbd2bd",
    measurementId: "G-HV3HY9SX4K"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    console.log(response.user);
    const user = response.user;
    console.log(`User ID - ${user.uid}`);
    const querySnapshot = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (querySnapshot.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        enrolledClassrooms: [],
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };