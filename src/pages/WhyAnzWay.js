import React from 'react';

export default function WhyAnzWay() {
  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Why Choose ANZ WAY?</h1>
        <p className="text-gray-700 text-center mb-12">
          ANZ WAY is your trusted partner for A-Level and O-Level tuition, providing expert guidance, personalized learning, and proven results.
        </p>

        <div className="bg-white p-8 rounded shadow-md space-y-8">
          {/* Feature 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Expert Tutors</h2>
            <p className="text-gray-700">
              Our highly qualified tutors specialize in A-Level and O-Level subjects, ensuring students receive accurate guidance and clear explanations tailored to the syllabus.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Personalized Learning</h2>
            <p className="text-gray-700">
              Every student is unique. ANZ WAY adapts teaching methods according to the student’s learning pace, strengths, and areas for improvement, maximizing their exam potential.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Past Paper Practice</h2>
            <p className="text-gray-700">
              We focus on past papers and exam-style questions, helping students understand patterns, practice time management, and build confidence for real exams.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Progress Tracking</h2>
            <p className="text-gray-700">
              Students receive continuous feedback and performance reports, so parents and students can monitor improvement and identify areas needing more focus.
            </p>
          </div>

          {/* Feature 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Flexible & Supportive</h2>
            <p className="text-gray-700">
              ANZ WAY offers flexible schedules, interactive sessions, and prompt support to ensure students can learn efficiently without stress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
