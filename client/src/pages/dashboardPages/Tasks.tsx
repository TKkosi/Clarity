import { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard"
import api from "../../utils/api"

const Tasks = () => {
  interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    priority: string;
  }
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: '',
    dueDate: new Date(),
  });

   // Handle form input change
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!newTask.title || !newTask.description || !newTask.priority) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await api.post('/tasks', newTask);
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '', priority: '', dueDate: new Date()});
    } catch (error) {
      console.error('Error adding Task:', error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get(`/tasks`);
        console.log(response.data);        
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  },[]);

  

  return (
    <div className="p-2 ">
      <div className='flex items-center justify-between font-mono'>
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <button onClick={() => setShowAddTasks(!showAddTasks)} className="px-4 py-2 bg-emerald-800 text-white rounded-lg font-medium hover:bg-emerald-500 transition">{showAddTasks ? "X  " : "Add Task"}</button>
      </div> 

  {showAddTasks &&
      <div>
        <form onSubmit={handleSubmit} className="font-mono p-3 border-2 border-emerald-800 rounded-xl absolute w-[79%] bg-gray-100 ">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Task</label>
            <input
              type="text"
              name="title" 
              className="mt-2 p-2 w-full border rounded-lg"
              onChange={handleInputChange} 
              placeholder="Task title"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              className="mt-2 p-2 w-full border rounded-lg"
              placeholder="Task description"
              rows={4}
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Due Date</label>
            <input
              type="date"
              name="dueDate"
              className="mt-2 p-2 w-full border rounded-lg"
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Priority</label>
            <select
              name="priority"
              className="mt-2 p-2 w-full border rounded-lg"
              onChange={handleInputChange} 
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-emerald-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
              submit
          </button>
        </form>
      </div>
  }

      <div className="flex flex-row flex-wrap gap-4">
      {
        tasks &&  
        tasks.map((task, index) => (
          <TaskCard 
          key={index}
          id={task._id} 
          title={task.title} 
          description={task.description} 
          dueDate={task.dueDate} 
          status={task.status} 
          priority={task.priority} 
          />
        ))
      }
      </div>
    </div>
  )
}

export default Tasks