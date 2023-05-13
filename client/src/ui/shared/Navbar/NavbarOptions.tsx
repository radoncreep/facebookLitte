import { Box, HStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { BsFillGrid3X3GapFill, BsMessenger } from "react-icons/bs";
import { TbBellRinging2Filled } from "react-icons/tb";

import ProfileAvatar from "../Avatar";


type NavOption = "Grid" | "Messenger" | "Notifications" | "Profile";

const iconStyle = {
    size: "22px",
    color: "#fff",
}

export default function NavbarOptions() {
    const navOptions: Array<NavOption> = ["Grid", "Messenger", "Notifications", "Profile"]

    function handleNavOption(option: NavOption) {
        console.log({option})
    }

    return (
        <HStack spacing={10}>
            {navOptions.map((option) => {
                switch (option) {
                    case "Grid": 
                        return (
                            <OptionBackground key={option}>
                                <BsFillGrid3X3GapFill
                                    {...iconStyle}
                                    // color="#fff"
                                    onClick={() => handleNavOption(option)} 
                                />
                            </OptionBackground>
                        )
                    case "Messenger": 
                        return (
                            <OptionBackground key={option}>
                                <BsMessenger
                                    {...iconStyle} 
                                    onClick={() => handleNavOption(option)} 
                                />
                            </OptionBackground>
                        )
                    case "Notifications": 
                        return (
                            <OptionBackground key={option}>
                                <TbBellRinging2Filled
                                    {...iconStyle} 
                                    onClick={() => handleNavOption(option)} 
                                />
                            </OptionBackground>
                        )
                    case "Profile": 
                        return (
                            <OptionBackground key={option}>
                                <ProfileAvatar
                                    src=""
                                    size="xs"
                                    onClick={() => handleNavOption(option)} 
                                />
                            </OptionBackground>
                        )
                    default: 
                        return null;
                }
            })}
        </HStack>
    )
}

function OptionBackground({ children }: PropsWithChildren) {
    return (
        <Box position="relative" cursor="pointer">
            <Box 
                bgColor="#E4E6EB"
                opacity={.2}
                borderRadius="50%"
                padding={2}
                boxSize={10}
                position="absolute"
                top={-2}
                left={-2}
            />
            <Box >
                {children}
            </Box>
        </Box>
    )
}