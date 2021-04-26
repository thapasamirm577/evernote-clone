import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAE__0uFE3eSDOn-9Y5PunnPEylQd0WGI8",
    authDomain: "evernote-clone-76ff7.firebaseapp.com",
    projectId: "evernote-clone-76ff7",
    storageBucket: "evernote-clone-76ff7.appspot.com",
    messagingSenderId: "752693465865",
    appId: "1:752693465865:web:d6878b51e0e4f1da4279d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;