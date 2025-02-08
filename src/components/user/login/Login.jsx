import React from 'react'
import loginImg from '../../../assets/login.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    return (
        <div className='lg:flex justify-around'>
            <div>
                <p className='text-2xl text-center'>Login Here</p>
                <div className='flex flex-col p-5 w-100%'>
                    <TextField sx={{ marginBottom: '1rem'}} label="User Name" variant="standard" />
                    <TextField sx={{ marginBottom: '1.5rem'}}  label="Password" variant="standard" />
                    <Button variant="contained">Login</Button>
                </div>
            </div>
            <div>
                <img src={loginImg} alt="reading" className='w-[500px]' />
            </div>
        </div>
    )
}

export default Login