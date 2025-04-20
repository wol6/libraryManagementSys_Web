import React from 'react'
import { ShieldUser,LogOut } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { isAdmin } from '../lib/Helper';

function Headers() {
  const dashboardTo = isAdmin ? '/admin/dashboard' : '/dashboard'
  return (
    <>
    <div className='border-2 flex justify-between m-4 p-4 text-cyan-800'>
      <div className='flex items-center'>
      <ShieldUser />
        <p>user name</p>
      </div>
      <div>
      <nav className="flex gap-6 text-base">
        <NavLink to={dashboardTo} className="hover:cursor-pointer">Dashboard</NavLink>
       {isAdmin && <NavLink to='/admin/books' className="hover:cursor-pointer">Books</NavLink>}
       {isAdmin &&<NavLink to='/admin/members' className="hover:cursor-pointer">Members</NavLink>}
        <NavLink to="/about">About</NavLink>
      </nav>
      </div>
      {/* enter search bar here    */}
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