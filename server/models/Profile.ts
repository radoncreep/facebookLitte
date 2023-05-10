import { Friend } from "./Friend";
import { Post } from "./Post";
import { User } from "./User";


export interface Profile extends User {
    friends: Friend[];
    posts: Post[],
}