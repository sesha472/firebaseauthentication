 
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBTvRLW7UgsfjnbjrvImrKJo6Ernz-w7gU",
    authDomain: "userauth-354d3.firebaseapp.com",
    projectId: "userauth-354d3",
    storageBucket: "userauth-354d3.appspot.com",
    messagingSenderId: "349973644106",
    appId: "1:349973644106:web:b1e698ac9172dab4daf7b3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore();
  const auth=firebase.auth();
export {auth};
export default db;

  