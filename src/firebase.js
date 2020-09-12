import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWCSF2eLMWE5wyyGUPlVfVu5QJjJ2JAXY",
  authDomain: "clone-4bdb5.firebaseapp.com",
  databaseURL: "https://clone-4bdb5.firebaseio.com",
  projectId: "clone-4bdb5",
  storageBucket: "clone-4bdb5.appspot.com",
  messagingSenderId: "925925155357",
  appId: "1:925925155357:web:f30249380ef303e7b15cf4",
  measurementId: "G-FLG23FPK8N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
