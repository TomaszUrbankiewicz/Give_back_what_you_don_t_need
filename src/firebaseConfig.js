import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9G0XdkwL-EjdEWfcqpip1LjtKrQpK6iA",
    authDomain: "give-back-what-you-don-t-need.firebaseapp.com",
    projectId: "give-back-what-you-don-t-need",
    storageBucket: "give-back-what-you-don-t-need.appspot.com",
    messagingSenderId: "733607399069",
    appId: "1:733607399069:web:a5781a4552a3bdd91ece74"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export {auth, firestore};
