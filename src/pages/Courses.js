import React from 'react';

export default function Courses() {
  const courses = [
    { id: 1, title: "Mathematics", description: "A-Level Mathematics course covering all essential topics and practice exercises." },
    { id: 2, title: "Physics", description: "Comprehensive A-Level Physics course with interactive lessons and practical examples." },
    { id: 3, title: "Chemistry", description: "Learn A-Level Chemistry concepts with clear explanations and exercises." },
    { id: 4, title: "Biology", description: "Complete A-Level Biology course with detailed diagrams and experiments." },
    { id: 5, title: "English", description: "A-Level English Language & Literature course to boost comprehension and writing skills." },
  ];

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded shadow p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
