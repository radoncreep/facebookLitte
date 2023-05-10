import { initTRPC } from "@trpc/server";

const tInstance = initTRPC.create();

export const tRouter = tInstance.router;
export const publicProcedure = tInstance.procedure;
export const tMiddleware = tInstance.middleware; 