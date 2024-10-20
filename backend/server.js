import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth_routes.js";
import messageRoutes from "./routes/message_routes.js";
import userRoutes from "./routes/user_routes.js";

import connectToMongoDB from "./db/mongodb.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// parse the incoming requests
app.use(express.json());
app.use(cookieParser());
// get the signin, login, and logout endpoints
app.use("/api/auth", authRoutes);

// get the messages endpoint
app.use("/api/messages", messageRoutes);

// get the users endpoint
app.use("/api/users", userRoutes);

// connect to the server and database
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});