import React from 'react'
import { ShieldUser,LogOut } from "lucide-react";
import { NavLink } from 'react-router-dom';

function Headers() {
  return (
    <>
    <div className='border-2 flex justify-between m-4 p-4 text-cyan-800'>
      <div className='flex items-center'>
      <ShieldUser />
        <p>user name</p>
      </div>
      <div>
      <nav className="flex gap-6 text-base">
        <NavLink to='/admin/dashboard' className="hover:underline">Dashboard</NavLink>
        <NavLink to='/admin/books' className="hover:underline">Books</NavLink>
        <NavLink to='/admin/members' className="hover:underline">Members</NavLink>
      </nav>
      </div>
      <div>
      <button className="px-3 py-1 rounded flex items-center gap-1 text-sm">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
    </>
  )
}

export default Headers