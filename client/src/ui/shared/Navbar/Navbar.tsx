import { Fragment, useEffect, useRef, useState } from "react";
import { Container, Flex, HStack, Text } from "@chakra-ui/layout";
import { Input  } from "@chakra-ui/input";
import { Image  } from "@chakra-ui/image";
import { Menu, MenuList, MenuItem } from "@chakra-ui/menu";

import { BsFacebook, BsSearch } from "react-icons/bs";


import { results } from "../../../lib/searchResults";
import NavigationRoutes from "./NavRoutes";
import NavbarOptions from "./NavbarOptions";
import { Avatar, Box, MenuButton, Portal } from "@chakra-ui/react";

type People = {
    id: string;
    firstname: string;
    lastname: string;
    avatar: string;
}

export default function Navbar() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchCache] = useState<Record<typeof searchValue, People[]>>({"aaron": results }); 
    const [allResults, setAllResults] = useState<typeof results | null>(null);
    const ref = useRef(null);

    useEffect(() => {
        let searchQueryTimer = setTimeout(() => {
            handleSearch(searchValue.trim());
        }, 500);
        
        return () => { clearTimeout(searchQueryTimer) };
    }, [searchValue]);

    function handleChange(e: any) {
        setSearchValue(e.target?.value);
        setIsLoading(true);
    }

    function handleSearch(searchVal: string) {
        if (searchVal.length <= 0) {
            setAllResults(null)
            setIsLoading(false);
            return;
        }

        const cacheResult = searchCache[searchVal] ? searchCache[searchVal][0] : null;

        if (cacheResult) {
            setAllResults([{...cacheResult}]);
            setIsLoading(false);
            return;
        }
       
        const response: People = {
            id: "eogeirngierng",
            firstname: "Grace",
            lastname: "Tawar",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU"
        }

        setAllResults([...results]);
        setIsLoading(false);
    }

    let feedback: JSX.Element | null = <></>;

    if (isLoading) {
        feedback = <Text color={"#fff"}>Loading...</Text>
    } else if(!isLoading && allResults) {
        // feedback = <SearchFeedback results={allResults}  />
    } else {
        feedback = null;
    }
    
    return (
        <Box>

            <Flex 
                bgColor="#242526"
                paddingLeft={20}
                paddingRight={20}
                justifyContent="space-between"
                height="60px"
            >
                <HStack spacing={8} >
                    <BsFacebook size="40px" color="#3b5998" />

                    <HStack
                        bgColor="#3A3B3C"
                        height="40px"
                        borderRadius="20px"
                        spacing={2}
                        alignItems="center"
                        paddingX={4}
                        ref={ref}
                        position="relative"
                    >
                        <BsSearch color="#AEB1B5" />

                        <Input 
                            type="text"
                            value={searchValue}  
                            placeholder="search facebook"
                            color="#fff"
                            onChange={handleChange}
                            bg="none"
                            _focus={{
                                outline: "none"
                            }}
                            fontSize="14px"
                            border="none"

                        />


                        {allResults !== null && 
                            <Container
                                position="absolute"
                                top={12}
                                left={-2}
                                bgColor="#242526"
                                minWidth="sm"
                                borderRadius="4px"
                                paddingX={4}
                                paddingY={4}
                            >
                                {allResults?.map((res) => (
                                    <Fragment key={res.id}>
                                        <Flex justify="space-between" alignItems="center" mb={4}>
                                            <HStack spacing={4}>
                                                <BsSearch size="16px" color="#AEB1B5" />
                                                <Text color={"#fff"} key={res.id}>{res.firstname} {res.lastname}</Text>
                                            </HStack>

                                            <Image 
                                                src={res.avatar} 
                                                alt={`An image of ${res.firstname} ${res.lastname}`}
                                                boxSize={10}
                                                borderRadius="50%"
                                            />
                                            {/* <Avatar size="3xs" src={res.avatar} name={res.firstname + " " + res.lastname} /> */}
                                        </Flex>
                                    </Fragment>
                                ))}
                            </Container>
                        }
                    </HStack>

                </HStack>
                        

                <NavigationRoutes />

                <NavbarOptions />

                {/* {feedback} */}
            </Flex>
        </Box>
    )
}

interface SearchFeedbackProps {
    results: People[] | null;
}

// function SearchFeedback({results}: SearchFeedbackProps) {

//     if (results === null || results.length === 0) {
//         return (
//             <Text color={"#fff"}>No results...</Text>
//         )
//     }

//     return (
//         <Fragment key={res.id}>
//             <Flex justify="space-between" alignItems="center" height={20} mb={4}>
                
//                 {/* <Avatar size="3xs" src={res.avatar} name={res.firstname + " " + res.lastname} /> */}
//             </Flex>
//         </Fragment>
//     )
// }




/**
 * MENTAL MODEL
 * if the search is complete i.e the user stops typing 
 * the function in the timeout should be executed
 * the isLoading state should be false
 * 
 * if the searchValue state is empty
 * 
 * results should be contained in a feedback box / menu dropdown
 * if the result from the query is empty
 * return a "no result" text in the feedback box
 * else;
 * return a list showing the result in the feedback box
 * the result should not persist if the search value is different
 * i.e the state of the feedback component should be reset
 * in this case the feedback component wont have a state because the result is going to be passed from the Navbar component
 * and we do not want to mirror its props to avoid showing stale data
 * so we pass a state from Navbar cmp as props to the Feedback component 
 * 
 * to make the search more efficient, we are going to manually cache the result in a state because a variable wont remember
 * these results when the component is rendered. So yeah, the state acts as a memory and has a structure of an object
 * allResults = { [currentSearchValue]: [...results] }. Assuming results has a type of an array.
 * spreading the results, because if it was mutated somewhere in the code then it will be mutated in the cache we created,
 * if we dont spreading. Also, it is okay to mutate the results object since its a value we just created from the response.
 * 
 */