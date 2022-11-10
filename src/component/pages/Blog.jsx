import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import client from "../../client"

const Blog = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  

  console.log(posts)
  return (
    <>
      <section className='px-5  2xl:max-w-7xl 2xl:mx-auto'>
        <h1 className='font-bold text-4xl mt-5 mb-10 tracking-widest 
        text-center md:text-xl lg:text-2xl'>Blog Page</h1>
       
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map(post => (
            <article key={post.slug.current} className="bg-slate-100 rounded-md  shadow-6xl p-2 ">
                
                <Link to={`/blog/${post.slug.current}`}>
                <img src={post.mainImage.asset.url} alt={post.title}/>
                </Link>

                <h4 className='text-xl mt-2'>{post.title}</h4>
               <button className='mt-5 mb-2'>
               <Link to={`/blog/${post.slug.current}`} className='py-2 px-6 text-white bg-black 
                hover:bg-transparent border-2 border-zinc-900 transition-all
                 hover:text-zinc-900 font-bold rounded-md'>Read Full article</Link>
               </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog