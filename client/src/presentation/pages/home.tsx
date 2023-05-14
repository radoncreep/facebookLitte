import { Box } from "@chakra-ui/layout";
import { NavigationBar, SideBar } from "../components";


export default function Home() {


    return (
        <Box height="100vmin" bgColor="primaryBg">
            <NavigationBar />

            <SideBar />
        </Box>
        

    )
}