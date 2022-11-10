import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='uppercase font-bold mb-5 md:text-2xl 
      lg:text-4xl '>ERROR 404 | PAGE NOT FOUND</h1>

      <Link to="/" className='py-2 px-6 text-white bg-gray-900 
                hover:bg-transparent border-2 border-gray-900 transition-all
                 hover:text-gray-900 font-bold rounded-md lg:text-2xl md:text-xl'>Back to homepage</Link> 
    </div>
  )
}
