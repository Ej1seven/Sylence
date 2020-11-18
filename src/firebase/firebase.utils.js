import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCn_ljhhxLkRkAHo9aNW9bgInYJ5awERo",
    authDomain: "sylence-db.firebaseapp.com",
    databaseURL: "https://sylence-db.firebaseio.com",
    projectId: "sylence-db",
    storageBucket: "sylence-db.appspot.com",
    messagingSenderId: "929357653342",
    appId: "1:929357653342:web:7b5e09bf694068de6e5bcf",
    measurementId: "G-GP5VLF9WWT"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
