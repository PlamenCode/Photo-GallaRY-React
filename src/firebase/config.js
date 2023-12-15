import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVcp8ZlX7Jv9axijHYaiTgKxJa9Infej0",
  authDomain: "picture-gallery-react.firebaseapp.com",
  projectId: "picture-gallery-react",
  storageBucket: "picture-gallery-react.appspot.com",
  messagingSenderId: "218754818911",
  appId: "1:218754818911:web:2a7d7247c43dcc628a8cea"
};

firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
