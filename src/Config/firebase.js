import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDH5LrPVCtO2XDdfn29NjtKpYrhzDQWY3k",
    authDomain: "react-utn-652b6.firebaseapp.com",
    projectId: "react-utn-652b6",
    storageBucket: "react-utn-652b6.appspot.com",
    messagingSenderId: "783100670568",
    appId: "1:783100670568:web:6c8a2d805ccc699bf3c1dd"
};


firebase.initializeApp(firebaseConfig)

export default firebase;