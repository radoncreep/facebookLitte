import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from '@trpc/server/adapters/express';

import { User } from "./models/User";
import { Post } from "./models/Post";

interface AppContext {
    user?: User;
    post?: Post;
}

export const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => {
    const appContext: AppContext = {};

    return appContext;
}

type Context = inferAsyncReturnType<typeof createContext>;

const tInstance = initTRPC.context<Context>().create();

export const tRouter = tInstance.router;
export const publicProcedure = tInstance.procedure;
export const tMiddleware = tInstance.middleware; 
export const useMergeRouters = tInstance.mergeRouters;