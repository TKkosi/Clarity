import { useState } from 'react'
import api from '../utils/api';

interface TaskCardProps {
  id: string;  
  title: string;
    description: string;
    dueDate: Date ;
    status: string;
    priority: string;
}
function TaskCard({id, title,description,dueDate,status,priority }:TaskCardProps) {
    const [showModal, setShowModal] = useState(false);

    const Edit = () => {
        console.log("Edit Task")
    }
    const handleDeleteClick = () => {
      setShowModal(true);
    };
    const handleConfirmDelete = async() => {
      // onDelete(item.id); // Calls the parent delete function
      try {
        await api.delete(`/tasks/${id}`);
        console.log("deleted task");
        
      } catch (error) {
        console.log(error);
      }

      setShowModal(false);
    };

  return (
    <div className="bg-white p-4 mx-5 rounded-lg shadow-md border-2 border-emerald-800 max-w-sm font-mono">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="flex gap-3">
            <p className="text-xs text-gray-400 mt-2">Due Date: {dueDate}</p>
            <p className="text-xs text-gray-400 mt-2">Status: {status}</p>
            <p className="text-xs text-gray-400 mt-2">Priority: {priority}</p>
        </div>
        <div className="p-2 flex flex-col ">
            <button className="bg-emerald-800 text-white font-semibold px-2 py-1 rounded-md mt-2" onClick={Edit}>Edit</button>                 
            <button className="bg-red-500 text-white font-semibold px-2 py-1 rounded-md mt-2" onClick={handleDeleteClick}>Delete</button>
        </div>

        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h4 className="text-lg font-semibold">Confirm Deletion</h4>
            <p className="mt-2 text-gray-700">Are you sure you want to delete this item?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={()=>setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskCard
