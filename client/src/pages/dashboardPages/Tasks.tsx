import { useEffect } from "react";
import TaskCard from "../../components/TaskCard"
import api from "../../utils/api"

const Tasks = () => {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get(`/notes`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="p-2 ">
      <form action="" className="font-mono p-3 border-2 border-emerald-800 rounded-xl">
      <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Task</label>
          <input
            type="text"
            name="title" 
            className="mt-2 p-2 w-full border rounded-lg" 
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
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Priority</label>
          <select
            name="priority"
            className="mt-2 p-2 w-full border rounded-lg"
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
        <TaskCard 
          title="Sample Task" 
          description="This is a sample task description." 
          dueDate={new Date()} 
          status="pending" 
          priority="high" 
        />
    </div>
  )
}

export default Tasks