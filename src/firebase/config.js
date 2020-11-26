import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "gallery-3610a.firebaseapp.com",
  databaseURL: "https://gallery-3610a.firebaseio.com",
  projectId: "gallery-3610a",
  storageBucket: "gallery-3610a.appspot.com",
  messagingSenderId: "878235817932",
  appId: "1:878235817932:web:3c96b69dc14b022830ef69",
  measurementId: "G-SSEEJE003D",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
