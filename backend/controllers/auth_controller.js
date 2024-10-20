import bcrypt from "bcryptjs";
import User from "../models/user_model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

/// Handles the signup endpoint
export const signup = async (req, res) => {
    try {
        // get the user data from the request
        const { firstName, lastName, username, password, confirmPassword, gender, email } = req.body;

        // check that the passwords match as expected
        if (password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"});
        }

        // check for duplicate emails or usernames
        const user = await User.findOne({username});
        const checkEmail = await User.findOne({email});

        // if email already exists, return the error message
        if (checkEmail) {
            return res.status(400).json({error:"Email already exists"});
        }

        // if the username already exists, return the error message
        if (user) {
            return res.status(400).json({error:"Username already exists"});
        }

        // hash the password for security purposes
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // get the profile picture from the API
        const profilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

        // create a new user with the data
        const newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            gender,
            email,
            profilePic
        })

        // if the new user was created successfully
        if (newUser) {
            // generate a JWT token and set the cookie
            generateTokenAndSetCookie(newUser._id, res);

            // save the user
            await newUser.save();

            // return a success message
            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                username: newUser.username
            });
        } else {
            // return an error message if the user was not created successfully
            res.status(400).json({error:"Invalid user data"});
        }

    } catch (error) {
        // return an error message if there was an error while signing up
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

/// Handles the login endpoint
export const login = async (req, res) => {
    try {
        // get the user data from the request
        const {username, password} = req.body;
        
        // find the user in the database
        const user = await User.findOne({username});

        // check that the passwords match
        // have to decrypt the password
        const checkPassword = await bcrypt.compare(password, user?.password || "");

        // if the user did not exist
        // or if the passwords did not match
        // return an error message
        if (!user || !checkPassword) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        // generate a JWT token and set the cookie
        generateTokenAndSetCookie(user._id, res);

        // return a success messsage
        res.status(201).json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username
            });
    } catch (error) {
        // return an error message if there was an error while logging in
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const logout = async (req, res) => {
    try {
        // reset the cookie
        res.cookie("jwt","", {maxAge:0});

        // return a success message if we were able to logout
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        // return an error message if we weren't able to logout
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}