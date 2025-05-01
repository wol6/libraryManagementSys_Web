import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Ax from '../../lib/axiosinstance';
import Headers from '../../layouts/Headers';
import Button from '@mui/material/Button';


const paginationModel = { page: 0, pageSize: 5 };

function BookTable() {
    const [rows, setRows] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)

    const columns = [
        // { field: '_id', headerName: 'ID', width: 70 },
        { field: 'bookname', headerName: 'Book Name', width: 130 },
        { field: 'author', headerName: 'Author', width: 130 },
        { field: 'imgurl', headerName: 'Image url', width: 130 },
        { field: 'availabilityStatus', headerName: 'Availability Status', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
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
        getAllBooks()
        setIsAdmin(localStorage.getItem('isAdmin'))
    }, [])

    async function handleEdit(row) {
        console.log(row)
    }

    async function handleDelete(id) {
        const confirmed = window.confirm('Are you sure you want to delete this item?');
        if (confirmed) {
            setRows(prevRows => prevRows.filter(row => row._id !== id));
        }
    }

    async function getAllBooks() {
        try {
            const { data: resp } = await Ax.get('/getbook')
            if (resp.success) {
                setRows(resp.books)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Headers isAdmin={isAdmin} />
            <div className='ml-75 mt-10'>
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
        </>
    )
}

export default BookTable