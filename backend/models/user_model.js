import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic:{
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export default User;