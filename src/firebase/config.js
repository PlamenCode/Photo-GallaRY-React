import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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
