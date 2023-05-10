import { publicProcedure, tRouter } from "../trpc";
import { getPostValidation } from "../utils/validations";


export const userRouter = tRouter({
    getUser: publicProcedure
        .input(getPostValidation)
        .query(({ input }) => {
            return "";
        }),
    updateUser: publicProcedure
        .input((param: unknown) => {
            if (typeof param === "string") return param;

            throw new Error("Invalid input: Param ID")
        })
        .query(({ input }) => {
            // do stuff
        })
})