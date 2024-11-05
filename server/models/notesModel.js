import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true  
        },
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true,
            default: Date.now()
        },        
        user: { 
            type: String,
            required: true 
        }
    }
);

const Note = mongoose.model("notes", NoteSchema);

export default Note;
