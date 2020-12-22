import firebase from 'firebase'



const config = {
    apiKey: "AIzaSyBeoaD-GD0akXw7qPDnQQoyBwQIDop2_-k",
    authDomain: "counter-2401c.firebaseapp.com",
    projectId: "counter-2401c",
    storageBucket: "counter-2401c.appspot.com",
    messagingSenderId: "728108375760",
    appId: "1:728108375760:web:2791bfb76eab5e384c48d5",
    measurementId: "G-91T7E2Y5Y3"
  };

  // Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase