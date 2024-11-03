import { useEffect } from "react"
import { useAuthStore } from "../store/authStore"
import { Routes, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import TaskCard from "../components/TaskCard"

const DashBoard = () => {
    const navigate = useNavigate()
    const {checkAuth, loading} = useAuthStore()

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            navigate('/login')
        }
        checkAuth()


    },[navigate, checkAuth])
  return (
    loading?<div>I am loading</div>:
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/5">
      <Sidebar/>
      </div>
      <div className="w-4/5">
        <Navbar/>
        <div>
          <TaskCard/>
          <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default DashBoard