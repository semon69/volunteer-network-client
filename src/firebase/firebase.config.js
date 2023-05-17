// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log('api key', import.meta.env.VITE_API_KEY)

const firebaseConfig = {
  apiKey: "AIzaSyA0WwIMw9Tkm87XBK0SE821jHjk29FyUKs",
  authDomain: "volunteer-network-f5fcd.firebaseapp.com",
  projectId: "volunteer-network-f5fcd",
  storageBucket: "volunteer-network-f5fcd.appspot.com",
  messagingSenderId: "368263719999",
  appId: "1:368263719999:web:65f27cc761b88b310ddc8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;