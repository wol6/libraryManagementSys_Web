import React, { useEffect, useState } from 'react'
import bookImg from '../../assets/book_test.jpg'
import axios from 'axios'
import Ax from '../lib/axiosinstance'
import { useDispatch, useSelector } from 'react-redux'
import { setAllBooks } from '../redux/bookSlice'
import { toast, ToastContainer } from 'react-toastify'
import Button from '@mui/material/Button';

function Home() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const { allBooks, searchResults } = useSelector(state => state.books)
  // const [books, setBooks] = useState([])

  async function getAllBooks() {
    try {
      const { data: resp } = await Ax.get('/getbook', {
        params: {
          page,
          limit:5
        }
      })
      if (resp.success) {
        // setBooks(resp.books)
        dispatch(setAllBooks(resp.books))
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getAllBooks()
  }, [page])

  async function handleBook(bookId) {
    const userId = localStorage.getItem('userId')
    console.log(trnsType)
    if(!userId){
      toast(`Login to Borrow Book`)
    }else{
      try{
        
      }catch(e){
        console.log(e)
        const {resp:data} = Ax.post('/mylibrary',{
          userId,bookId,
        })
      }
    }
  }

  const booksToShow = searchResults.length > 0 ? searchResults : allBooks
  return (
    <>
      {/* <h1 className='text-center text-2xl'>Library</h1> */}
      <div className='flex flex-wrap'>
        {booksToShow.map((book) => {
          return (
            <div className='w-40 ml-12 mb-8 flex flex-col items-center' key={book._id}>
              <img src={book.imgurl} alt="" />
              <p className='text-center'>{book.bookname}</p>
              <p className='text-center'>{book.author}</p>
                  <Button style={{ color: '#155e75' }} variant="text" onClick={()=>handleBook(book._id)}>
                  {book.availabilityStatus? 'Borrow' : 'Not Available'}
                </Button>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center gap-4 mt-4">
  <button 
    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
    onClick={() => setPage(p => p - 1)} 
    disabled={page === 0}
  >
    Previous
  </button>
  <button 
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    onClick={() => setPage(p => p + 1)}
  >
    Next
  </button>
</div>

      <ToastContainer />
    </>
  )
}

export default Home