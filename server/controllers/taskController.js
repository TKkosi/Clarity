import Task from "../models/taskModel.js";

export const getAllTasks = async() => {
    const allTasks = await Task.find({user:req.user._id});
    res.status(200).json({allTasks});
};
export const newTask = async (req, res) => {
  try {
    const { title, description, dueDate, status, priority } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTask = Task.create({
      title,
      description,
      dueDate,
      status,
      priority,
      user: req.user._id,
    });

    console.log(newTask);
    res.status(201).json({message:"Task created"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateTask = () => {};
export const deleteTask = () => {};
export const getIndividualTask = () => {
    
};
