import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import config from "./config.json";

admin.initializeApp();

initializeApp(config);

export * from "./routes";
