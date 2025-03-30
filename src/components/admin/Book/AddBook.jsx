import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function AddBook({ open, onClose }) {

    const [books,setBooks] = useState({
        bookname:"",
        author:"",
        imgurl:""
    })

    function handleChange(e){
        const { name, value } = e.target;
        setBooks(prev => {
            return { ...prev, [name]: value };
        });
    }
    async function handleAddBook() {
        try{
            const {data:resp} = await axios.post('http://localhost:5000/addbook',books)
            if(resp.success){
                toast('Successfully Added')
                onClose()
            }
        }catch(e){
            console.log(e)
        }
    }
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
                <TextField onChange={handleChange} name='bookname'
                 className='md:w-80' sx={{ marginBottom: '1rem' }} label="Name" variant="standard" />
                <TextField onChange={handleChange} name='author'
                 className='md:w-80' sx={{ marginBottom: '1rem' }} label="Author" variant="standard" />
                <TextField onChange={handleChange} name='imgurl'
                 className='md:w-80' sx={{ marginBottom: '1rem' }} label="Img Url" variant="standard" />
            </div>
        </DialogContent>
        <DialogActions className='mr-7 mb-2'>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="contained" onClick={handleAddBook}>Add</Button>
        </DialogActions>
        <ToastContainer />
    </Dialog>

</>
  )
}

export default AddBook