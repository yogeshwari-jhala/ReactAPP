import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyADNtvve5_xwDL67fqGfcfC_AljiixkLbw",
    authDomain: "reactspa-405a9.firebaseapp.com",
    databaseURL: "https://reactspa-405a9-default-rtdb.firebaseio.com",
    projectId: "reactspa-405a9",
    storageBucket: "reactspa-405a9.appspot.com",
    messagingSenderId: "192729219682",
    appId: "1:192729219682:web:8808fdbe030ce12d71073b",
    measurementId: "G-MSKV8VYE0J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;