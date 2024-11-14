import express from 'express';
import { createTeam, deleteTeam, getAllTeams, getIndividualTeam, updateTeam } from '../controllers/teamController.js';
import protect from '../middlewares/protect.js';

const router = express.Router();

router.get('/', protect, getAllTeams);
router.get('/:id', protect, getIndividualTeam);
router.post('/', protect, createTeam);
router.put('/:id', protect, updateTeam);
router.delete('/:id', protect, deleteTeam);

export default router;