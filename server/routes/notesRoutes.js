import express from 'express';
import { getNotes, getIndividualNote, newNote, updateNote, deleteNote } from '../controllers/notesController.js';
import protect from '../middlewares/protect.js';

const router = express.Router();

router.get('/', protect, getNotes);
router.get('/:id', protect, getIndividualNote);
router.post('/', protect, newNote);
router.put('/:id', protect, updateNote);
router.delete('/:id', protect, deleteNote);

export default router;