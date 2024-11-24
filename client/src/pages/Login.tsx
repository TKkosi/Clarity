import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";
import Loader from "../components/Loader";

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      try {
        if(localStorage.getItem("token")) {
            navigate('/')
        }
      } finally {
        setLoading(false)
      } 
    },[navigate])
    
    const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    try {
        const response = await axios.post(`${API_URL}/user/login`,formData)
        localStorage.setItem("token", response.data.token)
        navigate('/')
    } catch (error) {
        console.log(error);
        setError("Invalid email or password")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark font-mono bg-emerald-300">
        {loading && <Loader/>}
      <div className="w-full max-w-md bg-emerald-950 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign in</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            placeholder="Email"
            className="bg-emerald-700 text-black border-0 rounded-md p-2 mb-4 focus:bg-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-200 transition ease-in-out duration-150"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            className="bg-emerald-700 text-black border-0 rounded-md p-2 mb-4 focus:bg-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-200 transition ease-in-out duration-150"
            type="password"
            value={formData.password}
            name="password"
            onChange={handleInputChange}
          />
          {error && <p>{error}</p>}
          <p className="text-white mt-4">
            Don't have an account?
            <Link className="text-sm text-blue-500 -200 hover:underline mt-4" to={"/signup"}>Sign up </Link>
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
