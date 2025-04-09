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
    validate==1 ? setLibrary(true) : setOpen(true);
  };
  const handleClose = (validate) => {
    validate==1 ? setLibrary(false) : setOpen(false);
  };
  return (
    <>
      {/* <div>
        <NavLink to='/login/admin'>Admin Login</NavLink>
        <Button variant="text" onClick={handleClickOpen}>
          Add Book
        </Button>
        <Button variant="text" onClick={() => handleClickOpen(1)}>
          Library Adminstration
        </Button>
      </div>
      {open && <AddBook open={open} onClose={handleClose} />}
      {library && <LibraryTransaction open={library} onClose={() => handleClose(true)} />} */}
      <Headers/>
        <Dashboard/>
    </>
  )
}

export default Admin