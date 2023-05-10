import express, { Express } from "express";
import dotenv from "dotenv";

import { useMergeRouters } from "./trpc";
import { postRouter } from "./routes/post";
import { userRouter } from "./routes/user";

dotenv.config();

// router instance takes in any number of procedures
const tAppRouter = useMergeRouters(
    postRouter,
    userRouter
);

export type AppRouter = typeof tAppRouter;

const app: Express = express();
const port: number = Number(process.env.PORT) || 8080;

app.listen(port, function() {
    console.log(`running on port ${port}`);
})