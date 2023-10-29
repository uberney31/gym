// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDicbzvFnv2wNDuUiewE7oCIabb9b3b4no",
  authDomain: "gym1-b6e97.firebaseapp.com",
  projectId: "gym1-b6e97",
  storageBucket: "gym1-b6e97.appspot.com",
  messagingSenderId: "1022669045966",
  appId: "1:1022669045966:web:0b1fce1f1046e38fb9909f",
  measurementId: "G-SL0TSYNSEM"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
  export default firebaseConfig;