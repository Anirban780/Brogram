import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { dbString, apiPort } from "./config.js";

// express setup 
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(dbString)
.then(() => {
    console.log("connected to database");
    app.listen(apiPort, () => {
        console.log("API started on port " + apiPort);
    })
});
