import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

import Navigation from '../../layouts/Navigation'
import Ax from '../../lib/axiosinstance';

const paginationModel = { page: 0, pageSize: 5 };

function MyLibrary() {
  const [isUser, setIsUser] = useState(false)
  const [userid, setUserid] = useState('')
  const [rows, setRows] = useState([])

  const columns = [
    { field: 'bookname', headerName: 'Book Name', width: 130 },
    { field: 'author', headerName: 'Author', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },]

  useEffect(() => {
    setIsUser(localStorage.getItem('isUser'))
    setUserid(localStorage.getItem('userId'))
    getMyLibrary()
  }, [])

  async function getMyLibrary() {
    const userId = localStorage.getItem('userId')
    try {
      const { data: resp } = await Ax.get('/mylibrary', {
        params: {
          userId
        }
      })
      if (resp.success) {
        const mylibrary = resp.mylibrary.map((elm)=>{
          return{
            _id:elm._id,
            bookname:elm.bookdetails.bookname,
            author:elm.bookdetails.author,
            status:elm.isapproved ? 'Accepetd':'Pending'
          }
        })
        setRows(mylibrary)
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Navigation isUser={isUser} />
      <div className='ml-75'>
        <Paper sx={{ height: 400, width: '55%' }}>
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

export default MyLibrary