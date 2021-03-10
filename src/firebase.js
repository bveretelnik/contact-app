import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAR_Ujlh80i7vV4RZryuzHueFnXB6l9FS4",
  authDomain: "contact-app-9b9ae.firebaseapp.com",
  projectId: "contact-app-9b9ae",
  storageBucket: "contact-app-9b9ae.appspot.com",
  messagingSenderId: "378979927151",
  appId: "1:378979927151:web:90d27f4be52b856132799a",
};

firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
