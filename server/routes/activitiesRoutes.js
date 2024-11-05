import express from 'express';
import { getActivities} from '../controllers/activitiesController.js';
import protect from '../middlewares/protect.js';

const router = express.Router();

router.get('/', protect, getActivities);
// router.get('/:id', protect, getIndividualActivity);
// router.post('/', protect, newActivity);
// router.put('/:id', protect, updateActivity);
// router.delete('/:id', protect, deleteActivity);

export default router;