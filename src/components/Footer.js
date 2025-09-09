import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Royal Dry Fruits. All rights reserved.
        </p>

        {/* Right side - Social links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            Twitter
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
