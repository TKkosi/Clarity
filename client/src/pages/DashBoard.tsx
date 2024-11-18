import { useEffect, useState } from "react"
import { useAuthStore } from "../store/authStore"
import { Route, Routes, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Notes from "./dashboardPages/Notes"
import Tasks from "./dashboardPages/Tasks"
import Teams from "./dashboardPages/Teams"
import Activities from "./dashboardPages/Activities"
import Loader from "../components/Loader"
import Settings from "./dashboardPages/Settings"
import Support from "./dashboardPages/Support"

const DashBoard = () => {
    const navigate = useNavigate()
    const {checkAuth, loading, user} = useAuthStore()
    const [currentPage, setCurrentPage] = useState("");
    const handletopage = (page: string) => {
      setCurrentPage(page);
    }

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            navigate('/login')
        }
        checkAuth()


    },[checkAuth, navigate])
  return (
    loading?<Loader/>:
    <div className="flex h-screen overflow-hidden">
      <div className="w-4 absolute max-sm:hover:w-full overflow-x-hidden sm:static sm:w-1/5">
      <Sidebar currentPage={currentPage}/>
      </div>
      <div className="w-4/5 overflow-auto">
        <Navbar/>
        <div>
          <Routes>
            <Route path='/'  element={<Tasks childPage={handletopage}/>}/>
            <Route path='/notes' element={<Notes childPage={handletopage} userId={user?._id}/>}/>
            <Route path='/activities' element={<Activities childPage={handletopage}/>}/>
            <Route path='/teams' element={<Teams childPage={handletopage}/>}/>
            <Route path='/settings' element={<Settings childPage={handletopage}/>}/>
            <Route path='/support' element={<Support childPage={handletopage}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default DashBoard