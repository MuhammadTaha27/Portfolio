import React from 'react'
import Contact from '../components/ContactForm'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className="bg-gradient-to-t from-blue-950 to-yellow-300 h-full ">
      <Navbar/>
      <div className="text-xl font-bold text-center p-10">
        
        <h1 className="text-xl font-bold text-center ">Contact Form:</h1>
        <Contact/>
      </div>
      
    </div>
  )
}

export default page
