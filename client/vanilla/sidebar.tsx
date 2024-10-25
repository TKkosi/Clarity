import React, { Children } from 'react';
import {ChevronFirst} from "lucide-react";


export default function sidebar({ }){
    return (
        <aside className = "h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm" >
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="http://img.logoipsum.com/243.svg" alt="" className="w-32" />
                    <button className="p-2 text-gray-600 bg-gray-50 rounded-lg">
                        <ChevronFirst/>
                    </button>    
                </div>
                <ul className="flex-1 px-3 ">
                    {Children}
                    <li className="p-4 w-full text-gray-600 hover:bg-gray-50">Dashboard</li>
                    <li className="p-4 w-full text-gray-600 hover:bg-gray-50">Users</li>
                    <li className="p-4 w-full text-gray-600 hover:bg-gray-50">Settings</li>
                    <li className="p-4 w-full text-gray-600 hover:bg-gray-50">Logout</li>
                </ul>
                <div className="border-t flex p-3">
                    <img src="http://img.logoipsum.com/243.svg" alt="" className="w-8 h-8 rounded-md" />
                    <div className="flex justify-between items-center w-52 ml-2">
                        <div className="leading-4 ">
                            <h4 className="font-mono">John doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>    
                </div>
            </nav>
        </aside>
    )
}

export function sidebarItem({icon ,text ,  })