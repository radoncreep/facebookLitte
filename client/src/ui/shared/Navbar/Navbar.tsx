import { Fragment, useEffect, useState } from "react";
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Image  } from "@chakra-ui/image";

import { AppLogo } from "../Icons";
import { results } from "../../../lib/searchResults";

type People = {
    id: string;
    firstname: string;
    lastname: string;
    avatar: string;
}

export default function Navbar() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchCache, setSearchCache] = useState<Record<typeof searchValue, People[]>>({"aaron": results }); 
    const [allResults, setAllResults] = useState<typeof results | null>(results);

    let currentResult: number = allResults ? allResults.length - 1 : -1;

    useEffect(() => {
        let searchQueryTimer = setTimeout(() => {
            handleSearch(searchValue.trim());
        }, 1000);
        
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

        setAllResults([response]);
        setIsLoading(false);
    }

    let feedback: JSX.Element = <></>;

    if (isLoading) {
        feedback = <Text color={"#fff"}>Loading...</Text>
    } else if(!isLoading && allResults) {
        feedback = <SearchFeedback results={allResults}  />
    } else {
        feedback = <Text color={"#fff"}>No results...</Text>
    }
    
    return (
        <Container >
            <HStack >
                <AppLogo />

                <Box>
                    <Input 
                        value={searchValue}  
                        onChange={handleChange}
                    />
                </Box>
            </HStack>

            {feedback}
        </Container>
    )
}

interface SearchFeedbackProps {
    results: People[] | null;
}

function SearchFeedback({results}: SearchFeedbackProps) {

    if (results === null || results.length === 0) {
        return (
            <Text color={"#fff"}>No results...</Text>
        )
    }

    return (
        <Container maxW="lg">
            {results.map((res) => (
                <Fragment key={res.id}>
                    <Flex justify="space-between" alignItems="center" height={20} mb={4}>
                        <Text color={"#fff"} key={res.id}>{res.firstname} {res.lastname}</Text>

                        <Image 
                            src={res.avatar} 
                            alt={`An image of ${res.firstname} ${res.lastname}`}
                            boxSize={20}
                            borderRadius="50%"
                        />
                        {/* <Avatar size="3xs" src={res.avatar} name={res.firstname + " " + res.lastname} /> */}
                    </Flex>
                </Fragment>
            ))}
        </Container>
    )
}

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