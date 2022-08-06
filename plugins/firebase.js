// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbwYOu-z5vqXt2kIoul_x5rOCjNGLbCvo",
  authDomain: "gabby-botcopy-copy.firebaseapp.com",
  projectId: "gabby-botcopy-copy",
  storageBucket: "gabby-botcopy-copy.appspot.com",
  messagingSenderId: "224335239763",
  appId: "1:224335239763:web:9c79e212f9b67cab0a44a6",
  measurementId: "G-32268LKM7Q"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

function login() {
  signInAnonymously(auth).then(() => {
      // Signed in..
    }).catch((error) => {
      // const errorCode = error.code;
      console.log(error.message)
      // ...
    })
}

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('user logged in')
  } else {
    console.log('not logged in')
    login()
  }
})
export { db }
