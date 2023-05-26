import express from "express";
import { router } from "./routes/routes";

export const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));

app.use("/coffeelover", router);

app.use("/", router);
