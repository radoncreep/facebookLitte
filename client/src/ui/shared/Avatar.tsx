import { Avatar, AvatarProps } from "@chakra-ui/react";

interface Props extends AvatarProps {
    onClick: () => void; // optional arg
    firstname?: string;
    lastname?: string;
}

export default function ProfileAvatar({ size, src, onClick, firstname, lastname }: Props) {

    return (
        <Avatar src={src} size={size} onClick={onClick} name={firstname + " " + lastname}/>
    )
}