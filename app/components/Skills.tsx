import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='flex flex-col text-4xl font-bold pt-24 text-white' >
        <h1 className='text-center text-4xl font-bold pb-12 text-white'>
          Skills and Interests
        </h1>
        <div className='md:flex justify-center  '>
          <div className='flex flex-col items-center'>
            <div className='p-10 flex items-center'>
              <Image
                className='rounded-full ml-0 mr-2 '
                src="/c.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <h1>nextjs</h1>
            </div>
            <div className='p-10 flex items-center'>
               <Image
                className='rounded-full ml-0 mr-2 '
                src="/c.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <h1>nextjs</h1>
            </div>
          </div >
          <div className='flex flex-col items-center'>
             <div className='p-10 flex items-center'>
              <Image
                className='rounded-full ml-0 mr-2 '
                src="/c.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <h1>nextjs</h1>
             </div>
             <div className='p-10 flex items-center'>
              <Image
                className='rounded-full ml-0 mr-2 '
                src="/c.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <h1>nextjs</h1>
             </div>
          </div>
          
        </div>
      </div>
  )
}

export default Skills
