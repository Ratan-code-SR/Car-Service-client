// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnHQhW8XSAaNn7JX1V8tySp4fkhHT3SRU",
    authDomain: "car-service-client-a4480.firebaseapp.com",
    projectId: "car-service-client-a4480",
    storageBucket: "car-service-client-a4480.appspot.com",
    messagingSenderId: "481917200838",
    appId: "1:481917200838:web:4b45bc6182fed901642ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
