import { useState } from "react";
import api from "../utils/api";

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  date: string | number | Date;
}

function NoteCard({ id, title, content, date }: NoteCardProps) {
  const [showModal, setShowModal] = useState(false);
  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleConfirmDelete = async() => {
    try {
      await api.delete(`/notes/${id}`);
      console.log("deleted notes");
      window.location.reload();
      
    } catch (error) {
      console.log(error);
    }

    setShowModal(false);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditClick = () => {
    setShowEditModal(true);
  }
  const handleCloseModal = () => {
    setShowEditModal(false);
  }
  const handleConfirmEdit = async() => {
    try {
      await api.put(`/notes/${id}`, {
        title: editedTitle,
        description: editedContent
      });
      console.log("edited notes");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setShowEditModal(false);
  }
  return (
    <div>
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 font-mono mx-5 border-2 border-emerald-800">
      <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
      <p className="text-gray-600 mt-2 line-clamp-2">{content}</p>
      <p className="text-gray-400 text-sm mt-4">{new Date(date).toDateString()}</p>
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
            <h4 className="text-lg font-semibold">Edit Notes</h4>
            
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
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
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
    </div>
  );
}

export default NoteCard;
