import express, { Express } from "express";
import dotenv from "dotenv";
import { createExpressMiddleware } from '@trpc/server/adapters/express';


import { createContext, useMergeRouters } from "./trpc";
import { postRouter } from "./routes/post";
import { userRouter } from "./routes/user";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 8080;

// router instance takes in any number of procedures
const tAppRouter = useMergeRouters(
    postRouter,
    userRouter
);

export type AppRouter = typeof tAppRouter;

app.use('/api', createExpressMiddleware({
    router: tAppRouter,
    createContext: createContext
}))


app.listen(port, function() {
    console.log(`running on port ${port}`);
})

// export type AppRouter = typeof tAppRouter;
