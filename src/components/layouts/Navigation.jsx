import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.png'

function Navigation() {
  return (
    <div className='border-2 flex justify-around m-4 p-4 text-cyan-800'>
      {/* <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
      </nav> */}
      <NavLink>
      <img src={logo} className='w-9' alt="logo" />
      </NavLink>
      <nav>
      <div className='w-60 flex justify-around text-cyan-800'>
      <NavLink to='/'>Library</NavLink>
      <NavLink to="/">About</NavLink>
      </div>
      </nav>
      <div className='border-1 w-96 mr-40 flex justify-between rounded-md text-cyan-800'>
        <input type="text" className='flex-1 outline-none pl-2 ' placeholder='search' />
        <button className='m-1 cursor-pointer'>search</button>
      </div>
      <nav className='text-cyan-800'>
        <NavLink to='/login'>Login</NavLink>
      </nav>
    </div>
  )
}

export default Navigation