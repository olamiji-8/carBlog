import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="flex space-x-8">
          <span>Home</span>
          <span>Blog</span>
          <span>About us</span>
          <span>Contact us</span>
          <span>Privacy Policy</span>
        </div>
      </nav>
      <div className="max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Subscribe to our news letter to get latest updates and news</h1>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="example@email.com"
            className="py-2 px-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-red-500 text-white px-6 py-3 rounded-md flex items-center space-x-2">
            <span>Subscribe</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-center text-gray-400 mb-8">
        <p>Finstreet 118 2561 abctown</p>
        <p>example@femail.com 001 21345 442</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;