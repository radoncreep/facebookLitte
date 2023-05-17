import { Fragment, FunctionComponent, useState } from "react";
import { Box, Container, HStack, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { FaChevronDown, FaChevronRight, FaHistory, FaStoreAlt, FaUserFriends } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { Button, Center } from "@chakra-ui/react";


type SideBarRouteType = "Find Friends" | "Groups" | "Most Recent" | "Marketplace" | "Watch";

interface SideBarRouteProps {
    name: SideBarRouteType;
    Icon: FunctionComponent | null;
    path: string;
}

const iconStyle = {
    color: "#fff",
    size: "24px"
}

export default function SideBar() {
    const [seeMore, setSeeMore] = useState<boolean>(false);

    const sideBarRoutes: SideBarRouteProps[] = [
        {name: "Find Friends", Icon: () => <FaUserFriends {...iconStyle} />, path: "findFriends"},
        {name: "Marketplace", Icon: () => <FaStoreAlt {...iconStyle} />, path: "marketplace"},
        {name: "Most Recent", Icon: () => <FaHistory {...iconStyle} />, path: "mostRecent"},
        {name: "Groups", Icon: () => <HiUserGroup {...iconStyle} />, path: "groups"},
        {name: "Watch", Icon: () => <MdOutlineSmartDisplay {...iconStyle} />, path: "watch"}
    ];

    const userShortcuts: string[] = ["UX Design", "EU React Conf", "NextJS Conf 2023"];

    const seeMoreIcon = (
        <Center bgColor="rgba(255, 255, 255, 0.1)" borderRadius="50%" padding={1.5}>
            {seeMore ? 
                <FaChevronDown color="#FFFFFF" /> : 
                <FaChevronRight color="#FFFFFF" />
            }
        </Center> 
    )

    return (
        <Container 
        position="sticky"
        // float={"left"}
            // overflow="auto"
            top={0}
            flex={1} 
            py={2} 
            height="100vh" 
            // maxWidth={340} 
            bgColor="rgba(255, 255, 255, 0.03)"
            borderColor="rgba(255, 255, 255, 0.1)"
            borderRightWidth={1}
        >
             <HStack spacing={4} mb={8} px={6}>
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzs6xD2nRWRDC8038e189eaP2LMv_MHUuc-sTuBfAlAhkbsXQA6ditbsfqQ0D5N0Zm5U&usqp=CAU"
                    boxSize={10}
                    borderRadius="50%"
                />
                <span><Text color="appWhite" fontWeight="medium">Michael Scott</Text></span>
            </HStack>

            <VStack px={6} spacing={10} align="flex-start">
                {sideBarRoutes.map((route) => (
                    <Fragment key={route.name}>
                        <SideBarRoute {...route} />
                    </Fragment>
                ))}

                <Button iconSpacing={4} leftIcon={seeMoreIcon} onClick={() => setSeeMore((prev) => !prev)}>
                    See More
                </Button>

                {seeMore && (
                    <></>
                )}
            </VStack>

            <Box bgColor="rgba(255, 255, 255, 0.1)" height="1px" width="100%" my={8} />
            
            <Box px={6}>
                <Text color="#FFFFFF" fontSize={18}>Your Shortcuts</Text>

                <VStack spacing={6} align="flex-start" mt={6} >
                    {userShortcuts.map(shortcut => (
                        <Text key={shortcut} color="appWhite" fontWeight="md" fontSize={14}>
                            {shortcut}
                        </Text>
                    ))}
                </VStack>
            </Box>
        </Container>
    )
}


function SideBarRoute({ name, Icon }: SideBarRouteProps ) {

    return (
        // <Link path={path}>
            <HStack spacing={4}>
                {Icon !== null && <Icon />}

                <Text fontWeight="medium">{name}</Text>
            </HStack>
        // </Link>
    )
}