import React from 'react'
import Footer from '../layouts/Footer'

function About() {
  return (
    <>
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-cyan-800">About the Library Management System</h1>
      
      <p className="mb-4">
        Our Library Management System is designed to simplify the management of books, members, and borrowing activities. 
        It provides administrators with tools to manage the library effectively and users with easy access to the catalog.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-cyan-700">Key Features:</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Admin dashboard to manage books and members</li>
        <li>Book borrowing and return tracking</li>
        <li>User-friendly interface for members</li>
        <li>Secure login for both admins and users</li>
        <li>Real-time updates and search functionality</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-cyan-800">Our Mission</h2>
      <p>
        To make library operations more efficient and accessible through smart, digital solutions.
      </p>
    </div>
    <Footer/>
    </>
  )
}

export default About
