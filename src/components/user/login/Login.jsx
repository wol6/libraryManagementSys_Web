import React from 'react'
import loginImg from '../../../assets/login2.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    return (
        <div className='md:flex items-center md:mt-10'>
            <div className=' md:ml-75'>
                <p className='text-2xl text-center'>Login Here</p>
                <div className='flex flex-col p-5 w-100%'>
                    <TextField className='md:w-80' sx={{ marginBottom: '1rem'}} label="User Name" variant="standard" />
                    <TextField className='md:w-80' sx={{ marginBottom: '1.5rem'}}  label="Password" variant="standard" />
                    <Button variant="contained">Login</Button>
                </div>
            </div>
            <div className='flex justify-center pt-2'>
                <img src={loginImg} alt="reading" className='w-[360px] md:h-[200px]' />
            </div>
        </div>
    )
}

export default Login