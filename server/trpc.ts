import { initTRPC } from "@trpc/server";
import { User } from "./models/User";
import { Post } from "./models/Post";

interface AppContext {
    user?: User;
    post?: Post;
}

const tInstance = initTRPC.context<AppContext>().create();

export const tRouter = tInstance.router;
export const publicProcedure = tInstance.procedure;
export const tMiddleware = tInstance.middleware; 
export const useMergeRouters = tInstance.mergeRouters;