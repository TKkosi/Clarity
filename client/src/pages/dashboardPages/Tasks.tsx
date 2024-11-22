import { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard"
import api from "../../utils/api"
import Loader from "../../components/Loader";

const Tasks: React.FC<{ childPage: (page: string) => void }> = ({ childPage }) => {
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
  const [loading, setLoading] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'high',
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
      await api.post('/tasks', newTask);
      window.location.reload();
    } catch (error) {
      console.error('Error adding Task:', error);
    }
  };

  useEffect(() => {
    console.log(process.env.NODE_ENV);
    childPage(""); 
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/tasks`);
        console.log(response.data);        
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
      finally{
        setLoading(false);
        }
    };
    fetchTasks();
  }, [childPage]);

  

  return (
    <div className="p-2 bg-gradient-to-b from-blue-200 to-purple-200 h-full flex flex-col">
      {loading && <Loader/>}
      <div className='flex items-center justify-between font-mono min-h-20'>
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

<div className='grid grid-cols-4 gap-4 w-full [&::-webkit-scrollbar]:hidden h-full overflow-y-scroll'>
{
        tasks?.length?  
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
        )):
        <div>You do not have any tasks at the moment</div>
      }
      </div>
    </div>
  )
}

export default Tasks