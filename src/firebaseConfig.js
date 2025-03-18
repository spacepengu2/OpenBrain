// Import Firebase core functionality
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWKlCD3N990VIXdrmbt2buhyWcAypxNik",
  authDomain: "openbrain-8ff92.firebaseapp.com",
  projectId: "openbrain-8ff92",
  storageBucket: "openbrain-8ff92.firebasestorage.app",
  messagingSenderId: "707672428791",
  appId: "1:707672428791:web:574994f1f1349651f103f2",
  measurementId: "G-VWZ655VCSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };