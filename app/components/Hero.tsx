import React from 'react'
import Image from 'next/image'
import Typeanimations from './Typeanimations'


const Hero = () => {
  return (
    <div className='md:flex md:flex-row md:p-24 flex-col md:items-center items-center justify-center'>
       {/* Hero */}
       <Image
         className='rounded-full mx-auto mt-10 mb-5'
         src="/c.png"
         width={300}
         height={300}
         alt="Picture of the author"
        />
        <div >
          <div className='text-center px-10'>
            <Typeanimations />
          </div>
          <div className='text-xl font-bold text-white mx-10 my-5'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius, cumque omnis assumenda laboriosam id mollitia accusamus placeat aliquam incidunt culpa consectetur, numquam recusandae dolorem rem alias beatae illo? Mollitia.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ea sed nihil, quae rem, doloribus sit aliquam unde deleniti reiciendis asperiores fugiat similique quia, aliquid necessitatibus dolorem consectetur in et.
          </div>
        <div className='flex items-center justify-center'>
            <button className='rounded-lg p-4 bg-blue-900 font-bold'> Learn more</button>
        </div>
     </div>
</div>

  )
}

export default Hero
