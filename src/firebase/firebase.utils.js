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

  export const createUserProfileDocument = async (userAuth, additonalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additonalData
              })
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
        
        return userRef;
      }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
