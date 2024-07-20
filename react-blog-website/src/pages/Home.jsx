import React from 'react'
import Banner from '../assets/components/Banner'
import BlogPage from '../assets/components/BlogPage'

function Home() {
  return (<>
  <Banner/>
  <div className='max-w-7xl mx-auto lg:mx-20'>
    <BlogPage />
  </div>
  </>
  )
}

export default Home
