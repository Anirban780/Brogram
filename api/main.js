import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { dbString, apiPort } from "./config.js";
import authRouter from "./routes/auth.js";

// express setup 
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use(authRouter);

// database connection
mongoose.connect(dbString)
.then(() => {
    console.log("connected to database");
    app.listen(apiPort, () => {
        console.log("API started on port " + apiPort);
    })
});
