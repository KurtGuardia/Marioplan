import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA_2ioMZSIlLX2Py7RVmdfBI5GURiFZ-mY",
  authDomain: "marioplan-24fcd.firebaseapp.com",
  projectId: "marioplan-24fcd",
  storageBucket: "marioplan-24fcd.appspot.com",
  messagingSenderId: "824506746821",
  appId: "1:824506746821:web:f26ec5774c91e543a92dac",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
