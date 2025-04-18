import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const columns = [
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'fullname', headerName: 'Full Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

function UserTable() {
    const [rows, setRows] = useState([])

    useEffect(() => {
        getAllUsers()
}, [])

    async function getAllUsers() {
        try {
            const { data: resp } = await axios.get('http://localhost:5000/getusers')
            if (resp.success) {
                setRows(resp.users)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
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
    )
}

export default UserTable