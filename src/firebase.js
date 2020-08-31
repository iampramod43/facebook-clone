import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAggaXCGHxsrGhKurOOT2jUZiYOzAUQVo",
    authDomain: "facebook-clone-b8cbd.firebaseapp.com",
    databaseURL: "https://facebook-clone-b8cbd.firebaseio.com",
    projectId: "facebook-clone-b8cbd",
    storageBucket: "facebook-clone-b8cbd.appspot.com",
    messagingSenderId: "1080795185007",
    appId: "1:1080795185007:web:e3c74e418d63d1788ff29a",
    measurementId: "G-YY9ZTYVY2N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();



  export { auth, provider };
  export default db;