import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Ax from '../../lib/axiosinstance';
import Headers from '../../layouts/Headers';

const columns = [
    // { field: '_id', headerName: 'ID', width: 70 },
    { field: 'bookname', headerName: 'Book Name', width: 130 },
    { field: 'author', headerName: 'Author', width: 130 },
    { field: 'imgurl', headerName: 'Image url', width: 130 },
    { field: 'availabilityStatus', headerName: 'Availability Status', width: 130 },
    {
        field: 'edit',
        headerName: 'Action',
        description: 'To edit the field',
        sortable: false,
        width: 130
    },
];

const paginationModel = { page: 0, pageSize: 5 };

function BookTable() {
    const [rows, setRows] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        getAllBooks()
        setIsAdmin(localStorage.getItem('isAdmin'))
    }, [])

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