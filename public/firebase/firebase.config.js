// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV8yC2BwnRmSGHGif_i_PLYZS8UvUR54E",
  authDomain: "assignment-10-brandshop-client.firebaseapp.com",
  projectId: "assignment-10-brandshop-client",
  storageBucket: "assignment-10-brandshop-client.appspot.com",
  messagingSenderId: "692693283018",
  appId: "1:692693283018:web:68429d96672992d1f5c433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;