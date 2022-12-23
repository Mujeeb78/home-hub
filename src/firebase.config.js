import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyDHykiV9PZ1VIlVZpAed3ASVca4GsGlzo4",
  authDomain: "home-hub-14f7e.firebaseapp.com",
  projectId: "home-hub-14f7e",
  storageBucket: "home-hub-14f7e.appspot.com",
  messagingSenderId: "668438977631",
  appId: "1:668438977631:web:f2bd7e4e121a2fefde0fea"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()