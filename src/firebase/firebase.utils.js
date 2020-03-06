import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDyFAZZ_Lg91PSj5ptSRtuuZmTP0Xhs3oo",
  authDomain: "crwn-54b27.firebaseapp.com",
  databaseURL: "https://crwn-54b27.firebaseio.com",
  projectId: "crwn-54b27",
  storageBucket: "crwn-54b27.appspot.com",
  messagingSenderId: "507105434524",
  appId: "1:507105434524:web:b9e7dbc3bacbd47a1f4659",
  measurementId: "G-Q26H7WXDJQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
