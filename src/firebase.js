import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB5m_pdKC05hTLjC8-Jfs9VbfVL825N9Vc",
    authDomain: "clone-challenge-d4cd9.firebaseapp.com",
    projectId: "clone-challenge-d4cd9",
    storageBucket: "clone-challenge-d4cd9.appspot.com",
    messagingSenderId: "895845027758",
    appId: "1:895845027758:web:d2fd538795214e8ad0423f",
    measurementId: "G-CQG8BGSEHC"
  });

  const db = firebase.firestore();

  export { db }