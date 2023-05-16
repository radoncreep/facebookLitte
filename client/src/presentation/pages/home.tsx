import { Box, Container, Flex } from "@chakra-ui/layout";

import { NavigationBar, SideBar } from "../components";
import Post from "../containers/post/post";
import { Center } from "@chakra-ui/react";


export default function Home() {


    return (
        <Box height="100vmin" bgColor="primaryBg">
            <NavigationBar />

            <Flex>
                <SideBar />

                <Container py={10} flex={2} display="flex" justifyContent="center">
                    <Post />

                </Container>
            </Flex>

            <Container flex={1}>

            </Container>
        </Box>
    )
}