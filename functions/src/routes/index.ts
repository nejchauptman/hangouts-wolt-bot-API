import * as functions from "firebase-functions";
import express, { Router } from "express";
import cors from "cors";
import foodRouter from "./FoodRouter";

const app = express();

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));

const router = Router();
router.use("/food", foodRouter);

app.use(router);

export const api = functions.region("europe-west3").https.onRequest(app);
