import { Post } from "../../models/Post.js";
import { User } from "../../models/User.js";

async function deletePost(req) {
  let resStatus = 200;
  let resMessage = {};

  const { postId } = req.params;

  try {
    // find post in database
    const post = await Post.findOne({ _id: postId });
    if (post === null) {
      resStatus = 404;
      resMessage = { Error: "Post not found." };

      return { resStatus, resMessage };
    }

    // checks if authenticated user is the creator of the post
    if (!req.user._id.equals(post.creator)) {
      resStatus = 403;
      resMessage = { Error: "Not authorized." };

      return { resStatus, resMessage };
    }

    // deletes post
    await post.deleteOne();

    // find the user and update the postCount and posts array
    const getUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { posts: postId }, // Remove post from user's posts array
        $inc: { postCount: -1 }, // Decrement the postCount by 1
      },
      { new: true }
    );

    resMessage = { Message: "Post deleted.", postCount: getUser.postCount };

    return { resStatus, resMessage };
  } catch (err) {
    console.log(err);
    resStatus = 500;
    resMessage = { Message: "Internal server error." };
    return { resStatus, resMessage };
  }
}

export default deletePost;
