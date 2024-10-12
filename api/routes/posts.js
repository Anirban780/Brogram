import express from "express";

import newPost from "../controllers/posts/NewPost.js";

const postRouter = express.Router();

postRouter.post("/posts/newpost", async (req,res) => {
    const { resStatus, resMessage } = await newPost(req);
    res.status(resStatus).json(resMessage);
})

export default postRouter;
