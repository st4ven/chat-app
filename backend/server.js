import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth_routes.js";
import messageRoutes from "./routes/message_routes.js";
import userRoutes from "./routes/user_routes.js";

import connectToMongoDB from "./db/mongodb.js";
import { app, server } from './socket/socket.js';

const __dirname = path.resolve();
dotenv.config();

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

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// connect to the server and database
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});