import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
      </nav>
    </div>
  )
}

export default Navigation