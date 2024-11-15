import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface SidebarProps {
  currentPage: string;
}

function Sidebar({ currentPage }: SidebarProps) {
  const navigate = useNavigate();
  const {user} = useAuthStore()

    return (
        <div className="h-screen bg-emerald-800 text-white flex flex-col p-5 font-mono">
            <div className="text-2xl font-bold text-gray-200 mb-8">Clarity</div>
            <ul className="flex-grow space-y-4">
                <li onClick={()=>navigate('/')} className={`flex items-center px-2 py-3 rounded-lg ${currentPage==="" && "bg-emerald-600"} hover:bg-emerald-600`}>
                    <i className="bx bx-task text-xl mr-3"></i>
                    <span>Tasks</span>
                    <span className="ml-auto bg-yellow-400 text-emerald-800 text-xs px-2 py-1 rounded-full">12</span>
                </li>
                <li onClick={()=>navigate('/activities')} className={`flex items-center px-2 py-3 rounded-lg ${currentPage==="activities" && "bg-emerald-600"} hover:bg-emerald-600`}>
                    <i className="bx bx-activity text-xl mr-3"></i>
                    <span>Activities</span>
                </li>                
                <li onClick={()=>navigate('/notes')} className={`flex items-center px-2 py-3 rounded-lg ${currentPage==="notes" && "bg-emerald-600"} hover:bg-emerald-600`}>
                    <i className="bx bx-note text-xl mr-3"></i>
                    <span>Notes</span>
                </li>
                <li onClick={()=>navigate('/teams')} className={`flex items-center px-2 py-3 rounded-lg ${currentPage==="teams" && "bg-emerald-600"} hover:bg-emerald-600`}>
                    <i className="bx bx-group text-xl mr-3"></i>
                    <span>Teams</span>
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
                        <p className="text-sm font-semibold text-white">{user?.name}</p>
                        <p className="text-xs text-white">{user?.email}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

