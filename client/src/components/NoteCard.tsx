import { useState } from "react";
import api from "../utils/api";

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  date: string | number | Date;
}

function NoteCard({ id, title, content, date }: NoteCardProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  // DELETE HANDLER
  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/notes/${id}`);
      console.log("Note deleted successfully");
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error("Error deleting note:", error);
    }
    setShowDeleteModal(false);
  };

  // EDIT HANDLER
  const handleConfirmEdit = async () => {
    try {
      await api.put(`/notes/${id}`, {
        title: editedTitle,
        content: editedContent,
      });
      console.log("Note updated successfully");
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error("Error updating note:", error);
    }
    setShowEditModal(false);
  };

  return (
    <div>
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 font-mono mx-5 border-2 border-emerald-800">
      {/* Note Card */}
      <div onClick={() => setShowNoteModal(true)} className="cursor-pointer">
        <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
        <p className="text-gray-600 mt-2 line-clamp-2">{content}</p>
        <p className="text-gray-400 text-sm mt-4">{new Date(date).toDateString()}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col p-2 ">
        <button className="bg-emerald-800 text-white font-semibold px-2 py-1 rounded-md hover:bg-emerald-500 transition mt-2" onClick={() => setShowEditModal(true)}>Edit</button>
        <button className="bg-red-500 text-white font-semibold px-2 py-1 rounded-md hover:bg-red-400 transition mt-2" onClick={() => setShowDeleteModal(true)}>Delete</button>
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h4 className="text-lg font-semibold">Confirm Deletion</h4>
            <p className="mt-2 text-gray-700">Are you sure you want to delete this note?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowDeleteModal(false)}
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

      {/* EDIT MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h4 className="text-lg font-semibold">Edit Note</h4>
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
              <span className="text-gray-700">Content</span>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded"
                rows={4}
              />
            </label>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditModal(false)}
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

      {/* NOTE VIEW MODAL */}
      {showNoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{content}</p>
            <p className="text-sm text-gray-500 mb-6">
              Created on: {new Date(date).toLocaleDateString()}
            </p>
            <button
              onClick={() => setShowNoteModal(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default NoteCard;

