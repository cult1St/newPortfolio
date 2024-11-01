// src/components/Skills.js
import React, { useState, useEffect } from 'react';



const Skills = () => {

  const [skills, setSkills] = useState( [
    { name: 'HTML', img: '/icons/html.png' },
    { name: 'CSS', img: '/icons/css.png' },
    { name: 'JavaScript', img: '/icons/javascript.png' },
    { name: 'React', img: '/icons/react.png' },
    { name: 'Next.js', img: '/icons/nextjs.png' },
    { name: 'Node.js', img: '/icons/nodejs.png' },
    { name: 'Tailwind CSS', img: '/icons/tailwind.png' },
    { name: 'Bootstrap', img: '/icons/bootstrap.png' },
    { name: 'PHP', img: '/icons/php.png' },
    { name: 'Laravel', img: '/icons/laravel.png' },
  ])
  useEffect(() => {
    fetch("https://momoduwealth.com.ng/api/user/view_skills", {
        method:"post"
    })
    .then((dat) => {
        return dat.json();
    })
    .then((data) => {
        console.log(data)
        setSkills(data)
    })
    
}, [])
var file_path = "https://momoduwealth.com.ng/uploads/";


  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={file_path+skill.image}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
