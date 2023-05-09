import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 8080;


app.listen(port, function() {
    console.log(`running on port ${port}`);
})