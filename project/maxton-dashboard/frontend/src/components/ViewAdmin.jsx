import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aside from "./Aside";

export default function ViewAdmin() {
    const [record,setRecord] = useState([])
    const navigate =  useNavigate();

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        await axios.get("http://localhost:1008/getData").then((res)=>{
            setRecord(res.data.data)
        })
    }

    const handleDelete = async (id)=>{
        await axios.delete(`http://localhost:1008/deleteData?id=${id}`).then((res)=>{
            let newData = record.filter((item)=>item.id != id)
            setRecord(newData)
            alert(res.data.msg)
        })
    }

    const handleEdit = (id)=>{
        let singleData = record.find((item)=>item._id == id)
        navigate("/editAdmin",{state:singleData})
    }
 
  return (
  <div className="min-h-screen bg-[#0f1120] flex text-slate-200">
    <Aside/>
    {/* Card */}
    <div className="max-w-5xl min-h-100 max-h-130 mx-auto bg-[#1c223c] border border-slate-800 rounded-2xl m-6 p-6 shadow-xl">

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Student Records 📋
      </h1>

      {/* Table */}
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto hide-scrollbar">

        <table className="w-full text-sm text-left">

          {/* Head */}
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase text-xs">
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Email</th>
              <th className="py-3 px-2">Password</th>
              <th className="py-3 px-2 text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="text-slate-300">

            {record.map((e, i) => (
              <tr
                key={i}
                className="border-b border-slate-800/50 hover:bg-[#161b30] transition"
              >
                <td className="py-3 px-2 font-medium">
                  {e.name}
                </td>

                <td className="py-3 px-2">
                  {e.email}
                </td>

                 <td className="py-3 px-2">
                  {e.password}
                </td>

                {/* Buttons */}
                <td className="py-3 px-2 text-center space-x-2">

                  <button
                    onClick={() => handleEdit(e._id)}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded 
                               hover:bg-blue-500/20 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(e._id)}
                    className="px-3 py-1 bg-red-500/10 text-red-400 rounded 
                               hover:bg-red-500/20 transition"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

      {/* Empty State */}
      {record.length === 0 && (
        <p className="text-center text-slate-400 mt-6">
          No records found 🚫
        </p>
      )}

    </div>
  </div>
);

};