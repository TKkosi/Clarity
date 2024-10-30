
// const Sidebar = () => {
//   return (
//     <div className="bg-emerald-800 flex flex-col justify-between pb-10 h-full p-20">
//         <div className="">
//                 <div>
//                         <span>Clarity</span>
//                 </div>
//                 <ul className="">
//                     <li>
//                         <a href="">
//                             <span>Tasks</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Activities</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Dashboard</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Schedule</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Report</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Notifications</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Documents</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Settings</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="">
//                             <span>Support</span>
//                         </a>
//                     </li>    
//                 </ul>
//             </div>
//                 <div className="">
//                     <div>
//                         <p>john</p>
//                         <p className="font-bold">Admin</p>
//                     </div>
//                 </div>
//     </div>
//   )
// }

// export default Sidebar
import 'boxicons'

function Sidebar() {
    return (
        <div className=" h-screen bg-emerald-800 text-white flex flex-col p-5 font-mono">
            <div className="text-2xl font-bold text-gray-200 mb-8">Clarity</div>
            <ul className="flex-grow space-y-4">
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-task text-xl mr-3"></i>
                    <span>Tasks</span>
                    <span className="ml-auto bg-yellow-400 text-emerald-800 text-xs px-2 py-1 rounded-full">12</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-activity text-xl mr-3"></i>
                    <span>Activities</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-grid-alt text-xl mr-3"></i>
                    <span>Dashboard</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-calendar text-xl mr-3"></i>
                    <span>Schedule</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-bar-chart-alt-2 text-xl mr-3"></i>
                    <span>Report</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-note text-xl mr-3"></i>
                    <span>Note</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-group text-xl mr-3"></i>
                    <span>Team</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-user text-xl mr-3"></i>
                    <span>Clients</span>
                </li>
            </ul>
            <ul className="space-y-4 border-t border-emerald-700 pt-4">
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-cog text-xl mr-3"></i>
                    <span>Settings</span>
                </li>
                <li className="flex items-center px-2 py-3 rounded-lg hover:bg-emerald-600">
                    <i className="bx bx-support text-xl mr-3"></i>
                    <span>Support</span>
                </li>
                <li className="flex items-center gap-3 pt-4">
                    <img src="https://via.placeholder.com/30" alt="Profile" className="w-8 h-8 rounded-full" />
                    <div>
                        <p className="text-sm font-semibold text-gray-200">Andrew Simon</p>
                        <p className="text-xs text-gray-400">andrew@example.com</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

