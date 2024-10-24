import { useEffect } from "react"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"

const DashBoard = () => {
    const navigate = useNavigate()
    const {user, loading} = useAuthStore()

    useEffect(() => {
        if(!user && !loading) {
            navigate('/login')
        }
    },[user, loading])
  return (
    <div>
        <h1>Dashboard Page</h1>
        <p>Welcome to your dashboard</p>
    </div>
  )
}

export default DashBoard