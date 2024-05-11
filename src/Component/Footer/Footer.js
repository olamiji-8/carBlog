import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200); // Adjust breakpoint as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Footer content for desktop view
  const desktopFooter = (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex md:flex-row justify-between items-center">
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-6 group">
            <h2 className="text-3xl font-bold mb-2">LOGO</h2>
            <p className="text-gray-400 mb-2">
              Finstreet 118 2561 <br />
              abctown
            </p>
          </div>
          <div className="flex flex-col space-y-6 group">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6 group">
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-2">Subscribe to our newsletter to get the latest updates and news.</p>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-600 transition duration-300">
                <span>Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 group">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 mb-2">
              example@femail.com <br />
              001 21345 442
            </p>
            <p className="text-gray-400">Finstreet 118 2561 abctown</p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8">
        <p className="text-center text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );

  // Footer content for mobile view
  const mobileFooter = (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col justify-between items-center">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-6 group">
            <h2 className="text-3xl font-bold mb-2">LOGO</h2>
            <p className="text-gray-400 mb-2">
              Finstreet 118 2561 <br />
              abctown
            </p>
          </div>
          <div className="flex flex-col space-y-6 group">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6 group">
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-2">Subscribe to our newsletter to get the latest updates and news.</p>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-600 transition duration-300">
                <span>Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 group">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 mb-2">
              example@femail.com <br />
              001 21345 442
            </p>
            <p className="text-gray-400">Finstreet 118 2561 abctown</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return isMobile ? mobileFooter : desktopFooter;
};

export default Footer;
