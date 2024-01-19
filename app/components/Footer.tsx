import React from 'react'

const Footer = () => {
  return (
          <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">Connect with Me</h3>
          <div className="flex mt-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4">
              LinkedIn
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4">
              Upwork
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4">
              Fiverr
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
        <div>
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer

