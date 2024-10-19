import { Post, CommentSchema } from "../../models/Post.js";
import { verifyToken } from "../../util/token.js";

async function Comment(req) {
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

    const { postId } = req.params;
    const { comment } = req.body

    // check for empty comment
    if (comment.split(' ') === '') {
        resStatus = 400;
        resMessage = {"Message": "Comment cannot be empty."};
        
        return {resStatus,resMessage};
    }

    try {
        // find post in database
        const post = await Post.findOne({_id:postId});
        if (post === null) {
            resStatus = 400;
            resMessage = {"Error": "Post not found"};
            return {resStatus, resMessage};
        }

        // Create comment and save to the database
        post.comments.push({
            body: comment,
            creator: user._id
        });
        post.commentCount++;
        await post.save();

        resStatus = 200;
        resMessage = {"Message": "Comment posted"};
        return {resStatus, resMessage};
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Message": "Internal server error"};
    }
}

export default Comment;