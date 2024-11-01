// src/components/Projects.js
import React, { useState, useEffect } from 'react';

// Sample project data with images



const Projects = () => {
  const [projects, setProjects] = useState( [
    {
      name: 'Project 1',
      description: 'A description of project 1.',
      tech: 'React, Tailwind',
      image: '/path/to/image1.jpg',  // Replace with the actual path or URL
      link: '#',
    },
    {
      name: 'Project 2',
      description: 'A description of project 2.',
      tech: 'Next.js, Node.js',
      image: '/path/to/image2.jpg',
      link: '#',
    },
  ]
  
  );
  useEffect(() => {
    fetch("https://momoduwealth.com.ng/api/user/view_projects", {
        method:"post"
    })
    .then((dat) => {
        return dat.json();
    })
    .then((data) => {
        console.log(data)
        setProjects(data)
    })
    
}, [])
var file_path = "https://momoduwealth.com.ng/uploads/";


  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={file_path+project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-800 font-semibold mb-4">{project.tech}</p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
} 
  export default Projects;
  