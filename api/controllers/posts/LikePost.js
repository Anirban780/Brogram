import { Post, LikeSchema } from "../../models/Post.js";

async function likePost(req) {
    let resStatus = 200;
    let resMessage = {};

    const { postId } = req.params;

    try {
        // fetch the post from the database
        const post = await Post.findById(postId);
        if (post === null) {
            resStatus = 404;
            resMessage = {"Error": "Post not found."};
            return {resStatus, resMessage};
        }

        // check if user has already liked the post
        const likes = post.likes;
        let postLiked = false;
        let likeId;

        if (post.likeCount !== 0) {
            let x = 0;

            while (x !== post.likeCount) {
                if (likes[x].creator.equals(req.user._id)) {
                    postLiked = true;
                    likeId = likes[x]._id;
                }
                x++;
            }
        }

        // if user liked post. Deletes like, if not creates a new like.
        if (postLiked) {
            const y = post.likes.id(likeId);
            post.likeCount--;
            y.deleteOne();

            resMessage = {"Message": "Removed like"};
        } else {
            post.likes.push({
                creator: req.user._id 
            });
            post.likeCount++;

            resMessage = {"Message": "Liked post"};
        }

        // save changes to database and return data to client
        await post.save();
        return {
            resStatus, 
            resMessage
        };

    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Error": "Internal server error"};
        return {resStatus,resMessage};
    }
}

export default likePost;
