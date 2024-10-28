import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";
import { useAuthStore } from "../store/authStore";

const Login = () => {
    const {checkAuth} = useAuthStore()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("token")) {
            navigate('/')
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
        checkAuth()
    } catch (error) {
        console.log(error);
        setError("Invalid email or password")
    }
    // submit form to server
    console.log(formData)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
        {loading && <div className="w-screen h-screen bg-red-800 absolute">
            i am loading
            </div>}
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign in</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            placeholder="Email"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            value={formData.password}
            name="password"
            onChange={handleInputChange}
          />
          {error && <p>{error}</p>}
          <p className="text-white mt-4">
            Don't have an account?
            <Link
              className="text-sm text-blue-500 -200 hover:underline mt-4"
              to={"/signup"}
            >
              Sign up
            </Link>
          </p>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
