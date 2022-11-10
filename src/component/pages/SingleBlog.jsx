import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import BlockContent from "@sanity/block-content-to-react"
import client from "../../client"

const SingleBlog = () => {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])


  return (
    <>
      {isLoading ? <h2 className='uppercase font-bold mb-5 md:text-8xl 
      lg:text-6xl flex items-center justify-center h-screen'>Loading...</h2> : (
        <section className='px-5 xl:max-w-6xl xl:mx-auto pb-10'>
          <h1 className='uppercase font-bold mb-5 md:text-2xl 
          lg:text-4xl text-center'>{singlePost.title}</h1>
          {
            singlePost.mainImage && singlePost.mainImage.asset && (
              <img src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
                className="blog__image  rounded-t" />
            )
          }
          <div className='mb-4 block__content'>
            <BlockContent blocks={singlePost.body}
              projectId="qit7ockg" dataset="production" />
          </div>


          <button>
            <Link to="/blog" className='py-2 px-6 text-white bg-black 
                hover:bg-transparent border-2 border-zinc-900 transition-all
                 hover:text-zinc-900 font-bold rounded-md'>Read More Articles</Link>
          </button>
        </section>
      )}
    </>
  )
}

export default SingleBlog