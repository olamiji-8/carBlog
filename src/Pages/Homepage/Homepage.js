import React, { useState, useEffect } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from "../../Component/Footer/Footer";
import TestimonialSlider from '../../Component/Testimonial/Testimonial';
import Card from '../../Component/Card/Card';

const LoadingCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg mb-4 mx-4 animate-pulse" style={{ width: "400px", height: "420px" }}>
      <div className="bg-gray-200 h-60 w-full rounded-t-lg"></div>
      <div className="p-4">
        <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-200 h-4 w-1/2 mb-2"></div>
        <div className="bg-gray-200 h-4 w-3/4 mb-4"></div>
        <div className="bg-gray-200 h-8 w-1/2"></div>
      </div>
    </div>
  );
};

const Homepage = () => {
  const [blogData, setBlogData] = useState(null);
  const [trendingBlogData, setTrendingBlogData] = useState([]);
  const [newTechnologyData, setNewTechnologyData] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('https://carblog.onrender.com/blog/0f82d8c7-b0af-41b6-8b2e-e7e2e303858b');
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    const fetchTrendingBlogData = async () => {
      try {
        const response = await fetch('https://carblog.onrender.com/blog');
        const data = await response.json();
        setTrendingBlogData(data);
      } catch (error) {
        console.error('Error fetching trending blog data:', error);
      }
    };

    const fetchNewTechnologyData = async () => {
      try {
        const response = await fetch('https://carblog.onrender.com/blog');
        const data = await response.json();
        setNewTechnologyData(data);
      } catch (error) {
        console.error('Error fetching new technology data:', error);
      }
    };

    fetchBlogData();
    fetchTrendingBlogData();
    fetchNewTechnologyData();
  }, []);

  const handleBlogClick = (blogId) => {
    setSelectedBlogId(blogId);
  };

  const NewTechnologyCard = ({ blog }) => {
    return (
      <div className="border border-gray-300 rounded-lg mb-4 mx-4" style={{ width: "400px" }}>
        <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
          <p className="text-sm text-gray-600 mb-2">By {blog.profileName} | {blog.date}</p>
          <p className="text-sm">{blog.description}</p>
          <button className="bg-[#FF5959] text-white px-4 py-2 rounded-md mt-2">Read More</button>
        </div>
      </div>
    );
  };

  return (
    <div className=" group bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-2">
        <div className="max-w-4xl w-full px-6 py-12"> {/* Added padding */}
          <h1 className="text-6xl font-bold mb-4">Your Journey</h1>
          <h1 className="text-6xl font-bold mb-4">Your Car</h1>
          <h1 className="text-6xl font-bold mb-8">Your Way</h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel quismod aliquam. Amet ultrices neque quoque consectetur purus phasellus. Ullamcorper lorem montes verius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames diam eget.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md flex items-center space-x-2">
            <span>Subscribe</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-white text-black py-16 min-h-[500px]">
        <div className="max-w-4xl mx-10 px-2 flex justify-between w-full">
          <div className="w-3/4">
            <div className="mb-8">
              <span className="text-2xl font-bold">Latest</span>
            </div>
            {blogData ? (
              <div className="w-full">
                <img src={blogData.image} alt="Blog" className="w-full h-auto mt-4" />
                <h2 className="text-3xl font-bold mb-4">{blogData.title}</h2>
                <p className="text-lg mb-4">{blogData.description}</p>
                <button className="bg-[#FF5959] text-white px-4 py-2 rounded-md mb-4">Read More</button>
                <p className="text-sm mb-4">
                  By {blogData.profileName} | {blogData.date}
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="max-w-4xl mx-1 px-2 flex justify-between w-full">
          <div className="w-full">
            <div className="mb-8">
              <span className="text-2xl font-bold">New Technology</span>
            </div>
            <div className="flex overflow-x-auto scroll-container" style={{ width: '90vw' }}>
              {newTechnologyData.length > 0 ? (
                <div className="flex" style={{ minWidth: `${newTechnologyData.length * 400}px` }}>
                  {newTechnologyData.map((blog) => (
                    <NewTechnologyCard key={blog.id} blog={blog} />
                  ))}
                </div>
              ) : (
                <LoadingCard />
              )}
            </div>
          </div>
        </div>
        <div className="bg-[#232536] mt-8"> {/* Add margin-top class */}
          <TestimonialSlider />
        </div>

        <div>
          <Card/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
