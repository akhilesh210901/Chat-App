
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBHgUwF61RzOeOI8zz3xoNuTJAmFyyzFI4",
    authDomain: "chat-app-ef7b3.firebaseapp.com",
    projectId: "chat-app-ef7b3",
    storageBucket: "chat-app-ef7b3.appspot.com",
    messagingSenderId: "262191391286",
    appId: "1:262191391286:web:54225da65bf2b60d212e97",
  };
  
let app;
  if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
  }
  else{
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth};