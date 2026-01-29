
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import AddAdmin from './components/AddAdmin'
import ViewAdmin from './components/ViewAdmin'
import EditAdmin from './components/EditAdmin'

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' Component={Login}></Route>
            <Route path='/dashboard' Component={Dashboard}></Route>
            <Route path='/addadmin' Component={AddAdmin}></Route>
            <Route path='/viewadmin' Component={ViewAdmin}></Route>
            <Route path='/editadmin' Component={EditAdmin}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}
