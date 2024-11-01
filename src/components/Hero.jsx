// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Hero = () => {
    const [data, setData] = useState([]);
    const [userinfo, setUserinfo] = useState([]);
  try {
    useEffect(() => {
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
      fetch("https://momoduwealth.com.ng/api/user/get_details", {
          method:"post"
      })
      .then((dat) => {
          return dat.json();
      })
      .then((data) => {
          console.log(data)
          setUserinfo(data)
      })
  }, [])
  } catch (error) {
    
    Swal.fire({
      title:"Error!",
      text:error,
      icon:'error'
    })
  }
    var file_path = "https://momoduwealth.com.ng/uploads/";
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <img
          src={file_path+userinfo.image} // Replace with the path to your image
          alt="Momodu Wealth"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm {data.name}</h1>
          <p className="text-xl mb-6">Full Stack Developer</p>
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
