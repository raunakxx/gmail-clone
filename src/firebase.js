import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPEfno16S807u5Tv_vAd-OT6X9x55kSpA",
  authDomain: "clone-51310.firebaseapp.com",
  projectId: "clone-51310",
  storageBucket: "clone-51310.appspot.com",
  messagingSenderId: "682002261520",
  appId: "1:682002261520:web:f75a231c8ef7d106c94c95",
  measurementId: "G-XX99CNEJG5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
export default firebase;
