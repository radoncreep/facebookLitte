import { Image, ImageProps } from "@chakra-ui/image";
import { useState } from "react";
import { Center, Text } from "@chakra-ui/layout";


interface Props extends ImageProps {
    firstname: string;
    lastname: string;
}

export default function ProfileAvatar({src, width, height, firstname, lastname, ...rest}: Props) {
    const [loadInitials, setLoadInitials] = useState<boolean>(false);

    if (!src || src?.length < 0 || loadInitials) {
        return (
            <ProfileInitials 
                width={width} 
                height={height}
                firstname={firstname}
                lastname={lastname}
            />
        )
    }

    function handleImageLoadError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
        // if the image load is broken // request for another // check for image load failsafe
        if (e.type === "error") {
            setLoadInitials(true);
        }
    }

    return (
        <Image 
            src={src}
            width={width || "150px"}
            height={height || "150px"}
            {...rest}
            onError={handleImageLoadError}
            borderRadius="50%"
        />
    )
}


function ProfileInitials({firstname, lastname, width, height}: Props) {

    return (
        <Center 
            bgColor={"lightgreen"}
            width={width || "150px"}
            height={height || "150px"}
            borderRadius="50%"
        >
            <Text color="#000" fontSize={"18px"} fontWeight="bold">
                {firstname[0].toUpperCase() + lastname[0].toUpperCase()}
            </Text>
        </Center>
    )
}