import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

const SingleBlog = () => {
  const { uuid } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch data for the specific post using the UUID
    fetch(`https://carblog.onrender.com/posts/${uuid}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [uuid]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {/* Other post details */}
      <Footer />
    </div>
  );
};

export default SingleBlog;
