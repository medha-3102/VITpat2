import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDNfHk0TMMC9zbJ_UpsUVZ2xWqsulYb0sY",
    authDomain: "vitpat2-938ab.firebaseapp.com",
    projectId: "vitpat2-938ab",
    storageBucket: "vitpat2-938ab.appspot.com",
    messagingSenderId: "715443823596",
    appId: "1:715443823596:web:67a66edd95136e090ed6c9",
    measurementId: "G-M0511YTQ9K"
};
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();

// Export Firebase Firestore
export const db = getFirestore(app);

export default app;