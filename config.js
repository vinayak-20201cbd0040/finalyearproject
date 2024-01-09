import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyC9iZtG9Wk2WYVXNnEJmlcq5INk_o64kno",
    authDomain: "test2-d317b.firebaseapp.com",
    projectId: "test2-d317b",
    storageBucket: "test2-d317b.appspot.com",
    messagingSenderId: "201385508175",
    appId: "1:201385508175:web:2c31dfa1f5ed105e96993a",
    measurementId: "G-XVMR3LP708"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }