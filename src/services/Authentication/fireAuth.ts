import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebaseInit';

const auth = getAuth(firebaseApp);

export function signOutUser() {
    signOut(auth).then(() => {

        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

export function getUserID()  {
   return auth.currentUser?.uid;
}

export function checkAuthentication() {
    var isUserSigned: boolean = false;
    auth.onAuthStateChanged((user) => {
        if (user) {
            isUserSigned = true;
        } else {
            isUserSigned = false;
        }
    })
    return isUserSigned;
}