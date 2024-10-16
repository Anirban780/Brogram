import { Post } from "../../models/Post.js";
import { User } from "../../models/User.js"; // Import the User model
import { verifyToken } from "../../util/token.js";

async function newPost(req) {
  // response sent back to the client
  let resStatus = 200;
  let resMessage = {};

  // verify that the user is authenticated
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const user = await verifyToken(token);
  if (user === null) {
    resStatus = 400;
    resMessage = { Error: "Not authenticated" };

    return { resStatus, resMessage };
  }

  // gets the input and checks for empty strings
  const { title, body } = req.body;

  if (title.trim() === "" || body.trim() === "") {
    resStatus = 400;
    resMessage = { Error: "Title or body is empty" };

    return { resStatus, resMessage };
  }

  try {
    // creates new post and saves to database
    const post = new Post({
      title,
      body,
      creator: user._id,
    });

    await post.save();

    // Find the user and update their postCount and posts array
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        $push: { posts: post._id }, // Add new post ID to the posts array
        $inc: { postCount: 1 }, // Increment the postCount by 1
      },
      { new: true } // Return the updated document
    );

    // Return the post created message along with the new post count
    resMessage = {
      Message: "Post created",
      Post: post,
      postCount: updatedUser.postCount, // Return updated post count
    };

    return {
      resStatus,
      resMessage,
    };
  } catch (err) {
    console.log(err);

    resStatus = 500;
    resMessage = { Message: "Internal server error" };
    return { resStatus, resMessage };
  }
}

export default newPost;
