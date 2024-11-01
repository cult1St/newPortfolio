// src/components/Header.js
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Header = () => {
  const [data, setData] = useState({
    name:"Momodu Wealth"
  })
  useEffect(() => {
    try {
      fetch("https://momoduwealth.com.ng/api/user/main_details", {
        method:"post"
    })
    .then((dat) => {
        return dat.json();
    })
    .then((data) => {
        console.log(data)
        setData(data)
    })
    } catch (error) {
      Swal.fire({
        title:"Error!",
        text:error,
        icon:'error'
      })
    }
   
}, [])

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">{data.name}</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-800 hover:text-blue-600">Projects</a>
          <a href="#skills" className="text-gray-800 hover:text-blue-600">Skills</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
