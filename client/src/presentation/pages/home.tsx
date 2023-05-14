import { Box } from "@chakra-ui/layout";
import { NavigationBar, SideBar } from "../components";


export default function Home() {


    return (
        <Box minH="100vh" bgColor="primary">
            <NavigationBar />

            <SideBar />
        </Box>
        

    )
}