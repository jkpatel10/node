import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aside from "./Aside";

export default function AddAdmin() {
  const navigate =  useNavigate();
  const [formdata,setFormdata] = useState({});

  const handleChange =(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:1008/postData",formdata).then((res)=>{
       alert(res.data.msg)
       navigate("/viewAdmin")
    })
  }
  
 return (
  <div className="min-h-screen flex items-center bg-[#0f1120] text-slate-200">
    <Aside/>
    {/* Form Card */}
    <div className="w-full max-w-md bg-[#1c223c] mx-auto border border-slate-800 rounded-2xl p-8 shadow-xl">

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-2">
        Student Details
      </h1>

      <p className="text-center text-slate-400 text-sm mb-6">
        Fill in your information
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="text-sm text-slate-400">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full mt-1 px-4 py-2 bg-[#161b30] border border-slate-800 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* email */}
        <div>
          <label className="text-sm text-slate-400">
            email
          </label>

          <input
            type="text"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-1 px-4 py-2 bg-[#161b30] border border-slate-800 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* password */}
        <div>
          <label className="text-sm text-slate-400">
            password
          </label>

          <input
            type="number"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Enter your password"
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
          Submit
        </button>

      </form>
    </div>
  </div>
);

};