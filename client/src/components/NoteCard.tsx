interface NoteCardProps {
  title: string;
  content: string;
  date: string | number | Date;
}

function NoteCard({ title, content, date }: NoteCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 font-mono">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <p className="text-gray-400 text-sm mt-4">{new Date(date).toDateString()}</p>
    </div>
  );
}

export default NoteCard;
