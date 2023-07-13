import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsuBIVZM5_WheuN_78RnnkzD_6CLVhxt8",
  authDomain: "miniblog-38079.firebaseapp.com",
  projectId: "miniblog-38079",
  storageBucket: "miniblog-38079.appspot.com",
  messagingSenderId: "471994765995",
  appId: "1:471994765995:web:946bb83a30524d74f05dee",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
