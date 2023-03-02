import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBzvrC0mwa13oRkxUl3ReJT7cgaUqNtxXM",
  authDomain: "portfolio-database-508d4.firebaseapp.com",
  projectId: "portfolio-database-508d4",
  storageBucket: "portfolio-database-508d4.appspot.com",
  messagingSenderId: "313084007279",
  appId: "1:313084007279:web:8799ddb49a57f245810e9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
