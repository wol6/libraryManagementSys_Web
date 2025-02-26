import React, { useState } from 'react'
import Login from '../user/login/Login';
import { NavLink } from 'react-router-dom';
function Admin() {
  return (
    <>
      <div>
    <NavLink to='/login/admin'>Admin Login</NavLink>
      </div>
    </>
  )
}

export default Admin