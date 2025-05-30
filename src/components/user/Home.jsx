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
  const [mylibrary, setMylibrary] = useState([])
  // const [books, setBooks] = useState([])
  const userId = localStorage.getItem('userId')

  async function getAllBooks() {
    try {
      const { data: resp } = await Ax.get('/getbook', {
        params: {
          page,
          limit: 6
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
  async function getLibrary() {
    try {
      const { data: resp } = await Ax.post('/library', {
        userId
      })
      if (resp.success) {
        setMylibrary(resp.mylibrary)
      }
    } catch (e) {
      console.log(e)
    }
  }
  async function handleBook(bookId) {
    if (!userId) {
      toast.info(`Login to Borrow Book`, {
        position: "top-center"
      })
    } else {
      try {
        const { data: resp } = await Ax.post('/updatelibrary', {
          userId, bookId,
        })
        if (resp.success) {
          getLibrary()
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    getAllBooks()
    getLibrary()
  }, [page])



  const booksToShow = searchResults.length > 0 ? searchResults : allBooks
  return (
    <>
      {/* <h1 className='text-center text-2xl'>Library</h1> */}
      <div className='flex flex-wrap mt-10'>
        {booksToShow.map((book) => {
          return (
            <div className='w-40 ml-12 mb-8 flex flex-col items-center' key={book._id}>
              <img src={book.imgurl} alt="" />
              <p className='text-center'>{book.bookname}</p>
              <p className='text-center'>{book.author}</p>
              <Button
                style={{
                  color: (() => {
                    const entry = mylibrary.find(mylib => mylib.bookdetails === book._id);
                    if (entry) {
                      if (entry.isapproved) return '#16a34a'; // Green for 'Borrowed'
                      else return '#eab308'; // Yellow for 'Requested'
                    } else {
                      return book.availabilityStatus ? '#155e75' : '#6b7280'; // Default blue for 'Borrow', grey if not available
                    }
                  })(),
                }}
                variant="text"
                disabled={!book.availabilityStatus}
                onClick={() => handleBook(book._id)}
              >
                {(() => {
                  const entry = mylibrary.find(mylib => mylib.bookdetails === book._id);
                  if (entry) {
                    if (entry.isapproved) return 'Borrowed';
                    else return 'Requested';
                  } else {
                    return book.availabilityStatus ? 'Borrow' : 'Not Available';
                  }
                })()}
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