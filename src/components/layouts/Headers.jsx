import React from 'react'
import { ShieldUser,LogOut } from "lucide-react";
import { NavLink, useNavigate } from 'react-router-dom';

function Headers({isAdmin}) {
  const navigate = useNavigate()
  const dashboardTo = isAdmin ? '/admin/dashboard' : '/dashboard'
  const name = localStorage.getItem('name')

  async function handleLogout() {
    try{
      localStorage.clear()
      navigate('/login')
  
    }catch(e){
      console.log(e)
    }
   }
  return (
    <>
    <div className='border-2 flex justify-between m-4 p-4 text-cyan-800'>
      <div className='flex items-center'>
      <ShieldUser />
        <p className='pl-1'>{name}</p>
      </div>
      <div>
      <nav className="flex gap-6 text-base">
        <NavLink to={dashboardTo} className="hover:cursor-pointer">Dashboard</NavLink>
         <NavLink to='/admin/books' className="hover:cursor-pointer">Books</NavLink>
        <NavLink to='/admin/members' className="hover:cursor-pointer">Members</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      </div>
      {/* enter search bar here    */}
      <div>
      <button onClick={handleLogout}
       className="px-3 py-1 rounded flex items-center gap-1 text-sm hover:cursor-pointer">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
    </>
  )
}

export default Headers