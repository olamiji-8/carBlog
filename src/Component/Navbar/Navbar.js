import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav className="bg-[#232536] flex justify-between items-center px-8 py-4">
          <Link to="/">
            <div className="text-white text-2xl font-bold">LOGO</div>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/blog" className="text-white">
              Blogs
            </Link>
            <Link to="/about" className="text-white">
              About
            </Link>
            <Link to="/contact" className="text-white">
              Contact Us
            </Link>
            <Link to="/subscribe">
              <button className="bg-white text-black px-4 py-2 rounded-md">
                Subscribe
              </button>
            </Link>
          </div>
        </nav>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <nav className="bg-[#232536] flex justify-between items-center px-8 py-4">
          <Link to="/">
            <div className="text-white text-2xl font-bold">LOGO</div>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none"
          >
            {showMenu ? (
              // Close icon when menu is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </nav>
      )}

      {/* Mobile Menu */}
      {isMobile && showMenu && (
        <div className="md:hidden flex flex-col space-y-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/blog" className="text-white">
            Blogs
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/contact" className="text-white">
            Contact Us
          </Link>
          <Link to="/subscribe">
            <button className="bg-white text-black px-4 py-2 rounded-md">
              Subscribe
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
