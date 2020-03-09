import firebase from 'firebase/app' 
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0mSllZVO151_bxbGh_K_WjnWfpp-zmfE",
    authDomain: "ninjadb-73ed3.firebaseapp.com",
    databaseURL: "https://ninjadb-73ed3.firebaseio.com",
    projectId: "ninjadb-73ed3",
    storageBucket: "ninjadb-73ed3.appspot.com",
    messagingSenderId: "102695580457",
    appId: "1:102695580457:web:7c32270d74fd1fa05a7d38",
    measurementId: "G-GCXW68DT33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();

  db.settings ({ timestampsInSnapshots: true}) 
  
  export default db; 

