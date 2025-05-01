import React, { useEffect, useState } from 'react'

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
import Ax from '../../lib/axiosinstance';
import CircularProgress from '@mui/material/CircularProgress';

function AddBook({ open, onClose, onEdit }) {
    const [loader, setLoader] = useState(false)
    const [books, setBooks] = useState({
        bookname: "",
        author: "",
        imgurl: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setBooks(prev => {
            return { ...prev, [name]: value };
        });
    }
    async function handleAddBook() {
        setLoader(true)
        try {
            const url = onEdit ? "/addbook" : "/updatebook"
            const { data: resp } = await Ax.post(url, books)
            if (resp.success) {
                toast('Successfully Added')
                onClose()
            } else {
                toast(resp.msg)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoader(false)
        }
    }
    useEffect(() => {
        if (onEdit) setBooks(onEdit)
    }, [onEdit])
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Slide}
                keepMounted
                onClose={onClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className='text-center'>{onEdit ? 'Edit Book' : 'Add Book'}</DialogTitle>
                <DialogContent>
                    <div className='flex flex-col p-5 w-100%'>
                        <TextField onChange={handleChange} name='bookname' value={books.bookname}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="Name" variant="standard" />
                        <TextField onChange={handleChange} name='author' value={books.author}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="Author" variant="standard" />
                        <TextField onChange={handleChange} name='imgurl' value={books.imgurl}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="Img Url" variant="standard" />
                    </div>
                </DialogContent>
                <DialogActions className='mr-7 mb-2'>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleAddBook}>
                        {loader ? <CircularProgress color="inherit" size={26} /> : onEdit ? 'Update' : 'Add'}</Button>
                </DialogActions>
                <ToastContainer />
            </Dialog>

        </>
    )
}

export default AddBook