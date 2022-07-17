// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDgX1owMWnxMeVhH1NzgIakGoYeYiLA53s",
//   authDomain: "zaiko-kanri-app-ce892.firebaseapp.com",
//   projectId: "zaiko-kanri-app-ce892",
//   storageBucket: "zaiko-kanri-app-ce892.appspot.com",
//   messagingSenderId: "333534582035",
//   appId: "1:333534582035:web:bef02d42a560545a2436e6",
//   measurementId: "G-YTDXMJHBNL",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZKE_AUXFsqhs-Sb3jpdFke8bE_EDklLk",
  authDomain: "zaiko-kanri-app-2.firebaseapp.com",
  projectId: "zaiko-kanri-app-2",
  storageBucket: "zaiko-kanri-app-2.appspot.com",
  messagingSenderId: "306489676813",
  appId: "1:306489676813:web:df961e3d64db69ccc3b144",
  measurementId: "G-ETWV7NBBLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };
