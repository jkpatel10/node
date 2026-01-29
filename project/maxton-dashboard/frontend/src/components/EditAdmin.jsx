import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function EditAdmin() {
    const [formdata,setFormdata] =useState({})

    const locationObj = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        if (locationObj.state) {
            setFormdata(locationObj.state)
        }
    },[])

    const handleChange = (e)=>{
        setFormdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleUpdate = async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:1008/updateData?id=${formdata}`,formdata).then((res)=>{
            alert(res.data.msg)
            navigate("/viewAdmin")
        })
    }

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#0f1120] text-slate-200">
    <div className="w-full max-w-md bg-[#1c223c] border border-slate-800 rounded-2xl p-8 shadow-xl">
      <h1 className="text-2xl font-bold text-center mb-2">
        Update Student ✏️
      </h1>

      <p className="text-center text-slate-400 text-sm mb-6">
        Edit your information
      </p>

      <form onSubmit={handleUpdate} className="space-y-5">

        <div>
          <label className="text-sm text-slate-400">
            Name
          </label>

          <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Enter your name" className="w-full mt-1 px-4 py-2 bg-[#161b30] border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        
        <div>
          <label className="text-sm text-slate-400">
            Age
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

        <div>
          <label className="text-sm text-slate-400">
            Subject
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

        {/* Buttons */}
        <div className="flex gap-3">

          {/* Update */}
          <button
            type="submit"
            className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg 
                       font-semibold transition"
          >
            Update
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
);

}