import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Headers from '../../layouts/Headers';
import Ax from '../../lib/axiosinstance';
import Button from '@mui/material/Button';
import Register from '../../user/login/Register';
import { ToastContainer, toast } from 'react-toastify';

const paginationModel = { page: 0, pageSize: 5 };

function UserTable() {
    const [rows, setRows] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
    const [open, setOpen] = useState(false);
    const [isedit, setIsedit] = useState({})

    const columns = [
        { field: 'username', headerName: 'User Name', width: 130 },
        { field: 'fullname', headerName: 'Full Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            sortable: false,
            renderCell: (params) => (
                <div>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(params.row)}
                        style={{ marginRight: 8 }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(params.row._id)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        }
    ];

    useEffect(() => {
        getAllUsers()
        setIsAdmin(localStorage.getItem('isAdmin'))
    }, [])

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        getAllUsers()
    }

    async function getAllUsers() {
        try {
            const { data: resp } = await Ax.get('/getusers')
            if (resp.success) {
                setRows(resp.users)
            }
        } catch (e) {
            console.log(e)
        }
    }
    async function handleEdit(row) {
        handleOpen()
        setIsedit(row)
    }
    async function handleDelete(id) {
        const { data: resp } = await Ax.delete('/deleteuser', {
            data: { id }
        })

        if (resp.success) {
            toast('Deleted Successfully')
            getAllUsers()
        }
    }

    return (
        <>
            <Headers isAdmin={isAdmin} />
            <div className='ml-75'>
                <Paper sx={{ height: 400, width: '65%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row._id}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        // checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
            {open && <Register open={open} onEdit={isedit}
                onClose={handleClose} />}
            <ToastContainer />
        </>
    )
}

export default UserTable