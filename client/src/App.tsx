import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useAuthStore } from './store/authStore'
import { useEffect } from 'react'

function App() {
  // Check if user is logged in on app load and redirect if not
  const {checkAuth} = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [])

  return (
   <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
   
    </BrowserRouter>
   </>
  )
}

export default App
