import { Box, HStack } from "@chakra-ui/react";
import { Fragment, PropsWithChildren } from "react";
import { BsFillGrid3X3GapFill, BsMessenger } from "react-icons/bs";
import { TbBellRinging2Filled } from "react-icons/tb";

import ProfileAvatar from "../profile/avatar";
import { user as data } from "../../../lib/user";


type NavOption = "Grid" | "Messenger" | "Notifications" | "Profile";

const iconStyle = {
    size: "22px",
    color: "appWhite",
}

export default function NavbarOptions() {
    console.log("OPTIONS")
    const navOptions: Array<NavOption> = ["Grid", "Messenger", "Notifications", "Profile"];
    const user = data;

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
                            <Fragment key={option}>
                                <ProfileAvatar
                                    src={user.avatar}
                                    width="50px"
                                    height="50px"
                                    firstname={user.firstname}
                                    lastname={user.lastname}
                                    // onClick={() => handleNavOption(option)} 
                                />
                            </Fragment>
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