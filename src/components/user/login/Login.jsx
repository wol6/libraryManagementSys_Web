import React, { useState } from 'react'
import loginImg from '../../../assets/login2.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Register from './Register';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Checkbox from '@mui/material/Checkbox';
import Ax from '../../api/axiosinstance';


function Login() {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const [userLogin, setUserLogin] = useState({
        userName: "",
        password: "",
        admin: false
    })
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    function handleChange(e) {
        const { name, value } = e.target;
        setUserLogin(prev => {
            return { ...prev, [name]: value };
        });
    }

    function toggelAdmin(e) {
        setUserLogin(prev => {
            return { ...prev, admin: !prev.admin }
        })
    }

    async function handleSignIp(params) {
        try {

            const { data: resp } = await axios.post('http://localhost:5000/api/signin', userLogin)
            console.log(resp)
            if (resp.success) {
                toast('Logged in')
                localStorage.setItem('token',resp.token)
                navigate('/admin/dashboard')
            } else {
                toast('Invalid Credential')
            }


        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className='md:flex items-center md:mt-10 text-cyan-800'>
                <div className=' md:ml-75'>
                    <p className='text-2xl text-center'>Login Here{userLogin.admin && `(Admin)`}</p>
                    <div className='flex flex-col p-5 w-100%'>
                        <h1>{userLogin.admin}</h1>
                        <TextField onChange={handleChange} name='userName'
                            className='md:w-80' sx={{ marginBottom: '1rem' }} label="User Name" variant="standard" />
                        <TextField onChange={handleChange} name='password' type='password'
                            className='md:w-80' sx={{ marginBottom: '1.5rem' }} label="Password" variant="standard" />
                        <div className='flex items-center'>
                            <Checkbox name="admin" checked={userLogin.admin} onChange={toggelAdmin} />
                            Admin
                        </div>
                        <Button onClick={handleSignIp}
                            style={{ backgroundColor: '#155e75' }} variant="contained">Login</Button>
                    </div>
                </div>
                <div className='flex justify-center pt-2'>
                    <img src={loginImg} alt="reading" className='w-[360px] md:h-[200px]' />
                </div>
            </div>
            <div className='ml-28 mt-3 md:ml-96 '>
                <Button style={{ color: '#155e75' }} variant="text" onClick={handleClickOpen}>
                    Click to register here
                </Button>
            </div>
            {open && <Register open={open} onClose={handleClose} />}
            <ToastContainer />
            <div className='mt-25'>
                <Footer />
            </div>
        </>
    )
}

export default Login