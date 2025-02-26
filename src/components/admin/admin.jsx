import React, { useState } from 'react'
import Login from '../user/login/Login';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import AddBook from './Book/AddBook';
import LibraryTransaction from './Book/LibraryTransation';
function Admin() {
  const [open, setOpen] = useState(false);
  const [library, setLibrary] = useState(false);
  const handleClickOpen = (validate) => {
    validate ? setLibrary(true) : setOpen(true);
  };
  const handleClose = (validate) => {
    validate ? setLibrary(false) : setOpen(false);
  };
  return (
    <>
      <div>
        <NavLink to='/login/admin'>Admin Login</NavLink>
        <Button variant="text" onClick={handleClickOpen}>
          Add Book
        </Button>
        <Button variant="text" onClick={() => handleClickOpen(true)}>
          Library Adminstration
        </Button>
      </div>
      {open && <AddBook open={open} onClose={handleClose} />}
      {library && <LibraryTransaction open={library} onClose={() => handleClose(true)} />}
    </>
  )
}

export default Admin