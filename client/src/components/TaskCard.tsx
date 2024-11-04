
// const TaskCard = () => {
//     return (
//         <div>
//             <div className="card border-2 border-emerald-800">
//                 <div className="card-header">
//                     Task Name
//                 </div>
//                 <div className="card-body">
//                     <p className="card-text">Task Description</p>
//                     <p className="card-text">Task Due Date</p>
//                     <p className="card-text">Task Status</p>
//                     <button className="btn btn-primary">Edit</button>
//                     <button className="btn btn-danger">Delete</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TaskCard;


function TaskCard() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 max-w-sm font-mono">
            <div className="flex space-x-2 mb-3">
                <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-semibold rounded-full">inactive</span>
            </div>
            <h3 className="text-lg font-semibold text-black">task title</h3>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci eligendi minima tempora eum ex beatae, cupiditate inventore omnis distinctio fuga a, explicabo quibusdam. Voluptatem accusamus suscipit expedita sapiente mollitia.</p>
            <div>
                <div>
                    <p className="text-xs text-gray-400 mt-2">Due Date: 12/12/2021</p>
                    <p className="text-xs text-gray-400 mt-2">Status: Inactive</p>  
                </div>
                <div className="p-2 flex flex-col ">
                    <button className="bg-emerald-800 text-white font-semibold px-2 py-1 rounded-md mt-2">Edit</button>
                    <button className="bg-red-500 text-white font-semibold px-2 py-1 rounded-md mt-2">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
