'use client'
import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const Typeanimations = () => {
  return (
    
       <TypeAnimation className='font-bold text-white'
             sequence={[
        // Same substring at the start will only be typed out once, initially
        'IoT Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Software engineer',
        2000,
        'Fullstack Developer',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

  )
}

export default Typeanimations