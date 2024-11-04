import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true
        },
        description: { 
            type: String, 
            required: true 
        },
        status: { 
            type: String, 
            required: true 
        },
        date: { 
            type: Date, 
            required: true 
        },
        userId: { 
            type: String, 
            required: true 
        }
    },
    {
        timestamps: true
    }
);

const Activity = mongoose.model("activities", ActivitySchema);

export default Activity;