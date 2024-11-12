
// function TaskCard() {
//     return (
//         <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 max-w-sm font-mono">
//             <div className="flex space-x-2 mb-3">
//                 <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-semibold rounded-full">inactive</span>
//             </div>
//             <h3 className="text-lg font-semibold text-black">task title</h3>
//             <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci eligendi minima tempora eum ex beatae, cupiditate inventore omnis distinctio fuga a, explicabo quibusdam. Voluptatem accusamus suscipit expedita sapiente mollitia.</p>
//             <div>
//                 <div>
//                     <p className="text-xs text-gray-400 mt-2">Due Date: 12/12/2021</p>
//                     <p className="text-xs text-gray-400 mt-2">Status: Inactive</p>  
//                 </div>
//                 <div className="p-2 flex flex-col ">
//                     <button className="bg-emerald-800 text-white font-semibold px-2 py-1 rounded-md mt-2">Edit</button>
//                     <button className="bg-red-500 text-white font-semibold px-2 py-1 rounded-md mt-2">Delete</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TaskCard;


// const TaskCard = ({
//     title = "Task Title", 
//     description = "Task Description", 
//     dueDate = "12/12/2021", 
//     status = "active",
//     priority = "low",
// }) => {
interface TaskCardProps {
    title: string;
    description: string;
    dueDate: Date ;
    status: string;
    priority: string;
}
function TaskCard({ title,description,dueDate,status,priority }:TaskCardProps) {
  return (
    <div className="bg-white p-4 mx-5 rounded-lg shadow-md border-2 border-emerald-800 max-w-sm font-mono">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="flex gap-3">
            <p className="text-xs text-gray-400 mt-2">Due Date: {dueDate.toDateString()}</p>
            <p className="text-xs text-gray-400 mt-2">Status: {status}</p>
            <p className="text-xs text-gray-400 mt-2">Priority: {priority}</p>
        </div>
        <div className="p-2 flex flex-col ">
            <button className="bg-emerald-800 text-white font-semibold px-2 py-1 rounded-md mt-2">Edit</button>                 
            <button className="bg-red-500 text-white font-semibold px-2 py-1 rounded-md mt-2">Delete</button>
        </div>
    </div>
  )
}

export default TaskCard
