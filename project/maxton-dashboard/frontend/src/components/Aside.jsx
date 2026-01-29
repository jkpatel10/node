import React, { useState } from 'react';
import { 
  ShoppingCart, Grid, LayoutDashboard, 
  ChevronDown, BarChart3, PieChart as FileText,
  CreditCard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, active = false, hasSub = false, isOpen = false, onToggle = () => {} }) => (
  <div 
    className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${active ? 'bg-blue-600/10 text-blue-400 border-r-4 border-blue-500' : 'text-slate-400 hover:bg-slate-800'}`}
    onClick={hasSub ? onToggle : undefined}
  >
    <div className="flex items-center gap-3">
      <Icon size={18} />
      <span className="text-sm font-medium">{label}</span>
    </div>
    {hasSub && <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
  </div>
);

export default function Aside() {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <div className="flex min-h-screen bg-[#0f1120] text-slate-200 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#161b30] border-r border-slate-800 hidden lg:block">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight text-white">Maxton</span>
        </div>
        
        <nav className="mt-4">
          <div className="px-6 py-2 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Main</div>
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          
          <div className="px-6 py-6 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Forms & Tables</div>
          <SidebarItem icon={FileText} label="Forms" hasSub isOpen={openMenu === 'forms'} onToggle={() => setOpenMenu(openMenu === 'forms' ? null : 'forms')} />
          {openMenu === 'forms' && (
            <div className="bg-slate-900/50 ml-4 border-l border-slate-700">
              <div className="px-6 py-2 text-slate-300 hover:text-blue-400 cursor-pointer transition-colors" onClick={()=>navigate("/addAdmin")}>Add Admin</div>
              <div className="px-6 py-2 text-slate-300 hover:text-blue-400 cursor-pointer transition-colors" onClick={()=>navigate("/viewAdmin")}>View Admin</div>
            </div>
          )}
          
        </nav>
      </aside>
</div>)}