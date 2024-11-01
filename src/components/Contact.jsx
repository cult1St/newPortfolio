// src/components/Contact.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formdata, setFormdata] = useState({
    fullname:'',
    email:'',
    phone:'',
    message:''
  })
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormdata({
      ...formdata, [name]:value
    })
    console.log(formdata)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
   try {
    fetch("https://momoduwealth.com.ng/api/user/send_message", {
      method:"post",
      body:JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
  })
  .then((dat) => {
      return dat.json();
  })
  .then((data) => {
      console.log(data)
      setLoading(false);
      if(data.status == true){
        Swal.fire({
          icon:"success",
          title:"Success!",
          text:data.message
        });
        setFormdata({
          fullname:'',
          email:'',
          phone:'',
          message:''
        })
      }else{
        Swal.fire({
          icon:"error",
          title:"Error!",
          text:data.message
        });
      }
  })
   } catch (error) {
     
    Swal.fire({
      title:"Error!",
      text:error,
      icon:'error'
    })
   }
  }

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
          <input 
           type="text" 
           name='fullname' 
           placeholder="Name" 
           onChange={handleChange}
           value={formdata.fullname}
           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input 
          type="email"
           name='email'
            placeholder="Email"
            onChange={handleChange}
           value={formdata.email}
             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input 
          type="tel" 
          name='phone' 
          placeholder="Phone"
          onChange={handleChange}
           value={formdata.phone} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea 
          name='message'
          placeholder="Message" 
          rows="5" 
          onChange={handleChange}
           value={formdata.message}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button 
          type="submit" 
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"> {loading && (
            <div className="flex justify-center items-center mt-4">
              <div className="w-6 h-6 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
            </div>
          ) || ("Send Message")}</button>
          
        </form>
      </div>
    </section>
  );
  
}
export default Contact;
