import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate =  useNavigate();
  const [formdata,setFormdata] = useState({});

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let res = await axios.post("http://localhost:1008/login",formdata)
    if (res.data.auth) {
      navigate("/dashboard")
    } else{
      alert(res.data.msg)
    }
  }
return (
  <div className="min-h-screen flex items-center justify-center bg-[#0f1120] text-slate-200">

    <div className="w-full max-w-md bg-[#1c223c] border border-slate-800 rounded-2xl p-8 shadow-xl">

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-center text-slate-400 text-sm mb-6">
        Login to continue
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label className="text-sm text-slate-400">
            Email
          </label>

          <input
            type="text"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="abc@gmail.com"
            className="w-full mt-1 px-4 py-2 bg-[#161b30] border border-slate-800 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-slate-400">
            Password
          </label>

          <input
            type="number"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-2 bg-[#161b30] border border-slate-800 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg 
                     font-semibold transition duration-200"
        >
          Login
        </button>

      </form>
    </div>
  </div>
);

}