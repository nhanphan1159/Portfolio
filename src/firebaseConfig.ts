// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref } from "firebase/database";
import { getMessaging } from "firebase/messaging";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHB-Mapt8Eq5xuSoNx2NNcjZgTM3n6NRY",
  authDomain: "portfolio-c038e.firebaseapp.com",
  databaseURL:
    "https://portfolio-c038e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-c038e",
  storageBucket: "portfolio-c038e.firebasestorage.app",
  messagingSenderId: "380818701614",
  appId: "1:380818701614:web:03b8a73a28a4b264cacebf",
  measurementId: "G-PYTD1J2C46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);
const messaging = getMessaging(app);

export { analytics, database, get, messaging, ref, storage };
