import express, { Express } from "express";
import * as trpc from "@trpc/server";
import dotenv from "dotenv";
import { publicProcedure, tRouter } from "./trpc";
import { postRouter } from "./routes/post";
import { userRouter } from "./routes/user";

dotenv.config();

// router instance takes in any number of procedures
const tAppRouter = tRouter({
    onboard: publicProcedure
        .query(() => "Welcome onboard to our very own facebook lite clone"), 
    postRoute: postRouter,
    userRoute: userRouter
})

export type AppRouter = typeof tAppRouter;

const app: Express = express();
const port: number = Number(process.env.PORT) || 8080;

app.listen(port, function() {
    console.log(`running on port ${port}`);
})