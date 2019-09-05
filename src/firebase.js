import firebase from 'firebase';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCQYlr3B25zPVzmGHwYgOrbijX5KABhHF0",
    authDomain: "dietary-diary-app.firebaseapp.com",
    databaseURL: "https://dietary-diary-app.firebaseio.com",
    projectId: "dietary-diary-app",
    storageBucket: "",
    messagingSenderId: "224789139134",
    appId: "1:224789139134:web:771a1d93b24fef7368d8ef"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// exporting the configured ver. of firebase

export default firebase;
