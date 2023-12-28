// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP00rBL5Yz8ItqQtICLeB6NgENTexF3Ro",
  authDomain: "barcode-scanner-imei.firebaseapp.com",
  databaseURL: "https://barcode-scanner-imei-default-rtdb.firebaseio.com",
  projectId: "barcode-scanner-imei",
  storageBucket: "barcode-scanner-imei.appspot.com",
  messagingSenderId: "696521743486",
  appId: "1:696521743486:web:77a6483b2bba008be54c2f",
  measurementId: "G-Y9ED4TDVHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);