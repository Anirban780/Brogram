import { Post } from "../../models/Post.js";
import { verifyToken } from "../../util/token.js";

async function deletePost(req) {
    let resStatus = 200;
    let resMessage = {};

   
    // verify that the user is authenticated
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const user = await verifyToken(token);
    if (user === null) {
        resStatus = 400;
        resMessage = {"Error": "Not authenticated"};

        return { resStatus, resMessage };
    }

    const { postId } = req.body;

    try {
        const post = await Post.findOne({_id: postId});
        if (post === null) {
            resStatus = 400;
            resMessage = {"Error": "Post not found."};

            return {resStatus, resMessage};
        }

        if (!user._id.equals(post.creator)) {
            resStatus = 400;
            resMessage = {"Error": "Not authorized."};

            return {resStatus, resMessage};
        }

        await post.deleteOne();
        resStatus = 200;
        resMessage = {"Message": "Post deleted."};

        return {resStatus, resMessage};
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Message": "Internal server error."};
        return {resStatus, resMessage};
    }

}

export default deletePost;
