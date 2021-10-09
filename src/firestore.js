import { initializeApp } from 'firebase/app';
import * as db from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAhbhz0o76LrVR0heh9AczAU-L3-SUh-v8",
  authDomain: "ppgtouristhome-8c400.firebaseapp.com",
  projectId: "ppgtouristhome-8c400",
  storageBucket: "ppgtouristhome-8c400.appspot.com",
  messagingSenderId: "1024455669331",
  appId: "1:1024455669331:web:49b43d4043de12f6b178a6",
});

const getBookings = async () => {
  const q = db.query(db.collection(db, "bookings"), db.where("name", "==", "Pushkar R"));
  const querySnapshot = await db.getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}; 

