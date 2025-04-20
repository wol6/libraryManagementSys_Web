import React, { useEffect, useState } from 'react'
import bookImg from '../../assets/book_test.jpg'
import axios from 'axios'
import Ax from '../lib/axiosinstance'


function Home() {
  const [books, setBooks] = useState([])

  async function getAllBooks() {
    try {
      const { data: resp } = await Ax.get('/getbook')
      if (resp.success) {
        setBooks(resp.books)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getAllBooks()
  }, [])
  return (
    <>
      {/* <h1 className='text-center text-2xl'>Library</h1> */}
      <div className='flex flex-wrap'>
        {books.map((book) => {
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
    </>
  )
}

export default Home