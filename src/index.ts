import Express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import marketRouter from "./routes/marketRoutes";

const app = Express();
dotenv.config();
connectDB();

app.use("/api/v1", marketRouter);

app.listen(process.env.PORT as string, () => {
    console.log(`Server is running on port ${process.env.PORT as string}`);
})