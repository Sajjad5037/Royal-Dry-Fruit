import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Strip */}
      <div className="bg-primary text-white text-sm py-3 px-4 flex justify-between items-center">
        {/* Left side: Phone number with icon */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2.5a1 1 0 011 1v2.5a1 1 0 01-.293.707l-1.414 1.414a16 16 0 006.586 6.586l1.414-1.414A1 1 0 0117.5 15H20a1 1 0 011 1V20a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z"
            />
          </svg>
          <a href="tel:+923255588823" className="hover:underline font-medium">
            +92 325 5588823
          </a>
        </div>

        {/* Right side: Social media links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.62 9.87v-6.99h-2.35V12h2.35V9.65c0-2.32 1.37-3.61 3.48-3.61.99 0 2.02.18 2.02.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42V12h2.52l-.4 2.88h-2.12v6.99A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.05 9.05 0 01-2.88 1.1 4.52 4.52 0 00-7.73 4.12 12.85 12.85 0 01-9.32-4.73s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
            </svg>
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 6.2a2.8 2.8 0 00-1.97-1.98C19.62 4 12 4 12 4s-7.62 0-9.53.22a2.8 2.8 0 00-1.97 1.98A29.64 29.64 0 000 12a29.64 29.64 0 00.5 5.8 2.8 2.8 0 001.97 1.98C4.38 20 12 20 12 20s7.62 0 9.53-.22a2.8 2.8 0 001.97-1.98A29.64 29.64 0 0024 12a29.64 29.64 0 00-.5-5.8zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Desktop Menu */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link to="/">
                <img
                  src="/logo.jpg"
                  alt="ANZ-WAY Logo"
                  className="h-16 w-auto"
                />
              </Link>

              {/* Desktop Menu */}
              
              <ul className="hidden md:flex space-x-6 items-center font-poppins">
                <li>
                  <Link
                    to="/"
                    className="px-3 py-2 rounded hover:text-primary-dark font-semibold transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="px-3 py-2 rounded hover:text-primary-dark font-semibold transition-colors duration-300"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="px-3 py-2 rounded hover:text-primary-dark font-semibold transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="px-3 py-2 rounded hover:text-primary-dark font-semibold transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Why_Anz_Way"
                    className="px-3 py-2 rounded hover:text-primary-dark font-semibold transition-colors duration-300"
                  >
                    Why ANZWAY
                  </Link>
                </li>
              </ul>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-md transition-all duration-300">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 rounded hover:bg-gray-100 font-bold transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="block px-3 py-2 rounded hover:bg-gray-100 font-bold transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-3 py-2 rounded hover:bg-gray-100 font-bold transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded hover:bg-gray-100 font-bold transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
