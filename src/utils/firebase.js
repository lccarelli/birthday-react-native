import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBbyQRzMJhVLsTIOMdnJ5HnGFzV0oUYHQM",
    authDomain: "birthday-29169.firebaseapp.com",
    databaseURL: "https://birthday-29169.firebaseio.com",
    projectId: "birthday-29169",
    storageBucket: "birthday-29169.appspot.com",
    messagingSenderId: "999682884682",
    appId: "1:999682884682:web:ddeb1b8ff11308e258d2b3",
    measurementId: "G-9R5868JGVR"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);