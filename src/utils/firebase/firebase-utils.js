import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWyZ2Oi6Fk5pN0jiTfFi_9CqZ76bHn2Us',
  authDomain: 'crown-clothing-db-d434d.firebaseapp.com',
  projectId: 'crown-clothing-db-d434d',
  storageBucket: 'crown-clothing-db-d434d.appspot.com',
  messagingSenderId: '9990233827',
  appId: '1:9990233827:web:81e222873bcbf6e126efd6',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log('userDocRef :', userDocRef);
};
