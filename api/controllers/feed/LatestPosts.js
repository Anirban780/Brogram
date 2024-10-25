import { Post } from "../../models/Post.js";

async function LatestPosts(req) {
    let resStatus = 200;
    let resMessage = {};

    try {
        const posts = await Post.find().limit(25);
        resMessage = {"Posts": posts};
        return {resStatus,resMessage};
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = { Message: "Internal server error" };
    }
}

export default LatestPosts;