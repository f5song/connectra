import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from '@/router/auth';
import userRoute from '@/router/user';
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())

app.use("/user", userRoute);

app.use("/auth", authRoute);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});