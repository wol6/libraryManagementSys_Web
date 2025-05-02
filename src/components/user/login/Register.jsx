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
import Checkbox from '@mui/material/Checkbox';
import Ax from '../../lib/axiosinstance';
import { toast, ToastContainer } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';

function Register({ open, onClose, onEdit }) {
    const [loader, setLoader] = useState(false)
    const [userObj, setUserObj] = useState({
        userName: "",
        fullName: "",
        emailId: "",
        password: "",
        confirmPassword: "",
        admin: false
    })

    function toggelAdmin(e) {
        setUserObj(prev => {
            return { ...prev, admin: !prev.admin }
        })
    }
    // Handle input field changes and update state
    function handleChange(e) {
        const { name, value } = e.target;
        setUserObj(prev => {
            return { ...prev, [name]: value };
        });
    }
    async function handleSignUp() {
        setLoader(true)
        const url = onEdit ? '/updateuser' : '/signup'
        try {
            const { data: resp } = await Ax.post(url, { userObj })
            if (resp.success) {
                toast(resp.msg)
                onClose(resp.msg)
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
        if (onEdit) {
            setUserObj(
                {
                    userName: onEdit.username || '',
                    fullName: onEdit.fullname || '',
                    emailId: onEdit.email || '',
                }
            )
        }
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
                <DialogTitle className='text-center text-cyan-800'>{onEdit ? "Update User" : "Register"}</DialogTitle>
                <DialogContent>
                    <div className='flex flex-col p-5 w-100%'>
                        <TextField onChange={handleChange} name='userName' value={userObj.userName}  disabled ={onEdit}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="User Name" variant="standard" />
                        <TextField onChange={handleChange} name='fullName' value={userObj.fullName}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="Name" variant="standard" />
                        <TextField onChange={handleChange} name='emailId' value={userObj.emailId}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="Email" variant="standard" />
                        {!onEdit && <TextField type='password' onChange={handleChange} name='password' 
                            className='md:w-80' sx={{ marginBottom: '1.5rem' }} label="Password" variant="standard" />}
                        {!onEdit && <TextField type='password' onChange={handleChange} name='confirmPassword' 
                            className='md:w-80' sx={{ marginBottom: '1.5rem' }} label="Confirm Password" variant="standard" />}
                        {/* <TextField className='md:w-80' sx={{ marginBottom: '1rem' }} label="Mobile no" variant="standard" /> */}
                        {/* <Button variant="contained">Register</Button> */}
                        {!onEdit && <div className='flex items-center' title="Check the box for admin privileges">
                            <Checkbox name="admin" checked={userObj.admin} onChange={toggelAdmin} />
                            Admin
                        </div>}
                    </div>
                </DialogContent>
                <DialogActions className='mr-7 mb-2'>
                    <Button style={{ color: '#155e75' }} onClick={onClose}>Cancel</Button>
                    <Button style={{ backgroundColor: '#155e75' }} variant="contained" onClick={handleSignUp}>
                        {loader ? <CircularProgress color="inherit" size={26} /> : onEdit ? 'Update' : 'Register'}</Button>
                </DialogActions>
                <ToastContainer />
            </Dialog>

        </>
    )
}

export default Register