import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxy37Wlr-EpNyYlh5oB7DvMm2HYq3WSFs",
  authDomain: "fly-me-17803.firebaseapp.com",
  databaseURL: "https://fly-me-17803-default-rtdb.firebaseio.com",
  projectId: "fly-me-17803",
  storageBucket: "fly-me-17803.appspot.com",
  messagingSenderId: "567243549989",
  appId: "1:567243549989:web:c85da01ea5c28d3157becc",
  measurementId: "G-PSDQGHGCE6"
};

// Initialize Firebase

const db = firebase.initializeApp(firebaseConfig).firestore();

export {
  db
};