import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (<>
    <header className='flex items-center justify-between bg-gray-800
     text-white p-4'>
      <div className="logo">
        <Link to="/">
          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl '>Alpha's Blog</h2>
        </Link>
      </div>

      <nav className=''>
        <ul className='flex'>
          <li className='mr-5 lg:text-3xl hover:bg-gray-600 px-3 py-1 rounded-md'>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li> 

          <li className='lg:text-3xl hover:bg-gray-600 px-3 py-1 rounded-md'>
            <button>
              <Link to="/blog">Blog</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
  )
}

export default Header