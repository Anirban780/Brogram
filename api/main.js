import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { dbString, apiPort } from "./config.js";

import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";

// express setup
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// non protected routes
app.use(authRouter);

app.use(function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "No credentials sent!" });
  }
  next();
});

// protected routes
app.use(postRouter);
app.use(userRouter);

// database connection
mongoose.connect(dbString)
.then(() => {
    console.log("connected to database");
    app.listen(apiPort, () => {
        console.log("API started on port " + apiPort);
    })
});
