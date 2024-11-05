// import React, { useState } from 'react';

// function Notes() {
//   // State to hold the list of notes
//   interface Note {
//     id: number;
//     text: string;
//     timestamp: string;
//   }
  
//   const [notes, setNotes] = useState<Note[]>([]);
  
//   // State to handle new note input
//   const [noteInput, setNoteInput] = useState('');

//   // Function to handle adding a new note
//   const addNote = () => {
//     if (noteInput.trim() !== '') {
//       const newNote = {
//         id: Date.now(),
//         text: noteInput,
//         timestamp: new Date().toLocaleString(),
//       };
//       setNotes([newNote, ...notes]);
//       setNoteInput('');
//     }
//   };

//   // Function to handle deleting a note
//   const deleteNote = (id: number) => {
//     setNotes(notes.filter(note => note.id !== id));
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto border-2 border-emerald-800 font-mono">
//       <h2 className="text-xl font-semibold mb-4">Notes</h2>

//       {/* Input Area for New Note */}
//       <div className="flex items-center mb-4">
//         <input
//           type="text"
//           value={noteInput}
//           onChange={(e) => setNoteInput(e.target.value)}
//           placeholder="Add a new note..."
//           className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           onClick={addNote}
//           className="bg-emerald-800 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-500 transition"
//         >
//           Add
//         </button>
//       </div>

//       {/* Notes List */}
//       <div className="space-y-4">
//         {notes.length > 0 ? (
//           notes.map((note) => (
//             <div
//               key={note.id}
//               className="flex items-start justify-between p-3 bg-gray-100 rounded-lg shadow-sm"
//             >
//               <div>
//                 <p className="text-gray-700">{note.text}</p>
//                 <p className="text-sm text-gray-500 mt-1">{note.timestamp}</p>
//               </div>
//               <button
//                 onClick={() => deleteNote(note.id)}
//                 className="text-red-500 hover:text-red-700 ml-2"
//               >
//                 &#x2715;
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center">No notes available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Notes;

import React, { useState, useEffect } from 'react';
import NoteCard from '../../components/NoteCard';
import api from '../../utils/api';

interface NotesProps {
  userId: string|undefined;
}

function Notes({ userId }: NotesProps) {
  interface Note {
    _id: string;
    title: string;
    content: string;
    date: string;
  }

  const [notes, setNotes] = useState<Note[]>([]);
  const [showAddNotes, setShowAddNotes] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
  });

  // Fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get(`/notes`);
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchNotes();
  }, [userId]);

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
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <div className='flex items-center justify-between'>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <button onClick={()=>setShowAddNotes(!showAddNotes)} className="px-4 py-2 bg-emerald-800 text-white rounded-lg font-medium hover:bg-emerald-500 transition">Add Note</button>
      </div>
   
  {   showAddNotes &&
      //Note Form
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg mb-6 shadow-md">
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
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Note
        </button>
      </form>
}
      {/* Display Notes */}
    <div className=' overflow-scroll h-[100px]'>
        {notes && notes.map((note) => (
          <NoteCard key={note._id} title={note.title} content={note.content} date={note.date} />
        ))}
      </div>  
    </div>
  );
}

export default Notes;

