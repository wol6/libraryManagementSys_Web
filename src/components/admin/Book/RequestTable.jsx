import React, { useEffect, useState } from 'react'
import Headers from '../../layouts/Headers'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Ax from '../../lib/axiosinstance';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from 'react-toastify';

const paginationModel = { page: 0, pageSize: 5 };

function RequestTable() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [rows, setRows] = useState([])

  const columns = [
    // { field: '_id', headerName: 'ID', width: 70 },
    { field: 'fullname', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'bookname', headerName: 'Book Name', width: 130 },
    // { field: 'availabilityStatus', headerName: 'Availability Status', width: 130 },
    {
      field: 'actions',
      headerName: 'Approve',
      width: 185,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => handleApproveRequest(params.row)}
            style={{ marginRight: 8 }}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Decline
          </Button>
        </div>
      ),
    }

  ];

  useEffect(() => {
    handleRequests()
    setIsAdmin(localStorage.getItem('isAdmin'))
  }, [])

  async function handleApproveRequest(row) {
    try {
      const { data: resp } = await Ax.post('/approve', { id: row.id })
      if (resp.success) {
        toast('Approved Successfully')
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function handleDelete(id) {
    try {
      const { data: resp } = await Ax.post('/decline', { id })
      if (resp.success) {
        toast('Declined Approval')
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function handleRequests() {
    try {
      const { data: resp } = await Ax.get('/requests')
      if (resp.success) {
        const requestList = resp.allRequest.map((elm) => {
          return {
            id: elm._id,
            fullname: elm.userdetails.fullname,
            username: elm.userdetails.username,
            bookname: elm.bookdetails.bookname,
          }
        })
        setRows(requestList)
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
            getRowId={(row) => row.id}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
        <ToastContainer />
      </div>
    </>
  )
}

export default RequestTable