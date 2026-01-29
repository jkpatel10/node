import { Bell, MessageSquare, Search, ShoppingCart } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <header className="h-16 bg-[#161b30] text-white backdrop-blur-md flex items-center justify-between px-8 border-b border-slate-800 sticky top-0 z-10">
      <div className="flex items-center gap-4  bg-gray-700 px-4 py-2 rounded-lg w-96">
        <Search size={18} className="text-slate-400" />
        <input type="text" placeholder="Search" className="border-none outline-none text-sm w-full" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-slate-700 pr-6">
          <Bell size={20} className="text-slate-400 cursor-pointer" />
          <MessageSquare size={20} className="text-slate-400 cursor-pointer" />
          <ShoppingCart size={20} className="text-slate-400 cursor-pointer" />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold">Jhon Anderson</p>
            <p className="text-[10px] text-slate-500">Admin</p>
          </div>
          <img src="https://i.pravatar.cc/150?u=jhon" className="w-8 h-8 rounded-full border border-blue-500" alt="profile" />
        </div>
      </div>
    </header>
  )
}