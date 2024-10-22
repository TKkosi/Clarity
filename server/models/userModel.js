import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true , "Please provide your name"]
        },
        email: {
            type: String,
            required: [true , "Please provide an email"] ,
            unique: true,
            match: [
                /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                "Please provide a valid email"
            ]
        },
        password: {
            type: String,
            required: [true , "Please provide password"]
        },
        avatar: {
            type: String,
            default: "https://www.gravatar.com/avatar/anything?s=200&d=mm"
        },
        bio:{
            type: String,
            default: "I am a new user"
        },
        role: {
            type: String,
            required: true,
            enum: ["user", "admin", "superadmin"],
            default: "user"
        }
        // resetPasswordToken: String,
        // resetPasswordExpire: Date,  
    },
    {
        timestamps: true
    })