// components/Experience.js
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Full-Stack Developer (In-house Training)',
      company: 'CTAE, Udaipur',
      period: 'Jan 2025 – Present',
      description: [
        'Developed a web application for chemists and stockists to track inventory in real-time, improving operational efficiency.',
        'Enhanced chemists dashboard, enabling seamless access to sales reports and predictive analytics.',
        'Integrated third-party software for automated voucher and journal entries, reducing manual workload.',
      ],
      techStack: 'React.js, TypeScript, FastAPI, MongoDB, Python',
    },
    {
      title: 'Software Developer Intern',
      company: 'Brain Matrix Solutions',
      period: 'June 2024 – Sept 2024',
      description: [
        'Engineered an auction platform for mobile numbers and vehicle registrations, improving user interaction by 20%.',
        'Revamped TheGiftsConnect web app, leading to an 80% boost in customer engagement.',
        'Designed a customer dashboard for efficient order tracking and improved user experience.',
      ],
      techStack: 'Flutter, PHP, Dart, WordPress, WooCommerce, SQL',
    },
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-blue-500"></div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 md:pr-8 md:pl-8 pl-8">
                  <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</p>
                      </div>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                      {exp.period}
                    </div>
                    <ul className="mb-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 mt-1.5 block w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.split(', ').map((tech, i) => (
                          <span key={i} className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-0 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;