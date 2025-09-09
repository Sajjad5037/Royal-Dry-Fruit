import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Welcome to ANZWAY Academy
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Explore courses, learn new skills, and grow your career with us.
          </p>
          <Link
            to="/courses"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-primary text-white rounded-lg p-6 border-r-4 border-b-4 border-[#FD9C3D] hover:bg-[#FD9C3D] transition-colors duration-300 shadow-md hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Online Courses</h3>
              <p className="text-white">
                Access a variety of courses to learn at your own pace.
              </p>
            </div>



           <div className="bg-primary text-white rounded-lg p-6 border-r-4 border-b-4 border-[#FD9C3D] hover:bg-[#FD9C3D] transition-colors duration-300 shadow-md hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-white">
              Learn from industry experts and gain practical knowledge.
            </p>
          </div>
          
          <div className="bg-primary text-white rounded-lg p-6 border-r-4 border-b-4 border-[#FD9C3D] hover:bg-[#FD9C3D] transition-colors duration-300 shadow-md hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <p className="text-white">
              Earn certificates to showcase your skills and achievements.
            </p>
          </div>


          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Learning Today!</h2>
          <p className="mb-8">
            Join thousands of students who are building their careers with us.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
