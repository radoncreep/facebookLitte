

export const getPostsValidation = () => {

}

export const getPostValidation = (postId: unknown): string | Error => {
    if (typeof postId === "string") return postId;

    if (typeof postId === "number") return postId.toString();

    throw new Error("Request Error: Invalid Input Type");
}