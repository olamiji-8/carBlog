import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
const Contacts = () => {
  return (
    <div>
   
      <Navbar/>
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="border-gray-300 border-solid border py-2 px-4 rounded-md w-full" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="border-gray-300 border-solid border py-2 px-4 rounded-md w-full" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" className="border-gray-300 border-solid border py-2 px-4 rounded-md w-full h-32 resize-none" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md mt-4">Send</button>
          </form>
        </div>
      </div>
    </div>
  <Footer/>

    
    </div>
  )
}

export default Contacts