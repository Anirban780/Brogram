import express from "express";

import getUser from "../controllers/users/GetUser.js";
import follow from "../controllers/users/Follow.js";

const userRouter = express.Router();

userRouter.post("/users/follow", async (req, res) => {
  const { resStatus, resMessage } = await follow(req);
  res.status(resStatus).json(resMessage);
});
userRouter.get("/users/:userId", async (req, res) => {
  const { resStatus, resMessage } = await getUser(req);
  res.status(resStatus).json(resMessage);
});

export default userRouter;
