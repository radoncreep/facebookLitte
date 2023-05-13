import { useState } from "react";
import { HStack } from "@chakra-ui/layout";
import { AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { MdLiveTv } from "react-icons/md";


type NavRoute = "Home" | "Friends" | "Live" | "Community";

const iconStyle = {
    activeColor: "#2A76DC",
    inactiveColor: "#AFB2B7",
    size: "28px"
}


export default function NavigationRoutes() {
    const routes: Array<NavRoute> = ["Home", "Friends", "Live", "Community"]
    const [activeRoute, setActiveRoute] = useState<NavRoute>("Home");

    function handleNavigation(route: NavRoute) {
        console.log({route})
        setActiveRoute(route);
    }

    return (
        <HStack spacing={20}>
            {routes.map((route) => {
                switch (route ) {
                    case "Home": 
                        return (
                            <AiFillHome
                                cursor="pointer"
                                color={route === activeRoute ? iconStyle.activeColor : iconStyle.inactiveColor}
                                size={iconStyle.size}
                                onClick={() => handleNavigation(route)} 
                                key={route}
                            />
                        )
                    case "Friends": 
                        return (
                            <BsPeopleFill
                                cursor="pointer"
                                color={route === activeRoute ? iconStyle.activeColor : iconStyle.inactiveColor}
                                size={iconStyle.size} 
                                onClick={() => handleNavigation(route)} 
                                key={route}
                            />
                        )
                    case "Live": 
                        return (
                            <MdLiveTv
                                cursor="pointer"
                                color={route === activeRoute ? iconStyle.activeColor : iconStyle.inactiveColor}
                                size={iconStyle.size} 
                                onClick={() => handleNavigation(route)} 
                                key={route}
                            />
                        )
                    case "Community": 
                        return (
                            <GrGroup
                                cursor="pointer"
                                color={route === activeRoute ? iconStyle.activeColor : iconStyle.inactiveColor}
                                size={iconStyle.size} 
                                onClick={() => handleNavigation(route)} 
                                key={route}
                            />
                        )
                }
                
              
            })}
        </HStack>
    )
}