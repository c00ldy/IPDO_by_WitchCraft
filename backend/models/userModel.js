import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
        lowercase: true, // Automatically convert email to lowercase
    },
    password: {
        type: String,
        required: true,
    },
}, { minimize: false });

const userModel = mongoose.model("users", userSchema); // Correct syntax for mongoose.model
export default userModel;
