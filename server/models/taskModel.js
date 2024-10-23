import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true , "Please provide a name for the task"],
            unique: true
        },
        description: {
            type: String,
            default:"No description"
        },
        dueDate:{
            type: Date,
            default: Date.now()
        },
        status: {
            type: String,
            required: [true , "Please provide the status of the task"],
            enum: ["active", "inactive", "completed"],
            default: "active"
        },
        priority: {
            type: String,
            required: [true , "Please provide the priority of the task"],
            enum: ["low", "medium", "high"],
            default: "low"
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "users",
            required: true
        }
    },
    {
        timestamps: true
    })

const Task = mongoose.model("tasks", TaskSchema);

export default Task;