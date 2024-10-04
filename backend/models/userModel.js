import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true, 
    },
    password: {
        type: String,
        required: true,
    },
}, { minimize: false });

const userModel = mongoose.model("users", userSchema); // Correct syntax for mongoose.model
export default userModel;
