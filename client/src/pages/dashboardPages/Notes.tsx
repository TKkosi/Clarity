import React, { useState, useEffect } from 'react';
import NoteCard from '../../components/NoteCard';
import api from '../../utils/api';
import Loader from '../../components/Loader';

interface NotesProps {
  userId: string|undefined;
  childPage: (page: string) => void;
}

function Notes({ userId, childPage }: NotesProps) {

  interface Note {
    _id: string;
    title: string;
    content: string;
    date: string;
  }

  const [notes, setNotes] = useState<Note[]>([]);
  const [showAddNotes, setShowAddNotes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
  });

  // Fetch notes on component mount
  useEffect(() => {
    childPage("notes");
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/notes`);
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
      finally{
        setLoading(false);
      }
    };
    fetchNotes();
  }, [userId, childPage]);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!newNote.title || !newNote.content) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await api.post('/notes', newNote);
      setNotes([...notes, response.data]);
      setNewNote({ title: '', content: ''});
      window.location.reload();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col font-mono bg-gradient-to-b from-blue-200 to-purple-200 h-full w-full">
      {loading && <Loader/>}
      <div className='flex items-center justify-between min-h-20'>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <button onClick={()=>setShowAddNotes(!showAddNotes)} className="px-4 py-2 bg-emerald-800 text-white rounded-lg font-medium hover:bg-emerald-500 transition">{showAddNotes?"X  ":"Add Note"}</button>
      </div>
  
  {   showAddNotes &&
      //Note Form
      <div>
      <form onSubmit={handleSubmit} className="absolute w-[79%] bg-gray-100 p-4 rounded-lg mb-6 shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={newNote.title}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
            placeholder="Note title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Content</label>
          <textarea
            name="content"
            value={newNote.content}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
            placeholder="Note content"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition"
        >
          Add Note
        </button>
      </form>
      </div>

}
      {/* Display Notes */}
    <div className='grid items-start auto-rows-[250px] grid-cols-4 gap-2 w-full [&::-webkit-scrollbar]:hidden h-full overflow-y-scroll'>
        {notes?.length?
        notes.map((note) => (
          <NoteCard key={note._id} id={note._id} title={note.title} content={note.content} date={note.date} />
        ))
      : <p className="text-gray-600 text-center col-span-4">No notes found</p>
      }
      </div> 
    </div>
  );
}

export default Notes;

