import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { createServer } from "http";
import AutRoute from "./routes/auth.routes"
import UserRoute from "./routes/user.routes"
import cookieParser from "cookie-parser";
import {initializeSocket} from "./sockets";
dotenv.config();
const app = express();
const server = createServer(app);


app.use(cors());
app.use(cookieParser())
app.use(helmet());
app.use(express.json());
app.use("/api/auth", AutRoute);
app.use("/api/user", UserRoute);

initializeSocket(server)

export {app,server};
