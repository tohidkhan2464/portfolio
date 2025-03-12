// components/Skills.js
import React from 'react';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'Dart', level: 70 },
        { name: 'PHP', level: 65 },
      ]
    },
    {
      category: 'Front-End',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Material-UI', level: 85 },
        { name: 'Flutter', level: 75 },
      ]
    },
    {
      category: 'Back-End',
      skills: [
        { name: 'FastAPI', level: 85 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'SQL', level: 85 },
      ]
    },
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-full rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'Docker', 'REST APIs', 'Debugging', 'Agile Development', 'Cloud Deployment'].map((tool, index) => (
              <span 
                key={index} 
                className={`px-4 py-2 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;