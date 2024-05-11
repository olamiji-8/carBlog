import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 text-center">
              <p className="text-gray-400 mb-6">
                We are a team of passionate individuals dedicated to providing exceptional service and creating innovative solutions for our clients. With years of experience and a commitment to excellence, we strive to exceed expectations and deliver results that make a difference.
              </p>
              <p className="text-gray-400">
                Our mission is to empower businesses and individuals to achieve their goals through cutting-edge technology and personalized support. We believe in the power of collaboration and the importance of building strong relationships with our clients.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Team Member Cards */}
              <div className="bg-white text-gray-900 rounded-lg p-6 flex flex-col items-center">
                <img src="team_member_1.jpg" alt="Team Member 1" className="rounded-full w-32 h-32 mb-4" />
                <h4 className="text-xl font-semibold mb-2">John Doe</h4>
                <p className="text-gray-600">Software Engineer</p>
              </div>
              <div className="bg-white text-gray-900 rounded-lg p-6 flex flex-col items-center">
                <img src="team_member_2.jpg" alt="Team Member 2" className="rounded-full w-32 h-32 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Jane Smith</h4>
                <p className="text-gray-600">UX Designer</p>
              </div>
              <div className="bg-white text-gray-900 rounded-lg p-6 flex flex-col items-center">
                <img src="team_member_3.jpg" alt="Team Member 3" className="rounded-full w-32 h-32 mb-4" />
                <h4 className="text-xl font-semibold mb-2">David Brown</h4>
                <p className="text-gray-600">Project Manager</p>
              </div>
              <div className="bg-white text-gray-900 rounded-lg p-6 flex flex-col items-center">
                <img src="team_member_4.jpg" alt="Team Member 4" className="rounded-full w-32 h-32 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Emily Johnson</h4>
                <p className="text-gray-600">Marketing Specialist</p>
              </div>
              {/* Add more team members here */}
            </div>
          </div>
          <div className="mt-16 text-center bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-black">Our Services</h3>
            <p className="text-gray-800 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales nunc vitae eros consectetur, quis ultricies justo lacinia. Integer aliquet sapien et consectetur dapibus. In pretium eleifend dui, eget tempor turpis sodales et. Quisque tempor metus vel magna hendrerit, vel facilisis metus fermentum. Nam vehicula orci eu ante laoreet, quis congue turpis bibendum.
            </p>
            <p className="text-gray-800 mb-6">
              Fusce nec ligula in libero congue congue nec sit amet nisl. Cras nec odio in risus facilisis volutpat. Proin scelerisque auctor est, sit amet faucibus libero vulputate sit amet. Curabitur volutpat eget nunc id sodales. Mauris malesuada euismod neque, id commodo risus feugiat et.
            </p>
            <p className="text-gray-800 mb-6">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis tellus vehicula, faucibus lectus vitae, tincidunt velit. Fusce a augue nec ligula luctus iaculis vel eu erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
