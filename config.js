import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API,
  authDomain: "exploreview-589ec.firebaseapp.com",
  projectId: "exploreview-589ec",
  storageBucket: "exploreview-589ec.appspot.com",
  // databaseURL: "<https://exploreview-589ec.firebaseio.com>",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
