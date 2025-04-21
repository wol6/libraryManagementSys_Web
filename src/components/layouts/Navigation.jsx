import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LogOut } from "lucide-react";

import logo from '../../assets/logo.png'
import { isAdmin, isUser } from '../lib/Helper';

function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const path = ['/login','/dashboard']
 const hideLoginBtn = location.pathname.includes(path)
 
 async function handleLogout() {
  try{
    localStorage.clear()
    navigate('/login')

  }catch(e){
    console.log(e)
  }
 }
  return (
    <div className='border-2 flex justify-around m-4 p-4 text-cyan-800'>
      {/* <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
      </nav> */}
      <NavLink to='/'>
      <img src={logo} className='w-9' alt="logo" />
      </NavLink>
      <nav>
      <div className='w-60 flex justify-around text-cyan-800'>
      <NavLink to='/'>Library</NavLink>
      <NavLink to="/about">About</NavLink>
      </div>
      </nav>
      <div className='border-1 w-96 mr-40 flex justify-between rounded-md text-cyan-800'>
        <input type="text" className='flex-1 outline-none pl-2 ' placeholder='search' />
        <button className='m-1 cursor-pointer'>search</button>
      </div>
      <nav className='text-cyan-800'>
        {hideLoginBtn && <NavLink to='/login'>Login</NavLink>}
       {isUser && <button onClick={handleLogout}
        className="px-3 py-1 rounded flex items-center gap-1 text-sm hover:cursor-pointer">
          <LogOut size={16} />
          Logout
        </button>}
      </nav>
    </div>
  )
}

export default Navigation