import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className='border-2 flex justify-around mt-4 p-4'>
      {/* <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
      </nav> */}
      <p>logo</p>
      <nav>
        <a href="#">Library</a>
        <a href="#">About</a>
      </nav>
      <div>
        <input type="text" className='border-2' placeholder='search' />
        <button>search</button>
      </div>
      <nav>
        <a href="#">login</a>
      </nav>
    </div>
  )
}

export default Navigation