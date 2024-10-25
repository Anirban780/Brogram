import express from "express";

import LatestPosts from "../controllers/feed/LatestPosts.js";

const feedRouter = express.Router();

feedRouter.get("/feed/getlatest", async (req,res) => {
    const {resStatus, resMessage} = await LatestPosts(req);
    res.status(resStatus).json(resMessage);
});

export default feedRouter;