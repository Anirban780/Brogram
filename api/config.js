import dotenv from "dotenv";
dotenv.config();

export const apiPort = process.env.PORT;
export const dbString = process.env.DB;
export const jwtSecret = process.env.JWT_SECRET;
