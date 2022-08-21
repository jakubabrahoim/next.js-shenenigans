import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmg01ZbScJM5_pu8fUn_P9O9g9hVkjDtc",
  authDomain: "jakub-abrahoim.firebaseapp.com",
  projectId: "jakub-abrahoim",
  storageBucket: "jakub-abrahoim.appspot.com",
  messagingSenderId: "914536735957",
  appId: "1:914536735957:web:5914cf72d614c24deb2e5c",
  measurementId: "G-14S6P46LPN"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);