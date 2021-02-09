import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADX0LlZhWom2plLaoLMegMMNBdUo1KU3M",
  authDomain: "instagramclone-fa239.firebaseapp.com",
  projectId: "instagramclone-fa239",
  storageBucket: "instagramclone-fa239.appspot.com",
  messagingSenderId: "621992511443",
  appId: "1:621992511443:web:cf4e6864f011e698ec5126",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
