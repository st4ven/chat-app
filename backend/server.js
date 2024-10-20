import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth_routes.js";
import connectToMongoDB from "./db/mongodb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// parse the incoming requests
app.use(express.json());

// get the signin, login, and logout endpoints
app.use("/api/auth", authRoutes);

// connect to the server and database
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});