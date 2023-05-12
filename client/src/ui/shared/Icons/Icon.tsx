import { PropsWithChildren } from "react";
import { Box, Text, TextProps} from "@chakra-ui/layout";


interface IconProps extends PropsWithChildren {
    isSelected?: boolean;
    text?: string;
    textProps?: TextProps;
    textDirection?: "left" | "right";
}

type IconTextProps = {
    text: string;
    textProps?: TextProps;
}


export default function Icon({ children, text, textProps, textDirection }: IconProps) {
    return (
        <Box>
            {textDirection === "left" && 
                <IconText text={text as string} textProps={textProps}/>
            }
            {children}
            {textDirection === "left" && 
                <IconText text={text as string} textProps={textProps}/>
            }
        </Box>
    )
}

function IconText({ text, textProps }: IconTextProps) {
    return (
        <Text {...textProps}>{text}</Text>
    )
}