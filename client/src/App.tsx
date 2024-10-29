import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  // Check if user is logged in on app load and redirect if not
 
  return (
   <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/*' element={<DashBoard/>}/>
    </Routes>
   
    </BrowserRouter>
   </>
  )
}

export default App
