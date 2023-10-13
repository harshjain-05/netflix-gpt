import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfKbmsVspzAE_NW3BA8q9myeMiAg7PQ7o",
  authDomain: "netflix-gpt-1fa3a.firebaseapp.com",
  projectId: "netflix-gpt-1fa3a",
  storageBucket: "netflix-gpt-1fa3a.appspot.com",
  messagingSenderId: "869305567963",
  appId: "1:869305567963:web:11bc1eba8edc37a6361afe",
  measurementId: "G-HT04VGRK6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);