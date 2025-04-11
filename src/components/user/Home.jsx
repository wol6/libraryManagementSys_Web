import React from 'react'
import bookImg from '../../assets/book_test.jpg'

const books = [
  {
    id: 1,
    title: 'The Richest Man in Babylon',
    author: 'George S. Clason',
    image: bookImg,
  },
  {
    id: 2,
    title: 'The Richest Man in Babylon',
    author: 'George S. Clason',
    image: 'https://m.media-amazon.com/images/I/71HX66uNvfL._SY342_.jpg',
  },
];

function Home() {
  return (
  <>
  <h1 className='text-center text-2xl'>Library</h1>
    <div className='flex'>
        {/* <div className='border-2 w-45 ml-12'>
          <img src={book} alt="" />
          <button className='ml-12'>Borrow</button>
        </div>

        <div className='border-2 w-45 ml-12'>
          <img src='https://m.media-amazon.com/images/I/71HX66uNvfL._SY342_.jpg' alt="" />
          <button className='ml-12'>Borrow</button>
        </div> */}

        {books.map((book)=>{
          return(
           <div className='border-0 w-60 ml-12' key={book.id}>
           <img src={book.image} alt="" />
           <p className='text-center'>{book.title}</p>
           <p className='text-center'>{book.author}</p>
           <button className='ml-20'>Borrow</button>
         </div>
          )
        })}

    </div>
  </>
  )
}

export default Home