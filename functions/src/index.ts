import { initializeApp } from "firebase/app";
import admin from "firebase-admin";

admin.initializeApp();

const config = {
	apiKey: "AIzaSyD59UTlqZoY6wCNtSCz3uZ71D9vi0DiZxg",
	authDomain: "foodbot-a9893.firebaseapp.com",
	projectId: "foodbot-a9893",
	storageBucket: "foodbot-a9893.appspot.com",
	messagingSenderId: "842887192129",
	appId: "1:842887192129:web:44d48417d60434044230c0",
};

initializeApp(config);

export * from "./routes";
