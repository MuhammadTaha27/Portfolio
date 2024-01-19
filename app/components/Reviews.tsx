import React from 'react'
const Reviews = () => {
    return (
      <section className=" py-12">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
  
          {/* Reviews */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-bold mb-4">Review Title 1</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
  
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-bold mb-4">Review Title 2</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
  
       
  
          {/* Descriptions */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-bold mb-4">Description Title 1</p>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
  
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-bold mb-4">Description Title 2</p>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
  
         
  
        </div>
      </section>
    );
  };
  
  export default Reviews;