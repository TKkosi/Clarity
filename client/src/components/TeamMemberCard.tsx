interface TeamMemberCardProps {
  name: string;
  role: string;
}
const handleDeleteclick = () => {
  console.log("delete clicked");
}

function TeamMemberCard({ name, role }: TeamMemberCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4 flex items-center">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      <button className="text-red-500 hover:text-red-600" onClick={handleDeleteclick} >Delete</button>
    </div>
  );
}

export default TeamMemberCard;
