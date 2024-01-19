import React from 'react'
import Image from 'next/image'

const projectsData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1.',
      imageUrl: '/images/project1.jpg', 
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2.',
      imageUrl: '/images/project2.jpg',
    },
    
  ];

const Projects = () => {
  return (
<div className="container mx-auto my-10">
     <h2 className="text-3xl font-semibold mb-6">Projects</h2> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-lg my-4">
            <Image src={project.imageUrl} width={500} height={500} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
