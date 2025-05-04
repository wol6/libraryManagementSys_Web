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
  const [freezebtn, setFreezebtn] = useState(false)

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
            disabled={freezebtn}
            onClick={() => handleApproveRequest(params.row)}
            style={{ marginRight: 8 }}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            disabled={freezebtn}
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
    setFreezebtn(false)
  }, [])

  async function handleApproveRequest(row) {
    try {
      const { data: resp } = await Ax.post('/approve', { id: row.id })
      if (resp.success) {
        toast('Approved Successfully')
        handleRequests()
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
        handleRequests()
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

  async function handleAllReturnReq(dueDate) {
    setFreezebtn(true)
    try {
      const { data: resp } = await Ax.get('/returnreq',{params:{dueDate}})
      if (resp.success) {
        const requestList = resp.allRequest.map((elm) => {
          return {
            id: elm._id,
            fullname: elm.userdetails.fullname ?? '',
            username: elm.userdetails.username ?? '',
            bookname: elm.bookdetails.bookname ?? '',
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
      <div className='ml-20 mt-10 flex justify-around'>
        <div>
          <Paper sx={{ height: 400, width: '100%' }}>
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
        </div>

        <div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={()=>handleAllReturnReq('')}
              // sx={{ marginLeft: '550px', marginBottom: '5px', textTransform: 'none' }}
            >
              View Return List
            </Button>
          </div>
          <div className='mt-2'>
          <Button
              variant="contained"
              color="primary"
              onClick={()=>handleAllReturnReq('due')}
              // sx={{ marginLeft: '550px', marginBottom: '5px', textTransform: 'none' }}
            >
              View Due Date
            </Button>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  )
}

export default RequestTable