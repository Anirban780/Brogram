import express from "express";

import follow from "../controllers/users/Follow.js";

const userRouter = express.Router();

userRouter.post("/users/follow", async (req,res) => {
    const {resStatus , resMessage} = await follow(req);
    res.status(resStatus).json(resMessage);
})

export default userRouter;