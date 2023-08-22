import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB4g3gmot6IX24KHSdAwxthm4krlszHPeM",
	authDomain: "desafio-maximize.firebaseapp.com",
	databaseURL: "https://desafio-maximize-default-rtdb.firebaseio.com",
	projectId: "desafio-maximize",
	storageBucket: "desafio-maximize.appspot.com",
	messagingSenderId: "804134505117",
	appId: "1:804134505117:web:7f4c31266bbd3540532274",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
