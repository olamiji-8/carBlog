import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from "../../Component/Footer/Footer"

const Homepage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar/>

        <div className="flex-grow flex items-center justify-center px-8">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-4">Your Journey</h1>
          <h1 className="text-6xl font-bold mb-4">Your Car</h1>
          <h1 className="text-6xl font-bold mb-8">Ytour Way</h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel quismod aliquam. Amet ultrices neque quoque
            consectetur purus phasellus. Ullamcorper lorem montes verius amet vestibulum tellus facilisis consequat pretium. Et faucibus
            laoreet molestie diam semper fames diam eget.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md flex items-center space-x-2">
            <span>Subscribe</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage