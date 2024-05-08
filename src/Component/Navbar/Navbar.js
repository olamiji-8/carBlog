import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4">
       <Link to="/"><div className="text-2xl font-bold">LOGO</div></Link> 
        <div className="flex space-x-8">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/blog" className="text-white">Blogs</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact Us</Link>
          <Link to="/subscribe">
            <button className="bg-white text-black px-4 py-2 rounded-md">Subscribe</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
