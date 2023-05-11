import { TRPCError } from "@trpc/server";
import { publicProcedure, tMiddleware } from "../trpc";


// use this middleware to authenticate every user request
const isAuthenticated = tMiddleware(async (options) => {
    const { ctx } = options;

    if (!ctx.user?.email) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    // context extension
    return options.next({
        ctx: {
            user: ctx.user
        }
    })
});

export const userProcedure = publicProcedure.use(isAuthenticated);