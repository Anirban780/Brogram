import { Post, CommentSchema } from "../../models/Post.js";

async function Comment(req) {
    let resStatus = 201;
    let resMessage = {};

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
            resStatus = 404;
            resMessage = {"Error": "Post not found"};
            return {resStatus, resMessage};
        }

        // Create comment and save to the database
        post.comments.push({
            body: comment,
            creator: req.user._id
        });
        post.commentCount++;
        await post.save();

        resMessage = {"Message": "Comment posted"};
        return {resStatus, resMessage};
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Message": "Internal server error"};
    }
}

export default Comment;