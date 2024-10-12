import { Post } from "../../models/Post.js";
import { verifyToken } from "../../util/token.js";

async function newPost(req) {
    // response sent back to the client
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

    // gets the input and checks for empty strings
    const { title, body } = req.body;

    if (title.split(' ') === "" || body.split(' ') === "") {
        resStatus = 400;
        resMessage = {"Error", "Title or body is empty"};
        
        return { resStatus, resMessage };
    }

    try {
        // creates new post and saves to database
        const post = new Post({
            title,
            body,
            creator: user._id
        });

        await post.save();
        resMessage = {"Message": "Post created", "Post": post};
        
        return {
            resStatus,
            resMessage
        };

    } catch (err) {
        console.log(err);

        resStatus = 500;
        resMessage = {"Message": "Internal server error"};
        return {resStatus, resMessage};
    }
}

export default newPost;
