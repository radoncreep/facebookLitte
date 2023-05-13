import { PropsWithChildren, useState } from "react";
import { HStack } from "@chakra-ui/layout";
import { AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdLiveTv } from "react-icons/md";
import { Box } from "@chakra-ui/react";


type NavRoute = "Home" | "Friends" | "Live" | "Community";

const activeColor: string = "#2A76DC";
const inactiveColor: string = "#AFB2B7";


export default function NavigationRoutes() {
    const routes: Array<NavRoute> = ["Home", "Friends", "Live", "Community"]
    const [activeRoute, setActiveRoute] = useState<NavRoute>("Home");

    function handleNavigation(route: NavRoute) {
        setActiveRoute(route);
    }

    return (
        <HStack spacing={2} height="inherit">
            {routes.map((route) => {

                const iconStyle = {
                    color: route === activeRoute ?  activeColor : inactiveColor,
                    size: "28px"
                }

                switch (route ) {
                    case "Home": 
                        return (
                            <IconWrapper isActive={route === activeRoute}>
                                <AiFillHome
                                    cursor="pointer"
                                    {...iconStyle}
                                    onClick={() => handleNavigation(route)} 
                                    key={route}
                                />
                            </IconWrapper>
                        )
                    case "Friends": 
                        return (
                            <IconWrapper isActive={route === activeRoute}>
                                <BsPeopleFill
                                    cursor="pointer"
                                    {...iconStyle}
                                    onClick={() => handleNavigation(route)} 
                                    key={route}
                                />
                            </IconWrapper>
                        )
                    case "Live": 
                        return (
                            <IconWrapper isActive={route === activeRoute}>
                                <MdLiveTv
                                    cursor="pointer"
                                    {...iconStyle}
                                    onClick={() => handleNavigation(route)} 
                                    key={route}
                                />
                            </IconWrapper>
                        )
                    case "Community": 
                        return (
                            <IconWrapper isActive={route === activeRoute}>
                                <HiUserGroup
                                    cursor="pointer"
                                    {...iconStyle}
                                    onClick={() => handleNavigation(route)} 
                                    key={route}
                                />
                            </IconWrapper>
                        )
                }
                
              
            })}
        </HStack>
    )
}

interface WrapperProps extends PropsWithChildren {
    isActive: boolean;
}

function IconWrapper({ children, isActive }: WrapperProps) {
    return (
        <Box 
            h="inherit" 
            display="flex" 
            alignItems="center" 
            width="100px" 
            justifyContent="center"
            borderBottomColor={activeColor}
            borderBottomWidth={isActive ? "2px" : "0px"}
        >
            {children}
        </Box>
    )
}