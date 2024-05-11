import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetching data from the provided API
    fetch('https://carblog.onrender.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      {/* Other content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.id} className="flex flex-col bg-gray-900 rounded-lg p-6">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.date} by {post.profileName}</p>
                <p className="text-gray-400 mb-4">{post.description.substring(0, 150)}...</p>
              </div>
              <Link to={`/posts/${post.id}`} className="text-red-500 hover:underline">Read Full Article</Link>
            </div>
          </div>
        ))}
      </div>
      {/* Other content */}
    </div>
  );
};

export default Blog;
