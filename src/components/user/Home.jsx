import React from 'react'
import book from '../../assets/book_test.jpg'

function Home() {
  return (
  <>
  <h1 className='text-center text-2xl'>Library</h1>
    <div className='flex'>
        <div className='border-2 w-45 ml-12'>
          <img src={book} alt="" />
          <button className='ml-12'>Borrow</button>
        </div>

        <div className='border-2 w-45 ml-12'>
          <img src='https://m.media-amazon.com/images/I/71HX66uNvfL._SY342_.jpg' alt="" />
          <button className='ml-12'>Borrow</button>
        </div>

    </div>
  </>
  )
}

export default Home