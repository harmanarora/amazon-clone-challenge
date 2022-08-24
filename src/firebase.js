import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseApp = 
firebase.initializeApp ({
 //config from firebase
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }