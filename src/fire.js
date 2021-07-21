import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCz8DL49-SeJ22NVo6xnFSjXNauz-d9PVw",
    authDomain: "snippets-66b0e.firebaseapp.com",
    databaseURL: "https://snippets-66b0e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "snippets-66b0e",
    storageBucket: "snippets-66b0e.appspot.com",
    messagingSenderId: "242729612541",
    appId: "1:242729612541:web:bf7df5a3a49b45ebcf3a94",
    measurementId: "G-GW4LJLM65P"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export{auth};
export default db;
