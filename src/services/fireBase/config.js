import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


// https://console.firebase.google.com/
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// lqvinh.hsu@gmail.com
// console.firebase   = app named : "vueLearning-live-chat"
const firebaseConfig = {
  apiKey: "AIzaSyD8mfuuNm1KCBwLLvCcXbGTjwyGMWrXReo",
  authDomain: "vue3-learning-fec5f.firebaseapp.com",
  projectId: "vue3-learning-fec5f",
  storageBucket: "vue3-learning-fec5f.appspot.com",
  messagingSenderId: "929687306949",
  appId: "1:929687306949:web:be1c8fa639318d8ca5a6ac",
  measurementId: "G-Y332VPHFTL",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectAuth, projectFirestore, projectStorage, timestamp };
