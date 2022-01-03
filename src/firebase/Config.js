
import firebase from "firebase/compat";
import "firebase/compat/auth"              //for using firebase signup authentication
import "firebase/compat/firestore"         //for  using firebase firstore storing entered data
import "firebase/storage"           //for  using firebase storage uploading imgs/file 
const firebaseConfig = {
    apiKey: "AIzaSyBkCM2MX7-gU6FDYXbk8iRxQ7L4JGGshe0",
    authDomain: "fir-76737.firebaseapp.com",
    projectId: "fir-76737",
    storageBucket: "fir-76737.appspot.com",
    messagingSenderId: "1094398255833",
    appId: "1:1094398255833:web:d37297f4c06b0fd44694c8",
    measurementId: "G-ZH4TQ2PN0P"
  };
   export default firebase.initializeApp(firebaseConfig)
//                         OR
//  export const  Firebase = firebase.initializeApp(firebaseConfig)

