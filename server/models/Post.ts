import { Media } from "./Media";
import { Profile } from "./Profile";
import { User } from "./User";


export interface Post {
    id: string;
    user: User;
    createdAt: Date;
    mediaType: Media | Media[];
    tags: Profile[];
    likes: Profile[];
    comments: Profile[];
    shares: number;
    loves: Profile[];
}