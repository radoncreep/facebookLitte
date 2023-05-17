import { Box, Container, Flex, Text } from "@chakra-ui/layout";

import { NavigationBar, SideBar } from "../components";
import Post from "../containers/post/post";
import Feeds from "../containers/feeds/feeds";


export default function Home() {


    return (
        <Box bgColor="primaryBg" boxSizing="border-box">
            <NavigationBar />

            <Flex position="relative">
                <SideBar />

                <Box 
                    height="fit-content" 
                    py={6} 
                    flex={2} 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center"
                    // overflowY="auto"
                >
                    <Post />

                    <Feeds />

                </Box>

                <Container flex={1}>
                    <Box>
                        <Text color="#fff">
                            Some text
                        </Text>
                    </Box>
                </Container>
            </Flex>
        </Box>
    )
}