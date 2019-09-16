import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCo8AhyChTpZgLcz9qAGf6T2K5juEH-UaU',
  authDomain: 'crwn-db-50d48.firebaseapp.com',
  databaseURL: 'https://crwn-db-50d48.firebaseio.com',
  projectId: 'crwn-db-50d48',
  storageBucket: '',
  messagingSenderId: '439820639229',
  appId: '1:439820639229:web:c7c84d42f78e593d191794'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
