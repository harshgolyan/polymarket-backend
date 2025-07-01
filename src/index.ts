import Express from "express";
import dotenv from "dotenv";
import connectDB from "./db";

const app = Express();
dotenv.config();
connectDB();

app.listen(process.env.PORT as string, () => {
    console.log(`Server is running on port ${process.env.PORT as string}`);
})