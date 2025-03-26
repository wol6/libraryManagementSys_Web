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


function Register({ open, onClose }) {
    const [userObj, setUserObj] = useState({
        userName: "",
        fullName: "",
        emailId: "",
        password: "",
        confirmPassword: "",
    })

    // Handle input field changes and update state
    function handleChange(e) {
        const { name, value } = e.target;
        setUserObj(prev => {
            return { ...prev, [name]: value };
        });
    }
  async  function handleSignUp(userDta) {
        const {data:resp} = await axios.post('http://localhost:5000/signup', { userObj })
        console.log(resp)
        if (resp) {
            console.log(resp.success)
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
                <DialogTitle className='text-center text-cyan-800'>{"Register"}</DialogTitle>
                <DialogContent>
                    <div className='flex flex-col p-5 w-100%'>
                        <TextField onChange={handleChange} name='userName' value={userObj.userName}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="User Name" variant="standard" />
                        <TextField onChange={handleChange} name='fullName' value={userObj.fullName}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="Name" variant="standard" />
                        <TextField onChange={handleChange} name='emailId' value={userObj.emailId}
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="Email" variant="standard" />
                        <TextField onChange={handleChange} name='password' value={userObj.password}
                            className='md:w-80' sx={{ marginBottom: '1.5rem' }} label="Password" variant="standard" />
                        <TextField onChange={handleChange} name='confirmPassword' value={userObj.confirmPassword}
                            className='md:w-80' sx={{ marginBottom: '1.5rem' }} label="Confirm Password" variant="standard" />
                        {/* <TextField className='md:w-80' sx={{ marginBottom: '1rem' }} label="Mobile no" variant="standard" /> */}
                        {/* <Button variant="contained">Register</Button> */}
                    </div>
                </DialogContent>
                <DialogActions className='mr-7 mb-2'>
                    <Button style={{ color: '#155e75' }} onClick={onClose}>Cancel</Button>
                    <Button style={{ backgroundColor: '#155e75' }} variant="contained" onClick={handleSignUp}>Register</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default Register