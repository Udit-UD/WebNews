
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP4FwxjkpOR6D3C1Op42gY5VKU77QH4_Y",
  authDomain: "newsapp-f63e5.firebaseapp.com",
  projectId: "newsapp-f63e5",
  storageBucket: "newsapp-f63e5.appspot.com",
  messagingSenderId: "890431640175",
  appId: "1:890431640175:web:01a818eafae675ccd1339a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};
