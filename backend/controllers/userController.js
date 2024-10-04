import userModel from '../models/userModel.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: "Email and Password are required." });
    }

    const normalizedEmail = email.toLowerCase();

    try {
        const user = await userModel.findOne({ email: normalizedEmail });
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password." });
        }

        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error during login:", error);
        res.json({ success: false, message: "Error" });
    }
};

const createToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET,{expiresIn:'1d'});
};

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    const normalizedEmail = email.toLowerCase();

    try {
        const exists = await userModel.findOne({ email: normalizedEmail });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(normalizedEmail)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email: normalizedEmail,
            password: hashedPassword,
        });
        console.log("New user being created: ");

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { loginUser, registerUser };
