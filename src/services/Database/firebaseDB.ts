import { getFirestore } from "firebase/firestore";
import { firebaseApp } from '../firebaseInit';
import { doc, setDoc, addDoc, getDoc } from "firebase/firestore"; 

const getDatabase = getFirestore(firebaseApp);



