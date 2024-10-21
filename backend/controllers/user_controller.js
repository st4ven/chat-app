import User from "../models/user_model.js";

/// Handles getting all users in the database (except the logged in user) for the sidebar
export const getUsersForSidebar = async (req, res) => {
    try {
        // get the current logged in user
        const loggedInUserId = req.user._id;

        // get all users but filter out the current logged in user
        // we also do not want to return the email or password of all other users
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password -email");

        // return the users as a response
        res.status(200).json(filteredUsers);
    } catch (error) {
        // return an error message if we could not get the users
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error"});
    }
}