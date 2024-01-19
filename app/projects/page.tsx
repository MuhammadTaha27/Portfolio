import React from 'react'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'

const page = () => {
  return (
   <div className='bg-gradient-to-t from-blue-950 to-yellow-300 h-full pb-6 '>
      <Navbar />
      <Projects />
   </div>
  )
}

export default page
