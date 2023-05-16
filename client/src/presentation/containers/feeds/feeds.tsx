

// fetch feeds - GET
// create feed - CREATE
// remove feed - PUT

import { Fragment } from "react";
import { Box, Container, HStack, VStack, Text } from "@chakra-ui/layout";
import { BiWorld } from "react-icons/bi";
import { Image } from "@chakra-ui/image";

import { feeds } from "../../../lib/feeds"
import { ProfileAvatar } from "../../components";


export default function Feeds() {
    const feedsData = feeds;

    return (
        <>
            {feedsData.map((feed) => (
                <Fragment key={feed.id}>
                    <Feed {...feed} />    
                </Fragment>
            ))}
        </>
    )
}


type FeedProps = typeof feeds[0];

function Feed(props: FeedProps) {
  
    return (
        <Container 
            minWidth="md"
            maxWidth="lg"
            mt={10}
            borderWidth={1}
            borderColor="rgba(255, 255, 255, 0.04)"
            borderRadius="8px"
            boxShadow="lg"
        >
            <Box p={4}>
                <HStack mb={2}>
                    <ProfileAvatar 
                        src={props.avatar} 
                        firstname={props.accountName!}
                        lastname={""}            
                    />
                    
                    <VStack spacing={2} align="flex-start">
                        <Text color="#fff" fontSize="12px">{props.accountName}</Text>
                        <Box display="inline">
                            <Text color="#fff" fontSize="12px">
                                {props.postedAt}
                            </Text> 
                            <span><BiWorld color="#fff" size={16} /></span>
                        </Box>
                    </VStack>
                </HStack>

                <Text color="#fff" fontSize="14px" fontWeight="normal">
                    {props.text}
                </Text>
            </Box>

            <Image 
                src={props.media}
                width="100%"
                height="100%"
                alt=""
            />
        </Container>
    )
}