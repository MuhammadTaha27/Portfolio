'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };  
  return (
    <div>
      <header className='bg-blue-950  '>
        <div className=' flex justify-between items-center '>
          <h1 className='py-4 px-8 text-4xl font-extrabold bg-clip-text text-transparent w-52 bg-gradient-to-r from-yellow-600 to-yellow-500'>
            Portfolio.
          </h1> 
          <button className="md:hidden space-y-2 px-5"
                  onClick={toggleVisibility} >
                  <div className="md:hidden space-y-2 p-5">
                     <div className="w-8 h-0.5 bg-white"></div>
                     <div className="w-8 h-0.5 bg-white"></div>
                     <div className="w-8 h-0.5 bg-white"></div>
                  </div>
          </button>
          <div className='hidden md:flex items-center justify-end '>
            <Link href="/"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Home
            </Link>
            <Link href="/projects"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Projects
            </Link>
            <Link href="/contact"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Contact Me
            </Link>
          </div>
        </div>
        {isHidden ?  (
          <div className='hidden  w-full bg-blue-950 p-4'>
            <Link href="/"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Home
            </Link>
            <Link href="/projects"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Projects
            </Link>
            <Link href="/contact"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Contact Me
            </Link>
            
          </div>

        ):(
        <div className=' md:hidden w-full px-auto bg-blue-950 p-4'>
         
            <Link href="/"   className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Home
            </Link>
            <Link href="/projects"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Projects
            </Link>
            <Link href="/contact"  className='text-white font-bold text-xl p-7 hover:text-red-700 block'>
              Contact Me
            </Link>
          </div>
          )}
      </header>
    </div>
  )
}

export default Navbar
