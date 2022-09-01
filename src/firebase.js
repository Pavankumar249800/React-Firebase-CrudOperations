import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAC4sguqVRl_c9AE0Np0J4vLCwhasv9rg",
  authDomain: "testing-api-24645.firebaseapp.com",
  databaseURL: "https://testing-api-24645-default-rtdb.firebaseio.com",
  projectId: "testing-api-24645",
  storageBucket: "testing-api-24645.appspot.com",
  messagingSenderId: "533569632573",
  appId: "1:533569632573:web:eb0be4abbfe87e5dd0ed54",
    
  };
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();