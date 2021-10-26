import firebase from "firebase";
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBMakPW1ITjk7eJ52jKwHJdMZ7vxw-ibeM",
    authDomain: "realtime-chat-57c4e.firebaseapp.com",
    projectId: "realtime-chat-57c4e",
    storageBucket: "realtime-chat-57c4e.appspot.com",
    messagingSenderId: "1081052594165",
    appId: "1:1081052594165:web:e68277f2decd360010aabc"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({timestampsInSnapshots:true});

 export default firebaseApp.firestore();