import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const registerUser = async (req, res) => {
    try {
    const { name, email, password, avatar } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        name,
        email,
        password:hashedPassword,
        avatar,
        role:"user",
    });
    console.log(newUser);
    res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    const isPasswordCorrect  = await bcrypt.compare(password, user?.password || "");
    if (!user ||!isPasswordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const token = JWT.sign({id:user._id}, process.env.JWT_SECRET)

    res.json({ token });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req,res) => {
    try{
        res.json(req.user);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

export const updateUser = async (req, res) => {
    try {
        const userDetails = req.user
        const { name, password, email, avatar } = req.body;
        userDetails.name = name || userDetails.name;
        userDetails.password = password || userDetails.password;
        userDetails.email = email || userDetails.email;
        userDetails.avatar = avatar || userDetails.avatar;
        await userDetails.save();
        res.status(200).json({ message: "User updated" });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};
