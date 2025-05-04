import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ShieldUser, LogOut, BookMarked } from "lucide-react";

import logo from '../../assets/logo.png'
import Search from '../lib/Search';

function Navigation({ isUser }) {
  const navigate = useNavigate()
  const location = useLocation()
  const hideLoginBtn = location.pathname == '/login' || location.pathname == '/dashboard' || location.pathname == '/mylibrary'
  const name = localStorage.getItem('name')
  const homeNav = isUser ? '/dashboard' : '/'
  async function handleLogout() {
    try {
      localStorage.clear()
      navigate('/login')

    } catch (e) {
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
      <NavLink to={homeNav}>
        <img src={logo} className='w-9' alt="logo" />
      </NavLink>
      <nav>
        <div className='w-60 flex justify-around text-cyan-800'>
          <NavLink to={homeNav}>Library</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
      <Search />
      {isUser && <div className='flex items-center'>
        {/* <BookMarked /> */}
        <NavLink to='/mylibrary' className='mr-8'>My-Library</NavLink>
        <ShieldUser />
        <p className='pl-2'>{name} </p>
      </div>}
      <nav className='text-cyan-800'>
        {!hideLoginBtn && <NavLink to='/login'>Login</NavLink>}
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