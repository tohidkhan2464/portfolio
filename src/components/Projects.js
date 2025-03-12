// components/Projects.js
import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';
import project4 from '../assets/Project4.png';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Drishti Docs',
      description: 'Intelligent Document Interaction Platform with integrated voice & text search for quick document retrieval',
      features: [
        'MERN stack web application with voice & text search',
        'Automated billing analysis and report generation',
        'Document processing workflow optimization'
      ],
      techStack: ['React.js', 'Material-UI', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js'],
      image: project1,
      github: '#',
      live: '#'
    },
    {
      title: 'StudyNotion',
      description: 'E-learning platform that improved interaction and course accessibility by 70%',
      features: [
        'Complete learning management system',
        'Email notifications (Nodemailer) increased engagement by 50%',
        'Responsive design for all devices'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: project2,
      github: 'https://github.com/tohidkhan2464/studynotion',
      live: 'https://studynotion-drab.vercel.app/'
    },
    {
      title: 'Raqamak – Auction Platform',
      description: 'Simplified auction web app, resulting in a 30% increase in user traffic',
      features: [
        'Real-time bidding system',
        'Custom error-handling widget',
        'User-friendly auction management'
      ],
      techStack: ['React.js', 'Firebase', 'MongoDB'],
      image: project3,
      github: 'https://github.com/tohidkhan2464/AuctionAp-main',
      live: null
    },
    {
      title: 'Campus Connect',
      description: 'Social Media Platform for Colleges with real-time messaging',
      features: [
        'Real-time messaging and broadcasting',
        'Profile management for students and professors',
        'Enhanced error handling and user interactions'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: project4,
      github: 'https://github.com/tohidkhan2464/campus-connect',
      live: 'https://campus-connect-324.vercel.app/'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 2;
  const maxIndex = Math.ceil(projects.length / projectsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex(current => (current < maxIndex ? current + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex(current => (current > 0 ? current - 1 : maxIndex));
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-4">
                  <div className={`h-full rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className={`mr-2 mt-1.5 block w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a 
                          href={project.github} 
                          className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          <span>Github</span>
                        </a>
                        {project.live && (
                          <a 
                            href={project.live} 
                            className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className={`absolute top-1/2 -translate-y-1/2 left-0 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide} 
            className={`absolute top-1/2 -translate-y-1/2 right-0 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? (darkMode ? 'bg-blue-500' : 'bg-blue-600') 
                  : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;