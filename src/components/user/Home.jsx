import React, { useEffect, useState } from 'react'
import bookImg from '../../assets/book_test.jpg'
import axios from 'axios'
import Ax from '../lib/axiosinstance'
import { useDispatch, useSelector } from 'react-redux'
import { setAllBooks } from '../redux/bookSlice'
import { toast,ToastContainer } from 'react-toastify'

function Home() {
  const dispatch = useDispatch()
  const { allBooks, searchResults } = useSelector(state => state.books)
  // const [books, setBooks] = useState([])

  async function getAllBooks() {
    try {
      const { data: resp } = await Ax.get('/getbook')
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
  }, [])

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
              <button className='hover:cursor-pointer'>Borrow</button>
            </div>
          )
        })}
      </div>
      <ToastContainer/>
    </>
  )
}

export default Home