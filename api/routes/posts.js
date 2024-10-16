import express from "express";

import newPost from "../controllers/posts/NewPost.js";
import likePost from "../controllers/posts/LikePost.js";
import deletePost from "../controllers/posts/DeletePost.js";
import comment from "../controllers/posts/Comment.js";
import deleteComment from "../controllers/posts/DeleteComment.js";

const postRouter = express.Router();

postRouter.post("/posts/newpost", async (req,res) => {
    const { resStatus, resMessage } = await newPost(req);
    res.status(resStatus).json(resMessage);
});

postRouter.post("/posts/likepost", async (req,res) => {
    const { resStatus, resMessage } = await likePost(req);
    res.status(resStatus).json(resMessage);
});

postRouter.post("/posts/deletepost", async (req,res) => {
    const {resStatus, resMessage} = await deletePost(req);
    res.status(resStatus).json(resMessage);
});

postRouter.post("/posts/comment", async (req, res) => {
    const {resStatus, resMessage} = await comment(req);
    res.status(resStatus).json(resMessage);
});

postRouter.post("/posts/deletecomment", async (req, res) => {
    const {resStatus, resMessage} = await deleteComment(req);
    res.status(resStatus).json(resMessage);
})

export default postRouter;