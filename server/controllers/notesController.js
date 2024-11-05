import Note from "../models/notesModel.js";
import activityTracker from "../utils/activityTracker.js";

export const getNotes = async (req, res) => {
    try {

        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getIndividualNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(note);
        } catch (err) {
            res.status(500).json({ message: err.message });
            }
            }

export const newNote = async (req, res) => {
    try {
        const user = req.user._id;
        const { title, content } = req.body;
        const note = new Note({
            title,
            content,
            user
        });
        const newNote = await note.save();
        activityTracker(`created note "${newNote.title}"`, new Date(), req.user._id);
        res.json(newNote);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
}

export const updateNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedNote);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        await note.remove();
        res.json({ message: "Note deleted" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
}
