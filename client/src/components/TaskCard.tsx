import {  useState } from 'react'
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
    dueDate= new Date(dueDate)
    const handleDeleteClick = () => {
      setShowModal(true);
    };
    const handleConfirmDelete = async() => {
      try {
        await api.delete(`/tasks/${id}`);
        console.log("deleted task");
        
      } catch (error) {
        console.log(error);
      }

      setShowModal(false);
    };

    const [showEditModal, setShowEditModal] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleEditClick = () => {
      setShowEditModal(true);
    }
    const handleCloseModal = () => {
      setShowEditModal(false);
    }
    const handleConfirmEdit = async() => {
      try {
        await api.put(`/tasks/${id}`, {
          title: editedTitle,
          description: editedDescription
        });
        console.log("edited task");
        
      } catch (error) {
        console.log(error);
      }
      setShowEditModal(false);
    }

  return (
    <div className="bg-white p-4 mx-5 rounded-lg shadow-md border-2 border-emerald-800 max-w-sm font-mono">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="flex gap-3">
            <p className="text-xs text-gray-400 mt-2">Due Date: {dueDate.getDate()} {dueDate.getMonth()} {dueDate.getFullYear()}</p>
            <p className="text-xs text-gray-400 mt-2">Status: {status}</p>
            <p className="text-xs text-gray-400 mt-2">Priority: {priority}</p>
        </div>
        <div className="p-2 flex flex-col ">
            <button className="bg-emerald-800 text-white font-semibold px-2 py-1 rounded-md mt-2" onClick={handleEditClick}>Edit</button>                 
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

{showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 font-mono">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h4 className="text-lg font-semibold">Edit Task</h4>
            
            <label className="block mt-2">
              <span className="text-gray-700">Title</span>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded"
              />
            </label>
            
            <label className="block mt-4">
              <span className="text-gray-700">Description</span>
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded"
              />
            </label>
            
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmEdit}
                className="bg-emerald-800 text-white px-3 py-1 rounded hover:bg-emerald-400"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default TaskCard
