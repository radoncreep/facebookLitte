import { publicProcedure, tRouter } from "../trpc";
import { getPostValidation } from "../utils/validations";


export const postRouter = tRouter({
    getPost: publicProcedure
        .input(getPostValidation)
        .query((options) => {
            const { input } = options;
            return "";
        }),
    updatePost: publicProcedure
        .input((param: unknown) => {
            if (typeof param === "string") return param;

            throw new Error("Invalid input: Param ID")
        })
        .query(({ input }) => {
            // do stuff
        })
})