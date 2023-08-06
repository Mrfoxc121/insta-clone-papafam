// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkWXr87XRLsGR1wqnZG_L6NYv_9T_r5ls",
  authDomain: "insta-2-yt-acd4a.firebaseapp.com",
  projectId: "insta-2-yt-acd4a",
  storageBucket: "insta-2-yt-acd4a.appspot.com",
  messagingSenderId: "428089346906",
  appId: "1:428089346906:web:5a5b03609782064c734163",
  measurementId: "G-KYR34Q5ZTT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const analytics = getAnalytics(app);
const storage = getStorage()

export { app, db, storage }