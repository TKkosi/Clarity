import axios from "axios";
import { useState } from "react";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [showSuccess, setShowSuccess]= useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
    if (e.target.value != formData.password) {
        setError("passwords do not match")
    }
    else {
        setError("")
    }
  };
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        await axios.post(`${API_URL}/user/register`, {...formData, name:`${formData.firstName} ${formData.lastName}`})
        setShowSuccess(true)

    } catch (error) {
        console.log(error);
        
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen dark bg-emerald-300">
        {
            showSuccess && (
                <div className="absolute w-screen h-screen flex justify-center items-center bg-slate-600">

              <div className="text-green-600 text-sm mb-4">
                <p>Registration successful! Please log in.</p>
                <Link to={"/login"} className="p-2 bg-green-500">Login</Link>
              </div>
                </div>
            )
        }
      <div className="w-full max-w-md bg-emerald-950 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex space-x-4 mb-4">
            <input
              placeholder="First Name"
              className="bg-emerald-700 text-black border-0 rounded-md p-2 w-1/2 focus:bg-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-200 transition ease-in-out duration-150"
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
            />
            <input
              placeholder="Last Name"
              className="bg-emerald-700 text-black border-0 rounded-md p-2 w-1/2 focus:bg-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-200 transition ease-in-out duration-150"
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={handleInputChange}
              />
          </div>
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
          <input
            placeholder="Confirm Password"
            className="bg-emerald-700 text-black border-0 rounded-md p-2 mb-4 focus:bg-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-200 transition ease-in-out duration-150"
            type="password"
            value={confirmPassword} 
            name="confirmPassword"
            onChange={handleConfirmPassword}
          />
          {error && <p>{error}</p>}
          <p className="text-white mt-4">
            Already have an account?
            <a
              className="text-sm text-blue-500 -200 hover:underline mt-4"
              href="#"
            >
              Sign in
            </a>
          </p>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
