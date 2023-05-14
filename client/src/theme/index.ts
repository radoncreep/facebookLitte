import { extendBaseTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const tokens = {
    colors,
}

export const theme = extendBaseTheme({
    ...tokens
})