import React, { useEffect, useState } from 'react'
import loginImg from '../../../assets/login2.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Register from './Register';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Checkbox from '@mui/material/Checkbox';
import Ax from '../../lib/axiosinstance';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Login() {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [open, setOpen] = useState(false);
    const [userLogin, setUserLogin] = useState({
        userName: "",
        password: "",
        admin: false
    })
    useEffect(() => {

    }, [])
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (msg) => {
        setOpen(false);
        if (msg) {
            toast.info(msg, {
                position: "top-center"
            })
        }
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
        setLoader(true)
        try {

            const { data: resp } = await Ax.post('/signin', userLogin)
            if (resp.success) {
                toast.info('Logged in', {
                    position: "top-center"
                })
                localStorage.setItem('token', resp.token)
                localStorage.setItem('isAdmin', resp.isAdmin)
                localStorage.setItem('isUser', resp.isUser)
                localStorage.setItem('name', resp.name)
                localStorage.setItem('userId', resp.userId)
                const redirectTo = resp.isAdmin ? '/admin/dashboard' : '/dashboard'
                navigate(redirectTo)
            } else {
                toast.info('Invalid Credential', {
                    position: "top-center"
                })
            }


        } catch (e) {
            console.log(e)
        } finally {
            setLoader(false)
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
                            style={{ backgroundColor: '#155e75' }} variant="contained">{loader ? <CircularProgress color="inherit" size={26} /> : 'Login'} </Button>
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