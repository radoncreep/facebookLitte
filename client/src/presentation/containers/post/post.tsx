import { ChangeEvent } from "react";
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { FaVideo } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";

import { ProfileAvatar } from "../../components";
import { user as data } from "../../../lib/user";


const iconStyle = {
    size: "22px",
    color: "#fff",
    opacity: .92
}

export default function Post() {
    // const [postInputValue, setPostInputValue] = useState()
    console.log("POST")
    const user = data;

    function handlePostInput(event: ChangeEvent<HTMLInputElement>) {
        console.log("value ", event.target.value);
    }

    return (
        <Container 
            minWidth="lg"
            maxWidth="xl"
            bgColor="primaryBg"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.05)"
            borderRadius="4px"
            height="fit-content"
            boxShadow="base"
        >
            <HStack spacing={4} justifyContent="center" my={6} mx={6}>
                <ProfileAvatar 
                    src={user.avatar}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    width={14}
                    height={14}
                />

                <Input 
                    placeholder={`What's on your mind, ${user.firstname} ${user.lastname}?`}
                    onChange={handlePostInput}
                    bgColor="rgba(255, 255, 255, 0.05)"
                    border="none"
                    borderRadius="30px"
                    flex={1}
                    py={3}
                    px={4}
                    _focus={{
                        outline: "none"
                    }}
                />
            </HStack>

            <Flex justifyContent="space-evenly" p={4} bgColor="rgba(255, 255, 255, 0.03)">
                <HStack>
                    <FaVideo {...iconStyle} />
                    <Text color="#fff" fontSize="14px" opacity={.7}>Live Video</Text>
                </HStack>

                <HStack>     
                    <MdInsertPhoto {...iconStyle} />
                    <Text color="#fff" fontSize="14px" opacity={.7}>Photo/Video</Text>
                </HStack>

                <HStack>
                    <BsFillEmojiSmileFill {...iconStyle} /> 
                    <Text color="#fff" fontSize="14px" opacity={.7}>Feeling/Activity</Text>
                </HStack>
            </Flex>
        </Container>
    )
}