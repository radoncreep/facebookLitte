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
            width={width || "60px"}
            height={height || "60px"}
            {...rest}
            onError={handleImageLoadError}
            borderRadius="50%"
        />
    )
}


function ProfileInitials({firstname, lastname, width, height}: Props) {
    const fnInitial = firstname.length > 0 ? firstname[0] : "";
    const lnInitial = lastname.length > 0 ? lastname[0] : "";

    return (
        <Center 
            bgColor={"lightgreen"}
            width={width || "60px"}
            height={height || "60px"}
            borderRadius="50%"
        >
            <Text color="#000" fontSize="20px" fontWeight="bold">
                {(fnInitial + lnInitial).toUpperCase()}
            </Text>
        </Center>
    )
}