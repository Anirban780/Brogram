import { Post, CommentSchema } from "../../models/Post.js";
import { verifyToken } from "../../util/token.js";

async function DeleteComment(req) {
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

    const { postId, commentId } = req.params;

    try {
        // find post in database
        const post = await Post.findOne({_id: postId});
        if (post === null) {
            resStatus = 400;
            resMessage = {"Error": "Post not found."};
            return {resStatus, resMessage};
        }

        // find the comment and check if the user posted the comment
        const comment = post.comments.id(commentId);
        if (comment === null) {
            resStatus = 400;
            resMessage = {"Error": "Comment not found"};
            return {resStatus, resMessage};
        }

        if (!comment.creator.equals(user._id)) {
            resStatus = 400;
            resMessage = {"Error": "Not authorized"};
            return {resStatus, resMessage};
        }

        // delete the comment and save changes
        comment.deleteOne();
        post.commentCount--;
        await post.save();

        resStatus = 200;
        resMessage = {"Message": "Comment deleted"};
        return {resStatus, resMessage};
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Message": "Internal server error"};
    }
}

export default DeleteComment;