import express from 'express'
import { deleteTask, getAllTasks, getIndividualTask, newTask, updateTask } from '../controllers/taskController.js'
import protect from '../middlewares/protect.js'

const router = express.Router()

router.get('/', protect, getAllTasks)
router.post('/',protect, newTask)
router.get('/:id', protect, getIndividualTask)
router.put('/:id', protect,updateTask)
router.delete('/:id', protect, deleteTask)
export default router