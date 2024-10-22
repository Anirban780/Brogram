import express from "express";

import signup from "../controllers/auth/Signup.js";
import login from "../controllers/auth/Login.js";

const authRouter = express.Router();

// signup route
authRouter.post("/auth/signup", async (req, res) => {
    const { resStatus, resMessage } = await signup(req);
    res.status(resStatus).json(resMessage);
});

authRouter.post("/auth/login", async (req, res) => {
    const { resStatus, resMessage } = await login(req);
    res.status(resStatus).json(resMessage);
});

export default authRouter;
