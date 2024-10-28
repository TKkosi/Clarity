import { useEffect } from "react"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

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
    <div>
      <Sidebar/>
      <div className="ml-64">
        <Navbar/>
        <div>
          
        </div>
      </div>

        <h1>Dashboard Page</h1>
        <p>Welcome to your dashboard</p>
    </div>
  )
}

export default DashBoard