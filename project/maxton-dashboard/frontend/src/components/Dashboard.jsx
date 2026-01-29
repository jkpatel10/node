// Dashboard.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Monitor } from 'lucide-react';
import Aside from './Aside';
import Header from './Header';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.1
    }]
  };

  const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        // Using semi-transparent colors for the "glow" effect
        backgroundColor: [
          'rgba(248, 113, 113, 0.2)', // Red 400
          'rgba(96, 165, 250, 0.2)',  // Blue 400
          'rgba(251, 191, 36, 0.2)',  // Yellow 400
          'rgba(45, 212, 191, 0.2)',  // Teal 400
          'rgba(167, 139, 250, 0.2)', // Purple 400
          'rgba(251, 146, 60, 0.2)',  // Orange 400
        ],
        borderColor: [
          '#f87171', '#60a5fa', '#fbbf24', '#2dd4bf', '#a78bfa', '#fb923c'
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, '#6b9dec'); // Blue top
    gradient1.addColorStop(1, '#8b5cf6'); // Purple bottom

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, '#fe7096'); // Pink top
    gradient2.addColorStop(1, '#e7bda2'); // Peach bottom

    const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, '#e7c75d'); // Yellow top
    gradient3.addColorStop(1, '#e99d19'); // Orange bottom

    setChartData({
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [{
        data: [300, 150, 100],
        backgroundColor: [gradient1, gradient2, gradient3],
        hoverOffset: 15,
        borderWidth: 0,
      }]
    });
  }, []);

  return (
    <div className="flex h-screen text-white bg-[#0f1120] text-slate-200">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6 ">Dashboard</h1>

          {/* Stats Cards */}
          <div className='mb-8'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#1c223c] border border-slate-800 rounded-2xl p-8 relative overflow-hidden flex items-center">
                <div className="z-10 space-y-4">
                  <h1 className="text-2xl font-bold">Welcome back, <span className="text-blue-400">Jhon Anderson!</span></h1>
                  <div className="flex gap-12 mt-8">
                    <div>
                      <p className="text-2xl font-bold ">$65.4K</p>
                      <p className="text-xs text-slate-400 mt-1 uppercase">Today's Sales</p>
                      <div className="w-16 h-1 bg-blue-500 mt-2 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold ">78.4%</p>
                      <p className="text-xs text-slate-400 mt-1 uppercase">Growth Rate</p>
                      <div className="w-16 h-1 bg-pink-500 mt-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-10 bottom-0 w-64 h-48 bg-slate-700/10 rounded-t-full flex items-center justify-center">
                  <Monitor className="text-blue-400 opacity-20" size={100} />
                </div>
              </div>

              <div className="bg-[#1c223c] border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364" strokeDashoffset="80" className="text-yellow-500" />
                  </svg>
                  <span className="absolute text-2xl font-bold ">78%</span>
                </div>
                <p className="mt-4 font-bold text-lg ">42.5K</p>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Active Users</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#1c223c] border border-slate-800 p-6 rounded-xl shadow">
              <div className="flex items-center">
                <div className="p-3 bg-blue-500/10 rounded-full mr-4 text-blue-500">
                  <i className="bi bi-eye-fill"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold ">50505</h3>
                  <p className="text-slate-400">Total Views</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1c223c] border border-slate-800 p-6 rounded-xl shadow">
              <div className="flex items-center">
                <div className="p-3 bg-green-500/10 rounded-full mr-4 text-green-500">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold ">7500</h3>
                  <p className="text-slate-400">Total Users</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1c223c] border border-slate-800 p-6 rounded-xl shadow">
              <div className="flex items-center">
                <div className="p-3 bg-yellow-500/10 rounded-full mr-4 text-yellow-500">
                  <i className="bi bi-cart-fill"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold ">15000</h3>
                  <p className="text-slate-400">Total Orders</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1c223c] border border-slate-800 p-6 rounded-xl shadow">
              <div className="flex items-center">
                <div className="p-3 bg-red-500/10 rounded-full mr-4 text-red-500">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold ">$50500</h3>
                  <p className="text-slate-400">Total Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#1c223c] border border-slate-800 p-6 rounded-xl shadow">
              <h5 className="text-lg font-semibold mb-4 ">Sales Overview</h5>
              <div className="h-64"><Line data={lineData} /></div>
            </div>
            <div className="bg-blue-500/10 p-6 rounded shadow">

              <h5 className="text-lg font-semibold mb-4">Revenue</h5>

              <Bar data={barData} />

            </div>
          </div>

          {/* Doughnut Chart and Table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-500/10 p-6 rounded h-100 shadow">
              <h5 className="text-lg font-semibold mb-4">Traffic Sources</h5>
              <div className="h-72 place-self-center">
                <Doughnut ref={chartRef} data={chartData}/>
              </div>

            </div>
            <div className="bg-[#1c223c] border border-slate-800 p-6 rounded shadow overflow-hidden">
              <h5 className="text-lg font-semibold mb-4 ">Recent Orders</h5>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2">Order ID</th>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">#12345</td>
                    <td className="py-3">John Doe</td>
                    <td className="py-3"><span className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs">Completed</span></td>
                    <td className="py-3">$250</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">#12346</td>
                    <td className="py-3">Jane Smith</td>
                    <td className="py-3"><span className="bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded text-xs">Pending</span></td>
                    <td className="py-3">$150</td>
                  </tr>
                  <tr>
                    <td className="py-3">#12347</td>
                    <td className="py-3">Bob Johnson</td>
                    <td className="py-3"><span className="bg-red-500/10 text-red-400 px-2 py-1 rounded text-xs">Cancelled</span></td>
                    <td className="py-3">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#161b30] border-t border-slate-800 p-4 text-center text-white">
          <p>Copyright © 2025. All right reserved.</p>
        </footer>
      </div>
    </div>
  );
}