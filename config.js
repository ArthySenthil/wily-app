import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
   apiKey: "AIzaSyDrhx5lpqT-Ix7Y2xJpnhYOvp0gXQFeHTo",
  authDomain: "wily-app-a4aac.firebaseapp.com",
  databaseURL:"https://wily-app-a4aac.firebaseio.com",
  projectId: "wily-app-a4aac",
  storageBucket: "wily-app-a4aac.appspot.com",
  messagingSenderId: "139697245457",
  appId: "1:139697245457:web:ba2bd31f64b31f055910b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
