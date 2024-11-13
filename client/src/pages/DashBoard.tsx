import { useEffect } from "react"
import { useAuthStore } from "../store/authStore"
import { Route, Routes, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Notes from "./dashboardPages/Notes"
import Tasks from "./dashboardPages/Tasks"
import Teams from "./dashboardPages/Teams"
import Activities from "./dashboardPages/Activities"

const DashBoard = () => {
    const navigate = useNavigate()
    const {checkAuth, loading, user} = useAuthStore()

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            navigate('/login')
        }
        checkAuth()


    },[])
  return (
    loading?<div>I am loading</div>:
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/5 overflow">
      <Sidebar/>
      </div>
      <div className="w-4/5 overflow-auto">
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' element={<Tasks/>}/>
            <Route path='/notes' element={<Notes userId={user?._id}/>}/>
            <Route path='/activities' element={<Activities/>}/>
            <Route path='/teams' element={<Teams/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default DashBoard