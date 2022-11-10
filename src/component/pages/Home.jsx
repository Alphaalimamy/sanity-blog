import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className='flex flex-col items-center  justify-center text-center h-screen'>
                <h1 className='uppercase font-bold mb-5 md:text-8xl lg:text-6xl'>Alpha's blog</h1>

                <button className='mt-5'>
                    <Link to="/blog" className='capitalize lg:text-4xl py-4 px-8 text-white bg-gray-900 
                hover:bg-transparent border-2 border-gray-900 transition-all
                 hover:text-gray-900 font-bold rounded-md' >Read my blog posts </Link>
                </button>
              
            </section>
        </div>
    )
}

export default Home