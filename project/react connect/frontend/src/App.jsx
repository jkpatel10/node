import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

export default function App() {
  const [formdata,setFormData] = useState({})
  const [record,setRecord] = useState([])
  const [editIndex,seteditIndex] = useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  const handleChange = (e)=>{
    setFormData({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if (editIndex == null) {
      await axios.post("http://localhost:1008/addData",formdata).then((res)=>{
      alert(res.data.msg)}
    )}
    else{
      await axios.put(`http://localhost:1008/updateData?id=${editIndex}`,formdata).then((res)=>{
      alert(res.data.msg)})
    }
       setFormData({
        name : "",
        rating : "",
        genre : ""
      })
    }
  
  const fetchData = async()=>{
    await axios.get("http://localhost:1008/getData").then((res)=>{
      setRecord(res.data.data)
    })
  }

  const handleEdit = (id)=>{
    let singleData = record.find((item)=>item._id == id)
    setFormData({
      name : singleData.name,
      rating : singleData.rating,
      genre : singleData.genre
    })
    seteditIndex(id)
  }

  const handleDelete = async(id)=>{
    await axios.delete(`http://localhost:1008/deleteData?id=${id}`).then((res)=>{
      alert(res.data.msg)
      let newData = record.filter((item)=>item._id != id)
      setRecord(newData)
    })
  }

return (
  <div className="min-h-screen bg-[#0f1115] text-white">

    <div className="flex justify-between items-center px-10 py-5 bg-black/60 backdrop-blur-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-sky-400">PrimeFlix</h1>

      <div className="flex gap-8 text-sm text-gray-300">
        <span className="hover:text-white cursor-pointer">Home</span>
        <span className="hover:text-white cursor-pointer">Movies</span>
        <span className="hover:text-white cursor-pointer">TV Shows</span>
        <span className="hover:text-white cursor-pointer">My List</span>
      </div>

      <div className="flex gap-4 items-center">
        🔍 
        <div className="w-8 h-8 bg-sky-500 rounded-full">
          <img src="/profile.png" className='h-4.5 place-self-center my-2' alt="" /></div>
      </div>
    </div>

    <div className="h-[70vh] bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent p-16 flex flex-col justify-end">
        <h1 className="text-5xl font-bold mb-4">Your Movie Library</h1>
        <p className="text-gray-300 max-w-xl mb-6">
          Stream, manage, and organize your favorite movies like a real OTT platform.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-sky-500 rounded-lg text-black font-bold hover:bg-sky-400">
            ▶ Play
          </button>
          <button className="px-8 py-3 bg-white/10 rounded-lg backdrop-blur hover:bg-white/20">
            + Watchlist
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-10 py-12">
      <h2 className="text-2xl font-bold mb-6">          
        {editIndex == null ? "Add Movie" : "Update Movie"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 bg-[#1a1d24] p-6 rounded-xl"
      >
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
          placeholder="Movie Title"
          className="bg-black/40 px-4 py-3 rounded-lg outline-none border border-gray-700 w-60"
        />

        <input
          type="number"
          name="rating"
          value={formdata.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="bg-black/40 px-4 py-3 rounded-lg outline-none border border-gray-700 w-40"
        />

        <select
          name="genre"
          value={formdata.genre}
          onChange={handleChange}
          className="bg-black/40 px-4 py-3 rounded-lg border border-gray-700 w-48"
        >
          <option hidden>Choose genre</option>
          <option>Action</option>
          <option>Comedy</option>
          <option>Horror</option>
          <option>Drama</option>
          <option>Thriller</option>
        </select>

        <button className="px-8 py-3 bg-sky-500 rounded-lg text-black font-bold hover:bg-sky-400">
          {editIndex == null ? "Add Movie" : "Update"}
        </button>
      </form>
    </div>

    <div className="px-10 pb-20">
      <h2 className="text-xl font-bold mb-4">🎬 Your Collection</h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {record.map((e, i) => (
          <div
            key={i}
            className="min-w-[220px] bg-[#1a1d24] rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <div className="h-60 bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-4xl font-bold">
              {e.name.charAt(0)}
            </div>

            <div className="p-4">
              <h3 className="font-bold">{e.name}</h3>
              <p className="text-gray-400 text-sm">⭐ {e.rating} • {e.genre}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEdit(e._id)}
                  className="flex-1 bg-white/10 py-2 rounded hover:bg-white/20"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(e._id)}
                  className="flex-1 bg-red-500/20 text-red-400 py-2 rounded hover:bg-red-500/40"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
);

}