// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoTrf40L_p3oykQ_JnSMvj8nykFiZzb_8",
  authDomain: "fir-fa9d0.firebaseapp.com",
  projectId: "fir-fa9d0",
  storageBucket: "fir-fa9d0.appspot.com",
  messagingSenderId: "1082227153183",
  appId: "1:1082227153183:web:b19ab4daaea05f1a92782a",
  measurementId: "G-TKBHVWB71E"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export { db,auth };