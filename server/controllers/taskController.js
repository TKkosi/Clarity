import Task from "../models/taskModel.js";
import activityTracker from "../utils/activityTracker.js";

export const getAllTasks = async( req,res) => {
    const allTasks = await Task.find({user:req.user._id});
    res.status(200).json(allTasks);
};

export const newTask = async (req, res) => {
    try {
    const { title, description, dueDate, status, priority } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }
    const newTask = await Task.create({
        title,
        description,
        dueDate,
        status,
        priority,
        user: req.user._id,
    });

    console.log(newTask);
    activityTracker(`created task "${newTask.title}"`, new Date(), req.user._id);

    res.status(201).json({message:"Task created"});
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req,res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        const { title, description, dueDate, status, priority } = req.body;
        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
        task.status = status || task.status;
        task.priority = priority || task.priority;
        await task.save();
        res.status(200).json({ message: "Task updated" });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

export const deleteTask = async (req,res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    console.log(task);
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
};

export const getIndividualTask = async  (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ task });
};
