import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
//     authDomain: "foodshare-409011.firebaseapp.com",

//     projectId: "foodshare-409011",
//     storageBucket: "foodshare-409011.appspot.com",
//     messagingSenderId: "161209538695",
//     appId: "1:161209538695:web:f1284f8528a3db7902c022",
//     measurementId: "G-HNWL05NBFD"
//   };

var firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
  authDomain: "foodshare-409011.firebaseapp.com",
  databaseURL: "https://sharetable-f7491-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodshare-409011",
  storageBucket: "foodshare-409011.appspot.com",
  messagingSenderId: "161209538695",
  appId: "1:161209538695:web:f1284f8528a3db7902c022"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
