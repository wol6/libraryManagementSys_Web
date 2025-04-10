import React, { useState } from 'react'
import Login from '../user/login/Login';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import AddBook from './Book/AddBook';
import LibraryTransaction from './Book/LibraryTransation';
import Dashboard from './Dashboard/Dashboard';
import Headers from '../layouts/Headers';
function Admin() {
  const [open, setOpen] = useState(false);
  const [library, setLibrary] = useState(false);
  const handleClickOpen = (validate) => {
    validate == 1 ? setLibrary(true) : setOpen(true);
  };
  const handleClose = (validate) => {
    validate == 1 ? setLibrary(false) : setOpen(false);
  };
  return (
    <>
      {/* <div>
        <NavLink to='/login/admin'>Admin Login</NavLink>
      </div>
       */}
      <Headers />
      <div className='flex'>
        <Dashboard />
        <div className='border-2 ml-6 h-60 mt-28'></div>


        <div className='border-0 w-96 ml-14'>
          <div>
            <Button variant="text" onClick={handleClickOpen}>
              Add Book
            </Button>
          </div>
          <div>
            <Button variant="text" onClick={() => handleClickOpen(1)}>
              Library Adminstration
            </Button>
          </div>
        </div>
      </div>
      {open && <AddBook open={open} onClose={handleClose} />}
      {library && <LibraryTransaction open={library} onClose={() => handleClose(true)} />}
    </>
  )
}

export default Admin