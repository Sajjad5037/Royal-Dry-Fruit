import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Royal Dry Fruits. All rights reserved.
        </p>

        {/* Right side - Social links + WhatsApp */}
        <div className="flex space-x-4 mt-4 md:mt-0 items-center">
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
          {/* WhatsApp Chat Button with Logo */}
          <a
            href="https://wa.me/923001234567" // replace with your phone number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 px-3 py-1 rounded font-semibold"
          >
            {/* WhatsApp SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path d="M380.9 97.1C339-10.4 228-44.1 135.3 6.6-27.6 56.5-29.5 238.6 72.3 323.7L32 480l158.1-40.7c86 62 266.3 53.7 316.2-109.2 50.1-163.7-25.5-353.2-125.4-332.9zm-51.5 279.5c-13.8 38.2-60.5 70.8-95 75.4-26.3 3.6-62.3 4.1-89.5-11.3-7.9-4.2-18.7-7.9-23.2-15.8-4.1-7.1-1.2-15.1.4-22.5 2-8.8 5.6-17.1 8.6-25.7 3-8.4-1.1-17.4-7.1-23.3-11.6-11.2-28.1-19.8-41.1-28.3-5.7-3.7-12.4-8.1-11.3-15.7 1-6.6 7.9-9.2 13.4-11.4 9.7-3.6 18.3-8.7 27.5-13 10.8-5 21.8-10.1 31.8-16.1 10.4-6.3 20.5-12.9 30.3-19.8 7.3-5 14.1-10.7 22.1-14.4 9.2-4.3 19.5-4.1 29-1.6 14.3 3.5 27.7 10.7 40.5 18 12.4 7 23.7 16.3 32.2 28.4 4.5 6.2 8 13.1 9.6 20.4 3.1 14.7 1.1 29.7-3.5 43.9z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
