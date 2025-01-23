import React from 'react';

const Footer = () => {
  // Smooth scrolling function for Home
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <footer className="bg-gray-100 py-4 mt-56">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-4 text-gray-600 text-sm mb-4">
          <li>
            <button
              onClick={scrollToHome}
              className="hover:text-gray-800 focus:outline-none"
            >
              Home
            </button>
          </li>
          <li><a href="#school-profile" className="hover:text-gray-800">School Profile</a></li>
          <li><a href="#academics" className="hover:text-gray-800">Academics</a></li>
          <li><a href="#infrastructure" className="hover:text-gray-800">Infrastructure</a></li>
          <li><a href="#achievements" className="hover:text-gray-800">Achievements</a></li>
          <li><a href="#school-news" className="hover:text-gray-800">School News</a></li>
          <li><a href="#photo-gallery" className="hover:text-gray-800">Photo Gallery</a></li>
          <li><a href="#contact-us" className="hover:text-gray-800">Contact us</a></li>
        </ul>
        <p className="text-gray-500 text-xs">
          Copyrights © 2025. All rights reserved. Developed by Volt Studios
        </p>
      </div>
    </footer>
  );
};

export default Footer;
