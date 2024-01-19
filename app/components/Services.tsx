import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const url = `${process.env.BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`
console.log(url);
export default async function Services () {
  const response = await fetch(url,{
    cache:'no-store'
  })
  const data = await response.json()


  return (
        <div >
            <h1 className='text-center text-5xl font-bold text-white p-20'>
              Services
            </h1>
            <div className='flex flex-col '>
              <div className=" box-border h-[250px] w-[350px] mx-auto md:h-[400px] md:w-[500px] rounded-xl md:ml-[650px] mb-12 bg-yellow-500 ">
                  {/* Your content goes here */}
                  <h1 className='text-center text-xl font-bold mt-2  text-white md:text-3xl md:mt-10 md:font-bold'>
                    Fullstack Development
                  </h1>
                  <div className='pl-5 pb-2 md:mt-5 md:mb-5 md:text-xl md:font-bold text-white'>
                   {
                     data.items.map((a:any,index:number)=>(
                       <div key ={index}>
                           <div >{documentToReactComponents(a.fields.fullstackDevelopment)}
                            </div>
                       </div>    
                       ))
                      }
                  </div>
                  <div className='flex justify-center'>
                    <button className='bg-blue-900 rounded-lg text-center p-1 font-bold'>Learn more</button>
                  </div>
                  
              </div>
              <div className=" box-border md:h-[400px] md:w-[500px] h-[250px] w-[350px] mx-auto rounded-xl md:ml-[150px] mb-12 bg-yellow-500 ">
                  {/* Your content goes here */}
                  <h1 className='text-center text-xl font-bold mt-2  text-white md:text-3xl md:mt-10 md:font-bold '>
                    IoT Development
                  </h1>
                  <h1 className=' pl-5 pb-2 md:mt-5 md:mb-5 md:text-xl md:font-bold text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quisquam, non accusamus ipsum tempora est, eligendi praesentium facilis ab maiores possimus voluptatum dicta ullam perspiciatis nostrum mollitia et vel in.
                  </h1>
                  <div className='flex justify-center'>
                     <button className='bg-blue-900 rounded-lg text-center p-1 font-bold'>Learn more</button>
                  </div>
              </div>
            </div>
        </div>
  )
}

  