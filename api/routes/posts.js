import express from "express";

import newPost from "../controllers/posts/NewPost.js";
import likePost from "../controllers/posts/LikePost.js";
import deletePost from "../controllers/posts/DeletePost.js";
import comment from "../controllers/posts/Comment.js";
import deleteComment from "../controllers/posts/DeleteComment.js";

const postRouter = express.Router();

postRouter.post("/posts", async (req, res) => {
    const { resStatus, resMessage } = await newPost(req);
    res.status(resStatus).json(resMessage);
});

postRouter.post("/posts/:postId/like", async (req, res) => {
    const { resStatus, resMessage } = await likePost(req);
    res.status(resStatus).json(resMessage);
});

postRouter.delete("/posts/:postId", async (req, res) => {
    const {resStatus, resMessage} = await deletePost(req);
    res.status(resStatus).json(resMessage);
});

postRouter.post("/posts/:postId/comments", async (req, res) => {
    const { resStatus, resMessage } = await comment(req);
    res.status(resStatus).json(resMessage);
});

postRouter.delete("/posts/:postId/comments/:commentId", async (req, res) => {
    const {resStatus, resMessage} = await deleteComment(req);
    res.status(resStatus).json(resMessage);
});

export default postRouter;