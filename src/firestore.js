import { initializeApp } from "firebase/app";
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAhbhz0o76LrVR0heh9AczAU-L3-SUh-v8",
  authDomain: "ppgtouristhome-8c400.firebaseapp.com",
  projectId: "ppgtouristhome-8c400",
  storageBucket: "ppgtouristhome-8c400.appspot.com",
  messagingSenderId: "1024455669331",
  appId: "1:1024455669331:web:49b43d4043de12f6b178a6",
});

const db = getFirestore(app);

const getBookings = async () => {
  const q = query(collection(db, "bookings"), where("name", "==", "Pushkar R"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}; 

export {
  getBookings,
}