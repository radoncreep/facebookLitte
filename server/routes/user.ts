import { userProcedure } from "../middlewares/authentication";
import { tRouter } from "../trpc";
import { getPostValidation } from "../utils/validations";


export const userRouter = tRouter({
    getUser: userProcedure
        .input(getPostValidation)
        .query(({ input }) => {
            return "";
        }),
    updateUser: userProcedure
        .input((param: unknown) => {
            if (typeof param === "string") return param;

            throw new Error("Invalid input: Param ID")
        })
        .query(({ input }) => {
            // do stuff
        })
})