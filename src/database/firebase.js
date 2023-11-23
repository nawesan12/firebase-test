import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgwHXuC0OY-KRa_MF2ozFwiMc_7jl1jPU",
  authDomain: "user-management-e5760.firebaseapp.com",
  projectId: "user-management-e5760",
  storageBucket: "user-management-e5760.appspot.com",
  messagingSenderId: "44160081425",
  appId: "1:44160081425:web:159f882c174a47310d5bb0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
