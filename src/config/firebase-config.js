import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

var config = {
  apiKey: "AIzaSyCI85XQ0H-0imAqGfPU_jbgvRm2DgXCxTY",
  authDomain: "udemy-d3.firebaseapp.com",
  databaseURL: "https://udemy-d3.firebaseio.com",
  projectId: "udemy-d3",
  storageBucket: "udemy-d3.appspot.com",
  messagingSenderId: "299469835504"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
