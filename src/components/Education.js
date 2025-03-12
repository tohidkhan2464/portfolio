// components/Education.js
import React from "react";
import { BookOpen, Award } from "lucide-react";

const Education = ({ darkMode }) => {
  const educationData = {
    degree: "Bachelors in Artificial Intelligence & Data Science",
    institution: "College of Technology and Engineering, Udaipur",
    period: "Nov 2021 – Jun 2025",
    grade: "OGPA: 7.38/10",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Distributed Systems",
      "Computer Networking",
    ],
  };

  const certifications = [
    "Python Programming - HDLC Technologies",
    "Web Development - Udemy",
    "IBM SkillsBuild Certification",
    "Bharat Intern Certificate",
    "freeCodeCamp Certificate",
    "Internship Certificate - Brain Matrix",
  ];

  return (
    <section
      id="education"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div
            className={`h-1 w-20 mx-auto rounded-full ${
              darkMode ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Education */}
          <div className="md:w-1/2">
            <div
              className={`p-6 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg mr-4 ${
                    darkMode
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold">
                  {educationData.degree}
                </h4>
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {educationData.institution}
                </p>
                <div className="flex items-center mt-2 mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {educationData.period}
                  </span>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ml-2 ${
                      darkMode
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {educationData.grade}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {educationData.courses.map((course, index) => (
                    <div key={index} className="flex items-center">
                      <span
                        className={`mr-2 block w-1.5 h-1.5 rounded-full ${
                          darkMode ? "bg-blue-400" : "bg-blue-600"
                        }`}
                      ></span>
                      <span
                        className={`${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Leadership */}
            <div
              className={`mt-6 p-6 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                Leadership & Activities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span
                    className={`mr-2 mt-1.5 block w-1.5 h-1.5 rounded-full ${
                      darkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <strong>Club Lead, Robotics Club (CTAE)</strong> – Mentored
                    100+ students, organized AI & robotics workshops.
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className={`mr-2 mt-1.5 block w-1.5 h-1.5 rounded-full ${
                      darkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <strong>Volunteer, Scouts & NCC</strong> – Contributed to
                    community service and leadership activities.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:w-1/2">
            <div
              className={`p-6 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg mr-4 ${
                    darkMode
                      ? "bg-green-900/30 text-green-400"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-md mr-3 ${
                          darkMode ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        <Award
                          size={16}
                          className={
                            darkMode ? "text-green-400" : "text-green-600"
                          }
                        />
                      </div>
                      <span>{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
