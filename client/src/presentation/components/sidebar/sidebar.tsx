import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { Fragment, FunctionComponent } from "react";

import ProfileAvatar from "../atoms/avatar";


type SideBarRouteType = "Find Friends" | "Groups" | "Most Recent" | "Marketplace" | "Watch";

interface SideBarRouteProps {
    name: SideBarRouteType;
    Icon: FunctionComponent | null;
    path: string;
}

export default function SideBar() {
    const sideBarRoutes: SideBarRouteProps[] = [
        {name: "Find Friends", Icon: () => <></>, path: "findFriends"},
        {name: "Groups", Icon: () => <></>, path: "groups"},
        {name: "Most Recent", Icon: () => <></>, path: "mostRecent"},
        {name: "Marketplace", Icon: () => <></>, path: "marketplace"},
        {name: "Watch", Icon: () => <></>, path: "watch"}
    ];

    return (
        <VStack height="100%" bg="red" maxWidth={340}>
            <Box>
                <ProfileAvatar 
                    size="xs"
                    src=""
                    onClick={() => console.log("click")}
                    firstname="Victor"
                    lastname="Onofiok"
                />
            </Box>

            {sideBarRoutes.map((route) => (
                <Fragment key={route.name}>
                    <SideBarRoute {...route} />
                </Fragment>
            ))}

        </VStack>
    )
}


function SideBarRoute({ name, Icon }: SideBarRouteProps ) {

    return (
        // <Link path={path}>
            <HStack spacing={4}>
                {Icon !== null && <Icon />}

                <Text>{name}</Text>
            </HStack>
        // </Link>
    )
}