import { Image, ImageProps } from "@chakra-ui/image";
import { useState } from "react";
import { Center, Text } from "@chakra-ui/layout";


interface Props extends ImageProps {
    firstname: string;
    lastname: string;
}

export default function ProfileAvatar({src, width, height, firstname, lastname, ...rest}: Props) {
    const [loadInitials, setLoadInitials] = useState<boolean>(false);

    if (!src || src?.length || loadInitials) {
        return (
            <ProfileInitials 
                width={width} 
                height={height}
                firstname={firstname}
                lastname={lastname}
            />
        )
    }

    return (
        <Image 
            src={src}
            width={width || "150px"}
            height={height || "150px"}
            {...rest}
            onError={() => setLoadInitials(true)}
        />
    )
}


function ProfileInitials({firstname, lastname, width, height}: Props) {

    return (
        <Center 
            bgColor={"green"}
            width={width || "150px"}
            height={height || "150px"}
        >
            <Text color="#000" fontSize="30">
                {firstname[0].toUpperCase() + " " + lastname[0].toUpperCase()}
            </Text>
        </Center>
    )
}