import React from 'react';
import Testimonials from 'react-testimonials';


function Testimonial() {
  
  const img1 = ''; // Put the Image URLs
  const img2 = ''; // Put the Image URLs
  const img3 = ''; // Put the Image URLs
  const img4 = ''; // Put the Image URLs
  const img5 = ''; // Put the Image URLs
  const img6 = ''; // Put the Image URLs

  const review1=[img1, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review2=[img2, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review3=[img3, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review4=[img4, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review5=[img5, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review6=[img6, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  
  const items=[review1,review2,review3,review4,review5,review6];

  return (
    <div className="App">
      <Testimonials items={items} />
    </div>
  );
}

export default Testimonial;