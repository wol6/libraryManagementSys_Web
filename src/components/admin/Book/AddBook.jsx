import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddBook({ open, onClose }) {
  return (
    <>
    <Dialog
        open={open}
        TransitionComponent={Slide}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle className='text-center'>{"Add Books"}</DialogTitle>
        <DialogContent>
            <div className='flex flex-col p-5 w-100%'>
                <TextField className='md:w-80' sx={{ marginBottom: '1rem' }} label="Name" variant="standard" />
                <TextField className='md:w-80' sx={{ marginBottom: '1rem' }} label="Author" variant="standard" />
                <TextField className='md:w-80' sx={{ marginBottom: '1rem' }} label="Img Url" variant="standard" />
            </div>
        </DialogContent>
        <DialogActions className='mr-7 mb-2'>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="contained" onClick={onClose}>Add</Button>
        </DialogActions>
    </Dialog>

</>
  )
}

export default AddBook